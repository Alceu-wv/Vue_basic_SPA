<template>
  <div class="container">
    <h2 class="text-center mt-5">Cadastro de atores</h2>

    <div class="container">
      <input v-model.trim="name" type="text" placeholder="Nome" class="form-control">
      <input v-model.trim.number="age" placeholder="Idade" class="form-control">
      <input v-model.trim="spec" type="text" placeholder="Especialidade" class="form-control">
      <button @click="submitForm" class="btn btn-success">Cadastrar</button>
    </div>

    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Idade</th>
          <th scope="col">Especialidade</th>
          <th scope="col">Contrarado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(actor, id) in actors" :key="id" v-bind:class="{Available: actor.available}">
          <td>{{actor.name}}</td>
          <td>{{actor.age}}</td>
          <td>{{actor.spec}}</td>
          <td>
            <div>
              <input class="form-check-input" type="checkbox" v-model=actor.available>
            </div>
          </td>
          <td><button @click="deleteActor(id)" class="btn btn-danger">Deletar</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'ActorForm',

  data() {
    return {
      actor: '',
      actors: [
        {
          name: 'Darlan',
          age: 22,
          spec: 'Drama',
          dateCreation: '2022/03/30',
          available: true
        },
      ]
    }
  },

  methods: {
    submitForm() {
      this.actors.push({
        name: this.name,
        age: this.age,
        spec: this.spec,
        createdAt: new Date(),
        availabe: this.availabe
      })},

    changeStatus(id) {
      this.actors[id].availabe = this.availabe
    },

    deleteActor(id) {
      this.actors.splice(id, 1);
    }
  }
}
</script>

<style scoped>
.Available {
  text-decoration: line-through;
  background-color: #effffe;
}
</style>
