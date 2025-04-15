import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

function EndCallButton() {
  const call = useCall();
  const router = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const updateInterviewStatus = useMutation(api.interviews.updateInterviewStatus);

  const interview = useQuery(api.interviews.getInterviewByStreamCallId, {
    streamCallId: call?.id || "",
  });

  // Do not render if call or interview data is not available yet
  if (!call || !interview) return null;

  // Check if the current user is the creator of the call
  const isMeetingOwner = localParticipant?.userId === call.state.createdBy?.id;

  // Only meeting owner should see the End Meeting button
  if (!isMeetingOwner) return null;

  const endCall = async () => {
    try {
      // End the call for all participants
      await call.endCall();

      // Update interview status in the backend
      await updateInterviewStatus({
        id: interview._id,
        status: "completed",
      });

      // Redirect to homepage
      router.push("/");

      toast.success("Meeting ended for everyone");
    } catch (error) {
      console.log(error);
      toast.error("Failed to end meeting");
    }
  };

  return (
    <Button variant={"destructive"} onClick={endCall}>
      End Meeting
    </Button>
  );
}

export default EndCallButton;
