import Vue from 'vue'

new Vue({
    el: '#root',
    template: `
        <div>
            <div v-if="active" v-text="text">text:{{text}}</div>
            <div v-else-if="text === 0">Else If Content</div>
            <div v-else>text:{{text}}</div>
            <div v-html="html">html:{{html}}</div>
            <input type="text" v-model.number="text">
            <input type="checkbox" v-model="active">
            <div>
                <input type="checkbox" :value="1" v-model="arr">
                <input type="checkbox" :value="2" v-model="arr">
                <input type="checkbox" :value="3" v-model="arr">
            </div>
            <div>
                <input type="radio" value="one" v-model="picked">
                <input type="radio" value="two" v-model="picked">
            </div>
            <ul>
                <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
            </ul>
            <ul>
                <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
            </ul>
        </div>
    `,
    data: {
        arr: [1, 2, 3],
        obj: {
            a: '123',
            b: '456',
            c: '789'
        },
        picked: '',
        text: 0,
        active: false,
        html: '<span>this is html</span>'
    }
})