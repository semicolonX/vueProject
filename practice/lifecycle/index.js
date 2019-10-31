import Vue from 'vue'

const app = new Vue({
    // el: '#root',
    // template: '<div>{{text}}</div>',
    data: {
        text: 0
    },
    beforeCreate () {   //创建
        console.log(this.$el, 'beforeCreate')
    },
    created () {
        console.log(this.$el, 'created')
    },
    beforeMount () {    //挂载
        console.log(this.$el, 'beforeMount')
    },
    mounted () {
        console.log(this.$el, 'mounted')
    },
    beforeUpdate () {   //更新
        console.log(this, 'beforeUpdate')
    },
    updated () {
        console.log(this, 'updated')
    },
    activated () {  //在组件章节讲解
        console.log(this, 'activated')
    },
    deactivated () {  //在组件章节讲解
        console.log(this, 'deactivated')
    },
    beforeDestroy () {  //销毁
        console.log(this, 'beforeDestroy')
    },
    destroyed () {
        console.log(this, 'destroyed')
    },
    render (h) {
        // throw new TypeError('render err')
        console.log('render function invoked')
        return h('div', {}, this.text)
    },
    renderError (h, err) {
        return h('div', {}, err.stack)
    },
    errorCaptured () {
        //会向上冒泡，并且正式环境可以使用
    }
})

app.$mount('#root')
// setInterval(() => {
//     app.text += 1
// }, 1000)

setTimeout(() => {
    app.$destroy()
}, 1000)

