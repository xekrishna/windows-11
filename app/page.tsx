"use client";

import { useEffect } from "react";
import Boot from "@/components/ui/loading/Boot";
import { useRouter } from "next/navigation";

export default function Root() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        router.push("/home");
      } else {
        router.push("/lockscreen");
      }
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [isLoggedIn, router]);

  return <Boot />;
}
