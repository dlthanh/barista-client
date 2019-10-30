<template>
    <div id="course-detail">
        <div class="cdetail">
            <div class="cdetail-info">
                <div class="cdetail-info--video">
                    <video :src="require('../assets/videos/barista_video.mp4')" autoplay muted loop></video>

                    <div class="cdetail-info--button">
                        <a href="javascript:;" @click="changeVolumn()"><i class="fas fa-volume-mute"></i></a>
                        <a href="javascript:;" @click="playVideo()"><i class="fas fa-pause-circle"></i></a>
                    </div>
                </div>

                <div class="cdetail-info--main container">
                    <h1 class="cdetail-info--title">Khóa học tổng hợp</h1>
                    <p class="cdetail-info--quote">“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista”</p>
                    <p class="cdetail-info--price">Học phí: 6.400.000VNĐ</p>
                    <div class="btn-group">
                        <a href="javascript:;" class="btn"><i class="fal fa-chevron-left"></i> Các khóa học khác</a>
                        <router-link :to="'/#'" class="btn btnRed">Đăng ký ngay</router-link>
                    </div>
                    <p class="cdetail-info--note">* Khóa học gồm 14 buổi học x 2 tiếng mỗi buổi. Hãy đảm bảo bạn sắp xếp được thời gian.</p>
                </div>
            </div>

            <div class="cdetail-endow">
                <img :src="require('../assets/images/endow.png')" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        document.title = 'Chi tiết khóa học | Trung tâm đào tạo Barista Skills'
    }
}
</script>

<style>

</style>