module.exports = {
    // Decifrar com base no numero de casas passado
    decifrar(cifrado, numero_casas) {
        let descifrado = ""

        cifrado = cifrado.toLowerCase()
        
        var a = Array.prototype.map.call(cifrado, function(x) {
            return x.charCodeAt(0)
        })
        
        // Decifrando
        Array.prototype.map.call(a, function(x) {
            let c = ''
        
            if(x >= 97 && x <= 122){
                if(x - numero_casas < 97) {
                    c = String.fromCharCode(x + (26 - numero_casas))
                }else {
                    c = String.fromCharCode(x - numero_casas)
                }
                descifrado += c
                return x;
            }
            c = String.fromCharCode(x)
            descifrado += c
            return x;
        
        })
        
        return descifrado

    },

    cifrar(decifrado, numero_casas) {
        let cifrado = ""

        decifrado = decifrado.toLowerCase()
        
        var a = Array.prototype.map.call(decifrado, function(x) {
            return x.charCodeAt(0)
        })
        
        // Decifrando
        Array.prototype.map.call(a, function(x) {
            let c = ''
        
            if(x >= 97 && x <= 122){
                if(x + numero_casas > 122) {
                    c = String.fromCharCode(x - (26 - numero_casas))
                }else {
                    c = String.fromCharCode(x + numero_casas)
                }
                cifrado += c
                return x;
            }
            c = String.fromCharCode(x)
            cifrado += c
            return x;
        
        })
        
        return cifrado

    },
    // Primeiro decifrar feito
    decifrarPrimeiro(cifrado) {
        let descifrado = ""

        cifrado = cifrado.toLowerCase()
        
        var a = Array.prototype.map.call(cifrado, function(x) {
            return x.charCodeAt(0)
        })
        
        // Decifrando
        Array.prototype.map.call(a, function(x) {
            let c = ''
        
            if(x >= 97 && x <= 122){
                if(x - 5 < 97) {
                    c = String.fromCharCode(x + 21)
                }else {
                    c = String.fromCharCode(x - 5)
                }
                descifrado += c
                return x;
            }
            c = String.fromCharCode(x)
            descifrado += c
            return x;
        
        })
        
        return descifrado

    },
    // Primeiro cifrar feito
    cifrarPrimeiro(decifrado) {
        let cifrado = ""

        decifrado = decifrado.toLowerCase()
        
        var a = Array.prototype.map.call(decifrado, function(x) {
            return x.charCodeAt(0)
        })
        
        // Decifrando
        Array.prototype.map.call(a, function(x) {
            let c = ''
        
            if(x >= 97 && x <= 122){
                if(x + 5 > 122) {
                    c = String.fromCharCode(x - 21)
                }else {
                    c = String.fromCharCode(x + 5)
                }
                cifrado += c
                return x;
            }
            c = String.fromCharCode(x)
            cifrado += c
            return x;
        
        })
        
        return cifrado

    }
}