<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
            </v-btn>    
          어떤 기념일인가요?
        </v-card-title>

        <v-card-text>
        <v-col cols="30" md="6">
        <v-textarea
          solo
          name="input-7-4"
          style="width:1200px;"
        ></v-textarea>
      </v-col>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            저장하기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    props:{
        dialog:Boolean
    }

}
</script>

<style scoped>
@media (min-width: 960px){
    .col-md-6 {
        flex: 0 0 50%;
        max-width: 100%;
    }
}

</style>