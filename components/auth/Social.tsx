import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";

const SocialAuth = () => {
  const onClick = (provider: "google" | "github") =>{
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    })
  }
  return ( <>
  <div className="flex items-center justify-evenly w-full gap-x-2">
    <Button size={"lg"} variant={"outline"} onClick={()=>onClick("google")}><FaGoogle className="h-5 w-5" /></Button>
    <Button size={"lg"} variant={"outline"} onClick={()=>onClick("github")}><FaGithub className="h-5 w-5" /></Button>

  </div>
  </> );
}

export default SocialAuth;