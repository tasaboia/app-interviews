"use client";
import { authState } from "@/app/shared/state/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";

export default function LayoutRootAuth({ children }: { children: ReactNode }) {
  // const auth = useRecoilValue(authState);
  const router = useRouter();
  const [isPublicRouter, setIsPublicRouter] = useState(false);

  // useEffect(() => {
  //   if (auth) {
  //     router.push("/dashboard");
  //   } else {
  //     setIsPublicRouter(true);
  //   }
  // }, [auth]);

  return isPublicRouter ? (
    <div className="grid w-full h-full grid-cols-2 xxs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 overflow-hidden bg-white">
      <div className="xs:hidden sm:hidden md:hidden lg:flex bg-gradient-to-r from-red-200  to-red-300"></div>
      <div className="relative w-5/12 m-auto overflow-scroll bg-white">
        {children}
      </div>
    </div>
  ) : null;
}
