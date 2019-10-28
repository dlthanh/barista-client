<template>
    <header class="header">
        <div class="header-wrapper container">
            <div class="header-left">
                <ul>
                    <li>
                        <a target="_blank" :href="contact.facebook ? contact.facebook : '#'"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                        <a target="_blank" :href="contact.instagram ? contact.instagram : '#'"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a target="_blank" :href="contact.youtube ? contact.youtube : '#'"><i class="fab fa-youtube"></i></a>
                    </li>
                </ul>
            </div>

            <div class="header-right">
                <ul>
                    <li>Email: {{contact.email}}</li>
                    <li>Hotline: {{contact.phone_first}}</li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['contact']
}
</script>

<style>

</style>