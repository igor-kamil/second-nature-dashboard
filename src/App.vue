<template>
  <img alt="Vue logo" src="./assets/logo.svg" class="mx-auto" />

  <div class="grid grid-cols-2 gap-4 p-10">
    <div v-for="(game, index) in games" :key="game.name">
      <div class="bg-purple-800/75">
        <GameItem
          :name="game.name"
          :imageSrc="game.imageSrc"
          :authors="game.authors"
          :class="{
            'bg-gray-800 translate-x-2 translate-y-2': index === focused,
          }"
        >
          {{ game.description }}
        </GameItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import GameItem from "./components/GameItem.vue";
import { exec } from "child_process";

const games = [
  {
    name: "Budova(nie) Entity",
    imageSrc: "budovanie.png",
    description:
      "Budova(nie) entity je hra, v ktorej sa dozvedáš o spomienkach a histórii budovy, ktorá to v minulosti nemala ľahké. Vytvor si vlastný názor a porozmýšľaj o jej osude.",
    authors: "Petra Kořenková, Kristian Shofranko, Dominik Devečka",
    gamePath: "open /Applications/LittleMousesEncyclopedia.app",
  },
  {
    name: "Paper factory",
    imageSrc: "budovanie.png",
    description:
      "Izometrický environment je simuláciou balansu medzi industriálnou výrobou a pôvodnou prírodou. Abstrahovanie rastu a nepomeru do vizuálnej čistej hry. Industrializácia miest ponúka rozvoj, pre pochopenie exponencionálneho rastu je možné simulovať rôzne scenáre aktivity.",
    authors: "Leonard Lofaj, Prokop Findeis",
    gamePath: "open /Applications/LittleMousesEncyclopedia.app",
  },
  {
    name: "Luhy",
    imageSrc: "luhy.png",
    description:
      "Simulátor chodenia v prostredí Trenčianskych Luhov. V prostredí je možné prežiť problematiku približovania sa k chráneným živočíchom, premenu vzácnych biotopov na sklad odpadu.",
    authors: "Victoria Ann Bračoková, Ján Konečný, Miroslav Čuridlo",
    gamePath: "open /Applications/LittleMousesEncyclopedia.app",
  },
  {
    name: "440",
    imageSrc: "404.png",
    description:
      "V 3D interaktívnej hre sa môžeme prechádzať prostredím skládky chemického odpadu z bývalých Chemických závodov Juraja Dimitrova v bratislavskej mestskej časti Vrakuňa v období neskoršieho antropocénu, v ktorom už georeliéf nie je tvorený len prírodnými horninami, ale obsahuje stopy a produkty ľudských činností.",
    authors: "Adela Lujza Lučeničová, Natália Zajáčiková, Emma Záhradníková",
    gamePath: "open /Applications/LittleMousesEncyclopedia.app",
  },
];
const focused = ref(0);
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
    console.log(e.keyCode);
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
    if (gamepadIndex.value !== null) {
      const myGamepad = navigator.getGamepads()[gamepadIndex.value];
      myGamepad.buttons
        .map((e) => e.pressed)
        .forEach((isPressed, buttonIndex) => {
          if (isPressed) {
            console.log(`Button ${buttonIndex} is pressed`);
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
              case 8: // select
                launchGame(focused.value);
                break;
              case 9: // start
                launchGame(focused.value);
                break;
            }
          }
        });
    }
  }, 200); // 5 times per second

  const launchGame = (index) => {
    // console.log(`spusti: ${games[index].gamePath}`);
    exec(games[index].gamePath);
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
