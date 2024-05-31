import Bowman from './characterHeirs/Bowman';
import Daemon from './characterHeirs/Daemon';
import Magician from './characterHeirs/Magician';
import Swordsman from './characterHeirs/Swordsman';
import Undead from './characterHeirs/Undead';
import Zombie from './characterHeirs/Zombie';
import Team from './Team';

const bowman = new Bowman('лучник'); // { name: 'лучник', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 }
const daemon = new Daemon('демон'); // { name: 'демон', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40 }
const magician = new Magician('маг'); // { name: 'маг', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 }
const swordsman = new Swordsman('мечник'); // { name: 'мечник', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 }
const undead = new Undead('нежить'); // { name: 'нежить', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 }
const zombie = new Zombie('зомби'); // { name: 'зомби', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 }

const teamSet = new Team(); // экземпляр класса Team (пустой set)
teamSet.addAll(bowman, daemon, magician, swordsman, undead, zombie); // добавление персонажей (6шт)

/* eslint-disable-next-line */
for (const obj of teamSet) {
  console.log(obj);
}
