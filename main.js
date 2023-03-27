
op=(e)=>{
    let look = e.target.nextElementSibling;
    if(look.style.display === 'block'){
        console.log('none')
        look.style.display = 'none';
    }else{
        look.style.display ='block';
    }
}