<template>
  <div>
    <nav id="menu" class="flex absolute w-full hidden items-center justify-between flex-wrap bg-teal-500 pb-4 pt-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Grégory Devant</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Accueil
          </a>
          <a href="#technologies" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Technologies
          </a>
          <a href="#portofolio" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Réalisations
          </a>
          <a href="#a-propos" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            A Propos
          </a>
          <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
    <slot></slot>
    <footer></footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

</style>
