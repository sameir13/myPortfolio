import React from "react";
import { useRouter } from "next/router";
import Links from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter().asPath;

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="backdrop-blur bg-[#ffffff22]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">QuantumCraft</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((v, i) => (
          <NavbarItem key={i}>
            <Links
              className={`text-white ${
                router == v.link ? " text-gray-500 font-bold" : null
              } `}
              href={v.link}
            >
              {v.name}
            </Links>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/dashboard" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((v, i) => (
          <NavbarMenuItem key={`${v}-${i}`}>
            <Link className="w-full" href={v.link} size="lg">
              {v.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
