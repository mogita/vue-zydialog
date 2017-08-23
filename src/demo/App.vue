<template>
  <div class="container">
    <section class="header">
      <h3><a href="https://github.com/mogita/vue-zydialog">Vue ZyDialog</a></h3>
      <p v-if="$langKey === 'cn'">Vue.js 对话框组件，支持可自由配置的 <code>alert</code>, <code>confirm</code> and <code>prompt</code> 型弹出框。</p>
      <p v-else>A dialog component that provides customizable <code>alert</code>, <code>confirm</code> and <code>prompt</code> for your Vue.js apps.</p>
    </section>

    <demo />

    <section class="readme">
      <h3>{{($langKey === 'cn') ? '功能' : 'Features'}}</h3>
      <ul class="features">
        <li>{{($langKey === 'cn') ? '基于 Promise 提供友好的编程接口' : 'Promise based, friendly programming interface'}}</li>
        <li>{{($langKey === 'cn') ? '支持全局或本地配置' : 'Global and per call config'}}</li>
        <li>{{($langKey === 'cn') ? '连续调用自动排队，支持手动插入到队首' : 'Sequential calls are queued automatically, while it\'s possible to override the priority manually'}}</li>
        <li>{{($langKey === 'cn') ? '无 UI 库依赖，可通过 CSS 自定义主题（WIP）' : 'Zero styling dependency, theming (WIP) based on CSS'}}</li>
        <li>{{($langKey === 'cn') ? '已适配桌面和移动端' : 'Mobile & desktop ready'}}</li>
      </ul>

      <h3>{{($langKey === 'cn') ? '需要' : 'Requirement'}}</h3>
      <ul><li>Vue.js 2.x</li></ul>

      <h3>{{($langKey === 'cn') ? '浏览器兼容性' : 'Browser Compatibility'}}</h3>
      <ul>
        <li>{{($langKey === 'cn') ? '现代浏览器' : 'Evergreen browsers'}}</li>
        <li>IE >= 9</li>
      </ul>
      <h3>{{($langKey === 'cn') ? '安装' : 'Installation'}}</h3>
      {{($langKey === 'cn') ? '使用 Yarn' : 'With Yarn'}}
      <pre><code>yarn add vue-zydialog</code></pre>
      {{($langKey === 'cn') ? '或使用 NPM' : 'Or with NPM'}}
      <pre><code>npm install vue-zydialog --save</code></pre>

      <h3>{{($langKey === 'cn') ? '开始使用' : 'Get Started'}}</h3>
      <p>{{($langKey === 'cn') ? '将 ZyDialog 导入到' : 'Import ZyDialog in your'}} <code>main.js</code>{{($langKey === 'cn') ? '文件' : 'file'}}</p>
      <pre><code>import ZyDialog from 'vue-zydialog'
Vue.use(ZyDialog)</code></pre>
      <p>{{($langKey === 'cn') ? '在 Vue.js 组件里调用' : 'Use it in your Vue.js component'}}</p>
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
    <p>{{($langKey === 'cn') ? '如果你更喜欢' : 'If you prefer the'}} <code>async/await</code> {{($langKey === 'cn') ? '的方式，你可以这样使用' : 'flavour, you can do this'}}</p>
    <pre><code>...
methods: {
  async sayHello () {
    await this.$alert('Hello world')
    this.$alert('World confirmed')
  }
}
...

...
methods: {
  async toConfirm () {
    if (await this.$confirm('Are you sure?')){
      // continue to process
    } else {
      // abort processing
    }
  }
}
...</code></pre>
    </section>

    <section class="more">
      <h3>{{($langKey === 'cn') ? '文档正在完善中...' : 'Readme WIP, more coming soon...'}}</h3>
    </section>
  </div>
</template>

<script>
import demo from './demo.vue'

export default {
  props: [],
  components: { demo },
  computed: {},
  watch: {},
  data () {
    return {}
  },
  methods: {},
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

p code, .features code {
  background: #e0e0e0;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 4px;
  font-size: 12px;
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