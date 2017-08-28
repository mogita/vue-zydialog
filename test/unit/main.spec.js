/* global describe, it */
/* eslint-disable no-new */

import Vue from 'vue'
import ZyDialog from './../../src/lib'
const chai = require('chai')
const expect = chai.expect

describe('mounting the plugin', () => {
  it('should have an install method', () => {
    expect(ZyDialog.install).to.be.a('function')
  })
})

describe('calling the plugin', () => {
  it('should return a promise', () => {
    Vue.use(ZyDialog)
    new Vue({
      mounted () {
        expect(this.$zydialog()).to.be.a('promise')
      }
    })
  })
})
