const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());

app.get('/generate-data', (req, res) => {
    const count = Number(req.query.count) || 10;
    let names = [];

    fs.readFile('./names.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Error reading names file' });
        }
        names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

        const people = [];
        for (let i = 0; i < count; i++) {
            people.push({
                id: i + 1,
                name: names[Math.floor(Math.random() * names.length)],
                birth: getRandomDate(),
                eyes: getRandomEyeColor(),
                rating: getRandomRating(),
            });
        }

        res.json(people);
    });
});

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

app.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`)
})

// const count = Number(process.argv[2]); // odczyt liczby obiektów
// let names = [];                        // tablica z imionami

// fs.readFile('./src/names.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     // Podział łańcucha z imionami na wiersze.
//     names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
//     console.log(names);

//     let content = "export const data = [";

//     for (let i = 0; i < count; i++) {
//         const name = names[~~((Math.random() * names.length) / 1)];
//         const person = {
//             id: i + 1,
//             name: name,
//             birth: getRandomDate(new Date(1950, 0, 1), new Date(2023, 11, 31)),
//             eyes: getRandomEyeColor(),
//             rating: getRandomRating()
//         };
//         console.log(person);
//         content += JSON.stringify(person) + ",\n";
//     }


//     content += "];";

//     // Zapis łańcucha do pliku
//     fs.writeFile('./src/data/module-data.js', content, (err) => {
//         if (err) {
//             console.error(err);
//         }
//         console.log("module-data.js generated");
//     });

