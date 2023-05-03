<template>
    <div class="w-full xl:pt-52">
        <div class="bg-white h-24 xl:h-28 xl:bottom-0 xl:left-0 xl:right-0">
            <div class="mt-16 xl:mt-4">
                <div class="container flex absolute mt-3 pl-24 xl:w-full xl:pt-6">
                    <a href="https://www.linkedin.com/in/simone-codarin/" target="_blank"><img class="relative flex mr-5 xl:mr-10 xl:w-10 xl:-mt-5" src="../assets/image/social/linkedin_logo.png" width="30" id="loghi"></a>
                    <a href="https://www.facebook.com/simone.codarin.3/" target="_blank"><img class="relative flex mr-5 xl:mr-10 xl:w-10 xl:-mt-5" src="../assets/image/social/facebook_logo.png" width="30" id="loghi"></a>
                    <a href="https://www.instagram.com/simone_codarin/" target="_blank"><img class="relative flex mr-5 xl:mr-10 xl:w-10 xl:-mt-5" src="../assets/image/social/instagram_logo.png" width="30" id="loghi"></a>
                    <a href="https://github.com/SimoCoda" target="_blank"><img class="relative flex xl:w-10 xl:-mt-5 " src="../assets/image/social/github_logo.png" width="30" id="loghi"></a>
                </div>
                <p class="relative text-center text-xs top-16 xl:m-auto xl:text-lg">© 2023 Developed by Simone Codarin. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    setup(){

        return {}
    }
}
</script>

<style scoped>
    #loghi {
        animation: mymove 3s;
        animation-timing-function: ease-in-out;
    }
    #loghi:hover {
        transform: scale(1.25) translateZ(0);
    }
    .container:hover > :not(:hover){
        opacity: .4;
    }
    @keyframes mymove {
        from {left: -260px; opacity: 0;}
        to {left: 1px; opacity: 1;}
    }

</style>>
