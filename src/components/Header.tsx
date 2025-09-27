import { useEffect, useId, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Collapsible from "@radix-ui/react-collapsible";
import PaxupLogo from "@/assets/logo/Logo_blau_rot.png";

type RouteItem = { name: string; href: string; kind: "route" };
type HashItem = { name: string; href: `#${string}`; kind: "hash" };
type MenuItem = RouteItem | HashItem;

const menuItems: MenuItem[] = [
  { name: "Leistungen", href: "/leistungen", kind: "route" },
  { name: "Anwendungsfälle", href: "/anwendungsfaelle", kind: "route" },
  {
    name: "Immobilienverwaltung",
    href: "/immobilienverwaltung",
    kind: "route",
  },
  { name: "Blog", href: "/blog", kind: "route" },
  { name: "Über uns", href: "/ueber-uns", kind: "route" },
  { name: "Förderung", href: "/foerderung", kind: "route" },
  { name: "Kontakt", href: "#contact", kind: "hash" },
];

const calendlyUrl = "https://calendly.com/paxup";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const contentId = useId();

  // Mobile-Menü bei Route-Change schließen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Smooth-Scroll für Hash-Links
  function handleHashNav(targetHash: `#${string}`) {
    const id = targetHash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Gemeinsame Klassen für Desktop-Navlinks
  const desktopLinkClass = (isActive: boolean) =>
    [
      "rounded-md px-3 py-2 text-sm font-medium transition-all",
      "hover:bg-muted hover:text-primary",
      isActive ? "text-primary bg-muted" : "text-muted-foreground",
    ].join(" ");

  // Gemeinsame Klassen für Mobile-Navlinks
  const mobileLinkClass = (isActive: boolean) =>
    [
      "rounded-md px-3 py-3 text-base font-medium transition-colors",
      "hover:bg-muted",
      isActive ? "text-primary bg-muted" : "text-muted-foreground",
    ].join(" ");

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Startseite"
            onClick={() => setOpen(false)}
          >
            <img
              src={PaxupLogo}
              alt="PAXUP Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {menuItems.map((item) =>
              item.kind === "route" ? (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => desktopLinkClass(isActive)}
                >
                  {item.name}
                </NavLink>
              ) : (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleHashNav(item.href)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-primary"
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              Erstberatung
            </Button>
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Jetzt starten
            </Button>
          </div>

          {/* Mobile Trigger */}
          <Collapsible.Trigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-controls={contentId}
              aria-expanded={open}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Collapsible.Content
        id={contentId}
        className="overflow-hidden border-t border-border md:hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up motion-reduce:animate-none"
      >
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) =>
              item.kind === "route" ? (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => mobileLinkClass(isActive)}
                >
                  {item.name}
                </NavLink>
              ) : (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    handleHashNav(item.href);
                    setOpen(false);
                  }}
                  className="rounded-md px-3 py-3 text-left text-base font-medium text-muted-foreground transition-colors hover:bg-muted"
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          <div className="mt-4 pt-4 border-t border-border/50 flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              Erstberatung
            </Button>
            <Button
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => window.open(calendlyUrl, "_blank")}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Jetzt starten
            </Button>
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
