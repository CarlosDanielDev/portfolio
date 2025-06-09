import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DevModeProvider } from '@presentation/contexts/DevModeContext'
import './index.css'
import App from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevModeProvider>
      <App />
    </DevModeProvider>
  </StrictMode>,
)
