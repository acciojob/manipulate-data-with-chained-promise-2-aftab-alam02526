//your JS code here. If required.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getNumbers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  });
}

const outputDiv = document.getElementById("output");


getNumbers()
  .then(numbers => {
    const evens = numbers.filter(num => num % 2 === 0);

    return delay(1000).then(() => {
      outputDiv.textContent = evens; // update UI with [2,4]
      return evens;
    });
  })
  .then(evens => {
    const doubled = evens.map(num => num * 2);

    return delay(2000).then(() => {
      outputDiv.textContent = doubled;
      return doubled;
    });
  })
  .catch(err => console.error(err));
