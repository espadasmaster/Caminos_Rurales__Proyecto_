const OPTION_WIDTH = 150;
const OPTION_HEIGHT = 50;
const OPTION_GAP = 150;

class botones {
    #visible = false;
    #buttons;

    constructor({ options }) {
        this.options = options;
        this.#buttons = this.#generateButtons();
    }

    draw() {
        if (this.#visible) this.#buttons.forEach((button) => button.draw());
    }

    show() {
        this.#visible = true;
    }

    hide() {
        this.#visible = false;
    }

    #generateButtons() {
        const buttons = [];

        // const allOptionsWidth =
        //     OPTION_WIDTH * this.options.length +
        //     OPTION_GAP * (this.options.length - 1);

        // const startingXPosition = width / 2 - allOptionsWidth / 2;

        this.options.forEach((option, index) => {
            // const yPosition = height * 0.9;
            // const xPosition =
            //     startingXPosition + (OPTION_WIDTH + OPTION_GAP) * index;
            const newButton = new Button({
                x: option.xPosition || width * 0.2 * (index + 1),
                y: option.yPosition || width * 0.85,
                align_x: 0,
                align_y: 0,
                width: option.width || OPTION_WIDTH,
                height: option.height || OPTION_HEIGHT,
                content: option.content,
                on_press: option.onClick,
            });

            newButton.style("default", {
                text_size: 16,
                background: "#2A2929",
                color: "#ffffff",
            });

            newButton.style("hover", {
                text_size: 16,
                background: "#444444",
                color: "#ffffff",
            });

            buttons.push(newButton);
        });

        return buttons;
    }
}

export default botones;