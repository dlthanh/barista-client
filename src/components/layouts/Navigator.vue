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
                    <router-link :to="{name: 'articles'}">Tin tức</router-link>
                </li>
                <li>
                    <router-link :to="'#'">Về chúng tôi</router-link>
                </li>
                <li>
                    <router-link :to="'#'">Liên hệ</router-link>
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