"use client";

import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "@/actions/stream.actions";


const StreamVideoProvider = ({ children }: { children: ReactNode }) => {

  const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  // we initialize the StreamVideoClient here
  useEffect(() => {
   
    if (!isLoaded || !user) return;

    //Create an instance of StreamVideoClient that will establish WebSocket connection by connecting a user.
    const client = new StreamVideoClient({
      apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!, 
      user: {
        id: user.id,
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.id, // Fallback to user ID if name is unavailable
        image: user.imageUrl, 
      },
      tokenProvider: streamTokenProvider, // Custom token provider function for Stream auth
    });

    // Save the client instance to state
    setStreamVideoClient(client);
  }, [user, isLoaded]); 

  if (!streamVideoClient) return <LoaderUI />;

  // Provide the initialized StreamVideo client to all children via context
  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
