<template>
  <!-- <v-row style="position: relative"> -->
  <!-- <Frame class="inside-container"> </Frame> -->
  <!-- <div class="inside-container2">
      <v-card-title> Hello World dasasdasdasdasdasdasd </v-card-title>
      <v-card-title> Hello World </v-card-title>
      <v-card-title> Hello World </v-card-title>
    </div> -->
  <!-- </v-row> -->
  <v-card-title class="border2">
    <Frame />
    <span style="z-index: 0"> Hello world</span>
  </v-card-title>
</template>

<script>
import Frame from "~/components/Frame4";
export default {
  components: {
    Frame,
  },
};
</script>

<style scoped>
.inside-container {
  /* position: relative; */
  z-index: 1;
  height: 100%;
  width: 100%;
  /* top: 0; */
}
.inside-container2 {
  font-size: 24px;
  border: 10px solid black;
  padding: 2rem 1rem;
  min-height: 3em;
  resize: both;
  /* background: #ffd73e33; */
  /* border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.1s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E")
    1; */
  /* border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.1s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000000' /%3E%3Cstop offset='25%25' stop-color='%230000ff' /%3E%3Cstop offset='50%25' stop-color='%23add8e6' /%3E%3Cstop offset='100%25' stop-color='%23800080' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='2' stroke-dasharray='388'/%3E %3C/svg%3E")
    1; */
  border-image: url("~/assets/border.png") 30 round 1;
}

.border2 {
  /* font-size: 24px; */
  box-sizing: content-box;
  border: 5px solid black;
  /* padding: 2rem 1rem; */
  /* min-height: 2em; */

  width: 200px;
  /* font-size: 24px; */
  /* border: 10px solid black; */
  /* padding: 2rem 1rem; */
  /* min-height: 3em; */
  resize: both;
  /* background: #ffd73e33; */
  /* border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.1s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%232d3561' /%3E%3Cstop offset='25%25' stop-color='%23c05c7e' /%3E%3Cstop offset='50%25' stop-color='%23f3826f' /%3E%3Cstop offset='100%25' stop-color='%23ffb961' /%3E%3C/linearGradient%3E %3Cpath d='M1.5 1.5 l97 0l0 97l-97 0 l0 -97' stroke-linecap='square' stroke='url(%23g)' stroke-width='3' stroke-dasharray='388'/%3E %3C/svg%3E")
    1; */
  /* border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cstyle%3Epath%7Banimation:stroke 0.1s  linear%3B%7D%40keyframes stroke%7Bto%7Bstroke-dashoffset:776%3B%7D%7D%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23000000' /%3E%3Cstop offset='25%25' stop-color='%230000ff' /%3E%3Cstop offset='50%25' stop-color='%23add8e6' /%3E%3Cstop offset='100%25' stop-color='%23800080' /%3E%3C/linearGradient%3E %3Cpath d='M0 0 L66 0 L75 100' stroke='%23f00' stroke-width='2' /%3E%3Cpath d='M0 0 L0 100' stroke='%23f00' stroke-width='2' /%3E%3Cpath d='M0 100 L100 100' stroke='%23f00' stroke-width='2' /%3E%3Cpath d='M100 100 L100 22' stroke='%23f00' stroke-width='2' /%3E %3C/svg%3E")
    3 / 1rem round; */
  border-image: url("~/assets/border.png") 30 round 1;
}
</style>
