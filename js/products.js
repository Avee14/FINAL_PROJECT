// const forLogout = document.getElementById('logoutUser');



// forLogout.addEventListener('click' , (e) =>{

//     const promise = auth.signOut();
    
//     promise.catch(e => console.log('logged out'));
//     promise.then(e => {window.location.href = "./index.html"; });
// });


const logout = (e) =>{
    const promise = auth.signOut();
    
    promise.catch(e => console.log('logged out'));
    promise.then(e => {window.location.href = "./index.html"; });
}

    
