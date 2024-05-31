export default class Team {
  constructor() {
    // this - это экземпляр класса Team
    // this.members - это экземпляр класса Set
    this.members = new Set();
  }

  add(character) { // метод экземпляра класса Team
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в списке');
    }
    this.members.add(character); // метод экземпляра класса Set
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  // итератор (задача №1):
  [Symbol.iterator]() {
    let index = -1;
    const list = [...this.members]; // внутри next доступа к this.members уже не будет!

    return {
      next() {
        index += 1;
        return {
          value: list[index],
          done: index >= list.length,
          // знак '>' т.к. next можно вызывать бесконечно и на равенстве не остановится всё
        };
      },
    };
  }

  // генератор (задача №2):
  * [Symbol.iterator]() {
    // это генератор; здесь есть доступ к this; надо только верно написать yield
    /* eslint-disable-next-line */
    for (const obj of [...this.members]) {
      yield obj;
    }
  }
}
