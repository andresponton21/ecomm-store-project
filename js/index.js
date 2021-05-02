
// An Array of 10 unique products, 
// each reflecting all of the properties 
// required to build the elements within the interface


const productsData = [
    {
      id: 0,
      name:'Fitness Ropes',
      price: { before: 150, after: 119 },
      filters: [
         {
         filterName:`Colours`,
         filterOptions:[ `Red`, `Black`, `Grey` ]
        },
        {
         filterName:`Sizes`,
         filterOptions:[ `S`, `M`, `L` ]
        },  
      ],
      photo: `ropes`,
      description: `You'll train the muscles in your upper back, arms, abs, back, 
      glutes and if you incorporate jumps, lunges, and squats`,
      linkTo:`Pages/product.html`
    }, 
    {
      id: 1,
      name:'Core and Stability Balls',
      price: { before: 89, after: 69 },
      filters: [
         {
         filterName:`Colours`,
         filterOptions:[ `Red`, `Black`, `Blue` ]
        },
        {
         filterName:`Sizes`,
         filterOptions:[ `S`, `M`, `L` ]
        },  
      ],
      photo: `stability_core`,
      description: `Adding core strengthening to your exercise routine can help protect your back and neck. 
      By boosting your core strength`,
      linkTo:`Pages/product.html`
    },
  
      {
        id: 2,
        name:'Indoor Bikes',
        price: { before: 780, after: 619 },
        filters: [
            {
            filterName:`Features`,
            filterOptions:[ `Standar`, `Premium`, `Enhanced` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `S`, `M`, `L` ]
           },  
         ],
        photo: `bike`,
        description: `These help you shed fat, improve your heart health, and boost your muscle endurance. 
        Your legs will get a serious workout.`,
        linkTo:`Pages/product.html`
      }, 
      {
        id: 3,
        name:'Dumbbells',
        price: { before: 150, after: 90 },
        filters: [
            {
            filterName:`Weight`,
            filterOptions:[ `5 kgs`, `20 kgs`, `30 kgs` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `S`, `M`, `L` ]
           }, 
          
         ],
        photo: `dumbell`,
        description: `Dumbbells can give you a great full body workout and are ever preferred for certain exercises by some. 
        For each body part their is a wide variety of dumbbell movements that can be preformed`,
        linkTo:`Pages/product.html`
      }, 
      {
        id: 4,
        name:'Treadmills',
        price: { before: 2140, after: 1240 },
        filters: [
            {
            filterName:`Features`,
            filterOptions:[ `Standar`, `Premium`, `Enhanced` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `S`, `M`, `L` ]
           },  
         ],
        photo: `treadmill`,
        description: `Walking or running on a treadmill is an excellent source of exercise 
        that puts less stress on the body than walking or running on a flat surface outdoors`,
        linkTo:`Pages/product.html`
      }, 
      {
        id: 5,
        name:'Mats',
        price: { before: 39, after: 29 },
        filters: [
            {
            filterName:`Colours`,
            filterOptions:[ `Magenta`, `Black`, `Pink` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `M`, `L`, `XL` ]
           },  
         ],
        photo: `matt`,
        description: `Is perfect for a Enhanced body strength, 
        HIIT workouts, crunches, pushups and yoga`,
        linkTo:`Pages/product.html`
      }, 
      {
        id: 6,
        name:'Boxing Gloves',
        price: { before: 99, after: 79 },
        filters: [
           {
           filterName:`Colours`,
           filterOptions:[ `Red`, `Black`, `Yellow` ]
          },
          {
           filterName:`Sizes`,
           filterOptions:[ `S`, `M`, `L` ]
          },  
        ],
        photo: `boxing`,
        description: `cushioned gloves that boxers wear during matches and training sessions. 
        They're designed to protect the wearer and his or her opponent from injuries while fighting`,
        linkTo:`Pages/product.html`
      }, 
      {
        id: 7,
        name:'Leggings',
        price: { before: 89, after: 39 },
        filters: [
           {
           filterName:`Colours`,
           filterOptions:[ `Blue`, `Black`, `Pink` ]
          },
          {
           filterName:`Sizes`,
           filterOptions:[ `S`, `M`, `L` ]
          },  
        ],
        photo: `clothing`,
        description: `worn for warmth and protection by both men and women throughout the centuries. 
        The linen pantalettes worn by girls and women under crinolines in the mid-19th century were also a 
        form of leggings, and were originally two separate garments`,
        linkTo:`Pages/product.html`
      }, 
      {
        id: 8,
        name:'Skateboards',
        price: { before: 109, after: 99 },
        filters: [
           {
           filterName:`Designs`,
           filterOptions:[ `Oldschool`, `Modern`, `Custom` ]
          },
          {
           filterName:`Sizes`,
           filterOptions:[ `S`, `M`, `L` ]
          },  
        ],
        photo: `outdoors`,
        description: `sports scientists have confirmed that skateboarding is a complete workout in itself. 
        It not only works the cardiovascular system but also builds muscular strength. 
        The core of a skateboarder plays a very crucial role`,
        linkTo:`Pages/product.html`
      }, 
      {
        id: 9,
        name:'Lifting Bars',
        price: { before: 399, after: 250 },
        filters: [
            {
            filterName:`Colours`,
            filterOptions:[ `Red`, `Black`, `Grey` ]
           },
           {
            filterName:`Sizes`,
            filterOptions:[ `M`, `L`, `XL` ]
           },  
         ],
        photo: `liftbar`,
        description: `A piece of exercise equipment used in weight training, 
        bodybuilding, weightlifting and powerlifting`,
        linkTo:`Pages/product.html`
      }, 
  ]

  //Products are added to the UI using JavaScript only 
  //(reading from the products Array)
  
  const productsSection = document.querySelector(`.results`)
  const searchInput = document.querySelector('.search-input')

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
            <img class="star" src="assets/SVG/fourstars.svg" alt="stars">
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
//showProducts(productsData)

  //Products can be filtered 
  //(each student will implement ONE filtering method)
  //implementing a search filter



  searchInput.addEventListener('input', function(event){
      const queryProduct = event.target.value.toUpperCase()
      
      const filterProducts = productsData.filter(function(product){
        
        let prodName = product.name.toUpperCase()

        return (prodName.includes(queryProduct))
         
        
      })

      showProducts(filterProducts) 
      
  })


  showProducts(productsData)
  
  


// add products to cart
const addedToCart = []
const addToCart = document.querySelectorAll('.add-to-cart')
const cartIcon = document.querySelector(`.added-to-cart`)



addToCart.forEach(button =>{

  button.addEventListener('click', function(event, index){
     index = button.id
     const products = [...productsData]
     const addedProduct = products[index]
     addedToCart.push(addedProduct)
     cartIcon.textContent = addedToCart.length

  })
})

