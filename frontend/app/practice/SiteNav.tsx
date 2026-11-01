import Link from "next/link";

const LINK = "text-blue-700 underline";

/** Links between the platform's parts: practice problems, code reading, AI interview. */
export default function SiteNav() {
  return (
    <nav aria-label="Platform" className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      <Link href="/" className={LINK}>
        Home
      </Link>
      <Link href="/practice" className="font-medium text-gray-900 no-underline" aria-current="page">
        Practice
      </Link>
      <Link href="/labyrinth" className={LINK}>
        Code reading
      </Link>
      <Link href="/oracle" className={LINK}>
        AI interview
      </Link>
    </nav>
  );
}
