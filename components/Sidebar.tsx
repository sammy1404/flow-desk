import React from 'react'
import NewDocumentButton from './NewDocumentButton'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Leaf, MenuIcon } from 'lucide-react'
  

function Sidebar() {

    const menuOptions = (
        <>
            <NewDocumentButton />

        </>
    );
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">

        <div className="md:hidden">

        <Sheet>
        <SheetTrigger>
            <MenuIcon></MenuIcon>
        </SheetTrigger>
        <SheetContent side='left'>
            <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <div>{menuOptions}</div>
            </SheetHeader>
        </SheetContent>
        </Sheet>

        </div>
        


        <div className="hidden md:inline">
            <NewDocumentButton />
        </div>
        
    </div>
  )
}

export default Sidebar