import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

// Custom hook that provides actions related to meetings
const useMeetingActions = () => {
  const router = useRouter(); // Used to programmatically navigate to different routes
  const client = useStreamVideoClient(); // Accesses the Stream Video client instance

  // Function to create an instant video meeting
  const createInstantMeeting = async () => {
    if (!client) return; // Exit early if the Stream client isn't initialized

    try {
      const id = crypto.randomUUID(); // Generate a unique ID for the meeting
      const call = client.call("default", id); // Create a new call (meeting) with the generated ID

      // Try to create the meeting on the server with metadata
      await call.getOrCreate({
        data: {
          starts_at: new Date().toISOString(), // Set the start time to now
          custom: {
            description: "Instant Meeting", // Custom metadata (optional)
          },
        },
      });

      router.push(`/meeting/${call.id}`); // Navigate to the meeting page
      toast.success("Meeting Created"); // Show a success notification
    } catch (error) {
      console.error(error); // Log error for debugging
      toast.error("Failed to create meeting"); // Show an error notification
    }
  };

  // Function to join an existing meeting by its ID
  const joinMeeting = (callId: string) => {
    if (!client) {
      return toast.error("Failed to join meeting. Please try again."); // Notify if client isn't ready
    }
    router.push(`/meeting/${callId}`); // Navigate to the meeting page
  };

  // Return the functions to be used in other components
  return { createInstantMeeting, joinMeeting };
};

export default useMeetingActions;
