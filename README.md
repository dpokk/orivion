# Orivion - Remote Interview Platform

A comprehensive platform for remote technical interviews, offering high-quality video calls, interactive coding environments, and interview management features.

## Key Features

The platform includes several essential features such as:
- **Communication Tools**: Video/audio calls, screen sharing, screen recording, and reactions.
- **Coding Environment**: Interactive code editor with syntax highlighting, autocomplete, multiple language support, and preset coding problems.
- **User Experience**: Role-based access, interview scheduling, results portal, and a dashboard for interview management.
- **UI**: Light/dark mode, responsive UI with a seamless experience.

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, ShadCN
- **Backend**: Convex (real-time database), Clerk (authentication), Stream (video calls)
- **Architecture**: Server components, dynamic/static routing, client-server rendering

## Getting Started

### Prerequisites

- **Clerk Account**:  
  Register for a Clerk account to handle user authentication (sign up, sign in, etc.). Clerk simplifies authentication with features like multi-factor authentication (MFA) and role-based access. Sign up here: [Clerk](https://clerk.dev/).

- **Convex Account**:  
  Convex provides the real-time database and backend services for the platform, allowing you to store and manage data with ease. Create a free account on Convex and set up your project. Start here: [Convex](https://www.convex.dev/).

- **Stream Account**:  
  Stream enables the real-time video and audio calling functionality, which is essential for conducting interviews on the platform. Sign up for an account at Stream and get access to their APIs: [Stream](https://getstream.io/).

Here’s the formatted README file with clear sections:

---

## Setup Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/dpokk/orivion.git
cd orivion
```

### 2. Install the dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
```

### 4. Run the Convex server:
```bash
cd convex
npx convex dev
```

## Usage

- **Candidates**: Sign in to view interviews, join live calls, and code in the integrated editor.
- **Interviewers**: Schedule interviews, observe coding progress, and provide feedback.
- **Admins**: Manage roles, access recordings, and track interview results.

## Deployment

Deploy the platform using Vercel or similar platforms. Ensure all required environment variables are set up correctly during deployment.

## Future Improvements

AI-Interview Practice:  This will allow candidates to simulate mock interviews and get graded based on key factors such as:

- Technical Knowledge: Accuracy and depth of answers.
- Problem-Solving: Approach and reasoning.
- Communication: Clarity and effectiveness.
- Behavioral Responses: Confidence and demeanor during soft-skill questions.

The AI will also provide personalized feedback and suggestions for improvement, helping candidates prepare more effectively for real interviews.

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

