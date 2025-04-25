import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'

export default function App() {


// document.getElementById('search-box').addEventListener('input' , (e)=>{
//   const searchBox = document.getElementById('search-box')
//   const searchBoxValue = searchBox.value
  
//   let searchedData = null;
//   searchedData = Json.filter(obj=>obj.name.toLowerCase().includes(searchBoxValue.toLowerCase()))    
//   var i;
  
//   for(i = 0; i<searchedData.length; i++){
//       document.getElementById(`card${i+1}`).style = "display: flex"
//       const user_id = searchedData[i].id
//       const img_url = `https://robohash.org/${user_id}`
//       document.getElementById(`img${i+1}`).setAttribute("src" , img_url)
//       document.getElementById(`name${i+1}`).textContent = searchedData[i].name
//       document.getElementById(`email${i+1}`).textContent = searchedData[i].email
//       document.getElementById(`username${i+1}`).textContent = searchedData[i].username
//   }

//   while(i<10){
//     document.getElementById(`card${i+1}`).style = "display: none"
//     i++
//   }
  
//   if(searchedData.length == 0){
//     document.getElementById('err').textContent = 'Oops Not Found' 
//   }
//   else{
//     document.getElementById('err').textContent = ''
//   }
  
// })


  




//API DATA FORMAT - JSON OBJECT

// let data = [
//         {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },

  return (
    <div id='container'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}
