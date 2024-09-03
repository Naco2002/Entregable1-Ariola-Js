
document.addEventListener('DOMContentLoaded', (event) => {
    
    const form = document.getElementById('userForm');
    const mensaje = document.getElementById('mensaje');
    const continuarBtn = document.getElementById('continuar');

    const minEdad = 18;
    const maxEdad = 100;

    
    let userEdades = JSON.parse(localStorage.getItem('userEdades')) || [];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const userNombre = form.nombre.value;
        const userEdad = parseInt(form.edad.value, 10);

        if (isNaN(userEdad) || userEdad < minEdad || userEdad > maxEdad) {
            alert('Por favor, ingresa una edad válida entre 18 y 100.');
            return;
        }

        
        mensaje.textContent = `Bienvenido, ${userNombre}`;

        
        userEdades.push(userEdad);
        localStorage.setItem('userEdades', JSON.stringify(userEdades));

        
        console.log('Nombre del usuario:', userNombre);
        console.log('Edad del usuario:', userEdad);
        console.log('Edades Ingresadas:', userEdades);
    });

    continuarBtn.addEventListener('click', function() {
        const continuarResponder = confirm('¿Deseas continuar?');
        if (continuarResponder) {
            console.log('El usuario ha decidido continuar');
        } else {
            console.log('El usuario ha decidido salir');
        }
    });
});
