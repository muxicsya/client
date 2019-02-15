Vue.component('login', {
  data(){
    return{
      email: "",
      password: "",
      error: ""
    }
  },
  methods: {
    register(){
      var body = {
        email: this.email,
        password: this.password
      }

      axios
        .post(`http://localhost:3000/register`, body)
        .then(response => {
          console.log(response.data)
          this.$emit('change-state', response.data.data)
          localStorage.setItem('token', response.data.token )
        })
        .catch(err => {
          console.log(err.response)
          this.error = err.response.data.msg
        })
    },
    signin(){
      var body = {
        email: this.email,
        password: this.password
      }

      axios
        .post(`http://localhost:3000/login`, body)
        .then(response => {
          console.log(response.data)
          this.$emit('change-state', response.data.data)
          localStorage.setItem('token', response.data.token )
        })
        .catch(err => {
          this.error = err.response.data.msg
        })
    }
  },
  template: `
  <form>
    <h1 style="color: red;">{{error}}</h1>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
            else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="register">Register</button>
    <button type="submit" class="btn btn-primary" @click.prevent="signin">Sign In</button>
  </form>
  `
})