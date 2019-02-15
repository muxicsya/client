Vue.component('song-card', {
    props: ['song'], 
    methods: {
        detail (song) {
            this.$emit('current-song', song)
        }
    },
    template: `
    <div class="card mt-3" style="width: 18rem; border-radius: 10%" @click.prevent="detail(song)">
        <div class="card-body">
            <h5 class="card-title text-center" style="color: black; cursor: pointer;"> {{ song.title }} </h5>
            <img class="image card-img" :src="song.img_url" :alt="song.img_url">
            <!-- SHARE FACEBOOK -->
            <button class="btn btn-secondary mt-2 float-right" style="background-color: #efefef; border-radius: 100%"><a href="http://www.facebook.com/sharer.php?u=song.url"><i class="fab fa-facebook-f"></i></a></button>
        </div>
    </div>
    `
})