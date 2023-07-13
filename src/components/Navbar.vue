<template>
  <nav>
    <div
      class="flex w-full cursor-none fixed w-full border-gray-200 font-sans select-none pt-6 px-12 text-white text-xl flex-wrap z-[999] items-center hi justify-between p-4"
    >
      <button
        class="w-20 transform hover:rotate-180 transition duration-300 hover:filter hover:brightness-125 cursor0"
        @click.prevent="scrollToSection('#Home')"
      >
        <img src="../Images/image.png" alt="MH Icon" />
      </button>
      <div class="flex items-center max-lg:hidden">
        <button
          @click.prevent="scrollToSection('#About')"
          class="py-2 px-4 rounded font-medium cursor0"
          id="lisa"
        >
          About Me
        </button>

        <button
          @click.prevent="scrollToSection('#Project')"
          class="py-2 px-4 rounded font-medium cursor0"
          id="lisa"
        >
          Projects
        </button>
        <a
          target="_blank"
          href="https://www.canva.com/design/DAFXFvCDOvA/WExr83Iam5KVlu9vAcFlcA/edit?utm_content=DAFXFvCDOvA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          class="py-2 px-4 rounded font-medium cursor0"
          id="lisa"
        >
          Resume
        </a>
        <button
          @click.prevent="scrollToSection('#Contact')"
          class="py-2 px-4 rounded font-medium cursor0"
          id="lisa"
        >
          Contact Me
        </button>
      </div>
      <button @click="openMenu()" class="lg:hidden">
        <i class="fa fa-bars menu-icon fa-xl"></i>
      </button>
      <div
        class="fixed top-0 right-[-100%] w-full bg-white h-screen text-center z-[999] dark:bg-black lg:hidden"
        id="container"
      >
        <div
          class="text-2xl float-right m-5 text-black rotate-45 cursor-pointer text-6xl"
          @click="closeMenu()"
        >
          +
        </div>
        <ul
          class="absolute top-1/2 left-2/4 transform -translate-x-2/4 -translate-y-2/4 list-none opacity-0 text-center text-black"
          id="menu"
        >
          <li
            class="my-4 hover:text-white transition duration-500 hover:scale-125 hover:bg-black p-4 text-3xl"
          >
            <button @click.prevent="scrollToSection('#Home'), closeMenu()" to="/">
              <span>Home</span>
            </button>
          </li>
          <li
            class="my-4 hover:text-white transition duration-500 hover:scale-125 hover:bg-black p-4 text-3xl"
          >
            <button @click.prevent="scrollToSection('#About'), closeMenu()" to="/About">
              <span>About Me</span>
            </button>
          </li>
          <li
            class="my-4 hover:text-white transition duration-500 hover:scale-125 hover:bg-black p-4 text-3xl"
          >
            <button @click.prevent="scrollToSection('#Project'), closeMenu()" to="/Projects">
              <span>Projects</span>
            </button>
          </li>
          <li
            class="my-4 hover:text-white transition duration-500 hover:scale-125 hover:bg-black p-4 text-3xl"
          >
            <a
              target="_blank"
              href="https://www.canva.com/design/DAFXFvCDOvA/WExr83Iam5KVlu9vAcFlcA/edit?utm_content=DAFXFvCDOvA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              @click="closeMenu()"
              to="/Resume"
            >
              <span>Resume</span>
            </a>
          </li>
          <li
            class="my-4 hover:text-white transition duration-500 hover:scale-125 hover:bg-black p-4 text-3xl"
          >
            <button @click.prevent="scrollToSection('#Contact'), closeMenu()" to="/Contact">
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div @click.prevent="scrollToSection('#Home')" class="bg-white fixed scroll-up p-4 mr-4 mb-4">
    <i class="fa-solid fa-arrow-up fa-bounce fa-xl"></i>
  </div>
</template>
<style scoped>
#lisa {
  position: relative;
  transition: all 0.5s;
}
#lisa:hover {
  color: rgb(37 99 235);
  z-index: 1;
}
#lisa:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0%;
  color: transparent;
  background: rgb(37 99 235);
  height: 1px;
  text-align: left;
  margin: 0;
  opacity: 0;
}
#lisa:hover:after {
  width: 100%;
  z-index: -10;
  animation: fill 0.5s forwards;
  -webkit-animation: fill 0.5s forwards;
  -moz-animation: fill 0.5s forwards;
  opacity: 1;
}
#menu {
  transform: translate(-50%, -50%);
  transition: all 1s ease;
}

#container {
  transition: all 0.6s ease;
}
.scroll-up {
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
}
.show {
  opacity: 1;
  visibility: visible;
}
</style>
<script>
import { scrollTo } from 'vue-scrollto'

export default {
  methods: {
    scrollToSection(section) {
      scrollTo(section, 500, {
        easing: 'ease-in-out'
      })
    }
  },
  setup() {
    const openMenu = () => {
      document.getElementById('container').style.right = '0%'
      document.getElementById('menu').style.opacity = '1'
    }
    const closeMenu = () => {
      document.getElementById('container').style.right = '-100%'
      document.getElementById('menu').style.opacity = '0'
    }

    return {
      openMenu,
      closeMenu
    }
  }
}
</script>
