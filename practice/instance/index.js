import Vue from 'vue'

const app = new Vue({
    // el: '#root',
    template: '<div ref="div">{{text}} {{obj.a}}</div>',
    data: {
        text: 0,
        obj: {

        }
    }
    // watch: {
    //     text: (newText, oldText) => {
    //         console.log(`${newText}:${oldText}`)
    //     }
    // }
})

app.$mount('#root')

// let i = 0
setInterval(() => {
    // i++
    // app.text += 1

    // app.obj.a = i
    // app.$set(app.obj, 'a', i)
    // app.$forceUpdate()

    // app.$options.data += 1  //不生效
    // app.$data.text += 1 //生效
}, 1000)
//vue的实例
// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {  //不会立即生效，会在 text 的值下次发生变化时生效
//     return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText) => {
//     console.log(`${newText}:${oldText}`)
// })
// setTimeout(() => {
//     unWatch()
// }, 1000)
// app.$on('test', (a, b) => { //绑定事件 $once()只触发一次
//     console.log(`test emited ${a} ${b}`)
// })
// setInterval(() => {
//     app.$emit('test', 1, 2) //触发事件
// }, 1000)
// app.$forceUpdate()  //强制整个组件重新渲染
