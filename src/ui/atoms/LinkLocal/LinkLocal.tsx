"use client";
import React, { startTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useProgressBar } from "@/ui/atoms/ProgressBar/ProgressBar";

interface LinkLocalProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}
export default function LinkLocal({
  href = "/",
  className = "",
  children = "Link",
}: LinkLocalProps) {
  const router = useRouter();
  const { start, done } = useProgressBar();

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        start();

        startTransition(() => {
          done();
          router.push(href);
        });
      }}
    >
      {children}
    </Link>
  );
}
