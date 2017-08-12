<template>
  <div>
    <transition :name="options.transition">
      <div :id="options.id" class="zy-dialog-wrapper" v-if="visible" @click.self="maskClick" @keydown.esc="escape">
        <div class="zy-dialog-backdrop" :style="{background: options.maskColor}"></div>
        <div class="zy-dialog-content" :class="{'zy-dialog-wide': options.wide}" ref="dialogContent" tabindex="-1">

          <div class="zy-dialog-header" :class="{'with-body': options.message}">
            <pre>{{ options.title }}</pre>
          </div>

          <div class="zy-dialog-body" v-if="options.message">
            <pre>{{ options.message }}</pre>
          </div>

          <div class="zy-dialog-body" v-if="options.mode === 'prompt'">
            <div class="prompt-input-wrapper">
              <input class="prompt-input" type="text" v-model="input" @keydown.enter="rbClick" ref="promptInput">
            </div>
          </div>

          <div class="zy-dialog-footer">
            <input type="button" class="zy-dialog-footer-button zy-dialog-footer-button-alt" :class="{'red': options.lbDanger}" v-if="!options.lbHide" @click="lbClick" :value="options.lbLabel" ref="lbButton">
            <input type="button" class="zy-dialog-footer-button zy-dialog-footer-button-main" :class="{'red': options.rbDanger}" v-if="!options.rbHide" @click="rbClick" :value="options.rbLabel" ref="rbButton" tabindex="-1">
          </div>

        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const OPTIONS_TEMPLATE = {
  id: 'vue-zydialog-default', // DOM id
  className: '', // additional class name
  maskColor: 'rgba(40, 40, 40, 0.6)', // color of the mask area
  override: false, // current dialog overrides the queue and cancel any dialogs before it
  parent: 'body', // parent DOM node
  transition: 'zy-dialog-transition', // transition name
  duration: 0, // milliseconds before auto close, set to 0 or any falsy value to disable auto close
  wide: false, // show as a wide dialog
  title: '', // dialog title
  message: '', // dialog message
  mode: 'alert', // alert, confirm or prompt
  forceStay: true, // set to true to prevent closing / canceling the dialog when mask area is clicked
  defaultButton: 'r', // set the button that gets focus when the dialog shows, available when at least two buttons are shown
  lbDanger: false, // set to true to style the left button as danger
  rbDanger: false, // set to true to style the right button as danger
  lbHide: false, // hide left button
  rbHide: false, // hide right button
  lbLabel: '取消', // left button label text
  rbLabel: '确认', // right button label text
  actionAlt: null, // callback function when left button is clicked
  action: null, // callback function when right button is clicked
}

const CANCELLED = true

class Later {
  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject
      this.resolve = resolve
    })
  }
}

export default {
  OPTIONS_TEMPLATE,
  props: [],
  components: {},
  computed: {
    options () {
      return Object.assign({}, OPTIONS_TEMPLATE, this.optionsData)
    }
  },
  watch: {},
  data () {
    return {
      queue: [],
      optionsData: {},
      visible: false,
      input: '',
      timeoutHandler: null,
      promiseHandler: null
    }
  },
  methods: {
    enqueue (args) {
      let pending = this.queue.length
      if (args.override) {
        this.queue = [args]
        this.transit()
      } else {
        this.queue.push(args)
        if (pending === 0) this.transit()
      }
      args.promiseHandler = new Later()
      return args.promiseHandler.promise
    },
    consume (cancelled) {
      switch (this.options.mode) {
        case 'alert':
          this.optionsData.promiseHandler.resolve()
          break
        case 'confirm':
          if (cancelled) {
            this.optionsData.promiseHandler.reject()
          } else {
            this.optionsData.promiseHandler.resolve()
          }
          break
        case 'prompt':
          if (cancelled) {
            this.optionsData.promiseHandler.resolve(null)
          } else {
            this.optionsData.promiseHandler.resolve(this.input)
          }
          break
        default:
          this.optionsData.promiseHandler.resolve()
          break
      }
      if (this.timeoutHandler) clearTimeout(this.timeoutHandler)
      this.timeoutHandler = null
      this.input = ''
      this.transit()
      this.queue.shift()
    },
    transit () {
      this.visible = false
      setTimeout(() => {
        if (this.queue.length) {
          this.optionsData = this.queue[0]
          this.visible = true
          setTimeout(() => {
            if (this.options.mode === 'prompt') {
              this.$refs.promptInput.focus()              
            } else {
              this.$refs.rbButton.focus()
            }
          })
          if (this.options.duration) {
            this.timeoutHandler = setTimeout(() => {
              this.consume()
            }, this.options.duration)
          }
        }
      })
    },
    escape () {
      this.consume(CANCELLED)
    },
    maskClick () {
      if (this.options.forceStay === false) {
        this.consume(CANCELLED)
        if (typeof this.options.actionAlt === 'function') {
          this.options.actionAlt()
        }
      }
    },
    lbClick () {
      this.consume(CANCELLED)
      if (typeof this.options.actionAlt === 'function') {
        this.options.actionAlt()
      }
    },
    rbClick () {
      this.consume()
      if (typeof this.options.action === 'function') {
        this.options.action()
      }
    }
  },
  mounted () {}
}
</script>

<style scoped>
.zy-dialog-transition-leave {
  opacity: 1;
}
.zy-dialog-transition-leave-active {
  transition: all .2s ease;
}
.zy-dialog-transition-leave-to {
  opacity: 0;
}

.zy-dialog-transition-enter .zy-dialog-content, .zy-dialog-transition-leave-to .zy-dialog-content {
  opacity: 0.8;
  top: 45% !important;
}

@import './themes/default.css'
</style>
