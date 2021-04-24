const productsData = [
    {
      id: 1,
      name:'Fitness Ropes',
      price: { before: 150, after: 119 },
      colours: [ `Red`, `Black`, `Grey` ],
      Sizes: [ `S`, `M`, `L` ],
      photo: `ropes.jpg`
    }, {
      id: 256,
      name: { first: `Grace`, last: `Hopper` },
      gpa: 3.9,
      enrolled: [ `WDDM 113`, `WDDM 114`, `WDDM 115` ],
      photo: `grace-hopper.jpg`
    }, {
      id: 263,
      name: { first: `Alan`, last: `Turing` },
      gpa: 2.3,
      enrolled: [],
      photo: `alan-turing.jpg`
    }
  ]
  
  // Select the element (a <ul> in this case) that will hold all of the student records
  const products = document.querySelector(`#studentTable`)
  
  
  // For each of the students in our "database"
  studentsAr.forEach((student) => {
  
    // Create a list item (<li>) that is not yet added to the document
    const listItem = document.createElement(`li`)
  
    // Modify this new element, just like we would any other DOM element
    listItem.classList.add(`student`)
    listItem.innerHTML = `
      <img src="assets/img/${student.photo}" alt="${student.name.first}" class="photo">
      <b>${student.name.last}, ${student.name.first}</b>
      <data value="${student.gpa }">${ student.gpa } GPA</data>
    `
  
    // Add the new <li> element to the document
    studentTable.appendChild(listItem)
  
  })
