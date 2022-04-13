import { useEffect, useState } from 'react'
import React from 'react'
// import UploadImage from './UploadImage'
// import {  } from '..utils/mutations'

export default class userModel extends React.Component {
    render() {
        return (
            <div>This is the Update user modal</div>
        )
    }
}

// export default function UpdateUser({ userModal, toggleUserModal, userId }) {
//     const [username, setUsername] = useState();
//     // const [img_url, setImgUrl] = useState('/user-placeholder.png');
//     // const [error, setError] = useState();

//     // const [updateUser, { error }] = useMutation()

//     // // On load, populate with userdata, empty if not yet created
//     // function handleClick(e) {
//     //     e.preventDefault()

//     // };

//     function handleSaveProfile(e) {
//         e.preventDefault()
//         // search database for username
//         // if already in use, set error
//         // if available, save username, return "saved"
//     }

//     return (
//         <>
//             <UploadImage />
//             <form>
//                 <div className="form-element">
//                     <label htmlFor="username" name="Create a username" />
//                     <input
//                         type="text"
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <button onClick={handleSaveProfile}>Save</button>
//             </form>
//         </>
//     )
// }


// const [toggleUserModal, userModal] = useState(false)
//     //Toggle update user profile modal
//     const []
//     function handleClick(e) {
//         e.preventDefault()
//         toggleUserModel(!userModal)