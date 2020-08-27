var uImage, file; 
var imgCanvas=document.getElementById("can");
var imgCanvas2=document.getElementById("can2");





function copyImage(){
  var img= new SimpleImage(uImage.getWidth(), uImage.getHeight());
  
  for (var i of uImage.values()){
    var x = i.getX();
    var y = i.getY();
    img.setPixel(x,y,i);
  }
  return img;
}





function upload(){
  clearCanvas(imgCanvas);
  clearCanvas(imgCanvas2);
  file=document.getElementById("Input");
  uImage=new SimpleImage(file);
  
  uImage.drawTo(imgCanvas);
}





function gray(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  
  imgCanvas=document.getElementById("can");
  
  for (var pixel of img.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
  img.drawTo(imgCanvas2);
}






function Tri(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  var w = img.getWidth();
for (var px of img.values())
{
    var xCoor = px.getX();
    if (xCoor < w/3)
    {
        px.setRed(255);
    }
    else if ( xCoor >= w/3 && xCoor < (w/3)*2)
    {
       px.setGreen(255);
    }
    else
    {
        px.setBlue(255);
    }
}
  img.drawTo(imgCanvas2);
}







function EBlue(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  for(var px of img.values())
    {
      px.setBlue(150);
    }
  img.drawTo(imgCanvas2);
}






function cMemory(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  for(var px of img.values())
    {
      px.setRed(50);
    }
  img.drawTo(imgCanvas2);
}







function clearCanvas(canvas){
  var ctx=canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
}






function redFilter(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  for (var px of img.values()){
    var avg = (px.getRed()+px.getGreen()+px.getBlue())/3;
    
    if (avg<128){
      px.setRed(2*avg);
      px.setGreen(0);
      px.setBlue(0);
    }
    else{
      px.setRed(255);
      px.setGreen(2*avg-255);
      px.setBlue(2*avg-255);
    }
  }
  img.drawTo(imgCanvas2);
}





function wOlive(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  for(var px of img.values())
    {
      px.setGreen(px.getGreen()+70);
    }
  img.drawTo(imgCanvas2);
}





function mContrastIncrease(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  var imgCan2=document.getElementById("can2");
  imgCan2.className="contrastIncrease";
  img.drawTo(imgCanvas2);
}





function mContrastDecrease(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  var imgCan2=document.getElementById("can2");
  imgCan2.className="contrastDecrease";
  img.drawTo(imgCanvas2);
}






function brightInc(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  var imgCan2=document.getElementById("can2");
  imgCan2.className="brightInc";
  img.drawTo(imgCanvas2);
}




function brightDec(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  var imgCan2=document.getElementById("can2");
  imgCan2.className="brightDec";
  img.drawTo(imgCanvas2);
}





function blurrr(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  var imgCan2=document.getElementById("can2");
  imgCan2.className="blur";
  img.drawTo(imgCanvas2);
}




function invert(){
  clearCanvas(imgCanvas2);
  var img=copyImage();
  var imgCan2=document.getElementById("can2");
  imgCan2.className="invertNow";
  img.drawTo(imgCanvas2);
}






function doColor(){
  var colorInput=document.getElementById("clr");
  document.body.style.backgroundColor=colorInput.value;
}





function resetColor(){
  document.body.style.backgroundColor="aquamarine";
}