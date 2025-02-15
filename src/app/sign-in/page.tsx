import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-4">
      <main className="text-center space-y-6">
        <SignInButton forceRedirectUrl={"/drive"} />
      </main>
      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} JG Drive. All rights reserved.
      </footer>
    </div>
  )
}

