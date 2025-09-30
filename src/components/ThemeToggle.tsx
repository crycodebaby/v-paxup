// src/components/ThemeToggle.tsx
import { useTheme } from "@/providers/ThemeProvider";
import { MoonStar, SunMedium, Laptop2 } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  // Minimalistisch: 3-Wege Toggle als kleines Dropdown
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center justify-center rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Theme auswählen"
      >
        {theme === "dark" ? (
          <MoonStar className="h-5 w-5" />
        ) : theme === "light" ? (
          <SunMedium className="h-5 w-5" />
        ) : (
          <Laptop2 className="h-5 w-5" />
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-40 rounded-md border border-border bg-popover shadow-card p-1 z-50"
        >
          <button
            role="menuitem"
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted ${
              theme === "light" ? "text-primary" : ""
            }`}
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
          >
            <SunMedium className="h-4 w-4" /> Hell
          </button>
          <button
            role="menuitem"
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted ${
              theme === "dark" ? "text-primary" : ""
            }`}
            onClick={() => {
              setTheme("dark");
              setOpen(false);
            }}
          >
            <MoonStar className="h-4 w-4" /> Dunkel
          </button>
          <button
            role="menuitem"
            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted ${
              theme === "system" ? "text-primary" : ""
            }`}
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
          >
            <Laptop2 className="h-4 w-4" /> System
          </button>
        </div>
      )}
    </div>
  );
}
