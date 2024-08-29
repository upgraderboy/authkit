"use client";

import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import BackButton from "./BackButton";
import Header from "./header";
import SocialAuth from "./Social";

interface CardWrapperProps{
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}


const CardWrapper = ({children, headerLabel, backButtonHref, backButtonLabel, showSocial}: CardWrapperProps) => {
  return ( <>
  <Card className="w-[400px] shadow-md">
    <Header label={headerLabel} />
    <CardContent>{children}</CardContent>
    {showSocial && <CardFooter><SocialAuth /></CardFooter>}
    <CardFooter><BackButton label={backButtonLabel} href={backButtonHref} /></CardFooter>
    </Card>

  </> );
}

export default CardWrapper;