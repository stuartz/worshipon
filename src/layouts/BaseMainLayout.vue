<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          WorshipON!
        </q-toolbar-title>

        <!--div>Quasar v{{ $q.version }}</div-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <div v-if="isLoggedIn">
          <q-item clickable :to="{name: 'todo'}">
            <q-item-section avatar>
              <q-icon name="note"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Todo App</q-item-label>
              <q-item-label caption>create a todo list..</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div v-if="isLoggedIn">
          <q-item clickable :to="{name: 'profile'}">
            <q-item-section avatar>
              <q-icon name="settings"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Preferences</q-item-label>
              <q-item-label caption>View and update your preferences</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div>
          <q-item clickable :to="{name: 'privacy'}">
            <q-item-section avatar>
              <q-icon name="profile"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Privacy Policy</q-item-label>
              <q-item-label caption>View privacy policy</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div>
          <q-item clickable :to="{name: 'terms_conditions'}">
            <q-item-section avatar>
              <q-icon name="profile"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Terms &amp; Conditions</q-item-label>
              <q-item-label caption>View Terms &amp; Conditions</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div>
          <q-item clickable :to="{name: 'dcma'}">
            <q-item-section avatar>
              <q-icon name="profile"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>DCMA Policy</q-item-label>
              <q-item-label caption>View content uploads policy</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div v-if="isLoggedIn">
          <q-item clickable @click="signOut">
            <q-item-section avatar>
              <q-icon name="stop"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div v-if="!isLoggedIn">
          <q-item clickable :to="{name: 'auth'}">
            <q-item-section avatar>
              <q-icon name="group"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Login/SignUp</q-item-label>
              <q-item-label caption>Login or Signup</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
  html, body {
    height: 100%;
  }
  .q-page-container {
    background: url("~assets/beach-1851101.jpg");
    background-size: cover;
    flex: 1;
  }
  .q-layout, body{
    display: flex;
  }
  .q-app {
    flex:1;
  }
</style>
<script>
import { openURL } from 'quasar'
import EssentialLink from 'components/EssentialLink'
import gql from 'graphql-tag'
import { getProfile } from '../graphql/queries'
// import { createProfile, updateProfile } from '../graphql/mutations'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      user: '',
      signedIn: 'false',
      hasProfile: 'false',
      profile: '',
      error: null,
      leftDrawerOpen: this.$q.platform.is.desktop,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/stuartz/worshipon',
          icon: 'code',
          link: 'https://github.com/stuartz/worshipon'
        },
        {
          title: 'Vue.js',
          caption: 'Vue.js',
          icon: 'school',
          link: 'https://vuejs.org/'
        }
      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.signedIn
    },
    hasaProfile () {
      return this.hasProfile
    }
  },
  mounted () {
    this.$AmplifyEventBus.$on('authState', info => {
      this.signedIn = true
      this.checkProfile()
    })
  },
  beforeCreate () {
    this.$Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
        this.signedIn = true
        this.checkProfile()
      })
      .catch(() => {
        this.signedIn = false
      })
  },
  methods: {
    openURL,
    async signOut () {
      await this.$Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err))
      this.signedIn = false
      parent.signedIn = false
      this.$router.push({ name: 'auth' })
    },
    checkProfile () {
      if (this.profile && this.profile.termsConditions) {
        this.hasProfile = true
      }
      if (this.signedIn && !this.hasProfile) {
        alert('Create a profile for increased listening pleasure')
      }
    }
  },
  apollo: {
    profile: {
      query: gql(getProfile),
      update: data => data.profile,
      error (error) {
        this.error = JSON.stringify(error.message)
      }
    }
  }
}
</script>
