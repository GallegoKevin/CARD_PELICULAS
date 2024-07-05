#  Movie cards 

![Movies](https://i.ibb.co/1ZMykjW/Fire-Shot-Capture-002.png)

Muestra una lista de películas con sus detalles y una imagen de vista previa.

## Características:

- **Despliegue de tarjetas**: Muestra las películas en formato de tarjetas con imágenes y detalles.
- **Animaciones y transiciones**: Efectos de hover y transiciones para una mejor experiencia de usuario.
- **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla.

## Descripción:

1. **Card.jsx**;
    - Se Define el componente Card de React que representa una tarjeta individual de película.
    - Se renderiza una tarjeta con una imagen principal, detalles de la película como título, descripción, año, género, y una imagen adicional que se muestra al hacer hover.
    - Se Utiliza props para pasar la información dinámicamente a cada tarjeta desde un archivo JSON (peliculas.json).

2. **cardStyle.css**;

    - Definimos los Estilos CSS específicos para el componente Card.
    - Definimos el diseño visual de la tarjeta y sus elementos internos, incluyendo animaciones de hover y transiciones.
    - Se Establece la apariencia de la tarjeta, cómo se muestra la imagen principal, cómo se anima al hacer hover y los estilos para los detalles de la película.

3. **App.jsx**;
    - Se define la estructura general de la página, incluyendo encabezado, contenido principal y las tarjetas de películas.
    - Se Itera sobre los datos de peliculas.json, crea instancias de Card para cada película y las muestra en la interfaz de usuario.

5. **index.css**;
    - Se define estilos que se aplican globalmente a todos los elementos en la aplicación.
    - Se Incluyen configuraciones de fuentes, colores de fondo y estilos de enlace que afectan a toda la página.

7. **peliculas.json**;
- Almacena datos estáticos de películas.
- Contiene la información de cada película, incluyendo URLs de imágenes, títulos, descripciones, años y géneros. usados por el componente App para iterar sobre los datos y generar dinámicamente las tarjetas de películas en la interfaz.


## CARD MOVIES __ GIF

![Card](https://i.ibb.co/8NVYPyG/Vite-React-Google-Chrome-2024-07-05-15-02-28.gif)
