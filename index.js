var app = new Vue({
  el: '#app',
  data: {
    state: '',
    user: null,
    show: ""
  },
  methods: {
    addState(user){
      this.state = user
    }
  },
  created() {

  }
})