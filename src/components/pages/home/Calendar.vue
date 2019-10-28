<template>
    <div class="course-calendar">
        <h3 class="course-calendar--title">Lịch khai giảng</h3>
        <vc-calendar locale="vi-VN" :attributes="getCalendar"></vc-calendar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getCalendar: [
                {
                    highlight: {
                        color: 'red',
                        fillMode: 'solid'
                    },
                    class: 'has-class',
                    dates: [
                        '10/31/2019'
                    ],
                    popover: {
                        label: 'Khai giảng lớp pha chế tổng hợp',
                    }
                }
            ]
        }
    }
}
</script>

<style>

</style>