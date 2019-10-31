import Vue from 'vue'

const ChildComponent = {
    template: `<div>child component: {{data.value}}</div>`,
    inject: ['yeye','data'],   //跨层级通信
    mounted () {
        console.log(this.$parent.$options.name)
        console.log(this.yeye, this.data)
    }
}

const component = {
    name: 'comp',
    components: {
        ChildComponent
    },
    // template: `
    //     <div :style="style">
    //         <div class="header">
    //             <slot name="header"></slot>
    //         </div>
    //         <div class="foot">
    //         <slot name="foot"></slot>
    //         </div>
    //     </div>
    // `,
    template: `
        <div :style="style">
            <div class="header">
                <slot :value="value" aaa="bbb"></slot>
            </div>
            <child-component></child-component>
        </div>
    `,
    data () {
        return {
            style: {
                width: "200px",
                height: "200px",
                border: '1px solid black'
            },
            value: "component value"
        }
    }
}


new Vue({
    el: '#root',
    components: {
        Comp: component
    },
    provide () {    //跨层级通信
        const data = {}

        Object.defineProperty(data, 'value', {
            get: () => this.value,
            enumerable: true
        })

        return {
            yeye: this,
            data
        }
    },
    data: {
        value: '123'
    },
    mounted () {
        console.log(this.$refs.comp.value, this.$refs.span)
    },
    template: `
        <div>
            <comp ref="comp">
                <span ref="span" slot-scope="props">{{props.value}} {{props.aaa}} {{value}}</span>
            </comp>
            <input type="text" v-model="value">
        </div>
    `
})