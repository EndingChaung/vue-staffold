<script>
export default {
  name: 'Message',
  data() {
    return {
      message: '',
      duration: 3000,
      timer: null,
      closed: false,
      visible: false,
      position: 'center',
      type: 'dark', // info | success | warn | error | dark
      customClass: '',
    };
  },
  mounted() {
    this.startTimer();
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    },
  },
  computed: {
    positionClass() {
      let klass = 'top';
      if (typeof this.position === 'string' && ['top', 'center', 'bottom'].includes(this.position)) {
        klass = this.position;
      }
      return klass;
    },
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
};
</script>

<template lang="pug">
  <transition name="message-fade">
    .message(v-show="visible", :class="[positionClass, type, customClass]")
      | {{ message }}
  </transition>
</template>

<style lang="stylus" scoped>
.message
  box-shadow: 0 2px 4px rgba(0,0,0,.2), 0 0 6px rgba(0,0,0,.1)
  padding: 10px 16px
  box-sizing: border-box
  border-radius: 4px
  position: fixed
  left: 50%
  transform: translate(-50%, 0%)
  background-color: rgba(0,0,0,0.7)
  color: #fff
  font-size: 16px
  font-weight: bold
  word-break: break-word
  transition: opacity 0.3s, transform .4s
  overflow: hidden
  z-index: 2000

.message-fade-enter,
.message-fade-leave-active
  opacity: 0
  transform: translate(-50%, -100%)

.top
  top: 20px
.center
  top: 50%
  transform: translate(-50%, -50%)
.bottom
  bottom: 30px
  top: initial

.info
  background-color: #50BFFF
.error
  background-color: #ff4949
.warn
  background-color: #f7ba2a
.success
  background-color: #13ce66
.dark
  background-color: rgba(0,0,0,0.7)

@media (max-width: 768px)
  .message
    width: initial
@media (min-width: 768px)
  .message
    width: initial
</style>
