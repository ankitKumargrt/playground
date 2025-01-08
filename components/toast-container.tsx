"use client";

import { Toaster } from "react-hot-toast";
import { useTheme } from "next-themes";

export function ToastContainer() {
  const { theme } = useTheme();

  return (
    <Toaster
      position='top-right'
      toastOptions={{
        className: "",
        style: {
          background:
            theme === "dark"
              ? "hsl(var(--background))"
              : "hsl(var(--background))",
          color:
            theme === "dark"
              ? "hsl(var(--foreground))"
              : "hsl(var(--foreground))",
          border: `1px solid hsl(var(--border))`,
        },
      }}
    />
  );
}
