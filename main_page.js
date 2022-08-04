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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});}