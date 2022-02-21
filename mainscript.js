function start(){
	functionWater();
    functionDistance();
    functionFuel();
	functionFood()
}

window.onload = start(); 

  Chart.defaults.global.defaultFontSize = 16;
  Chart.defaults.global.defaultFontColor = '#000';




function functionFood(){
    
    //Code voor hoeveelheid eten aan boord
    
    var foodChart = document.getElementById('food').getContext('2d');


    var massPopChart = new Chart(foodChart, {
      type:'bar',
      data:{
        labels:['Koolhydraten', 'Eiwitten', 'Vezels'],
        datasets:[{
          label:'Kilos',
          data:[
            253,
            157,//Waarde van de hoeveelheid eten
            610,
          ],
          backgroundColor:[
            'yellow',
            'red',
            'green'
          ]
        }]
      },
      options:{
        title:{
          display:true,
          text:'Hoeveelheid in Kilos'
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true
            }
        }]
        },
        legend:{
          display:false
        },
        tooltips:{
          enabled:true
        }
      }
    });
}





function functionWater(){
    
    //Dit is de code voor de hoeveelheid water
    var waterChart = document.getElementById('water').getContext('2d');
    var massPopChart = new Chart(waterChart, {
      type:'line',
      data:{
        labels:[1,2,3,4,5,6,7,8,9],
        datasets:[{
          label:'',
          data:[
              
            // momenten van L per dag
            100,
            87,
            80,
            71,
			63,
			52,
			40,
			33,
			26,
          ],
          borderWidth:1,
          borderColor:'#fff',
		  backgroundColor: 'blue',
        }]
      },
      options:{
        title:{
          display:true,
		  text: 'L/Day',
        },
        scales:{
          yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 5,
                max: 100
            }
          }]
        },
        legend:{
          display:false
        },
      }
    });   
}





function functionFuel(){
    
    //Dit is de code voor de hoeveelheid brandstof
    
    var fuelChart = document.getElementById('fuel').getContext('2d');
	var massPopChart = new Chart(fuelChart, {
      type:'doughnut',
      data:{
        labels:['Fuel', 'Fuel used'],
        datasets:[{
          label:'L',
          data:[
            2780,//Dit side brandstof die je kan aanpassen
            6322//hoeveelheid brandstof die al verbruikt is
          ],
          backgroundColor:[
            'red',
            '#000'
          ],
        }]
      },
      options:{
		   title:{
          display:true,
		  text:'Fuel in Liters Max 2000L'
        },
        legend:{
          display:true,
          position:'bottom',
          labels:{
            fontColor:'#000'
          }
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }
    });
    
}




function functionDistance(){
    
    //Dit is de code voor de afstand
    var distanceChart = document.getElementById('distance').getContext('2d');
	var massPopChart = new Chart(distanceChart, {
      type:'horizontalBar',
      data:{
        labels:['To RP'],
        datasets:[{
          label:'KM',
          data:[
            300//dit is de huidige afstand van de shuttle.
          ],
          backgroundColor:[
            '#A32cc4'
          ],
        }]
      },
      options:{
        title:{
          display:true,
		  text:'Kilometers (x1000)'
        },
        scales:{
          xAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 50,
                stepValue: 50,
                max: 400
            }
        }]
        },
        legend:{
          display:false,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        tooltips:{
          enabled:true
        }
      }
    }); 
}
