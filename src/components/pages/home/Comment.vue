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
                {avatar: '', name: 'Nguyễn Hà Phương 1', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
                {avatar: '', name: 'Nguyễn Hà Phương 2', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
                {avatar: '', name: 'Nguyễn Hà Phương 3', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
                {avatar: '', name: 'Nguyễn Hà Phương 4', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
                {avatar: '', name: 'Nguyễn Hà Phương 5', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
                {avatar: '', name: 'Nguyễn Hà Phương 6', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
                {avatar: '', name: 'Nguyễn Hà Phương 7', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
                {avatar: '', name: 'Nguyễn Hà Phương 8', jobtitle: 'Barista', comment: 'Gà Phê - Số 7, ngõ 20, Thái Hà, Đống Đa, Hà Nội. Mức giá trung bình : 35.000 - 45.000 Gà Phê là một quán cafe khá nổi và thu hút trên mạng xã hội hiện nay vì mang hình ảnh đầy'},
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