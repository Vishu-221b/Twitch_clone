import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="bg-black h-screen">
      <h1 className="text-red-500 font-bold">Hello Twitch clone (a video streaming platform)</h1>
      <h1>Only Authenticated users can see this.</h1>

      <UserButton afterSignOutUrl="/" />
     
    </div>
  );
}
