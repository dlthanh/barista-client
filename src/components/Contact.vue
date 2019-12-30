<template>
    <div id="contact">
        <div class="banner">
            <img :src="require('../assets/images/contact-banner.jpg')" alt="">    

            <div class="banner-content container">
                <h1>Liên hệ <span class="line"></span> <span>Barista Skills</span></h1>
            </div>
        </div>
        
        <div class="form container">
            <div class="form-left">
                <h2>Thông tin <br /> liên hệ</h2>

                <h3 class="contact-title">Địa chỉ</h3>
                <p>{{contact.address}}</p>

                <h3 class="contact-title">Hotline</h3>
                <p>Tư vấn khóa học: {{contact.phone_first}} / {{contact.phone_second}}</p>
                <p>Tư vấn mở quán: {{contact.phone_first}}</p>
                <p>Tư vấn thiết bị: {{contact.phone_first}}</p>

                <h3 class="contact-title">Email</h3>
                <p>{{contact.email}}</p>

                <ul class="social">
                    <li>
                        <a target="_blank" :href="contact.facebook ? contact.facebook : '#'">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" :href="contact.instagram ? contact.instagram : '#'">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" :href="contact.youtube ? contact.youtube : '#'">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="form-right">
                <h2>Bạn có muốn để lại lời nhắn <br /> cho chúng tôi?</h2>

                <div class="form-wrap">
                    <div class="form-group flex">
                        <div class="form-column">
                            <label><span class="required">*</span> Họ tên</label>
                            <input type="text" name="name" required v-model="contactData.name">
                        </div>

                        <div class="form-column">
                            <label><span class="required">*</span> Số điện thoại</label>
                            <input type="text" name="phone" required v-model="contactData.phone">
                        </div>
                    </div>

                    <div class="form-group">
                        <label><span class="required">*</span> Email</label>
                        <input type="email" name="email" required v-model="contactData.email">
                    </div>

                    <div class="form-group">
                        <label><span class="required">*</span> Lời nhắn</label>
                        <textarea id="" cols="30" rows="10" name="mesage" required v-model="contactData.mesage"></textarea>
                    </div>

                    <a href="javascript:;" class="form-submit" @click="submit">Gửi lời nhắn</a>
                </div>
            </div>
        </div>

        <div class="map" v-html="contact.map"></div>
    </div>
</template>

<script>
export default {
    props: ['contact'],
    data() {
        return {
            contactData: {
                name: '',
                phone: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        submit: function() {
            this.$http.post(this.$api + '/customer', this.contactData)
                        .then(response => {
                            alert(response.data.message)
                        })
        }
    }
}
</script>

<style>

</style>