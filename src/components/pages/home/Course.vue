<template>
    <div class="course-list">
        <div class="course-item" v-for="(course, index) in courses" :key="index">
            <router-link :to="{name: 'course-detail', params: {id: course.id}}" class="course-item--thumb">
                <img :src="assetUrl + course.thumbnail" alt="">
            </router-link>
            <div class="course-item--main">
                <router-link :to="'#'" class="course-item--title">{{course.title}}</router-link>

                <div class="course-item--info">
                    <p class="course-item--description">{{course.short_description}}</p>
                    <p class="course-item--price">Học phí: {{course.price}} VNĐ</p>
                </div>

                <router-link :to="{name: 'course-detail', params: {id: course.id}}" class="course-item--viewdetail">Xem chi tiết <i class="fas fa-caret-right"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            assetUrl: this.$asset,
            courses: ''
        }
    },
    beforeCreate() {
        this.$http.get(this.$api + '/subjects/home')
            .then(response => {
                this.courses = response.data
                return this.courses;
            })
    }
}
</script>

<style>

</style>