import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyCGHEYhxnpxTQrVTHCcDqOuoGdxl2ltufc',
    authDomain: 'acid-ion.firebaseapp.com',
    databaseURL:
        'https://acid-ion-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'acid-ion',
    storageBucket: 'acid-ion.appspot.com',
    messagingSenderId: '684099227623',
    appId: '1:684099227623:web:eae58ffc161f29c08bf742',
    measurementId: 'G-KXTV2FH78E'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getDatabase()
