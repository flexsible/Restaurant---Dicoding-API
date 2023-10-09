import '../component/hero-element.js';
import '../component/app-bar.js';
const baseUrl = 'https://restaurant-api.dicoding.dev';

const main = () => {

    const getRestaurant = async () => {
    try {
        const response = await fetch(`${baseUrl}/list`);
        const responseJson = await response.json();
        
        if (responseJson.error) {
        showResponseMessage(responseJson.message);
        } else {
        renderRestaurants(responseJson.restaurants);
        }
    } catch (error) {
        showResponseMessage(error);
    }
    };

    const renderRestaurants = (restaurant) => {
        const listRestaurantElement = document.querySelector('#restaurantList');

        restaurant.forEach(restaurants => {
            listRestaurantElement.innerHTML += `
            <div class="restaurantContainer" id="restaurantContainer">
                <div class="card" id="card">
                    <div id="(${restaurants.id})" class="card-body" >
                    <img src="https://restaurant-api.dicoding.dev/images/small/${restaurants.pictureId}">
                    <h3>${restaurants.name}</h3>
                    <p>${restaurants.description}</p>
                    </div>
                </div>
            </div>
            `
        })
    }

    const heroBtn = document.querySelector('#heroBtn');
    heroBtn.addEventListener('click', () => {
        window.location.href='#restaurantList';
    })

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
      };

    document.addEventListener('DOMContentLoaded', () => {
        getRestaurant();
    })
}

export default main;