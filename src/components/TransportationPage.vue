<template>
<div style="height: 800px; overflow-y: scroll">
    <v-row>
      <v-col cols="12">
        <div class="font-weight-bold font-italic" style="margin-top: 10px; text-align: center">
          Ways to Explore the Island...
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <div class="ml-2">
          <v-img  height="400" src="@/assets/bus.jpg"></v-img>
          <p class="mt-4" style="text-align: center;">Public buses serve Taniti City and run from 5a.m. to 11p.m. every day. Private buses are available if you wish to visit other parts of the island.</p>
        </div>
      </v-col>
      <v-col cols="3">
        <div>
          <v-img  height="400" src="@/assets/taxi.jpg"></v-img>
          <p class="mt-4" style="text-align: center;">Taxi cabs are readily available within Taniti city.</p>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="mr-2">
          <v-img height="400" src="@/assets/rental_car.jpg"></v-img>
          <p class="mt-4" style="text-align: center;">Rental cars are available. Pickup location is within minutes of the Taniti Airport.</p>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="mr-2">
          <v-img height="400" src="@/assets/bike.jpg"></v-img>
          <p class="mt-4" style="text-align: center;">Many Vendors in Taniti offer bike and helmet rentals for you to explore the island. Please be advised that helmets are required by law to keep you safe during your visit.</p>
        </div>
      </v-col>
    </v-row>
</div>
</template>

<script>
  export default {
    name: 'TransportationPage',
    data: () => ({
    }),
  }
</script>
