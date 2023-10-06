import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'
import BlogPage from '../pages/Blog.vue'
import SingleBlogPage from '../pages/SingleBlog.vue'
import AboutPage from '../pages/About.vue'
import ContactPage from '../pages/Contact.vue'
import LoginPage from '../pages/Login.vue'
import RegisterPage from '../pages/Register.vue'
import DashboardPage from '../pages/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'Blog',
            component: BlogPage
        },
        {
            path: '/blog/:slug',
            name: 'SingleBlog',
            component: SingleBlogPage,
            props: true,
        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage
        },
        {
            path: '/contact',
            name: 'Contact',
            component: ContactPage,
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage,
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterPage,
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: DashboardPage,
        },

    ]
})

export default router
