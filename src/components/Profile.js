import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

function Profile({users, setUsers}) {
    let IMG_URL = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
    const {imageUrl} = useParams()
    let name = ""
    if (imageUrl) {
        let dividedLink = imageUrl.split('**')
        IMG_URL = dividedLink[0].split('@').join('/')
        if (dividedLink[1] != "undefined") {
            name = dividedLink[1]
        }
    }
    const [profileName, setProfileName] = useState(name);
    
    if (localStorage.getItem('users') != null) {
        users = JSON.parse(localStorage.getItem('users'))
    }

    const updateInputField = (event) => {
        setProfileName(event.target.value)
    };

    const updateUsers = (usersArray) => {
        setUsers(usersArray)
    }

    const addUser = () => {
        let usersArray = JSON.parse(localStorage.getItem('users'))
        let lastId = usersArray[usersArray.length - 1].id
        lastId += 1
        let newUser = {id : lastId, name: profileName, img: IMG_URL, budget: 100, movies: []}
        usersArray.push(newUser)
        localStorage.setItem('users', JSON.stringify(usersArray))
        updateUsers(usersArray)
    }

    const validateName = () => {
        const regex = /^[a-z ,.'-]{3,25}/i
        return regex.test(profileName)
    }


    const onClickHandler = () => {
        let isUserNameValid = validateName()
        if (isUserNameValid) {
            addUser()
        } 
    }

  return (
    <div className="profile-page-container">
        <div className="add-profile">
        <div className="name-field">
            <h1>Add Profile</h1>
        </div>
        <div className="profile-image-container-search">
            <Link to={`/profile/imagePicker/${profileName}`}>
                <img src={IMG_URL} />
            </Link>
            <input type="text" placeholder="Name" onChange={updateInputField} value={profileName}/>
        </div>
        <div className="buttons">
            <div className="saveBtn">
                <Link to={"/"}>
                    <button disabled={!validateName()} onClick={onClickHandler} className="save">SAVE</button>
                </Link>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Profile;
