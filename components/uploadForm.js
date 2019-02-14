Vue.component('upload-form', {
  data() {
    return {
      title: '',
      artist: '',
      image: '',
      imageUrl: ''

    }
  },
  methods: {
    handleFileUpload() {
      this.image = this.$refs.file.files[0];
      console.log(this.image)
      this.imageUrl = URL.createObjectURL(this.$refs.file.files[0]);
    },

    upload() {
      let data = new FormData()
      data.append('image', this.image)
      data.append('title', this.title)
      data.append('artist', this.artist)
      axios({
        method: 'POST',
        url: `${url}/musics`,
        data,
        headers: {
          token: localStorage.token,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(({ data }) => {
        this.$emit('create-music', data)
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  },
  template: `
  <form @submit.prevent="upload">
    <div class="form-group">
      <label for="exampleInputEmail1">Title</label>
      <input v-model="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Put song title here">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Artist</label>
      <input v-model="artist" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Put artist name here">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" @change="handleFileUpload" class="mt-3" id="file" ref="file"></input>
    </div>
    <div>
      <img :src="imageUrl">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `
})