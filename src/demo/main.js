import Vue from 'vue'
import App from './App.vue'
import ZyDialog from './../lib'

const lang = navigator.language || navigator.userLanguage || 'en-US'

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

const theLang = langTable[langKey]

Vue.use(ZyDialog, {
  lbLabel: theLang.lbLabel,
  rbLabel: theLang.rbLabel
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
