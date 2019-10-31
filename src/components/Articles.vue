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
                        <a href="#" class="articles-item--thumb">
                            <img :src="require('../assets/images/course-item-1.jpg')" alt="">
                        </a>

                        <p class="articles-item--category">{{article.category}}</p>

                        <a href="#" class="articles-item--title">{{article.title}}</a>

                        <p class="articles-item--description">{{article.description}}</p>
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