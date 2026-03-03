function showCar(car) {
  let statsBody = document.getElementById("statsBody");

  if (car === "bmw") {
    statsBody.innerHTML = `
      <tr>
        <td>BMW M4</td>
        <td>503 HP</td>
        <td>3.8 sec</td>
        <td>290 km/h</td>
      </tr>`;
  }

  if (car === "audi") {
    statsBody.innerHTML = `
      <tr>
        <td>Audi RS7</td>
        <td>591 HP</td>
        <td>3.5 sec</td>
        <td>305 km/h</td>
      </tr>`;
  }

  if (car === "supra") {
    statsBody.innerHTML = `
      <tr>
        <td>Toyota Supra</td>
        <td>382 HP</td>
        <td>4.1 sec</td>
        <td>250 km/h</td>
      </tr>`;
  }
}

function searchCar() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cars = document.getElementsByClassName("car-item");

  for (let i = 0; i < cars.length; i++) {
    let name = cars[i].getAttribute("data-name");
    if (name.includes(input)) {
      cars[i].style.display = "";
    } else {
      cars[i].style.display = "none";
    }
  }
}