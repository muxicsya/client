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
    searchResult: []
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
      this.currentMusic = this.allMusic[0]
      this.getLyric(this.currentMusic.artist, this.currentMusic.title)
    },
    showForm(){
      this.showForm = true
    },
    getLyric(artist, title) {
      console.log(artist, title)
      axios({
        method: "POST",
        url: `${url}/lyric/`,
        headers: { token: localStorage.getItem('token') },
        data: {
          artist: artist,
          title: title
        }
      })
        .then(({ data }) => {
          this.currentLyric = data.lyric;
          console.log(this.currentLyric);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  },
  created() {

  }
})