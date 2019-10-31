import Vue from 'vue'

new Vue({
    el: '#root',
    // template: `
    //     <div :id="aaa" @click="handleClick">
    //         {{isActive ? 'active' : 'not active'}}
    //         {{arr.join(" ")}}
    //         <p v-html="html"></p>
    //     </div>
    // `,
    template: `
        <div 
            :class="[{ active: !isActive }, aaa]"
            :style="[styles, styles2]"
        >
            <p>{{getJoinArr(arr)}}</p>
        </div>
    `,
    data: {
        isActive: false,
        aaa: 'main',
        arr: [1, 1, 2, 3, 5],
        html: '<span>this is span</span>',
        styles: {
            color: 'red',
            appearance: 'none'
        },
        styles2: {
            color: 'black'
        }
    },
    methods: {
        handleClick () {
            console.log('clicked')
        },
        getJoinArr (arr) {
            return arr.join(' ')
        }
    }
})
// const app = new Vue({
//     render (h) {
//         return h('div', {}, this.text)
//     },
//     data: {
//         text: 'this is data-binding'
//     }
// })

// app.$mount('#root')