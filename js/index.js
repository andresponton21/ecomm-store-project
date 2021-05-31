import productsData from './productsData.js';


  const searchFilter = {
    query: '',
    price: 0,
    filterCategory: [],
    sort: () => {},
    ratingStar:''
  }

  //Products are added to the UI using JavaScript only 
  //(reading from the products Array)
  
  const productsSection = document.querySelector(`.results`)
  const searchInput = document.querySelector('.search-input')
  const selectOption = document.querySelector('.select-option')
  const filterCategories = document.querySelector('.filter-category')
  const filterPrice = document.querySelector(`#filterPrice`)
  const filterRating = document.querySelector(`#filterRating`)




  const showProducts = function(prodArray){  
    productsSection.innerHTML = '<h2 class="subheading">Results</h2>'
    prodArray.forEach((product) => {
  
    const oneProduct = document.createElement(`article`)
    oneProduct.classList.add(`product`)
    oneProduct.innerHTML = `
        <header>
        <img src="assets/img/${product.photo}.jpg" alt="${product.name}" >
        <h3>${product.name}</h3>
        <data value="119"><del>$${product.price.before.toFixed(2)}</del> <ins>$${product.price.after.toFixed(2)}</ins></data>
        <p>${product.description}</p>
      
        <dt>Rating</dt>
          <dt>
            <img class="star" src="assets/SVG/${product.rating}stars.svg" alt="stars">
            <!-- <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span> -->
          </dt>
        <a class="see-more" href="${product.linkTo}">see product</a>
    </header>
    <form class="form-options">
        <fieldset class="product-options">
        <legend>${product.filters[0].filterName}</legend>
        <ul>
            <li><label class="radio-button"><input type="radio" class="radio" name="colour" value="r"> ${product.filters[0].filterOptions[0]}</label></li>
            <li><label class="radio-button"><input type="radio" class="radio" name="colour" value="b"> ${product.filters[0].filterOptions[1]}</label></li>
            <li><label class="radio-button"><input type="radio" class="radio" name="colour" value="g"> ${product.filters[0].filterOptions[2]}</label></li>
        </ul>
        </fieldset>
        <fieldset class="product-options">
        <legend>${product.filters[1].filterName}</legend>
        <ol>
            <li><label class="radio-button"><input type="radio" class="radio" name="size" value="s"> ${product.filters[1].filterOptions[0]}</label></li>
            <li><label class="radio-button"><input type="radio" class="radio" name="size" value="m"> ${product.filters[1].filterOptions[1]}</label></li>
            <li><label class="radio-button"><input type="radio" class="radio" name="size" value="l"> ${product.filters[1].filterOptions[2]}</label></li>
        </ol>
        </fieldset>
    </form>
    <footer class="product-options add-product">
        <button type="button" class="add-to-cart" id="${product.id}"></button>
        <button type="button" class="add-favourite"></button>
    </footer>
    `
  
    productsSection.appendChild(oneProduct)
  
  })
}

// filter and sort main function
  const filterAndSort = function() {
    
    const filteredArray = productsData.filter((product) => product.price.after >= searchFilter.price)
                                      .filter((product) => product.name.toUpperCase().includes(searchFilter.query))
                                      .filter((product) => product.rating.includes(searchFilter.ratingStar))
                                      .filter((product) => searchFilter.filterCategory.length === 0 || 
                                      product.category.filter((cat) => searchFilter.filterCategory.includes(cat)).length > 0)
                                      .sort(searchFilter.sort)


    showProducts(filteredArray) 
  }
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
  
  


// add products to cart
// const addedToCart = []
// const addToCart = document.querySelectorAll('.add-to-cart')
// const cartIcon = document.querySelector(`.added-to-cart`)



// addToCart.forEach(button =>{

//   button.addEventListener('click', function(event, index){
//      index = button.id
//      const products = [...productsData]
//      const addedProduct = products[index]
//      addedToCart.push(addedProduct)
//      cartIcon.textContent = addedToCart.length

//   })
// })

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
