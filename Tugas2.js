const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;


if (mtk === undefined || bahasaIndonesia === undefined || bahasaInggris === undefined || ipa === undefined) {
    console.log("Semua nilai harus diisi!");
} else {
 
    const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

  
    let grade;
    if (rataRata >= 90 ) {
        grade = "A";
    } else if (rataRata >= 80 ) {
        grade = "B";
    } else if (rataRata >= 70 ) {
        grade = "C";
    } else if (rataRata >= 60) {
        grade = "D";
    } else {
        grade = "E";
    }

    console.log("Rata-rata:",rataRata)
    console.log("Grade:",grade)
}