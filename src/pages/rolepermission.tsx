import React, { ReactElement, useState } from 'react'

import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import RolePermissionComponent from '../components/RolePermissionComponent'
const TablesPage = () => {
 
  
  
  const [showComponent, setShowComponent] = useState(false)
 
  
  const handleCancelClick = () => {
    setShowComponent(false)
  }
  return (
    <>
      <SectionMain>
        <CardBox className="mb-6">
            <CardBox className=" bg-gradient-to-tr from-gray-500 via-gray-500 to-gray-500 mb-6 ">
              <div>
                <BaseButton
                  label="Create Role-Permission"
                  onClick={() => setShowComponent(true)}
                  className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </CardBox>
         
        </CardBox>
        {showComponent && (
          <CardBox className="mb-6">
            <RolePermissionComponent showComponent={handleCancelClick} />
          </CardBox>
        )}
       
      </SectionMain>
    </>
  )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
