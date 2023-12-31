import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'
import BlogPage from '../pages/Blog.vue'
import SingleBlogPage from '../pages/SingleBlog.vue'
import AboutPage from '../pages/About.vue'
import ContactPage from '../pages/Contact.vue'
import LoginPage from '../pages/Login.vue'
import RegisterPage from '../pages/Register.vue'
import DashboardPage from '../pages/Dashboard.vue'
import CreateCategories from '../pages/categories/CreateCategory.vue'
import CategoriesList from '../pages/categories/CategoriesList.vue'
import EditCategory from '../pages/categories/editCategory.vue'

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
            meta: { requiresGuest: true }
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterPage,
            meta: { requiresGuest: true }
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: DashboardPage,
            meta: { requiresAuth: true }
        },
        {
            path: '/categories/create',
            name: 'CreateCategories',
            component: CreateCategories,
            meta: { requiresAuth: true }
        },
        {
            path: '/categories',
            name: 'CategoriesList',
            component: CategoriesList,
            meta: { requiresAuth: true }
        },
        {
            path: '/category/:id/edit',
            name: 'EditCategory',
            component: EditCategory,
            meta: { requiresAuth: true },
            props: true
        },

    ]
});

router.beforeEach((to, from) => {
    const authenticated = localStorage.getItem('authenticated')

    if (to.meta.requiresGuest && authenticated) {
        return {
            name: "Dashboard"
        }
    } else if (to.meta.requiresAuth && !authenticated) {
        return {
            name: "Login"
        }
    }
});
export default router


