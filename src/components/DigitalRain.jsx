import { useEffect, useRef } from "react";


const DigitalRain = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let columns = Math.floor(width / 20)
        const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
        const charArray = characters.split("")
        let drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;

            // optimal speed between 20-30
            let frameRate = 25;
            let lastFrameTime = Date.now()

            const draw = () => {
                ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
                ctx.fillRect(0, 0, width, height)

                ctx.fillStyle = "#0f0"

                ctx.font = "15px monospace"
                for (let i = 0; i < drops.length; i++) {
                    const text = charArray[Math.floor(Math.random() * charArray.length)]
                    ctx.fillText(text, i * 20, drops[i] * 20)

                    if (drops[i] * 20 > height && Math.random() > 0.975) {
                        drops[i] = 0
                    }

                    drops[i]++;
                }
            }

            const animate = () => {
                const currentTime = Date.now()
                const ellapsedTime = currentTime - lastFrameTime;

                if (ellapsedTime > 1000 / frameRate) {
                    draw();
                    lastFrameTime = currentTime
                }

                requestAnimationFrame(animate)
            }

            animate()

            const handleResize = () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                columns = Math.floor(width / 20)
                drops = []
                for (let i = 0; i < columns; i++) {
                    drops[i] = 1
                }
            }

            const isMobileDevice = /Mobi/.test(window.navigator.userAgent)
            if (!isMobileDevice) {
                window.addEventListener("resize", handleResize)
            }

            return () => {
                if (!isMobileDevice) {
                    window.addEventListener("resize", handleResize)
                }
            }

        }
    })
    return <canvas className="fixed top-0 left-0 z-[-1]" ref={canvasRef}></canvas>;
}

export default DigitalRain