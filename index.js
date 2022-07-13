 
function main() {
    let efficiency = parseFloat( document.getElementById("efficiency").value )
    let E = parseFloat ( document.getElementById("kg").value ) * 8.64e+13 * (efficiency/100)
    let bombs =  E / 6.3e+13
    document.getElementById("bombs").innerHTML = "<h4 class='mt-5'>The energy output is equal to </h4>" + bombs.toFixed(2) + " Hiroshima Bombs"
}