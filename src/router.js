import VueRouter from 'vue-router'
import Home from './components/Home'
import Course from './components/Course'
import CourseDetail from './components/CourseDetail'
import Articles from './components/Articles'
import ArticleDetail from './components/ArticleDetail'
import About from './components/About'
import Contact from './components/Contact'

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/course',
            name: 'course',
            component: Course
        },
        {
            path: '/course/:id',
            name: 'course-detail',
            component: CourseDetail
        },
        {
            path: '/category',
            name: 'category',
            component: Articles
        },
        {
            path: '/article/:id',
            name: 'article-detail',
            component: ArticleDetail
        }
    ]
})

export default router;