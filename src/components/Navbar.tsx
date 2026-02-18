import { SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import DashboardBtn from "./DashboardBtn";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl mr-6 font-medium hover:opacity-80 transition-opacity"
        >

          <img
            src="/orion-logo.png"
            alt="Orion Logo"
            className="w-14 h-14 object-contain pr-0"
          />
          <span className="bg-gradient-to-l from-emerald-800 via-emerald-650 to-emerald-500 bg-clip-text text-transparent tracking-tight">
            ORIVION
          </span>
        </Link>



        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>



      </div>
    </nav>
  );
}
export default Navbar;