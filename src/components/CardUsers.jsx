import React from 'react'
import axios from "axios";

const CardUsers = ({ user, getAllUsers, setUpdateInfo, handleOpenForm }) => {

  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }
  const handleUpdateClick = () => {
    handleOpenForm()
    setUpdateInfo(user)
  }
  return (
    <article className="card">
      <div className="card__list">
        <div className="card__list__title"> <strong> 🙎‍♂️ {user.first_name} {user.last_name}</strong> </div>
        <div className="card__list__email"> 📪 {user.email} </div>
        <div className="card__list__password" > 🔑 {user.password} </div>
        <div className="card__list__birthday"> 🎁 {user.birthday} </div>
      </div>
      <footer className="card__footer" >
        <button onClick={deleteUser} className="card__btn">🗑</button>
        <button onClick={handleUpdateClick} className="card__btn">↻</button>
      </footer>
    </article>
  );
};
export default CardUsers