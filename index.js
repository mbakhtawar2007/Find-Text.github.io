function search(){
    const input= prompt(`Enter a word you want to find`).toLowerCase();
    var txt= document.getElementById("paragraph").innerText.toLowerCase();
    var result = txt.includes(input);
    // console.log(result)

    if(result){
        alert(`Text Found`);
    }else{
        alert(`Text not Found`);
    }
    
}