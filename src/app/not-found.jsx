import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center space-y-6">
        <div className="text-6xl">🤸‍♂️</div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Page not found
        </h1>

        <p className="text-muted-foreground text-base">
          The page you're looking for doesn't exist or was moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/competitions"
            className="rounded-lg bg-black text-white px-6 py-3 text-sm font-medium hover:bg-black/90 transition"
          >
            View Competitions
          </Link>

          <Link
            href="/"
            className="rounded-lg border px-6 py-3 text-sm font-medium hover:bg-gray-50 transition"
          >
            Go Home
          </Link>
        </div>

        {/* SEO / UX assist */}
        {/* <p className="text-xs text-muted-foreground pt-4">
          Looking for competitions in your country? Try{" "}
          <Link
            href="/competitions/country/india"
            className="underline underline-offset-4"
          >
            India
          </Link>{" "}
          or{" "}
          <Link
            href="/competitions/country/usa"
            className="underline underline-offset-4"
          >
            USA
          </Link>
        </p> */}
      </div>
    </div>
  );
}
