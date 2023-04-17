import React, { ReactElement, useState } from 'react'
import { mdiUpload, mdiSearchWeb } from '@mdi/js'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import { useSampleRoles } from '../hooks/sampleData'
import { Role } from '../interfaces'
import RoleItem from '../components/RoleItem'
import RoleComponent from '../components/RoleComponent'
const TablesPage = () => {
  const [searchOption, setSearchOption] = useState('')
  const [searchId, setSearchId] = useState('')
  const [data, setData] = useState([])
  const { role } = useSampleRoles()
  const [showComponent,setShowComponent]=useState(false);
  const originalData = role && role.response ? role.response : []
   const handleSearchClick = async () => {
    try {
      let url
      if (searchOption === 'id') {
        if (searchId) {
          url = `http://3.13.92.74:30001/acl/admin/role/id/${searchId}`
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'X-USER-ID': '1',
            },
          })
          if (response.ok) {
            const role = await response.json()
            console.log(role)
            setData([role.response])
          } else {
            console.error('Error searching for formulations')
          }
        } else {
          console.error('Please enter an ID to search')
          return
        }
      } else {
        url = `http://3.13.92.74:30001/acl/admin/role/name/${searchId}`
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-USER-ID': '1',
          },
        })
        if (response.ok) {
          const role = await response.json()
          console.log(role)
          setData([role.response])
        } else {
          console.error('Error searching for formulations')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleCancelClick = () => {
    setShowComponent(false)
  }
  return (
    <>
      <SectionMain>
        <CardBox className="mb-6">
          <div className="flex justify-between">
            {/* className=" bg-gradient-to-tr from-gray-500 via-gray-500 to-gray-500 mb-6 " */}
            <CardBox>
              <div className="flex justify-end">
                <select
                  value={searchOption}
                  onChange={(e) => setSearchOption(e.target.value)}
                  className="bg-white border border-gray-400 rounded-full px-3 py-2 outline-none "
                  style={{ width: '200px' }}
                >
                  <option value="">Select an option</option>
                  <option value="id">By ID</option>
                  <option value="name">By Name</option>
                </select>
                {searchOption === 'id' && (
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="Enter ID"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="bg-white border border-gray-400 rounded-full px-3 py-2 outline-none mr-4"
                      style={{ width: '200px' }}
                    />
                  </div>
                )}
                {searchOption === 'name' && (
                  <div className="flex justify-end">
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="bg-white border border-gray-400 rounded-full px-3 py-2 outline-none mr-4"
                      style={{ width: '200px' }}
                    />
                  </div>
                )}

                <BaseButton
                  label="Search"
                  icon={mdiSearchWeb}
                  onClick={handleSearchClick}
                  className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </CardBox>
            <CardBox>
              <div>
                <BaseButton
                  label="Create Role"
                  onClick={() => setShowComponent(true)}
                  className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </CardBox>
          </div>
        </CardBox>
        {showComponent && (
          <CardBox className="mb-6">
            <RoleComponent showComponent={handleCancelClick} />
          </CardBox>
        )}
        <CardBox className="mb-6">
          {searchId.length > 0
            ? data.map((role: Role) => (
                <CardBox className="mb-6">
                  <RoleItem key={role.id} role={role} />
                </CardBox>
              ))
            : originalData.map((role: Role) => (
                <CardBox className="mb-6">
                  <RoleItem key={role.id} role={role} />
                </CardBox>
              ))}
        </CardBox>
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
