'use strict'

$(document).ready(function(){
    getWorldData();
})


// -- Async function 
async function getWorldData(){
    try{
        const 
        response = await fetch('https://api.covid19api.com/summary'),
        data = await response.json();

        if(data.length !== 0) {
            const 
        newCases = dividedNumber(data.Global.NewConfirmed),
        newDeath = dividedNumber(data.Global.NewDeaths),
        totalCases = dividedNumber(data.Global.TotalConfirmed),
        totalDeath = dividedNumber(data.Global.TotalDeaths);

        let datas = '';
         datas = `
         
        <td class='fw-bold'>${newCases}</td> 
        <td class='fw-bold'>${newDeath}</td> 
        <td class='fw-bold'>${totalCases}</td>
        <td class='fw-bold'>${totalDeath}</td>
        `
        
        $('#data').html(datas);

        } else {
            throw new Error('Whoops!')
        }

    } catch(error) {
        alert(error);
    }
}

// -- Divide number to digits code usage / Callback function
function dividedNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1'+".")
    
}

// -- Js animation
window.sr = new ScrollReveal();

sr.reveal('body',{
  opacity:0.3,
  scale:0.5,
  duration:1000
})

sr.reveal('h1',{
    delay:1000,
    distance:'50px',
    origin:'right'
})

sr.reveal('.ww',{
    delay:500,
    distance:'1000px',
    origin:'bottom'
})
