import Link from 'next/link';

import { Container } from '@/components/Container';
import { FadeIn } from '@/components/uis/FadeIn';
import { Logo } from '@/components/COHILogo';
import { socialMediaProfiles } from '@/components/SocialMedia';

const navigation = [
    {
        title: 'FCMF',
        links: [
            { title: 'About Us', href: '/about' },
            { title: 'Our Mission', href: '/mission' },
            { title: 'Programs', href: '/programs' },
            { title: 'Gallery', href: '/gallery' },
            { title: 'Our Stories', href: '/blogs' },
        ],
    },
    {
        title: 'ULSP',
        links: [
            { title: 'About', href: '/about' },
            { title: 'Board Of Trustees', href: '/board' },
            { title: 'Events', href: '/blog' },
            { title: 'Contact us', href: '/contact' },
        ],
    },
    {
        title: 'Connect',
        links: socialMediaProfiles,
    },
];

function Navigation() {
    return (
        <nav>
            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                {navigation.map((section, sectionIndex) => (
                    <li key={sectionIndex}>
                        <div className="font-display text-sm font-semibold tracking-wider text-purple-950">
                            {section.title}
                        </div>
                        <ul role="list" className="mt-4 text-sm text-purple-950">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mt-4">
                                    <Link
                                        href={link.href}
                                        className="transition hover:text-neutral-950"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
            />
        </svg>
    );
}

function NewsletterForm() {
    return (
        <form className="max-w-sm">
            <h2 className="font-display text-sm font-semibold tracking-wider text-purple-950">
                Sign up for our newsletter
            </h2>
            <p className="mt-4 text-sm text-purple-700">
            Join our newsletter for exclusive tips, strategies, and inspiration to control Procrastination and achieve your Unconventional Goals
            </p>
            <div className="relative mt-6">
                <input
                    type="email"
                    placeholder="Email address"
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-2xl border border-purple-950 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-purple-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                    <button
                        type="submit"
                        aria-label="Submit"
                        className="flex aspect-square h-full items-center justify-center rounded-xl bg-purple-950 text-white transition hover:bg-purple-300"
                    >
                        <ArrowIcon className="w-4" />
                    </button>
                </div>
            </div>
        </form>
    );
}

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
            <FadeIn>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <Navigation />
                    <div className="flex lg:justify-end">
                        <NewsletterForm />
                    </div>
                </div>
                <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
                    <Link href="/" aria-label="Home">
                        <Logo className="h-8" fillOnHover />
                    </Link>
                    <p className="text-sm text-purple-700">
                        © Salaam From The Team. {new Date().getFullYear()}
                    </p>
                </div>
            </FadeIn>
        </Container>
    );
}
