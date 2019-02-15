let url = `http://localhost:3000`

var app = new Vue({
  el: '#app',
  data: {
    state: '',
    user: null,
    show: "",
    allMusic: [],
    currentMusic: '',
    currentLyric: '',
    searchResult: [],
    song: {},
  },
  methods: {
    addUser(user){
      this.user = user
    },
    changeState(state){
      this.state = state
    },
    search(title){
      this.searchResult = this.allMusic.filter(song => song.title = title)
      console.log(this.searchResult)
    },
    pushMusic(data) {
      this.allMusic.unshift(data)
    },
    showForm(){
      this.showForm = true
    },
    getLyric(artist, title) {
      axios({
        method: "POST",
        url: `${url}/lyric/`,
        headers: {
           token: localStorage.getItem('token') 
        },
        data: {
          artist: artist,
          title: title
        }
      })
        .then(({ data }) => {
          this.currentLyric = data.lyric;
          // console.log(this.currentLyric);
        })
        .catch((err) => {
          if (err.response.status == 404) {
            alertify.error('Sorry lyrics not found')
          }
          console.log(err.response);
        });
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
    }
  },
  created() {
    this.getAllSong()
  }
})