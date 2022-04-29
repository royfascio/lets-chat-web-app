

var firebaseConfig = {
      apiKey: "AIzaSyCozElAp4vJXDXdeC5mqBPEY1C4O_nEWCg",
      authDomain: "lets-chat-web-app-1f928.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-1f928-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-1f928",
      storageBucket: "lets-chat-web-app-1f928.appspot.com",
      messagingSenderId: "827576495602",
      appId: "1:827576495602:web:cd7ba4227fd66951760f6b"
    };
  
    
    firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

      function addRoom(){
            room_name=document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });

            localStorage.setItem("room_name",room_name);

            window.location="kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

