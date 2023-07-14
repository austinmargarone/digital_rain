const canvas = document.getElementById(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

gradient.addColorStop(0, 'red');
gradient.addColorStop(0, 'yellow');
gradient.addColorStop(0, 'green');
gradient.addColorStop(0, 'cyan');
gradient.addColorStop(0, 'blue');
gradient.addColorStop(0, 'magenta');

const Rain = () => {

    const Symbol = () => {
        constructor(x, y, fontSize, canvasHeight) {
            this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.text = '';
            this.canvasHeight = canvasHeight;
        }
        draw(context) {
            this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
            if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
                this.y = 0;
            } else {
                this.y += 1;
            }
        }
    }

    class Effect {
        constructor(canvasWidth, canvasHeight) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasWidth;
            this.fontSize = 25;
            this.columns = this.canvasWidth / this.fontSize;
            this.symbols = [];
            this.#initialize();
            console.log(this.symbols)
        }
        #initialize() {
            for (let i = 0; i < this.columns; i++) {
                this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight.);

            }
        }
        resize(width, height) {
            this.canvasWidth = width;
            this.canvasHeight = height;
            this.columns = this.canvasWidth / this.fontSize;
            this.symnbols = [];
            this.#initialize();
        }
    }

    const effect = new Effect(canvas.width, canvasHeight)
    let lastTime = 0;
    const fps = 30;
    const nextFrame = 1000 / fps;
    let timer = 0;
    const animate = (timeStamp) => {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if (time > nextFrame) (
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.textAlign = 'center';
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        context.fillSytyle = gradient;

        ctx.font = effect.fontSize + 'px monospace';
        effect.symnbols.forEach(symbol => symbol.draw(ctx))
        requestAnimationFrame(animate);
    } else {
        timer += deltaTime;
}

}

requestAnimationFrame(animate)

animate(0);

window.addEventListener('resize', function ()){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height)
}

}

export default Rain;