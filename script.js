var temp=document.getElementById('aftemp')
var temp2=document.getElementById('aftemp2')
var temp3=document.getElementById('aftemp3')
var dis=document.getElementById('dis')

var btn5=document.getElementById('btn5')
btn5.addEventListener('click',bhutan)

function bhutan(){
    var extractCityName=fetch('https://restcountries.com/v2/all')
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data[0].name)
        var cityName=data[0].name

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40472e68613745050c66c84ca7cf9295`)
        .then((res)=>{return res.json()})
        .then((data)=>{var temp1=data.main.temp
        temp.innerHTML=`Temp:- ${temp1}`
        console.log(data.main)
        var feelslike=data.main.feels_like
        temp2.innerHTML=`Feels like:- ${feelslike}`
        var tempmin=data.main.temp_min
        temp3.innerHTML=`Temp min:- ${tempmin}`
        var d=data.weather[0].description
        dis.innerHTML=`${d}`
        console.log(data)

        
    
    })
        .catch((err)=>{console.log("Some error occureed=>"+err)})
    })
}
var altemp=document.getElementById('altemp')
var altemp2=document.getElementById('altemp2')
var altemp3=document.getElementById('altemp3')
var dis1=document.getElementById('dis1')
var btn2=document.getElementById('btn2')
btn2.addEventListener('click',canada)

function canada(){
    var extractCityName=fetch('https://restcountries.com/v2/all')
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data[1].name)
        var cityName1=data[1].name

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName1}&appid=40472e68613745050c66c84ca7cf9295`)
        .then((res)=>{return res.json()})
        .then((data)=>{var temp_1=data.main.temp
        altemp.innerHTML=`Temp:- ${temp_1}`
        console.log(data.main)
        var feelslike_1=data.main.feels_like
        altemp2.innerHTML=`Feels like:- ${feelslike_1}`
        var tempmin_1=data.main.temp_min
        altemp3.innerHTML=`Temp min:- ${tempmin_1}`
        var d=data.weather[0].description
        dis1.innerHTML=`${d}`
        console.log(data)

        
    
    })
        .catch((err)=>{console.log("Some error occureed=>"+err)})
    })
}
var ukr1=document.getElementById('ukr')
var ukr2=document.getElementById('ukr2')
var ukr4=document.getElementById('ukr4')
var dis2=document.getElementById('dis2')
var btn1=document.getElementById('btn1')
btn1.addEventListener('click',ukraine)

function ukraine(){
    var extractCityName=fetch('https://restcountries.com/v2/all')
    .then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data[2].name)
        var cityName2=data[2].name

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName2}&appid=40472e68613745050c66c84ca7cf9295`)
        .then((res)=>{return res.json()})
        .then((data)=>{var temp_2=data.main.temp
            ukr1.innerHTML=`Temp:- ${temp_2}`
        console.log(data.main)
        var feelslike_1=data.main.feels_like
        ukr2.innerHTML=`Feels like:- ${feelslike_1}`
        var tempmin_1=data.main.temp_min
        ukr4.innerHTML=`Temp min:- ${tempmin_1}`
        var d=data.weather[0].description
        dis2.innerHTML=`${d}`
        console.log(data)

        
    
    })
        .catch((err)=>{console.log("Some error occureed=>"+err)})
    })
}