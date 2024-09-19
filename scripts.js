document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://as2.ftcdn.net/v2/jpg/08/38/19/91/1000_F_838199137_7K48DIKjI1FdGI1atWz5YjkFnmb5soOf.jpg', // Perros felices
        'https://as1.ftcdn.net/v2/jpg/07/50/65/82/1000_F_750658229_pJ1GhFR7Dh45IpwKvegPnliUEbYsQioC.jpg', // Refugio para perros
        'https://as2.ftcdn.net/v2/jpg/09/63/39/25/1000_F_963392598_OqdDXSpMn7b3s9uHhsvmkrodj6kj9BXT.jpg', // Perro en adopción
        'https://as1.ftcdn.net/v2/jpg/08/51/62/22/1000_F_851622272_jrF3NGFsm72mcFPgwai9LJeyrJCgcriG.jpg', // Refugio para cachorros
        'https://as1.ftcdn.net/v2/jpg/08/21/36/78/1000_F_821367807_BHTyE4pfC1LTJCDbBGaunMqd8NvXqHbD.jpg'  // Perro en campo
    ];

    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length; // Cicla a la siguiente imagen
        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
        document.body.style.animation = 'fadeEffect 1s ease-in-out'; // Añadir animación al cambio
    }

    // Cambia la imagen de fondo cada 3 segundos
    setInterval(changeBackgroundImage, 3000);

    // Inicia con la primera imagen
    document.body.style.backgroundImage = `url('${images[0]}')`;

    // Menú desplegable
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle the visibility of the dropdown menu
    menuIcon.addEventListener('click', (event) => {
        // Evita que el evento de clic se propague al documento
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Prevenir la propagación de clics dentro del menú desplegable
    dropdownMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Close the menu if clicking outside of it
    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });
});
