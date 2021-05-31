import productsData from './productsData.js';
import showProducts from './showProducts.js'
import {searchFilter} from './index.js'

// filter and sort main function
const filterAndSort = function() {
    
    const filteredArray = productsData.filter((product) => product.price.after >= searchFilter.price)
                                      .filter((product) => product.name.toUpperCase().includes(searchFilter.query))
                                      .filter((product) => product.rating.includes(searchFilter.ratingStar))
                                      .filter((product) => searchFilter.filterCategory.length === 0 || 
                                      product.category.filter((cat) => searchFilter.filterCategory.includes(cat)).length > 0)
                                      .sort(searchFilter.sort)


    showProducts(filteredArray) 
  };

  export default filterAndSort;