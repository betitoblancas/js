class Palindromo {

    cadena = "";

    obtenerCadena() {
        this.cadena = prompt("Ingrese una palabra").toLowerCase();
    }
    validarCadena() {

        this.cadena = this.cadena.replace(/ /g, "");

        for (var i = 0; i < this.cadena.length; i++) {
            if (this.cadena[i] != this.cadena[this.cadena.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
    imprimirCadena() {

        if (this.validarCadena()) {
            alert("Esto es palindromo");
        } else {
            alert("Esto no es paloindromo")
        }
    }
    ejecutarMetodos() {
        this.obtenerCadena();
        this.validarCadena();
        this.imprimirCadena();
    }
}
let miObjeto = new Palindromo();
miObjeto.ejecutarMetodos();