"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // small close icon

export default function CoachingBanner() {
  const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     const dismissed = localStorage.getItem("coachingBannerDismissed");
//     if (dismissed === "true") setHidden(true);
//   }, []);

  const handleClose = () => {
    setHidden(true);
    // localStorage.setItem("coachingBannerDismissed", "true");
  };

  if (hidden) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4">
      <div className="relative mx-auto max-w-3xl rounded-2xl border bg-white shadow-lg p-4 md:p-5 flex items-center gap-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600"
        >
          <X size={16} />
        </button>

        {/* Image */}
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
          <Image
            src="/planche.jpg"
            alt="Calisthenics Coach"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Online Calisthenics Coaching
          </p>
          <h3 className="text-sm md:text-base font-semibold leading-tight">
            Start learning Calisthenics Skills from home.
          </h3>
          <p className="hidden md:block text-sm text-neutral-600 mt-1">
            Strength, skills, and consistency — without burnout.
          </p>
        </div>

        {/* CTA */}
        <Button asChild size="sm" className="shrink-0">
          <Link
            href="https://alwaysabeginner.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Link>
        </Button>
      </div>
    </div>
  );
}
