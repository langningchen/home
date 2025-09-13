import './main.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n.ts'
import { ThemeProvider } from './utils/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <I18nextProvider i18n={i18n} >
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
)
