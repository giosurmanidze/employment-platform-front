<template>
  <div class="w-full flex justify-center flex-col items-center">
    <div class="w-[60rem]">
      <h1 class="text-[2.5rem] text-primary">იპოვე სამსახური აქ!</h1>
      <span class="text-main_text_color text-[1.063rem]"
        >ჩვენს პლატფორმაზე მარტივად შეძლებ პროფესიონალური CV-ს შედგენას, ვაკანსიების
        ადგილმდებარეობით/ფილტრებით მოძიებას და საიტიდან გაუსვლელად CV-ს გაგზავნას</span
      >
      <form class="mt-8 flex w-full drop-shadow-md">
        <div class="w-full">
          <label for="search_bar " class="absolute t-0 z-20 pl-5 pt-2">ვაკანსიების ძიება</label>
          <input
            id="search_bar"
            placeholder="მაგ:პროგრამისტი"
            class="w-full relative h-20 outline-none opacity-50 pt-5 pl-5 rounded-tl-3xl rounded-bl-3xl border-r-2 border-gray-300"
          />
        </div>
        <div class="w-full">
          <label for="search_bar " class="absolute t-0 z-20 pl-5 pt-2">ქალაქი</label>
          <input
            id="search_bar"
            placeholder="მიუთითე სასურველი ლოკაცია"
            class="w-full h-20 outline-none pl-5 opacity-50 pt-5 border-r-2 border-gray-300"
          />
        </div>
        <button
          class="h-20 bg-orange_red_color outline-none p-5 rounded-tr-3xl rounded-br-3xl flex justify-center items-center"
        >
          <img src="@/assets/images/search.png" class="z-50" width="60" height="60" />
        </button>
      </form>
    </div>
  </div>
</template>
