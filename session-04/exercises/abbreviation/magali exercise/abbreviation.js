

function abbrevName(name){
    let splitName = name.split(' ')
    console.log('splitName',splitName)
    const letters= splitName.map(letter => 
        letter[0]
        )
         letters.join('.').toUpperCase()
    }
    abbrevName('Magali moran') 