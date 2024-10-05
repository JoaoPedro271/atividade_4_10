<template>
    <div class="container">
      <h1>Sobre Mim</h1>
    
      <div class="row">
        <div class="col" v-for="membro in membros" :key="membro.nome">
          <div class="card" style="width: 18rem;">
            <img :src="membro.imagem" class="card-img-top" :alt="membro.nome">
            <div class="card-body">
              <h5 class="card-title">{{ membro.nome }}</h5>
              <p class="card-text">Idade: {{ membro.idade }}</p>
              <p class="card-text">Frase: "{{ membro.frase }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SobreNosPage',
    data() {
      return {
        membros: [
          { nome: 'João Pedro', idade: 18, frase: 'A imaginação é mais importante que o conhecimento. O conhecimento é limitado, enquanto a imaginação abraça o mundo inteiro, estimulando o progresso, e dando origem à evolução" - Albert Einstein ', imagem: 'https://thumbs.dreamstime.com/b/power-thinking-abstract-imagination-world-universe-inside-your-mind-watercolor-painting-hand-drawn-90349505.jpg' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  </style>
  