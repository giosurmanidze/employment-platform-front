<template>
  <footer>
    <div
      class="w-[80%] mx-auto flex sm:flex-col md:flex-row justify-between items-center py-10 h-auto sm:gap-5 md:gap-0"
    >
      <div class="flex flex-col gap-3 sm:w-full md:w-1/2">
        <div class="flex gap-2">
          <img src="@/assets/images/app-logo.png" width="50" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-primary"
            >EmploWeb</span
          >
        </div>
        <p>
          Awork-ი სამუშაოს მაძიებლებსა და კომპანიებს ერთმანეთთან აკავშირებს. კომპანიებს
          აქვთ შესაძლებლობა ბიზნეს პროფილის მეშვეობით ციფრულად მართონ HR პროცესები, ხოლო
          მომხმარებლებს შეუძლიათ მარტივად მოძებნონ ვაკანსიები და პლატფორმიდან გაუსვლელად
          გააგზავნონ აპლიკაციები.
        </p>
      </div>
      <div
        class="sm:w-full md:w-1/2 flex flex-col gap-3 md:items-end justify-center sm:items-center"
      >
        <h3 class="text-primary text-lg">ბმულები</h3>
        <RouterLink to="" class="hover:underline text-primary"> ვაკანსიები</RouterLink>
        <RouterLink to="" class="hover:underline text-primary">განათლება </RouterLink>
        <RouterLink to="" class="hover:underline text-primary">ფასები</RouterLink>
      </div>
    </div>
    <div class="text-center border-t-[1px] border-gray-200 py-2">
      <span class="text-primary opacity-70 text-sm">
        2024 Emploweb.ge ყველა უფლება დაცულია</span
      >
    </div>
  </footer>
</template>
