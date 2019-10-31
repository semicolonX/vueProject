import Vue from 'vue'

const components = {
    props: {
        active: {
            type: Boolean,
            required: true,  //属性一定要传
            default: false, //默认值
            validator (value) { //验证
                return typeof value === 'boolean'
            }
        },
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
    methods: {
        handleChange () {
            this.$emit('change')
        }
    }
}

// Vue.component('compOne', components)

new Vue({
    components: {
        compOne: components
    },
    el: '#root',
    template: `
        <div>
            <comp-one :active="active" :prop-one="propOne" @change="handleChange"></comp-one>
            <comp-one :active="!active" propOne="text2"></comp-one>
        </div>
    `,
    data: {
        active: true,
        propOne: 'text1'
    },
    methods: {
        handleChange () {
            this.propOne +=1
        }
    }
})