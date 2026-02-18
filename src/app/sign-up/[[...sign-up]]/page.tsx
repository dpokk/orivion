import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background landing-bg relative overflow-hidden px-4">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full -z-10" />

      <div className="w-full max-w-md relative z-10">
        <SignUp
          appearance={clerkAppearance}
          signInUrl="/sign-in"
          fallbackRedirectUrl="/"
        />
      </div>
    </div>
  );
}
