import React, { ReactElement, useState } from 'react'

import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import UserRoleComponent from '../components/UserRoleComponent'
const TablesPage = () => {
  const [showComponent, setShowComponent] = useState(false)

  const handleCancelClick = () => {
    setShowComponent(false)
  }
  return (
    <>
      <SectionMain>
        <CardBox className=" mb-6 ">
          <div className="flex justify-end">
            <BaseButton
              label="Create User-Role"
              onClick={() => setShowComponent(true)}
              className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
            />
          </div>
        </CardBox>

        {showComponent && (
          <CardBox className="mb-6">
            <UserRoleComponent showComponent={handleCancelClick} />
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
