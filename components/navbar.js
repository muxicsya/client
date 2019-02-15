Vue.component('navbar', {
  data() {
    return {
      title: ""
    }
  },
  props: ['user'],
  methods: {
    logout(){
      this.$emit('logout')
    },
    emitTitle(){
      this.$emit('search-title', this.title)
    }
  },
  template: (`
  <nav class="navbar navbar-dark text-dark border-bottom shadow" id="navbar">

    <a href="#" class="navbar-brand ml-2 border-right pr-4" style="color: black">
      <h2 class="font-weight-bold" @click.prevent="$emit('all-song')"> Muxicsya</h2>
    </a>

    <div class="row "> 
   
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="title">
        <button class="btn my-2 my-sm-0" type="submit" @click.prevent="emitTitle"><i class="fas fa-search"></i></button>
      </form>

      <div class="nav-item">
        <button class="h5 btn btn-dark mt-2" @click.prevent="$emit('upload')">+Upload</button>
      </div>


      <div class="nav-item">
        <button style="background-color: #efefef" class="h5 btn btn-light mt-2" v-if="!user" @click.prevent="$emit('change-state')">Sign In</button>
      </div>

      <div class="nav-item">
        <button @click.prevent="logout" class="h5 btn btn-light mt-2" v-if="user">logout</button>
      </div>
    </div>

  </nav>
  `)
})