import React from 'react'
import Link from "next/link";
import { Button } from '@/src/components/ui/Button';
import { FaBars } from 'react-icons/fa';
import DarkLightModeButton from "@/src/components/elements/DarkLightModeButton";

export default function DesktopNavButtonGroup({
    setOpen
}: {
    setOpen: (value: boolean) => void
}) {
    return (
        <div className="flex flex-col items-center gap-3 px-4 lg:flex-row">
            <div className="flex items-center gap-4">
                <Button
                    size={"icon"}
                    variant={"destructive"}
                    className="lg:!hidden"
                    onClick={() => setOpen(true)}
                >
                    <FaBars />
                </Button>
                <Button
                    variant={"destructive"}
                    className="md:block hidden"
                    asChild
                >
                    <Link href="/register">
                        Register
                    </Link>
                </Button>
                <Button
                    variant={"destructive"}
                    className="md:block hidden"
                    asChild
                >
                    <Link href="/login">
                        Sign In
                    </Link>
                </Button>
                <DarkLightModeButton />
            </div>
        </div>
    )
}
