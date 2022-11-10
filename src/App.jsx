import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfirmedShiftPage, ShiftAvailability } from './pages'
import RootNavbar from './Root'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootNavbar />,
    errorElement: (<div><h1>Not found!</h1></div>),
    children: [
      {
        path: 'availability',
        element: <ShiftAvailability />,
        errorElement: (<div><h1>Not found!</h1></div>)
      },
      {
        path: 'confirmed',
        element: <ConfirmedShiftPage />
      }
    ]
  }

])

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
