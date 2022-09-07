function fractal(p){
    p.setup = () => {
        let myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        myCanvas.parent("fourier");
    }
    p.draw = () => {
        p.background(255)
    }
}

new p5(fractal, 'fractal')