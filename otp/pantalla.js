class pantalla {
    #visible = false;

    constructor({ initialVideo, botones }) {
        this.initialVideo = initialVideo;
        this.botones = botones;
        this.initialVideo.hide();
    }

    start() {
        this.#visible = true;
        window.currentVideo = this.initialVideo;

        this.initialVideo.onended(() => {
            this.botones.show();
        });

        this.initialVideo.play();
    }

    end() {
        this.botones.hide();
        this.#visible = false;
    }

    draw() {
        if (!this.#visible) return;
        image(this.initialVideo, 0, 0, width, height);
        this.botones.draw();
    }
}

export default pantalla;