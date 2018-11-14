<template>
  <div class="contact">
    <div class="text-center">
      <h1 class="title">Contact page</h1>
    </div>
    
    <form class="form"
      @submit.prevent="submitForm"
      action="#"
      method="post"
      v-if="!submited">

      <div class="text-center">
        <h3>Please add info</h3>
      </div>

      <div class="form__item"
        v-for="(item, index) in info"
        :key="index">
        <app-input :value="item.value"
          :placeholder="item.placeholder"
          :name="item.title"
          :type="item.type"
          :needMask="item.needMask"
          :pattern="item.pattern"
          :mask="item.mask"
          @onChangeInput="onChange(index, $event)"
        ></app-input>
      </div>

      <div class="form__item">
        <app-textarea
          placeholder="Enter message..."
          name="message"
          :text="textarea"
          @onChangeTextarea="onChangeArea($event)"
        ></app-textarea>
      </div>

      <div class="forn__item">
        <button type="submit"
          name="button"
          class="btn"
          :disabled="done < info.length">
          Submit
        </button>
      </div>
    </form>

    <!-- begin info-message -->
    <app-info-message v-else
      @backToForm="toggleVisible"
    ></app-info-message>
    <!-- end info-message -->
  </div>
</template>

<script>

import appInput from '@/components/form/Input'
import appTextarea from '@/components/form/Textarea'
import appInfoMessage from '@/components/InfoMessage'

import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      done: 0,
      submited: false,
      info: [
        {
          title: 'name',
          value: '',
          placeholder: 'Enter name',
          mask:'',
          pattern: /^[a-zA-Z ]{3,30}$/
        },
        {
          title: 'phone',
          value: '',
          placeholder: 'Enter phone',
          needMask: true,
          mask:'+380#########',
          pattern: /\+[0-9]{12,}$/
        }
      ],
      textarea: ''
    }
  },
  created() {
    for (let i = 0; i < this.info.length; i++) {
      this.info[i]['isValid'] = false;
    }
    this.info.forEach((item)=> {
      if (item.title === 'name') {
        item.value = this.getName;
        item.isValid = true;
      }
    });
  },
  computed: {
    ...mapGetters([
      'getName',
    ])
  },
  methods: {
    onChange(index, e) {
      let done = 0;

      this.info.forEach((item)=> {
        if (item.title === e.name) {
          item.value = e.value;
          item.isValid = e.valid;
        }
        if (item.isValid === true) {
          done++
        }
        this.done = done;
      });

      if (e.name === 'name') {
        this.$store.commit('updateName', this.info[index].value);
      }
      if (e.name === 'phone') {
        this.$store.commit('updatePhone', this.info[index].value);
      }
    },
    onChangeArea(e) {
      this.textarea = e;
    },
    submitForm() {
      console.log('Submit form');

      this.$store.commit('resetFormData');
      this.textarea = '';
      for (let i = 0; i < this.info.length; i++) {
        this.info[i].value = '';
      }

      this.submited = true;
    },
    toggleVisible() {
      this.submited = !this.submited
    }
  },
  components: {
    appInput,
    appTextarea,
    appInfoMessage
  }
}
</script>

<style lang="sass" scoped>

.form
  max-width: 450px
  margin: 50px auto

  &__item
    &:not(:last-child)
      margin-bottom: 15px

</style>
