
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDY89PfHsq4yjOXp_fkCYEPpPCFdZzbdQ0",
      authDomain: "kwitter-5fa9e.firebaseapp.com",
      databaseURL: "https://kwitter-5fa9e-default-rtdb.firebaseio.com",
      projectId: "kwitter-5fa9e",
      storageBucket: "kwitter-5fa9e.appspot.com",
      messagingSenderId: "697575724773",
      appId: "1:697575724773:web:7085689f5b31e458f5660c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome:"+user_name;
    
function getData() 
    { firebase.database().ref("/").on('value', function(snapshot) { 
          document.getElementById("output").innerHTML = "";
           snapshot.forEach(function(childSnapshot) { 
                 childKey = childSnapshot.key; 
                 Room_names = childKey; 
                 console.log("Room Name - " + Room_names); 
                 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
                 document.getElementById("output").innerHTML += row; }); }); }
getData();

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_room.html";
}
 function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}