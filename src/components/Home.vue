<template>
    <div id="home">
        <home-banner></home-banner>
        <home-partner></home-partner>
        <home-service></home-service>
        <div class="course">
            <div class="container">
                <h2 class="course-title">Khóa Học Được Quan Tâm Nhất</h2>
                <p class="course-description">Top 03 khóa học được đăng ký nhiều nhất!</p>
            </div>

            <div class="course-main container">
                <home-course></home-course>
                <home-calendar></home-calendar>
            </div>
        </div>
        <home-video></home-video>
        <home-comment></home-comment>
    </div>
</template>

<script>
import Banner from './pages/home/Banner'
import Service from './pages/home/Service'
import Partner from './pages/home/Partner'
import Course from './pages/home/Course'
import Calendar from './pages/home/Calendar'
import Video from './pages/home/Video'
import Comment from './pages/home/Comment'

export default {
    components: {
        'home-banner': Banner,
        'home-service': Service,
        'home-partner': Partner,
        'home-course': Course,
        'home-calendar': Calendar,
        'home-video': Video,
        'home-comment': Comment
    },
    mounted() {
        document.title = 'Trang chủ | Trung tâm đào tạo Barista Skills';
    }
}
</script>

<style>

</style>