  //Image viewer for single product

  const gallery = document.querySelector('.image-grid')
  const mainImg = document.querySelector('.main-img')

  const setImg = (event) => {
      if (!event.target.matches('img')){
          return
      }


      const getAttributeSrc = event.target.getAttribute('src')
      const getAttributeAlt = event.target.getAttribute('alt')
      event.target.setAttribute('src', mainImg.getAttribute('src'))

      mainImg.setAttribute('src', getAttributeSrc)
      mainImg.setAttribute('alt', getAttributeAlt)

  }

  gallery.addEventListener('click', setImg)




  