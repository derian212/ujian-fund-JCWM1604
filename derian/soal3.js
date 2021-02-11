

var aRRUser = [
    {username:"alee", email:"alee@gmail.com",role:"admin" }
    {username:"jennie", email:"jenniebp@gmail.com",role:"user" }
    {username:"alee", email:"elsa@disney.com",role:"user" }
]

var ARRROLE = ["admin","user"]
var indexEdit=-1

const AddUser =()=>{
    document.getElementById('role').value=0
    document.getElementById('username').value.toLowerCase()
    document.getElementById('email').value.toLowerCase()
}

const Printdata=(arr)=>{
let result=arr.map((val,index)=>{
    if(indexEdit == index){
        return `<tr>
        <td>${val.username}</td>
         <td>${val.email}</td>
         <td>${val.role}</td>
         <td><input type="text" placeholder="nama" value=${val.username} id="inputEditNama${index}"> </td>
         <td><input type="text" placeholder="email" value=${val.email} id="inputEditEmail${index}"></td>
         <td><input type="number" placeholder="role" value=${val.role} id="inputEditRole${index}"></td>
        <input type="button" value="Save" onclick="onEditSaveClick(${val.id})">
        <input type="button" value="Cancel" onclick="onCancelEditClick()">
    </td>
    </tr>`

    }
    return `<tr>
        <td>${val.username}</td>
         <td>${val.email}</td>
         <td>${val.role}</td>
    
        <td>
        <input type="button" value="Save" onclick="onEditSaveClick(${val.username},${val.email},${role})">
        <input type="button" value="Cancel" onclick="onCancelEditClick()">
    </td>
    </tr>`
})

document.getElementById('renderData').innerHTML=result.join('')
}


const onEditClick=(index)=>{
    indexEdit=index
    Printdata(aRRUser)
}
const onEditSaveClick=(id)=>{
    var editNama=document.getElementById('inputEditNama'+indexEdit)
    var editEmail=document.getElementById('inputEditEmail'+indexEdit)
    var editRole=document.getElementById('inputEditRole'+indexEdit)
const indexEdit=aRRUser.findIndex((val)=>val.id == id)
aRRUser[indexEdit]. username=editNama
aRRUser[indexEdit]. email=editEmail
aRRUser[indexEdit]. role=editRole
indexEdit=-1
Printdata(aRRUser)
}

const onCancelEditClick=()=>{
    indexEdit=-1
    Printdata(aRRUser)
}

const filter=()=>{
    var Role= document.getElementById('role').value=0
    var User= document.getElementById('username').value.toLowerCase()
    var Email= document.getElementById('email').value.toLowerCase()
}