<template>
    <footer class="footer">
        <div class="footer-wrapper container">
            <div class="footer-column">
                <h3 class="footer-title">Barista Skills</h3>

                <ul class="footer-list">
                    <li class="footer-item">Công ty TNHH Đầu Tư và Phát Triển Barista Skills</li>
                    <li class="footer-item">Địa chỉ: {{contact.address}}</li>
                    <li class="footer-item">Hotline: {{contact.phone_first}}</li>
                    <li class="footer-item">Email: {{contact.email}}</li>
                </ul>
            </div>

            <div class="footer-column">
                <h3 class="footer-title">Dịch vụ</h3>

                <ul class="footer-list">
                    <li class="footer-item">
                        <a href="#">Đào tạo pha chế chuyên nghiệp</a>
                    </li>
                    <li class="footer-item">
                        <a href="#">Cung cấp máy móc, dụng cụ, nguyên liệu pha chế</a>
                    </li>
                    <li class="footer-item">
                        <a href="#">Dịch vụ SET-UP cửa hàng</a>
                    </li>
                </ul>
            </div>

            <div class="footer-column">
                <h3 class="footer-title">Về chúng tôi</h3>

                <ul class="footer-list">
                    <li class="footer-item">
                        <a href="#">Về chúng tôi</a>
                    </li>
                    <li class="footer-item">
                        <a href="#">Liên hệ với chúng tôi</a>
                    </li>
                    <li class="footer-item">
                        <a href="#">Chính sách bảo mật</a>
                    </li>
                </ul>
            </div>

            <div class="footer-column">
                <div class="fb-page" data-href="https://www.facebook.com/hocphache.vn/" data-tabs="" data-width="300" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/hocphache.vn/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/hocphache.vn/">Lớp học pha chế Barista Skills</a></blockquote></div>
            </div>
        </div>

        <div class="footer-copyright container">
            <img src="../../assets/images/logo.svg" alt="">

            <p>&copy; Bản quyền thuộc về Trung tâm đào tạo pha chế chuyên nghiệp Barista Skills | Cung cấp bởi BMS Agency</p>
        </div>
    </footer>
</template>

<script>
export default {
    props: ['contact']
}
</script>

<style>

</style>