<template>
  <div id="Home" class="w-full h-full">
    <div
      class="h-screen p-8 pt-12 w-full justify-center items-center flex flex-col text-white home"
    >
      <div class="flex flex-col items-center justify-center uppercase h-full">
        <span data-aos="zoom-in" class="text-xl antialiased tracking-wide font-semibold"
          >Hello, This is
        </span>
        <h1 id="name" class="tracking-widest font-bold antialiased text-8xl my-2">
          Mohammad Houry
        </h1>
        <div data-aos="zoom-in" class="text-xl antialiased tracking-wide font-semibold">
          <span>I'm a Frontend Web Developer, Computer Scientist</span>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1500" class="mt-auto mb-16">
        <div class="scroll-down2 block cursor0" @click.prevent="scrollToSection('#About')"></div>
      </div>
    </div>
    <div class="rounded-full bg-white circle-1"></div>
  </div>
  <div class="bg-blek">
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
            >Here you can find additional information about me, including my background,
            professional pursuits, and skills, particularly in programming and technology.
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
                to conquer the digital realm while rocking the stage. Through captivating websites
                and killer guitar riffs, I create an extraordinary fusion that captivates audiences
                online and offline. Though I'm new to the professional scene, my passion and
                dedication drive me to create awe-inspiring virtual experiences. With a hunger for
                learning and a determination to excel, I bring a perfect blend of technical prowess
                and rock 'n' roll flair. If you're seeking a developer who can deliver a harmonious
                blend of creativity and expertise, your search ends here.
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
          <img :src="project.ImgSrc" :alt="project.ImgAlt" class="w-1/3" />
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
    <div id="Contact" class="w-full flex-col flex items-center">
      <div class="text-white flex flex-col items-center">
        <h1 class="text-6xl font-bold mb-8 uppercase">Contact</h1>
        <span data-aos="flip-up" data-aos-offset="200" data-aos-duration="1000" class="mb-6"
          >Get in touch or shoot me an email directly on
          <span class="font-bold">houry.k.mohamad@gmail.com</span></span
        >
      </div>
      <div
        data-aos="zoom-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        class="flex flex-col p-8 w-7/12 items-center txt-w"
      >
        <form
          action="https://formspree.io/f/mjvdzypp"
          class="flex flex-col gap-6 w-9/12 items-center max-lg:w-full"
          method="POST"
        >
          <input
            class="border p-4 rounded-xl bg-w w-full outline-0 cursor0"
            name="name"
            id="name"
            type="name"
            placeholder="Name"
          />
          <input
            class="border p-4 rounded-xl bg-w w-full outline-0 cursor0"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            class="border p-4 rounded-xl bg-w w-full outline-0 cursor0"
            placeholder="Message"
            name="message"
          ></textarea>
          <button
            class="border p-4 w-3/6 rounded-lg font-semibold font-lg bg-w cursor0 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.circle-1 {
  box-shadow: inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400, inset -20px 0 30px red,
    inset 20px 0 300px #ff40d6, inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #fbff00,
    10px 0 80px #f55;
  opacity: 1;
  width: 50px;
  position: absolute;
  background: white;
  height: 50px;
  left: 58%;
  top: 22%;
  animation: circle-11 2s infinite;
}

@keyframes circle-11 {
  0% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(-10px);
  }
}

.home {
  background-color: transparent;
  background-image: linear-gradient(180deg, #00000012 60%, #1a191d 100%);
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}
#Home {
  background-image: url(../Images/tamalsen-home-cover.jpg);
  background-position: center center;
  background-size: cover;
}
#name {
  text-shadow: 1px 3px 11px rgba(255, 255, 255, 0.3);
  font-family: 'Poppins', sans-serif;
}
.scroll-down2 {
  width: 30px;
  height: 50px;
  border: 2px solid #ffffff;
  border-radius: 50px;
  cursor: none;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 20px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    transform: translateX(-50%);
    background: #ffffff;
    animation: scrollDown2 1.5s ease infinite;
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 5px;
    width: 6px;
    height: 15px;
    border-radius: 3px;
    transform: translateX(-50%);
    background: #ffffff;
  }
}

@keyframes scrollDown2 {
  0% {
    transform: translate(-50%, 0px);
    opacity: 0;
  }

  50% {
    transform: translate(-50%, 8px);
    opacity: 1;
  }

  100% {
    transform: translate(-50%, 16px);
    opacity: 0;
  }
}

.hello::before {
  animation: fadeIn 1s forwards;
}

.hello::after {
  animation: fadeOut 1s forwards;
}

@keyframes hello {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
import mac from '../Images/—Pngtree—macbook pro 16_9011850.png'

import { ref } from 'vue'
import { scrollTo } from 'vue-scrollto'

export default {
  setup() {
    const scrollToSection = (section) => {
      scrollTo(section, 500, {
        easing: 'ease-in-out'
      })
    }
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
    const projects = ref([
      {
        Id: 1,
        aos: 'slide-left',
        ImgSrc: mac,
        ImgAlt: 'Covid Center — Covid 19 tracker',
        Name: 'Covid Center — Covid 19 tracker',
        Description:
          'Developed a comprehensive COVID-19 tracker, featuring live statistics, news updates, and an interactive quick test. Utilized HTML, CSS, JavaScript, and PHP to create an engaging user interface',
        Link: 'http://hamoudi198.hyperphp.com/'
      },
      {
        Id: 2,
        aos: 'slide-right',
        ImgSrc: mac,
        ImgAlt: 'ShopZone — Ecommerce Website',
        Name: 'ShopZone — Ecommerce Website',
        Description:
          'Created an innovative e-commerce website with a focus on user experience and functionality. Implemented HTML, CSS, JavaScript,  Vue.js and Laravel to deliver a seamless shopping experience.',
        Link: ''
      },
      {
        Id: 3,
        aos: 'slide-left',
        ImgSrc: mac,
        ImgAlt: 'Todo List - App',
        Name: 'Todo List - App',
        Description:
          'The Todo List web application is a user-friendly tool that allows you to effortlessly manage and organize your tasks. With its intuitive interface, you can easily add, edit, complete, and remove tasks, ensuring you stay on top of your daily responsibilities and goals.',
        Link: 'https://mednestle.000webhostapp.com/'
      },
      {
        Id: 4,
        aos: 'slide-right',
        ImgSrc: mac,
        ImgAlt: 'WeatherEase — Weather App',
        Name: 'WeatherEase — Weather App',
        Description:
          'Designed and developed a dynamic weather website utilizing Vue.js and Tailwind CSS, providing users with real-time weather information, intuitive interfaces, and seamless user experience.',
        Link: 'https://weatherease.000webhostapp.com/'
      }
    ])

    return {
      skills,
      projects,
      scrollToSection
    }
  }
}
</script>
