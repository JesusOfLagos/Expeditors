// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Nav } from "../nav"
// import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
// import { Footer } from "@/components/Footer"

// export const Course: React.FC = () => {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Nav />
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF6801]">
//           <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//             <div className="space-y-4">
//               <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//                 Unlock Your Potential with Our Courses
//               </h1>
//               <p className="text-white text-lg md:text-xl">
//                 Explore our wide range of courses and take the first step towards achieving your goals.
//               </p>
//               <Link
//                 href="#"
//                 className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#FF6801] shadow transition-colors hover:bg-[#FF6801]/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//                 prefetch={false}
//               >
//                 Browse Courses
//               </Link>
//             </div>
//             <img
//               src="/placeholder.svg"
//               width="500"
//               height="500"
//               alt="Courses"
//               className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
//             />
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             <Card className="h-full">
//               <CardContent className="flex flex-col gap-4">
//                 <div>
//                   <CardTitle>Web Development</CardTitle>
//                   <CardDescription>
//                     Learn the latest web development technologies and build modern, responsive websites.
//                   </CardDescription>
//                 </div>
//                 <Link
//                   href="#"
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Learn More
//                 </Link>
//               </CardContent>
//             </Card>
//             <Card className="h-full">
//               <CardContent className="flex flex-col gap-4">
//                 <div>
//                   <CardTitle>Data Science</CardTitle>
//                   <CardDescription>
//                     Dive into the world of data and learn how to extract valuable insights from complex datasets.
//                   </CardDescription>
//                 </div>
//                 <Link
//                   href="#"
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Learn More
//                 </Link>
//               </CardContent>
//             </Card>
//             <Card className="h-full">
//               <CardContent className="flex flex-col gap-4">
//                 <div>
//                   <CardTitle>Digital Marketing</CardTitle>
//                   <CardDescription>
//                     Explore the latest digital marketing strategies and learn how to effectively promote your business
//                     online.
//                   </CardDescription>
//                 </div>
//                 <Link
//                   href="#"
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Learn More
//                 </Link>
//               </CardContent>
//             </Card>
//             <Card className="h-full">
//               <CardContent className="flex flex-col gap-4">
//                 <div>
//                   <CardTitle>Artificial Intelligence</CardTitle>
//                   <CardDescription>
//                     Dive into the world of AI and learn how to build intelligent systems that can solve complex problems.
//                   </CardDescription>
//                 </div>
//                 <Link
//                   href="#"
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Learn More
//                 </Link>
//               </CardContent>
//             </Card>
//             <Card className="h-full">
//               <CardContent className="flex flex-col gap-4">
//                 <div>
//                   <CardTitle>Project Management</CardTitle>
//                   <CardDescription>
//                     Learn the essential skills and techniques to effectively manage projects and lead teams to success.
//                   </CardDescription>
//                 </div>
//                 <Link
//                   href="#"
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Learn More
//                 </Link>
//               </CardContent>
//             </Card>
//             <Card className="h-full">
//               <CardContent className="flex flex-col gap-4">
//                 <div>
//                   <CardTitle>Graphic Design</CardTitle>
//                   <CardDescription>
//                     Unleash your creativity and learn the fundamentals of graphic design to create stunning visuals.
//                   </CardDescription>
//                 </div>
//                 <Link
//                   href="#"
//                   className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Learn More
//                 </Link>
//               </CardContent>
//             </Card>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-[#045B2E]">
//           <div className="container space-y-12 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <div className="inline-block rounded-lg bg-[#FF6801] px-3 py-1 text-sm">Our Courses</div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
//                   Elevate Your Skills with Our Comprehensive Courses
//                 </h2>
//                 <p className="max-w-[900px] text-[#D3D3D3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Unlock your full potential with our expertly crafted courses designed to help you master new skills
//                   and advance your career.
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
//               <div className="grid gap-4">
//                 <div className="relative group">
//                   <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//                     <span className="sr-only">View Course</span>
//                   </Link>
//                   <img
//                     src="/placeholder.svg"
//                     alt="Course Image"
//                     width={400}
//                     height={225}
//                     className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
//                   />
//                 </div>
//                 <div className="grid gap-1">
//                   <h3 className="text-lg font-bold text-white">Introduction to Web Development</h3>
//                   <p className="text-sm text-[#D3D3D3]">
//                     Learn the fundamentals of web development and build your first website.
//                   </p>
//                   <div className="flex items-center gap-2">
//                     <div className="flex items-center gap-0.5 text-xs font-semibold text-white">
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#303030] stroke-[#D3D3D3]" />
//                     </div>
//                     <span className="text-xs font-semibold text-white">4.8 (1,234)</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <ClockIcon className="w-4 h-4 text-[#D3D3D3]" />
//                     <span className="text-sm font-medium text-[#D3D3D3]">12 hours</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <DollarSignIcon className="w-4 h-4 text-[#D3D3D3]" />
//                     <span className="text-sm font-medium text-[#D3D3D3]">$99</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid gap-4">
//                 <div className="relative group">
//                   <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//                     <span className="sr-only">View Course</span>
//                   </Link>
//                   <img
//                     src="/placeholder.svg"
//                     alt="Course Image"
//                     width={400}
//                     height={225}
//                     className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
//                   />
//                 </div>
//                 <div className="grid gap-1">
//                   <h3 className="text-lg font-bold text-white">Mastering JavaScript: From Beginner to Expert</h3>
//                   <p className="text-sm text-[#D3D3D3]">
//                     Dive deep into the world of JavaScript and become a proficient developer.
//                   </p>
//                   <div className="flex items-center gap-2">
//                     <div className="flex items-center gap-0.5 text-xs font-semibold text-white">
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#303030] stroke-[#D3D3D3]" />
//                     </div>
//                     <span className="text-xs font-semibold text-white">4.9 (2,456)</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <ClockIcon className="w-4 h-4 text-[#D3D3D3]" />
//                     <span className="text-sm font-medium text-[#D3D3D3]">24 hours</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <DollarSignIcon className="w-4 h-4 text-[#D3D3D3]" />
//                     <span className="text-sm font-medium text-[#D3D3D3]">$199</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid gap-4">
//                 <div className="relative group">
//                   <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
//                     <span className="sr-only">View Course</span>
//                   </Link>
//                   <img
//                     src="/placeholder.svg"
//                     alt="Course Image"
//                     width={400}
//                     height={225}
//                     className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
//                   />
//                 </div>
//                 <div className="grid gap-1">
//                   <h3 className="text-lg font-bold text-white">Responsive Web Design: Principles and Practices</h3>
//                   <p className="text-sm text-[#D3D3D3]">
//                     Learn how to create beautiful and responsive websites that work on any device.
//                   </p>
//                   <div className="flex items-center gap-2">
//                     <div className="flex items-center gap-0.5 text-xs font-semibold text-white">
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-[#FF6801]" />
//                       <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
//                     </div>
//                     <span className="text-xs font-sem" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF6801]">
//           <div className="container px-4 md:px-6 space-y-8">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
//               <p className="text-[#303030] text-lg md:text-xl">
//                 Hear from our satisfied students about their experience with our courses.
//               </p>
//             </div>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               <Card>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium">
//                       &quot;The Web Development course was a game-changer for me. The
//                       instructor&apos;s teaching style and the hands-on projects
//                       really helped me grasp the concepts.&quot;
//                     </p>
//                     <div className="flex items-center gap-2">
//                       <img src="/placeholder.svg" width="40" height="40" alt="Student" className="rounded-full" />
//                       <div>
//                         <h3 className="text-base font-bold">Jane Doe</h3>
//                         <p className="text-[#303030] text-sm">Web Developer</p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium">
//                       &quot;I was hesitant to take the Graphic Design course, but the
//                       instructor&apos;s passion and the well-structured curriculum
//                       made it an incredibly rewarding experience.&quot;
//                     </p>
//                     <div className="flex items-center gap-2">
//                       <img src="/placeholder.svg" width="40" height="40" alt="Student" className="rounded-full" />
//                       <div>
//                         <h3 className="text-base font-bold">John Smith</h3>
//                         <p className="text-[#303030] text-sm">Graphic Designer</p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium">
//                       &quot;The Data Science course was a challenging but incredibly
//                       rewarding experience. The instructor&apos;s
//                       expertise and the hands-on projects really prepared me for a career in data
//                       analytics.&quot;
//                     </p>
//                     <div className="flex items-center gap-2">
//                       <img src="/placeholder.svg" width="40" height="40" alt="Student" className="rounded-full" />
//                       <div>
//                         <h3 className="text-base font-bold">Sarah Lee</h3>
//                         <p className="text-[#303030] text-sm">Data Analyst</p>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </main>
//     </div>
//   )
// }

// function ClockIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   )
// }


// function DollarSignIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="12" x2="12" y1="2" y2="22" />
//       <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//     </svg>
//   )
// }


// function MountainIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }


// function StarIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   )
// }


// function XIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Nav } from "../nav"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/Footer"

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
              src="/placeholder.svg"
              width="500"
              height="500"
              alt="Accountability Services"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <CardTitle>Process Optimization</CardTitle>
                  <CardDescription>
                    Enhance your operational efficiency with our expert process optimization services.
                  </CardDescription>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <CardTitle>Compliance Monitoring</CardTitle>
                  <CardDescription>
                    Ensure your business meets all regulatory requirements with our compliance monitoring services.
                  </CardDescription>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <CardTitle>Risk Management</CardTitle>
                  <CardDescription>
                    Identify and mitigate risks with our comprehensive risk management strategies.
                  </CardDescription>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <CardTitle>Accountability Audits</CardTitle>
                  <CardDescription>
                    Conduct thorough audits to ensure accountability and improve transparency within your organization.
                  </CardDescription>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>
                    Analyze and optimize your business performance with our advanced analytics services.
                  </CardDescription>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col gap-4">
                <div>
                  <CardTitle>Strategic Planning</CardTitle>
                  <CardDescription>
                    Develop effective strategies to drive your business forward with our expert planning services.
                  </CardDescription>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#FF6801] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6801]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#045B2E]">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#FF6801] px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Transform Your Business with Our Proven Services
                </h2>
                <p className="max-w-[900px] text-[#D3D3D3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience exceptional service with Super Expeditors. Our solutions are tailored to enhance accountability, efficiency, and performance in your organization.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View Service</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt="Service Image"
                    width={400}
                    height={225}
                    className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
                  />
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Enhanced Process Efficiency</h3>
                  <p className="text-sm text-[#D3D3D3]">
                    Optimize your processes with our tailored efficiency solutions.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-xs font-semibold text-white">
                      <StarIcon className="w-4 h-4 fill-[#FF6801]" />
                      <StarIcon className="w-4 h-4 fill-[#FF6801]" />
                      <StarIcon className="w-4 h-4 fill-[#FF6801]" />
                      <StarIcon className="w-4 h-4 fill-[#FF6801



]" />
                      <StarIcon className="w-4 h-4 fill-[#FF6801]" />
                    </div>
                    <span className="text-xs text-[#D3D3D3]">5.0/5.0</span>
                  </div>
                </div>
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
