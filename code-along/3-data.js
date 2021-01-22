// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
let profile = {
  name: 'Brian',
  location: { city: 'Chicago', state: 'Illinois' },
  timeline: [
    { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
    { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
    { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
  ]
}
console.log(profile.timeline[0].what) // insert this down in the { in the div class for output}

/* let profile = {
  name: 'Alex',
  location: 'Chicago',
  status: 'Learning in class'
}

let brian = {
  name: 'Brian',
  location: 'Chicago',
}

// console.log(profile.status)

let shoppingList = ['eggs', 'orange juice', 'ice cream']
shoppingList.push('lottery ticket')
console.log(shoppingList)

let lotteryTicket = [4, 8, 15, 16, 23, 42]
console.log(lotteryTicket[0]) */




//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

// template literals support HTML too!
// output = `
  // <div class="text-4xl">${profile.status}</div>
// `

output = `
   <div class="text-4xl">${profile.status}</div>
`

/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output