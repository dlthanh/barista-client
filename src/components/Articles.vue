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
                    <a href="javascript:;" class="btn btnRed">Review & Đánh Giá</a>
                    <a href="javascript:;" class="btn btnBorder">Chia Sẻ Kiến Thức</a>
                    <a href="javascript:;" class="btn btnBorder">Công Thức Pha Chế</a>
                </div>

                <div class="articles-list">
                    <div class="articles-item" v-for="(article, index) in articles" :key="index">
                        <router-link :to="{name: 'article-detail'}" class="articles-item--thumb">
                            <img :src="require('../assets/images/course-item-1.jpg')" alt="">
                        </router-link>

                        <p class="articles-item--category">{{article.category}}</p>

                        <router-link :to="{name: 'article-detail'}" class="articles-item--title">{{article.title}}</router-link>

                        <p class="articles-item--description">{{article.description}}</p>
                    </div>
                </div>

                <ul class="articles-pagin">
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
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
                {category: 'Chia sẻ kiến thức', title: 'Review Cafe Cư Xá', description: '“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu...'},
            ]
        }
    }
}
</script>

<style>

</style>