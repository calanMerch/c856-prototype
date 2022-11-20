<template>
<div style="height: 800px; overflow-y: auto">
    <v-row>
      <v-col cols="12">
        <div class="font-weight-bold font-italic" style="margin-top: 10px; text-align: center">
          Enjoy your stay in Taniti...
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <div class="ml-2">
          <v-img  max-height="400" src="@/assets/hotel.jpg"></v-img>
          <p class="mt-4" style="text-align: center;">Taniti offers many Hotel options for your stay, no matter your budget.</p>
        </div>
      </v-col>
      <v-col cols="4">
        <div>
          <v-img  max-height="400" src="@/assets/resort.jpg"></v-img>
          <p class="mt-4" style="text-align: center;">Looking for something all-inclusive? Taniti has one of the top-rated resorts in the world located directly on the water!</p>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="mr-2">
          <v-img max-height="400" src="@/assets/bed_breakfast.jpg"></v-img>
          <p class="mt-4" style="text-align: center;">Something more Cozy? Taniti has a growing number of family-owned Bed and Breakfasts that are perfect for your romantic getaway!</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p style="text-align: center">All lodging options are strictly regulated by the Tanitian Government and are regularly inspected to make sure your stay on Taniti is perfect! </p>
      </v-col>    
    </v-row>
</div>
</template>

<script>
  export default {
    name: 'LodgingPage',

    data: () => ({
    }),
  }
</script>
