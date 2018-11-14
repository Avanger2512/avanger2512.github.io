<template >

  <div class="textarea">
    <label :for="name">{{ name }}</label>
    <textarea :name="name"
      :placeholder="placeholder"
      :value="text"
      @input="onTextarea"

      ></textarea>
    <div class="textarea__total">
      {{ checkEnterValue }} / {{ totalCharacter }}
    </div>
  </div>

</template>

<script>

export default {
  props: ['placeholder', 'name', 'text'],
  data() {
    return {
      totalCharacter: 250,
      value: ''
    }
  },
  methods: {
    onTextarea(e) {
      this.value = e.target.value;

      if (this.value.length >= this.totalCharacter) {
        this.value = this.value.substring(0,this.totalCharacter)
      }

      this.$emit('onChangeTextarea', this.value);
      this.$store.commit('updateMessage', this.value);
    }
  },
  computed: {
    checkEnterValue() {
      return this.value.length;
    }
  },
}
</script>

<style lang="sass">
@import '@/assets/helpers/_variables.sass'

.textarea
  label
    display: block
    margin-bottom: 5px
    font-size: 15px
    font-weight: 700
    text-transform: capitalize

  textarea
    width: 100%
    border: 1px solid $gray
    border-radius: 5px
    padding: 10px
    resize: none
    font-size: 14px
    min-height: 150px

  &__total
    font-size: 10px
</style>
