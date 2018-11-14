<template>
  <div id="app">

    <!-- begin header -->
    <app-header></app-header>
    <!-- end header -->

    <div class="wrapper">
      <div class="container">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import appHeader from '@/components/Header.vue'

export default {
  name: 'top',
  components: {
    appHeader
  }
}
</script>

<style lang="sass">

@import '@/assets/helpers/_reset.sass'
@import '@/assets/helpers/_variables.sass'
@import '@/assets/helpers/_vue-awesome-swiper.scss'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-size: 14px
  min-width: 320px
  color: $black

a
  text-decoration: none

img
  max-width: 100%

.container
  position: relative
  max-width: 1240px
  width: 100%
  margin: 0 auto
  padding: 0 20px
  // overflow: hidden

.wrapper
  padding-top: 75px

.desc
  font-size: 16px
  line-height: 1.3
  margin-top: 40px

.title
  font-size: 50px
  line-height: 1.2
  margin-bottom: 20px
  text-align: center
  @media only screen and (max-width: "767px")
    font-size: 25px

h3
  margin-bottom: 20px

.text-center
  text-align: center

p
  & + &
    margin-top: 5px

.btn
  display: inline-block
  vertical-align: middle
  font-size: 15px
  background: $green
  padding: 3px 15px 4px
  color: #fff
  border-radius: 5px
  font-weight: 700
  transition: background .15s
  &:hover
    background: $black
  &:disabled
    opacity: .7
    pointer-events: none


</style>
