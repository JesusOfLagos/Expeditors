import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Nav } from "../nav"
import ytp from '@/public/ytp.jpeg'
import ppm from '@/public/ppm.jpeg'
import cic from '@/public/cic.jpeg'

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
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Crush It Crew</h3>
                                <p className="text-[#303030] mb-4">
                                Crush It Crew is a 30-day Accountability Coaching  that helps you Control procrastination and start getting things done by tracking your progress every day while using other methods to change how you think about your goals.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    CRUSH YOUR GOALS
                                </Link>
                            </div>
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
            
            <section id="faq" className="py-16 md:py-24 lg:py-32 bg-[#FF6801] text-white">
                    <div className="w-full max-w-5xl mx-auto py-12 md:py-20">
                        <div className="space-y-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                                <p className="text-muted-foreground mt-2">Get answers to the most common questions about our courses.</p>
                            </div>
                            <div className="space-y-4">
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">Who do we serve?
                                        </h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                            Super Expeditors began as an Accountability Coaching platform serving a broad clientele, including students and entrepreneurs. Now, it has refined its focus. Super Expeditors is now targeted at helping Entrepreneurs/business owners, Creatives, and Executives achieve their unconventional goals, maintain accountability, and create More FREE TIME in their busy lives through specialized coaching and strategies.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">What is PPM?</h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                        Peak Pursuit Mavericks is a group of independent thinkers who are not afraid to take risks, challenge conventional ideas, and explore new paths to achieve their goals. They are in relentless pursuit of reaching the highest levels of accomplishment and personal growth. The members of this group are not afraid to challenge the status quo, explore new territories, and crave their own path to success.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">How does the PPM community work?</h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                        The PPM (Peak Pursuit Mavericks) community helps you feel happy and fulfilled in the work you do. The aim is to assist you in creating more free time for yourself and loved ones, control procrastination, and connect you with ambitious peers, while making your unconventional dreams a reality through a supportive community that encourages growth, accountability, and the pursuit of daring goals.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">Do you offer personalized coaching?</h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                        Yes, we offer personalized coaching. We often hold personalized coaching sessions to help you achieve a particular unique goal or a specific problem you maybe struggling with.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">Where should I start from? </h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                        You can start by joining the YTP program for FREE. Just click the link in our bio, sign up with your email address, and the program is ALL YOURS.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">Who can I contact? </h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                        Kindly reach out to us at Superexpeditors@gmail.com for any question or enquiry, or send a message on Instagram/LinkedIn @superexpeditors.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                        </div>
                    </div>
                </section>

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
