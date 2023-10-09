import koki from '../../aseets/koki.png'

class Hero extends HTMLElement {
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <style>
        .hero {
          /* max-width: 900px; */
          box-shadow: 2px 2px 2px -4px rgba(0, 0, 0, 0.4);
          background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 1)), url(https://e0.pxfuel.com/wallpapers/379/816/desktop-wallpaper-restaurant-background-resturant.jpg);
          background-repeat: no-repeat;
          background-size: cover;
          padding: 3rem 3rem 3rem 3rem;
          border-radius: 25px 0px 0px 25px;
          display: flex;
          /* justify-content: space-between; */
          top: 10px;
          margin: 0rem 5rem;
          opacity: calc(0.5 0.5 0.5);
        }
        
        .hero > .hero-item {
          display: flex;
          gap: 10rem;
          width: 100%;
        }
        
        .hero > .hero-item > .hero-item__text{
          margin-top: 6rem;
          text-align: center;
          color: white;
        }
        
        .hero > .hero-item > .hero-item__text h2 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }
        
        .hero > .hero-item > .hero-item__text h3 {
          font-size: 2rem;
        }
        
        .hero > .hero-item > .hero-item__text p {
          line-height: 1.5rem;
          font-size: 1.2rem;
        }
        
        .hero > .hero-item > .hero-item__text button {
          font-size: 1.5rem;
          margin-top: 1.5rem;
          /* border-radius: 10px; */
          padding: 0.7rem 2rem;
          border: none;
          display: inline-block;
          background-color: #FFB000;
          color: #fff;
        }
        
        .hero > .hero-item img {
          width: 30rem;
        }

        .hero > .hero-item > .hero-item__text button{
          cursor: pointer;
        }

        .hero > .hero-item > .hero-item__text button:hover{
          background-color: #004225;
        }

        @media screen and (max-width: 900px){
          .hero{
            flex-direction: row;
            border-radius: 25px 25px 0px 0px;
            background-image: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 1)), url(https://e0.pxfuel.com/wallpapers/379/816/desktop-wallpaper-restaurant-background-resturant.jpg);
          }

          .hero > .hero-item{
            display: flex;
            flex-direction: column-reverse;
            gap: 1px;
            align-items: center
          }

          .hero > .hero-item > .hero-item__text{
            margin-top: 2rem;
          }

          .hero > .hero-item > .hero-item__text h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }

          .hero > .hero-item > .hero-item__text h3 {
            font-size: 1rem;
          }

          .hero > .hero-item > .hero-item__text p {
            line-height: 1.5rem;
            font-size: 0.7rem;
          }

          .hero > .hero-item img {
            width: 15rem;
            height: 15rem;
          }
        }
      </style>
      

      <div class="hero" id="hero">
        <div class="hero-item" id="hero-item">
          <div class="hero-item__text" id="hero-item__text">
            <h3>Welcome to</h3>
            <h2>Restaurant of the World</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, alias.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nulla?</p>
            <button id="heroBtn">Take a look!</button>
          </div>
          
            <img src=${koki} alt="koki">
        </div>
      </div>
      `;
    }
  }
   
  customElements.define('hero-element', Hero);