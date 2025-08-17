"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        flex items-center gap-2 px-6 py-2
        rounded-full border border-gray-300 shadow-md
        bg-white/90 backdrop-blur-sm
        hover:bg-gray-100 transition
        text-sm font-medium text-black
        z-50
      "
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
};

export default BackButton;
