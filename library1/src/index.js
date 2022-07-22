import Vue from 'vue'
import App from './App.vue'

export function start(root = '#app', name = 'Jenny') {
  console.log('[LIBRARY1] Instantiating application', name)
  const app = new Vue({ render: h => h(App, { props: { name } }) }).$mount(root)
  console.log('[LIBRARY1] app =', app)

  return app
}
