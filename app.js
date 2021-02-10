let catName = "Mr. CatFace"
let currentCatMood = "Happy"
let currentCatImg = 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9'
let pets = 0



// Var hoisted the variable so it is available global
let moods = [
  {
    img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9",
    status: "Happy"
  },
  {
    img: "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs=",
    status: "Irritated"
  },
  {
    img: "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6",
    status: "Bitey"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS",
    status: "Blood Thirsty"
  }
]




function draw(){
  let catPets = document.getElementById("cat-pets")
  catPets.innerText = `${pets}`
  
  document.getElementById("cat-name").innerText = catName

  let catMood = document.getElementById("cat-mood")
  catMood.innerText = currentCatMood

  let catImg = document.getElementById("cat-img")
  // @ts-ignore we know this attribute is on our img element so we can ignore it
  catImg.src = currentCatImg

  // remember to change the location of your id if you want to use this method
  // catImg.innerHTML= `<img class="col-6 img-fluid shadow-sm"
  // src="${currentCatImg}"
  // alt="cat image">`

}

function petCat(){
  pets++
  console.log("you have pet the cat", pets)
  getRandomCatMood()
  checkCatPets()
  draw()
}

function checkCatPets(){
  if(pets >= 10 && pets < 15){
    currentCatMood = moods[0].status
    currentCatImg = moods[0].img
  }else if (pets > 15 ){
    currentCatMood = moods[2].status
    currentCatImg = moods[2].img
  }
  
}

function getRandomCatMood(){
  let index = Math.floor(Math.random() * moods.length)
  currentCatMood = moods[index].status
  currentCatImg = moods[index].img
  console.log("new cat mood",moods[index].status)
  draw()
}

function giveCatnip(){
  let seconds = 1000
  let catNipInterval = setInterval(getRandomCatMood,  2*seconds)
  console.log("catnip interval started")

  let clearCatnipIntervalHandler = function (){
  console.log("catnip interval stopped");
    clearInterval(catNipInterval)
  }

  setTimeout(clearCatnipIntervalHandler, 10* seconds)
}

draw()




//5. Flights from Boise. Write a function that will use the following data to return the cost of flights from boise to a neighboring city, by default return the standard cost unless firstClass is set to true

let flights = [{
  from: 'BOI',
  to: 'LAX',
  prices: {
      standard: 500,
      firstClass: 2200
  }
}, {
  from: 'BOI',
  to: 'SEA',
  prices: {
      standard: 800,
      firstClass: 1200
  }
}, {
  from: 'BOI',
  to: 'CAN',
  prices: {
      standard: 750,
      firstClass: 6200
  }
}]


function flightCost(destination, firstClass) {
  // take in a string
  // itterate of flights array
  // find matching flight object
  // return price property based on firstClass == true
  console.log("flight log",destination, firstClass)
  // this for loop iterates over each object in the flights array.
  for(let i = 0 ; i < flights.length; i++){
    console.log("ticket#"+i, flights[i])
        // this if statement checks to see if the single flight's 'to' (flight[i].to) property is equal to the requested destination.
    if(destination.toUpperCase() == flights[i].to){
      console.log("ticekt found")
        // once the correct flight is found we check if the the 'firstClass' value passed in is equal to true.  We only check for true because the user might not pass in a value at all as hinted by the wording of the problem.
      if(firstClass == true){
        console.log(flights[i].prices.firstClass)
        return flights[i].prices.firstClass
      } else {
        console.log(flights[i].prices.standard)
        return flights[i].prices.standard
      }

    }
    

  }


}

// SECTION afternoon challenges from tuesday --------------------------------------------------------------

// flightCost("LAX", false)
// flightCost("SEA", true)
// flightCost("LAX")
// flightCost("sea", false)

function characters(sentence){
  // const sentence = 'BACDGF';
  // NOTE sorts string by converting it to an array, sorting that array, and joining it back into a string
  // 'BACDGF' => ['B','A','C','D','G','F'] => 'ABCDFG'
  let sorted = sentence.split('').sort().join('')
  let charCode = sorted.charCodeAt(0)
  // iterate over sorted code
  for(let i = 0; i < sentence.length; i++){
    console.log(charCode)
    console.log(sorted.charCodeAt(i), sorted.charAt(i))

    // Check if character is missing.
    if(charCode != sorted.charCodeAt(i)){
      console.log("found missing letter")
      console.log(String.fromCharCode(charCode))
      return String.fromCharCode(charCode)
    }
    

    charCode++
  }
}

// characters('BACDGF')
characters('CDGFEHJ')

