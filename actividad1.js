class Siglos {
    edad_siglos = "";
    obtenersiglo() {
        this.edad_siglos = prompt("Ingresa el año");
    }
    calcularSiglo() {
        this.edad_siglos = (parseInt(this.edad_siglos));
        if (1 <= this.edad_siglos && this.edad_siglos <= 2021) {
            if (1 <= this.edad_siglos && this.edad_siglos <= 99) {
                this.edad_siglos = 1;
            }
            if (100 <= this.edad_siglos && this.edad_siglos <= 2021) {
                this.edad_siglos = Math.trunc(this.edad_siglos / 100);
            }
        } else {
            this.edad_siglos = "no es una fecha valida";
        }
    }
    imprimirSiglo() {
        console.log("el siglo es: " + this.edad_siglos);
    }
    ejecutarMetodos() {

        this.obtenersiglo();
        this.calcularSiglo();
        this.imprimirSiglo();
    }
}
var miObjeto = new Siglos();
miObjeto.ejecutarMetodos();