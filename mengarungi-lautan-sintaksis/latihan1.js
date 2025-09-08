const bilangan1 = Number(prompt("Masukkan Angka Pertama :"));
const operasi = prompt("Masukkan Operasi :");
const bilangan2 = Number(prompt("Masukkan Angka Kedua :"));


// eksekusi bagian ini jika input tidak angka
if(isNaN(bilangan1) || isNaN(bilangan2)) 
{
	console.log("Masukkan Bukan Angka");
}
// eksekusi bagian ini jika input angka dan operasi sesuai 
else if(operasi == "*" || operasi == "/" || operasi == "+" || operasi == "-")
{
	let hasil;

	if(operasi === "*") 
	{
		hasil = bilangan1 * bilangan2;
	} 
	else if (operasi === "/") 
	{
	   	hasil = bilangan1 / bilangan2;
	}
	else if (operasi === "+") 
	{
		hasil = bilangan1 + bilangan2;
	}
	else if (operasi === "-")
	{
		hasil = bilangan1 - bilangan2;
	}
    console.log(hasil);
}
// eksekusi bagian ini jika input operasi tidak valid 
else 
{
	console.log("Operasi Tidak Valid");
}
