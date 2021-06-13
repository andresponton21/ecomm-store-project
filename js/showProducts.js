import {productsSection} from './index.js'

const showProducts = function(prodArray){  
    productsSection.innerHTML = '<h2 class="subheading">Results</h2>'
    prodArray.forEach((product) => {
  
    const oneProduct = document.createElement(`article`)
    oneProduct.classList.add(`product`)
    oneProduct.innerHTML = `
        <header>
        <a class="product-name" href="${product.linkTo}">
        <img class="images" src="assets/img/${product.photo}.jpg" alt="${product.name}" >
        </a>
        <a class="product-name" href="${product.linkTo}">
        <h3>${product.name}</h3></a>
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
};

export default showProducts;