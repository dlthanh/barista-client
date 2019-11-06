<template>
    <div id="article-detail">
        <div class="article">
            <div class="article-breadcrumb">
                <router-link :to="{name: 'articles'}">Tin tức</router-link>
                <i class="fal fa-angle-right"></i>
                <span>Review & Đánh Giá</span>
            </div>

            <h1 class="article-title">Review Cafe Cư Xá</h1>
            <p class="article-time">23:04 30/07/2019</p>
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
                <p>Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000</p>

                <p>Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy tính nghệ thuật và ấn tượng. Vì thế hôm nay Barista Skills sẽ cùng các bạn phân tích mô hình quán cafe này nhé.</p>
            </div>

            <div class="article-main">
                <p>Quán cafe nằm trong con ngõ nhỏ trên trục đường Thái Hà, địa chỉ khá dễ tìm và đường vào rộng rãi. Quán còn có một khu để xe riêng bên cạnh, khá thoải mái và thuận tiện khi gửi. Gà phê chỉ phục vụ từ tầng 2, không gian khu vực order đồ khá nhỏ, quầy bar có thể ngồi được từ 4-5 người. Hành lang tầng 2 có một bảng phần thông báo những món đặc biệt cũng như được phục vụ trong thời gian tới khá đẹp mắt, cách trang trí cũng khiến khách hàng phải đứng lại đọc kĩ từng câu. Lên đến tầng 3 không gian rộng rãi hơn với phía bên ngoài là view ngoài trời, phía bên trong là không gian làm việc tương đối yên tĩnh. Gà Phê được xây dựng là không gian workshop, tuy nhiên các bàn kê tương đối sát nhau và dày, quán không có cách âm và tiếng vang, nếu ít người thì sẽ hợp lý hơn cho các bạn tìm một địa điểm để làm việc hoặc học tập.</p>

                <video :src="require('../assets/videos/barista_video.mp4')" controls class="el-full"></video>

                <p>Nếu vào giờ cao điểm, lượng khách đông thì sẽ ồn ào và ảnh hưởng khá nhiều đó. Vì thế, nếu bạn tìm đến Gà Phê để học tập, làm việc thì nên chọn những thời điểm vắng, tránh những buổi tối hoặc cuối tuần nhé.</p>

                <img :src="require('../assets/images/about-gallery-5.jpg')" alt="" class="el-full">

                <p>Không gian ngoài trời rộng, sắp xếp bàn ghế hợp lý hơn, tuy nhiên vào những ngày nắng nóng đây chắc chắn không phải lựa chọn hợp lý của khách. Vì vậy quán sẽ không tận dụng được tối đa không gian của mình. Điều đặc biệt nhất ở Gà Phê có lẽ là sự sáng tạo trong cách decor quán. Với phong cách Industial mặt tường bê tông không sơn, mặt tường thô tạo nên vẻ độc đáo kết hợp với bàn ghế đơn giản, tone giản trắng đen tạo cảm giác hài hòa. Quán cũng có sử dụng thêm những chiếc ghế sofa dài thích hợp cho các bạn tụ tập theo nhóm để trò chuyện, thư giãn. Không gian quán không quá rộng, bàn ghế được sắp xếp khá sát nhau nên khi ồn ào sẽ ảnh hưởng khá nhiều đến những bàn xung quanh đó nhé</p>
            </div>
        </div>

        <b-contact></b-contact>
    </div>
</template>

<script>
export default {
    mounted() {
        document.title = 'Bài viết chi tiết | Trung tâm đào tạo pha chế Barista Skills'
    }
}
</script>

<style>

</style>