import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

const SocialAuth = () => {
  return ( <>
  <div className="flex items-center justify-evenly w-full gap-x-2">
    <Button size={"lg"} variant={"outline"} onClick={()=>{}}><FaGoogle className="h-5 w-5" /></Button>
    <Button size={"lg"} variant={"outline"} onClick={()=>{}}><FaGithub className="h-5 w-5" /></Button>

  </div>
  </> );
}

export default SocialAuth;