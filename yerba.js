
var lista = document.getElementById('lista-botones');



        // Datos de ejemplo para los botones
        var botones = [
            { texto: 'Botón 1', accion: function() { alert('Botón 1 presionado'); } },
            { texto: 'Botón 2', accion: function() { alert('Botón 2 presionado'); } },
            { texto: 'Botón 3', accion: function() { alert('Botón 3 presionado'); } }
        ];

        // Iterar sobre los datos y crear los botones
        botones.forEach(function(boton) {
            // Crear un nuevo elemento de botón
            var nuevoBoton = document.createElement('button');

            // Establecer el texto del botón
            nuevoBoton.innerText = boton.texto;

            // Establecer la acción al hacer clic en el botón
            nuevoBoton.onclick = boton.accion;

            // Crear un nuevo elemento de lista
            var nuevoElementoLista = document.createElement('li');

            // Agregar el botón al elemento de lista
            nuevoElementoLista.appendChild(nuevoBoton);

            // Agregar el elemento de lista a la lista principal
            lista.appendChild(nuevoElementoLista);
        });

        function showText(toggleText) {
            toggleText.classList.toggle("active");
        }
        