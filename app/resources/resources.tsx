
// import Link from "next/link"
// import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
// import { Nav } from "../nav"

// export const Resource: React.FC = () => {
//   return (
//     <div className="w-full">
//       <Nav />
//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources</h2>
//             <p className="max-w-[700px] text-muted-foreground md:text-xl">
//               Explore our collection of articles, whitepapers, webinars, and FAQs to learn more about our services and
//               the industry.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//         <div className="container px-4 md:px-6">
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold">Blog</h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     Navigating the Changing Landscape of Accountability Services
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Explore the latest trends and best practices in the accountability services industry.
//                   </p>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     Unlocking the Power of Accountability: Strategies for Success
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Learn how to leverage accountability to drive growth and achieve your goals.
//                   </p>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     The Importance of Accountability in the Digital Age
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Discover how accountability can help businesses navigate the challenges of the digital landscape.
//                   </p>
//                 </Link>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold">Whitepapers</h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     Driving Organizational Accountability: A Comprehensive Guide
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Explore strategies and best practices for fostering a culture of accountability within your
//                     organization.
//                   </p>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     The ROI of Accountability: Quantifying the Impact on Business Performance
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Discover the measurable benefits of implementing effective accountability practices.
//                   </p>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     Accountability in the Age of Remote Work: Strategies for Success
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Explore best practices for maintaining accountability in a distributed workforce.
//                   </p>
//                 </Link>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold">Webinars</h3>
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     Accountability in the Digital Age: Navigating the Challenges
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Join our experts as they discuss the evolving role of accountability in the digital landscape.
//                   </p>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     Building a Culture of Accountability: Strategies for Success
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Learn how to foster a culture of accountability within your organization.
//                   </p>
//                 </Link>
//                 <Link
//                   href="#"
//                   className="group grid h-auto w-full items-start justify-start gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
//                   prefetch={false}
//                 >
//                   <div className="text-lg font-medium leading-none group-hover:underline">
//                     Upcoming Webinar: Accountability in the Age of Remote Work
//                   </div>
//                   <p className="text-muted-foreground line-clamp-2">
//                     Register now to learn strategies for maintaining accountability in a distributed workforce.
//                   </p>
//                 </Link>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold">FAQs</h3>
//               <div className="space-y-4">
//                 <Collapsible>
//                   <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-background p-4 text-left transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
//                     <div className="text-lg font-medium">What is accountability and why is it important?</div>
//                     <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="px-4 pt-2 text-muted-foreground">
//                     Accountability is the acknowledgment and assumption of responsibility for actions, decisions, and
//                     policies. It is a critical component of effective organizations, as it helps to ensure that
//                     individuals and teams are held responsible for their work and that goals are achieved.
//                   </CollapsibleContent>
//                 </Collapsible>
//                 <Collapsible>
//                   <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-background p-4 text-left transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
//                     <div className="text-lg font-medium">How can I implement accountability in my organization?</div>
//                     <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="px-4 pt-2 text-muted-foreground">
//                     Implementing accountability in your organization involves establishing clear roles and
//                     responsibilities, setting measurable goals, and regularly reviewing progress. It&apos;s also important to
//                     foster a culture of transparency and open communication, where employees feel empowered to take
//                     ownership of their work and are held accountable for their actions.
//                   </CollapsibleContent>
//                 </Collapsible>
//                 <Collapsible>
//                   <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-background p-4 text-left transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
//                     <div className="text-lg font-medium">
//                       What are the benefits of working with an accountability services provider?
//                     </div>
//                     <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
//                   </CollapsibleTrigger>
//                   <CollapsibleContent className="px-4 pt-2 text-muted-foreground">
//                     Working with an accountability services provider can help your organization establish and maintain a
//                     culture of accountability, leading to improved productivity, better decision-making, and increased
//                     employee engagement. These providers offer a range of services, including coaching, training, and
//                     the development of accountability frameworks tailored to your specific needs.
//                   </CollapsibleContent>
//                 </Collapsible>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function ChevronDownIcon(props: any) {
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
//       <path d="m6 9 6 6 6-6" />
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
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Nav } from "../nav"

export const Resource: React.FC = () => {
  return (
    <div className="w-full">
      <div className="m-8">
        <Nav />
      </div>
      <section className="w-full py-12 mt-8 md:py-24 lg:py-32 bg-[#045B2E]">
        <div className="container px-4 md:px-6 mx-16">
          <div className="space-y-4 text-[#FF6801] mx-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources</h2>
            <p className="max-w-[700px] text-white md:text-xl">
              Explore our collection of articles, whitepapers, webinars, and FAQs to learn more about our services and
              the industry.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#045B2E]">Blog</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    Navigating the Changing Landscape of Accountability Services
                  </div>
                  <p className="text-white line-clamp-2">
                    Explore the latest trends and best practices in the accountability services industry.
                  </p>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    Unlocking the Power of Accountability: Strategies for Success
                  </div>
                  <p className="text-white line-clamp-2">
                    Learn how to leverage accountability to drive growth and achieve your goals.
                  </p>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    The Importance of Accountability in the Digital Age
                  </div>
                  <p className="text-white line-clamp-2">
                    Discover how accountability can help businesses navigate the challenges of the digital landscape.
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#045B2E]">Whitepapers</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    Driving Organizational Accountability: A Comprehensive Guide
                  </div>
                  <p className="text-white line-clamp-2">
                    Explore strategies and best practices for fostering a culture of accountability within your
                    organization.
                  </p>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    The ROI of Accountability: Quantifying the Impact on Business Performance
                  </div>
                  <p className="text-white line-clamp-2">
                    Discover the measurable benefits of implementing effective accountability practices.
                  </p>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    Accountability in the Age of Remote Work: Strategies for Success
                  </div>
                  <p className="text-white line-clamp-2">
                    Explore best practices for maintaining accountability in a distributed workforce.
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#045B2E]">Webinars</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    Accountability in the Digital Age: Navigating the Challenges
                  </div>
                  <p className="text-white line-clamp-2">
                    Join our experts as they discuss the evolving role of accountability in the digital landscape.
                  </p>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    Building a Culture of Accountability: Strategies for Success
                  </div>
                  <p className="text-white line-clamp-2">
                    Learn how to foster a culture of accountability within your organization.
                  </p>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                    Upcoming Webinar: Accountability in the Age of Remote Work
                  </div>
                  <p className="text-white line-clamp-2">
                    Register now to learn strategies for maintaining accountability in a distributed workforce.
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#045B2E]">FAQs</h3>
              <div className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-[#FF6801] p-4 text-left transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <div className="text-lg font-medium">What is accountability and why is it important?</div>
                    <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pt-2 text-[#FF6801]">
                    Accountability is the acknowledgment and assumption of responsibility for actions, decisions, and
                    policies. It is a critical component of effective organizations, as it helps to ensure that
                    individuals and teams are held responsible for their work and that goals are achieved.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-[#FF6801] p-4 text-left transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <div className="text-lg font-medium">How can I implement accountability in my organization?</div>
                    <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pt-2 text-[#FF6801]">
                    Implementing accountability in your organization involves establishing clear roles and
                    responsibilities, setting measurable goals, and regularly reviewing progress. It&apos;s also important to
                    foster a culture of transparency and open communication, where employees feel empowered to take
                    ownership of their work and are held accountable for their actions.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-[#FF6801] p-4 text-left transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    <div className="text-lg font-medium">
                      What are the benefits of working with an accountability services provider?
                    </div>
                    <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pt-2 text-[#FF6801]">
                    Working with an accountability services provider can help your organization establish and maintain a
                    culture of accountability, leading to improved productivity, better decision-making, and increased
                    employee engagement. These providers offer a range of services, including coaching, training, and
                    the development of accountability frameworks tailored to your specific needs.
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ChevronDownIcon(props: any) {
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
      <path d="m6 9 6 6 6-6" />
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
