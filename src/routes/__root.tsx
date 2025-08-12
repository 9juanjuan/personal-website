import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

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
          </div>
        </div>
      </nav>
      
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
