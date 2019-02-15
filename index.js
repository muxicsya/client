let url = `http://localhost:3000`

var app = new Vue({
  el: '#app',
  data: {
    state: '',
    user: null,
    show: "",
    allMusic: [],
    currentMusic: {},
    currentLyric: '',
    searchResult: [],
    song: {},

  },
  methods: {
    addUser(user){
      console.log(user, '------------')
      this.user = user
      this.state = ''
    },
    changeState(state){
      this.state = state
    },
    search(title){
      this.searchResult = this.allMusic.filter(song => song.title == title)
      console.log(this.searchResult)
    },
    pushMusic(data) {
      this.allMusic.unshift(data)
      this.currentMusic = data
      this.state = 'lyric'
      this.getLyric()
    },
    showForm(){
      this.showForm = true
    },
    getLyric() {
      axios({
        method: "POST",
        url: `${url}/lyric/`,
        headers: {
           token: localStorage.getItem('token') 
        },
        data: {
          artist: this.currentMusic.artist,
          title: this.currentMusic.title
        }
      })
        .then(({ data }) => {
          this.currentLyric = data.lyric
        })
        .catch((err) => {
          if (err.response.status == 404) {
            alertify.error('Sorry lyrics not found')
          }
          console.log(err.response);
        });
    },
    displayLyric (song) {
      this.currentLyric = ''
      this.currentMusic = song

      setTimeout( () => {
        this.getLyric()
      }, 500)

      this.state = 'lyric'
    },
    getAllSong () {
      axios({
        method: 'get',
        url: `${url}/musics`
      })
      .then( ({ data }) => {
        this.allMusic = data
      })
      .catch(err => {
        console.error(err.response)
      })
    },
    logout () {
      this.user= null
      localStorage.removeItem('token')
    },
    getUser () {
      axios({
        method: 'get',
        url: `${url}/users`,
        headers: {
          token: localStorage.token
        }
      })
      .then( ({ data }) => {
        console.log(data, '-----')
        this.user = data
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  },
  created() {
    this.getAllSong()
    if (localStorage.token) {
      this.getUser()
    } else {

    }
  }
})