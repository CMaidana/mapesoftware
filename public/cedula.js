const crearCodigoVerificador = (ci) => {
  //Inicializo los coefcientes en el orden correcto
  const arrCoefs = [2,9,8,7,6,3,4];
  let suma = 0;
  
  const difCoef = parseInt(arrCoefs.length - ci.length);
  
  for (let i = ci.length - 1; i > -1; i--) {
    //Obtengo el digito correspondiente de la ci recibida
    const dig = ci.substring(i, i+1);
    //Lo tenía como caracter, lo transformo a int para poder operar
    const digInt = parseInt(dig);
    //Obtengo el coeficiente correspondiente al ésta posición del digito
    const coef = arrCoefs[i+difCoef];
    //Multiplico dígito por coeficiente y lo acumulo a la suma total
    suma = suma + digInt * coef;
  }
  return (10 - suma % 10) % 10;
}
const validarCedula = (ci) => {
  //Inicializo los coefcientes en el orden correcto
  const arrCoefs = [2,9,8,7,6,3,4,1];
  let suma = 0;
  
  const difCoef = parseInt(arrCoefs.length - ci.length);
  
  for (let i = ci.length - 1; i > -1; i--) {
    //Obtengo el digito correspondiente de la ci recibida
    const dig = ci.substring(i, i+1);
    //Lo tenía como caracter, lo transformo a int para poder operar
    const digInt = parseInt(dig);
    //Obtengo el coeficiente correspondiente al ésta posición del digito
    const coef = arrCoefs[i+difCoef];
    //Multiplico dígito por coeficiente y lo acumulo a la suma total
    suma = suma + digInt * coef;
  }
  // si la suma es múltiplo de 10 es una ci válida
  if ( (suma % 10) == 0 ) {
    return true;
  } else {
    return false;
  }
}

const cedulaFormater = (cedula) => {
  const ci = `${cedula}`.split('');
  return `${ci[0]}.${ci.slice(1,4).join('')}.${ci.slice(4,7).join('')}-${ci[7]}`
}

const writeAndSendCI = (cedula) => {
  const ci = cedulaFormater(cedula);
  document.querySelector('.custom-data-field.MuiInputBase-input').value = ci;
  document.querySelector('.custom-data-field.MuiInputBase-input').nextElementSibling.click();
}
/*
console.log(crearCodigoVerificador('1234567'));
console.log(crearCodigoVerificador('4541437'));
console.log(crearCodigoVerificador('5223690'));
*/
for (let i = 4000000; i < 5500000; i++) {
  const verificador = crearCodigoVerificador(`${i}`);
  const cedula = `${i}${verificador}`;
  console.log(cedula);
}