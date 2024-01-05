import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'

import navIcon from "@/public/assets/icons/menu.svg"
import logo from "@/public/assets/images/logo.svg"
import { Separator } from "@/components/ui/separator"
import NavItems from './NavItems'

const MobileNav = () => {
    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className='align-middle'>
                    <Image src={navIcon} alt='Hamburger menu'
                        width={24} height={24} className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white">
                    <Image src={logo} alt='logo'
                        width={128} height={38} />

                    <Separator />
                    <NavItems />
                </SheetContent>
            </Sheet>

        </nav>
    )
}

export default MobileNav