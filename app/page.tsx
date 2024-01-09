import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  return (
    <div className="bg-black h-screen">
      <h1 className="text-red-500 font-bold">Hello Twitch clone (a video streaming platform)</h1>

      <Button>Click me</Button>
      <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>.....</AvatarFallback> 
      </Avatar>
    </div>
  );
}
