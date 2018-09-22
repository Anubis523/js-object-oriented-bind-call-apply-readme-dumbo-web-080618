// // // use this to copy code snippets or us your browser's console
// // function greet() {
// //   console.log(`my name is ${this.name}, hi!`);
// // }

// let sally = { name: 'Sally' };
// let bob = { name: 'Bob' }
// // greet.call(sally)

// function greet(customerOne, customerTwo) {
//   console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
// }

// greet.call(bob, 'Terry', 'Johnny')
// greet.apply(sally, ['Terry', 'Johnny'])

// function greet(customer) {
//   console.log(`Hi ${customer}, my name is ${this.name}!`);
// }


// let newGreet = greet.bind(sally);

// newGreet('Bob')

// greet('Bob')
// greet.call(bob, 'James')

class Event {
  constructor(title, keywords) {
      this.title = title;
      this.keywords = keywords;
  }
}

class User {
  constructor(name, interests) {
      this.name = name;
      this.interests = interests;
  }
  matchInterests(event) {
    return event.keywords.some(word => this.interests.includes(word))

    // console.log(`this is defined: ${this}`)
    //   return event.keywords.some(function(word) {
    //       console.log(`This is defined as: ${this}`)
    //       return this.interests.includes(word);
    //   }.bind(this));
  }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

console.log(billy.matchInterests(freeMusic));
