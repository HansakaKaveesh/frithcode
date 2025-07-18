"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingIndicator() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-[#18181b] backdrop-blur-lg flex flex-col items-center justify-center z-[9999]">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          animation: rotate 1s infinite;
          height: 50px;
          width: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .loader:before,
        .loader:after {
          border-radius: 50%;
          content: "";
          display: block;
          height: 20px;
          width: 20px;
        }
        .loader:before {
          animation: ball1 1s infinite;
          background-color: #fff;
          box-shadow: 30px 0 0 #ff3d00;
          margin-bottom: 10px;
        }
        .loader:after {
          animation: ball2 1s infinite;
          background-color: #ff3d00;
          box-shadow: 30px 0 0 #fff;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg) scale(0.8) }
          50% { transform: rotate(360deg) scale(1.2) }
          100% { transform: rotate(720deg) scale(0.8) }
        }
        @keyframes ball1 {
          0% {
            box-shadow: 30px 0 0 #ff3d00;
          }
          50% {
            box-shadow: 0 0 0 #ff3d00;
            margin-bottom: 0;
            transform: translate(15px, 15px);
          }
          100% {
            box-shadow: 30px 0 0 #ff3d00;
            margin-bottom: 10px;
          }
        }
        @keyframes ball2 {
          0% {
            box-shadow: 30px 0 0 #fff;
          }
          50% {
            box-shadow: 0 0 0 #fff;
            margin-top: -20px;
            transform: translate(15px, 15px);
          }
          100% {
            box-shadow: 30px 0 0 #fff;
            margin-top: 0;
          }
        }
        /* Dark mode support (Tailwind's .dark class) */
        :global(html.dark) .loader:before {
          background-color: #18181b;
          box-shadow: 30px 0 0 #60a5fa;
        }
        :global(html.dark) .loader:after {
          background-color: #60a5fa;
          box-shadow: 30px 0 0 #18181b;
        }
        /* Or use prefers-color-scheme if not using Tailwind */
        @media (prefers-color-scheme: dark) {
          .loader:before {
            background-color: #18181b;
            box-shadow: 30px 0 0 #60a5fa;
          }
          .loader:after {
            background-color: #60a5fa;
            box-shadow: 30px 0 0 #18181b;
          }
        }
      `}</style>
    </div>
  ) : null;
}