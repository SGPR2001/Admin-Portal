import React, { useState } from 'react'

function ClientQuestionItem({ client }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(client.name)
  const [propertyCallbackUrl, setPropertyCallbackUrl] = useState(client.propertyCallbackUrl)
  const [method, setMethod] = useState(client.method)
  
  const handleEditClick = () => {
    setEditing(true)
  }
  const handleCancelClick = () => {
    setEditing(false)
  }
  const handleUpdateClick = async () => {
   
    try {
      const response = await fetch(
        `http://3.13.92.74:30005/questionnaire/admin/client/id/${client.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-USER-ID': '1',
          },
          body: JSON.stringify({
            name,
           propertyCallbackUrl,
            method
           
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
                <span className="font-bold"> Name:</span>{' '}
                <p className="border border-gray-400 p-1 rounded-sm">
                  <input value={name} onChange={(e) => setName(e.target.value)} />
                </p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold">PropertyCallBackUrl:</span>{' '}
                <p className="border border-gray-400 p-1 rounded-sm">
                  <input value={propertyCallbackUrl} onChange={(e) => setPropertyCallbackUrl(e.target.value)} />
                </p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold">Method:</span>{' '}
                <p className="border border-gray-400 p-1 rounded-sm">
                  <input value={method} onChange={(e) => setMethod(e.target.value)} />
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
                <span className="font-bold"> Name:</span>
                <p className=" h-10 border border-gray-400 p-1 rounded-sm">{name}</p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold">PropertyCallBackUrl:</span>
                <p className="h-10 border border-gray-400 p-1 rounded-sm">{propertyCallbackUrl}</p>
              </h2>
              <h2 className="text-lg font-medium">
                <span className="font-bold">Method:</span>
                <p className="h-10 border border-gray-400 p-1 rounded-sm">{method}</p>
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

export default ClientQuestionItem
