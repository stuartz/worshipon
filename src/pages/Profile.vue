<template>
  <div v-if="this.hasProfile">
    <h1>Welcome, {{JSON.stringify(user)}}</h1>
  </div>
  <div v-else>
    <h2 class="text-center" style="background-color: white;">Please accept the
      <a href="/#/terms_conditions" alt="Link to Terms and Conditions">terms and conditions</a>
       to use prefrences.</h2>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  components: {
  },
  data () {
    return {
      user: '',
      signedIn: false
    }
  },
  beforeCreate () {
    this.$Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
        this.signedIn = true
      })
      .catch(() => console.log('not signed in...'))
  }
}
</script>
<style>
</style>
