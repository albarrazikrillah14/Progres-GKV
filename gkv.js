const settings = {
  dimensions: [ 1600, 900 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const border = 20;
    const pixelX = 17;
 
    context.fillStyle = "black";
    context.font = "30px serif";
    context.fillText("Happiness Score", width/ 2 - 50, height - 200);
    context.fillStyle = "black";
    context.font = "15px serif";
    for(var i = 1; i <= 15; i++){
      context.fillText(`${[i]}`, 120 * [i] + border - pixelX + 60, height - 70);
    }
   
    context.save();
    context.rotate((Math.PI / 180) * 270);
    context.font = "30px serif";
    context.fillStyle = "black";
    context.fillText("Preceptions of Corruption", -(width / 4 + 60), height / 2 - 270);
    context.fillStyle = "black";
    context.font = "15px serif";
    for(var i = 1; i <= 6; i++){
      context.fillText(`${[1 * i * 10 / 100]}`, -(568 - ([i] * 125) + border + 200), 60);
    }
    context.restore();
 
    context.beginPath();
    context.moveTo(border + 60, -100);
    context.lineTo(border+ 60, height - border - 100);
    context.lineTo(width, height - border - 100);
    context.stroke();


    var GDP = [];
    var Country = [];
    var HappinessScore = [];
    var RANK = [];
    var corruption = [];
    d3.csv("World Happiness Report 2022.csv", function (csv) {
      csv.map(function (d) {
        RANK.push(+d.RANK);
        GDP.push(+d.GDP);
        corruption.push(+d.corruption);
        Country.push(d.Country);
        HappinessScore.push(d.HappinessScore);
      })
      var len = Country.length;
      
      for(let i = 0;  i < 20; i++){

        var centerX = 120 * HappinessScore[i] + border - pixelX + 60;
        var centerY =120 * (1 + corruption[i] * 10);
        var radius = 14;
        var font = Country[i];
        if(i % 4  == 0){
          context.fillStyle = "#8A2BE2";
        }
        else if(i % 4 == 1){
          context.fillStyle = "#A52A2A";
        }
        else if(i % 4 == 2){
          context.fillStyle = "#FF7F50";
        }
        else{
          context.fillStyle = "#7FFF00";
        }
  
        context.save();
        context.translate(0, height);
        context.scale(1, -1);
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fill();
        context.restore();

        context.save();
        context.translate(0, height);
        context.font = `${radius}px serif`;
        context.fillStyle = "black";
        context.fillText(`${font}`, centerX + radius, -1 * (centerY + radius));
        context.restore();
      }
    });
  };
};

canvasSketch(sketch, settings);