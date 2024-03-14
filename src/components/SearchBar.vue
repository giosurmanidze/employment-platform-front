<template>
  <div class="w-full flex justify-center flex-col items-center">
    <div class="sm:w-[80%] lg:w-[70%] sm:mt-28 md:mt-0">
      <h1 class="sm:text-[2rem] md:text-[2.5rem] text-primary">იპოვე სამსახური აქ!</h1>
      <span class="text-main_text_color text-[1.063rem]"
        >ჩვენს პლატფორმაზე მარტივად შეძლებ პროფესიონალური CV-ს შედგენას, ვაკანსიების
        ადგილმდებარეობით/ფილტრებით მოძიებას და საიტიდან გაუსვლელად CV-ს გაგზავნას</span
      >
      <form class="mt-8 flex w-full drop-shadow-md sm:flex-col md:flex-row">
        <div class="w-full">
          <label for="title" class="absolute t-0 z-20 pl-5 pt-2">ვაკანსიების ძიება</label>
          <input
            id="title"
            name="title"
            placeholder="მაგ:პროგრამისტი"
            class="w-full relative h-20 outline-none pt-5 pl-5 sm:rounded-tl-3xl sm:rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl border-r-2 border-gray-300"
          />
        </div>
        <div class="w-full">
          <label for="location" class="absolute t-0 z-20 pl-5 pt-2">ქალაქი</label>
          <input
            id="location"
            name="location"
            placeholder="მიუთითე სასურველი ლოკაცია"
            class="w-full h-20 outline-none pl-5 pt-5 border-r-2 border-gray-300"
          />
        </div>
        <button
          class="h-20 bg-orange_red_color outline-none p-5 md:rounded-tr-3xl sm:rounded-bl-3xl md:rounded-bl-none sm:rounded-br-3xl flex justify-center items-center"
        >
          <img
            src="@/assets/images/search.png"
            class="sm:hidden md:block"
            width="60"
            height="60"
          />
          <img
            src="@/assets/images/search.png"
            class="sm:block md:hidden"
            width="40"
            height="40"
          />
        </button>
      </form>
    </div>
  </div>
</template>
