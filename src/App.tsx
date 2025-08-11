import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Briefcase, 
  User, 
  Calendar, 
  Globe,
  ShoppingCart,
  RefreshCw,
  FileText,
  Search,
  Palette,
  PenTool,
  Zap,
  Shield,
  Settings,
  Plug,
  Eye,
  Quote,
  Smartphone
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Juan Antonio Garcia
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="./profile.jpg" 
                alt="Juan Antonio Garcia - Web Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Juan Antonio Garcia
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Web Development & Digital Services
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Transform your business with custom websites, e-commerce solutions, and digital strategies that drive results. 
              From concept to launch, I deliver professional web solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" href="mailto:garcia.juan1994@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              My Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Professional web development services designed to help your business grow online.
              With experience at major news organizations and Fortune 500 financial institutions, 
              I bring enterprise-level expertise to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Development Services */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Custom Website Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored, responsive websites that reflect your brand and engage your audience. 
                  Built with modern technologies for optimal performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>E-Commerce Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure online stores with seamless checkout experiences. 
                  From product catalogs to payment processing, everything you need to sell online.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Website Redesign & Refresh</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modernizing outdated designs for a fresh, competitive look. 
                  Transform your existing site into a modern, conversion-focused experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                  <Code className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle>CMS Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Easy-to-update websites built with WordPress, Shopify, or custom solutions. 
                  Take control of your content with user-friendly management systems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>Mobile App Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cross-platform mobile apps built with React Native. 
                  Reach iOS and Android users with native performance and shared codebase efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            {/* SEO & Marketing Services */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <Search className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle>SEO & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  On-page and technical SEO to improve visibility. Google Analytics setup 
                  and conversion tracking for data-driven business decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle>Conversion Rate Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A/B testing layouts, headlines, and calls-to-action for better results. 
                  Optimize your site to turn more visitors into customers.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Branding & Content Services */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle>Branding & Visual Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Logo design, color palettes, and style guides for consistent brand presence. 
                  Create a memorable visual identity that resonates with your audience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                  <PenTool className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <CardTitle>Content Strategy & Copywriting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  SEO-friendly web copy, blog posts, and product descriptions. 
                  Compelling content that engages visitors and drives conversions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle>Email Marketing Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designing and integrating email signup forms, newsletters, and campaigns. 
                  Build lasting relationships with your audience through email.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Technical & Support Services */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </div>
                <CardTitle>Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Faster load times and improved Core Web Vitals. 
                  Optimize your website's speed and performance for better user experience and SEO.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle>Security Hardening</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  SSL setup, malware protection, and site backups. 
                  Keep your website secure and protect your business data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center">
                  <Plug className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <CardTitle>Maintenance & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Regular updates, backups, and security monitoring. 
                  Keep your website running smoothly with ongoing maintenance and support services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle>API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect payment gateways, social media, and third-party services. 
                  Seamlessly integrate external tools to enhance your website functionality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-lime-100 dark:bg-lime-900 flex items-center justify-center">
                  <User className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                </div>
                <CardTitle>Web Accessibility (ADA Compliance)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  WCAG-compliant websites ensuring accessibility for all users. 
                  Protect your business from legal issues while expanding your audience reach.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services Grid */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Specialized Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Social Media Integration</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Instagram, Facebook, X feeds</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Hosting & Domain Setup</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Configuration & migration</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Multilingual Websites</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Global reach solutions</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <Code className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Training & Documentation</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Learn to manage your site</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Photography & Media</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Stock curation & photoshoots</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <User className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Custom Web Tools</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Calculators, booking systems</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                    <Code className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Landing Page Design</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">High-impact conversion pages</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-shadow p-4">
                <CardContent className="p-0">
                  <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Content & Media Integration</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Blogs, videos, social feeds</p>
                </CardContent>
              </Card>
            </div>
          </div> */}
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Package
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Flexible pricing options designed to fit your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="relative hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">Basic Package</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-2">
                  Perfect for starting your online presence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Custom, mobile-friendly website (up to 5 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Branded design with your logo, colors, and fonts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Easy-to-use Content Management System</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Basic SEO setup (titles, descriptions, keywords)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Contact form integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Social media links</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">1 hour of training on site updates</span>
                  </li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-6">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>💰 Great for:</strong> small businesses, personal brands, and simple portfolios
                  </p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" href="mailto:garcia.juan1994@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="relative hover:shadow-xl transition-shadow border-2 border-green-200 hover:border-green-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl">Standard Package</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-600 dark:text-green-400 mt-2">
                  For growing businesses who want more features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Everything in Basic, plus:</strong>
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Up to 10 pages with advanced layouts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Blog or news section setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">E-commerce store with up to 20 products</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Google Analytics setup for traffic tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Image optimization for faster load times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Security setup (SSL, malware protection)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">1 month of post-launch support & updates</span>
                  </li>
                </ul>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-6">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>💰 Great for:</strong> retail shops, restaurants, and service providers
                  </p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" href="mailto:garcia.juan1994@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative hover:shadow-xl transition-shadow border-2 hover:border-purple-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <User className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl">Premium Package</CardTitle>
                <CardDescription className="text-lg font-semibold text-purple-600 dark:text-purple-400 mt-2">
                  Full-service solution for maximum impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Everything in Standard, plus:</strong>
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Unlimited pages & advanced functionality</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Advanced SEO optimization & keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Conversion Rate Optimization (A/B testing)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Email marketing integration & automations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Custom graphics & branded imagery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Ongoing monthly maintenance & monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm">Priority support for 3 months</span>
                  </li>
                </ul>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg mb-6">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>💰 Great for:</strong> established businesses, online stores, and high-traffic websites
                  </p>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" href="mailto:garcia.juan1994@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Not sure which package is right for you?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's schedule a free consultation to discuss your specific needs and recommend the best solution.
            </p>
            <Button variant="outline" size="lg" href="https://calendly.com/garcia-juan1994/30min">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Recent Client Work
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Successful projects delivered for businesses across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle>2Blendz Barber Shop Website</CardTitle>
                <CardDescription>
                  Modern barber shop website with online booking, service gallery, and customer reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Booking System</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Local SEO</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Results:</strong> 180% increase in online bookings
                </div>
                {/* <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Case Study
                </Button> */}
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle>E-Commerce Fashion Store</CardTitle>
                <CardDescription>
                  Shopify Plus store with custom checkout, inventory management, and mobile optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Shopify</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Performance</span>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">Mobile</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Results:</strong> 200% increase in mobile conversions
                </div>
                {/* <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Case Study
                </Button> */}
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <CardTitle>Amplio Fitness Website</CardTitle>
                <CardDescription>
                  Modern fitness studio website with class scheduling, membership management, and trainer profiles
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">SEO</span>
                  <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Booking System</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Results:</strong> 150% increase in membership inquiries
                </div>
                {/* <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Case Study
                </Button> */}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Transform Your Business Online?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results for your business.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Start Your Project
            </Button>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Real feedback from businesses that have transformed their online presence with my help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="relative p-8 text-center h-full flex flex-col">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <CardContent className="pt-8 flex-grow flex flex-col">
                <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed flex-grow">
                  "Juan transformed our fitness studio's online presence completely. Our new website not only looks incredible but has increased our membership inquiries by 150%. His attention to detail and understanding of our business needs made all the difference."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                    <img 
                      src="./ampliologo.png" 
                      alt="Amplio Fitness"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 dark:text-white text-lg">
                      Belle Ursa
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Owner, Amplio Fitness
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative p-8 text-center h-full flex flex-col">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <CardContent className="pt-8 flex-grow flex flex-col">
                <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed flex-grow">
                  "Working with Juan was a game-changer for 2Blendz. Our online booking system has streamlined our operations and we've seen an 180% increase in appointments. The website perfectly captures our brand and has brought in so many new customers."
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src="./2blendz.jpg" 
                      alt="Jose Rayos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 dark:text-white text-lg">
                      Jose Rayos
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Owner, 2Blendz Barber Shop
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" href="mailto:garcia.juan1994@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              garcia.juan1994@gmail.com
            </Button>
            <Button variant="outline" size="lg" href="https://github.com/9juanjuan">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" href="https://www.linkedin.com/in/antonio-jgarcia/">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400">
            2024 Juan Garcia. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
