
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const Course: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Courses
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Courses</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Skills with Our Comprehensive Courses
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlock your full potential with our expertly crafted courses designed to help you master new skills
                  and advance your career.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Course</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Course Image"
                    width={400}
                    height={225}
                    className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
                  />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Introduction to Web Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn the fundamentals of web development and build your first website.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-xs font-semibold">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    </div>
                    <span className="text-xs font-semibold">4.8 (1,234)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">12 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">$99</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Course</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Course Image"
                    width={400}
                    height={225}
                    className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
                  />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Mastering JavaScript: From Beginner to Expert</h3>
                  <p className="text-sm text-muted-foreground">
                    Dive deep into the world of JavaScript and become a proficient developer.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-xs font-semibold">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    </div>
                    <span className="text-xs font-semibold">4.9 (2,456)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">$199</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Course</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Course Image"
                    width={400}
                    height={225}
                    className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
                  />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Responsive Web Design: Principles and Practices</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to create beautiful and responsive websites that work on any device.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-xs font-semibold">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                    </div>
                    <span className="text-xs font-semibold">4.7 (1,789)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">18 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">$149</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All Courses
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Course</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Mastering JavaScript: From Beginner to Expert
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dive deep into the world of JavaScript and become a proficient developer. This comprehensive course
                  covers everything from the basics to advanced topics, equipping you with the skills to build dynamic
                  and interactive web applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                alt="Course Image"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-xs font-semibold">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-xs font-semibold">4.9 (2,456)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">$199</span>
                </div>
                <Button className="w-full">Enroll Now</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Course</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Responsive Web Design: Principles and Practices
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn how to create beautiful and responsive websites that work on any device. This course covers the
                  latest techniques and best practices for building modern, mobile-friendly web experiences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-xs font-semibold">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-xs font-sem" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function DollarSignIcon(props: any) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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


function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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