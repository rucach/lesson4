
const firebaseConfig = {
  apiKey: "AIzaSyD5dChbmXiXSMdQ18TzHHFwFC_bERDd-XE",
  authDomain: "data-41efa.firebaseapp.com",
  databaseURL: "https://data-41efa-default-rtdb.firebaseio.com",
  projectId: "data-41efa",
  storageBucket: "data-41efa.appspot.com",
  messagingSenderId: "932781995741",
  appId: "1:932781995741:web:cf0a3d1a836a09501dcd34"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function loaded(){
    document.getElementById("mainthing").innerHTML = "<label onload='loaded()'>" + localStorage.getItem(user_name) + "</label>"
}
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData(){firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEac(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//start code
name = message_data['name'];
     message = message_data['message'];
     like = message_data['likes'];
     name_with_tag = "<h4>" + name + "</h4>";
     message_with_tag = "<h4 class='message_h4'"> + message + "</h4>";
like_button = "<button class='btn warning ' id= " + firebase_message_id + " value= " + like + " onclick='updateLike(this.id)'> likes: " + like + "</button>";
     row = name_with_tag + message_with_tag+like_button;
     document.getElementById("output").innerHTML = row;
//end code
});});}
getData();