import Vue from 'vue'

new Vue({
    el: '#root',
    template: `
        <div>
            <p>Name: {{name}}</p>
            <p>Name: {{getName()}}</p>
            <p>Number: {{number}}</p>
            <p>fullName: {{fullName}}</p>
            <p><input trpe="text" v-model="number"></p>
            <p>firstName: <input trpe="text" v-model="firstName"></p>
            <p>lastName: <input trpe="text" v-model="lastName"></p>
            <p>obj.a: <input trpe="text" v-model="obj.a"></p>
        </div>
    `,
    data: {
        firstName: 'Jeremiah',
        lastName: 'Valeska',
        number: 0,
        fullName: '',
        obj: {
            a: 'a'
        }
    },
    computed: {
        name () {
            console.log('new name')
            return `${this.firstName} ${this.lastName}`
        }
    },
    watch: {    //不要改监听的属性（会无限循环）
        'obj.a': {
            handler (newName, oldName){
                this.fullName = newName + ' ' + this.lastName
            },
            immediate: true, //先触发一次
            deep: true
        }
    },
    methods: {
        getName () {
            console.log('getName invoked')
            return `${this.firstName} ${this.lastName}`
        }
    }
})