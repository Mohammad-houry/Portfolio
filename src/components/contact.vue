<template>
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
</template>
