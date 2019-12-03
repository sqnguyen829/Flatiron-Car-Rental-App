import React from 'react';

export default class AddCarForm extends React.Component{

    redirectToHome= () => {
        this.props.history.push('/flatironrental/cars')
    }

    handleNewCar = (e) => {

        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/cars/`, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "car": {
                    make: e.target[0].value,
                    model: e.target[1].value,
                    year: e.target[2].value,
                    image: e.target[3].value,
                    mileage: e.target[4].value,
                    rating: 0,
                    price: e.target[5].value,
                    availible: true,
                    user_id: localStorage.id
                }
            })
        })
        .then(res=>res.json())
        .then(newCar=>{
            console.log(newCar)
            this.redirectToHome()
        })
    }

    render(){
        return(
            <div>
                <form class="ui form" onSubmit={(e)=>this.handleNewCar(e)}>
                    <div class="field">
                        <label>Make</label>
                        <input type="text" name="make" placeholder="make" ></input>
                    </div>
                    <div class="field">
                        <label>Model</label>
                        <input type="text" name="model" placeholder="model"></input>
                    </div>
                    <div class="field">
                        <label>Year</label>
                        <input type="number" name="year" placeholder="year"></input>
                    </div>
                    <div class="field">
                        <label>Image</label>
                        <input type="text" name="image" placeholder="image"></input>
                    </div>
                    <div class="field">
                        <label>Mileage Traveled</label>
                        <input type="number" name="mileage" placeholder="Mileage"></input>
                    </div>
                    <div class="field">
                        <label>Cost per day</label>
                        <input type="number" name="price" placeholder="Cost per day"></input>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

// constructor(){
//     super()
//     this.state={
//       users:[],
//       currentUser:null,
//       loginCheck:false
//     }
// }

// componentDidMount(){
//     this.handleGetFetch()
// }

// handleGetFetch = () => {
//     fetch(userURL)
//     .then(res=>res.json())
//     .then(usersData=>{
//       this.setState({
//         users:usersData
//       })
//     })
// }

// handleLoginCheck = () => {
//     this.setState({
//       loginCheck:!this.state.loginCheck
//     })
// }

// handleNewUser = (e) => {
//     e.preventDefault()
//     fetch(userURL, {
//       method: 'POST',
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "user": {
//           username: e.target[0].value,
//           firstname: e.target[1].value,
//           lastname: e.target[2].value,
//           password: e.target[3].value,
//           point: e.target[4].value,
//           email: e.target[5].value
//         }
//       })
//     })
//     this.handleGetFetch()
// }
// render(){
//     return(
//         <div>
//             Sign up form start
//             <form class="ui form" onSubmit={(e)=>props.handleNewUser(e)}>
//                 <div class="field">
//                     <label>User Name</label>
//                     <input type="text" name="username" placeholder="User name"></input>
//                 </div>
//                 <div class="field">
//                     <label>First Name</label>
//                     <input type="text" name="firstname" placeholder="First Name"></input>
//                 </div>
//                 <div class="field">
//                     <label>Last Name</label>
//                     <input type="text" name="lastname" placeholder="Last Name"></input>
//                 </div>
//                 <div class="field">
//                     <label>Password</label>
//                     <input type="password" name="password" placeholder="Password"></input>
//                 </div>
//                 <div class="field">
//                     <label>Point</label>
//                     <input type="text" name="point" placeholder="Points"></input>
//                 </div>
//                 <div class="field">
//                     <label>Email Address</label>
//                     <input type="text" name="email" placeholder="Email"></input>
//                 </div>
//                 <button class="ui button" type="submit"  >Submit</button>
//             </form>
//             Sign up form end
//         </div>
//     )
// }