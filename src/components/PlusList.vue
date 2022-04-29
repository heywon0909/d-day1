<template>
 <v-container> 
   <v-layout justify-center>
     <!-- <v-flex xs12>
       {{pagination}}
     </v-flex> -->
     <v-flex xs3>
       <v-text-field v-model="title" label="title" style="width:300px;"></v-text-field>
     </v-flex>
     <v-flex xs3>
       <v-text-field v-model="content" label="content" style="width:300px;"></v-text-field>
     </v-flex>
     <v-flex xs1>
       <v-btn color="success" @click="post">post</v-btn>
     </v-flex>
   </v-layout>
   <v-flex justify="center">
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      row 
      wrap 
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.title"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                <v-btn icon @click="isClickedTitle = true">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-text-field v-if="isClickedTitle === true"></v-text-field>
              <template v-else>
                {{ item.title }}
              </template>  
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text >
              <v-btn icon @click="isClicked = true">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
                {{item.content }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="put(item)">put</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
    </v-flex>
  </v-container>
</template>

<script>
   export default {
    data: () => ({
      itemsPerPage: 10,
      rowsPerPageItems: [4, 8, 12],
      isClickedTitle:false,
      pagination: {
        rowsPerPage: 4
      },
      items: [],
      title:'',
      content:''
    }),
    mounted(){
      this.items.push({
        title:'abcd',
        content:'jijij'
      })
    },
    methods:{
      post(){
        this.items.push({
          title:this.title,
          content:this.content
        })
      },
      get(){
      
      },
      update(){

      },
      del(){

      },
      put(item){
        console.log(item);
      }
    }
  }
</script>

<style>

</style>