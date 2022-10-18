export class PC {

    ram: number = 0;
    processor: string = "";

    setRam(ram: number) {
        this.ram = ram;
    }

    setProcessor(processor: string) {
        this.processor = processor;
    }

    getRam(): number {
        return this.ram;
    }

    getProcessor(): string {
        return this.processor;
    }
}
