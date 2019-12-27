<template>
    <div class="video">
        <div class="video-wrapper container">
            <h2 class="video-title">Barista Skills Video</h2>
            <p class="video-description">Tổng Hợp Những Video Hướng Dẫn Cơ Bản Của Barista Skills</p>

            <swiper :options="swiperVideoOption" class="video-list">
                <swiper-slide class="video-item" v-for="(slide, index) in swiperVideoSlides" :key="index">
                    <div class="video-item--thumb">
                        <img :src="slide.thumbnail" alt="">
                        <span class="btnPlay"><i class="fal fa-play-circle"></i></span>
                    </div>
                    <a href="#" class="video-item--title">{{slide.title}}</a>
                    <p class="video-item--description">{{slide.description.length <= 150 ? slide.description : slide.description.substring(0, 150) + '...'}}</p>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            assetUrl: this.$asset,
            swiperVideoOption: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            swiperVideoSlides: '',
        }
    },
    beforeCreate() {
        this.$http.get(this.$api + '/videos')
            .then(response => {
                this.swiperVideoSlides = response.data
                return this.swiperVideoSlides;
            })
    }
}
</script>

<style>

</style>