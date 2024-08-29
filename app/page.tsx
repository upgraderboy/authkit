import LoginButton from "@/components/auth/LoginButton";

import { Button } from "@/components/ui/button";
import {cn} from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})
const Home = () => {
  return ( <>
  <main className="flex h-full flex-col items-center justify-center bg-sky-600">
    <div className="space-y-6">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
        Auth 🔒
      </h1>
      <p className="text-white text-lg">A Simple Authentication Service</p>
    </div>
    <div>
      <LoginButton><Button variant={"secondary"} size={"lg"}>Sign in</Button></LoginButton>

    </div>
  </main>
  </> );
}

export default Home;