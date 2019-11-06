<template>
    <div id="course-detail">
        <div class="cdetail">
            <div class="cdetail-info">
                <div class="cdetail-info--video">
                    <video :src="require('../assets/videos/barista_video.mp4')" autoplay muted loop></video>

                    <div class="cdetail-info--button">
                        <a href="javascript:;" @click="changeVolumn()"><i class="fas fa-volume-mute"></i></a>
                        <a href="javascript:;" @click="playVideo()"><i class="fas fa-pause-circle"></i></a>
                    </div>
                </div>

                <div class="cdetail-info--main container">
                    <h1 class="cdetail-info--title">Khóa học tổng hợp</h1>
                    <p class="cdetail-info--quote">“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista”</p>
                    <p class="cdetail-info--price">Học phí: 6.400.000VNĐ</p>
                    <div class="btn-group">
                        <a href="javascript:;" class="btn"><i class="fal fa-chevron-left"></i> Các khóa học khác</a>
                        <router-link :to="'/#'" class="btn btnRed">Đăng ký ngay</router-link>
                    </div>
                    <p class="cdetail-info--note">* Khóa học gồm 14 buổi học x 2 tiếng mỗi buổi. Hãy đảm bảo bạn sắp xếp được thời gian.</p>
                </div>
            </div>

            <div class="cdetail-endow">
                <img :src="require('../assets/images/endow.png')" alt="">
            </div>

            <div class="cdetail-description">
                <div class="cdetail-description--wrapper container">
                    <p>“Thành bại của một thương hiệu cà phê phụ thuộc 100% vào các Barista” . Nếu bạn muốn thương hiệu cafe của mình vươn xa hơn, hãy đầu tư trước hết vào trình độ của các Barista. Thực tế cho thấy bạn có thể pha 1 tách Cafe ngon sau 99 lần pha đi pha lại nhưng để nâng tầm cafe thành “nghệ thuật” thì đòi hỏi Barista phải có trải nghiệm hương vị thật sự phong phú, liên tục thử thách bản thân và không ngừng nâng cao vốn kiến thức đang có.</p>

                    <p>Thấu hiểu nhu cầu muốn nâng cao trình độ và trao đổi kinh nghiệm giữa những người làm nghề pha chế, Barista Skills chính thức giới thiệu Khóa học pha chế. Nâng cao chuyên dành cho những người đã có kiến thức cơ bản và hiểu biết nhất định về pha chế cafe và các loại đồ uống “đình đám” nhất, có tiềm năng đẩy mạnh trên thị trường kinh doanh.</p>
                </div>
            </div>

            <div class="cdetail-more">
                <div class="cdetail-more--wrapper container">
                    <div class="cdetail-more--title">Lí Do Bạn Nên Tham Gia Khóa Học Nâng Cao</div>
                    <p class="cdetail-more--description">Khóa học Pha chế nâng cao sẽ mang đến những trải nghiệm hoàn toàn khác</p>

                    <video :src="require('../assets/videos/barista_video.mp4')" controls class="cdetail-more-video"></video>

                    <ul class="cdetail-more--list">
                        <li class="cdetail-more--item">Khối lượng kiến thức lớn và chuyên sâu về nghệ thuật pha chế</li>
                        <li class="cdetail-more--item">Quá trình thực hành được trực tiếp hướng dẫn bởi chuyên gia pha chế có chuyên môn lâu năm trong nghề với số lượng buổi nhiều hơn (12 buổi)</li>
                        <li class="cdetail-more--item">100% nguyên liệu tươi và máy móc pha chế hiện đại được trung tâm hỗ trợ</li>
                        <li class="cdetail-more--item">Cơ hội nhận được việc làm lương cao, vị trí hấp dẫn và kinh doanh hiệu quả hơn</li>
                        <li class="cdetail-more--item">Dịch vụ hỗ trợ tư vấn sau khóa học về cách chọn nguyên vật liệu chi phí thấp, quá trình set up cửa hàng, lên menu thiết kếvà cơ hội tham gia các buổi workshop đào tạo, trao đổi giữa giảng viên và học viên</li>
                    </ul>

                    <div class="btn-group">
                        <a href="javascript:;" class="btn btnRed">Đăng ký ngay</a>
                    </div>
                </div>
            </div>

            <div class="cdetail-main">
                <div class="cdetail-main--wrapper container">
                    <div class="cdetail-main--title">Nội Dung Khóa Học</div>

                    <div class="cdetail-main--list">
                        <div class="cdetail-main--item">
                            <div class="cdetail-main--item__position">01</div>

                            <div class="cdetail-main--item__info">
                                <div class="cdetail-main--item__title">Thông tin về cafe</div>
                                <ul class="cdetail-main--item__content">
                                    <li>Chi tiết về các loại café, mùi và hương vị đặc trưng</li>
                                    <li>Các món café truyền thống Việt Nam</li>
                                    <li>Các phương pháp pha café của thế giới : Drip, Siphon, Aero Press, French Press</li>
                                </ul>
                            </div>
                        </div>

                        <div class="cdetail-main--item">
                            <div class="cdetail-main--item__position">02</div>

                            <div class="cdetail-main--item__info">
                                <div class="cdetail-main--item__title">NGHỆ THUẬT PHA CHẾ ESPRESSO, CAPPUCCINO</div>
                                <ul class="cdetail-main--item__content">
                                    <li>Cách chỉnh thông số máy, cho ra ly café chuẩn nhất</li>
                                    <li>Tìm hiểu kỹ hơn về các yếu tố ảnh hưởng đến chất lượng ly café</li>
                                    <li>Cách đánh bọt sữa Cappuccino chuẩn</li>
                                    <li>Cách làm 10 hình cappuccino chuyên sâu</li>
                                </ul>
                            </div>
                        </div>

                        <div class="cdetail-main--item">
                            <div class="cdetail-main--item__position">03</div>

                            <div class="cdetail-main--item__info">
                                <div class="cdetail-main--item__title">LATTE ART CHUYÊN SÂU</div>
                                <ul class="cdetail-main--item__content">
                                    <li>Các phương pháp đánh bọt chuẩn latte đến từng mi-li-met</li>
                                    <li>Phương pháp đổ hình trái tim</li>
                                    <li>Phương pháp đổ hình Rosetta</li>
                                    <li>Phương pháp đổ hình Tulip</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="btn-group">
                        <a href="javascript:;" class="btn btnViewMore">Xem thêm</a>
                    </div>
                </div>
            </div>

            <div class="cdetail-teacher">
                <div class="cdetail-teacher--wrapper container">
                    <div class="cdetail-teacher--title">Giảng Viên Khóa Học</div>
                    <p class="cdetail-teacher--description">Đội ngũ giảng viên giàu kinh nghiệm</p>

                    <div class="cdetail-teacher--list">
                        <div class="cdetail-teacher--item">
                            <div class="cdetail-teacher--thumb">
                                <img :src="require('../assets/images/teacher.jpg')" alt="">
                            </div>
                            <div class="cdetail-teacher--name">Nguyễn Văn A</div>
                            <p class="cdetail-teacher--info">Luôn cập nhật theo xu hướng, đổi mới khẩu vị phù hợp với thị trường.</p>
                        </div>

                        <div class="cdetail-teacher--item">
                            <div class="cdetail-teacher--thumb">
                                <img :src="require('../assets/images/teacher.jpg')" alt="">
                            </div>
                            <div class="cdetail-teacher--name">Nguyễn Văn A</div>
                            <p class="cdetail-teacher--info">Luôn cập nhật theo xu hướng, đổi mới khẩu vị phù hợp với thị trường.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cdetail-material">
                <div class="cdetail-material--wrapper container">
                    <div class="cdetail-material--title">Công Cụ & Nguyên Liệu <br /> Sử Dụng Trong Khóa Học</div>

                    <div class="cdetail-material--list">
                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-1.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">SHOTT New Zealand</div>
                        </div>

                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-2.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">Bình Pha Coffee</div>
                        </div>

                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-3.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">Bình Shake</div>
                        </div>

                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-4.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">Trân Châu</div>
                        </div>
                    </div>
                </div>
            </div>

            <b-payment></b-payment>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        document.title = 'Chi tiết khóa học | ' + this.$defaultTile
    }
}
</script>

<style>

</style>