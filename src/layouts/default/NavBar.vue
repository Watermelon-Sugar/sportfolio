<template>
  <v-app-bar app color="#202020" dark flat class="px-4 px-xs-0" style="position:fixed">
    <v-btn icon class="mb-4 d-none d-sm-flex">
      <v-icon color="#f8f8f8" style="font-size: 4rem">mdi-alpha-s</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
              <v-btn class="pl-0" size="small" text color="#7f7f7f" @click="scroll('home')"> Home </v-btn>
              <v-btn size="small" text color="#7f7f7f" @click="scroll('projects')"> Projects </v-btn>
              <v-btn size="small" text color="#7f7f7f" @click="scroll('about')"> About </v-btn>
              <v-btn size="small" text color="#7f7f7f" @click="scroll('contact')"> Contact </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
