import ZyDialog from './ZyDialog.vue'

export default {
  install (Vue, options = {}) {
    const CONSTRUCTOR = Vue.extend(ZyDialog)
    const CACHE = {}
    const mergedOptions = Object.assign(ZyDialog.OPTIONS_TEMPLATE, options)
    Vue.alert = Vue.prototype.$alert = (args = {}) => {
      return zydialog('alert', args)
    }
    Vue.confirm = Vue.prototype.$confirm = (args = {}) => {
      return zydialog('confirm', args)
    }
    Vue.prompt = Vue.prototype.$prompt = (args = {}) => {
      return zydialog('prompt', args)
    }
    const zydialog = (mode, args) => {
      if (typeof args === 'string') {
        let title = args
        args = { title }
      }
      args.mode = mode || 'alert'
      switch (mode) {
        case 'alert':
          args.lbHide = true
          break
        case 'confirm':
          break
        case 'prompt':
          break
        default:
          args.lbHide = true
          break
      }
      let dialog = CACHE[mergedOptions.id] || (CACHE[mergedOptions.id] = new CONSTRUCTOR())
      if (!dialog.$el) {
        let vm = dialog.$mount()
        document.querySelector(args.parent || 'body').appendChild(vm.$el)
      }
      return dialog.enqueue(args)
    }
  }
}
