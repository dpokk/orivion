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
    // Don't set role initially, user will select role on onboarding page
    return await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      clerkId: args.clerkId,
      image: args.image,
      // role is not set, will be added during onboarding
    });
  },
});

// This mutation updates a user's role (for onboarding)
export const updateUserRole = mutation({
  args: {
    clerkId: v.string(),
    role: v.union(v.literal("candidate"), v.literal("interviewer")),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User is not authenticated");

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!user) throw new Error("User not found");

    // Update the user's role
    await ctx.db.patch(user._id, {
      role: args.role,
    });

    return user._id;
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


