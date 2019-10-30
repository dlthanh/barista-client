import VueRouter from 'vue-router'
import Home from './components/Home'
import Course from './components/Course'
import CourseDetail from './components/CourseDetail'

const router = new VueRouter({
    mode: 'history',
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
            path: '/course-detail',
            name: 'course-detail',
            component: CourseDetail
        }
    ]
})

export default router;