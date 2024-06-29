// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Append a cat at the end of the cats array
const destructivelyAppendCat = (name) => {
  cats.push(name);
};

// Prepend a cat to the beginning of the cats array
const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};

// Remove the last cat from the cats array
const destructivelyRemoveLastCat = () => {
  cats.pop();
};

// Remove the first cat from the cats array
const destructivelyRemoveFirstCat = () => {
  cats.shift();
};

// Append a cat to the cats array and return a new array
const appendCat = (name) => {
  return [...cats, name];
};

// Prepend a cat to the cats array and return a new array
const prependCat = (name) => {
  return [name, ...cats];
};

// Remove the last cat and return a new array
const removeLastCat = () => {
  return cats.slice(0, -1);
};

// Remove the first cat and return a new array
const removeFirstCat = () => {
  return cats.slice(1);
};

