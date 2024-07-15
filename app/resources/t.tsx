
import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container max-w-6xl px-4 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resources</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our collection of blog articles, whitepapers, webinars, and FAQs to stay informed and empowered.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Blog</h3>
                <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                  View All
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Stay up-to-date with the latest industry trends, tips, and best practices.
              </p>
              <div className="mt-4 grid gap-4">
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-primary">
                      Navigating the Challenges of Remote Work
                    </h4>
                    <p className="text-xs text-muted-foreground">Published on April 15, 2023</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-primary">
                      Optimizing Productivity: Tips for Busy Professionals
                    </h4>
                    <p className="text-xs text-muted-foreground">Published on March 28, 2023</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Whitepapers</h3>
                <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                  View All
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Dive deep into industry insights and analyses with our comprehensive whitepapers.
              </p>
              <div className="mt-4 grid gap-4">
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-primary">
                      The Future of Accountability: Trends and Predictions
                    </h4>
                    <p className="text-xs text-muted-foreground">Published on June 1, 2023</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-primary">
                      Navigating the Regulatory Landscape: A Compliance Guide
                    </h4>
                    <p className="text-xs text-muted-foreground">Published on April 20, 2023</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Webinars</h3>
                <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                  View All
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore our on-demand webinars and stay informed about upcoming events.
              </p>
              <div className="mt-4 grid gap-4">
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-primary">
                      Mastering Accountability: Strategies for Effective Team Management
                    </h4>
                    <p className="text-xs text-muted-foreground">Recorded on May 10, 2023</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </Link>
                <Link
                  href="#"
                  className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium group-hover:text-primary">
                      Upcoming Webinar: Embracing Transparency in the Workplace
                    </h4>
                    <p className="text-xs text-muted-foreground">June 15, 2023 at 2:00 PM EST</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">FAQs</h3>
                <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                  View All
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Get answers to your questions about our services and how we can help your business.
              </p>
              <div className="mt-4 grid gap-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted p-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                    <h4 className="text-sm font-medium">What services do you offer?</h4>
                    <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pt-2 text-sm text-muted-foreground">
                    We offer a range of accountability services, including performance tracking, goal setting, and
                    progress monitoring. Our team of experts can work with you to develop a customized solution for your
                    business needs.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted p-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                    <h4 className="text-sm font-medium">How do I get started?</h4>
                    <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pt-2 text-sm text-muted-foreground">
                    To get started, simply contact us to schedule a consultation. Our team will work with you to
                    understand your goals and develop a customized plan to help you achieve them.
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted p-3 transition-colors hover:bg-accent hover:text-accent-foreground">
                    <h4 className="text-sm font-medium">What is the cost of your services?</h4>
                    <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-3 pt-2 text-sm text-muted-foreground">
                    The cost of our services varies depending on the specific needs of your business. We offer flexible
                    pricing options to ensure that our services are accessible and affordable. Contact us for a
                    personalized quote.
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

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
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