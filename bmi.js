let calculate = document.getElementById("calculate"); 
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");

calculate.addEventListener("submit", (event) => {
  event.preventDefault();
  if (cekangka(weight.value, height.value)) {
    let bmi;
    let pesan = "";
    bmi = weight.value / Math.pow(height.value / 100, 2);
    bmi = bmi.toFixed(1);

    if (bmi < 18.5) {
      pesan = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      pesan = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      pesan = "Overweight";
    } else if (bmi >= 30) {
      pesan = "Obesity";
    }

    result.innerHTML = `Berat anda : ${weight.value} <br>Tinggi anda : ${height.value} <br> Skor BMI anda adalah <B>${bmi}</B> serta termasuk kategori <b>${pesan}</b>`;
    result.style.color = "black";
    calculate.reset();
  } else {
    result.innerHTML = `<b>Mohon untuk menginputkan angka saja!</b>`;
    result.style.color = "red";
    calculate.reset();
  }
});

function cekangka(berat, tinggi) {
  if (isNaN(berat) && isNaN(tinggi)) {
    return false;
  } else {
    return true;
  }
}