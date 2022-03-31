<template>
  <div class="container">
    <h2 class="text-center mt-5">ToDo Vue App</h2>

    <!-- Input -->
    <div class="d-flex">
      <input v-model="task" type="text" placeholder="Enter new task" class="form-control">
      <button @click="submitTask" class="btn btn-success rounded-0">Submit</button>
    </div>

    <!-- Taks Table -->
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Created At</th>
          <th scope="col">Status</th>
          <th scope="col">Highlight</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, id) in tasks" :key="id">
          <td><span :class="{'Finished': task.status === 'Finished'}">{{task.name}}</span></td>
          <td>{{task.createdAt}}</td>
          <td>
            <span @click="changeStatus(id)" class="pointer" 
            :class="{'text-danger': task.status === 'To-do', 
            'text-info': task.status === 'In-progress', 
            'text-success': task.status === 'Finished'}">
              {{task.status}}
            </span>
            </td>
          <td>
            <div>
              <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
            </div>
          </td>
          <td><button @click="editTask(id)" class="btn btn-warning">Edit</button></td>
          <td><button @click="deleteTask(id)" class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    msg: String
  },

  data() {
    return {
      task: '',
      editedTask: null,
      availableStatuses: ['To-do', 'In-progress', 'Finished'],
      tasks: [
        {
          name: 'Do loundry',
          createdAt: '2022/03/26',
          status: 'To-do'
        },
      ]
    }
  },

  methods: {
    submitTask() {
      if(this.task.length === 0) return;
      if(this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          createdAt: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
          status: 'To-do'
        });
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = '';
    },

    changeStatus(id) {
      let newId = this.availableStatuses.indexOf(this.tasks[id].status);
      if(++newId > 2) newId = 0;
      this.tasks[id].status = this.availableStatuses[newId];
    },

    editTask(id) {
      this.task = this.tasks[id].name;
      this.editedTask = id;
    },

    deleteTask(id) {
      this.tasks.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer {
  cursor: pointer;
}
.Finished {
  text-decoration: line-through;
}
</style>
