<template>
    <div class="video">
        <div class="video-wrapper container">
            <h2 class="video-title">Barista Skills Video</h2>
            <p class="video-description">Tổng Hợp Những Video Hướng Dẫn Cơ Bản Của Barista Skills</p>

            <swiper :options="swiperVideoOption" class="video-list">
                <swiper-slide class="video-item" v-for="(slide, index) in swiperVideoSlides" :key="index">
                    <div class="video-item--thumb">
                        <img :src="slide.thumbnail" alt="">
                        <span class="btnPlay" @click="showVideoModal" :data-video="slide.embed"><i class="fal fa-play-circle"></i></span>
                    </div>
                    <a href="javascript:void(0);" class="video-item--title" @click="showVideoModal" :data-video="slide.embed">{{slide.title}}</a>
                    <p class="video-item--description">{{slide.description.length <= 150 ? slide.description : slide.description.substring(0, 150) + '...'}}</p>
                </swiper-slide>
            </swiper>

            <div class="video-modal hidden" id="videoWrapper" @click="closeModal">
                <div class="video-modal--wrap">
                    <div class="video-modal--wrap-main">
                        <iframe src="https://www.youtube.com/embed/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="videoModal"></iframe>
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
    },
    methods: {
        showVideoModal: function() {
            var video = event.currentTarget.getAttribute('data-video'),
                modelEl = document.getElementById('videoWrapper'),
                videoEl = document.getElementById('videoModal'),
                defaultSrc = 'https://www.youtube.com/embed/';

            var src = defaultSrc + video;
            
            document.body.classList.add('locked');
            modelEl.classList.remove('hidden');
            videoEl.setAttribute('src', src);
        },
        closeModal: function() {
            var modelEl = document.getElementById('videoWrapper'),
                videoEl = document.getElementById('videoModal'),
                defaultSrc = 'https://www.youtube.com/embed/';

            document.body.classList.remove('locked');
            modelEl.classList.add('hidden');
            videoEl.setAttribute('src', defaultSrc);
        }
    }
}
</script>

<style>

</style>