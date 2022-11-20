<template>
<div style="height: 800px; overflow-y: auto">
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="font-weight-medium font-italic" style="margin-top: 10px; text-align: center">
          Enjoy the Beauty of Taniti...
        </div>
      </v-col>
    </v-row>
      <v-row>      
      <v-col cols="6">
        <v-carousel 
        v-model="homeCarousel"
        hide-delimiters
        cycle>
          <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
          >
            <v-img
              :src="image"
            >
            </v-img>

          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="6">
        <v-container fill-height>
          <div style="text-align: center; justify-content:center;" v-if="homeCarousel==0">
            <p class="font-weight-medium font-italic">Your Ultimate Sightseeing Adventure!</p>
            <p class="font-weight-medium">Explore the historic Taniti City which boasts native architecture. After you're done exporing the city, relax at the nearby white sand beaches surrounding the city.</p>
            <p class="font-weight-medium font-italic">What are you waiting for, Check out the Sights in Taniti Today!</p>
            <v-btn color="orange">
              Book Travel!
            </v-btn>
          </div>
          <div style="text-align: center; justify-content:center;" v-if="homeCarousel==1">
            <p class="font-weight-medium font-italic">Guided Tours Available!</p>
            <p class="font-weight-medium">Explore the Island in total comfort! Relax in a private guided bus tour as your native guide shows you the best attrations Taniti has to offer. Need something different? Take your family and friends with you on a guided boat tour to the best beaches the island has to offer!</p>
            <v-btn color="orange">
              Book Travel!
            </v-btn>
          </div>
          <div style="text-align: center; justify-content:center;" v-if="homeCarousel==2">
            <p class="font-weight-medium font-italic">Enjoy the Food!</p>
            <p class="font-weight-medium">What better way to get to know Taniti than by exloring the plentiful variety of local cuisine! Taniti is well known for it's fresh seafood and can be found at almost any restaurant on the island. There are also other restaurants available that serve both American and Pan-Asian cuisine!</p>
            <p class="font-weight-medium font-italic">What are you waiting for, Book your Culinary Adventure Today!</p>
            <v-btn color="orange">
              Book Travel!
            </v-btn>
          </div>
        </v-container>
      </v-col>
    </v-row>
    </v-container>
</div>
</template>

<script>

import city from '@/assets/city.jpg'
import busTour from '@/assets/bus_tour.jpg'
import food from '@/assets/food.jpg'

  export default {
    name: 'SightseeingPage',
    computed: {
      height () {
        console.log(this.$vuetify.breakpoint.name)
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
          default: return 800
        }
      }
    },
    data: () => ({
      homeCarousel: 0,
      images: [
        city,
        busTour,
        food

      ]
    }),
  }
</script>
