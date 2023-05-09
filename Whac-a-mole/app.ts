// const squares = document.querySelectorAll('.square')
// const mole = document.querySelector('.mole')
// const timeLeft = document.querySelector('#time-left')!
// const score = document.querySelector('#score')!

// let result: number=0;
// let hitPosition:string|null;
// let currentTime:number = 60;
// let timerId:any|null;


// function randomSquare(): void {
//   squares.forEach((square) => {
//     square.classList.remove('mole')
//   })

//   let randomSquare = squares[Math.floor(Math.random() * 9)]
//   randomSquare.classList.add('mole')

//   hitPosition = randomSquare.id
// }

// squares.forEach((square)=> {
//   square.addEventListener('mousedown', () => {
//     if (square.id == hitPosition) {
//       result++;
//       score.textContent = result.toString()
//       hitPosition = null
//     }
//   });
// });

// function moveMole(): void {
//   timerId = setInterval(randomSquare, 500);
// }

// moveMole();

// function countDown(): void {
//  currentTime--;
//  timeLeft.textContent = currentTime.toString()

//  if (currentTime == 0) {
//    clearInterval(countDownTimerId);
//    clearInterval(timerId);
//    alert('GAME OVER! Your final score is ' + result.toString())
//  }

// }

// let countDownTimerId = setInterval(countDown, 1000);

// ----------------------------------------------------
// const squares = document.querySelectorAll('.square');
// const mole = document.querySelector('.mole');
// const timeLeft = document.querySelector('#time-left') as HTMLSpanElement;
// const score = document.querySelector('#score') as HTMLSpanElement;

// let result = 0;
// let hitPosition: string | null;
// let currentTime = 60;
// let timerId: number|null |any;

// function randomSquare(): void {
//   squares.forEach(square => {
//     square.classList.remove('mole');
//   });

//   let randomSquare = squares[Math.floor(Math.random() * 9)];
//   randomSquare.classList.add('mole');

//   hitPosition = randomSquare.id;
// }

// squares.forEach(square => {
//   square.addEventListener('mousedown', () => {
//     if (square.id == hitPosition) {
//       result++;
//       score.textContent = result.toString();
//       hitPosition = null;
//     }
//   });
// });

// function moveMole(): void {
//   timerId = setInterval(randomSquare, 500);
// }

// moveMole();

// function countDown(): void {
//   currentTime--;
//   timeLeft.textContent = currentTime.toString();

//   if (currentTime == 0) {
//     clearInterval(countDownTimerId);
//     clearInterval(timerId);
//     alert('GAME OVER! Your final score is ' + result);
//   }
// }

// let countDownTimerId = setInterval(countDown, 1000);
// ----------------------------------------------------
const squares = document.querySelectorAll<HTMLDivElement>('.square')
const mole = document.querySelector<HTMLDivElement>('.mole')
const timeLeft = document.querySelector<HTMLSpanElement>('#time-left')!
const score = document.querySelector<HTMLSpanElement>('#score')!

let result = 0
let hitPosition: string | null = null
let currentTime = 60
let timerId: any

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  const randomIndex = Math.floor(Math.random() * 9)
  const randomSquare = squares[randomIndex]
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++
      score.textContent = result.toString()
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime.toString()

  if (currentTime === 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId!)
    alert('GAME OVER! Your final score is ' + result)
  }
}

const countDownTimerId = setInterval(countDown, 1000)
