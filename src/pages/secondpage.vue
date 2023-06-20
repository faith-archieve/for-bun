<template>
  <q-page class="bg-grey">
    <div class="row items-center justify-evenly bg-dark q-col-gutter-sm">
      <div class="col-12 bg-white text-center">
      aaaaa

      </div>
    </div>

  </q-page>
</template>

<script lang="ts">
// import { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'secondPage',
  components: {
    // ExampleComponent
  },

  data(
    ){
    return {
      // userList:[] as any[],
      // model: 'a',
      // options: [
      //   { label: 'Option A', value: 'a' },
      //   { label: 'Option B', value: 'b' },
      //   { label: 'Option C', value: 'c' }
      // ]
    }
  },
  methods:{
    // getUserList(){
    //   this.$axios.get('http://backend/users',
    //   ).then((res)=>{
    //     this.userList = res.data.userList
    //   })
    // },
  }

});
</script>
