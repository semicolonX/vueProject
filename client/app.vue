<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}} {{textA}} {{textPlus}}</p>
    <router-link to="/app">toApp</router-link>
    <router-link to="/app/123">toApp传值</router-link>
    <!-- <router-link to="/app/test">toTest子路由</router-link> -->
    <router-link to="/login">toLogin</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

export default {
  data () {
    return {
      text: '123'
    }
  },
  components: {
    Header,
    Footer
    // Todo
  },
  mounted () {
    // console.log(this.$route)
    console.log(this.$store)
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    this.add()
    this.textActions()
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    //   this.updateCount(i++)
    // }, 1000)
    this.updateText('123')
  },
  methods: {
    ...mapActions(['updateCountAsync', 'add', 'textActions']),
    ...mapMutations(['updateCount', 'updateText'])
  },
  computed: {
    // taxtA () {
    //   return this.$store.state.b.text
    // },
    // ...mapState(['count']),
    ...mapState({
      // counter: 'count'
      counter: (state) => state.count,
      textA: (state) => state.a.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapGetters(['fullName', 'textPlus'])
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'textPlus'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang='stylus' scoped='scoped'>
#app{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
#cover{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #999;
    opacity: .9;
    z-index: -1;
}
</style>
