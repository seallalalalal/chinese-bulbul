"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { MenuItem } from "@/type/MenuItem";
import { usePathname } from "next/navigation";
import useWindowSize from "@/tools/useWindowSize";

// Define the props type for the Sidebar component
type Props = {
  items: MenuItem[];
};

// Sidebar component
function Sidebar({ items }: Props) {
  // State for controlling menu open/close
  const [isMenuOpen, setMenuOpen] = useState(false);
  // Get the current pathname
  const pathName = usePathname();
  // State for storing the selected path
  const [selectedPath, setSelectedPath] = useState<string>("");
  const windowSize = useWindowSize();

  // Effect for updating the selected path based on the current pathname
  useEffect(() => {
    const _selectedPath = items.find((e) => e.path.includes(pathName))?.path;
    console.log({ _selectedPath });
    setSelectedPath(_selectedPath ?? "");
  }, [pathName]);

  // Effect for handling responsive behavior based on window size
  useEffect(() => {
    console.log({ windowSize });
    if (windowSize.width) {
      if (windowSize.width >= 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    }
  }, [windowSize]);

  return (
    <aside className="w-full md:max-w-80 md:shadow-none shadow-md">
      <div className="bg-white md:py-10 py-3 px-1 flex flex-col items-center h-full">
        <div className="flex flex-row items-center justify-between w-full px-2 md:justify-center">
          {/* Menu toggle button for mobile */}
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative left-0 p-2 mt-2 ms-3 text-sm rounded-lg md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <div className="flex flex-col gap-[7px]">
              {/* Animated hamburger menu bars */}
              <div
                className={`trasition duration-400 w-6 h-1 bg-black ${
                  isMenuOpen ? "animate-bar-1-to-cross" : "animate-close-1"
                }`}
              />
              <div
                className={`trasition duration-400 w-5 h-1 bg-black ${
                  isMenuOpen ? "animate-bar-2-to-corss" : "animate-close-2"
                }`}
              />
              <div
                className={`trasition duration-400 w-6 h-1 bg-black ${
                  isMenuOpen ? "animate-bar-3-to-corss" : "animate-close-3"
                }`}
              />
            </div>
          </button>
          {/* Title */}
          <div className="flex justify-center font-bold md:text-3xl text-[20px]">
            白頭翁不吃小米
          </div>
          <Logo />
        </div>
        {/* Menu items */}
        {isMenuOpen && (
          <div className="flex flex-col gap-5 my-10 animate-slide-in">
            {items.map((e) => (
              <MenuLink item={e} key={e.key} active={selectedPath === e.path} />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

// Props type for MenuLink component
type MenuLinkProps = {
  item: MenuItem;
  active?: boolean;
};

// MenuLink component for rendering individual menu items
function MenuLink({ item, active = false }: MenuLinkProps) {
  return active ? (
    <Link
      key={item.key.toString()}
      href={item.path as string}
      className="text-[#AA6666] text-lg font-bold hover:text-[#b18f8f] underline decoration-solid decoration-2 underline-offset-8"
    >
      {item.label}
    </Link>
  ) : (
    <Link
      key={item.key.toString()}
      href={item.path as string}
      className="text-gray-700 text-lg hover:text-slate-400"
    >
      {item.label}
    </Link>
  );
}

export default Sidebar;
