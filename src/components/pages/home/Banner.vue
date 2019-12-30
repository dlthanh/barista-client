<template>
    <div class="hero">
        <div class="hero-video">
            <video src="../../../assets/videos/barista_video.mp4" autoplay muted loop></video>

            <div class="hero-video--button">
                <a href="javascript:;" @click="changeVolumn()"><i class="fas fa-volume-mute"></i></a>
                <a href="javascript:;" @click="playVideo()"><i class="fas fa-pause-circle"></i></a>
            </div>
        </div>

        <div class="hero-main container">
            <h1 class="hero-title">Trung tâm đào tạo <br /> pha chế Barista Skills</h1>

            <div class="hero-description">
                <p>Bạn muốn tìm một địa chỉ đào tạo pha chế không giấu diếm - chia sẻ từ A-Z về tư duy pha chế và kinh doanh giải khát? <br /> Barista Skills chắc chắn là nơi không làm bạn thất vọng.</p>

                <p>Cùng với quy trình làm việc chuyên nghiệp,năng động, chúng tôi ngày càng tạo dựng một thương hiệu Barista Skills vững mạnh, một địa chỉ uy tín và môi trường phục vụ khách hàng hoàn hảo.</p>
            </div>

            <div class="btn-group">
                <a href="javascript:void(0);" class="btn btnRed" @click="scrollToContact">Đăng ký ngay</a>
                <router-link :to="'about'" class="btn btnGray">Xem chi tiết</router-link>
            </div>

            <!-- <div class="hero-list">
                <swiper :options="swiperHeroOption">
                    <swiper-slide class="hero-item" v-for="(slide, index) in swiperHeroSlides" :key="index">
                        <div class="hero-item--thumb">
                            <img :src="require('../../../assets/images/' + slide.thumb)" alt="">
                        </div>
                        <div class="hero-item--main">
                            <h3 class="hero-item--title">{{slide.title}}</h3>
                            <p class="hero-item--description">{{slide.description.length <= 100 ? slide.description : slide.description.substring(0,100)+"..."}}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // swiperHeroOption: {
            //     speed: 600,
            //     slidesPerView: 3,
            //     spaceBetween: 30,
            // },
            // swiperHeroSlides: [
            //     {thumb: 'hero-1.jpg', title: 'Khóa học trà sữa', description: 'Được đào tạo bài bản tư duy và quy trình pha chế trà sữa chuẩn Đài Loan'},
            //     {thumb: 'hero-2.jpg', title: 'Khóa học nâng cao', description: 'Bạn đã có kiến thức cơ bản về Pha chế và muốn học chuyên sâu để nâng cao trình độ'},
            //     {thumb: 'hero-3.jpg', title: 'Khóa học trà chanh', description: 'Xu hướng Trà chanh thế hệ mới với không gian sang chảnh theo mô hình “trà sữa”, giá vỉa hè: cost thấp nhưng vẫn đảm bảo chất lượng tối ưu.'},
            // ]
        }
    }
}
</script>

<style>

</style>