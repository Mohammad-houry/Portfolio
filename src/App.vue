<template>
  <Navbar />

  <div
    v-for="component in components"
    :key="component.name"
    class="min-h-screen m-y-auto flex justify-center items-center bg-blek"
    :ref="component.name"
  >
    <component :is="component.componentName" />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const components = [
  { name: 'home', componentName: Home },
  { name: 'about', componentName: About },
  { name: 'projects', componentName: Projects },
  { name: 'contact', componentName: Contact }
]
</script>
