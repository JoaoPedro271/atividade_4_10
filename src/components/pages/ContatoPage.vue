<template>
    <div class="container">
      <h1>Contato</h1>
      <form @submit.prevent="enviarMensagem">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="assunto" class="form-label">Assunto</label>
          <select class="form-select" id="assunto" v-model="assunto" required>
            <option value="" disabled selected>Escolha o assunto</option>
            <option value="dúvida">Dúvida</option>
            <option value="sugestão">Sugestão</option>
            <option value="reclamação">Reclamação</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="mensagem" class="form-label">Mensagem</label>
          <textarea class="form-control" id="mensagem" v-model="mensagem" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
  
      <div v-if="mensagemEnviada" class="alert alert-success mt-3" role="alert">
        Mensagem enviada com sucesso!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContatoPage',
    data() {
      return {
        email: '',
        assunto: '',
        mensagem: '',
        mensagemEnviada: false,
      };
    },
    methods: {
      enviarMensagem() {
       
        this.mensagemEnviada = true;
        this.email = '';
        this.assunto = '';
        this.mensagem = '';
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  