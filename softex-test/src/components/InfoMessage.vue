<template lang="html">
  <div class="info">
    <div class="container ">

      <div v-if="error === 404 ? false : true">
        <div class="info__in is-success">
          <h2 v-for="(item, index) in json"
            :key="index">
            {{ item.caption }} <br>
            {{ item.description }}
          </h2>
        </div>
        <router-link to="/" class="btn">Back Home</router-link>
      </div>

      <div v-else>
        <div class="info__in is-error">
          <h2>Sorry! Server is not available</h2>
        </div>
        <button type="button"
          name="button"
          class="btn"
          @click="$emit('backToForm', $event)">
          Back Contact
        </button>
      </div>

    </div>
  </div>
</template>

<script>
let url = '../data.json';

export default {
  name: 'info',
  data() {
    return {
      json: [],
      error: ''
    }
  },
  created: function(){
		this.init();
	},
	methods: {
		init: function(){
			this.loadData();
		},
		loadData: function() {
      this.$http.get(url).then(response => {
        this.json = response.body;
      }, response => {
        // error callback
        this.error = response.status;
        console.log(response);
      });
		}
	}
}
</script>

<style lang="sass">
@import '@/assets/helpers/_variables.sass'

.info
  max-width: 600px
  width: 100%
  margin: 100px auto
  text-align: center

  @media only screen and (max-width: "767px")
    margin: 50px auto

  &__in
    padding: 20px 40px
    border: 1px solid transparent
    border-radius: 5px

    &.is-success
      border-color: $green

    &.is-error
      border-color: rgba($red, .5)

    & + .btn
      margin-top: 20px
</style>
