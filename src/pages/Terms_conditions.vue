<template>
  <q-page padding>
    <q-btn color="orange" @click="goBack()">Go Back</q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'Term_conditions',
  methods: {
    goBack () {
      window.history.back()
    }
  }
}
</script>
