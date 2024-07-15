
import Link from "next/link"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"

export const PartialCourse = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Unlock Your Potential with Our Courses
            </h1>
            <p className="text-primary-foreground text-lg md:text-xl">
              Explore our wide range of courses and take the first step towards achieving your goals.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Browse Courses
            </Link>
          </div>
          <img
            src="/placeholder.svg"
            width="500"
            height="500"
            alt="Courses"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full">
            <CardContent className="flex flex-col gap-4">
              <div>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Learn the latest web development technologies and build modern, responsive websites.
                </CardDescription>
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex flex-col gap-4">
              <div>
                <CardTitle>Data Science</CardTitle>
                <CardDescription>
                  Dive into the world of data and learn how to extract valuable insights from complex datasets.
                </CardDescription>
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex flex-col gap-4">
              <div>
                <CardTitle>Digital Marketing</CardTitle>
                <CardDescription>
                  Explore the latest digital marketing strategies and learn how to effectively promote your business
                  online.
                </CardDescription>
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex flex-col gap-4">
              <div>
                <CardTitle>Artificial Intelligence</CardTitle>
                <CardDescription>
                  Dive into the world of AI and learn how to build intelligent systems that can solve complex problems.
                </CardDescription>
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex flex-col gap-4">
              <div>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>
                  Learn the essential skills and techniques to effectively manage projects and lead teams to success.
                </CardDescription>
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex flex-col gap-4">
              <div>
                <CardTitle>Graphic Design</CardTitle>
                <CardDescription>
                  Unleash your creativity and learn the fundamentals of graphic design to create stunning visuals.
                </CardDescription>
              </div>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Web Development</h1>
            <p className="text-primary-foreground text-lg md:text-xl">
              Learn the latest web development technologies and build modern, responsive websites. Our comprehensive
              course covers HTML, CSS, JavaScript, and popular frameworks like React and Vue.js.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Enroll Now
            </Link>
          </div>
          <img
            src="/placeholder.svg"
            width="500"
            height="500"
            alt="Web Development"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Course Curriculum</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Dive into the details of what you&apos;;ll learn in this course.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">HTML and CSS</h3>
              <p className="text-muted-foreground">
                Learn the fundamentals of HTML and CSS to create the structure and styling of web pages.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">JavaScript Essentials</h3>
              <p className="text-muted-foreground">
                Dive into the world of JavaScript and learn how to add interactivity and dynamic functionality to your
                web applications.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">React.js</h3>
              <p className="text-muted-foreground">
                Explore the popular React.js library and learn how to build modern, component-based user interfaces.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Responsive Design</h3>
              <p className="text-muted-foreground">
                Learn techniques to create websites that adapt seamlessly to different screen sizes and devices.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Web Deployment</h3>
              <p className="text-muted-foreground">
                Discover how to deploy your web applications to the internet and make them accessible to the world.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Best Practices</h3>
              <p className="text-muted-foreground">
                Explore industry-standard best practices for web development to ensure your projects are maintainable
                and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <img
            src="/placeholder.svg"
            width="500"
            height="500"
            alt="Instructor"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your Instructor</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              John Doe is an experienced web developer and instructor with over 10 years of industry experience. He has
              a passion for teaching and helping students achieve their goals.
            </p>
            <div className="flex items-center gap-4">
              <img src="/placeholder.svg" width="64" height="64" alt="Instructor" className="rounded-full" />
              <div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-muted-foreground">Web Development Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Hear from our satisfied students about their experience with our courses.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                  &quot;The Web Development course was a game-changer for me. The\n instructor&apos;s teaching style and the
                    hands-on projects\n really helped me grasp the concepts.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <img src="/placeholder.svg" width="40" height="40" alt="Student" className="rounded-full" />
                    <div>
                      <h3 className="text-base font-bold">Jane Doe</h3>
                      <p className="text-muted-foreground text-sm">Web Developer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                  &quot;I was hesitant to take the Graphic Design course, but the\n instructor&apos;s passion and the
                    well-structured curriculum\n made it an incredibly rewarding experience.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <img src="/placeholder.svg" width="40" height="40" alt="Student" className="rounded-full" />
                    <div>
                      <h3 className="text-base font-bold">John Smith</h3>
                      <p className="text-muted-foreground text-sm">Graphic Designer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                  &quot;The Data Science course was a challenging but incredibly\n rewarding experience. The instructor&apos;s
                    expertise and the\n hands-on projects really prepared me for a career in data\n analytics.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <img src="/placeholder.svg" width="40" height="40" alt="Student" className="rounded-full" />
                    <div>
                      <h3 className="text-base font-bold">Sarah Lee</h3>
                      <p className="text-muted-foreground text-sm">Data Analyst</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}