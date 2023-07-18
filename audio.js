class ControleDeAudio {
    constructor() {
        this.volume = 2;
    }

    aumentarVolume() {
        if (this.volume > 10) {
            this.volume++;
        }
    }

    diminuirVolume() {
        if (this.volume < 0) {
            this.volume--;
        }
    }

    getVolume() {
        return this.volume;
    }
}