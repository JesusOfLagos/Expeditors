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
                  THE HIDDEN COST OF HUSTLE CULTURE
                  </div>
                  <p className="text-white line-clamp-2">
                  How prioritizing work above all else can lead to burnout and personal life neglect.
                  </p>
                  <a className="bg-[#045B2E] hover:bg-[#FF6801] py-2 w-36 rounded-full px-6" href="https://www.linkedin.com/posts/super-expeditors_hustleculture-redefiningsuccess-activity-7226508165754871808-nVo1?utm_source=share&utm_medium=member_android">Read More.</a>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                  THE BIGGEST LIE EVER!
                  </div>
                  <p className="text-white line-clamp-2">
                  Discover why the &quot;self-made entrepreneur&quot; is a myth and how embracing support can skyrocket your success.
                  </p>
                  <a className="bg-[#045B2E] hover:bg-[#FF6801] py-2 w-36 rounded-full px-6" href="https://www.linkedin.com/posts/super-expeditors_entrepreneurialmindset-unconventionalgoals-activity-7229502318679908352-Adil?utm_source=share&utm_medium=member_android">Read More.</a>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                  WHEN NEXT YOU ARE TEMPTED WITH PERFECTIONISM - DO THIS!
                  </div>
                  <p className="text-white line-clamp-2">
                  Find out why being perfect can actually hurt your success. Learn 5 easy ways to get more done by letting go of perfectionism.
                  </p>
                  <a className="bg-[#045B2E] hover:bg-[#FF6801] py-2 w-36 rounded-full px-6" href="https://www.linkedin.com/posts/super-expeditors_breakingperfectionism-unconventionalgoals-activity-7230128917058080768-yAD7?utm_source=share&utm_medium=member_android">Read More.</a>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#045B2E]">Visuals</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                  DO YOU CONSTANTLY BLAME YOURSELF FOR YOUR FAILURES?
                  </div>
                  <p className="text-white line-clamp-2">
                  Struggling with guilt over unfinished goals? Here’s a healthier approach to self-accountability.
                  </p>
                  <a className="bg-[#045B2E] hover:bg-[#FF6801] py-2 w-24 rounded-full px-2" href="https://www.instagram.com/p/C4dyWfZIjoj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">See More!</a>
                </Link>
                <Link
                  href="#"
                  className="group grid h-auto w-full items-start justify-start text-white gap-2 rounded-md bg-[#FF6801] p-4 transition-colors hover:bg-[#045B2E] hover:text-[#FF6801] focus:bg-[#045B2E] focus:text-[#FF6801] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="text-lg font-medium leading-none group-hover:underline">
                  THE HIDDEN COSTS OF PROCRASTINATION (AND HOW TO STOP PAYING THEM)
                  </div>
                  <p className="text-white line-clamp-2">
                  Learn how to avoid the hidden costs of procrastination - both financial and emotional. 
                  </p>
                  <a className="bg-[#045B2E] hover:bg-[#FF6801] py-2 w-24 rounded-full px-2" href="https://www.instagram.com/p/C86blUco2wR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">See more!</a>
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
