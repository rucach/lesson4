// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    */
   localStorage.setItem("user_name", user_name);
   /*
    window.location = "chat_room.html";
    */
   window.location = "chat_room.html";
}



