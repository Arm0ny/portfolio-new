let canvasHeight = 300
let canvasWidth = 300

let angle = 0
let wave = [];
let path = []
let slider
const PI = Math.PI

function fourier(p) {
    p.setup = () => {
        let myCanvas = p.createCanvas(canvasWidth, canvasHeight);
        myCanvas.parent("fourier");
    }
    p.draw = () => {
        p.background(250, 235, 222);
        p.translate(150, 200);

        let x = -70;
        let y = -40;

        for (let i = 0; i < 5; i++) {
            let prevx = x;
            let prevy = y;

            let n = i * 2 + 1;
            let radius = 40 * (4 / (n * PI));
            x += radius * Math.cos(n * angle);
            y += radius * Math.sin(n * angle);

            p.stroke(0);
            p.noFill();
            p.ellipse(prevx, prevy, radius * 2);

            //fill(255);
            p.stroke(0);
            p.line(prevx, prevy, x, y);
        }
        wave.unshift(y);


        p.translate(20, 0);
        p.line(x - 20, y, 0, wave[0]);
        p.beginShape();
        p.noFill();
        for (let i = 0; i < wave.length; i++) {
            p.vertex(i, wave[i]);
        }
        p.endShape();

        angle += 0.05;


        if (wave.length > 250) {
            wave.pop();
        }
    }
}

new p5(fourier, 'canvas')