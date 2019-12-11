console.log("i");

const cars = [

  {
    name: `2019 BMW M5 Competition`,
    developer: `BMW`,
    price: 110995,
    reviews: `Excellent`,
    image: `/img/bmwm5sedan.jpg`

  },

  {
    name: `2017 Aston Martin DB11`,
    developer: `Aston Martin`,
    price: 109426,
    reviews: `Good`,
    image:`/img/db11.jpg`


  },


  {
    
    name: `2009 Nissan GTR`,
    developer: `Nissan`,
    price: 98875,
    reviews: `Excellent`,
    image: `/img/Nissan_GT-R_(9).jpg`

 },

  {

    name: `2013 Maserati GranTurismo`,
    developer: `Maserati`,
    price:  99899,
    reviews: `Excellent`,
    image: `/img/Maserati_GranTurismo_MC_Stradale_.jpg`



  },

  {

    name: `Tesla Model S`,
    developer: `Tesla`,
    price: 76000,
    reviews: `Excellent`,
    image: `/img/Tesla_Model_S_.jpg`
    
  },
   
  {
    name: `2017 Nissan 370z Nismo`,
    developer:`Nissan`,
    price: 70000,
    reviews: `Excellent`,
    image: `/img/Nissan370z.jpg`
  },

{
  name: `1998 Nissan Skyline GTR`,
  developer:`Nissan`,
  price: 80000,
  reviews: `Excellent`,
  image: `/img/NissanSkyliner34gtr.jpg`
},


{
  name: `2003 Aston Martin Vanquish`,
  developer:`Aston`,
  price: 70000,
  reviews: `Excellent`,
  image: `/img/Astonmartin1.jpg`

},

{
  name: `2019 BMW M4`,
  developer:`BMW`,
  price: 110000,
  reviews: `Good`,
  image: `/img/Bmwm41.jpg`

},

{
  name: `2017 Tesla Model 3`,
  developer:`Tesla`,
  price: 70000,
  reviews: `Excellent`,
  image: `/img/Model31.jpg`

},

{
  name: `2017 BMW i8`,
  developer:`BMW`,
  price: 120000,
  reviews: `Good`,
  image: `/img/bmwi8_.jpg`

},
{
  name: `2015 Tesla Model X`,
  developer:`Tesla`,
  price: 75000,
  reviews: `Excellent`,
  image: `/img/Teslamodelx1.jpg`

},

{
  name: `2019 Corvette GrandSport`,
  developer:`Chevrolet`,
  price: 100000,
  reviews: `Excellent`,
  image: `/img/grandsport2017.jpg`

},

{
  name: `2014 Maserati Ghibli`,
  developer:`Maserati`,
  price: 75000,
  reviews: `Excellent`,
  image: `/img/Maseratighibli_.jpg`

},

{

    name: `2017 Corvette ZR1`,
    developer:`Chevrolet`,
    price: 106000,
    reviews: `Good`,
    image: `/img/CorvetteZR1.jpg`
  
  },

  {
    name: `2019 Corvette C8`,
    developer:`Chevrolet`,
    price: 110000,
    reviews: `Excellent`,
    image: `/img/Corvettec8_.jpg`
  
  },

  {
    name: `2019 BMW M8 Gran Coupe`,
    developer:`BMW`,
    price: 130000,
    reviews: `Excellent`,
    image: `/img/Bmwm8_.jpg`
  
  },

  {
    name: `2015 BMW X6`,
    developer:`BMW`,
    price: 60000,
    reviews: `Excellent`,
    image: `/img/bmwx6_.jpg`
  
  },

  {
    name: `2019 Maserati Laventa`,
    developer:`Maserati`,
    price: 110000,
    reviews: `Excellent`,
    image: `/img/levante.jpg`
  
  },

  {
    name: `2018 Nissan GTR Nismo`,
    developer:`Nissan`,
    price: 1250000,
    reviews: `Good`,
    image: `/img/nissannismo.jpg`
  
  },


]
var isToggleOn = false;

function addHtmlData(car){
  return   `<div class="car0">
  <ul>
     <img src = ${car.image}>
    <li><h4>${car.name}</h4></li>
    <li><a class="seller" href="#"> ${car.developer}</a></li>
    <li class="price">price: ${car.price}</li>
    <li class="reviews"> ${car.reviews}</li>
    

  </ul>

</div>`;

  
}

function showCars(car){
  const arrayOfCars = car.map(addHtmlData);
  const stringOfHtml = arrayOfCars.join('\n');
  document.getElementById('car').innerHTML = stringOfHtml;
}

function isThisInCategory(prod){
  if(this == 'all'){
    return true;
  }else if (prod.developer == this){
    return true;
  } else{
    return false;
  }
}




function toggleStoreMenu(event){
  var button = document.querySelector('.your-store-menu');
  button.classList.toggle('closed');

}



 function togglesCarMenu(){
  var btn = document.querySelector('.car-category');
  btn.classList.toggle('closed2');

} 

function loadDevCategory(event) {
  const categoryChose = event.target.value;
  showCars(cars.filter)(isThisInCategory,categoryChose);

}


function isMatchingName(prod){
  if(prod.name.toUpperCase().includes(this.trim().toUpperCase())){
    return true;
  } 
  else{
    return false;
  }
}

function searchCarName(){
  const nameImSearchingFor = event.target.value;
  showCars(cars.filter(isMatchingName, nameImSearchingFor));
}

showCars(cars);

document.getElementById('carName').addEventListener('input', searchCarName);

 document.getElementById('developerCategory').addEventListener('change', loadDevCategory);