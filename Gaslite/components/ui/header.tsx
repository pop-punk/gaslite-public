import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              {/* Replace the SVG with your favicon.ico image */}
              <Image src="/logo_transparent.png" alt="Logo" width={96} height={96} />
            </Link>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
