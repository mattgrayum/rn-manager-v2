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

        const userRef =
            firebase.firestore().collection('users').doc(currentUser.uid)

        return userRef.collection('employees').add({ name, phone, shift })

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
                    userRef.collection('employees').get()
                        .then(snapshot => {
                            let employees = []

                            snapshot.forEach(doc => {

                                const { id, ref } = doc
                                ref.get()
                                    .then(doc => {
                                        const { name, phone, email } = doc
                                        employees.push({ id, name, phone, email })
                                        console.log("The Employees: ", employees)
                                    })


                            })



                        })
                }
                else {
                    console.log('You are not a logged in user.')
                }
            })
            .catch(error => console.log('checkUserExists: ', 'error'))

    }
}

/**
 * Delete an employee.
 *
 * @param {}
 */


