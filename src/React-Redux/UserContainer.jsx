import Reac, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './AllState';

const UserContainer = ({ fetchUsers, userData }) => {

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className='text-center m-4'>
      {userData.loading ? <h2>Loading</h2>
        :
        userData.error ?
          (<h2>{userData.error}</h2>)
          :
          (
            <>
              <h2>User List</h2>
              <div>
                {userData && userData.users && userData.users.map(user =>
                  <p>{user.name}</p>)}
              </div>
            </>
          )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
