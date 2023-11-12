"use client"

import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

function Provider({children}: {children:ReactNode}) {
  return (
    <ThemeProvider attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default Provider