<template>
    <nav class="nav" id="navigator">
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
    mounted() {
        window.addEventListener('scroll', function() {
            var scrollTop = window.scrollY;
            if(scrollTop > 50) {
                document.getElementById('navigator').classList.add('fixed')
            } else {
                document.getElementById('navigator').classList.remove('fixed')
            }
        })
    }
}
</script>

<style>

</style>