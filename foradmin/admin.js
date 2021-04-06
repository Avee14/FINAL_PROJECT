const btnchosefile = document.getElementsByClassName('file-btn')[0];
const realFileBtn = document.getElementsByClassName('real-file')[0];


const equipNameText = document.getElementById('equip-name')
const equipPriceText = document.getElementById('equip-price')
const submitadminBtn = document.getElementById('equip-sub-btn')


//File Input Button


btnchosefile.addEventListener('click', function(){
    realFileBtn.click();
});



//Equipname TextField 
equipNameText.addEventListener('change', function(){
    
})

equipPriceText.addEventListener('change', function(){
    
})

const imgselected = document.querySelector('#adminSelectedImg');


let files = [];
realFileBtn.addEventListener('click' , function(e){
    
    realFileBtn.onchange = e => {
        files = e.target.files;
        reader = new FileReader();
        reader.onload = () =>{
            imgselected.src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    realFileBtn.click();

})


const addImgtoFirebase = () => {
    const imageName = document.querySelector('#adminSelectedImg').value;
    
    storage.ref('Products/'+imageName).put(files[0]).then(() =>{
    storage.ref('Products').child(imageName).getDownloadURL().then(url => {
        const buildimg = document.querySelector('#builderImg').src = url;

        db.collection('proddesc').add({
            equipmentName : equipNameText.value,
            equipmentPrice : equipPriceText.value,
            imgSrc : url,
            isCart : 'no'
        })
        
        
    }).catch(e =>{
        console.log(e);
    })
        

    })
}

