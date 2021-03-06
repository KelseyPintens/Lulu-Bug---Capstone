import { googleProvider, rebase }  from './FirebaseKey'

// export function auth (email, pw) {
//   return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
//     .then((data) => {
//       console.log("data is", data);
//       saveUser(data);
//     })
// }

export function logout () {
  return rebase.initializedApp.auth().signOut()
}

// export function login (email, pw) {
//   return rebase.initializedApp.auth().signInWithEmailAndPassword(email, pw)
// }

export function loginWithGoogle () {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    saveUser(data.user);
  });
}

export function resetPassword (email) {
  return rebase.initializedApp.auth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => {
      
      return user;
    })
}