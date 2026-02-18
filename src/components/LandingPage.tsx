"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
    Code2,
    Video,
    Mic,
    Calendar,
    Users,
    Layout,
    CheckCircle,
    Terminal,
    Play,
    Settings,
    ArrowRight,
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background landing-bg font-sans selection:bg-primary/20">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 text-lg font-medium transition-opacity hover:opacity-90"
                    >
                        <div className="bg-primary/10 p-1.5 rounded-lg ring-1 ring-primary/20">
                            <img
                                src="/orion-logo.png"
                                alt="Orivion"
                                className="h-6 w-6 object-contain"
                            />
                        </div>
                        <span className="font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Orivion
                        </span>
                    </Link>
                    <nav className="flex items-center gap-4">
                        <Link href="/sign-in" className="hidden sm:block">
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                                Sign in
                            </Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button size="sm" className="rounded-lg shadow-sm">
                                Get Started
                                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                            </Button>
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1 overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-24 pb-20 md:pt-18 md:pb-18 lg:pb-18 container-custom">
                    <div className="absolute top-0 z-[-1] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium ring-1 ring-primary/20 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            The Ultimate Technical Interview Platform
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
                            Technical Interviews, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                                Reimagined.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Conduct seamless video interviews with a powerful collaborative code editor.
                            Hire the best talent with a platform built for engineering teams.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link href="/sign-up">
                                <Button size="lg" className="h-12 px-8 rounded-full text-base shadow-lg shadow-primary/20">
                                    Start for Free
                                </Button>
                            </Link>
                            <Link href="/sign-in">
                                <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base glass-card hover:bg-muted/50">
                                    Live Demo
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mock Interface Code Editor */}
                    <div className="mt-20 relative mx-auto max-w-5xl">
                        <div className="rounded-xl border bg-background/50 backdrop-blur shadow-2xl overflow-hidden ring-1 ring-white/10">
                            <div className="flex items-center px-4 py-3 border-b bg-muted/50 gap-2">
                                <div className="flex gap-1.5 opacity-70">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-4 flex-1 flex justify-center">
                                    <div className="bg-background/80 rounded px-3 py-1 text-xs text-muted-foreground font-mono flex items-center gap-2">
                                        <Terminal className="w-3 h-3" />
                                        interview-session.tsx
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 h-[400px] overflow-hidden bg-zinc-950 text-zinc-300 font-mono text-sm leading-6">
                                {/* Editor Side */}
                                <div className="p-6 border-r border-white/5 overflow-hidden relative">
                                    <div className="absolute right-4 top-4 text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">TypeScript</div>
                                    <div className="space-y-1 opacity-90">
                                        <p><span className="text-purple-400">function</span> <span className="text-blue-400">twoSum</span>(nums: <span className="text-yellow-400">number[]</span>, target: <span className="text-yellow-400">number</span>) {'{'}</p>
                                        <p className="pl-4"><span className="text-purple-400">const</span> map = <span className="text-purple-400">new</span> <span className="text-yellow-400">Map</span>();</p>
                                        <p className="pl-4"><span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = 0; i &lt; nums.length; i++) {'{'}</p>
                                        <p className="pl-8"><span className="text-purple-400">const</span> complement = target - nums[i];</p>
                                        <p className="pl-8"><span className="text-purple-400">if</span> (map.has(complement)) {'{'}</p>
                                        <p className="pl-12"><span className="text-purple-400">return</span> [map.get(complement), i];</p>
                                        <p className="pl-8">{'}'}</p>
                                        <p className="pl-8">map.set(nums[i], i);</p>
                                        <p className="pl-4">{'}'}</p>
                                        <p>{'}'}</p>
                                        <p className="mt-4"><span className="text-emerald-400">// Output: [0, 1]</span></p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent" />
                                </div>

                                {/* Video Side (Mock) */}
                                <div className="relative bg-zinc-900 flex flex-col">
                                    <div className="flex-1 p-4 grid gap-4 grid-rows-2">
                                        {/* Mock Participant 1 */}
                                        <div className="relative bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
                                            <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-xs text-white backdrop-blur-sm">Interviewer (You)</div>
                                            <Users className="w-12 h-12 text-zinc-600" />
                                        </div>
                                        {/* Mock Participant 2 */}
                                        <div className="relative bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
                                            <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-xs text-white backdrop-blur-sm">Candidate</div>
                                            <Users className="w-12 h-12 text-zinc-600" />
                                        </div>
                                    </div>
                                    <div className="h-16 border-t border-white/10 flex items-center justify-center gap-4 bg-zinc-950">
                                        <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/30 cursor-pointer transition">
                                            <Mic className="w-5 h-5" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 cursor-pointer transition">
                                            <Video className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl -z-10" />
                    </div>
                </section>

                {/* Features - Alternating Sections */}
                <section className="py-12 space-y-24 container-custom">

                    {/* Feature 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium">
                                <Video className="w-4 h-4" />
                                HD Video Calling
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Crystal Clear Communication</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Don't compromise on video quality. Experience low-latency, HD video and crystal clear audio.
                                Screen sharing and recording capabilities are built right in, so you never miss a detail.
                            </p>
                            <ul className="space-y-3 pt-2">
                                {[
                                    "Latency-free video conferencing",
                                    "One-click screen sharing",
                                    "Automatic cloud recording"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 glass-card rounded-2xl p-2 md:p-6 ring-1 ring-border/50">
                            <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center border border-border/50 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5">
                                <Video className="w-20 h-20 text-muted-foreground/30" />
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="glass-card rounded-2xl p-2 md:p-6 ring-1 ring-border/50">
                            <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center border border-border/50 bg-gradient-to-tr from-emerald-500/5 via-transparent to-teal-500/5">
                                <Code2 className="w-20 h-20 text-muted-foreground/30" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                                <Code2 className="w-4 h-4" />
                                Real-time Collaboration
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Multi-Language Code Editor</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                A powerful code editor that supports over 10+ programming languages. Syntax highlighting,
                                autocomplete, and real-time cursor tracking make it feel like you're sitting next to the candidate.
                            </p>
                            <ul className="space-y-3 pt-2">
                                {[
                                    "Monaco Editor integration",
                                    "Support for JS, Python, Java, C++, and more",
                                    "Real-time cursor synchronization"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="w-5 h-5 text-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium">
                                <Layout className="w-4 h-4" />
                                Streamlined Workflow
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for Hiring Teams</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Manage your entire interview process from a single dashboard. Schedule interviews,
                                assign roles, and review feedback all in one place.
                            </p>
                            <div className="pt-4 flex gap-4">
                                <Button variant="outline" className="rounded-full">View Dashboard Demo</Button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 glass-card rounded-2xl p-2 md:p-6 ring-1 ring-border/50">
                            <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center border border-border/50 bg-gradient-to-tr from-purple-500/5 via-transparent to-pink-500/5">
                                <Calendar className="w-20 h-20 text-muted-foreground/30" />
                            </div>
                        </div>
                    </div>

                </section>

                {/* How It Works */}
                <section className="py-24 bg-muted/30 border-y border-border/50 relative overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
                            <p className="text-muted-foreground text-lg">
                                Simplify your technical hiring process in three easy steps.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Calendar,
                                    title: "1. Schedule Interview",
                                    description: "Create a new session, select the date and time, and invite the candidate."
                                },
                                {
                                    icon: Video,
                                    title: "2. Conduct the Call",
                                    description: "Join the video call and collaborate in real-time using the shared code editor."
                                },
                                {
                                    icon: CheckCircle,
                                    title: "3. Evaluate & Hire",
                                    description: "Review recordings, leave feedback, and make data-driven hiring decisions."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-background/80 transition duration-300">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 ring-1 ring-primary/20">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 container-custom text-center">
                    <div className="relative glass-card rounded-3xl p-12 md:p-20 overflow-hidden ring-1 ring-primary/20">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Ready to transform your hiring?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                            Join thousands of engineering teams who trust Orivion for their technical assessments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/sign-up">
                                <Button size="lg" className="rounded-full px-10 h-14 text-base">
                                    Get Started for Free
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t py-12 bg-muted/20">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <img src="/orion-logo.png" alt="Logo" className="w-5 h-5 opacity-80" />
                            </div>
                            <span className="font-semibold text-lg">Orivion</span>
                        </div>
                        <div className="flex gap-8 text-sm text-muted-foreground">
                            <Link href="#" className="hover:text-foreground transition">Privacy Policy</Link>
                            <Link href="#" className="hover:text-foreground transition">Terms of Service</Link>
                            <Link href="#" className="hover:text-foreground transition">Contact Support</Link>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Orivion. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
