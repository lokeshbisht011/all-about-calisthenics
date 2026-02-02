"use client";

import { slugify } from "@/lib/utils";
import { useEffect } from "react";

export default function AutoHeadingIds() {
  useEffect(() => {
    const headings = document.querySelectorAll("article h2, article h3");

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = slugify(heading.innerText);
      }
    });
  }, []);

  return null;
}
