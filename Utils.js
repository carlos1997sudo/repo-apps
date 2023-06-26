class Utils {
    static numberRandom (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

const geraNumber = Utils.numberRandom(1,10);
console.log(geraNumber)