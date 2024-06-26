class menuinicio {
    #visible = true;
    image = loadImage("inicio.png");

    constructor({ onStart }) {
        this.onStart = onStart;
        this.button = new Button({
            x: width * 0.5,
            y: height * 0.8,
            align_x: 0,
            width: 150,
            height: 50,
            content: "Iniciar",
            on_press: this.onStart,
        });

        this.button.style("default", {
            text_size: 16,
            background: "#2A2929",
            color: "#ffffff",
        });

        this.button.style("hover", {
            text_size: 16,
            background: "#444444",
            color: "#ffffff",
        });
    }

    end() {
        this.#visible = false;
    }

    draw() {
        if (!this.#visible) return;
        background(this.image);
        this.button.draw();
    }
}

export default menuinicio;