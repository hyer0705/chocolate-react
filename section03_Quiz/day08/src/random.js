import Chance from "chance";
const chance = new Chance();

export function getRandomName() {
  return chance.name();
}

export function getRandomEmail() {
  return chance.email();
}

export function getRandomBirthday() {
  return chance.birthday();
}
