import Vue from 'vue'

const component = {
    model: {
        prop: 'value1',
        event: 'change'
    },
    props: ['value','value1'],
    template: `
        <div>
            <input type="text" @input="handleInput" :value="value1">
        </div>
    `,
    methods: {
        handleInput (e) {
            this.$emit('change', e.target.value)
        }
    }
}


new Vue({
    name: 'Root',
    el: '#root',
    data: {
        value: '123'
    },
    components: {
        Comp: component
    },
    template: '<comp v-model="value"></comp>'
    // template: '<comp :value="value" @input="value = arguments[0]"></comp>'
})