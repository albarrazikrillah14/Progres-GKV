// Deklarasi method bubble

BUBBLE = document.getElementById("bubble");

// Penambahan nilai pada variable trace serta menambahkan mode, warna, dan opacity
var trace1 = {
  x: [
    "Denmark",
    "United Kingdom",
    "Saudi Arabia",
    "Brazil",
    "Kazakhstan",
    "Mauritius",
    "Argentina",
    "Philippines",
    "Moldova",
    "Hong Kong S.A.R. of China",
    "Bulgaria",
    "Libya*",
    "Liberia*",
    "Congo",
    "Georgia",
    "Venezuela",
    "Kenya",
    "Myanmar",
    "Chad*",
    "Lebanon",
  ],
  y: [
    "7,636",
    "6,943",
    "6,523",
    "6,293",
    "6,234",
    "6,071",
    "5,967",
    "5,904",
    "5,857",
    "5,425",
    "5,371",
    "5,33",
    "5,122",
    "5,075",
    "4,973",
    "4,925",
    "4,543",
    "4,394",
    "4,251",
    "2,955",
  ],
  mode: "markers",
  marker: {
    color: [
      "rgb(93, 164, 214)",
      "rgb(255, 144, 14)",
      "rgb(44, 160, 101)",
      "rgb(255, 65, 54)",
      "rgb(93, 164, 214)",
      "rgb(255, 144, 14)",
      "rgb(44, 160, 101)",
      "rgb(255, 65, 54)",
      "rgb(93, 164, 214)",
      "rgb(255, 144, 14)",
      "rgb(44, 160, 101)",
      "rgb(255, 65, 54)",
      "rgb(93, 164, 214)",
      "rgb(255, 144, 14)",
      "rgb(44, 160, 101)",
      "rgb(255, 65, 54)",
      "rgb(93, 164, 214)",
      "rgb(255, 144, 14)",
      "rgb(44, 160, 101)",
      "rgb(255, 65, 54)",
    ],
    opacity: [1, 0.8, 0.6, 0],
    size: [
      35, 40, 60, 80, 100, 35, 40, 60, 80, 100, 35, 40, 60, 80, 100, 35, 40, 60,
      80, 100,
    ],
  },
};


var data = [trace1];
var layout = {
  title: "Happiness Score",
  showlegend: false,
  height: 700,
  width: 1400,
};
var config = { responsive: true };

// Deklarasi Javascript dengan menggunakan method dengan passing elemen 
// DIV DOM, data array, layout, dan config hash
Plotly.newPlot(BUBBLE, data, layout, config);
