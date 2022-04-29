<template>
  <v-app>
   <tool-bar></tool-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  name: 'App',
  components:{
    ToolBar
  },
  data: () => ({
    //
  }),
};
</script>
