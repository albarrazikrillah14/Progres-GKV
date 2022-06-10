BAR = document.getElementById('barplot');

var xValue = ['Denmark', 'United Kingdom', 'Saudi Arabia', 'Brazil', 'Kazakhstan', 'Mauritius', 'Argentina', 'Philippines', 'Moldova', 'Hong Kong', 'Bulgaria', 'Libya', 'Liberia', 'Congo', 'Georgia', 'Venezuela', 'Kenya', 'Myanmar', 'Chad', 'Lebanon'];

var yValue = [7636, 6943, 6523, 6293, 6234, 6071, 5967, 5904, 5857, 5425, 5371, 5330, 5122, 5075, 4973, 4925, 4543, 4394, 4251, 2955];
var yValue2 = [1953, 1867, 1870, 1462, 1668, 1591, 1592, 1268, 1417, 1957, 1625, 1476, 636, 950, 1467, 1844, 1032, 1038, 662, 1392];
var yValue3 = [532, 329, 180, 134, 157, 107, 85, 142, 28, 383, 21, 179, 80, 146, 208, 82, 82, 194, 77, 34]

var Happiness_Score = {
    x: xValue,
    y: yValue,
    type: 'bar',
    name: 'World Happiness Score',
    text: yValue.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
        color: '#044bd9',
        line: {
            color: 'black',
            width: 1.5
        }
    }
};

var GDP_per_Capita = {
    x: xValue,
    y: yValue2,
    type: 'bar',
    name: 'GDP per Capita',
    text: yValue2.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
        color: '#6eb5ff',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    }
};

var Perception_of_Corruption = {
    x: xValue,
    y: yValue3,
    type: 'bar',
    name: 'Perception of Corruption',
    text: yValue2.map(String),
    textposition: 'auto',
    hoverinfo: 'none',
    marker: {
        color: '#1dddf2',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    }
};

var data = [Happiness_Score, GDP_per_Capita, Perception_of_Corruption];

var layout = {
    title: 'Tingkat Kebahagiaan Dunia Berdasarkan World Happiness Score, GDP per Capita dan Perception of Corruption di Beberapa Negara'
};
var config = { responsive: true };
Plotly.newPlot(BAR, data, layout, config);