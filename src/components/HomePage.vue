<template>
<div style="height: 800px; overflow-y: auto">
  <!-- <v-img class="mt-5" max-height="250" src="@/assets/home1.jpg"></v-img> -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="font-weight-bold font-italic" style="margin-top: 10px; text-align: center">
          Welcome to the Island of Taniti!
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
            <p class="font-weight-medium font-italic">Taniti Could be Your Next Getaway Adventure!</p>
            <p class="font-weight-medium">A small Pacific Island with white sand beaches, a small but safe harbor, lush tropical rainforests...</p>
            <p class="font-weight-medium font-italic">What are you waiting for, Book your Next Adventure Today!</p>
            <v-btn color="orange">
              Book Travel!
            </v-btn>
          </div>
          <div style="text-align: center; justify-content:center;" v-if="homeCarousel==1">
            <p class="font-weight-medium font-italic">Enjoy the Crystal Clear Water and White Sand Beaches!</p>
            <p class="font-weight-medium">Taniti is the perfect destination for Scuba Diving, Snorkeling, or soaking up the sun from shore.</p>
            <p class="font-weight-medium font-italic">What are you waiting for, Book your Beach Vacation Today!</p>
            <v-btn color="orange">
              Book Travel!
            </v-btn>
          </div>
          <div style="text-align: center; justify-content:center;" v-if="homeCarousel==2">
            <p class="font-weight-medium font-italic">Relax and Unwind with Unrivaled Tropical Sunset Views!</p>
            <p class="font-weight-medium">Looking to slow-down and enjoy paradise with that special someone? Taniti has the best sunset views in the Pacific!</p>
            <p class="font-weight-medium font-italic">What are you waiting for, Book your Island Getaway Today!</p>
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

import getaway from '@/assets/getaway.jpg'
import sunsetImg from '@/assets/beach_sunset.jpg'
import beachImg from '@/assets/beach.jpg'

  export default {
    name: 'HomePage',
    computed: {
      currentImgText() {
        return this.desciptions[this.homeCarousel]
      }
    },
    data: () => ({
      homeCarousel: 0,
      images: [
        getaway,
        beachImg,
        sunsetImg
      ],
      desciptions: [
        'Taniti Could be Your Next Getaway Adventure!',
        'Enjoy the Crystal Clear Water and White Sand Beaches!',
        'Relax and Unwind with Unrivaled Tropical Sunset Views!',

      ]
    }),
  }
</script>
