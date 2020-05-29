let nome = document.getElementById("nome");
let senha = document.getElementById("senha");
let confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", async () => {
  try {
    //let teste = await firebase.auth().createUserWithEmailAndPassword(nome.value, senha.value)
    let teste = await firebase.auth().signInWithEmailAndPassword(nome.value, senha.value);
    console.log(teste);  
  } catch (error) {
    alert(error.message);
  }
});

var uiConfig = {
  signInSuccessUrl: 'http://localhost:5000/#login-sucesso',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: 'http://localhost:5000/#tos',
  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign('http://localhost:5000/#policy');
  }
};

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);