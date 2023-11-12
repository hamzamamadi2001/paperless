"use client";
import { useEffect, useState } from "react";
import {useTheme} from "next-themes";

import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const { theme, setTheme } = useTheme()

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
 

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <p className="text-2xl text-primary-500">PaperLessUniversity</p>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="flat" onClick={() => {if(theme=="dark"){setTheme('light')}else{setTheme('dark')}}}>
                       change theme
                    </Button>
                </NavbarItem>
            </NavbarContent>

            {/* <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? "warning"
                                    : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu> */}
        </Navbar>
    );
}
