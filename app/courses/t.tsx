// import Link from "next/link";
// import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

// export const PartialCourse = () => {
//   return (
//     <div className="flex flex-col min-h-dvh">
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-[#045B2E]">
//         <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//           <div className="space-y-4">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Web Development</h1>
//             <p className="text-white text-lg md:text-xl">
//               Learn the latest web development technologies and build modern, responsive websites. Our comprehensive
//               course covers HTML, CSS, JavaScript, and popular frameworks like React and Vue.js.
//             </p>
//             <Link
//               href="#"
//               className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#045B2E] shadow transition-colors hover:bg-[#045B2E]/90 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
//               prefetch={false}
//             >
//               Enroll Now
//             </Link>
//           </div>
//           <img
//             src="/placeholder.svg"
//             width="500"
//             height="500"
//             alt="Web Development"
//             className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
//           />
//         </div>
//       </section>
//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6 space-y-8">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Course Curriculum</h2>
//             <p className="text-[#303030] text-lg md:text-xl">
//               Dive into the details of what you&apos;ll learn in this course.
//             </p>
//           </div>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">HTML and CSS</h3>
//               <p className="text-[#303030]">
//                 Learn the fundamentals of HTML and CSS to create the structure and styling of web pages.
//               </p>
//             </div>
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">JavaScript Essentials</h3>
//               <p className="text-[#303030]">
//                 Dive into the world of JavaScript and learn how to add interactivity and dynamic functionality to your
//                 web applications.
//               </p>
//             </div>
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">Front-End Frameworks</h3>
//               <p className="text-[#303030]">
//                 Explore popular front-end frameworks like React and Vue.js, and learn how to build modern, scalable web
//                 applications.
//               </p>
//             </div>
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">Back-End Development</h3>
//               <p className="text-[#303030]">
//                 Learn the basics of back-end development, including server-side programming, databases, and APIs.
//               </p>
//             </div>
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">Version Control</h3>
//               <p className="text-[#303030]">
//                 Understand the importance of version control and learn how to use Git and GitHub for collaborative
//                 development.
//               </p>
//             </div>
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">Responsive Design</h3>
//               <p className="text-[#303030]">
//                 Learn the principles of responsive design and how to create web pages that look great on all devices.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-[#045B2E]">
//   <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//     <img
//       src="/placeholder.svg"
//       width="500"
//       height="500"
//       alt="Instructor"
//       className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
//     />
//     <div className="space-y-4">
//       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your Instructor</h2>
//       <p className="text-[#303030] text-lg md:text-xl">
//         John Doe is an experienced web developer and instructor with over 10 years of industry experience. He has
//         a passion for teaching and helping students achieve their goals.
//       </p>
//       <div className="flex items-center gap-4">
//         <img src="/placeholder.svg" width="64" height="64" alt="Instructor" className="rounded-full" />
//         <div>
//           <h3 className="text-xl font-bold">John Doe</h3>
//           <p className="text-[#303030]">Web Development Instructor</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   );
// };


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Nav } from "../nav"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/Footer"

export const PartialCourse: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Nav />
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
