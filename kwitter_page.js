//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) {
             document.getElementById("output").innerHTML = ""; 
             snapshot.forEach(function(childSnapshot) { 
                   childKey  = childSnapshot.key; 
                   childData = childSnapshot.val();
                    if(childKey != "purpose") {
firebase_message_id=childKey;
      message_data = childData;
name=message_data["name"];
      msg=message_data["message"];
like=message_data["like"];
      console.log(name);
console.log(msg);
      nameWithTag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messageWithTag="<h4>"+msg+"</h4>";
      buttonWithTag="<button class='btn btn-warning' id="+firebase_messsage_id+" onclick='updateLikes(this.id)' value="+like+">";
spanWithTag="<span class='glyphicon glyphicon-thumbs-up'>like"+like+"</span></button><hr>";
row=nameWithTag+messageWithTag+buttonWithTag+spanWithTag;
document.getElementById("output").innerHTML+=row;
//Start code

//End code
      } });  }); }
getData();
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,message:msg,like:0
});
document.getElementById("msg").value="";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
function updateLikes(msg_id){
      console.log("Daksh");
button_id=msg_id;
console.log(button_id);
likes=document.getElementById("button_id").value;
console.log(likes);
update_likes=Number(likes)+1;
console.log(update_likes);
firebase.database.ref(room_name).child(msg_id).update({
like:update_likes
});
}