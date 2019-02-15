Vue.component('get-lyric', {

  props: ['currentMusic', 'currentLyric'],
  methods: {

  },
  template:
  `<div class="lyrics-main-box d-flex mt-3 border-left border-right flex-column w-60 justify-content-center"
        style="border: 1px black">
    <div class="lyrics-header p-2">
      <h1 style="text-align: center" class="mb-3">{{ currentMusic.title }}</h1>
      <h3>{{currentMusic.artist}}</h3>
    </div>
    <div class="get-lyrics">
      <div class="lyrics-content">
        <h6 v-html="currentLyric" class="p-5">
        </h6>
      </div>
    </div>
  </div>
  `
});