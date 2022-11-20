<template>
    <v-app-bar
      prominent
      shrink-on-scroll
      dark
      src="@/assets/splash.jpg"
      scroll-target="#site-content"
    >
    <!-- <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
      ></v-img>
    </template> -->
    <v-toolbar-title class="text-lg-h4 text-md-body-1 text-xs-caption font-weight-bold">Taniti Island</v-toolbar-title>
    <template v-slot:extension>
        <v-tabs centered>
            <v-btn to="/" v-if="!isHomeScreen" tile>
              home
            </v-btn>
            <v-btn to="/lodging" :color="isRouteActive('lodging')" tile>
                lodging
            </v-btn>
            <v-btn to="/transportation" :color="isRouteActive('transportation')" tile>
                transportation
            </v-btn>
            <v-btn to="/entertainment" :color="isRouteActive('entertainment')" tile>
                entertainment
            </v-btn>
            <v-btn to="/sightseeing" :color="isRouteActive('sightseeing')" tile>
                sightseeing
            </v-btn>
        </v-tabs>

    </template>


      <v-spacer></v-spacer>

      <v-btn
        fab
        small
        style="margin-left:4px"
        color="#1DA1F2"
      >
        <v-icon>{{mdiTwitter}}</v-icon>
      </v-btn>

      <v-btn
        fab
        small
        style="margin-left:4px"
        color="#4267B2"
        >
        <v-icon>{{mdiFacebook}}</v-icon>
      </v-btn>
      <v-btn
        fab
        small
        style="margin-left:4px"
        color="#cd486b"
        >
        <v-icon>{{mdiInstagram}}</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import { mdiTwitter,mdiFacebook,mdiInstagram } from '@mdi/js';
  export default {
    name: 'NavBar',
    computed: {
      height () {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return true
          case 'lg': return false
          case 'xl': return false
          default: return true
        }
      },
      isHomeScreen() {
        if (this.$route.path === '/'){
          return true
        } else {
          return false
        }
      }
    },
    methods: {
        isRouteActive: function (route) {
            if (route == this.$route.name) {
                return 'orange'
            }
            else {
                return ''
            }
        }
    },
    data: () => ({
    mdiTwitter:mdiTwitter,
    mdiFacebook:mdiFacebook,
    mdiInstagram:mdiInstagram
  }),
  }
</script>
