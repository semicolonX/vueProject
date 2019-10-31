import Vue from 'vue'

const component = {
    // template: `
    //     <div :style="style">
    //         <slot></slot>
    //     </div>
    // `,
    props: ['props1'],
    render (createElement) {
        return createElement('div', {
            style: this.style,
            // on: {
            //     click: () => {this.$emit('click')}
            // }
        }, [
            this.$slots.header,
            this.props1
        ])
    },
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
    data: {
        value: '123'
    },
    methods: {
        handleClick () {
            console.log('clicked')
        }
    },
    // template: `
    //     <div>
    //         <comp ref="comp">
    //             <span ref="span">{{value}}</span>
    //         </comp>
    //     </div>
    // `,
    render (createElement) {
        return createElement(
            'comp', 
            {
                ref: 'comp',
                props: {
                    props1: this.value
                },
                // on: {
                //     click: this.handleClick
                // },
                nativeOn: {
                    click: this.handleClick
                }
            },
            [
                createElement(
                    'span', 
                    {
                        ref:'span',
                        slot: 'header',
                        // domProps: {
                        //     innerHTML: '<span>456</span>'
                        // }
                        attrs: {
                            id: 'test-id'
                        }
                    },
                    this.value
                )
            ]
        )
    }
})