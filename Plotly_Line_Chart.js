LINESCATTER = document.getElementById('linescatter');
var trace1 = {
    x: ['Denmark', 'United Kingdom', 'Saudi Arabia', 'Brazil', 'Kazakhstan', 'Mauritius', 'Argentina', 'Philippines', 'Moldova', 'Hong Kong', 'Bulgaria', 'Libya', 'Liberia', 'Congo', 'Georgia', 'Venezuela', 'Kenya', 'Myanmar', 'Chad', 'Lebanon'],
    y: [7636, 6943, 6523, 6293, 6234, 6071, 5967, 5904, 5857, 5425, 5371, 5330, 5122, 5075, 4973, 4925, 4543, 4394, 4251, 2955],
    type: 'scatter',
    name: 'World Happiness Score',
    marker: {
        color: '#044bd9',
        line: {
            color: 'black',
            width: 1.5
        }
    }
};

var trace2 = {
    x: ['Denmark', 'United Kingdom', 'Saudi Arabia', 'Brazil', 'Kazakhstan', 'Mauritius', 'Argentina', 'Philippines', 'Moldova', 'Hong Kong', 'Bulgaria', 'Libya', 'Liberia', 'Congo', 'Georgia', 'Venezuela', 'Kenya', 'Myanmar', 'Chad', 'Lebanon'],
    y: [1953, 1867, 1870, 1462, 1668, 1591, 1592, 1268, 1417, 1957, 1625, 1476, 636, 950, 1467, 1844, 1032, 1038, 662, 1392],
    type: 'scatter',
    name: 'GDP per Capita',
    marker: {
        color: '#6eb5ff',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    }
};

var trace3 = {
    x: ['Denmark', 'United Kingdom', 'Saudi Arabia', 'Brazil', 'Kazakhstan', 'Mauritius', 'Argentina', 'Philippines', 'Moldova', 'Hong Kong', 'Bulgaria', 'Libya', 'Liberia', 'Congo', 'Georgia', 'Venezuela', 'Kenya', 'Myanmar', 'Chad', 'Lebanon'],
    y: [532, 329, 180, 134, 157, 107, 85, 142, 28, 383, 21, 179, 80, 146, 208, 82, 82, 194, 77, 34],
    type: 'scatter',
    name: 'Perception of Corruption',
    marker: {
        color: '#1dddf2',
        line: {
            color: 'rgb(8,48,107)',
            width: 1.5
        }
    }
};

var data = [trace1, trace2, trace3];
var layout = {
    title: 'Tingkat Kebahagiaan Dunia Berdasarkan World Happiness Score, GDP per Capita dan Perception of Corruption di Beberapa Negara'
};

var config = { responsive: true };
Plotly.newPlot(LINESCATTER, data, layout, config);
