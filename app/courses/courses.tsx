
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Nav } from "../nav"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/Footer"
import ytp from '@/public/ytp.jpeg'
import ppm from '@/public/ppm.jpeg'
import cic from '@/public/cic.jpeg'
import image from '@/public/t.jpeg'

export const Course: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF6801]">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Empower Your Business with Our Accountability Services
              </h1>
              <p className="text-white text-lg md:text-xl">
                Discover how Super Expeditors can help you maintain accountability, streamline processes, and achieve operational excellence.
              </p>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#FF6801] shadow transition-colors hover:bg-[#FF6801]/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Services
              </Link>
            </div>
            <img
              src= {image.src}
              width="500"
              height="500"
              alt="Accountability Services"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        
        <section id="courses" className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#045b2E] mb-4">Our Courses</h2>
            <p className="text-lg md:text-xl text-[#303030] mb-12">
              Super Expeditors offers a range of courses to help you and your team succeed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={ytp.src}
                  width="300"
                  height="200"
                  alt="Course Image"
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Yes To Punctuality (YTP)</h3>
                <p className="text-[#303030] mb-4">
                  Free masterclass to control procrastination and boost productivity.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                  prefetch={false}
                >
                  SAY NO TO PROCRASTINATION!

                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={ppm.src}
                  width="300"
                  height="200"
                  alt="Course Image"
                  className="w-full rounded-lg mb-4 h-60"
                />
                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Peak Pursuit Mavericks (PPM)</h3>
                <p className="text-[#303030] mb-4">
                  An elite community for ambitious individuals seeking to create more free time for themselves and loved ones -despite their busy schedules - without it affecting their productivity.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                  prefetch={false}
                >
                  REGAIN YOUR FREEDOM!
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={cic.src}
                  width="300"
                  height="600"
                  alt="Course Image"
                  className="w-full rounded-lg mb-4 h-60"
                />
                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Crust It Crew</h3>
                <p className="text-[#303030] mb-4">
                  Crush It Crew is a 30-day Accountability Coaching  that helps you Control procrastination and start getting things done by tracking your progress every day while using other methods to change how you think about your goals.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                  prefetch={false}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
