import firebase from 'firebase'
import 'firebase/firestore'

const FireStore = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }

    const db = firebase.firestore()
    const fieldValue = firebase.firestore.FieldValue
    const currentUser = firebase.auth().currentUser

    // PUBLIC - sign a user in
    function signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    // PUBLIC - create a new user
    function createUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    // PUBLIC - add an employee to a user's profile
    function createEmployee(name, phone, shift) {

        if (currentUser) {

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
            userRef.get()
                .then(doc => {
                    if (doc.exists) {
                        return userRef.update(employees)
                    }
                    else {
                        return userRef.set(newUserEmployee)
                    }
                })
                .catch(error => console.log('checkUserExists: ', error))
        }
    }

    return { signIn, createUser, createEmployee }

}

export const store = FireStore()


