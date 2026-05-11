import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center w-full justify-between flex-row">
      <h1 className="font-bold">Foodzy</h1>
      <div>
        <Button className="w-20 cursor-pointer">Login</Button>
      </div>
    </nav>
  );
}
