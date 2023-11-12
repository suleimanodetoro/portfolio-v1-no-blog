// because you're using headless UI, which uses state, we will need to use client
"use client"

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
    // get the path name
    let pathname = usePathname()
  return (
    <Disclosure as="nav">
        {/* access the open state */}
        {({open}) => (
            <>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg-px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex justify-between w-full'>
                        <div className='flex items-center'>
                            <Link href="/">
                                <h1 className='text-2xl font-medium'>
                                    Suleiman <span className='text-teal-500'>Odetoro</span>
                                </h1>
                            </Link>
                        </div>

                        <div className='hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center'>
                            {/* check if we're on the home/index page,  */}
                            <Link href='/' prefetch className={`${pathname === "/" ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                Home
                            </Link>
                            {/*  */}
                            <Link href='/guestbook' prefetch className={`${pathname === "/guestbook" ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                Blog
                            </Link>
                            {/*  */}
                            <Link href='/projects' prefetch className={`${pathname === "/projects" ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}>
                                Projects
                            </Link>
                        </div>


                    </div>

                </div>

            </div>
            </>
        )}


    </Disclosure>
  )
}

export default Navbar