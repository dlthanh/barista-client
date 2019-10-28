<template>
    <div class="course-list">
        <div class="course-item" v-for="(course, index) in courses" :key="index">
            <router-link :to="'#'" class="course-item--thumb">
                <img :src="require('../../../assets/images/' + course.thumb)" alt="">
            </router-link>
            <div class="course-item--main">
                <router-link :to="'#'" class="course-item--title">{{course.title}}</router-link>

                <div class="course-item--info">
                    <p class="course-item--description">{{course.description}}</p>
                    <p class="course-item--price">Học phí: {{course.price}} VNĐ</p>
                </div>

                <router-link :to="'#'" class="course-item--viewdetail">Xem chi tiết <i class="fas fa-caret-right"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                {thumb: 'course-1.jpg', title: 'Khóa học pha chế Tổng hợp', description: 'Dành cho chủ quán Cà phê và các bạn muốn học để làm thêm bên ngoài.', price: '4.000.000'},
                {thumb: 'course-2.jpg', title: 'Khóa học pha chế Trà sữa Đài Loan chuyên sâu', description: 'Dành cho chủ quán trà sữa và các chủ quán cà phê muốn mở rộng mô hình kinh doanh.', price: '4.500.000'},
                {thumb: 'course-3.jpg', title: 'Khóa học pha chế Trà chanh', description: 'Dành cho chủ quán trà chanh với 25+ công thức Trà chanh cùng những loại đồ uống liên quan.', price: '2.500.000'}
            ]
        }
    }
}
</script>

<style>

</style>