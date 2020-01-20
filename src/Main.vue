<template>
    <div id="barista-skills">
        <b-header :contact="contact"></b-header>
        <b-nav></b-nav>
        <router-view :contact="contact"></router-view>
        <b-footer :contact="contact"></b-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contact: {
                email: 'infor@baristaskills.vn',
                phone_first: '0904 055 852',
                phone_second: '0971 055 852',
                phone_third: '0962 056 852',
                phone_fourth: '0988 055 852',
                address: 'Ô 3 Lô 4A KĐT Đền Lừ 2 - P. Hoàng Văn Thụ - Q. Hoàng Mai - Tp. Hà Nội',
                facebook: 'https://www.facebook.com/hocphache.vn/',
                instagram: '',
                youtube: 'https://www.youtube.com/channel/UCuqz2zxDAb1Sm9cf4NFH6yw',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.203401217889!2d105.85613791540206!3d20.98448219466341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6db365c785%3A0xdf353ac76f24762f!2zVHJ1bmcgdMOibSDEkcOgbyB04bqhbyBwaGEgY2jhur8gQmFyaXN0YSBTa2lsbHM!5e0!3m2!1svi!2s!4v1569700097917!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
            }
        }
    },
    mounted() {
        
    }
}
</script>

<style>

</style>