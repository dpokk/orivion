import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => { //ctx-context
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable");
    }

    // Clerk uses Svix under the hood to send secure webhooks. 
    // Since anyone can send requests to our /clerk-webhook endpoint, each webhook is signed using a secret.
    // Svix helps verify that the webhook is authentic and comes from Clerk.
    // Webhooks enable real-time updates by allowing external services to notify our app when events occur.
    // Clerk sends webhooks to communicate actions occuring in realtime
    // Gets the Clerk webhook svix headers from the incoming request
    const svix_id = request.headers.get("svix-id");
    const svix_signature = request.headers.get("svix-signature");
    const svix_timestamp = request.headers.get("svix-timestamp");

    if (!svix_id || !svix_signature || !svix_timestamp) {
      return new Response("No svix headers found", {
        status: 400,
      });
    }

    const payload = await request.json();
    const body = JSON.stringify(payload);

    // Creating a new Webhook instance using your secret key from Clerk
    // Creates an instance of a webhook verifier which knows how to decode and validate the webhook signature
    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    //This will verify the webhook request we are listening at the endpoint /clerk-webhook. 
    //
    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error occurred", { status: 400 });
    }

    const eventType = evt.type;
    // Creating a user in Clerk will trigger a user.created webhook. User being created is the first step of this entire process.
    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name, image_url } = evt.data; //destructing data from the event

      const email = email_addresses[0].email_address;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

    // Syncing database with clerk when a user is created
      try {
        await ctx.runMutation(api.users.syncUser, { // Calls a server-side Convex function to write data (syncuser)
          clerkId: id, //This passes the user data from Clerk into a Convex mutation.
          email,
          name,
          image: image_url,
        });
      } catch (error) {
        console.log("Error creating user:", error);
        return new Response("Error creating user", { status: 500 });
      }
    }

    return new Response("Webhook processed successfully", { status: 200 });
  }),
});

export default http;