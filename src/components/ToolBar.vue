<template>
  <div>
    <v-app-bar
      color="blue accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = true"></v-app-bar-nav-icon>
        
      <v-toolbar-title @click.stop="$router.push({path:'/'})" style="cursor:pointer">D➕D➖</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
     <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item>
            <v-list-item-title @click.stop="$router.push({path:'/'})">HOME</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click.stop="$router.push({path:'/calendar'})">캘린더</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click.stop="$router.push({path:'/schedule'})">일정 모아보기</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click.stop="$router.push({path:'/setting'})">설정</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>공지사항</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
    data:()=>({
        drawer:false,
        group:null
    }),
    watch:{
        group(){
            this.drawer = false
        }
    }

}
</script>

<style>

</style>