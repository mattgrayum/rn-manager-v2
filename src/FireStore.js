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

/**
 * Sign a user in.
 * 
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns Promise
 */
export const signIn = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password)

/**
 * Create a new user profile.
 * 
 * @param {string} email 
 * @param {string} password 
 * 
 * @returns Promise
 */
export const createUser = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)

/**
 * Create a new employee document for the current user.
 * 
 * @param {string} name 
 * @param {string} phone 
 * @param {string} shift 
 * 
 * @returns Promise
 */
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

/**
 * Get all employees for the current user.
 * 
 * @returns Promise
 */
export const getUserEmployees = () => {

    if (currentUser = firebase.auth().currentUser) {

        const userRef =
            firebase.firestore().collection('users').doc(currentUser.uid)

        return userRef.get()
            .then(doc => {
                if (doc.exists) {
                    return doc.data().employees
                }
                else {
                    console.log('You are not a logged in user.')
                }
            })
            .catch(error => console.log('checkUserExists: ', error))

    }
}


