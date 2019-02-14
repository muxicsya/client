let url = `http://localhost:3000`

var app = new Vue({
    el: '#app',
    data: {
        state: '',
        user: null,
        allMusic: []

    },
    methods: {
      pushMusic(data) {
        this.allMusic.unshift(data)
      }
    },
    created () {

    }
})