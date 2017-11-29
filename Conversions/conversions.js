document.querySelector("#unitConversion").addEventListener("change",function () {
  let unit = document.querySelector("#unitConversion").value

  switch (unit) {
    case "Mass":
      console.log("heeeey case");
      changeH4sToScreen(unit);
      calculateMassToScreen();
      break;
    case "Length":
      console.log("heeeey case2");
      changeH4sToScreen(unit);
      calculateLengthToScreen();
      break;
    default:
      console.log("hey");
  }
})


function calculateMassToScreen() {
  document.querySelector('input').addEventListener("input",function (e) {
    //console.log("aaaaaaa");
    let input = e.target.value;
    let arraySaida = document.querySelectorAll("#saida")
    let values = [input, input*1000, input*2.2];

    for (let i =0; i<= arraySaida.length-1; i++){
      //console.log(arrayH4[i])
      arraySaida[i].innerHTML = values[i]
    }

  })
}
function calculateLengthToScreen() {
  document.querySelector('input').addEventListener("input",function (e) {
    //console.log("aaaaaaa");
    let input = e.target.value;
    let arraySaida = document.querySelectorAll("#saida")
    let values = [input, input*1000, input*0.621];

    for (let i =0; i<= arraySaida.length-1; i++){
      //console.log(arrayH4[i])
      arraySaida[i].innerHTML = values[i]
    }

  })
}
function changeH4sToScreen(unit) {
  let arrayH4 = document.querySelectorAll("h4");
  let values = [];
  if (unit == "Mass") {
    values = ["Kilograms", "Grams", "Lbs"];
  }
  else {
    values = ["Kilometers", "Meters", "Miles"]
  }

  for (let i =0; i<= arrayH4.length-1; i++){
    //console.log(arrayH4[i])
    arrayH4[i].innerHTML = values[i]
  }
}
/*function toScreen(array) {
  let output = "";
  array.forEach(function (value) {
    output += `
    <div class="card">
      <div class="card-block">
        <h4>??????</h4>
        <div id="saida"></div>
      </div>
    </div>
    `

  });

  document.querySelector("#results").innerHTML = output

}

*/
