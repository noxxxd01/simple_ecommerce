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

export default function SignIn() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md py-8">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="flex items-center justify-center text-2xl font-bold">
            <RiSupabaseFill className="w-6 h-6 inline-block mr-2 text-green-600" />
            Sign In
          </CardTitle>
          <CardDescription>
            Sign in to your account to access our services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
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
              <Label
                htmlFor="forgot"
                className="flex justify-end items-center mt-3 text-sm text-blue-500 hover:underline cursor-pointer"
              >
                Forgot Password?
              </Label>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full cursor-pointer text-white"
              >
                Sign In
              </Button>
            </div>
            <div className="flex items-center justify-between relative">
              <Separator className="my-4 absolute" />
              <div className="flex items-center justify-center w-full">
                <span className="p-2 bg-[#18181B] z-10">
                  <CardDescription>Or sign in with</CardDescription>
                </span>
              </div>
            </div>
            <div>
              <Button variant="outline" className="w-full cursor-pointer">
                <FcGoogle className="w-4 h-4 mr-2" />
                Sign in with Google
              </Button>
            </div>
            <div>
              <CardDescription className="text-center text-sm mt-2">
                Doesn&apos;t have an account yet?{" "}
                <Link href="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </CardDescription>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
