'use client'



import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Nav } from "./nav"
import image from '@/public/account1.jpg'
import image2 from '@/public/tell/account5.jpg'
import ytp from '@/public/ytp.jpeg'
import ppm from '@/public/ppm.jpeg'
import cic from '@/public/cic.jpeg'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Footer } from "@/components/Footer"
import TestimonialGallery from "./testimonial"
import BookingPage from "./booking/services"

export const Landing: React.FC = () => {
    return (
        <div style={{ fontFamily: 'BWGradual' }} className="flex flex-col min-h-[100dvh]">
            <header className="bg-[#045b2E] py-4 px-6">
                <Nav />
            </header>
            <main className="flex-1">
                <section className="bg-[#045b2E] py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold text-white mb-4">
                            Elite Accountability Coaching for High-Value Individuals aiming to achieve Unconventional Goals and create MORE Personal Time.                            </h1>
                            <p className="text-lg md:text-xl text-white mb-8">
                            At Super Expeditors, we empower YOU to conquer your Goals, Control Procrastination, and have the Freedom you DESIRE.                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                                prefetch={false}
                            >
                                 LET’S GET STARTED
                            </Link>
                        </div>
                        <img
                            src={image.src}
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
                            src={image2.src}
                            width="500"
                            height="400"
                            alt="About Us"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h2>
                            <p className="text-lg md:text-xl text-white mb-8">
                                We&apos;re not just another coaching company, we give you strategies that make  you achieve your Unconventional Goals, prioritize feeling great about your work, and create more free time in your busy life while remaining accountable to your dream.
                            </p>
                            <p className="text-lg md:text-xl text-white mb-8">
                                Our elite Accountability strategies are designed to make you the very BEST version of yourself without sacrificing time spent with your family...family, loved ones, or your freedom.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#FF6801] text-white font-medium hover:bg-[#d95700] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                                prefetch={false}
                            >
                                SMASH YOUR UNCONVENTIONAL GOALS NOW
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="services" className="py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#045b2E] mb-4">Our Services</h2>
                        <p className="text-lg md:text-xl text-[#303030] mb-12">
                            At Super Expeditors, we transform your vision, your Unconventional Goals, and your dreams and bring them to life with our premier services:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <ClipboardIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Crystal-Clear Goal Setting</h3>
                                <p className="text-[#303030]">
                                    We turn your dreams into detailed, actionable plans that propel your business and life forward.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PieChartIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Laser-Focused Progress Tracking</h3>
                                <p className="text-[#303030]">
                                    We make sure you stay ahead of the game with our state-of-the-art tracking tools that provide instant clarity on your journey.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <CheckIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Dynamic Coaching & Unwavering Support</h3>
                                <p className="text-[#303030]">
                                    We also ensure that you conquer any challenge with our expert guidance and steadfast support, ensuring you achieve greatness.
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
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Customized Accountability Plans Just For You</h3>
                                <p className="text-[#303030]">We create tailored strategies to fit your unique goals, schedule, and lifestyle.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <PieChartIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Time Reclamation Techniques</h3>
                                <p className="text-[#303030]">
                                    We help you create more free time for yourself while increasing productivity in all areas of life.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <CheckIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">High-Performance Coaching</h3>
                                <p className="text-[#303030]">
                                    We give you access to expert guidance for unconventional goal achievement.
                                </p>
                            </div>
                            {/* <div className="bg-white rounded-lg shadow-lg p-6">
                                <ClipboardIcon className="h-12 w-12 text-[#FF6801] mb-4" />
                                <h3 className="text-xl font-bold text-[#045b2E] mb-2">Performance Tracking</h3>
                                <p className="text-[#303030]">We help you track your growth, fuel your progress, and fine-tune your approach.</p>
                            </div> */}
                            {/* <div className="bg-white rounded-lg shadow-lg p-6">
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
                            </div> */}
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
                <section id="testimonials" className="py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <TestimonialGallery />
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        </div> */}
                        <BookingPage />
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