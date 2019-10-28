<template>
    <div class="video">
        <div class="video-wrapper container">
            <h2 class="video-title">Barista Skills Video</h2>
            <p class="video-description">Tổng Hợp Những Video Hướng Dẫn Cơ Bản Của Barista Skills</p>

            <swiper :options="swiperVideoOption" class="video-list">
                <swiper-slide class="video-item" v-for="(slide, index) in swiperVideoSlides" :key="index">
                    <div class="video-item--thumb">
                        <img :src="require('../../../assets/images/' + slide.thumb)" alt="">
                        <span class="btnPlay"><i class="fal fa-play-circle"></i></span>
                    </div>
                    <a href="#" class="video-item--title">{{slide.title}}</a>
                    <p class="video-item--description">{{slide.description <= 150 ? slide.description : slide.description.substring(0, 150) + '...'}}</p>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperVideoOption: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            swiperVideoSlides: [
                {thumb: 'video-1.png', title: 'Học cách pha chế Soda', description: 'Bạn không có thời gian đi ra ngoài? Bạn muốn tự pha đồ uống cho mình và người thân, Hãy cùng chúng tôi tự làm nhé!'},
                {thumb: 'video-2.png', title: 'Học cách làm Capuccino', description: 'Bạn là một tín đồ của Cappuccino, hay đơn giản là bạn bị mê hoặc bởi những đường cong uốn lượn trên ly cà phê mỗi ngày bạn thấy trên youtube? Và bạn không có một máy pha'},
                {thumb: 'video-3.png', title: 'Học cách pha chế cà phê cốt dừa', description: 'Hôm nay, lớp học pha chế Barista skills xin phép chia sẻ với các bạn bí quyết pha Cà phê Cốt dừa nổi đình đám và được bán phổ biến trong các chuỗi cửa hàng của Cộng Cà Phê'},
                {thumb: 'video-4.png', title: 'Học cách làm cà phê trứng', description: 'Cà phê và trứng hòa quyện thật hài hòa, không ngọt quá, không đắng quá, vị ngầy ngậy lẫn trong mùi hương nồng nàn. Nếu có dịp tới Hà Nội, nên nếm thử cà phê trứng một lần'},
            ]
        }
    }
}
</script>

<style>

</style>