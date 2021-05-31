import filterAndSort from './filterAndSort.js';



  export const searchFilter = {
    query: '',
    price: 0,
    filterCategory: [],
    sort: () => {},
    ratingStar:'',
    addedToCart : []
  }

  //Products are added to the UI using JavaScript only 
  //(reading from the products Array)
  
  export const productsSection = document.querySelector(`.results`)
  const searchInput = document.querySelector('.search-input')
  const selectOption = document.querySelector('.select-option')
  const filterCategories = document.querySelector('.filter-category')
  const filterPrice = document.querySelector(`#filterPrice`)
  const filterRating = document.querySelector(`#filterRating`)



//filter with range value
  filterPrice.addEventListener(`input`, function(event) {

    const theRange = event.target
    const theOutput = document.querySelector(`output[for="filterPrice"]`)
    theOutput.textContent = `$${theRange.value}`  
    searchFilter.price = Number(theRange.value)
  
    filterAndSort()
  
  })


  //look for a product with input search
  searchInput.addEventListener(`input`, function(event) {
    searchFilter.query = event.target.value.toUpperCase()
    filterAndSort()
  })

// sort by price with option select input
  selectOption.addEventListener(`change`, function(event) {
  
    if (event.target.value === "0") {
      searchFilter.sort = (a, b) => a.price.after - b.price.after
    } else if (event.target.value === "1") {
      searchFilter.sort = (a, b) => b.price.after - a.price.after
    } else {searchFilter.sort = ()=>{}}
  
    filterAndSort()
  })


//filter with checkbutton
filterCategories.addEventListener(`change`, function(event) {
  
  const newProductCategory = event.target.form.elements[event.target.name]

  searchFilter.filterCategory = [...newProductCategory]
                            .filter((prod) => prod.checked)
                            .map((prod) => prod.value)
                          
  filterAndSort()
})

filterRating.addEventListener('click', function(event){
  
  searchFilter.ratingStar = event.target.value
  
  filterAndSort()
  //Reset the rating value to empty
  searchFilter.ratingStar = ''
})
  
filterAndSort()

// add products to cart array

const addToCart = document.querySelectorAll('.add-to-cart')
const cartIcon = document.querySelector(`.added-to-cart`)



addToCart.forEach(button =>{
  
  button.addEventListener('click', function(event){
    searchFilter.addedToCart.push(event.target.id)
    cartIcon.textContent = searchFilter.addedToCart.length
  
  })
})

//Main menu that will toggle open/closed in the smallest viewport size

const navToggle = document.querySelector(`.nav-toggle`)
const navMenu = document.querySelector(`#nav-menu`)
const showSubMenu = document.querySelector('.show-submenu')
const subMenu = document.querySelector('#submenu')

showSubMenu.addEventListener(`click`, function(event){
    
  subMenu.classList.toggle('show-sub-submenu')
})

navToggle.addEventListener(`click`, function(event){
    
    navMenu.classList.toggle('show-nav')
})
