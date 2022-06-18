<template>
  <img alt="Vue logo" src="./assets/logo.svg" class="mx-auto">

  <div class="grid grid-cols-2 gap-4 p-10">
    <GameItem name="Budova(nie) Entity" imageSrc="budovanie.png" authors="Petra Kořenková, Kristian Shofranko, Dominik Devečka">
      Budova(nie) entity je hra, v ktorej sa dozvedáš o spomienkach a histórii budovy, ktorá to v minulosti nemala ľahké. Vytvor si vlastný názor a porozmýšľaj o jej osude.
    </GameItem>

    <GameItem name="Paper factory" imageSrc="budovanie.png" authors="Leonard Lofaj, Prokop Findeis">
      Izometrický environment je simuláciou balansu medzi industriálnou výrobou a pôvodnou prírodou. Abstrahovanie rastu a nepomeru do vizuálnej čistej hry. Industrializácia miest ponúka rozvoj, pre pochopenie exponencionálneho rastu je možné simulovať rôzne scenáre aktivity.
    </GameItem>

    <GameItem name="Luhy" imageSrc="luhy.png" authors="Victoria Ann Bračoková, Ján Konečný, Miroslav Čuridlo">
      Simulátor chodenia v prostredí Trenčianskych Luhov. V prostredí je možné prežiť problematiku približovania sa k chráneným živočíchom, premenu vzácnych biotopov na sklad odpadu.
    </GameItem>

    <GameItem name="440" imageSrc="404.png" authors="Adela Lujza Lučeničová, Natália Zajáčiková, Emma Záhradníková">
      V 3D interaktívnej hre sa môžeme prechádzať prostredím skládky chemického odpadu z bývalých Chemických závodov Juraja Dimitrova v bratislavskej mestskej časti Vrakuňa v období neskoršieho antropocénu, v ktorom už georeliéf nie je tvorený len prírodnými horninami, ale obsahuje stopy a produkty ľudských činností.
    </GameItem>
</div>
</template>

<script>
import GameItem from './components/GameItem.vue'

export default {
  name: 'App',
  components: {
    GameItem
  }
}
</script>