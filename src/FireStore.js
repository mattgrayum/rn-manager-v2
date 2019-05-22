import firebase from 'firebase'
import 'firebase/firestore'

export const firebaseInit = () => {

    const config = {
        apiKey: 'AIzaSyDxGeAdGYZLpyuJqL-ueaYLY_GqVnk_vrk',
        authDomain: 'manager-9522b.firebaseapp.com',
        databaseURL: 'https://manager-9522b.firebaseio.com',
        projectId: 'manager-9522b',
        storageBucket: 'manager-9522b.appspot.com',
        messagingSenderId: '830271348290',
        appId: '1:830271348290:web:1f6ed9f2c09e292a'
    }

    if (!firebase.apps.length) {

        firebase.initializeApp(config)

    }
}

export const signIn = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password)

export const createUser = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)

export const createEmployee = (name, phone, shift) => {

    if (currentUser = firebase.auth().currentUser) {

        const db = firebase.firestore()
        const fieldValue = firebase.firestore.FieldValue
        const userRef = db.collection('users').doc(currentUser.uid)

        // Create an object to pass to the update() method to add an 
        // employee to the stored array of employees
        const employees = {
            employees: fieldValue.arrayUnion({ name, phone, shift })
        }

        // Create an object to pass to the set() method that adds an email
        // property to a new user that is adding their first employee.
        // TODO: Set up new user profile when they first create their user
        //          account
        const newUserEmployee = {
            ...employees,
            email: currentUser.email
        }

        // Check to see if the user has a profile yet, and then take the
        // appropriate action.
        return userRef.get()
            .then(doc => {
                if (doc.exists) {
                    userRef.update(employees)
                }
                else {
                    userRef.set(newUserEmployee)
                }
            })
            .catch(error => console.log('checkUserExists: ', error))
    }
}


