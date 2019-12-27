<template>
    <nav class="nav">
        <div class="nav-wrapper container">
            <div class="nav-logo">
                <router-link :to="{name: 'home'}">
                    <img src="../../assets/images/logo.svg" alt="">
                </router-link>
            </div>

            <ul class="nav-route">
                <li>
                    <router-link :to="{name: 'course'}">Khóa học</router-link>
                </li>
                <li>
                    <router-link :to="'#'">Nguyên liệu</router-link>
                </li>
                <li>
                    <router-link :to="'#'">Dịch vụ & Tư vấn</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'category'}">Tin tức</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about'}">Về chúng tôi</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'contact'}">Liên hệ</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>