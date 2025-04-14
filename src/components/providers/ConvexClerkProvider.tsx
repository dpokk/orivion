"use client";

//Wrapping my entire app with Clerk (for login/auth) and Convex (for database), so any child component can use them


import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string); //Used to send/receive data from your Convex backend.                                  

function ConvexClerkProvider({ children }: { children: React.ReactNode }) {
    return (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    );
  }
  
  export default ConvexClerkProvider;






