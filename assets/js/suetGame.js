// Opening
alert("SELAMAT DATANG DI GAME SUIT SEDERHANA");

// Pemain 
var pemain = prompt(" SILAKAN PILIH : batu , gunting , kertas !!");

// computer
var computer = Math.random();
if (computer < 0.34) {
    computer = "batu";
}else if (computer >= 0.34 && computer < 0.67) {
    computer = "gunting";
}else{
    computer = "kertas";
}

// logic

var logic = "";
if (pemain == computer) {
    console.log("Pemain : " + pemain +  "\n Computer : " + computer + "\n Hasil : SERI");
}else if (pemain == "batu") {
    logic = ( computer == "gunting") ? " MENANG ": "KALAH";
    console.log("Pemain : " + pemain +  "\n Computer : " + computer + "\n Hasil :" + logic);
}else if (pemain == "batu") {
    logic = ( computer == "kertas") ? " KALAH ": "MENANG";
    console.log("Pemain : " + pemain +  "\n Computer : " + computer + "\n Hasil :" + logic);
}else if (pemain == "gunting") {
    logic = ( computer == "batu") ? " KALAH ": "MENANG";
    console.log("Pemain : " + pemain +  "\n Computer : " + computer + "\n Hasil :" + logic);
}else if (pemain == "gunting") {
    logic = ( computer == "kertas") ? " MENANG ": "KALAH";
    console.log("Pemain : " + pemain +  "\n Computer : " + computer + "\n Hasil :" + logic);
}else if (pemain == "kertas") {
    logic = ( computer == "batu") ? " MENANG ": "KALAH";
    console.log("Pemain : " + pemain +  "\n Computer : " + computer + "\n Hasil :" + logic);
}else if (pemain == "kertas") {
    logic = ( computer == "gunting") ? " KALAH ": "MENANG";
    console.log("Pemain : " + pemain +  "\n Computer : " + computer + "\n Hasil :" + logic);
}else{
    alert("Input Sesuai Pilihan!!");
}

alert("Pemain : " + pemain + "\n Computer : " + computer + "\n Hasil : " + logic);