"use client";
import { useRouter } from "next/navigation";
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild?: boolean
}
const LoginButton = ({
  children, mode = "redirect", asChild
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    console.log("Login Button CLicked");
    router.push('/auth/login');
  }
  if (mode == "modal") {
    return (
    <span>
      {/* TODO: Implement Modal */}
      TODO: Implement Modal
    </span>
  )
  }
  return (<>
    <span onClick={onClick}>{children}</span></>);
}

export default LoginButton;