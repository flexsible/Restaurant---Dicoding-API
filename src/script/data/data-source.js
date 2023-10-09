import foods from './foods.js';

class DataSource {
  static fetchFood(id){
    return fetch(`https://restaurant-api.dicoding.dev/detail/:${id}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if (responseJson.id){
        return Promise.resolve(responseJson.id);
      } else {
        return Promise.reject(`${id} is not on the list`);
      }
    })
  }
}

export default DataSource;