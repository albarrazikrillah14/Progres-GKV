const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [5500, 3000]
};

const total_hap = [ "50", "100","200", "400", "800", "1600", "3200", "6400", "12800"];
const maks_hap = 8000;
const min_hap = 50;

const country = [
  ["Denmark", 7636,1953,532], 
  ["United Kingdom", 6945, 1867, 329], 
  ["Saudi Arabia", 6523, 1870, 180], 
  ["Brazil", 6293, 1462, 134],
  ["Kazakhstan", 6234, 1668, 157],
  ["Mauritius", 6071, 1591, 107],
  ["Argentina", 5967, 1592,85],
  ["Philippines", 5904,1268,142],
  ["Moldova", 5857,1417,28],
  ["Hong Kong", 5425,1957,383],
  ["Bulgaria", 5371,1625,21],
  ["Libya", 5330,1476,179],
  ["Liberia", 5122,636,80],
  ["Congo", 5075,950,146],
  ["Georgia", 4973,1467,208],
  ["Venezuela", 4925,482, 82],
  ["Kenya", 4543,1032,82],
  ["Myanmar", 4394,1038,194],
  ["Chad", 4251,662,77],
  ["Lebanon", 2955,1392,34]
];

//ukuran bg chart
const maks_X = 4300;
const maks_Y = 1100;

const line_X = 4300;
const line_Y = 1100;


//jarak chart dengan bg belakang
const bot_gap = 1500;
const left_gap = 400;

const line_bot_gap = 200;
const line_left_gap = 400;


// jarak antar grid
const grid_gap_X = maks_X / (country.length + 1);
const grid_gap_Y = maks_Y / (total_hap.length + 1);

const line_grid_gap_X = line_X / (country.length + 1);
const line_grid_gap_Y = line_Y / (total_hap.length + 1);

// jarak titik control point bezier
const curve_gap = 50;


const sketch = () => {
  return ({ context, width, height }) => {
    //white background belakang
    context.fillStyle = '#C4DDFF';
    context.fillRect(0, 0, width, height);
    //Bikin Text
    function isitext(){
      context.save();
      context.beginPath();
      context.fillStyle = 'black';
      context.strokeStyle = 'black';
      context.font = "100px Arial";
      context.fillText('World Happiness Report', 300, 170)
      context.strokeText("World Happiness Report", 299, 170)
      context.closePath();

      context.beginPath();
      context.fillStyle = 'black';
      context.font = "65px Arial";
      context.fillText('Tingkat kebahagiaan di Dunia Berdasarkan Happiness score, GDP per capita, dan Perception of Corruption', 300, 340)
      context.closePath();

      /*context.beginPath();
      context.fillStyle = 'black';
      context.font = "60px Arial";
      context.fillText('Tingkat kebahagiaan di Dunia Berdasarkan Happiness score, GDP per capita, dan Perception of Corruption', 300, 1750)
      context.closePath();
      */
    }

  //VERTIKAL
    //Color pallete 1 
    var gradV1 = context.createLinearGradient(0,0,0,700);
    gradV1.addColorStop(0, "#5D8BF4");
    gradV1.addColorStop(1, "#68A7AD");

    //Color pallete 2 
    var gradV2 = context.createLinearGradient(0,0,0,700);
    gradV2.addColorStop(0, "#0AA1DD");
    gradV2.addColorStop(1, "#5584AC");

    //Color pallete 3 
    var gradV3 = context.createLinearGradient(0,0,0,700);
    gradV3.addColorStop(0, "#5485ff");
    gradV3.addColorStop(1, "#91f8ff");

  //SELURUH AREA
  //Color pallete 1 
    var gradR1 = context.createLinearGradient(0,0,700,700);
    gradR1.addColorStop(0, "#5D8BF4");
    gradR1.addColorStop(1, "#68A7AD");

    //Color pallete 2 
    var gradR2 = context.createLinearGradient(0,0,700,700);
    gradR2.addColorStop(0, "#5584AC");
    gradR2.addColorStop(1, "#5584AC");

    //Color pallete 3 
    var gradR3 = context.createLinearGradient(0,0,700,700);
    gradR3.addColorStop(0, "#5485ff");
    gradR3.addColorStop(1, "#91f8ff");

      
  function barchart(){
//bar chart
    //square bracket round edges
    function squareBracket_bar(l_gap, b_gap, X, Y, left, right, bot, top){
      context.save();
      context.fillStyle = '#323140';
      context.beginPath();
      context.moveTo(l_gap - left + curve_gap, height - (b_gap - bot));
      context.lineTo(l_gap + X + right - curve_gap, height - (b_gap - bot));
      context.quadraticCurveTo(l_gap + X + right, height - (b_gap - bot), l_gap + X + right, height - (b_gap - bot + curve_gap));
      context.lineTo(l_gap + X + right, height - (b_gap + top + Y - curve_gap));
      context.quadraticCurveTo(l_gap + X + right, height - (b_gap + top + Y), l_gap + X + right - curve_gap, height - (b_gap + top + Y));
      context.lineTo(l_gap - left + curve_gap, height - (b_gap + top + Y));
      context.quadraticCurveTo(l_gap - left, height - (b_gap + top + Y), l_gap - left, height - (b_gap + top + Y - curve_gap));
      context.lineTo(l_gap - left, height - (b_gap - bot + curve_gap));
      context.quadraticCurveTo(l_gap - left, height - (b_gap - bot), l_gap - left + curve_gap, height - (b_gap - bot));
      context.closePath();
      context.fill();
      context.restore();
    }
    squareBracket_bar(left_gap, bot_gap, maks_X, maks_Y, 135, 400, 95, 20);

    //create label di sumbu x dan y
    context.save();
    context.fillStyle = 'snow';
    context.font = "30px Arial";
    context.textAlign = 'right';
    for(var n = 0; n < total_hap.length; n++){
      context.fillText(total_hap[n], left_gap-10, height-bot_gap+8 - (n + 1)*grid_gap_Y);
    }
    context.textAlign = 'center';
    for(var m = 0; m < country.length; m++){
      context.fillText(country[m][0], left_gap + (m + 1)*grid_gap_X, height-bot_gap+30);
    }
    context.restore();

    //move 0, 0 position
    context.translate(left_gap, height-bot_gap);
    context.scale(1, -1);

    //keterangan sumbu y
    context.save();
    context.scale(1, -1);
    context.translate(0, -1 * maks_Y / 2);
    context.rotate(-90 * Math.PI / 180);
    context.fillStyle = 'snow';
    context.font = "35px Arial";
    context.textAlign = 'center';
    context.fillText("tingkat kebahagiaan", 0, -95);
    context.restore();

    //keterangan sumbu x
    context.save();
    context.scale(1, -1);
    context.translate(maks_X / 2, 0);
    context.rotate(-0 * Math.PI / 180);
    context.fillStyle = 'snow';
    context.font = "35px Arial";
    context.textAlign = 'center';
    context.fillText("country", 0, 75);
    context.restore();

    //bikin grid
    context.save();
    context.strokeStyle = 'snow';
    context.beginPath();  //garis di sumbu 0 x & y
    context.lineWidth = 1;
    context.moveTo(0, 0);
    context.lineTo(0, maks_Y);
    context.moveTo(0, 0);
    context.lineTo(maks_X, 0);
    context.stroke();

    context.lineWidth = 0.1;  //grid kotak kotak
    for(var  g = grid_gap_X; g < maks_X; g += grid_gap_X){
      context.moveTo(g, 0);
      context.lineTo(g, maks_Y);
    }
    for(var f = grid_gap_Y; f < maks_Y; f += grid_gap_Y){
      context.moveTo(0, f);
      context.lineTo(maks_X, f);
    }
    context.stroke();
    context.restore();

    //bikin bar chart
    var bar_width = grid_gap_X / 4;
    
    for(var i = 0; i < country.length; i++){
      var hap_data = country[i][1];
      context.save();
      context.fillStyle = gradV1; 
      context.fillRect(bar_width/2 - bar_width*2 + (grid_gap_X * (i + 1)), 0, bar_width, ((Math.log(hap_data/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* maks_Y);
      context.restore();

      if(country[i][2] < min_hap)
        var hap_data = (country[i][2] / (min_hap / 2) + 1) * min_hap / 3;
      else
        var hap_data = country[i][2];
      context.save();
      context.fillStyle = gradV2; 
      context.fillRect(bar_width/2 - bar_width + (grid_gap_X * (i + 1)), 0, bar_width, ((Math.log(hap_data/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* maks_Y);
      context.restore();

      if(country[i][3] < min_hap)
        var hap_data = ((country[i][3] / (min_hap / 2)) + 1) * min_hap / 3;
      else
        var hap_data = country[i][3];
      context.save();
      context.fillStyle = gradV3; 
      context.fillRect(bar_width/2 + (grid_gap_X * (i + 1)), 0, bar_width, ((Math.log(hap_data/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* maks_Y);
      context.restore();
      
    }
    
    //keterangan warna bar
    context.save();
    context.fillStyle = gradV1;
    context.fillRect(maks_X + 25, maks_Y / 2 + 33, bar_width/2, bar_width/2);
    context.fillStyle = 'snow';
    context.font = "30px Arial";
    context.scale(1, -1);
    context.fillText("Happiness score", maks_X + 60, (maks_Y / 2 + 35) * -1);
    context.restore();

    
    context.save();
    context.fillStyle = gradV2;
    context.fillRect(maks_X + 25, maks_Y / 2 - 2, bar_width/2, bar_width/2);
    context.fillStyle = 'snow';
    context.font = "30px Arial";
    context.scale(1, -1);
    context.fillText("GDP per capita", maks_X + 60, (maks_Y / 2) * -1);
    context.restore();

    
    context.save();
    context.fillStyle = gradV3;
    context.fillRect(maks_X + 25, maks_Y / 2 - 40, bar_width/2, bar_width/2);
    context.fillStyle = 'snow';
    context.font = "30px Arial";
    context.scale(1, -1);
    context.fillText("Perception of corruption", maks_X + 60, (maks_Y / 2 - 40) * -1);
    context.restore();
    

    //reset position
    context.translate(-left_gap, height-bot_gap);
    context.scale(1, -1);
  }

  function linechart(){
    //line chart
        //square bracket round edges
        function squareBracket_line(l_gap, b_gap, X, Y, left, right, bot, top){
          context.save();
          context.fillStyle = '#323140';
          context.beginPath();
          context.moveTo(l_gap - left + curve_gap, height - (b_gap - bot));
          context.lineTo(l_gap + X + right - curve_gap, height - (b_gap - bot));
          context.quadraticCurveTo(l_gap + X + right, height - (b_gap - bot), l_gap + X + right, height - (b_gap - bot + curve_gap));
          context.lineTo(l_gap + X + right, height - (b_gap + top + Y - curve_gap));
          context.quadraticCurveTo(l_gap + X + right, height - (b_gap + top + Y), l_gap + X + right - curve_gap, height - (b_gap + top + Y));
          context.lineTo(l_gap - left + curve_gap, height - (b_gap + top + Y));
          context.quadraticCurveTo(l_gap - left, height - (b_gap + top + Y), l_gap - left, height - (b_gap + top + Y - curve_gap));
          context.lineTo(l_gap - left, height - (b_gap - bot + curve_gap));
          context.quadraticCurveTo(l_gap - left, height - (b_gap - bot), l_gap - left + curve_gap, height - (b_gap - bot));
          context.closePath();
          context.fill();
          context.restore();
        }
        squareBracket_line(line_left_gap, line_bot_gap, line_X, line_Y, 135, 400, 95, 20);
    
        //create label di sumbu x dan y
        context.save();
        context.fillStyle = 'snow';
        context.font = "30px Arial";
        context.textAlign = 'right';
        for(var n = 0; n < total_hap.length; n++){
          context.fillText(total_hap[n], line_left_gap-10, height-line_bot_gap+8 - (n + 1)*line_grid_gap_Y);
        }
        context.textAlign = 'center';
        for(var m = 0; m < country.length; m++){
          context.fillText(country[m][0], line_left_gap + (m + 1)*line_grid_gap_X, height-line_bot_gap+30);
        }
        context.restore();
    
        context.translate(line_left_gap, height-line_bot_gap);
        context.scale(1, -1);
    
        //keterangan sumbu y
        context.save();
        context.scale(1, -1);
        context.translate(0, -1 * line_Y / 2);
        context.rotate(-90 * Math.PI / 180);
        context.fillStyle = 'snow';
        context.font = "30px Arial";
        context.textAlign = 'center';
        context.fillText("Tingkat Kebahagiaan", 0, -95);
        context.restore();
    
        //keterangan sumbu x
        context.save();
        context.scale(1, -1);
        context.translate(line_X / 2, 0);
        context.rotate(-0 * Math.PI / 180);
        context.fillStyle = 'snow';
        context.font = "35px Arial";
        context.textAlign = 'center';
        context.fillText("country", 0, 75);
        context.restore();
    
        //bikin grid
        context.save();
        context.strokeStyle = 'snow';
        context.beginPath();  //garis di sumbu 0 x & y
        context.lineWidth = 1;
        context.moveTo(0, 0);
        context.lineTo(0, line_Y);
        context.moveTo(0, 0);
        context.lineTo(line_X, 0);
        context.stroke();
    
        context.lineWidth = 0.1;  //grid kotak kotak
        for(var  g = line_grid_gap_X; g < line_X; g += line_grid_gap_X){
          context.moveTo(g, 0);
          context.lineTo(g, line_Y);
        }
        for(var f = line_grid_gap_Y; f < line_Y; f += line_grid_gap_Y){
          context.moveTo(0, f);
          context.lineTo(line_X, f);
        }
        context.stroke();
        context.restore();
    
        //keterangan warna line
        context.save();
        context.fillStyle = gradR1;
        context.fillRect(line_X + 25, line_Y / 2 + 29, line_grid_gap_X/8, line_grid_gap_X/25);
        context.fillStyle = 'snow';
        context.font = "33px Arial";
        context.scale(1, -1);
        context.fillText("Happiness Score", line_X + 50, (line_Y / 2 + 35) * -1);
        context.restore();
    
        context.save();
        context.fillStyle = gradR2;
        context.fillRect(line_X + 25, line_Y / 2 + 4, line_grid_gap_X/8, line_grid_gap_X/25);
        context.fillStyle = 'snow';
        context.font = "33px Arial";
        context.scale(1, -1);
        context.fillText("GDP per Capita", line_X + 50, (line_Y / 2) * -1);
        context.restore();
    
        context.save();
        context.fillStyle = gradR3;
        context.fillRect(line_X + 25, line_Y / 2 - 21, line_grid_gap_X/8, line_grid_gap_X/25);
        context.fillStyle = 'snow';
        context.font = "33px Arial";
        context.scale(1, -1);
        context.fillText("Perception of Corruption", line_X + 50, (line_Y / 2 - 35) * -1);
        context.restore();
    
        //bikin line chart
        context.lineWidth = line_grid_gap_X / 25;
        for(var i = 0; i < country.length-1; i++){
    
          if(country[i][1] < min_hap)
            var hap_data = (country[i][1] / (min_hap / 2) + 1) * min_hap / 3;
          else
            var hap_data = country[i][1];
          if(country[i+1][1] < min_hap)
            var hap_data1 = (country[i+1][1] / (min_hap / 2) + 1) * min_hap / 3;
          else
            var hap_data1 = country[i+1][1];
          context.save();
          context.beginPath();
          context.strokeStyle = gradR1; 
          context.moveTo(line_grid_gap_X*(i+1), ((Math.log(hap_data/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* line_Y);
          context.lineTo(line_grid_gap_X*(i+2), ((Math.log(hap_data1/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* line_Y);
          context.stroke();
          context.restore();
    
          if(country[i][2] < min_hap)
            var hap_data = (country[i][2] / (min_hap / 2) + 1) * min_hap / 3;
          else
            var hap_data = country[i][2];
          if(country[i+1][2] < min_hap)
            var hap_data1 = (country[i+1][2] / (min_hap / 2) + 1) * min_hap / 3;
          else
            var hap_data1 = country[i+1][2];
          context.save();
          context.beginPath();
          context.strokeStyle = gradR2; 
          context.moveTo(line_grid_gap_X*(i+1), ((Math.log(hap_data/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* line_Y);
          context.lineTo(line_grid_gap_X*(i+2), ((Math.log(hap_data1/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* line_Y);
          context.stroke();
          context.restore();
    
          if(country[i][3] < min_hap)
            var hap_data = (country[i][3] / (min_hap / 2) + 1) * min_hap / 3;
          else
            var hap_data = country[i][3];
          if(country[i+1][3] < min_hap)
            var hap_data1 = (country[i+1][3] / (min_hap / 2) + 1) * min_hap / 3;
          else
            var hap_data1 = country[i+1][3];
          context.save();
          context.beginPath();
          context.strokeStyle = gradR3;
          context.moveTo(line_grid_gap_X*(i+1), ((Math.log(hap_data/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* line_Y);
          context.lineTo(line_grid_gap_X*(i+2), ((Math.log(hap_data1/min_hap)/Math.log(2)) + 1) / (total_hap.length + 1)* line_Y);
          context.stroke();
          context.restore();
        }
      }
  isitext();
  barchart();
  linechart();
};
};

canvasSketch(sketch, settings);