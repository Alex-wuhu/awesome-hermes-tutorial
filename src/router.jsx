import { createBrowserRouter } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NovitaGuidePage from './pages/NovitaGuidePage'
import EventPage from './pages/EventPage'
import EmailAgentPage from './pages/EmailAgentPage'
import MarketingAgentPage from './pages/MarketingAgentPage'
import ProTipsPage from './pages/ProTipsPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'novita', element: <NovitaGuidePage /> },
      { path: 'event', element: <EventPage /> },
      { path: 'email-agent', element: <EmailAgentPage /> },
      { path: 'marketing-agent', element: <MarketingAgentPage /> },
      { path: 'pro-tips', element: <ProTipsPage /> },
    ],
  },
])
