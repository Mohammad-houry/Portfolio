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
</template>

<script>
import { scrollTo } from 'vue-scrollto'

export default {
  setup() {
    const scrollToSection = (section) => {
      scrollTo(section, 500, {
        easing: 'ease-in-out'
      })
    }

    return {
      scrollToSection
    }
  }
}
</script>

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
