<template>
    <div id="course">
        <div class="banner">
            <img :src="require('../assets/images/singlepage-banner.jpg')" alt="">

            <div class="banner-wrapper container">
                <h1><span>Danh sách khóa học tại</span> <span class="brand">Barista Skills</span></h1>
                <p class="banner-description">Barista Skills tự hào là một trong những đơn vị đào tạo pha chế tiên phong tại Hà Nội, thực hiện thành công hàng nghìn mục tiêu kinh doanh giải khát của Học Viên!</p>
            </div>
        </div>

        <div class="course-list container">
            <div class="course-item" v-for="(course, index) in courses" :key="index" :style="'background: url(' + require('../assets/images/course-item-' + (index + 1) + '.jpg') + ') no-repeat'">
                <div class="course-item--wrapper">
                    <h2 class="course-item--title">{{course.name}}</h2>
                    <p class="course-item--description">{{course.description}}</p>
                    <p class="course-item--info">Học phí: {{course.price}} VND/{{course.leson}} buổi học/khóa (Thực hành không giới hạn)</p>

                    <div class="btn-group">
                        <a href="javascript:;" class="btn btnRed">Đăng ký ngay</a>
                        <router-link :to="{name: 'course-detail'}" class="btn btnWhite">Tìm hiểm thêm</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                {name: 'Pha chế Trà sữa Đài Loan chuyên sâu', description: 'Ở Việt Nam, trung bình 100 người thì có 73 người biết đến trà sữa. Khoảng 29 triệu người Việt Nam uống trà sữa mỗi tuần một lần. Ngay cả người lớn tuổi, giới trung niên cũng bắt đầu quan tâm dần tới Trà sữa!', price: '4.500.000', lesson: '6'},
                {name: 'LATTE ART', description: 'Chinh phục nghệ thuật tạo hình trên tách cà phê quyến rũ. Phù hợp cho chủ quán cà phê kinh doanh Cà phê máy, hay các bạn du học sinh muốn tìm cơ hội việc làm bên nước ngoài dễ dàng hơn.', price: '4.500.000', lesson: '6'},
                {name: 'Pha chế tổng hợp', description: 'Chưa bao giờ hết “hot” cho những chủ quán Cà phê và những bạn học để trở thành Barista chuyên nghiệp.', price: '4.500.000', lesson: '9'},
                {name: 'Bánh lạnh', description: 'Khóa học 10 công thức bánh lạnh không dùng lò nướng, kết hợp bán cùng Cà phê và Trà sữa, dựa theo mô hình của các chuỗi lớn như Highland Coffee, Phúc Long, The Coffee House,...', price: '4.500.000', lesson: '6'},
                {name: 'Green Healthy', description: 'Bắt kịp xu hướng thời hiện đại, pha chế đồ uống healthy làm từ rau củ quả cho dân công sở và văn phòng.', price: '4.500.000', lesson: '5'},
                {name: 'Pha chế Trà chanh', description: 'Xu hướng Trà chanh thế hệ mới với không gian sang chảnh theo mô hình “trà sữa”, giá vỉa hè: cost thấp nhưng vẫn đảm bảo chất lượng tối ưu.', price: '2.500.000', lesson: '2'},
            ]
        }
    },
    mounted() {
        document.title = 'Khóa học | Trung tâm đào tạo Barista Skills';
    }
}
</script>

<style>

</style>