'use client'



import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Nav } from "./nav"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Footer } from "@/components/Footer"

export const Landing: React.FC = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-[#045b2E] py-4 px-6">
                <Nav />
            </header>
            <main className="flex-1">
                <section className="bg-[#045b2E] py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                Accountability Services for Your Business
                            </h1>
                            <p className="text-lg md:text-xl text-white mb-8">
                                Super Expeditors provides comprehensive accountability services to help your business thrive.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                                prefetch={false}
                            >
                                Get Started
                            </Link>
                        </div>
                        <img
                            src="/placeholder.svg"
                            width="500"
                            height="400"
                            alt="Hero Image"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>
                </section>
                <section id="about" className="py-16 md:py-24 lg:py-32 bg-[#303030]">
                    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                        <img
                            src="/placeholder.svg"
                            width="500"
                            height="400"
                            alt="About Us"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h2>
                            <p className="text-lg md:text-xl text-white mb-8">
                                Super Expeditors is a leading provider of accountability services, helping businesses of all sizes achieve
                                their goals. Our team of experts is dedicated to delivering tailored solutions that empower our clients
                                to succeed.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="services" className="py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#045b2E] mb-4">Our Services</h2>
                        <p className="text-lg md:text-xl text-[#303030] mb-12">
                            Super Expeditors offers a range of accountability services to help your business succeed.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <ClipboardIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Performance Tracking</h3>
                                <p className="text-[#303030]">
                                    We help you track and analyze your business performance to identify areas for improvement.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PieChartIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Financial Reporting</h3>
                                <p className="text-[#303030]">
                                    Our financial reporting services provide you with accurate and up-to-date information to make informed
                                    decisions.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <CheckIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Compliance Monitoring</h3>
                                <p className="text-[#303030]">
                                    We help you stay compliant with relevant laws and regulations, ensuring your business operates
                                    ethically and legally.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="py-16 md:py-24 lg:py-32 bg-[#303030]">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Key Features</h2>
                        <p className="text-lg md:text-xl text-white mb-12">
                            Super Expeditors offers a range of features to help your business succeed.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <ClipboardIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Real-time Reporting</h3>
                                <p className="text-[#303030]">Get instant access to up-to-date performance metrics and analytics.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PieChartIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Customizable Dashboards</h3>
                                <p className="text-[#303030]">
                                    Tailor your dashboard to display the metrics that matter most to your business.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <CheckIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Automated Alerts</h3>
                                <p className="text-[#303030]">
                                    Get notified of important changes or issues so you can address them quickly.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <ClipboardIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Benchmarking</h3>
                                <p className="text-[#303030]">Compare your performance against industry standards and competitors.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PieChartIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Predictive Analytics</h3>
                                <p className="text-[#303030]">
                                    Leverage our advanced analytics to forecast future trends and make data-driven decisions.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <CheckIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Compliance Automation</h3>
                                <p className="text-[#303030]">
                                    Streamline your compliance processes and reduce the risk of non-compliance.
                                </p>
                            </div>
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
                                    src="/placeholder.svg"
                                    width="300"
                                    height="200"
                                    alt="Course Image"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Introduction to Accountability</h3>
                                <p className="text-[#303030] mb-4">
                                    Learn the fundamentals of accountability and how it can benefit your business.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    Enroll Now
                                </Link>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src="/placeholder.svg"
                                    width="300"
                                    height="200"
                                    alt="Course Image"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Financial Reporting Essentials</h3>
                                <p className="text-[#303030] mb-4">
                                    Gain a deep understanding of financial reporting and how to leverage it for your business.
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                                    prefetch={false}
                                >
                                    Enroll Now
                                </Link>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img
                                    src="/placeholder.svg"
                                    width="300"
                                    height="200"
                                    alt="Course Image"
                                    className="w-full rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Compliance Mastery</h3>
                                <p className="text-[#303030] mb-4">
                                    Dive deep into compliance best practices and ensure your business operates ethically and legally.
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
                <section id="testimonials" className="py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#045b2E] mb-4">What Our Clients Say</h2>
                        <p className="text-lg md:text-xl text-[#303030] mb-12">
                            Hear from our satisfied clients about their experience with Super Expeditors.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <Avatar className="w-12 h-12 mr-4">
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#045b2E]">John Doe</h4>
                                        <p className="text-[#303030]">CEO, Acme Corp</p>
                                    </div>
                                </div>
                                <p className="text-[#303030] mb-4">
                                    &quot;Super Expeditors has been a game-changer for our business. Their\n accountability services have helped us
                                    improve our performance\n and make more informed decisions.&quot;
                                </p>
                                <div />
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <Avatar className="w-12 h-12 mr-4">
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#045b2E]">Jane Smith</h4>
                                        <p className="text-[#303030]">CFO, Widgets Inc</p>
                                    </div>
                                </div>
                                <p className="text-[#303030] mb-4">
                                    &quot;I highly recommend Super Expeditors to any business looking to\n improve their financial reporting and
                                    compliance. Their team\n is knowledgeable and responsive.&quot;
                                </p>
                                <div />
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <Avatar className="w-12 h-12 mr-4">
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#045b2E]">Michael Johnson</h4>
                                        <p className="text-[#303030]">COO, Gadgets LLC</p>
                                    </div>
                                </div>
                                <p className="text-[#303030] mb-4">
                                    &quot;Super Expeditors has been instrumental in helping us stay compliant\n and identify areas for improvement.
                                    Their expertise has been\n invaluable to our business.&quot;
                                </p>
                                <div />
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
                                        <h3 className="text-lg font-semibold">What courses do you offer?</h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                            We offer a wide range of courses in various subjects, including web development, data science, machine
                                            learning, and more. Our courses are designed to cater to learners of all levels, from beginners to
                                            advanced.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">How long are the courses?</h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                            The duration of our courses varies depending on the subject and the level of depth. Most of our courses
                                            are self-paced, allowing you to learn at your own pace. However, we also offer some instructor-led
                                            courses with set schedules.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Collapsible className="bg-green-800">
                                    <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted px-6 py-4 rounded-md">
                                        <h3 className="text-lg font-semibold">Do you offer any certifications?</h3>
                                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="px-6 py-4">
                                        <p className="text-muted-foreground">
                                            Yes, we offer various certifications upon successful completion of our courses. These certifications are
                                            recognized by industry leaders and can help you demonstrate your skills and knowledge to potential
                                            employers.
                                        </p>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
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


function CheckIcon(props: any) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ClipboardIcon(props: any) {
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
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
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


function PieChartIcon(props: any) {
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
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
            <path d="M22 12A10 10 0 0 0 12 2v10z" />
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