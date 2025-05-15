'use client'
import { Button } from "@/components/ui/button"
import ButtonMain from '@/components/Button'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import logo from '@/assets/logo.svg'
import { Menu } from "lucide-react"

export function SidebarMenu() {

  
  const navLinks =[
    {
        id:1,
        title:'Product',
        link:'#product'
    },
    {
        id:2,
        title:'Resources',
        link:'#resources'
    },
    {
        id:3,
        title:'Customers',
        link:'#customers'
    },
    {
        id:4,
        title:'Pricing',
        link:'#pricing'
    },
]
//  @typescript-eslint/no-explicit-any
const handleClickMobileNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, closeMenu: () => void) => {
  e.preventDefault(); // Prevent default anchor behavior
  closeMenu(); // Close the menu immediately

  const url = new URL(e.currentTarget.href);
  const hash = url.hash;
  const target = document.querySelector(hash);

  if (!target) return;

  // Use setTimeout to ensure the menu fully closes before scrolling
  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth" });
  }, 100); 
};


  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image src={logo} alt='attio-logo' />
          </SheetTitle>
        </SheetHeader>

       
        <nav className="flex flex-col items-start gap-10 mt-16">
  {navLinks.map((link) => (
    <SheetClose key={link.id} asChild>
      <a 
        href={link.link} 
        onClick={(e) => handleClickMobileNav(e, () => document.body.click())} 
        className="border-b border-gray-100 w-full"
      >
        <span>{link.title}</span>
      </a>
    </SheetClose>
  ))}
</nav>
            <div className='flex flex-col mt-10 items-start w-full gap-4'>
                <ButtonMain variant='secondary' >Sign In</ButtonMain>
                <ButtonMain variant='primary' >Start for free</ButtonMain>
            </div>
       
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}