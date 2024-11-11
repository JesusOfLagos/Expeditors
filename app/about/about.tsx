import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Footer } from "../../components/Footer"
import image2 from '@/public/tell/account5.jpg'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronDownIcon } from "@radix-ui/react-icons"

export const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF6801]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 text-wrap">
                  <h1 className="text-3xl text-wrap font-bold sm:text-5xl xl:text-6xl/none text-white">
                  We&apos;re not just another coaching company, we give you strategies that make  you achieve your Unconventional Goals, prioritize feeling great about your work, and create more free time in your busy life while remaining accountable to your dream.</h1>

                  <p className="max-w-[600px] text-[#303030] md:text-xl">
                  Our elite Accountability strategies are designed to make you the very BEST version of yourself without sacrificing time spent with your family, loved ones, or your freedom.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#045B2E] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#045B2E]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6801] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <img
                src={image2.src}
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF6801]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Approach to Accountability</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Super Expeditors, we know that true Accountability is built on a mix of structure, support, and personalized guidance. Our approach is crafted to keep high-value individuals on track and ensure that they reach their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                <BuildingIcon className="w-12 h-12 text-[#045B2E]" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Clear Structure</h3>
                  <p className="text-muted-foreground">
                    We provide a straightforward plan and regular check-ins to keep your momentum going.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                <PowerIcon className="w-12 h-12 text-[#045B2E]" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Consistent Support</h3>
                  <p className="text-muted-foreground">
                    Our experienced team is here with ongoing encouragement and advice.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                <UserPlusIcon className="w-12 h-12 text-[#045B2E]" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Personalized Guidance</h3>
                  <p className="text-muted-foreground">
                    We tailor our services to fit the unique needs and goals of every client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#303030]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Super Expeditors offers a range of services to help businesses stay on track and achieve their
                  goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                <GoalIcon className="w-12 h-12 text-[#045B2E]" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Goal Setting</h3>
                  <p className="text-muted-foreground">
                    We help businesses define clear, measurable goals and create a plan to achieve them.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                <WaypointsIcon className="w-12 h-12 text-[#045B2E]" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Progress Tracking</h3>
                  <p className="text-muted-foreground">
                    We provide regular check-ins and progress reports to help businesses stay on track.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                <CogIcon className="w-12 h-12 text-[#045B2E]" />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Coaching & Support</h3>
                  <p className="text-muted-foreground">
                    Our team of experienced coaches provides ongoing support and guidance to help businesses overcome
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      </main>
      <Footer />
    </div>
  )
}


function BuildingIcon(props: any) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CogIcon(props: any) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function GoalIcon(props: any) {
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
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
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


function PowerIcon(props: any) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function UserPlusIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}


function WaypointsIcon(props: any) {
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
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="m10.2 6.3-3.9 3.9" />
      <circle cx="4.5" cy="12" r="2.5" />
      <path d="M7 12h10" />
      <circle cx="19.5" cy="12" r="2.5" />
      <path d="m13.8 17.7 3.9-3.9" />
      <circle cx="12" cy="19.5" r="2.5" />
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