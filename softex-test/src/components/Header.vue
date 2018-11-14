<template lang="html">

  <header class="header">
    <div class="container">
      <div class="header__in">
        <div class="header__left">

          <router-link to="/" class="logo header__logo">
            <img alt="Vue logo" src="@/assets/logo.png">
          </router-link>

        </div>
        <div class="header__right">

          <nav class="nav">
            <router-link to="/" class="nav__link">Home</router-link>
            <router-link to="/about" class="nav__link">About Us</router-link>
            <router-link to="/contact" class="nav__link">Contact Us</router-link>
          </nav>

        </div>
      </div>
    </div>
  </header>

</template>

<style lang="sass" scoped>

@import '@/assets/helpers/_variables.sass'

.header
  position: fixed
  top: 0
  width: 100%
  z-index: 99
  min-height: 54px
  background: $gray
  padding: 10px 0
  min-width: 320px

  &__in
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: space-between

.logo
  display: inline-block
  transition: opacity .15s

  &:hover
    opacity: .8

  img
    max-width: 35px
    margin-bottom: -6px

.nav
  margin: 0 -10px

  @media only screen and (max-width: "767px")
    margin: 0 -5px

  &__link
    margin: 0 10px
    color: $black
    padding: 0 5px
    border-bottom: 1px solid transparent
    transition: color .15s

    &:hover
      color: rgba($black, .75)

    &.router-link-exact-active
      border-color: $green

    @media only screen and (max-width: "767px")
      padding: 0
      margin: 0 5px
</style>
