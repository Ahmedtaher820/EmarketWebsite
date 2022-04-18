let email = document.getElementById("email")
let password = document.getElementById("password")
async function userLogin(){
    console.log(email)
    try{
        await fetch("https://emarket3.herokuapp.com/api/users/login",{
        method:"POST",
        body:JSON.stringify({
            email:email.value,
            password:password.value
        })
        
    })
    }
    catch(error){
        console.log(error)
    }
    
}