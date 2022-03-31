<template>
  <div>
    <ToDo />
  </div>
</template>

<script>
// @ is an alias to /src
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'ToDoView',
  components: {
    ToDo
  }
}
</script>
