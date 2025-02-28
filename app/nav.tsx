
import Link from "next/link"
import Image from "next/image"
import logo from '../public/logobg.png'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export const Nav = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary to-primary-foreground py-4 shadow-md transition-colors duration-300 data-[scrolled=true]:bg-gradient-to-r data-[scrolled=true]:from-primary data-[scrolled=true]:to-primary-foreground text-white bg-[#FF6801] rounded-full">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {/* <MountainIcon className="h-6 w-6 text-primary-foreground" /> */}
          {/* <span className="text-3xl text-white font-semibold text-primary-foreground">Super Expeditors</span> */}
          <div className="rounded-full">
            <Image
              src={logo}
              alt="Super Expeditors"
              width={70}
              height={50}
              className="object-cover rounded-full w-30 h-30"
             />
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-primary-foreground md:flex">
          <Link
            href="/about"
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-primary-foreground before:transition-all before:duration-300 hover:before:w-full"
            prefetch={false}
          >
            About 
          </Link>
          <Link
            href="/booking"
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-primary-foreground before:transition-all before:duration-300 hover:before:w-full"
            prefetch={false}
          >
            Booking
          </Link>
          <Link
            href="courses"
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-primary-foreground before:transition-all before:duration-300 hover:before:w-full"
            prefetch={false}
          >
           Courses
          </Link>
          <Link
            href="/resources"
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-primary-foreground before:transition-all before:duration-300 hover:before:w-full"
            prefetch={false}
          >
            Resources
          </Link>
          <Link
            href="contact"
            className="relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-primary-foreground before:transition-all before:duration-300 hover:before:w-full"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger className="bg-[#FF6801] text-white" asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-primary-foreground" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#FF6801]">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-6">
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-primary-foreground">
                {/* <XIcon className="h-6 w-6" /> */}
                {/* <span className="sr-only">Close menu</span> */}
              </Button>
              <nav className="flex flex-col items-center gap-4 text-lg font-medium text-primary-foreground">
                <Link href="/about" className="hover:underline" prefetch={false}>
                  About
                </Link>
                <Link href="/booking" className="hover:underline" prefetch={false}>
                  Booking
                </Link>
                <Link href="/courses" className="hover:underline" prefetch={false}>
                  Courses
                </Link>
                <Link href="/resources" className="hover:underline" prefetch={false}>
                  Resources
                </Link>
                <Link href="/contact" className="hover:underline" prefetch={false}>
                  Contact
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}