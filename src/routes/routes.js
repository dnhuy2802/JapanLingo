import { LandingPage } from "../pages/LandingPage"

// Japanlingo includes the following routes:
// Public routes:
export const publicRoutes = [
    {
        path: '/',
        element: <LandingPage />
    }
]

// Private routes:
export const privateRoutes = [
    {
        path: '/dashboard', // Replace later
    }
]