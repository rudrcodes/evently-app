'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
            {headerLinks.map((link) => {

                const isActive = pathname === link.route
                return (
                    <li key={link.label}
                        className={`${isActive && 'text-primary'} flex-center p-medium-1 whitespace-nowrap`}
                    >
                        <Link href={link.route}>{link.label}</Link>
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default NavItems