<template>
    <div id="about">
        <div class="banner">
            <img :src="require('../assets/images/banner.jpg')" alt="">    

            <div class="banner-content">
                <h1>Về <span>Barista Skill</span></h1>

                <p>Barista Skills tự hào là một trong những đơn vị cung cấp khóa học pha chế <br /> đồ uống chuyên nghiệp, uy tín nhất tại Hà Nội</p>
            </div>
        </div>

        <div class="quote container">
            <div class="quote-image">
                <img :src="require('../assets/images/about.png')" alt="">
            </div>

            <div class="quote-content">
                <div class="quote-text">
                    <p>Mong muốn tạo ra thay đổi trong mô hình kinh doanh đồ uống tại Việt Nam hội tụ chất lượng và dịch vụ. <strong><em>Barista Skills</em></strong> chúng tôi tiên phong bởi những người đi đầu trong lĩnh vực pha chế bằng sự đam mê, tâm huyết của những người làm nghề với mục tiêu và sứ mệnh mang những sản phẩm chất lượng nhất đến tay người tiêu dùng...</p>
                </div>

                <div class="quote-name">
                    <p><strong>Nguyễn Văn A</strong></p>
                    <p>Founder, CEO Barista Skill</p>
                </div>
            </div>
        </div>

        <div class="info container">
            <div class="info-item">
                <img :src="require('../assets/images/about-info-1.jpg')" alt="">
                <p>Nhiệt huyết</p>
            </div>

            <div class="info-item">
                <img :src="require('../assets/images/about-info-2.jpg')" alt="">
                <p>Chuyên nghiệp</p>
            </div>

            <div class="info-item">
                <img :src="require('../assets/images/about-info-3.jpg')" alt="">
                <p>Sáng tạo</p>
            </div>

            <div class="info-item">
                <img :src="require('../assets/images/about-info-3.jpg')" alt="">
                <p>Đồng hành</p>
            </div>
        </div>

        <div class="gallery container">
            <div class="gallery-item">
                <img :src="require('../assets/images/about-gallery-1.jpg')" alt="">
            </div>

            <div class="gallery-item">
                <img :src="require('../assets/images/about-gallery-2.jpg')" alt="">
            </div>

            <div class="gallery-item">
                <img :src="require('../assets/images/about-gallery-3.jpg')" alt="">
            </div>

            <div class="gallery-item">
                <img :src="require('../assets/images/about-gallery-4.jpg')" alt="">
            </div>

            <div class="gallery-item">
                <img :src="require('../assets/images/about-gallery-5.jpg')" alt="">
            </div>
        </div>

        <b-contact></b-contact>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>