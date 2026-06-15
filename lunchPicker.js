let lunches = [];

function addLunchToEnd(lunches, item) {
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches;
}


function addLunchToStart(lunches, item) {
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if(lunches.length) {
    const removedItem = lunches.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
  }
}

function removeFirstLunch(lunches) {
  if(lunches.length) {
    const removedItem = lunches.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
  }
}

function getRandomLunch(lunches) {
  if(lunches.length) {
    const randomIndex = Math.round(Math.random() * (lunches.length - 1 - 0) + 0);
    const randoItem = lunches[randomIndex];
    console.log(`Randomly selected lunch: ${randoItem}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(lunches) {
  if(lunches.length) {
    console.log(`Menu items: ${lunches.join(", ")}`);  
  } else {
    console.log("The menu is empty.");
  }
}
