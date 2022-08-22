import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import CardUsers from './components/CardUsers'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const getAllUsers = () => {
    const URL='https://users-crud1.herokuapp.com/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  console.log(users);

  const handleOpenForm = () => setIsFormOpen(true)
  const handleCloseForm = () => setIsFormOpen(false)

  return (
    <div className="App">
      <h1 className='App__title'>Users Administration Web App</h1>
      <div className='App__user__add'>
        <p className='App__user__add__text'>Add New User</p>
        <p className='App__user__add__text'>
          <button className='App__user__add__btn' onClick={handleOpenForm}>+</button>
        </p>
      </div>      
      <div className={isFormOpen ? 'form-container' : 'form-none'}>
        <Form 
          getAllUsers={getAllUsers}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          handleCloseForm={handleCloseForm}
        />
      </div>
      <div className='card-container'>
        {
          users?.map(user => (
            <CardUsers 
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
      <div className='App__user__add'>
        <p className='App__user__add__text'>Add New User</p>
        <p className='App__user__add__text'>
          <button className='App__user__add__btn' onClick={handleOpenForm}>+</button>
        </p>
      </div>    
    </div>
  )
}

export default App