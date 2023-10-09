class About extends HTMLElement {
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <style>

      .about{
        z-index: -1;
      }

      .about > .about-item {
          margin: 10rem 0px;
          /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          background-color: #F5F5DC; */
          display: flex;
          justify-content: space-between;
          flex-direction: row;
        }
        
        .about > .about-item > .about-text {
          text-align: center;
          background-color: #fff;
          width: 50%;
          margin: auto;
          padding: 0px 5rem;
        }
        
        .about > .about-item > .about-text h2 {
          font-size: 4rem;
          margin-bottom: 2rem;
          z-index: 3;
        }
        
        .about > .about-item > .about-text span {
          font-size: 4rem;
          margin-bottom: 2rem;
          color: #FFB000;
          z-index: 3;
        }
        
        .about > .about-item > .about-text p {
          font-size: 1.2rem;
          line-height: 1.5rem;
          font-weight: 300;
          z-index: 3;
        }
        
        .about > .about-item > .about-image img {
          width: 100%;
          height: 30rem;
          box-shadow: 1px 6px 4px 1px rgba(0, 0, 0, 0.1);
        }
        
        .about > .about-item > .about-text h3 {
          font-weight: 300;
          margin-top: 2rem;
          z-index: 3;
        }
        

        @media screen and (max-width: 900px){
          .about > .about-item > .about-text h2 {
            font-size: 3rem;
          }
          
          .about > .about-item > .about-text span {
            font-size: 3rem;
          }

          .about > .about-item > .about-text p {
            font-size: 0.9rem;
            line-height: 1.5rem;
            font-weight: 100;
          }

          .about > .about-item > .about-text h3 {
            font-weight: 300;
            font-size: 1rem;
          }

          .about > .about-item > .about-image img {
            width: 100%;
            height: 22rem;
          }
        }

        @media screen and (max-width: 700px){
          .about > .about-item > .about-text h2 {
            font-size: 1.5rem;
          }
          
          .about > .about-item > .about-text span {
            font-size: 1.5rem;
          }

          .about > .about-item > .about-text p {
            font-size: 0.7rem;
            line-height: 1.2rem;
            font-weight: 100;
          }

          .about > .about-item > .about-text h3 {
            font-weight: 300;
            font-size: 0.8rem;
          }

          .about > .about-item > .about-image img {
            width: 100%;
            height: 17rem;
          }
        }

      </style>

      <div class="about" id="about">
  
        <div class="about-item">
        
            <div class="about-text">
            <h2>About 
                <span>Us</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum adipisci sunt, eos praesentium ut deleniti et odio pariatur eius!</p>
    
            <h3>
                Tasikmalaya, Jawabarat 46196
            </h3>
            </div> 

            <div class="about-image">
              <img src="https://restaurant-api.dicoding.dev/images/small/15">
            </div>

        </div>

      </div>

      `;
    }
  }
   
  customElements.define('about-element', About);