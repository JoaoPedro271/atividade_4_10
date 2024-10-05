<template>
    <div class="container">
      <h1>Home</h1>
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://img.freepik.com/free-photo/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai_188544-15599.jpg" class="d-block w-100" alt="Image 1">
          </div>
          <div class="carousel-item">
            <img src="https://img.freepik.com/fotos-gratis/porta-que-leva-ao-mundo-magico_23-2151038238.jpg" class="d-block w-100" alt="Image 2">
          </div>
          <div class="carousel-item">
            <img src="https://images.ctfassets.net/cnu0m8re1exe/54Y9H2fT0aJpxyn5ekVRXS/f4f0f537ef4a5d131266f5401657dc0a/Scientists_Mt_Rushmore_-_Mark_Marturello_DSC-A0517_01.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" class="d-block w-100" alt="Image 3">
          </div>
          <div class="carousel-item">
            <img src="https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=2000%2C1500&ssl=1" class="d-block w-100" alt="Image 3">
          </div>
          <div class="carousel-item">
            <img src="https://www.collegenp.com/uploads/2023/10/Exploring-the-Multiverse.jpeg" class="d-block w-100" alt="Image 3">
          </div>
          <div class="carousel-item">
            <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Discovering-Hyperspace-Shaped-Star-Wars-Universe-Changed-It-Forever.jpg" class="d-block w-100" alt="Image 3">
          </div>
          <div class="carousel-item">
            <img src="https://media.licdn.com/dms/image/C4D12AQH1cC6JpTOhag/article-cover_image-shrink_720_1280/0/1520098141395?e=2147483647&v=beta&t=5ghyHF6xftgp483OyBrMVJsJuu9QpVyUK5-5HHXPycc" class="d-block w-100" alt="Image 3">
          </div>
          <div class="carousel-item">
            <img src="https://wallpapers.com/images/hd/stylized-son-of-the-christian-god-fjln425gnzvdxvfw.jpg" class="d-block w-100" alt="Image 3">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>

.carousel-inner img {
  width: auto;
  max-width: 50%; 
  height: 450px;
  object-fit: cover; 
  margin: 0 auto; 
}

.carousel-control-prev,
.carousel-control-next {
  filter: invert(1); 
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(255, 255, 255, 0.5); 
  border-radius: 50%; 
}

  </style>
  