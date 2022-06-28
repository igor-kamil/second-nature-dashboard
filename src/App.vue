<template>
  <img
    alt="Second Nature"
    src="./assets/logo.svg"
    class="mx-auto mt-4 2xl:mt-8 2xl:mb-2 w-[36rem]"
  />

  <div class="grid grid-cols-2 gap-4 p-10 2xl:px-24 2xl:gap-10 mt-auto">
    <div v-for="(game, index) in games" :key="game.name">
      <div class="bg-green-800/75">
        <GameItem
          :name="game.name"
          :imageSrc="game.imageSrc"
          :videoSrc="game.videoSrc"
          :authors="game.authors"
          :isFocused="index === focused"
          :class="{
            'bg-gray-800 translate-x-2 translate-y-2': index === focused,
          }"
        >
          {{ game.description }}
        </GameItem>
      </div>
    </div>
  </div>

  <div class="mx-auto text-center text-gray-400 pb-2 text-sm">
    Stlač
    <span
      class="bg-gray-700 rounded-xl text-blue-400 px-2 py-1 text-xs font-bold"
      >A</span
    >
    pre štart
  </div>

  <div
    class="fixed inset-0 z-50 flex justify-center items-center"
    v-if="loading"
  >
    <div class="bg-black opacity-70 absolute inset-0" />
    <svg
      role="status"
      class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import GameItem from "./components/GameItem.vue";
import { exec } from "child_process";

const games = [
  {
    name: "Budova(nie) Entity",
    imageSrc: "budovanie_entity/preview.png",
    videoSrc: "budovanie_entity/preview.mp4",
    description:
      "Na každú budovu je nazerané inak. Niektoré zostanú nepovšimnuté celú svoju existenciu a iné rozvíria debaty na niekoľko desaťročí. Príď sa poprechádzať medzi spomienkami na takú, ktorá to počas svojho života nemala ľahké. Konfrontuj sa rôznymi názormi na ňu a zaži cestu budovania entity.",
    authors: "Petra Kořenková, Kristian Shofranko, Dominik Devečka",
    gamePath:
      "/Applications/LittleMousesEncyclopedia.app/Contents/MacOS/LittleMousesEncyclopedia",
  },
  {
    name: "440",
    imageSrc: "404/preview.jpeg",
    videoSrc: "404/preview.mp4",
    description:
      "V 3D interaktívnej hre sa môžeme prechádzať prostredím skládky chemického odpadu z bývalých Chemických závodov Juraja Dimitrova v bratislavskej mestskej časti Vrakuňa v období neskoršieho antropocénu, v ktorom už georeliéf nie je tvorený len prírodnými horninami, ale obsahuje stopy a produkty ľudských činností.",
    authors: "Adela Lujza Lučeničová, Natália Zajáčiková, Emma Zahradníková",
    gamePath:
      "/Applications/LittleMousesEncyclopedia.app/Contents/MacOS/LittleMousesEncyclopedia",
  },
  {
    name: "Paper factory",
    imageSrc: "budovanie.png",
    description:
      "Izometrický environment je simuláciou balansu medzi industriálnou výrobou a pôvodnou prírodou. Abstrahovanie rastu a nepomeru do vizuálnej čistej hry. Industrializácia miest ponúka rozvoj, pre pochopenie exponencionálneho rastu je možné simulovať rôzne scenáre aktivity.",
    authors: "Leonard Lofaj, Prokop Findeis",
    gamePath:
      "/Applications/LittleMousesEncyclopedia.app/Contents/MacOS/LittleMousesEncyclopedia",
  },
  {
    name: "Luhy",
    imageSrc: "luhy.png",
    description:
      "Simulátor chodenia v prostredí Trenčianskych Luhov. V prostredí je možné prežiť problematiku približovania sa k chráneným živočíchom, premenu vzácnych biotopov na sklad odpadu.",
    authors: "Victoria Ann Bračoková, Ján Konečný, Miroslav Čuridlo",
    gamePath:
      "/Applications/LittleMousesEncyclopedia.app/Contents/MacOS/LittleMousesEncyclopedia",
  },
];
const focused = ref(0);
const loading = ref(false);
let gamepadIndex = ref(null);

onMounted(() => {
  window.addEventListener("gamepadconnected", (event) => {
    console.log("A gamepad connected:");
    gamepadIndex.value = event.gamepad.index;
  });
  window.addEventListener("gamepaddisconnected", () => {
    gamepadIndex.value = null;
  });
  window.addEventListener("keypress", (e) => {
    // console.log(e.keyCode);
    switch (e.keyCode) {
      case 97: // left
        left();
        break;
      case 100: //right
        right();
        break;
      case 119: // up
        up();
        break;
      case 115: // down
        down();
        break;
      case 13: // enter
        launchGame(focused.value);
        break;
    }
  });

  const mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  setInterval(() => {
    if (gamepadIndex.value !== null && !loading.value) {
      const myGamepad = navigator.getGamepads()[gamepadIndex.value];
      myGamepad.buttons
        .map((e) => e.pressed)
        .forEach((isPressed, buttonIndex) => {
          if (isPressed) {
            // console.log(`Button ${buttonIndex} is pressed`);
            switch (buttonIndex) {
              case 14: // left
                left();
                break;
              case 15: //right
                right();
                break;
              case 12: // up
                up();
                break;
              case 13: // down
                down();
                break;
              case 8: // start
              case 9:
              case 0:
                launchGame(focused.value);
                break;
            }
          }
        });

      if (myGamepad.axes[0] < -0.5) left();
      if (myGamepad.axes[0] > 0.5) right();
      if (myGamepad.axes[1] < -0.5) up();
      if (myGamepad.axes[1] > 0.5) down();
    }
  }, 200); // 5 times per second

  const launchGame = (index) => {
    // console.log(`spusti: ${games[index].gamePath}`);
    loading.value = true;
    let child = exec(games[index].gamePath);
    child.on("close", function () {
      loading.value = false;
    });
  };

  const up = () => {
    focused.value = focused.value - 2;
    focused.value = mod(focused.value, 4);
  };

  const down = () => {
    focused.value = focused.value + 2;
    focused.value = mod(focused.value, 4);
  };

  const left = () => {
    focused.value = focused.value - 1;
    focused.value = mod(focused.value, 4);
  };

  const right = () => {
    focused.value = focused.value + 1;
    focused.value = mod(focused.value, 4);
  };
});
</script>
