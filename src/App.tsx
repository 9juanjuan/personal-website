import { createRouter, RouterProvider, createHashHistory } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create hash history for static hosting (GitHub Pages)
const hashHistory = createHashHistory()

// Create a new router instance
const router = createRouter({ 
  routeTree,
  history: hashHistory,
  scrollRestoration: true
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
