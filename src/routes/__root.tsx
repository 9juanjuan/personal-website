import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white">
              Juan Antonio Garcia
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
              >
                Home
              </Link>
              <Link 
                to="/portfolio" 
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                activeProps={{ className: "text-blue-600 dark:text-blue-400" }}
              >
                Portfolio
              </Link>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Toggle - CSS Only */}
            <div className="md:hidden">
              <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
              <label 
                htmlFor="mobile-menu-toggle" 
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer peer-checked:text-slate-900 dark:peer-checked:text-white"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-6 w-6 peer-checked:hidden" />
                <X className="h-6 w-6 hidden peer-checked:block" />
              </label>
              
              {/* Mobile Navigation Menu */}
              <div className="absolute left-0 right-0 top-16 hidden peer-checked:block border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link 
                    to="/" 
                    className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors rounded-md"
                    activeProps={{ className: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" }}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/portfolio" 
                    className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors rounded-md"
                    activeProps={{ className: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" }}
                  >
                    Portfolio
                  </Link>
                  <a 
                    href="#contact" 
                    className="block px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors rounded-md"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <Outlet />
    </>
  ),
})
