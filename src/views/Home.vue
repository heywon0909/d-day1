<template>
  <div>
    <div class="main-title">
      00님, 다음의 일정을 추가해주세요
    </div>
       <v-card
    class="mx-auto"
    max-width="300"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          일정 추가하기
        </div>
     
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  <schedule-list/>
  </div>
</template>

<script>
import ScheduleList from '../components/ScheduleList.vue'
export default {
  components:{
    ScheduleList
  }

}
</script>

<style>
.main-title {
    margin: 0 auto;
    text-align: center;
}
</style>