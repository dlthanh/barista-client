<template>
    <div id="articles">
        <div class="banner">
            <img :src="require('../assets/images/singlepage-banner.jpg')" alt="">

            <div class="banner-wrapper container">
                <h1><span>Tin Tức</span></h1>
                <p class="banner-description">Barista Skills tự hào là một trong những đơn vị cung cấp khóa học pha chế đồ uống chuyên nghiệp, uy tín nhất tại Hà Nội</p>
            </div>
        </div>

        <div class="articles-main">
            <div class="articles-wrapper container">
                <div class="btn-group">
                    <a href="javascript:void(0)" class="btn btnRed" @click="changeCategory(1)">Review & Đánh Giá</a>
                    <a href="javascript:void(0)" class="btn btnBorder" @click="changeCategory(2)">Chia Sẻ Kiến Thức</a>
                    <a href="javascript:void(0)" class="btn btnBorder" @click="changeCategory(3)">Công Thức Pha Chế</a>
                </div>

                <div class="articles-list">
                    <div class="articles-item" v-for="(article, index) in articles" :key="index">
                        <router-link :to="{name: 'article-detail', params: {id: article.id}}" class="articles-item--thumb">
                            <img :src="assetURL + article.thumbnail" alt="">
                        </router-link>

                        <p class="articles-item--category">{{article.category}}</p>

                        <router-link :to="{name: 'article-detail', params: {id: article.id}}" class="articles-item--title">{{article.title}}</router-link>

                        <p class="articles-item--description">{{article.description}}</p>
                    </div>
                </div>

                <!-- <ul class="articles-pagin">
                    <li class="articles-pagin--item">
                        <a href="#"><i class="fal fa-chevron-left"></i></a>
                    </li>
                    <li class="articles-pagin--item active">
                        <a href="#">1</a>
                    </li>
                    <li class="articles-pagin--item">
                        <a href="#">2</a>
                    </li>
                    <li class="articles-pagin--item">
                        <a href="#">3</a>
                    </li>
                    <li class="articles-pagin--item">
                        <a href="#">4</a>
                    </li>
                    <li class="articles-pagin--item">
                        <a href="#">5</a>
                    </li>
                    <li class="articles-pagin--item">
                        <a href="#"><i class="fal fa-chevron-right"></i></a>
                    </li>
                </ul> -->
            </div>
        </div>

        <b-contact></b-contact>
    </div>
</template>

<script>
export default {
    data() {
        return {
            assetURL: this.$asset,
            articles: '',
        }
    },
    beforeCreate() {
        this.$http.get(this.$api + '/articles/group/1')
                    .then(response => {
                        this.articles = response.data;
                        return this.articles;
                    })
    },
    mounted() {
        document.title = 'Tin tức | Trung tâm đào tạo pha chế Barista Skills';
    },
    methods: {
        changeCategory: function(group) {
            this.$http.get(this.$api + '/articles/group/' + group)
                    .then(response => {
                        this.articles = response.data;
                        return this.articles;
                    })
            var btn = document.getElementsByClassName('btn');
            for(var i = 0; i < btn.length; i++) {
                btn[i].classList.remove('btnRed');
                btn[i].classList.add('btnBorder');
            }
            event.target.classList.remove('btnBorder');
            event.target.classList.add('btnRed');
        }
    }
}
</script>

<style>

</style>