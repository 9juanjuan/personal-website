import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, Dumbbell } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "2Blendz Barber Shop Website",
      description: "Modern barbershop website with online booking system, service showcase, and customer testimonials. Built with React and integrated with scheduling API.",
      image: "./2blendz-website.jpg",
      technologies: ["React", "Node.js", "Stripe API", "Booking System"],
      category: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      features: [
        "Online appointment booking",
        "Service catalog with pricing",
        "Customer review system",
        "Mobile-responsive design",
        "Payment integration"
      ],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "Juan transformed our barbershop's online presence. The booking system has increased our efficiency by 40% and we're getting more customers than ever.",
        author: "Jose Rayos, Owner"
      }
    },
    {
      id: 2,
      title: "Amplio Fitness Studio Website",
      description: "Comprehensive fitness studio website with class schedules, trainer profiles, membership management, and workout tracking features.",
      image: "./amplio-website.jpg", 
      technologies: ["React", "TypeScript", "Firebase", "Stripe"],
      category: "Web Development",
      icon: <Dumbbell className="h-6 w-6" />,
      features: [
        "Class scheduling system",
        "Membership management",
        "Trainer profiles and bios",
        "Workout tracking dashboard",
        "Payment processing"
      ],
      liveUrl: "#",
      githubUrl: "#",
      testimonial: {
        text: "The website Juan built for us is incredible. Our members love the new booking system and we've seen a 60% increase in online class registrations.",
        author: "Belle Ursa, Fitness Instructor"
      }
    },
    {
      id: 3,
      title: "E-Commerce Fashion Store",
      description: "Full-stack e-commerce platform with product catalog, shopping cart, payment processing, and admin dashboard for inventory management.",
      image: "./fashion-store.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "E-Commerce",
      icon: <ShoppingCart className="h-6 w-6" />,
      features: [
        "Product catalog with search/filter",
        "Shopping cart and checkout",
        "User authentication",
        "Admin dashboard",
        "Inventory management",
        "Order tracking"
      ],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        conversion: "3.2% conversion rate",
        performance: "95+ PageSpeed score",
        sales: "$50K+ in first quarter"
      }
    },
    {
      id: 4,
      title: "Fitness Tracking Mobile App",
      description: "React Native mobile app for workout tracking, progress monitoring, and social fitness challenges with real-time data sync.",
      image: "./fitness-app.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      features: [
        "Workout tracking and logging",
        "Progress visualization",
        "Social challenges",
        "Push notifications",
        "Offline data sync",
        "Wearable device integration"
      ],
      appStoreUrl: "#",
      playStoreUrl: "#",
      stats: {
        downloads: "10K+ downloads",
        rating: "4.8/5 star rating",
        retention: "75% user retention"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Portfolio Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Showcasing successful web and mobile solutions that drive business growth
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Each project represents a unique challenge solved with modern technology, 
            resulting in measurable business impact and satisfied clients.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <Card key={project.id} className={`overflow-hidden ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex`}>
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-20">
                      {project.icon}
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      {project.icon}
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-3">{project.title}</CardTitle>
                    <CardDescription className="text-base text-slate-600 dark:text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats or Testimonial */}
                    {project.stats && (
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">Results:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                          {Object.values(project.stats).map((stat, idx) => (
                            <div key={idx} className="text-green-700 dark:text-green-300">
                              {stat}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.testimonial && (
                      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <blockquote className="text-slate-700 dark:text-slate-300 italic mb-2">
                          "{project.testimonial.text}"
                        </blockquote>
                        <cite className="text-blue-600 dark:text-blue-400 font-medium">
                          — {project.testimonial.author}
                        </cite>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Site
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      )}
                      {project.appStoreUrl && (
                        <Button variant="outline" href={project.appStoreUrl} target="_blank" rel="noopener noreferrer">
                          <Smartphone className="mr-2 h-4 w-4" />
                          App Store
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with a custom web or mobile solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" href="mailto:garcia.juan1994@gmail.com">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900" href="/">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
