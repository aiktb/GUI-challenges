<script setup lang="ts">
import "@fontsource/flow-block/400.css";
</script>

<template>
  <div
    class="font-block relative row-start-1 grid min-h-screen w-screen grid-cols-[min-content_[stack]_minmax(0,1fr)] grid-rows-[[stack]_minmax(0,1fr)] text-base"
  >
    <aside
      id="sidenav-open"
      :class="[
        'invisible sticky top-0 z-10 max-h-screen overflow-x-hidden overflow-y-auto overscroll-contain target:visible sm:visible sm:static',
        '-translate-[110vw] transition-transform duration-700 ease-in-out target:translate-0 sm:translate-0',
        'grid grid-cols-3 [grid-area:stack] sm:col-start-1 sm:block sm:[grid-area:unset]',
      ]"
    >
      <nav
        class="col-span-2 flex flex-col gap-1 bg-[#303030] p-6 in-target:shadow-2xl sm:bg-transparent"
      >
        <h4>My</h4>
        <a class="text-[#ff7ac1] hover:text-[hsl(328_100%_54%)]" href="#"
          >Dashboard</a
        >
        <a class="text-[#ff7ac1] hover:text-[hsl(328_100%_54%)]" href="#"
          >Profile</a
        >
        <a class="text-[#ff7ac1] hover:text-[hsl(328_100%_54%)]" href="#"
          >Preferences</a
        >
        <a class="text-[#ff7ac1] hover:text-[hsl(328_100%_54%)]" href="#"
          >Archive</a
        >

        <h4>Settings</h4>
        <a class="text-[#ff7ac1] hover:text-[hsl(328_100%_54%)]" href="#"
          >Accessibility</a
        >
        <a class="text-[#ff7ac1] hover:text-[hsl(328_100%_54%)]" href="#"
          >Theme</a
        >
        <a class="text-[#ff7ac1] hover:text-[hsl(328_100%_54%)]" href="#"
          >Admin</a
        >
      </nav>

      <a
        href="#"
        class="col-start-3"
        id="sidenav-close"
        title="Close Menu"
        aria-label="Close Menu"
        onchange="history.go(-1)"
      ></a>
    </aside>
    <main class="px-6 py-2 [grid-area:stack]">
      <header class="flex items-center justify-between">
        <a
          href="#sidenav-open"
          id="sidenav-button"
          class="grid size-16 place-content-center sm:hidden"
          title="Open Menu"
          aria-label="Open Menu"
        >
          <i class="i-mdi-menu size-10" />
        </a>
        <h1 class="text-4xl">Site Title</h1>
      </header>

      <article class="grid gap-[2ch] rounded-xl bg-[#303030] p-[2ch]">
        <h2 class="text-5xl">Totam Header</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          consectetur, necessitatibus velit officia ut impedit veritatis
          temporibus soluta? Totam odit cupiditate facilis nisi sunt hic
          necessitatibus voluptatem nihil doloribus! Enim.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum,
          amet odio explicabo voluptas eos cum libero, ex esse quasi optio
          incidunt soluta eligendi labore error corrupti! Dolore, cupiditate
          porro.
        </p>

        <h3 class="text-2xl">Subhead Totam Odit</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum,
          amet odio explicabo voluptas eos cum libero, ex esse quasi optio
          incidunt soluta eligendi labore error corrupti! Dolore, cupiditate
          porro.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum,
          amet odio explicabo voluptas eos cum libero, ex esse quasi optio
          incidunt soluta eligendi labore error corrupti! Dolore, cupiditate
          porro.
        </p>

        <h3 class="text-2xl">Subhead</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum,
          amet odio explicabo voluptas eos cum libero, ex esse quasi optio
          incidunt soluta eligendi labore error corrupti! Dolore, cupiditate
          porro.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rerum,
          amet odio explicabo voluptas eos cum libero, ex esse quasi optio
          incidunt soluta eligendi labore error corrupti! Dolore, cupiditate
          porro.
        </p>
      </article>
    </main>
  </div>
</template>
