import '../view/main.js';

class AppBar extends HTMLElement {
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .app-bar {
            padding: 2rem;
            width: 100%;
            /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
            display: flex;
            justify-content: space-between;
          }
          
          .app-bar a {
            font-size: 35px;
            text-decoration: none;
            color: #004225;
          }

          .app-bar a:hover {
            color: #FFB000;
          }
          
          .app-bar ul {
            display: flex;
            list-style-type: none;
            gap: 2.5rem;
            overflow: hidden:
            
          }
          
          .app-bar ul a {
            display: block;
            color: #004225;
            text-decoration: none;
            font-size: 23px;
          }

          .app-bar ul a:hover {
            color: #FFB000;
          }

          @media screen and (max-width: 900px){
            .app-bar{
              width: 100%;
            }
            .app-bar a{
              font-size: 20px;
            }
            .app-bar ul a{
              font-size: 10px;
            }
          }
        </style>
        
        <div id="appBar" class="app-bar">
        <a href="#hero">Restaurant of the World</a>
    
        <ul>
          <a href="#hero"> Home</a>
          <a href="#restaurantList"> Restaurant</a>
          <a href ="#about"> About </a>
        </ul>
    
      </div>
      `;
    }
  }
   
  customElements.define('app-bar', AppBar);