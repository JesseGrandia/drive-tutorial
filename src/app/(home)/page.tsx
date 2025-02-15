import { ArrowRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col justify-center items-center p-4">
      <main className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">JG Drive</h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-md mx-auto">
          Secure, fast, and easy file storage for everyone.
        </p>
        <form action={async () => {
          "use server";

          const session = await auth();

          if (!session.userId) {
              return redirect("/sign-in");
          }

          return redirect("/drive");
        }}>
          <Button
            size="lg"
            type="submit"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-black bg-gray-200 rounded-full hover:bg-white transition-colors duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </form>
      </main>
      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} JG Drive. All rights reserved.
      </footer>
    </div>
  )
}

