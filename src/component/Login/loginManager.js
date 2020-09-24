import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            //    const singedInUser = {name: displayName, email};
            const singedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            }
            return singedInUser;

            // setLoggedInUser(singedInUser);
        }).catch(function (error) {
            // Handle Errors here.
            console.log(error);
            console.log(error.message);
        });
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
            const { displayName } = res.user;
            const singedInUser = {
                isSignedIn: true,
                name: displayName,
                success:true
            }
            return singedInUser;
          
        }).catch(function (error) {
            console.log(error);
            console.log(error.message);
        });
}

export const handleSignOut = () => {
     return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: '',
                error: '',
                success: false
            }
            return signedOutUser;
        })
        .catch(error => {
            console.log(error)
        })
}

export const createUserWithEmailAndPassword = (name, email, password) => {
     return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserName(name);
        return newUserInfo;
    })
    .catch(error => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
    });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        return newUserInfo;
    })
    .catch(function (error) {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
    });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(function () {
        console.log('user name update successfully')
    }).catch(function (error) {
        console.log(error)
    });
}