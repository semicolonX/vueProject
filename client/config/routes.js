// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
// import router from './router'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app',
    path: '/app/:id', //      /app/xxx
    props: true,
    // props: {
    //   id: '456789'
    // },
    // props: (route) => ({ id: route.query.b }),
    // component: Todo,
    component: () => import('../views/todo/todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasdasd'
    },
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    // component: Login
    component: () => import('../views/login/login.vue')
    // components: {
    //   default: Login,
    //   a: Todo
    // }
  }
]
