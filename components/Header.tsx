import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4">
        <div id="header-title" className="text-2xl font-bold mb-2">
          Othieno Malcom
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:underline focus:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline focus:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
