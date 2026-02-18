import { dark } from "@clerk/themes";

export const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: "#10b981", // emerald-500
    colorBackground: "#18181b", // zinc-950
    colorInputBackground: "#27272a", // zinc-800
    colorInputText: "white",
    colorText: "white",
    borderRadius: "0.5rem",
    fontFamily: "var(--font-geist-sans)",
  },
  layout: {
    socialButtonsPlacement: "bottom",
    logoPlacement: "none",
  } as const,
  elements: {
    card: "bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-2xl ",
    headerTitle: "text-foreground",
    headerSubtitle: "text-muted-foreground",
    socialButtonsBlockButton: "bg-zinc-800/50 border-white/5 hover:bg-zinc-800/80 text-white",
    formFieldLabel: "text-zinc-400",
    formFieldInput: "bg-zinc-950/50 border-white/10 text-white focus:border-emerald-500/50 focus:ring-emerald-500/20",
    footerActionLink: "text-emerald-500 hover:text-emerald-400",
    dividerLine: "bg-white/10",
    dividerText: "text-zinc-500",
  }
};
