<template>
  <section class="demo-wrapper">
    <div class="demo-button-group">
      <h4 class="demo-title">
        {{theLang.titles.demo}}
      </h4>
      <button class="demo-button" @click="alert">{{theLang.titles.alert}}</button>
      <button class="demo-button" @click="confirm">{{theLang.titles.confirm}}</button>
      <button class="demo-button" @click="prompt">{{theLang.titles.prompt}}</button>
      <button class="demo-button" @click="sequence">{{theLang.titles.sequence}}</button>
    </div>
  </section>
</template>

<script>
const langTable = {
  cn: {
    titles: {
      demo: '演示',
      alert: 'Alert',
      confirm: 'Confirm',
      prompt: 'Prompt',
      sequence: '弹框序列示例'
    },
    alert: {
      helloWorld: '你好，世界',
      worldConfirmed: '世界已确认',
      timeUsed: '耗时',
      seconds: '秒'
    },
    confirm: {
      prettyWorld: '这是一个美丽的世界？',
      yes: '是的',
      no: '不是'
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
      surprise: '惊喜！',
      anotherSurprise: '又一个惊喜！\n延迟 3 秒后自行关闭'
    }
  },
  en: {
    titles: {
      demo: 'Demo',
      alert: 'Alert',
      confirm: 'Confirm',
      prompt: 'Prompt',
      sequence: 'Sequence DEMO'
    },
    alert: {
      helloWorld: 'Hello world',
      worldConfirmed: 'World confirmed',
      timeUsed: 'Time elapsed:',
      seconds: 'seconds'
    },
    confirm: {
      prettyWorld: 'Is this a beautiful world?',
      yes: 'Thought so',
      no: 'Nope'
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
      surprise: 'Surprise!',
      anotherSurprise: 'Another surprise!\nWill auto close this dialog in 3 seconds'
    }
  }
}

export default {
  props: [],
  components: {},
  computed: {},
  watch: {},
  data () {
    return {
      theLang: langTable[this.$langKey]
    }
  },
  methods: {
    async alert () {
      let now = new Date().getTime()
      await this.$alert(this.theLang.alert.helloWorld)
      let time = ((new Date().getTime() - now) / 1000).toFixed(2)
      this.$alert({
        title: this.theLang.alert.worldConfirmed,
        message: `${this.theLang.alert.timeUsed} ${time} ${this.theLang.alert.seconds}`
      })
    },
    async confirm () {
      if (await this.$confirm(this.theLang.confirm.prettyWorld)) {
        this.$alert(this.theLang.confirm.yes)
      } else {
        this.$alert(this.theLang.confirm.no)
      }
    },
    prompt () {
      this.$prompt({
        title: this.theLang.prompt.sourceOfWorld,
        message: this.theLang.prompt.pleaseFillInTheBox
      })
      .then(input => {
        this.$alert(`${this.theLang.prompt.theSourceIs}${input}${this.theLang.prompt.theTypeIs} ${typeof input}`)
      })
    },
    sequence () {
      this.$confirm({
        title: this.theLang.sequence.sequenceDemo,
        message: this.theLang.sequence.selfRunWorld
      })
      .then(() => {
        this.$alert(this.theLang.sequence.syncRate9)
      })
      .catch(() => {
        this.$alert(this.theLang.sequence.syncRate0)
      })

      setTimeout(() => {
        this.$alert({
          title: this.theLang.sequence.surprise,
          override: true
        })
      }, 1500)

      setTimeout(() => {
        this.$alert({
          title: this.theLang.sequence.anotherSurprise,
          duration: 3000
        })
      }, 2500)
    }
  },
  mounted () {}
}
</script>

<style scoped>
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
</style>
