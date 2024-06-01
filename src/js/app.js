import Bowman from './characterHeirs/Bowman';
import Daemon from './characterHeirs/Daemon';
import Magician from './characterHeirs/Magician';
import Swordsman from './characterHeirs/Swordsman';
import Undead from './characterHeirs/Undead';
import Zombie from './characterHeirs/Zombie';
import Team from './Team';
import canIterate from './canIterate';

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

const generator = teamSet[Symbol.iterator]();

console.log('generator.next(): ', generator.next()); // {value: Bowman, done: false}
console.log('generator.next(): ', generator.next()); // {value: Daemon, done: false}
console.log('generator.next(): ', generator.next()); // {value: Magician, done: false}
console.log('generator.next(): ', generator.next()); // {value: Swordsman, done: false}
console.log('generator.next(): ', generator.next()); // {value: Undead, done: false}
console.log('generator.next(): ', generator.next()); // {value: Zombie, done: false}
console.log('Лишний generator.next(): ', generator.next()); // {value: undefined, done: true}

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log('Лишний вызов: ', generator.next().value);

console.log('"Netology": ', canIterate('Netology')); // true
console.log('[3, 88, 74, 9, 35]: ', canIterate([3, 88, 74, 9, 35])); // true
console.log('new Map(): ', canIterate(new Map())); // true
console.log('new Set(): ', canIterate(new Set())); // true
console.log('{1: true, 2: false}: ', canIterate({})); // false
console.log('null: ', canIterate(null)); // false
console.log('undefined: ', canIterate(undefined)); // false
console.log('0: ', canIterate(0)); // false
console.log('10: ', canIterate(10)); // false
console.log('teamSet: ', canIterate(teamSet)); // true
