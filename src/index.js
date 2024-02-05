// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore, addDoc, doc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyIFNp4bBT80r-fj1peb0UruozdUSzadQ",
  authDomain: "sandbox-agile.firebaseapp.com",
  projectId: "sandbox-agile",
  storageBucket: "sandbox-agile.appspot.com",
  messagingSenderId: "901591516770",
  appId: "1:901591516770:web:6a8d42bbeafe5ba968333b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//Gets the db from FireStore Project
const db = getFirestore(app)

//Create a reference variable to the collection
const cityCol = collection(db,"cities")



const addCityForm = document.querySelector("#addCity")

addCityForm.addEventListener("submit",(event)=>{
  //after the even happens, what happens next, in this case it will stop the default
  event.preventDefault()
    const tempCity = {
    city: addCityForm.cityName.value,
    state: addCityForm.stateName.value,
    region: addCityForm.regionName.value
  }

  console.log(tempCity.city)

  addDoc(cityCol,tempCity)
  .then((doc)=>{
    console.log(doc)})
    .catch((e)=>{
      console.log(e)
    })
})




