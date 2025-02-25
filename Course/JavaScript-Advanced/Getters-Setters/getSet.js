// Bankrekening klasse 
class Bankrekening {
    constructor(_saldo) {
        this._saldo = 0; // _saldo prive eigenschap
    };

    // setter gebruiken om het gegeven saldo te 'storten'
    set stelSaldoIn(aantal) {
        if (aantal > 0) {
            this._saldo += aantal;
        } else {
            console.log(`Het saldo mag niet negatief zijn. \n Opgegeven saldo: ${aantal}`);
            return;
        };
    };

    // Verhoogt saldo
    verhoogSaldo(hoeveelheid) {
        if (hoeveelheid > 0) {
            this._saldo += hoeveelheid;
            console.log(`Uw saldo is verhoogd met: €${hoeveelheid}`);
        };
    };

    // saldo Getter
    get haalSaldoOp() {
        // Eerst euro uithalen zonder centen
        let euro = Math.floor(this._saldo);

        // Centen berekenen 
        let centen = Math.round(this._saldo * 100 % 100);

        // Euro/centen weergeven op een nette formaat
        if (centen < 10) {
            return console.log(`Uw saldo: €${euro},${'0' + centen}`);
        } else {
            return console.log(`Uw saldo: €${euro},${centen}`);
        };
    };
};

// Nieuwe rekeneing openen
let NLB01 = new Bankrekening();

// Saldo 'storten' 
NLB01.stelSaldoIn = 12.45;

// saldo ophogen met 10 euro
NLB01.verhoogSaldo(10);

// saldo 'ophalen' oftwel weergeven
NLB01.haalSaldoOp;


