<template>
  <v-app>
    <NavBar/>
    <v-sheet
      id="site-content"
      style="overflow-y: scroll"
      max-height="1200"
      dark>
        <router-view/>
    </v-sheet>
    <v-footer
    dark
    padless
    absolute
    style="margin-bottom: 20px"
    >
    <v-card
      class="flex"
      flat
      tile
    >
      
      <v-card-title>
        <strong class="subheading">Need More Information? Email us at:  <span class="text-small font-italic text-decoration-underline">tourism@taniti.gov</span></strong>
        <v-spacer></v-spacer>
        <v-btn outlined color="orange">
          Book Travel!
        </v-btn>
        <v-spacer></v-spacer>
        <strong class="subheading">Get connected with us on social networks:   </strong>
        <!-- <v-spacer></v-spacer> -->

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-1"
          dark
          icon
        >
          <v-icon size="20px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
  </v-app>
</template>

<style>

  html {
    overflow-y: hidden;
  }

</style>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  methods: {
    isRouteActive: function(route) {
      if (route === this.$route.name) {
        return 'orange'
      }
      else {
        return ''
      }
    }
  },
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
  }),

  components: {
    NavBar
  }
};
</script>
