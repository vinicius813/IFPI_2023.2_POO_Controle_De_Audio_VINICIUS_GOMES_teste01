class ControleDeAudio2 {
    private volume: number;

    constructor() {
        this.volume = 2;
    }

    aumentarVolume(): void {
        if (this.volume < 10) {
            this.volume++;
        }
    }

    diminuirVolume(): void {
        if (this.volume > 0) {
            this.volume--;
        }
    }

    getVolume(): number {
        return this.volume;
    }
}


