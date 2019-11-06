import VueRouter from 'vue-router'
import Home from './components/Home'
import Course from './components/Course'
import CourseDetail from './components/CourseDetail'
import Articles from './components/Articles'
import ArticleDetail from './components/ArticleDetail'

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
            path: '/course',
            name: 'course',
            component: Course
        },
        {
            path: '/course/detail',
            name: 'course-detail',
            component: CourseDetail
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles
        },
        {
            path: '/article/detail',
            name: 'article-detail',
            component: ArticleDetail
        }
    ]
})

export default router;