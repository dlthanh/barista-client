<template>
    <div class="course-calendar">
        <h3 class="course-calendar--title">Lịch khai giảng</h3>
        <vc-calendar 
            locale="vi-VN" 
            :attributes="getCalendar">
        </vc-calendar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getCalendar: ''
        }
    },
    beforeCreate() {
        var today = new Date();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        this.$http.get(this.$api + '/courses/' + month + '/' + year)
                    .then(response => {
                        this.getCalendar = response.data;
                        console.log(year);
                        return this.getCalendar;
                    })
    }
}
</script>

<style>

</style>