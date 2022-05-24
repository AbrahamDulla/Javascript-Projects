var database = [
    {
        username: "Abraham",
        password: "abrish"
    },
    {
        username: "Surafel",
        password: "surpog"
    },
    {
        username: "Mulualem",
        password: "mule"
    },
    {
        username: "Abdulsemed",
        password: "abd"
    }

];


function signIn(username, password){

    var username = document.getElementById("username-input").value;
    var password = document.getElementById("password-input").value;
    
    for(i=0; i<database.length; i++){
        if(username === database[i].username && password === database[i].password){
            window.location.href = "index.html";
            // document.getElementById("info").innerHTML = username+" You are logged in";
            return
        }
    }

        document.getElementById("info").innerHTML = " Unknown user";
}

function signOut(){
    window.location.href = "signIn.html";
}
