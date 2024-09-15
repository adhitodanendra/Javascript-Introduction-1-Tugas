const printSegitiga = 6;

if (typeof printSegitiga !== 'number'){
    console.log("Data Harus Number")
}else{
    for (let i = printSegitiga; i>=1; i--){
        let row = ' ';
        for (let j = 1; j <= i; j++){
            row += j + ' ';
        }
        console.log(row.trim())
    }
}