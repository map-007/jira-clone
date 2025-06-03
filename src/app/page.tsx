import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant={"destructive"}>Button</Button>
      <Button variant={"ghost"}>Button</Button>
      <Button>Button</Button>
      <Button variant={"secondary"}>Button</Button>
      <Button variant={"outline"}>Button</Button>
      <Button variant={"muted"}>Button</Button>
      <Button variant={"tritrary"}>Button</Button>
      <p className="text-red-500 text-2xl">Hello</p>
    </div>
  );
}
