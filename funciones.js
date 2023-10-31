'use strict'

const formulario = document.querySelector('#formulario'),
    CardholderName = document.querySelector('#CardholderName'),
    CardNumber = document.querySelector('#CardNumber'),
    Month = document.querySelector('#Month'),
    Year = document.querySelector('#Year'),
    CVC = document.querySelector('#CVC'),
    Confirm = document.querySelector('#Confirm'),
    bContinue = document.querySelector('#Continue'),
    numeroTarjeta = document.querySelector('.p0'),
    nombreTarjeta = document.querySelector('.p1'),
    monthTarjeta = document.querySelector('.p2'),
    yearTarjeta = document.querySelector('.year'),
    dateVTarjeta = document.querySelector('.p3'),
    CampoVacio = document.querySelector('.campoVacio'),
    CampoVacioCardholderName = document.querySelector('.CampoVacioCardholderName'),
    CampoVacioCardNumber = document.querySelector('.CampoVacioCardNumber'),
    CamposVacios = document.querySelector('.CamposVacios'),
    Formulario = document.querySelector('#formulario'),
    state_start = document.querySelector('.state_start');

    
CardNumber.addEventListener('keyup', (e) => {
    let ValueCardNumber = e.target.value
    CardNumber.value = ValueCardNumber
    .replace(/\s/g, '')
    .replace(/\D/g, '')
    .replace(/([0-9]{4})/g, '$1 ')
    .trim()
})

Month.addEventListener('keyup', (e) => {
    let ValueMonth = e.target.value
    Month.value = ValueMonth
    .replace(/\D/g, '') 
})

Year.addEventListener('keyup', (e) => {
    let ValueYear = e.target.value
    Year.value = ValueYear
    .replace(/\D/g, '')
})

CVC.addEventListener('keyup', (e) => {
    let ValueCVC = e.target.value
    CVC.value = ValueCVC
    .replace(/\D/g, '')
})

function funcionConfirmar(){
    //Nombres
    if(CardholderName.value === '') {
        CampoVacioCardholderName.textContent = "Este campo no puede estar vacio"
    }else{
        CampoVacioCardholderName.textContent = ''
    }
    //Numero Tarjeta
    if(CardNumber.value === '') {
        CampoVacioCardNumber.textContent = "Este campo no puede estar vacio"
    }else if(CardNumber.value.length < 19){
        CampoVacioCardNumber.textContent = "El numero de caracteres está incompleto"
    } else{
        CampoVacioCardNumber.textContent = ''
    }

    //Fechas y CVC
    if(Year.value === '' || CVC.value === '') {
        CamposVacios.textContent = "Este campo no puede estar vacio"
    } else {
        CamposVacios.textContent = ''
    }
    //Mes
    if(Month.value === ''){
        CamposVacios.textContent = "Este campo no puede estar vacio"
    } else if(parseInt(Month.value) > 12 ){
        CamposVacios.textContent = "El mes no existe"
    }  
    //Envio de datos
    if(
        CardholderName.value != '' &&
        CardNumber.value != '' &&
        Month.value != '' &&
        Year.value != '' &&
        CVC.value != ''){
            numeroTarjeta.innerHTML = CardholderName.value
            nombreTarjeta.innerHTML = CardNumber.value
            monthTarjeta.innerHTML = Month.value + "/" + Year.value
            dateVTarjeta.innerHTML = CVC.value 
            Formulario.style.display = 'none'
            state_start.style.display = 'block'
        }
} 
Confirm.addEventListener('click', (e) => {
    e.preventDefault()
    funcionConfirmar()
})

//funcion agradecimiento
function funcionContinue(){
    Formulario.style.display = 'grid'
    state_start.style.display = 'none'
    location.reload()
}

