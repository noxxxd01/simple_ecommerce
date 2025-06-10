import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiSupabaseFill } from "react-icons/ri";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md py-8">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="flex items-center justify-center text-2xl font-bold">
            <RiSupabaseFill className="w-6 h-6 inline-block mr-2 text-green-600" />
            Sign Up
          </CardTitle>
          <CardDescription>
            Create your account to get started with our service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="fullname" className="block mb-2">
                Fullname
              </Label>
              <Input type="text" id="fullname" className="w-full" />
            </div>
            <div>
              <Label htmlFor="email" className="block mb-2">
                Email
              </Label>
              <Input type="email" id="email" className="w-full" />
            </div>
            <div>
              <Label htmlFor="password" className="block mb-2">
                Password
              </Label>
              <Input type="password" id="password" className="w-full" />
            </div>
            <div>
              <Label htmlFor="confirmPassword" className="block mb-2">
                Confirm Password
              </Label>
              <Input
                type="confirmPassword"
                id="confirmPassword"
                className="w-full"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full cursor-pointer text-white"
              >
                Sign Up
              </Button>
            </div>
            <div className="flex items-center justify-between relative">
              <Separator className="my-4 absolute" />
              <div className="flex items-center justify-center w-full">
                <span className="p-2 bg-[#18181B] z-10">
                  <CardDescription>Or sign up with</CardDescription>
                </span>
              </div>
            </div>
            <div>
              <Button variant="outline" className="w-full cursor-pointer">
                <FcGoogle className="w-4 h-4 mr-2" />
                Sign up with Google
              </Button>
            </div>
            <div>
              <CardDescription className="text-center text-sm mt-2">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-500 hover:underline">
                  Sign In
                </Link>
              </CardDescription>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
