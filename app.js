const myJson = `
[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

`;
const me = JSON.parse(myJson);
 
const monday = document.getElementById('mon');
const tuesday = document.getElementById('tues');
const wenesday = document.getElementById('wen');
const thursday = document.getElementById('thu');
const friday = document.getElementById('fri');
const saturday = document.getElementById('sat');
const sunday = document.getElementById('sun');

monday.innerHTML = me[0].day
tuesday.innerHTML = me[1].day
wenesday.innerHTML = me[2].day
thursday.innerHTML = me[3].day
friday.innerHTML = me[4].day
saturday.innerHTML = me[5].day
sunday.innerHTML = me[6].day


{/* <div class="tooltip-m"></div> */}
const tooltipText = document.querySelector('.tooltip-m');
const mGraph = document.querySelector('.m-graph');

const tooltipText2 = document.querySelector('.tooltip-t')
const tueGraph = document.querySelector('.t-graph');

const tooltipText3 = document.querySelector('.tooltip-w')
const wenGraph = document.querySelector('.w-graph');

const tooltipText4 = document.querySelector('.tooltip-th')
const thurGraph = document.querySelector('.th-graph');

const tooltipText5 = document.querySelector('.tooltip-f')
const friGraph = document.querySelector('.f-graph');

const tooltipText6 = document.querySelector('.tooltip-sat')
const satGraph = document.querySelector('.sat-graph');

const tooltipText7 = document.querySelector('.tooltip-sun')
const sunGraph = document.querySelector('.sun-graph');

// Moday
mGraph.addEventListener('mouseenter', function(){
  tooltipText.classList.add('tooltip-monday')
  tooltipText.innerHTML = `$${me[0].amount}`
})
mGraph.addEventListener('mouseleave', function(){
  tooltipText.classList.remove('tooltip-monday')
  tooltipText.innerHTML = '';
})

// Tuesday
tueGraph.addEventListener('mouseenter', function(){
  tooltipText2.classList.add('tooltip-tuesday')
  tooltipText2.innerHTML = `$${me[1].amount}`
})
tueGraph.addEventListener('mouseleave', function(){
  tooltipText2.classList.remove('tooltip-tuesday')
  tooltipText2.innerHTML = '';
})

// Wenesday
wenGraph.addEventListener('mouseenter', function(){
  tooltipText3.classList.add('tooltip-wenesday')
  tooltipText3.innerHTML = `$${me[2].amount}`
})
wenGraph.addEventListener('mouseleave', function(){
  tooltipText3.classList.remove('tooltip-wenesday')
  tooltipText3.innerHTML = '';
})

// Thursday
thurGraph.addEventListener('mouseenter', function(){
  tooltipText4.classList.add('tooltip-thursday')
  tooltipText4.innerHTML = `$${me[3].amount}`
})
thurGraph.addEventListener('mouseleave', function(){
  tooltipText4.classList.remove('tooltip-thursday')
  tooltipText4.innerHTML = '';
})

// Friday
friGraph.addEventListener('mouseenter', function(){
  tooltipText5.classList.add('tooltip-friday')
  tooltipText5.innerHTML = `$${me[4].amount}`
})
friGraph.addEventListener('mouseleave', function(){
  tooltipText5.classList.remove('tooltip-friday')
  tooltipText5.innerHTML = '';
})

// Saturday
satGraph.addEventListener('mouseenter', function(){
  tooltipText6.classList.add('tooltip-saturday')
  tooltipText6.innerHTML = `$${me[5].amount}`
})
satGraph.addEventListener('mouseleave', function(){
  tooltipText6.classList.remove('tooltip-saturday')
  tooltipText6.innerHTML = '';
})

// Sunday
sunGraph.addEventListener('mouseenter', function(){
  tooltipText7.classList.add('tooltip-sunday')
  tooltipText7.innerHTML = `$${me[6].amount}`
})
sunGraph.addEventListener('mouseleave', function(){
  tooltipText7.classList.remove('tooltip-sunday')
  tooltipText7.innerHTML = '';
})