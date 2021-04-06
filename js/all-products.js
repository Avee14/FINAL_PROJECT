

//const proCard = document.getElementsByClassName('pro_row');

//const addtocart = document.getElementsByClassName('addtocart');

//Array.from(addtocart).forEach(function(addtocart){
  //  addtocart.addEventListener('click', () =>{
    //    const equipParent = addtocart.parentElement.parentElement;
        

      
   // })
//})


//   const createdDivforprod = document.getElementById('pro_row');

//  window.onload() = function(){
// uploadTask.snapshot.ref.getDownloadUrl().then(function(url){
//     ImageURL = url;
//     firebase.database().ref('proddesc').set({
//         Name : equipmentName,
//         Price : equipmentPrice,
//         Image : ImageURL
      
//     });
//     alert('Image added successfully')
// })
//  }
db.collection('proddesc').get().then(snapshot => {
  setUprefrow(snapshot.docs)
})

const refproRow =  document.getElementById('pro_row');

const setUprefrow = (data) =>{
    let html = '';
    data.forEach(doc => {
      const proddata = doc.data()
      const div = ` <div class="col-md-4" id="pro_col">
      <div class="card mt-2 bg-light shadow" id="card">
        
          <div class="products align-items-center text-center p-1">
          <img src="${proddata.imgSrc}" class="img-fluid bg-white" alt="">
          <h5 class="pro_name text-dark font-weight-bold mt-3">${proddata.equipmentName}</h5>
          <div class="mt-3 price text-dark">
            <span class="pro_price">$${proddata.equipmentPrice}</span> <strike>$169.00</strike> <br> <small>Save $29.00</small>
          </div>
          <div class="star m-3 text-align">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="btns">
            <button class="btn btn-primary btn-sm m-2 addtocart" id="addtocart" onclick = "addprotocart()">Add to Cart <i class="fas fa-shopping-cart"></i></button>
            <button class="btn btn-primary btn-sm m-2 addtowishlist" id="addtowishlist">Add to Wishlist <i class="fas fa-heart"></i></button>
          </div>
          
        
        </div>
       
      </div>
    </div>`;
    html += div;
    });

    refproRow.innerHTML = html;
  }



  // const cart = {
  //   KEY : 'aveeproductsforcarts',
  //   contents : [],

  //   init(){
  //     db.collection('proddesc').get().then(snapshot => {
  //       snapshot.forEach(
  //         function(childSnapshot){
  //           let equipName = childSnapshot.val().equipmentName;
  //           let equipPrice = childSnapshot.val().equipmentPrice;
  //           let imgSRC = childSnapshot.val().imgSrc;
            
  //         }
  //       )
  //     })
      

  //     let _contents = localStorage.getItem(cart.KEY)

  //     if(contents){
  //       cart.contents =  JSON.parse(_contents);
  //     }else{
  //       contents = [
  //         equipmentName,
  //         equipPrice,
  //         imgSRC,
  //       ]
  //     }
  //   }
  // }


  // const addprotocart = (e) => {

  //   db.collection('proddesc').get().then(snapshot => {
  //     setUpCartRow(snapshot.docs)
  //   })

  // }

  // const setUpCartRow = (e) => {
  //   const cartPro = document.querySelectorAll('.addtocart');

  //   for(let i= 0; i<cartPro.length; i++){
  //     cartPro[i].addEventListener('click', (e) => {
  //       console.log('added');
  //     })
  //   }
    
  // }

  
  
 


 
  
  


    

   
  


    
 

  




