import React from "react";
import { Button } from "@/components/ui/button";
import type { Route } from "../../+types/root";

import { Link } from "react-router";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "description", content: "Welcome to TaskHub" },
  ];
}
const home = () => {
  return (
    <div className="flex min-h-svh h-screen w-full  gap-4 items-center justify-center">
      <Link to="/sign-in">
        <Button className="bg-blue-400 text-white ">Login</Button>
      </Link>
      <Link to="/sign-up">
        <Button variant={"outline"} className="bg-blue-400 text-white ">Sign Up</Button>
      </Link>
    </div>
  );
};

export default home;
