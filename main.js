canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

backgroundImage = "concrete-road.jpg";
console.log("Image = " + backgroundImage);
greencarImage = "car2.png";
greencar_x = 5;
greencar_y = 225;

function add() {
    backgroundImageTag.src = backgroundImage;
    greencarImageTag.src = roverImage;
}

function uploadBackground(){
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

}

	function uploadgreencar() {

		if (greencar_y >= 0) {
			
			greencar_y = greencar_y - 10;
			console.log("When up arrow is pressed, X = " + greencar_x + "| Y = " +greencar_y);
			 uploadBackground();
			 uploadgreencar();
		}
    }

window.addEventListener("keydown", myKeyDown);

    function myKeyDown(e){

            keyPressed = e.keyCode;
            console.log(keyPressed);


        if (keyPressed == "38") {

            up();
            console.log("Cima")  
        }

        if (keyPressed == "40") {

            down();
            console.log("Baixo")  
        }

        if (keyPressed == "37") {

            left();
            console.log("Esquerda")  
        }

        if (keyPressed == "39") {

            right();
            console.log("Direita")  
        }
    }