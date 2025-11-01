"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import toast from "react-hot-toast";
import { Briefcase, UserCircle, Loader2Icon } from "lucide-react";
import LoaderUI from "@/components/LoaderUI";

function OnboardingPage() {
  const router = useRouter();
  const { user } = useUser();
  const [selectedRole, setSelectedRole] = useState<"interviewer" | "candidate" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userData = useQuery(api.users.getUserByClerkId, {
    clerkId: user?.id || "",
  });
  const updateUserRole = useMutation(api.users.updateUserRole);

  // If user data is loading, show loader
  if (userData === undefined) return <LoaderUI />;

  // If user already has a role, redirect to home
  if (userData?.role) {
    router.push("/");
    return <LoaderUI />;
  }

  const handleRoleSelection = async () => {
    if (!selectedRole || !user) return;

    setIsSubmitting(true);
    try {
      await updateUserRole({
        clerkId: user.id,
        role: selectedRole,
      });
      
      toast.success(`Welcome! You're registered as ${selectedRole === "interviewer" ? "an Interviewer" : "a Candidate"}`);
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to set role. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent mb-2">
            Welcome to Orivion
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose your role to get started with technical interviews
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Interviewer Card */}
          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedRole === "interviewer"
                ? "ring-2 ring-primary shadow-lg scale-[1.02]"
                : "hover:border-primary/50"
            }`}
            onClick={() => setSelectedRole("interviewer")}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Interviewer</CardTitle>
              </div>
              <CardDescription className="text-base">
                Conduct technical interviews and evaluate candidates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Schedule and manage interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Start instant video calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Access interview recordings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Provide ratings and feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>View dashboard and analytics</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Candidate Card */}
          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedRole === "candidate"
                ? "ring-2 ring-primary shadow-lg scale-[1.02]"
                : "hover:border-primary/50"
            }`}
            onClick={() => setSelectedRole("candidate")}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <UserCircle className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-2xl">Candidate</CardTitle>
              </div>
              <CardDescription className="text-base">
                Join interviews and showcase your technical skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span>View your scheduled interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span>Join video interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span>Code in real-time with interviewers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span>Practice with coding problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span>Receive interview feedback</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleRoleSelection}
            disabled={!selectedRole || isSubmitting}
            className="min-w-[200px]"
          >
            {isSubmitting ? (
              <>
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                Setting up...
              </>
            ) : (
              <>Continue as {selectedRole === "interviewer" ? "Interviewer" : selectedRole === "candidate" ? "Candidate" : "..."}</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OnboardingPage;
