<template>
    <div id="article-detail">
        <div class="article">
            <div class="article-breadcrumb">
                <router-link :to="{name: 'category'}">Tin tức</router-link>
                <i class="fal fa-angle-right"></i>
                <span>Review & Đánh Giá</span>
            </div>

            <h1 class="article-title">{{article.title}}</h1>
            <p class="article-time">{{article.created_at}}</p>
            <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>

            <ul class="article-list">
                <li class="article-item">
                    <a href="#">REVIEW Gà Phê Coffee</a>
                </li>
                <li class="article-item">
                    <a href="#">REVIEW Nhà không cửa Coffee</a>
                </li>
                <li class="article-item">
                    <a href="#">GIẢI MÃ SỨC NÓNG ĐỒ UỐNG MÙA HÈ CỦA THE COFFEE HOUSE</a>
                </li>
                <li class="article-item">
                    <a href="#">7 SAI LẦM MÀ BẤT CỨ AI CŨNG CẦN TRÁNH KHI MỞ QUÁN CAFE</a>
                </li>
            </ul>

            <div class="article-description">
                <p>{{article.description}}</p>
            </div>

            <div class="article-main" v-html="article.content"></div>
        </div>

        <b-contact></b-contact>
    </div>
</template>

<script>
export default {
    // props: ['article'],
    data() {
        return {
            article: ''
        }
    },
    beforeCreate() {
        this.$http.get(this.$api + '/articles/' + this.$route.params.id)
                    .then(response => {
                        this.article = response.data;
                        document.title = this.article.title + ' | Trung tâm đào tạo pha chế Barista Skills'
                        return this.article;
                    })
    },
}
</script>

<style>

</style>