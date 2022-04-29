<template>
 <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      hide-default-footer
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-card-text>
                {{props.item.content}}
              </v-card-text>
              <v-divider></v-divider>

           
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
   export default {
    data: () => ({
      itemsPerPage: 4,
      items: [
       
      ],
    }),
    mounted(){
      this.itmes.push({
        title:'abcd',
        content:'jijiji'
      })
    }
  }
</script>

<style>

</style>