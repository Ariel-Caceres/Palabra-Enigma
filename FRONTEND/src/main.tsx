import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useTheme } from './hooks/useTheme'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

export const Theme = () => {
  useTheme()
  return <RouterProvider router={router} />
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme />
  </StrictMode>,
)
