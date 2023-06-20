<template>
  <q-page class="bg-grey">
    <div class="row items-center justify-evenly q-col-gutter-sm">
<q-btn label="get data" @click="getHomeList"></q-btn>
    </div>
    <div>
      <q-table
          :columns="homeColumns"
      :rows="homeList">

      </q-table>
<!--      {{homeList}}-->
    </div>

  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    // ExampleComponent
  },

  data(
    ){
    return {
      homeList:[] as any[],
      homeColumns:[
        {
          name: 'id',
          label: 'id',
          field: 'id',
        },
        {
          name: 'name',
          label: 'name',
          field: 'name',
        },
        {
          name: 'desc',
          label: 'desc',
          field: 'desc',
        },
        {
          name: 'price',
          label: 'price',
          field: 'price',
        },
        {
          name: 'post_code',
          label: 'post_code',
          field: 'post_code',
        },
      ]
    // {
    //   "id": 385,
    //     "name": "ytnnjhm",
    //     "desc": null,
    //     "price": "678678.0",
    //     "post_code": "45654"
    // },
      // model: 'a',
      // options: [
      //   { label: 'Option A', value: 'a' },
      //   { label: 'Option B', value: 'b' },
      //   { label: 'Option C', value: 'c' }
      // ]
    }
  },
  methods:{
    getHomeList(){
      this.$axios.get('https://test-backend.baania.dev/home'
      ).then((res)=>{
        this.homeList = res.data.payload
      })
    },
  }

});
</script>
