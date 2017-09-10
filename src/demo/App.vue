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
        <li>{{($langKey === 'cn') ? '支持全局或单次选项配置' : 'Global and per call options'}}</li>
        <li>{{($langKey === 'cn') ? '连续调用自动排队，支持手动插入到队首' : 'Sequential calls are queued automatically, while it\'s possible to override the priority manually'}}</li>
        <li>{{($langKey === 'cn') ? '无 UI 库依赖，可通过 CSS 自定义主题（WIP）' : 'Zero styling dependency, theming (WIP) based on CSS'}}</li>
        <li>{{($langKey === 'cn') ? '已适配桌面和移动端' : 'Mobile & desktop ready'}}</li>
      </ul>

      <h3>{{($langKey === 'cn') ? '需要' : 'Requirement'}}</h3>
      <ul><li>Vue.js 2.x</li></ul>

      <h3>{{($langKey === 'cn') ? '浏览器兼容性' : 'Browser Compatibility'}}</h3>
      <ul>
        <li>{{($langKey === 'cn') ? '现代浏览器' : 'Evergreen browsers'}}</li>
        <li>IE >= 10</li>
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
      <h2>{{($langKey === 'cn') ? '文档' : 'Documentation'}}</h2>
        <h3>{{($langKey === 'cn') ? '选项' : 'Options'}}</h3>
        <p>{{($langKey === 'cn') ? '你可以在初始化 ZyDialog 或调用' : 'You can pass an object of options when initializing ZyDialog or when calling '}}<code>alert</code>, <code>confirm</code>{{($langKey === 'cn') ? ' 和 ' : ' and '}}<code>prompt</code>{{($langKey === 'cn') ? ' 时传入选项 Object。例如：' : '. For example:'}}</p>
        <pre><code class='language-javascript' lang='javascript'>{{($langKey === 'cn') ? '// 全局选项' : '// Global options'}}
import ZyDialog from 'vue-zydialog'
Vue.use(ZyDialog, {
  duration: 3000 {{($langKey === 'cn') ? '// 所有对话框都将在 3 秒时自动关闭' : '// This will make all dialogs auto close after 3 seconds'}}
})

{{($langKey === 'cn') ? '// 单次选项' : '// Per call options'}}
{{($langKey === 'cn') ? '// 当传入的参数为字符串时，它将自动成为「title」字段的值。你也可以按如下方式显式设置「title」和其他选项' : '// When calling with a string as the parameter, the string automatically goes to "title" field, or you can explicitly set the "title" and other options like this'}}
...
methods: {
  async sayHello () {
    await this.$alert({
      title: 'Hello world',
      duration: 3000
    })
  }
}
...</code></pre>
        <p>{{($langKey === 'cn') ? '可用选项：' : 'Available options are as follows:'}}</p>
        <table>
        <thead>
        <tr><th>{{($langKey === 'cn') ? '字段' : 'Field'}}</th><th>{{($langKey === 'cn') ? '类型' : 'Type'}}</th><th>{{($langKey === 'cn') ? '默认值' : 'Default'}}</th><th>{{($langKey === 'cn') ? '说明' : 'Notes'}}</th></tr></thead>
        <tbody>
          <tr><td>id</td><td>String</td><td>'vue-zydialog-default'</td><td>DOM id</td></tr>
          <tr><td>className</td><td>String</td><td>''</td><td>{{($langKey === 'cn') ? 'DOM 的附加 Class 名称' : 'additional DOM class name'}}</td></tr>
          <tr><td>maskColor</td><td>String</td><td>'rgba(40, 40, 40, 0.6)'</td><td>{{($langKey === 'cn') ? '遮罩层颜色' : 'color of the mask area'}}</td></tr>
          <tr><td>override</td><td>Boolean</td><td>false</td><td>{{($langKey === 'cn') ? '此对话框将被插入到队列之首并立即显式，同时清空队列里的其他对话框' : 'current dialog overrides the queue and will be shown instantly, this will also clear the queue'}}</td></tr>
          <tr><td>parent</td><td>String</td><td>'body'</td><td>{{($langKey === 'cn') ? '父级 DOM 节点，需要传入 querySelector 字符串' : 'parent DOM node, needs a querySelector compatible string'}}</td></tr>
          <tr><td>transition</td><td>String</td><td>'zy-dialog-transition'</td><td>{{($langKey === 'cn') ? '过渡动画 Class 名，关于 Vue.js 过渡动画详细信息请参考官方文档：' : 'transition class name, for defining your own transition please refer to: '}}<a href='https://vuejs.org/v2/guide/transitions.html' target="_blank">Vue.js Transitions Docs</a></td></tr>
          <tr><td>duration</td><td>Number</td><td>0</td><td>{{($langKey === 'cn') ? '自动关闭前延迟时间（毫秒），设置为 0 或其他假值来禁用自动关闭' : 'milliseconds before auto close, set to 0 or any falsy value to disable auto close'}}</td></tr>
          <tr><td>wide</td><td>Boolean</td><td>false</td><td>{{($langKey === 'cn') ? '显示较宽的对话框' : 'shows as a wide dialog'}}</td></tr>
          <tr><td>title</td><td>String</td><td>''</td><td>{{($langKey === 'cn') ? '对话框标题' : 'dialog title'}}</td></tr>
          <tr><td>message</td><td>String</td><td>''</td><td>{{($langKey === 'cn') ? '对话框消息' : 'dialog message'}}</td></tr>
          <tr><td>forceStay</td><td>Boolean</td><td>true</td><td>{{($langKey === 'cn') ? '设为 true 来阻止点击遮罩层时关闭对话框的行为' : 'set to true to prevent closing / canceling the dialog when mask area is clicked'}}</td></tr>
          <tr><td>lbHide</td><td>Bolean</td><td>false</td><td>{{($langKey === 'cn') ? '隐藏左按钮' : 'hide left button'}}</td></tr>
          <tr><td>rbHide</td><td>Boolean</td><td>false</td><td>{{($langKey === 'cn') ? '隐藏右按钮' : 'hide right button'}}</td></tr>
          <tr><td>lbLabel</td><td>String</td><td>'取消'</td><td>{{($langKey === 'cn') ? '设置左按钮标题' : 'left button label text'}}</td></tr>
          <tr><td>rbLabel</td><td>String</td><td>'确认'</td><td>{{($langKey === 'cn') ? '设置右按钮标题' : 'right button label text'}}</td></tr>
          <tr><td>actionAlt</td><td>Function/<code>null</code></td><td>null</td><td>{{($langKey === 'cn') ? '点击左按钮以及遮罩层时的回调方法' : 'callback function when left button and mask area is clicked'}}</td></tr>
          <tr><td>action</td><td>Function/<code>null</code></td><td>null</td><td>{{($langKey === 'cn') ? '点击右按钮时的回调方法' : 'callback function when right button is clicked'}}</td></tr>
        </tbody>
        </table>
        <h3>{{($langKey === 'cn') ? '主题' : 'Theme'}}</h3>
        <p>{{($langKey === 'cn') ? '文档正在完善中' : 'Docs WIP for theming the visual part'}}</p>
        <h2>{{($langKey === 'cn') ? '授权协议' : 'License'}}</h2>
        <p>MIT © <a href='https://github.com/mogita'>mogita</a></p>
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

.readme pre, .more pre {
  background: #f0f0f0;
  white-space: pre-wrap;
  padding: 12px;
}

.more table {
  border-collapse: collapse;
}

.more table td, .more table th {
  border: 1px solid #cccccc;
  padding: 0.5rem;
  text-align: left;
}

.more table tbody tr:nth-child(odd) {
  background: #eeeeee;
}
</style>