<template>
    <div class="partner">
        <div class="partner-wrapper container">
            <h2 class="partner-title">Đối Tác Của Chúng Tôi</h2>

            <div class="partner-list">
                <swiper :options="swiperPartnerOption">
                    <swiper-slide class="partner-item" v-for="(slide, index) in swiperPartnerSlides" :key="index">
                        <img :src="require('../../../assets/images/' + slide)" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperPartnerOption: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            swiperPartnerSlides: [
                'royaltea.png', 'TCH.png', 'gong-cha.png', 'alley.png', 'highland.png'
            ],
        }
    }
}
</script>

<style>

</style>