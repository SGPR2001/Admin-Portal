import React, { useState } from 'react'

function DiseaseItem({ disease }) {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(disease.name)
  const [description, setDescription] = useState(disease.description)
  const [pathophysiologicalGoalIdList, setPathophysiologicalGoalIdList] = useState(
    disease.pathophysiologicalGoalIdList
  )
  const [fIdList, setFIdList] = useState(disease.formulationIdList?disease.formulationIdList.join(','):'')
  
  const handleEditClick = () => {
    setEditing(true)
  }
   const handleCancelClick = () => {
     setEditing(false)
   }
  const handleUpdateClick = async () => {
    const formulationIdList=fIdList.split(',')
    try {
      const response = await fetch(
        `http://3.13.92.74:30009/master-data/admin/disease/id/${disease.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-USER-ID': '1',
          },
          body: JSON.stringify({
            name,
            description,
            pathophysiologicalGoalIdList,
            formulationIdList
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
          <h2 className="text-lg font-medium">
            <span className="font-bold">Name:</span>{' '}
            <textarea
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={1}
              style={{ width: '1000px' }}
            />
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Description:</span>{' '}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={1}
              style={{ width: '1000px' }}
            />
          </h2>
          <p className="text-lg font-medium">
            <span className="font-bold"> PathophysiologicalGoalIdList:</span>{' '}
            <textarea
              value={pathophysiologicalGoalIdList}
              onChange={(e) => setPathophysiologicalGoalIdList(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={1}
              style={{ width: '1000px' }}
            />
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Formulation Id List:</span>{' '}
            <textarea
              value={fIdList}
              onChange={(e) => setFIdList(e.target.value)}
              className="border border-gray-400 p-1 rounded-sm"
              rows={4}
              style={{ width: '1000px' }}
            />
          </p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
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
        </>
      ) : (
        <>
          <h2 className="text-lg font-medium">
            <span className="font-bold">Name:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{name}</p>
          </h2>
          <h2 className="text-lg font-medium">
            <span className="font-bold"> Description:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{description}</p>
          </h2>
          <p className="text-lg font-medium">
            <span className="font-bold">PathophysiologicalGoalIdList: </span>
            <p className="border border-gray-400 p-1 rounded-sm"> {pathophysiologicalGoalIdList}</p>
          </p>
          <p className="text-lg font-medium">
            <span className="font-bold">Formulation Id List:</span>
            <p className="border border-gray-400 p-1 rounded-sm">{fIdList}</p>
          </p>

          <div className="flex justify-end space-x-4 mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default DiseaseItem
