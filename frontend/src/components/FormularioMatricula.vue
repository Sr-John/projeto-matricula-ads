<template>
  <div class="container">
    <h1>Matrícula Online - Portal ADS</h1>
    
    <form @submit.prevent="enviarDados">
      <input v-model="dados.nome" type="text" placeholder="Seu Nome Completo" required />
      <input v-model="dados.email" type="email" placeholder="seu@email.com" required />
      
      <select v-model="dados.curso" required>
        <option value="" disabled>Escolha um curso...</option>
        <option v-for="curso in listaCursos" :key="curso.id" :value="curso.nome">
          {{ curso.nome }}
        </option>
      </select>

      <button type="submit" :disabled="carregando">
        {{ carregando ? 'Enviando...' : 'Confirmar Matrícula' }}
      </button>
    </form>

    <div v-if="feedback" :class="['feedback', status]">
      {{ feedback }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const dados = ref({ nome: '', email: '', curso: '' });
const listaCursos = ref([]);
const carregando = ref(false);
const feedback = ref('');
const status = ref('');

// 1. Busca os cursos do seu Backend Node.js
onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/cursos');
    listaCursos.value = await res.json();
  } catch (err) {
    feedback.value = "Erro ao carregar cursos. O servidor está ligado?";
    status.value = "erro";
  }
});

// 2. Envia a matrícula para o Backend
const enviarDados = async () => {
  carregando.value = true;
  feedback.value = '';

  try {
    const res = await fetch('http://localhost:3000/matricula', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados.value)
    });

    if (res.ok) {
      feedback.value = "Matrícula realizada com sucesso! 🎉";
      status.value = "sucesso";
      dados.value = { nome: '', email: '', curso: '' }; // Limpa os campos
    } else {
      throw new Error();
    }
  } catch (err) {
    feedback.value = "Falha na comunicação com o servidor.";
    status.value = "erro";
  } finally {
    carregando.value = false;
  }
};
</script>

<style scoped>
.container { max-width: 400px; margin: 40px auto; padding: 20px; border: 1px solid #ddd; border-radius: 12px; font-family: sans-serif; }
form { display: flex; flex-direction: column; gap: 10px; }
input, select, button { padding: 12px; border-radius: 6px; border: 1px solid #ccc; font-size: 16px; }
button { background-color: #42b883; color: white; font-weight: bold; cursor: pointer; border: none; }
button:disabled { background-color: #a8d5c2; }
.feedback { margin-top: 20px; padding: 10px; text-align: center; border-radius: 4px; }
.sucesso { background-color: #d4edda; color: #155724; }
.erro { background-color: #f8d7da; color: #721c24; }
</style>