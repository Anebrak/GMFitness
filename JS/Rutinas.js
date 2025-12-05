// Mostrar secciones
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Generar valores aleatorios
function randomData(length, min, max) {
  return Array.from({length}, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// Gráfica Volumen
new Chart(document.getElementById("volumenChart"), {
  type: 'line',
  data: {
    labels: ["Semana 1","Semana 2","Semana 3","Semana 4"],
    datasets: [{
      label: "Volumen",
      data: randomData(4, 1000, 5000),
      borderColor: "#ff6600",
      backgroundColor: "rgba(255,102,0,0.3)"
    }]
  }
});

// Gráfica Reps
new Chart(document.getElementById("repsChart"), {
  type: 'bar',
  data: {
    labels: ["Semana 1","Semana 2","Semana 3","Semana 4"],
    datasets: [{
      label: "Reps",
      data: randomData(4, 1000, 5000),
      backgroundColor: "#ff6600"
    }]
  }
});

// Gráfica KG
let kgChart = new Chart(document.getElementById("kgChart"), {
  type: 'line',
  data: {
    labels: ["Semana 1","Semana 2","Semana 3","Semana 4"],
    datasets: [{
      label: "Bench Press",
      data: randomData(4, 1000, 5000),
      borderColor: "#ff6600",
      backgroundColor: "rgba(255,102,0,0.3)"
    }]
  }
});

document.getElementById("ejercicioSelect").addEventListener("change", function() {
  kgChart.data.datasets[0].label = this.value;
  kgChart.data.datasets[0].data = randomData(4, 1000, 5000);
  kgChart.update();
});

// Calendario simple
function generateCalendar() {
  const grid = document.getElementById("calendarGrid");
  const days = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
  days.forEach(d => {
    let div = document.createElement("div");
    div.innerText = d;
    div.style.fontWeight = "bold";
    grid.appendChild(div);
  });
  for (let i=1; i<=30; i++) {
    let div = document.createElement("div");
    div.innerText = i;
    grid.appendChild(div);
  }
}
generateCalendar();
