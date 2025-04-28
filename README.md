---

# Remote Interview Platform

A comprehensive platform for remote technical interviews, offering high-quality video calls, interactive coding environments, and interview management features.

## Key Features
- **Communication Tools**: Video/audio calls, screen sharing, screen recording, and reactions.
- **Coding Environment**: Interactive code editor with syntax highlighting, autocomplete, multiple language support, and preset coding problems.
- **User Experience**: Role-based access, interview scheduling, results portal, and a dashboard for interview management.
- **UI**: Light/dark mode, responsive UI with a seamless experience.

## Technology Stack
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, ShadCN
- **Backend**: Convex (real-time database), Clerk (authentication), Stream (video calls)
- **Architecture**: Server components, dynamic/static routing, client-server rendering

## Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/dpokk/orivion.git
   cd orivion
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Run the Convex server:
   ```bash
   cd convex
   npx convex dev
   ```

### Prerequisites
- Node.js (LTS version)
- Environment setup: Register for Clerk, Convex, and Stream accounts.

## Usage
- **Candidates**: Sign in, view interviews, join live calls, and code in the integrated editor.
- **Interviewers**: Schedule interviews, observe coding, provide feedback.
- **Admins**: Manage roles, access recordings, and track interview results.

## Deployment
Deploy using Vercel or similar platforms. Ensure all environment variables are set correctly.

---
