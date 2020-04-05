<template>
  <div class="flex flex-center">
    <div class="auth q-pa-md">
      <div>
        <h2 class="text-center text-black">By signing in, you are agreeing with the following policies of WorshipON!</h2>
        <h4 class="text-center">
          <q-btn color="amber" clickable :to="{name: 'privacy'}">Privacy</q-btn>&nbsp;
          <q-btn color="amber" clickable :to="{name: 'terms_conditions'}">Terms & Conditions</q-btn>
        </h4>
      </div>
      <div id="auth-form">
        <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #auth-form {
    max-width: 520px;
    background: whitesmoke;
    border-radius: 9px;
    margin:auto;
  }
  .policies {
    background: whitesmoke;
    border-radius: 15px;
  }
  .auth  {
    margin: 20px auto;
  }
  @media (max-width:740px){
    h2 {font-size: 1.5rem;}
    h4 {font-size: 1rem;}
  }
</style>
<script>
export default {
  name: 'auth',
  props: [],
  data () {
    return {
      authConfig: {
        usernameAttributes: 'User e-mail',
        signUpConfig: {
          header: 'Sign Up for WorshipON!',
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
