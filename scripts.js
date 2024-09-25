document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://as2.ftcdn.net/v2/jpg/08/38/19/91/1000_F_838199137_7K48DIKjI1FdGI1atWz5YjkFnmb5soOf.jpg', 
        'https://as1.ftcdn.net/v2/jpg/07/50/65/82/1000_F_750658229_pJ1GhFR7Dh45IpwKvegPnliUEbYsQioC.jpg',
        'https://as2.ftcdn.net/v2/jpg/09/63/39/25/1000_F_963392598_OqdDXSpMn7b3s9uHhsvmkrodj6kj9BXT.jpg', 
        'https://as1.ftcdn.net/v2/jpg/08/51/62/22/1000_F_851622272_jrF3NGFsm72mcFPgwai9LJeyrJCgcriG.jpg', 
        'https://as1.ftcdn.net/v2/jpg/08/21/36/78/1000_F_821367807_BHTyE4pfC1LTJCDbBGaunMqd8NvXqHbD.jpg'
    ];

    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length; 
        document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
        document.body.style.animation = 'fadeEffect 1s ease-in-out';
    }

    setInterval(changeBackgroundImage, 3000);

    document.body.style.backgroundImage = `url('${images[0]}')`;

    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 300);
        } else {
            dropdownMenu.style.display = 'block';
            setTimeout(() => {
                dropdownMenu.classList.add('show');
            }, 0);
        }
    });

    dropdownMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    document.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 300);
        }
    });

    // Redirección al formulario de registro de mascotas
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
        window.location.href = 'perros.html'; // Redirige a la página de perros
    });
});
