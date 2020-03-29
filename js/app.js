// Constructor para Seguroi
function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;

}

// Todo lo q se muestra la interfaz
function Interfaz(){}

//Mensaje q se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje, tipo){
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('mensaje', 'error');
    }else {
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    },3000)
}

// EventListener
const formulario = document.getElementById('cotizar-seguro');
console.log(formulario)

    // leer la marca seleccionada del select
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        const marca = document.getElementById('marca');
        const marcaSeleccionada = marca.options[marca.selectedIndex].value;

        // Leer el año seleccionado del <select>
        const anio = document.getElementById('anio');
        const anioSeleccionado = anio.options[anio.selectedIndex].value;

        //console.log(marcaSeleccionada);
        //console.log(anioSeleccionado);

        // Leer el valor del radio button
        const tipo = document.querySelector('input[name="tipo"]:checked').value;

        //crear instancia de interfaz
        const interfaz = new Interfaz();

        // Revisamos que los campos no esten vacios
        if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '' ){
            //Interfaz imprimir error
                interfaz.mostrarError('Faltan datos, revisar  el formulario y prueba de nuevo' , 'error' )
            
            //console.log('faltan datos');
        }else{
            //Instanciar seguro y mostrar interfaz
            console.log('Todo correcto')
        }


    });

const max = new Date().getFullYear(),
      min = max - 20;

const selectAnios = document.getElementById('anio');
for (let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}