<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="col-md-4">
      <h1 class="text-center">Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="senha" class="form-label">Senha</label>
          <input type="password" class="form-control" id="senha" v-model="senha" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
      </form>

      <!-- Mensagem de sucesso -->
      <div v-if="loginSuccess" class="alert alert-success mt-3" role="alert">
        Login realizado com sucesso!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: '',
      loginSuccess: false,
    };
  },
  methods: {
    handleLogin() {
   
      if (this.email === 'joao@gmail.com' && this.senha === '123') {
        this.loginSuccess = true; 
      } else {
        alert('Login ou senha incorretos.');
        this.loginSuccess = false; 
      }
    },
  },
};
</script>

<style>

</style>
