let cel=document.getElementById("celcius")
let fah=document.getElementById("farenheit")
let headig=document.getElementById("heading")
headig.innerHTML="Temperature \t Converter"
function conversion(){
    fah.value=cel.value*1.8+32

}
conversion()
cel.addEventListener("input",function (){
    let y=cel.value*1.8+32
    fah.value=y.toFixed(4);
})
fah.addEventListener("input",function (){
    let x=(fah.value-32)/1.8
    
    cel.value=x.toFixed(4);
})