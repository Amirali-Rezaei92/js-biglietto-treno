
const age = Number(prompt('Inserisci la tua età:'));
const priceOfKm = 0.21;
const distance =Number(prompt('Inserisci la distanza dalla tua destinazione(km):'));
let price = distance * priceOfKm;

if (age<=18) {
    price *= 0.8;
} else {
    if (age>=65) {
        price *= 0.6;
    }
}
const finalPrice = price.toFixed(2);
console.log(`Prezzo Finale: ${finalPrice}€`);

if (isNaN(age) || isNaN(distance) || age <= 0 || distance <= 0) {
    console.log("❌ Errore! Devi inserire numeri validi maggiori di 0.❌");}