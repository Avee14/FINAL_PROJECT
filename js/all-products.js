const carts = document.querySelectorAll('.addtocart');


let products = [
  { equipmentName : "Yoga Mat",
    equipmentPrice : 10,
    tag : "yogamat",
    isCart : 0,
  },
  { equipmentName : "Cycle",
    equipmentPrice : 150,
    tag : "gymcycle",
    isCart : 0,
  },
  { equipmentName : "Closeup Barbell",
    equipmentPrice : 30,
    tag : "closeupbarbell",
    isCart : 0,
  },
  { equipmentName : "Pec Fly Machine",
    equipmentPrice : 199,
    tag : "pecflymachine",
    isCart : 0,
  },
  { equipmentName : "Dumbell Rack",
    equipmentPrice : 100,
    tag : "dumbellrack",
    isCart : 0,
  },
  { equipmentName : "Treadmill",
    equipmentPrice : 169,
    tag : "gymtreadmill",
    isCart : 0,
  },
  { equipmentName : "Leg Press",
    equipmentPrice : 249,
    tag : "legpress",
    isCart : 0,
  },
  { equipmentName : "Lat Pull Down",
    equipmentPrice : 200,
    tag : "latpulldown",
    isCart : 0,
  },
  { equipmentName : "Bench",
    equipmentPrice : 100,
    tag : "chestbench",
    isCart : 0,
  },
  { equipmentName : "Adjustable Dumbells",
    equipmentPrice : 149 ,
    tag : "adjustabledumbells",
    isCart : 0,
  },
];


for(let i=0; i<carts.length; i++){
  carts[i].addEventListener('click', (e) => {
    cartnum(products[i]);
    totalCost(products[i]);
  })
}


function onLoadCartNum() {
  

  let productNum = localStorage.getItem('cartnum')

  if(productNum){
    document.querySelector('.CartQty').textContent = productNum;
  }
  

}

function cartnum(products) {
  

  let productNum = localStorage.getItem('cartnum');

  productNum = parseInt(productNum);
  
  

  if(productNum){
    localStorage.setItem('cartnum', productNum + 1);
    document.querySelector('.CartQty').textContent = productNum + 1 ;
  }else{
    localStorage.setItem('cartnum', 1);
    document.querySelector('.CartQty').textContent = 1;
  }

  setCartItems(products);
}

function setCartItems(products) {
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

      if(cartItems[products.tag] == undefined){
        cartItems = {
          ...cartItems,
          [products.tag]: products
        }
      }
      cartItems[products.tag].isCart += 1;
    }
    else{
        products.isCart = 1;
        cartItems = {
        [products.tag]: products
      }
    }

    
   localStorage.setItem('productsInCart', JSON.stringify(cartItems));

   
}
function totalCost(product){
  console.log(product.equipmentPrice);
}


onLoadCartNum();



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

// db.collection('proddesc').get().then(snapshot => {
//   setUprefrow(snapshot.docs)
//   AddToCart(snapshot.docs)
// })

// const refproRow =  document.getElementById('pro_row');

// const AddToCart = () => {

// }
// const setUprefrow = (data) =>{
//     let html = '';
//     data.forEach(doc => {
//       const proddata = doc.data()
//       const div = ` <div class="col-md-4" id="pro_col">
//       <div class="card mt-2 bg-light shadow" id="card">
        
//           <div class="products align-items-center text-center p-1">
//           <img src="${proddata.imgSrc}" class="img-fluid bg-white" id='productImg' alt="">
//           <h5 class="pro_name text-dark font-weight-bold mt-3">${proddata.equipmentName}</h5>
//           <div class="mt-3 price text-dark">
//             <span class="pro_price">$${proddata.equipmentPrice}</span>
//           </div>
//           <div class="star m-3 text-align">
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star"></i>
//             <i class="fas fa-star-half-alt"></i>
//           </div>
//           <div class="btns">
//             <button class="btn btn-primary btn-sm m-2 addtocart" id="addtocart" onclick="addprotocart()">Buy Now<i class="fas fa-shopping-cart"></i></button>
            
//           </div>
//         </div>
//       </div>
//     </div>`;
//     html += div;
//     });
   

//     refproRow.innerHTML = html;
   
//   }

//   const addprotocart = (e) =>{
//     alert('product bought')
    
//   }
  








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

// const addtocartId = document.getElementsByClassName('addtocart')


// for(let i=0; i<addtocartId.length; i++){
//   addtocartId[i].addEventListener('click', addprotocart());
// }

// const addprotocart = (e) => {
//   currentaddtocartbtn = e.target;
//   console.log(currentaddtocartbtn);
// }

//   const addprotocart = (e) => {
    

// }

  