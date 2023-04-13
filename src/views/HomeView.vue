<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
    <NavBar />
    <v-container fluid class="mt-16">
      <v-row>
        <v-col cols="12" sm="6" class="pa-0">
          <v-img src="/portrait.jpg" height="100%" cover> </v-img>
        </v-col>
        <v-col cols="12" sm="6" class="ma-sm-auto">
          <p class="text-h4 mb-4 mb-md-6" style="color: #f8f8f8">Hello, I'm Oluwaseyi</p>
          <p class="text-h4 text-md-h3 mb-4 mb-md-6" style="color: #7f7f7f">
            Frontend Developer
          </p>
          <p class="text-h5" style="color: #7f7f7f">
            I build beautiful, people-friendly, high-performing web applications with
            Vue.js and React.js
          </p>
          <v-btn tile size="large" color="7f7f7f" class="mt-8" dark href="resume.pdf"
            >About Me</v-btn
          >
        </v-col>

        <v-col cols="12" class="pad pa-0">
          <div class="first" id="projects">
            <v-row>
              <v-col cols="12">
                <div class="child bg-color-1">
                  <v-icon color="#7f7f7f" x-large class="ml-3">
                    mdi-palette-advanced
                  </v-icon>
                  <p class="text-h3 ml-3 mt-4 text-white">Web Design</p>
                  <p class="text-grey ml-3 mt-6">
                    These are a few of the <br />
                    web designs I've worked on
                  </p>
                  <v-btn color="#f8f8f8" variant="text"
                    >See More <v-icon right>mdi-arrow-right</v-icon></v-btn
                  >
                </div>
              </v-col>
              <v-col cols="12" xs="6">
                <div class="child-2 right">
                  <v-row>
                    <v-col cols="12" xs="6" class="child-col">
                      <div class="child-1 d-flex d-xs-block">
                        <p class="text-h2 text-grey number mr-2">2+</p>
                        <span class="text-h5">Years Experience</span>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="child-2 right">
                  <v-row>
                    <v-col cols="12" xs="6" class="child-col">
                      <div class="child-2 button padding bg-color-1 d-flex d-xs-block">
                        <p class="text-h1 text-grey-darken-2">20</p>
                        <p class="text-h4 text-grey mt-6">Projects</p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" id="about">
          <v-row>
            <v-col cols="12">
              <div>
                <p class="text-h4 text-white text-center">SKILLS</p>
              </div>
              <v-carousel
                touch
                progress="red"
                cycle
                height="300"
                hide-delimiters
                show-arrows="hover"
              >
                <v-carousel-item>
                  <v-sheet height="100%" class="d-flex justify-center align-center">
                    <div>
                      <p class="text-h6">HTML5</p>

                      <v-icon class="ml-4" size="x-large">mdi-language-html5</v-icon>
                    </div>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="100%" class="d-flex justify-center align-center">
                    <div>
                      <p class="text-h6">CSS3</p>

                      <v-icon class="ml-3" size="x-large">mdi-language-css3</v-icon>
                    </div>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="100%" class="d-flex justify-center align-center">
                    <div>
                      <p class="text-h6">BOOTSTRAP</p>

                      <v-icon class="ml-11" size="x-large">mdi-bootstrap</v-icon>
                    </div>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="100%" class="d-flex justify-center align-center">
                    <div>
                      <p class="text-h6">JAVASCRIPT</p>

                      <v-icon class="ml-11" size="x-large"
                        >mdi-language-javascript</v-icon
                      >
                    </div>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="100%" class="d-flex justify-center align-center">
                    <div>
                      <p class="text-h6">GIT</p>

                      <v-icon size="x-large">mdi-git</v-icon>
                    </div>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="100%" class="d-flex justify-center align-center">
                    <div>
                      <p class="text-h6">VUEJS</p>

                      <v-icon class="ml-4" size="x-large">mdi-vuejs</v-icon>
                    </div>
                  </v-sheet>
                </v-carousel-item>
                <v-carousel-item>
                  <v-sheet height="100%" class="d-flex justify-center align-center">
                    <div>
                      <p class="text-h6">REACT</p>

                      <v-icon class="ml-4" size="x-large">mdi-react</v-icon>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <v-row>
            <v-col cols="12">
              <v-window continuous show-arrows direction="vertical" v-model="window">
                <v-window-item>
                  <v-card
                    elevation="2"
                    max-height="600"
                    class="d-flex align-center justify-center"
                    color="#1e1e1e"
                  >
                    <v-img src="/10.png"></v-img
                  ></v-card>
                  <v-btn
                  size="large"
                  class="mt-5 px-0"
                    variant="text"
                    tile
                    color="white"
                    href="https://watermelon-pixel-media.netlify.app/"
                    target="_blank"
                    >See More <v-icon right>mdi-arrow-right</v-icon></v-btn
                  >
                </v-window-item>
                <v-window-item>
                  <v-card
                    elevation="2"
                    max-height="600"
                    class="d-flex align-center justify-center"
                    color="#1e1e1e"
                  >
                    <v-img src="/9.png"></v-img
                  ></v-card>
                  <v-btn
                  size="large"
                  class="mt-5 px-0"
                    variant="text"
                    tile
                    color="white"
                    href="https://watermelon-ice-cream-shop.netlify.app/"
                    target="_blank"
                    >See More <v-icon right>mdi-arrow-right</v-icon></v-btn
                  ></v-window-item
                >
                <v-window-item>
                  <v-card
                    elevation="2"
                    max-height="600"
                    class="d-flex align-center justify-center"
                    color="#1e1e1e"
                  >
                    <v-img src="/8.png"></v-img
                  ></v-card>
                  <v-btn
                  size="large"
                  class="mt-5 px-0"
                    variant="text"
                    tile
                    color="white"
                    href="https://watermelon-expanding-cards.netlify.app/"
                    target="_blank"
                    >See More <v-icon right>mdi-arrow-right</v-icon></v-btn
                  ></v-window-item
                >

                <v-window-item>
                  <v-card
                    elevation="2"
                    max-height="600"
                    class="d-flex align-center justify-center"
                    color="#1e1e1e"
                  >
                    <v-img src="/7.png" srcset="/7.png "></v-img
                  ></v-card>
                  <v-btn
                  size="large"
                  class="mt-5 px-0"
                    variant="text"
                    tile
                    color="white"
                    href="https://watermelon-trafalgar.netlify.app/"
                    target="_blank"
                    >See More <v-icon right>mdi-arrow-right</v-icon></v-btn
                  ></v-window-item
                >
                <v-window-item>
                  <v-card
                    elevation="2"
                    max-height="600"
                    class="d-flex align-center justify-center"
                    color="#1e1e1e"
                  >
                    <v-img src="/6.png"></v-img
                  ></v-card>
                  <v-btn
                  size="large"
                  class="mt-5 px-0"
                    variant="text"
                    tile
                    color="white"
                    href="https://watermelon-dad-jokes.netlify.app/"
                    target="_blank"
                    >See More <v-icon right>mdi-arrow-right</v-icon></v-btn
                  ></v-window-item
                >
                <v-window-item>
                  <v-card
                    elevation="2"
                    max-height="600"
                    class="d-flex align-center justify-center"
                    color="#1e1e1e"
                  >
                    <v-img src="/5.png"></v-img
                  ></v-card>
                  <v-btn
                  size="large"
                  class="mt-5 px-0"
                    variant="text"
                    tile
                    color="white"
                    href="https://watermelon-weather-app.netlify.app/"
                    target="_blank"
                    >See More <v-icon right>mdi-arrow-right</v-icon></v-btn
                  ></v-window-item
                >
              </v-window>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="pad px-0">
          <div class="second d-flex justify-center">
            <div class="second-child px-2" id="contact">
              <v-row>
                <v-col cols="12">
                  <p class="text-h5 text-sm-h3 text-white mb-6">
                    Let's work together on your next project
                  </p>
                  <p class="text-grey mt-6">
                    I look forward to working with you to bring your vision to life.
                  </p>
                  <v-btn
                    size="large"
                    v-bind="props"
                    tile
                    color="f8f8f8"
                    dark
                    class="mt-16"
                    href="mailto:jesuisseyitan@gmail.com"
                  >
                    Contact
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <FooterCom />
  </v-app>
</template>

<script>
// Components
import NavBar from "@/layouts/default/NavBar.vue";
import FooterCom from "@/components/FooterCom.vue";
// import ContactModal from "@/components/ContactModal.vue";
export default {
  name: "HomeView",
  data() {
    return {
      dialog: false,
      window: 0,
    };
  },

  components: {
    NavBar,
    FooterCom,
    // ContactModal,
  },
};
</script>

<style scoped>

.first {
  width: 100%;
  height: 650px;
  background: linear-gradient(to right, #7f7f7f, #7f7f7f 50%, #f8f8f8 50%, #f8f8f8 50%);
  text-align: center;
  padding: 2rem;
}

.second {
  height: 500px;
  background: #7f7f7f;
  text-align: center;
  padding: 2rem;
}
.second-child {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  width: 100%;
  vertical-align: middle;
}

.child {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  text-align: left;
  margin-right: 0.5rem;
}
.child-1 {
  display: inline-block;
  width: 240px;
  padding: 1rem;
  margin-right: 0.313rem;
  vertical-align: middle;
}

.child-2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}

.bg-color-1 {
  background-color: #1e1e1e;
}


.right {
  margin-right: 0.5rem;
}
.button {
  margin-bottom: 0.5rem;
}

.padding {
  padding: 0.5rem 0rem;
}


.col-12.child-col {
  padding: 0 !important;
}

.number {
  font-size: 2rem;
  font-weight: bold;
}
</style>
