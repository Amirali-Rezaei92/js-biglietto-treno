
const AGE = Number(prompt('Inserisci la tua età:'));
const priceOfKm = 0.21;
const Distance =Number(prompt('Inserisci la distanza dalla tua destinazione(km):'));
let Price = Distance * priceOfKm;

if (AGE<=18) {
    Price *= 0.8;
} else {
    if (AGE>=65) {
        Price *= 0.6;
    }
}
const finalPrice = Price.toFixed(2);
console.log(`Prezzo Finale: ${finalPrice}€`);

if (isNaN(AGE) || isNaN(Distance) || AGE <= 0 || Distance <= 0) {
    console.log("❌ Errore! Devi inserire numeri validi maggiori di 0.❌");}