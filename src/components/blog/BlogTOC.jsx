"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BlogTOC() {
  const [headings, setHeadings] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("gyms")) return;

    const elements = Array.from(
      document.querySelectorAll("article h2, article h3")
    ).map((el) => ({
      id: el.id,
      text: el.innerText,
      level: el.tagName,
    }));

    setHeadings(elements);
  }, [pathname]);

  if (!headings.length) return null;

  return (
    <div className="rounded-xl border p-4">
      <p className="font-semibold mb-3">On this page</p>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.level === "H3" ? "ml-4 text-muted-foreground" : ""}
          >
            <a href={`#${h.id}`} className="hover:underline">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
