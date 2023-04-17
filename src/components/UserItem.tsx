import React, { useState } from 'react'

function UserItem({ user }) {
  const [editing, setEditing] = useState(false)
  const [userName, setuserName] = useState(user.userName)
  const [authenticationProvider, setAuthenticationProvider] = useState(user.authenticationProvider)
  const [authenticationWay, setAuthenticationWay] = useState(user.authenticationWay)
  const [authenticationProviderId, setAuthenticationProviderId] = useState(
    user.authenticationProviderId
  )
  
  const [showDetails, setShowDetails] = useState(false)
  const handleEditClick = () => {
    setEditing(true)
  }
  const handleCancelClick = () => {
    setEditing(false)
  }
  const handleUpdateClick = async () => {
    try {
      const response = await fetch(
        `http://3.13.92.74:30006/authentication/admin/user/id/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-USER-ID': '1',
          },
          body: JSON.stringify({
            userName,
            authenticationProvider,
            authenticationWay,
            authenticationProviderId,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to update the data')
      }

      setEditing(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteClick = () => {
    // call an API to delete the medicine here
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      {editing ? (
        <>
          <div className="flex justify-between mt-6">
            <div
              style={{
                width: '80%',
              }}
            >
              <h2 className="text-lg font-medium">
                <span className="font-bold">Name:</span>{' '}
                <p className="border border-gray-400 p-1 rounded-sm">
                  <input value={userName} onChange={(e) => setuserName(e.target.value)} />
                </p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold">AuthenticationProvider:</span>{' '}
                <p className="border border-gray-400 p-1 rounded-sm">
                  <input
                    value={authenticationProvider}
                    onChange={(e) => setAuthenticationProvider(e.target.value)}
                  />
                </p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold"> AuthenticationWay:</span>{' '}
                <p className="border border-gray-400 p-1 rounded-sm">
                  <input
                    value={authenticationWay}
                    onChange={(e) => setAuthenticationWay(e.target.value)}
                  />
                </p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold"> AuthenticationProviderId:</span>{' '}
                <p className="border border-gray-400 p-1 rounded-sm">
                  <input
                    value={authenticationProviderId}
                    onChange={(e) => setAuthenticationProviderId(e.target.value)}
                  />
                </p>
              </h2>
            </div>
            <div
              style={{
                width: '10%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="flex flex-col mt-4"
            >
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
                onClick={handleUpdateClick}
              >
                Update
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between mt-6">
            <div
              style={{
                width: '80%',
              }}
            >
              <h2 className="text-lg font-medium">
                <span className="font-bold">User Name:</span>
                <p className=" h-10 border border-gray-400 p-1 rounded-sm">{userName}</p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold">AuthenticationProvider:</span>
                <p className="h-10 border border-gray-400 p-1 rounded-sm">
                  {authenticationProvider}
                </p>
              </h2>

              {showDetails && (
                <>
                  <h2 className="text-lg font-medium">
                    <span className="font-bold">AuthenticationWay:</span>
                    <p className="h-10 border border-gray-400 p-1 rounded-sm">
                      {authenticationWay}
                    </p>
                  </h2>
                  <h2 className="text-lg font-medium">
                    <span className="font-bold">AuthenticationProviderId:</span>
                    <p className="h-10 border border-gray-400 p-1 rounded-sm">
                      {authenticationProviderId}
                    </p>
                  </h2>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a onClick={() => setShowDetails(false)}>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2926/2926319.png"
                        alt="Show more"
                        className="py-2 px-4 rounded-md cursor-pointer mb-4"
                        style={{
                          width: 80,
                          height: 50,
                          justifyContent: 'center',
                        }}
                      />
                    </a>
                  </div>
                </>
              )}
              {!showDetails && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <a onClick={() => setShowDetails(true)}>
                    <img
                      src="https://p.kindpng.com/picc/s/134-1344553_double-chevron-down-down-arrow-icon-png-transparent.png"
                      alt="Show more"
                      className="py-2 px-4 rounded-md cursor-pointer mb-4"
                      style={{ width: 70, height: 50, justifyContent: 'center' }}
                    />
                  </a>
                </div>
              )}
            </div>

            <div
              style={{
                width: '10%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="flex flex-col mt-4"
            >
              <a onClick={handleEditClick}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4vn7vnrC96nFLCCYoUsLnNB94zoi-ivlID2iT7TO0-_cCtxR9_MezQU5c25ENYD0Zoo&usqp=CAU"
                  alt="Edit"
                  className="cursor-pointer mb-4"
                  style={{ width: 50, height: 50 }}
                />
              </a>
              <a onClick={handleDeleteClick}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlZGyD2OLJFRjXfAe2xpw6KzhjBmyiz9CjIjrzZDVWxKCz9YoFeYkoOdEsqapNMDESi4&usqp=CAU"
                  alt="Delete"
                  className="cursor-pointer mb-4"
                  style={{ width: 50, height: 50 }}
                />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default UserItem
