<template>
  <div class="container">
    <section class="header">
      <h3><a href="https://github.com/mogita/vue-zydialog">Vue ZyDialog</a></h3>
      <p>A dialog component that makes <code>alert</code>, <code>confirm</code> and <code>prompt</code> easy and neat in your Vue.js apps.</p>
    </section>

    <section class="demo-wrapper">
      <div class="demo-button-group">
        <h4 class="demo-title">
          Demo
        </h4>
        <button class="demo-button" @click="alert">Alert</button>
        <button class="demo-button" @click="confirm">Confirm</button>
        <button class="demo-button" @click="prompt">Prompt</button>
        <button class="demo-button" @click="sequence">Sequence DEMO</button>
      </div>
    </section>

    <section class="readme">
      <h3>Installation</h3>
      With Yarn
      <pre><code>yarn add vue-zydialog</code></pre>
      Or with NPM
      <pre><code>npm install vue-zydialog --save</code></pre>

      <h3>Usage</h3>
      <p>In your <code>main.js</code> file</p>
      <pre><code>import ZyDialog from 'vue-zydialog'
Vue.use(ZyDialog)</code></pre>
      <p>In your <code>vue</code> component</p>
      <pre><code>...
methods: {
  sayHello () {
    this.$alert('Hello world')
    .then(() => {
      this.$alert('World confirmed')
    })
  }
}
...</code></pre>
    </section>

    <section class="more">
      <h3>Readme WIP, more coming soon...</h3>
    </section>
  </div>
</template>

<script>
const lang = navigator.language || navigator.userLanguage || 'en-US'
let langKey
if (~lang.indexOf('cn')) {
  langKey = 'cn'
} else {
  langKey = 'en'
}

const langTable = {
  cn: {
    alert: {
      helloWorld: '你好，世界',
      worldConfirmed: '世界已确认',
      timeUsed: '耗时',
      seconds: '秒'
    },
    confirm: {
      prettyWorld: '这是一个美丽的世界？',
      yes: '是的 😂',
      no: '不是 😿'
    },
    prompt: {
      sourceOfWorld: '我们的世界源自什么？',
      pleaseFillInTheBox: '请在框中填写你的答案',
      theSourceIs: '它源自「',
      theTypeIs: '」，类型是'
    },
    sequence: {
      sequenceDemo: '序列操作演示',
      selfRunWorld: '这是自行运转的世界',
      syncRate9: '同步率接近 99.9999999%',
      syncRate0: '同步率低至 0.00000001%',
      surprise: '惊喜！🌮',
      anotherSurprise: '又一个惊喜！\n延迟 3 秒后自行关闭'
    }
  },
  en: {
    alert: {
      helloWorld: 'Hello world',
      worldConfirmed: 'World confirmed',
      timeUsed: 'Time elapsed:',
      seconds: 'seconds'
    },
    confirm: {
      prettyWorld: 'Is this a beautiful world?',
      yes: 'Thought so 😂',
      no: 'Nope 😿'
    },
    prompt: {
      sourceOfWorld: 'What\'s the source of this world?',
      pleaseFillInTheBox: 'Please type your answer in the box',
      theSourceIs: 'The source is "',
      theTypeIs: '", the type is'
    },
    sequence: {
      sequenceDemo: 'Sequence DEMO',
      selfRunWorld: 'This is a self spinning world',
      syncRate9: 'Sync ratio at 99.9999999%',
      syncRate0: 'Sync ratio at 0.00000001%',
      surprise: 'Surprise! 🌮',
      anotherSurprise: 'Another surprise!\nWill auto close this dialog in 3 seconds'
    }
  }
}

const theLang = langTable[langKey]

export default {
  props: [],
  components: {},
  computed: {},
  watch: {},
  data () {
    return {}
  },
  methods: {
    alert () {
      let now = new Date().getTime()
      this.$alert(theLang.alert.helloWorld)
      .then(() => {
        let time = ((new Date().getTime() - now) / 1000).toFixed(2)
        this.$alert({
          title: theLang.alert.worldConfirmed,
          message: `${theLang.alert.timeUsed} ${time} ${theLang.alert.seconds}`
        })
      })
    },
    confirm () {
      this.$confirm(theLang.confirm.prettyWorld)
      .then(() => {
        this.$alert(theLang.confirm.yes)
      })
      .catch(() => {
        this.$alert(theLang.confirm.no)
      })
    },
    prompt () {
      this.$prompt({
        title: theLang.prompt.sourceOfWorld,
        message: theLang.prompt.pleaseFillInTheBox
      })
      .then(input => {
        this.$alert(`${theLang.prompt.theSourceIs}${input}${theLang.prompt.theTypeIs} ${typeof input}`)
      })
    },
    sequence () {
      this.$confirm({
        title: theLang.sequence.sequenceDemo,
        message: theLang.sequence.selfRunWorld
      })
      .then(() => {
        this.$alert(theLang.sequence.syncRate9)
      })
      .catch(() => {
        this.$alert(theLang.sequence.syncRate0)
      })

      setTimeout(() => {
        this.$alert({
          title: theLang.sequence.surprise,
          override: true
        })
      }, 1500)

      setTimeout(() => {
        this.$alert({
          title: theLang.sequence.anotherSurprise,
          duration: 3000
        })
      }, 2500)
    }
  },
  mounted () {}
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #ffffff;
}
</style>

<style scoped>
.container {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  width: 800px;
  margin: 0 auto;
  padding: 0 12px;
  color: #444444;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}

.header {
  margin-top: 40px;
}

.header h3 a, .header h3 a:visited {
  text-decoration: none;
  color: #388ae3;
}

.header h3 a:hover {
  color: #327CCE;
}

.header h3 a:active {
  color: #2871C1;
}

.header p {
  margin-top: 30px;
  line-height: 24px;
}

p code {
  background: #e0e0e0;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 4px;
  font-size: 12px;
}

.demo-wrapper {
  margin-top: 90px;
  width: 100%;
  text-align: center;
}

.demo-title {
  margin-top: 0;
}

.demo-button-group {
  display: inline-block;
  padding: 10px;
  border: 9px solid #f0f0f0;
  line-height: 44px;
}

.demo-button {
  margin: 0 5px;
  outline: none;
  border: none;
  padding: 10px 18px;
  background: #388ae3;
  color: #FFFFFF;
  border-radius: 2px;
}

.demo-button:hover {
  background-color: #327CCE;
}

.demo-button:active {
  color: #f0f0f0;
  background-color: #2871C1;
}

.readme {
  margin-top: 90px;
}

.readme pre {
  background: #f0f0f0;
  white-space: pre-wrap;
  padding: 12px;
}
</style>