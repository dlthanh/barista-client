<template>
    <div class="comment">
        <div class="comment-wrapper container">
            <div class="comment-left">
                <h2 class="comment-title">Nhận Xét Của Học Viên</h2>
                <p class="comment-description">Sự hài lòng của khách hàng chính là động lực để chúng tôi không ngừng nỗ lực phấn đấu và phát triển hết mình</p>
            </div>

            <div class="comment-right">
                <swiper :options="swiperCommentOption" class="comment-main">
                    <swiper-slide class="comment-list" v-for="rangeIndex in commentListMount.length" :key="rangeIndex">
                        <div class="comment-item" v-for="(comment, index) in commentListMount[rangeIndex - 1]" :key="index">
                            <div class="comment-item--head">
                                <div class="comment-item--avatar"></div>
                                <div class="comment-item--info">
                                    <p class="comment-item--name">{{comment.name}}</p>
                                    <p class="comment-item--jobtitle">{{comment.jobtitle}}</p>
                                </div>
                            </div>

                            <div class="comment-item--comment">
                                {{comment.comment}}
                            </div>
                        </div>
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
            swiperCommentOption: {
                slidesPerView: 1
            },
            commentList: [
                {avatar: '', name: 'Nguyễn Hà Phương', jobtitle: 'Barista', comment: 'Chuyên nghiệp và giàu kinh nghiệm là điều mà tôi muốn nói về BaristaSkills'},
                {avatar: '', name: 'Trần Minh Hà', jobtitle: 'Barista', comment: 'Mình có đăng ký một khóa học pha chế tổng hợp tại BaristaSkills do mình có định hướng mở một quán café của riêng mình và khóa học này thực sự đáp ứng đầy đủ những yêu cầu của mình. Tất cả các món được giảng dạy đều bắt kịp xu thế của…'},
                {avatar: '', name: 'Đỗ Đình Huy', jobtitle: 'Barista', comment: 'Hì mình đã từng theo đuổi………. À không theo học pha chế ở đây. Điều mình ấn tượng đó chính là các anh dạy pha chế ở đay không những cute, chu đáo mà chuyên môn còn rất cao nữa. Mình đã từng thử một vài điểm dạy về pha chế trước đó nhưng khi…'},
            ],
            commentRange: null,
            commentListMount: []
        }
    },
    beforeMount() {
        if(this.commentList.length % 3 !== 0) {
            this.commentRange = parseInt(this.commentList.length / 3)
        } else {
            this.commentRange = parseInt(this.commentList.length / 3) - 1
        }
        for(let i = 0; i <= this.commentRange; i++) {
            this.commentListMount[i] = this.commentList.slice(i * 3, i * 3 + 3);
        }
    }
}
</script>

<style>

</style>