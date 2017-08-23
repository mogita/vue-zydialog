import Vue from 'vue'
import App from './App.vue'
import ZyDialog from './../lib'

let lang = navigator.language || navigator.userLanguage || 'en-US'
lang = lang.toLowerCase()

let langKey
if (~lang.indexOf('cn')) {
  langKey = 'cn'
} else {
  langKey = 'en'
}

const langTable = {
  cn: {
    lbLabel: '取消',
    rbLabel: '确认'
  },
  en: {
    lbLabel: 'Cancel',
    rbLabel: 'Confirm'
  }
}

Vue.use(ZyDialog, {
  lbLabel: langTable[langKey].lbLabel,
  rbLabel: langTable[langKey].rbLabel
})

Vue.prototype.$langKey = langKey

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
