import Vue from 'vue'

const components = {
    props: {
        active: Boolean,
        propOne: String
    },
    template: `
        <div>
            <input type="text" v-model="text">
            <span @click="handleChange">{{propOne}}</span>
            <span v-show="active">show me if active is false</span>
        </div>
    `,
    data () {
        return {
            text: 0
        }
    },
    mounted () {
        console.log(this.$parent.$options.name)
    },
    methods: {
        handleChange () {
            this.$emit('change')
        }
    }
}

const parent = new Vue({
    names: 'parent'
})

const components2 = {
    extends: components,
    data () {
        return {
            text: 1
        }
    }
}

// const CompVue = Vue.extend(components)

// new CompVue({
//     el: '#root',
//     propsData: {
//         propOne: 'xxx'
//     },
//     data: {
//         text: '123'
//     },
//     mounted () {
//         console.log('instance mounted')
//     }
// })

new Vue({
    parent: parent,
    name: 'Root',
    el: '#root',
    mounted () {
        console.log(this.$parent.$options.name)
    },
    components: {
        Comp: components2
    },
    template: '<comp></comp>'
})