import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-5">
      <div className="text-center">
        <p className="text-[#8A7060] text-xs tracking-[0.35em] uppercase font-sans mb-6">
          404
        </p>
        <h1 className="font-serif text-[#1A1410] text-5xl sm:text-6xl font-normal mb-6 leading-tight">
          Lost in the wilderness.
        </h1>
        <p className="text-[#4A3D30] text-base font-sans font-light mb-10 max-w-sm mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-[#1A1410] border border-[#1A1410]/30 hover:border-[#1A1410] px-7 py-3.5 text-sm tracking-widest uppercase font-sans transition-all duration-300 hover:bg-[#1A1410] hover:text-white"
        >
          <ArrowLeft size={14} />
          Return Home
        </Link>
      </div>
    </div>
  );
}
