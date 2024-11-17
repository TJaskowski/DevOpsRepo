const fs = require('fs');

// Funkcja do generowania losowej daty urodzenia
function getRandomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];  // Formatowanie do YYYY-MM-DD
}

// Funkcja do losowania koloru oczu
function getRandomEyeColor() {
    const colors = ["blue", "green", "brown", "hazel", "gray"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomRating() {
    return Math.floor(Math.random() * 11); // Zwraca liczbę całkowitą od 0 do 10
}

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z imionami

fs.readFile('./src/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);

    let content = "export const data = [";

    for (let i = 0; i < count; i++) {
        const name = names[~~((Math.random() * names.length) / 1)];
        const person = {
            id: i + 1,
            name: name,
            birth: getRandomDate(new Date(1950, 0, 1), new Date(2023, 11, 31)),
            eyes: getRandomEyeColor(),
            rating: getRandomRating()
        };
        console.log(person);
        content += JSON.stringify(person) + ",\n";
    }


    content += "];";

    // Zapis łańcucha do pliku
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
