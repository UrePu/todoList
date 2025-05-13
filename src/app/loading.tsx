import { Loader2 } from "lucide-react";
import { clsx } from "clsx";

interface FullScreenLoaderProps {
  text?: string;
  className?: string;
}

const Loading = ({
  text = "로딩 중입니다...",
  className,
}: FullScreenLoaderProps) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm",
        className
      )}
    >
      <Loader2 className="h-10 w-10 animate-spin text-gray-700" />
      <p className="mt-4 text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default Loading;
