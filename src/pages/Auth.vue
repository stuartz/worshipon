<template><div class="flex flex-center">
    <q-parallax>
      <template v-slot:media>
        <img src="~assets/beach-1851101.jpg">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.55 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 10) + '%',
            left: 0,
            right: 0
          }"
        >
          <div class="auth">
            <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
          </div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>
<script>
export default {
  name: 'home',
  props: [],
  data () {
    return {
      authConfig: {
        usernameAttributes: 'User e-mail',
        signUpConfig: {
          header: 'Sign Up for WorshipOn!',
          hideAllDefaults: true,
          defaultCountryCode: '1',
          signUpFields: [
            {
              label: 'User E-mail',
              key: 'username',
              required: true,
              displayOrder: 1,
              type: 'string'
            },
            {
              label: 'Password',
              key: 'password',
              required: true,
              displayOrder: 2,
              type: 'password'
            },
            {
              label: 'Phone Number',
              key: 'phone_number',
              required: true,
              displayOrder: 3,
              type: 'string'
            }
          ]
        }
      }
    }
  }
}
</script>
<style>
 .Form__formSection___3tqxz {min-width: 100%;}
</style>
