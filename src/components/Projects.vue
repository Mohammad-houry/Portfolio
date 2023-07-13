<template>
  <div id="Project" class="mt-12">
    <div class="flex flex-col items-center text-white overflow-x-hidden">
      <h1 class="uppercase font-bold tracking-wider text-4xl">project</h1>
      <hr class="style1 my-4" />
      <span
        class="max-w-xl text-center text-xl leading-loose mb-20"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        >Explore the exciting world of our projects and discover the innovative solutions we've
        crafted</span
      >
    </div>
    <div class="flex flex-col justify-around content-center flex-wrap gap-20 overflow-x-hidden">
      <div
        v-for="project in projects"
        :key="project.Id"
        :data-aos="project.aos"
        data-aos-offset="200"
        data-aos-duration="1000"
        class="flex justify-evenly items-center text-white gap-4"
      >
        <img :src="project.ImgSrc" :alt="project.ImgAlt" class="w-1/2" />
        <div class="flex flex-col max-w-lg">
          <h1 class="text-4xl font-bold">{{ project.Name }}</h1>
          <span class="my-6">{{ project.Description }}</span>
          <a
            :href="project.Link"
            target="_blank"
            class="p-4 cursor0 border max-w-[140px] bg-w rounded-xl text-center mt-6 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >Visit Project</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import Covid from '../Images/My project (4).png'
import weather from '../Images/My project (2).png'
import Todo from '../Images/My project (1).png'
import Ecommerce from '../Images/My project (3).png'

export default {
  setup() {
    const projects = ref([
      {
        Id: 1,
        aos: 'slide-left',
        ImgSrc: Covid,
        ImgAlt: 'Covid Center — Covid 19 tracker',
        Name: 'Covid Center — Covid 19 tracker',
        Description:
          'Developed a comprehensive COVID-19 tracker, featuring live statistics, news updates, and an interactive quick test. Utilized HTML, CSS, JavaScript, and PHP to create an engaging user interface',
        Link: 'http://hamoudi198.hyperphp.com/'
      },
      {
        Id: 2,
        aos: 'slide-right',
        ImgSrc: Ecommerce,
        ImgAlt: 'ShopZone — Ecommerce Website',
        Name: 'ShopZone — Ecommerce Website',
        Description:
          'Created an innovative e-commerce website with a focus on user experience and functionality. Implemented HTML, CSS, JavaScript,  Vue.js and Laravel to deliver a seamless shopping experience.',
        Link: ''
      },
      {
        Id: 3,
        aos: 'slide-left',
        ImgSrc: Todo,
        ImgAlt: 'Todo List - App',
        Name: 'Todo List - App',
        Description:
          'The Todo List web application is a user-friendly tool that allows you to effortlessly manage and organize your tasks. With its intuitive interface, you can easily add, edit, complete, and remove tasks, ensuring you stay on top of your daily responsibilities and goals.',
        Link: 'https://todo-app-list-00.000webhostapp.com/'
      },
      {
        Id: 4,
        aos: 'slide-right',
        ImgSrc: weather,
        ImgAlt: 'WeatherEase — Weather App',
        Name: 'WeatherEase — Weather App',
        Description:
          'Designed and developed a dynamic weather website utilizing Vue.js and Tailwind CSS, providing users with real-time weather information, intuitive interfaces, and seamless user experience.',
        Link: 'https://weatherease.000webhostapp.com/'
      }
    ])

    return {
      projects
    }
  }
}
</script>
