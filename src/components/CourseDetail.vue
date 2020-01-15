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
                    <h1 class="cdetail-info--title">{{course.title}}</h1>
                    <p class="cdetail-info--quote">“{{course.quote}}”</p>
                    <p class="cdetail-info--price">Học phí: {{course.price}}VNĐ</p>
                    <div class="btn-group">
                        <router-link :to="{name: 'course'}" class="btn"><i class="fal fa-chevron-left"></i> Các khóa học khác</router-link>
                        <router-link :to="'/#'" class="btn btnRed" @click="scrollToContact">Đăng ký ngay</router-link>
                    </div>
                    <p class="cdetail-info--note">* Khóa học gồm {{course.session}} buổi học x {{course.time}} tiếng mỗi buổi. Hãy đảm bảo bạn sắp xếp được thời gian.</p>
                </div>
            </div>

            <div class="cdetail-endow">
                <img :src="require('../assets/images/endow.png')" alt="">
            </div>

            <div class="cdetail-description" :style="'background: url(' + $asset + course.thumbnail + ') no-repeat'">
                <div class="cdetail-description--wrapper container" v-html="course.description"></div>
            </div>

            <div class="cdetail-more">
                <div class="cdetail-more--wrapper container">
                    <div class="cdetail-more--title">Lí Do Bạn Nên Tham Gia Khóa Học Nâng Cao</div>
                    <p class="cdetail-more--description">Khóa học Pha chế nâng cao sẽ mang đến những trải nghiệm hoàn toàn khác</p>

                    <div class="cdetail-more--video">
                        <iframe :src="'https://www.youtube.com/embed/' + course.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <!-- <video :src="'https://www.youtube.com/watch?v=' + course.video" controls class="cdetail-more-video"></video> -->

                    <!-- <ul class="cdetail-more--list">
                        <li class="cdetail-more--item">Khối lượng kiến thức lớn và chuyên sâu về nghệ thuật pha chế</li>
                        <li class="cdetail-more--item">Quá trình thực hành được trực tiếp hướng dẫn bởi chuyên gia pha chế có chuyên môn lâu năm trong nghề với số lượng buổi nhiều hơn (12 buổi)</li>
                        <li class="cdetail-more--item">100% nguyên liệu tươi và máy móc pha chế hiện đại được trung tâm hỗ trợ</li>
                        <li class="cdetail-more--item">Cơ hội nhận được việc làm lương cao, vị trí hấp dẫn và kinh doanh hiệu quả hơn</li>
                        <li class="cdetail-more--item">Dịch vụ hỗ trợ tư vấn sau khóa học về cách chọn nguyên vật liệu chi phí thấp, quá trình set up cửa hàng, lên menu thiết kếvà cơ hội tham gia các buổi workshop đào tạo, trao đổi giữa giảng viên và học viên</li>
                    </ul> -->

                    <swiper :options="swiperGalleryOption" class="cdetail-gallery">
                        <swiper-slide class="cdetail-gallery--item" v-for="(item, index) in swiperGallerySlides" :key="index">
                            <div class="cdetail-gallery--item-thumb">
                                <img :src="assetUrl + item.filename" alt="">
                            </div>
                        </swiper-slide>
                    </swiper>

                    <div class="btn-group">
                        <a href="javascript:;" class="btn btnRed">Đăng ký ngay</a>
                    </div>
                </div>
            </div>

            <div class="cdetail-main">
                <div class="cdetail-main--wrapper container">
                    <div class="cdetail-main--title">Nội Dung Khóa Học</div>

                    <div class="cdetail-main--list">
                        <div class="cdetail-main--item" v-for="(item, index) in course.content" :key="index" :class="{hidden: index > 2}">
                            <div class="cdetail-main--item__position">{{index < 9 ? '0' + (index + 1) : index}}</div>

                            <div class="cdetail-main--item__info">
                                <div class="cdetail-main--item__title">{{item.title}}</div>
                                <div class="cdetail-main--item__content" v-html="item.content"></div>
                            </div>
                        </div>
                    </div>

                    <div class="btn-group" v-if="course.content !== null && course.content.length > 3">
                        <a href="javascript:;" class="btn btnViewMore" @click="viewMore">Xem thêm</a>
                    </div>
                </div>
            </div>

            <div class="cdetail-teacher" v-if="teachers.length > 0">
                <div class="cdetail-teacher--wrapper container">
                    <div class="cdetail-teacher--title">Giảng Viên Khóa Học</div>
                    <p class="cdetail-teacher--description">Đội ngũ giảng viên giàu kinh nghiệm</p>

                    <div class="cdetail-teacher--list">
                        <div class="cdetail-teacher--item" v-for="(item, index) in teachers" :key="index">
                            <div class="cdetail-teacher--thumb">
                                <img :src="assetUrl + item.avatar" alt="">
                            </div>
                            <div class="cdetail-teacher--name">{{item.name}}</div>
                            <p class="cdetail-teacher--info">{{item.quote}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cdetail-material">
                <div class="cdetail-material--wrapper container">
                    <div class="cdetail-material--title">Ưu Điểm Khóa Học</div>

                    <div class="cdetail-material--list">
                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-1.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">Thực hành không giới hạn</div>
                        </div>

                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-2.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">Nguyên vật liệu, máy móc thiết bị luôn đầy đủ</div>
                        </div>

                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-3.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">Giảng viên nhiệt tính, giàu kinh nghiệm</div>
                        </div>

                        <div class="cdetail-material--item">
                            <div class="cdetail-material--thumb">
                                <img :src="require('../assets/images/material-4.jpg')" alt="">
                            </div>
                            <div class="cdetail-material--name">Được học hỏi, trau dồi kiến thức kinh doanh</div>
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
    data() {
        return {
            assetUrl: this.$asset,
            course: '',
            teachers: '',
            swiperGalleryOption: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            swiperGallerySlides: '',
        }
    },
    beforeCreate() {
        this.$http.get(this.$api + '/subjects/' + this.$route.params.id)
                    .then(response => {
                        this.course = response.data;
                        return this.course;
                    })

        this.$http.get(this.$api + '/teachers/subject/' + this.$route.params.id)
                    .then(response => {
                        this.teachers = response.data;
                        return this.teachers;
                    })

        this.$http.get(this.$api + '/media/subject/' + this.$route.params.id)
                    .then(response => {
                        this.swiperGallerySlides = response.data;
                        return this.swiperGallerySlides;
                    })
    },
    mounted() {
        document.title = 'Chi tiết khóa học | ' + this.$defaultTile
    },
    methods: {
        viewMore: function() {
            let sessionItems = document.getElementsByClassName('cdetail-main--item');
            for (let i = 0; i < sessionItems.length; i++) {
                sessionItems[i].classList.remove('hidden')
            }
            event.target.style.display = "none";
        },
    }
}
</script>

<style>

</style>