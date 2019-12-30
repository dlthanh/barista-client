<template>
    <div class="service">
        <div class="service-wrapper container">
            <h2 class="service-title">Dịch Vụ Của Barista Skills</h2>
            <p class="service-description">Đào Tạo Chuyên Nghiệp - Cầm Tay Chỉ Việc Từ A-Z</p>

            <div class="service-list">
                <div class="service-item" v-for="index in 3" :key="index">
                    <img :src="require('../../../assets/images/service-' + index + '.png')" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>