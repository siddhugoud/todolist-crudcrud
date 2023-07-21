const inputbox=document.getElementById("input-box")
const listcontainer=document.getElementById("list-container")



function addtask(){
    let li=document.createElement("li")
    li.innerHTML=inputbox.value
    listcontainer.appendChild(li)
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
    obj={
        name:inputbox.value
    }
    
    inputbox.value=""
    saving()
}
async function del(dd){
    
    const de=await axios.get("https://crudcrud.com/api/d5f0599cdff549829e93748fac8abf6a/abcd")
    
        for(let i=0;i<de.data.length;i++){
            if(de.data[i].email==dd){
                let idd=de.data[i]._id
                let bon="https://crudcrud.com/api/d5f0599cdff549829e93748fac8abf6a/abcd/"+idd
                function thokk(bon){return bon}
                
                
                
                const re=await axios.delete(thokk(bon))
                
                removeonscreen(dd)
                break
                

            }
            
        }       
}









    

    
    

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked")
        saving()
        
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saving()
        
        
    }
},false)





















































function saving(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function show(){
    listcontainer.innerHTML=localStorage.getItem("data")

}
show()


