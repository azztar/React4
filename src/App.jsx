import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UseCard from './components/UseCard'
import useCrud from './hooks/useCrud'

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useCrud()

  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <div className='header__container'>
        <h1>users</h1>
        <button className='header__btn' onClick={() => setCloseForm(false)}><i className="fa-solid fa-plus"></i> Open Form</button>
      </div>
      <div className={`form-container ${closeForm && 'close__form'}`}
      >
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className='user-container'>
        {
          users?.map(user => (
            <UseCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setCloseForm={setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
