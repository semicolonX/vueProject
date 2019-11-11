import VueX from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

// const store = new VueX.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     updateCount (state, num) {
//       state.count = num
//     }
//   }
// })
const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new VueX.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        // namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) {
            console.log('rootState.count', rootState.count)
            console.log('rootState.b.text', rootState.b.text)
            return state.text + 1
          }
        },
        actions: {
          add ({ state, commit, rootState }) {
            // commit('updateText', rootState.count)
            commit('updateCount', '56789', { root: true })
          }
        }
      },
      b: {
        state: {
          text: 2
        },
        actions: {
          textActions ({ commit }) {
            commit('updateText', 'text text', { root: true })
          }
        }
      }
    }
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newgetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newgetters,
        actions: newActions
      })
    })
  }
  return store
}
