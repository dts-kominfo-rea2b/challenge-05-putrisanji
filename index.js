const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, shortData) => {
    const newData = shortData(names);
    const result = [];
    for (let i = 0; i < newData.length; i++) {
        let name = `${i + 1}. ${newData[i]}`;
        result.push(name);
    }
    return result;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (data) => {
    return data.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (data) => {
    return data.reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
    console.log(sorter?.(names, sortAscending)?.join("\n"));
    console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
    sorter,
    sortAscending,
    sortDescending,
    names,
};
