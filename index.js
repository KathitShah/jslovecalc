var x = Math.round((Math.random() * 100) + 1)

var y = document.getElementById("demo");


function myFunction() {
  var yourName = document.getElementById("yourName").value;
  var you = yourName.charAt(0).toUpperCase() + yourName.slice(1);
  var crushName = document.getElementById("crushName").value;
  var crush = crushName.charAt(0).toUpperCase() + crushName.slice(1);
    if (x <= 30) {
      y.innerHTML = "Hi " + you + ", I dont think you should love someone like " + crush + " because your love score is only " + x + "%";
      document.getElementById("p2").style.display = "inline";
      document.getElementById("hide").style.display = "none";
    }
    else if (x >= 30 && x <= 60) {
      y.innerHTML = "Hi " + you + ", I think you and " + crush + ", should get to know each other first, and then look for relationship because your love score is just " + x + "%";
      document.getElementById("p2").style.display = "inline";
      document.getElementById("hide").style.display = "none";
    }
    else {
      y.innerHTML = "Hi " + you + ", you really love " + crush + ", so you should seel your love with a kiss because your love score is " + x + "%";
      document.getElementById("p2").style.display = "inline";
      document.getElementById("hide").style.display = "none";
    }
}
