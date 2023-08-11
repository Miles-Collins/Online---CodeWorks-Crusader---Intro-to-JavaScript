// SECTION HERO
let heroName = "The CodeWorks Crusader"
let heroHealth = 100
let hasHealthPotion = false

// Refactored version of above
const hero = {
  name: "The CodeWorks Crusader",
  health: 100,
  hasHealthPotion: false
}

// SECTION VILLAIN
let villainName = "The Coding Virus"
let villainHealth = 150

// Refactored version of above
const villain = {
  name: "The Coding Virus",
  health: 250
}

function pageLoad() {
   window.alert(`In the bustling city of Technopolis, where cutting-edge technology is the heartbeat of daily life, a hero known as The CodeWorks Crusader emerges to protect its digital utopia. Gifted with unparalleled coding skills and armed with a suit embedded with the latest technological advancements, The CodeWorks Crusader dedicates his life to safeguarding the city from any digital threats that may arise.\n
  One day, Technopolis faces an unprecedented danger as a malevolent and elusive entity called The Coding Virus starts infiltrating the city's digital infrastructure. The virus, a sentient and adaptive being, swiftly evades conventional defenses and poses a grave risk to the very core of the metropolis. Panic spreads among the city's inhabitants as their digital lives hang in the balance.\n
  Determined to quell the rising storm, The CodeWorks Crusader dives headfirst into the virtual world, unraveling the intricate patterns and evolving tactics of The Coding Virus. Each encounter presents a new challenge, pushing him to the limits of his coding prowess. `);
   window.confirm("Will you have what it takes to vanquish The Coding Virus!?");
}

pageLoad()

function attack() {
  heroAttack()
  villainAttack()
  rollForHealthPotion()
  drawHealth()
}

  function heroAttack() {
    if (hero.health <= 0) {
      return alert("The CodeWorks Crusader is dead.");
    }

    if (villain.health <= 0) {
      return alert(
        "The CodeWorks Crusader vanquished The Coding Virus, no reason to beat a dead horse."
      );
    }

    let heroAttack = Math.floor(Math.random() * 11);
    // console.log('[HERO ATTACK]', heroAttack)

    heroAttack == 0 && alert("💢 The CodeWorks Crusader missed! 💢")
    // If ^^^^^^^^^^^   return ^^^^^^^^^

    // console.log('[HERO HEALTH]', heroHealth)

    // Decrease the total villain health
    villain.health -= heroAttack;

    if(villain.health <= 0) {
      villain.health = 0
      alert("🎉 THE CODEWORKS CRUSADER VANQUISHED THE CODING VIRUS!!!! YOU WON 🎉")
    }
  }

  function villainAttack() {
    if (villainHealth <= 0 || hero.health <= 0) {
      return;
    }

    let villainAttack = Math.floor(Math.random() * 16);

    // console.log('[ABOUT TO ATTACK VILLAIN]', villainHealth)

    villainAttack >= 12 &&
      alert(
        `🤯 The Coding Virus hit you for ${villainAttack}, a critical blow!!! 🤯`
      );

    hero.health -= villainAttack;

    console.log(hero.health);

    if (hero.health <= 0) {
      hero.health = 0
      return alert(
        "Oh no, The CodeWorks Crusader was slain by The Coding Virus. RIP ..."
      );
    }

    // console.log('[ATTACKED VILLAIN]', villainHealth)
  }

  function rollForHealthPotion() {
    let rollForHealth = Math.floor(Math.random() * 10) + 1
    if(rollForHealth > 8) {
      hero.hasHealthPotion = true
      alert("🧪 You found a health potion! 🧪")
    }
  }

  function drawHealth() {
   drawHeroHealth()
   drawVillainsHealth()
  }

  function drawHeroHealth() {
     // SECTION HERO
    const heroHealthElem = document.getElementById("heroHealth");
    // console.log('[HERO HEALTH ELEM]', heroHealthElem)
    heroHealthElem.innerText = `${hero.health > 0 ? hero.health : "☠️☠️☠️"}`;
    //                             ^ CONDITION ^  DO  ifTrue   else  ifFalse
    // If the heroes health is greater than zero, return hero.health else, return "☠️☠️☠️"
    if(hero.health <= 0) {
      document.getElementById("codeworksCrusader").classList.add("deadCrusader")
      // console.log(document.getElementById("codeworksCrusader"));
    }
  }

  function drawVillainsHealth() {
     // SECTION VILLAIN
    const villainHealthElem = document.getElementById("villainHealth");
    villainHealthElem.innerText = `${villain.health > 0 ? villain.health : "☠️☠️☠️"}`;

    if(villain.health <= 0) {
      document.getElementById("codingVirus").classList.add("deadVirus")
    }
  }

  function drinkPotion() {
    if(!hero.hasHealthPotion) {
      return alert('Sorry, you do not have a health potion 🧪.')
    } else if(hero.health >= 100) {
       return alert("🧪 You can not drink a potion if your health is full! 🧪");
    } else if(hero.health <= 0) {
       return alert("☠️ You can't drink, if you're dead! ☠️");
    } else {
      setTimeout(healthUp, 3000)
    }
  }

  function healthUp() {
    hero.health += 25;
    hero.health > 100 && (hero.health = 100);
    drawHealth();
    hero.hasHealthPotion = false;
  } 