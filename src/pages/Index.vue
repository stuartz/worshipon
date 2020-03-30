
<template><q-page class="flex flex-center">
    <q-parallax>
      <template v-slot:media>
        <img src="~assets/beach-1851101.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <div class="text-h1 text-blue text-center">WorshipOn!</div>
          <div class="text-h3 text-blue text-center">A worship experience coming soon!</div>
          <div class="text-h6 text-grey-3 text-center">
            v{{ $q.version }}
          </div>
        </div>
      </template>
    </q-parallax>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex'
}
</script>
