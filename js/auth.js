  const gloginbtn = document.getElementById('glogin');

  gloginbtn.addEventListener('click', (e) => {
    auth.signInWithPopup(provider).then((result) =>{
      user = result.user;
      
      
    }).catch((e) => {
      console.log(e);
    });
    
  })
  //window.load = googlelogin();
  
//redirecting




  auth.onAuthStateChanged(user =>{
    if(user){
      window.location.href = "/html/products.html"
      
    }else{
      
    }
  });
  
