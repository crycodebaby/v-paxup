// src/components/Header.tsx
import { useEffect, useId, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Logos (hell/dunkel + kompakte Varianten)
import LogoFullLight from "@/assets/logo/Logo_blau_rot.png";
import LogoFullDark from "@/assets/logo/Logo_weiss_rot.png";
import LogoMonoLight from "@/assets/logo/Up_blau.png";
import LogoMonoDark from "@/assets/logo/Up_weiss.png";

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

// Welche Links bleiben auf lg inline?
const lgPrimaryNames = new Set<string>([
  "Leistungen",
  "Anwendungsfälle",
  "Immobilienverwaltung",
  "Blog",
]);

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const contentId = useId();

  useEffect(() => setOpen(false), [pathname]);

  const { primaryLg, overflowLg } = useMemo(() => {
    const primary = menuItems.filter((m) => lgPrimaryNames.has(m.name));
    const overflow = menuItems.filter((m) => !lgPrimaryNames.has(m.name));
    return { primaryLg: primary, overflowLg: overflow };
  }, []);

  // Smooth-Scroll für Hash-Links
  function handleHashNav(targetHash: `#${string}`) {
    const id = targetHash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Desktop-Link Styles
  const desktopLinkClass = (isActive: boolean) =>
    [
      "rounded-md lg:px-2 xl:px-3 py-2 text-sm font-medium transition-colors",
      "hover:bg-muted hover:text-primary",
      isActive ? "text-primary bg-muted" : "text-muted-foreground",
    ].join(" ");

  // Mobile-Link Styles
  const mobileLinkClass = (isActive: boolean) =>
    [
      "rounded-md px-3 py-3 text-base font-medium transition-colors",
      "hover:bg-muted",
      isActive ? "text-primary bg-muted" : "text-muted-foreground",
    ].join(" ");

  return (
    <Collapsible.Root
      data-site-header
      open={open}
      onOpenChange={setOpen}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center gap-3">
          {/* Logo (immer sichtbar, schrumpft nie) */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Startseite"
            onClick={() => setOpen(false)}
          >
            {/* Light */}
            <picture className="dark:hidden">
              <source srcSet={LogoMonoLight} media="(max-width: 979px)" />
              <img
                src={LogoFullLight}
                alt="PAXUP"
                className="h-[clamp(32px,3vw,40px)] w-auto transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                loading="eager"
                decoding="async"
              />
            </picture>
            {/* Dark */}
            <picture className="hidden dark:block">
              <source srcSet={LogoMonoDark} media="(max-width: 979px)" />
              <img
                src={LogoFullDark}
                alt="PAXUP"
                className="h-[clamp(32px,3vw,40px)] w-auto transition-transform duration-300 hover:scale-[1.03] motion-reduce:transition-none"
                loading="eager"
                decoding="async"
              />
            </picture>
          </Link>

          {/* Desktop-Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 min-w-0">
            {/* lg: nur primäre Items */}
            <div className="hidden lg:flex xl:hidden items-center gap-1">
              {primaryLg.map((item) =>
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
                    className="rounded-md lg:px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {item.name}
                  </button>
                )
              )}

              {/* Mehr-Dropdown für die restlichen Items */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="ml-1">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Weitere Navigation</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {overflowLg.map((item, idx) =>
                    item.kind === "route" ? (
                      <NavLink key={item.name} to={item.href}>
                        {({ isActive }) => (
                          <DropdownMenuItem
                            className={isActive ? "text-primary" : ""}
                          >
                            {item.name}
                          </DropdownMenuItem>
                        )}
                      </NavLink>
                    ) : (
                      <DropdownMenuItem
                        key={item.name}
                        onClick={() => handleHashNav(item.href)}
                      >
                        {item.name}
                      </DropdownMenuItem>
                    )
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => window.open(calendlyUrl, "_blank")}
                  >
                    Erstberatung buchen
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* xl+: alle Items inline, kein „Mehr“-Button */}
            <div className="hidden xl:flex items-center gap-1">
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
                    className="rounded-md xl:px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </nav>

          {/* Desktop-CTAs: reduziert auf lg; vollständig auf xl */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button
              variant="ghost"
              size="sm"
              className="hidden xl:inline-flex"
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
              className="ml-auto lg:hidden shrink-0"
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
        className="overflow-hidden border-t border-border lg:hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up motion-reduce:animate-none"
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
