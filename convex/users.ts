import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const syncUser = mutation({ //Mutation is a server-side function that can modify data
  args: {
    name: v.string(), //runtime type checking
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId)) //query the users table to find a user with the same clerkId
      .first();

    if (existingUser) return; 

    // This means the user doesn't exist, create a new user in the database
    return await ctx.db.insert("users", {
      ...args,
      role: "candidate",
    });
  },
});

// This is a server-side query function to fetch all users from the database
export const getUsers = query({ 
    handler: async (ctx) => { 
      // ctx provides access to the database and authentication context
      const identity = await ctx.auth.getUserIdentity(); 
      if (!identity) throw new Error("User is not authenticated");
  
      const users = await ctx.db.query("users").collect();
  
      return users;
    },
  });
  
  export const getUserByClerkId = query({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
      const user = await ctx.db //Executes downwards one by one
        .query("users")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId)) //Only returns the first user with the matching clerkId after it is satisfied
        .first();
  
      return user;
    },
  });


