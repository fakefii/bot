/**
 * Study case 1
 * 
 * Cek bilangan ganjil dan genap
 * 
 * Contoh:
 * var num = 5;
 * 
 * Result:
 * 5 adalah Bilangan Ganjil
 * 
 */

var num = 5;
if (num % 2 === 0) {
    console.log(num + ' Adalah bilangan genap.');
} else {
    console.log(num + ' Adalah bilangan ganjil.');
}

/**
 * Study case 2
 * 
 * School grade
 * Buatlah codingan untuk cek grade sekolah.
 * 
 * Grade A : score antara 100 - 85
 * Grade B : Score antara 84 - 70
 * Grade C : score antara 69 - 55
 * Grade D : score antara 54 - 40
 * Grade E : score antara 39 - 0
 */

var grade = 80

if (grade >= 85) {
    console.log('Anda mendapatkan grade A');
} else if (grade >= 70) {
    console.log('Anda mendapatkan grade B');
} else if (grade >= 55) {
    console.log('Anda mendapatkan grade C');
} else if (grade >= 40) {
    console.log('Anda mendapatkan grade D');
} else if (grade >= 0) {
    console.log('Anda mendapatkan grade E');
}

/**
 * Study Case 3
 * Ada 3 jenis access: Public, Protected, Private
 * 
 * Jika access kosong, maka tampilkan "Input access"
 * 
 * Access public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access public, jika sama dengan 5 maka tampilkan "Public five"
 * 
 * Access private, jika level di bawah 5 maka tampilkan "private di bawah 5"
 * Access private, jika level di atas 5 maka tampilkan "private di atas 5"
 * Access private, jika level sama dengan 5 maka tampilkan "Private 5"
 * 
 * Access Protected, jika level di bawah 5 maka tampilkan "Protected di bawah 5"
 * Access Protected, jika level di atas 5 maka tampilkan "Protected di atas 5"
 * Access Protected, jika level sama dengan 5 maka tampilkan "Protected 5"
 * 
 * Jika access salah, tampilkan "Access not defined"
 */

var access = "Public";
var level = 5;

switch (access.toLowerCase) {
    case "public":
        if (level < 5) {
            console.log("Public dibawah 5");
        } else if (level > 5) {
            console.log("Public diatas 5");
        } else if (level = 5) {
            console.log("Public five")
        }
        break;
    case "private":
        if (level < 5) {
            console.log("Private dibawah 5");
        } else if (level > 5) {
            console.log("Private diatas 5");
        } else if (level = 5) {
            console.log("Private five")
        }
        break;
    case "protected":
        if (level < 5) {
            console.log("Protected dibawah 5");
        } else if (level > 5) {
            console.log("Protected diatas 5");
        } else if (level = 5) {
            console.log("Protected five")
        }
        break;
    case "":
        console.log("Input Access");
        break;
    default:
        console.log("Access is not defined");
        break;
}


