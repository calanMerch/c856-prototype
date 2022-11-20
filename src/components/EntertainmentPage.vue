<template>
<div style="height: 800px; overflow-y: auto">
  <v-container>
      <v-row>
      <v-col cols="12">
        <div class="font-weight-bold font-italic" style="margin-top: 10px; text-align: center">
          Enjoy the Island Life...
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
            <p class="font-weight-medium font-italic">Relaxing White Sand Beaches!</p>
            <p class="font-weight-medium">Most of our visitors come to Taniti solely for our world-class white sand beaches</p>
            <p class="font-weight-medium font-italic">Don't believe it? Book a trip to Taniti and see for yourself!</p>
          </div>
          <div style="text-align: center; justify-content:center;" v-if="homeCarousel==1">
            <p class="font-weight-medium font-italic">Enjoy Fishing?</p>
            <p class="font-weight-medium">There are plenty of great fishing spots around the island for the perfect catch! Feeling like a little more adventure, there chartered fishing tours available year-round.</p>
          </div>
          <div style="text-align: center; justify-content:center;" v-if="homeCarousel>=2">
            <p class="font-weight-medium font-italic">Looking for Something else?</p>
            <p class="font-weight-medium">Whether you enjoy snorkeling, zip-lining in the rainforest, enjoying a fresh beer from a microbrewery, golfing, or enjoying the local night-life; Taniti has something that everyone can enjoy!</p>
            <p class="font-weight-medium font-italic">What are you waiting for, Book your Island Getaway Today!</p>
          </div>
        </v-container>
      </v-col>
    </v-row>
    </v-container>
</div>
</template>

<script>

import beach from '@/assets/beach.jpg'
import fishing from '@/assets/fishing.jpg'
import snorkeling from '@/assets/snorkeling.jpg'
import zipline from '@/assets/zipline.jpg'
import nightclub from '@/assets/nightclub.jpg'

  export default {
    name: 'EntertainmentPage',

    data: () => ({
      homeCarousel: 0,
      images: [
        beach,
        fishing,
        snorkeling,
        zipline,
        nightclub
      ]
    }),
  }
</script>
