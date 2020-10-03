
let maiuscula = false

function parsearTexto(texto){
  let numPressionado = texto.split(" ")
  return numPressionado 
}

function transformaEntradaDoTecladoParaTexto(numPressionado){
  
  let texto = null 

      switch(numPressionado){
        case '2': 
          return texto = 'a'
          break
        case '22': 
          return texto = 'b'
          break
        case '222': 
          return texto = 'c'
          break

        case '3': 
          return texto = 'd'
          break
        case '33': 
          return texto = 'e'
          break
        case '333': 
          return texto = 'f'
          break

        case '4': 
          return texto = 'g'
          break
        case '44': 
          return texto = 'h'
          break
        case '444': 
          return texto = 'i'
          break

        case '5': 
          return texto = 'j'
          break
        case '55': 
          return texto = 'k'
          break
        case '555': 
          return texto = 'l'
          break

        case '6': 
          return texto = 'm'
          break
        case '66': 
          return texto = 'n'
          break
        case '666': 
          return texto = 'o'
          break

        case '7': 
          return texto = 'p'
          break
        case '77': 
          return texto = 'q'
          break
        case '777': 
          return texto = 'r'
          break
        case '7777':
          return texto = 's'  

        case '8': 
          return texto = 't'
          break
        case '88': 
          return texto = 'u'
          break
        case '888': 
          return texto = 'v'
          break

        case '9': 
          return texto = 'w'
          break
        case '99': 
          return texto = 'y'
          break
        case '999': 
          return texto = 'x'
          break
        case '9999': 
          return texto = 'z'
          break  

          case '0': 
            return texto = ' '
            break 
          case '00': 
            return texto = '  '
            break 
          case '000': 
            return texto = '   '
            break 

          case '#': 
            return texto = '#'
            break
          case '*': 
            return texto = '*'
            break
      }
      
    }      
  

exports.nokiaTextTransform = (req, res) => {

  let numPressionado = parsearTexto(req.query.texto)
  let texto = ''
  let aux = ''

  for(let i = 0; i < numPressionado.length; i++){
    aux = transformaEntradaDoTecladoParaTexto(numPressionado[i])
    texto += aux 
  }
  
  return res.status(200).json({message: texto})
  
} 