function addOne(){
 amount = document.querySelector("#amount1").innerHTML
 result = parseInt(amount) + 1
 document.querySelector("#amount1").innerHTML = result
 result2 = parseInt(result) *80
 document.querySelector("#total1").innerHTML = result2
}

function minusOne(){
 amount = document.querySelector("#amount1").innerHTML
 if (amount > 1){
  result = parseInt(amount) - 1
  document.querySelector("#amount1").innerHTML = result
  result2 = parseInt(result) *80
  document.querySelector("#total1").innerHTML = result2
 }
}

function addTwo(){
 amount = document.querySelector("#amount2").innerHTML
 result = parseInt(amount) + 1
 document.querySelector("#amount2").innerHTML = result
 result2 = parseInt(result) *70
 document.querySelector("#total2").innerHTML = result2
}

function minusTwo(){
 amount = document.querySelector("#amount2").innerHTML
 if (amount > 2){
  result = parseInt(amount) - 1
  document.querySelector("#amount2").innerHTML = result
  result2 = parseInt(result) *70
  document.querySelector("#total2").innerHTML = result2
 }
}
