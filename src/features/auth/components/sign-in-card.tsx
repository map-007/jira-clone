"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DottedSeparator } from "@/components/ui/dotted-separator";
import { Input } from "@/components/ui/input";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent>
        <form className="space-y-4">
          <Input
            type="email"
            value={""}
            onChange={() => {}}
            required
            placeholder="Enter Email Address"
            disabled={false}
          />
        </form>
      </CardContent>
    </Card>
  );
};
