class Key {
  constructor(private signature: number) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  public door: boolean = false;
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
