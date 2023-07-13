<template>
  <div class="w-full h-screen">
    <div id="About">
      <div class="flex flex-col justify-center items-center my-12 gap-4 text-white">
        <h1 class="uppercase font-bold tracking-wider text-4xl">about me</h1>
        <hr class="style1" />
        <span
          class="max-w-xl text-center text-xl leading-loose"
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          >Here you can find additional information about me, including my background, professional
          pursuits, and skills, particularly in programming and technology.
        </span>
      </div>
      <div class="flex h-full text-white justify-around mx-16 gap-12">
        <div class="max-w-50">
          <div class="max-h-60 p-4">
            <h1 class="font-bold text-2xl mb-6">Get To Know Me!</h1>
            <span
              class="tracking-wide leading-loose flex flex-col"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
            >
              I'm Mohammad Houry, a guitar-strumming web developer who thrives on the synergy
              between code and music. With a love for both disciplines, I'm on an exciting journey
              to conquer the digital realm while rocking the stage. Through captivating websites and
              killer guitar riffs, I create an extraordinary fusion that captivates audiences online
              and offline. Though I'm new to the professional scene, my passion and dedication drive
              me to create awe-inspiring virtual experiences. With a hunger for learning and a
              determination to excel, I bring a perfect blend of technical prowess and rock 'n' roll
              flair. If you're seeking a developer who can deliver a harmonious blend of creativity
              and expertise, your search ends here.
            </span>
            <button
              @click.prevent="scrollToSection('#Contact')"
              class="cursor0 uppercase py-2 px-4 border bg-w rounded-xl mt-6 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div class="flex flex-col max-w-50">
          <h1 class="font-bold text-2xl mb-6">My Skills</h1>
          <div class="flex flex-wrap">
            <div
              v-for="skill in skills"
              :key="skill.id"
              class="py-2 px-4 m-2 rounded-xl text-lg text-black bg-w border"
              data-aos="flip-up"
              :data-aos-duration="skill.time"
            >
              <span class="">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  methods: {
    scrollToSection(section) {
      scrollTo(section, 500, {
        easing: 'ease-in-out'
      })
    }
  },
  setup() {
    const skills = ref([
      {
        id: 1,
        time: 1000,
        name: 'HTML5'
      },
      {
        id: 2,
        time: 1200,
        name: 'CSS'
      },
      {
        id: 3,
        time: 1400,
        name: 'Tailwind'
      },
      {
        id: 4,
        time: 1600,
        name: 'Responsive Design'
      },
      {
        id: 5,
        time: 1800,
        name: 'JavaScript'
      },
      {
        id: 6,
        time: 2000,
        name: 'jQuery'
      },
      {
        id: 7,
        time: 2200,
        name: 'Vue 3'
      },
      {
        id: 8,
        time: 2400,
        name: 'PHP'
      },

      {
        id: 9,
        time: 2600,
        name: 'Laravel'
      },
      {
        id: 9,
        time: 2800,
        name: 'SQL Basic'
      },
      {
        id: 10,
        time: 3000,
        name: 'GitHub'
      }
    ])

    return {
      skills
    }
  }
}
</script>
