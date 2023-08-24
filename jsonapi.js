// catching my html items
let user = document.querySelector(".user");
let main = document.querySelector(".main");
let data = document.querySelector(".data");
let title = document.querySelector(".title");
let postat = document.querySelector(".postat")
let sidebar = document.querySelector(".sidebar")
// getting all api items
function getData(userId){
    let request = new XMLHttpRequest;
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId ="+userId);
    request.responseType = "json";
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status<300){
            let posts = request.response;
            data.innerHTML = "";
            for (post of posts){
                postat = `
                <div class="postat">
                    <h4 class="title">${post.title}</h4>
                    <p>${post.body}</p>
                </div>`
                data.innerHTML += postat;
                console.log("success");}
            }else{
                alert("sss");
            }
    } 

}
// get all users
function getUsers(){
    let request = new XMLHttpRequest;
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.send();
    request.onload = function(){
        if(request.status >= 200 && request.status<300){
            let users = request.response;
            sidebar.innerHTML = "";
            for (use of users){
                user = `
                    <div class="user" onclick = "userClick(${use.id})">
                        <h4 class="titl">${use.name}</h4>
                        <p class="email">${use.email}</p>
                    </div>
`
                sidebar.innerHTML += user;
                console.log("users");}
            }else{
                alert("sss");
            }
    } 

}
function userClick(id){
    getData(id);
    console.log(id);
}

getUsers();
