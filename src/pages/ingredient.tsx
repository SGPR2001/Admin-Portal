import React, { ReactElement, useState } from 'react'
import { mdiUpload ,mdiSearchWeb} from '@mdi/js'
import SectionMain from '../components/SectionMain'
import CardBox from '../components/CardBox'
import BaseButton from '../components/BaseButton'
import LayoutAuthenticated from '../layouts/Authenticated'
import IngredientItem from '../components/IngredientItem'
import { useSampleIngredients } from '../hooks/sampleData'
import { Ingredient } from '../interfaces'

const TablesPage = () => {
  const [searchOption, setSearchOption] = useState('')
 const [searchId, setSearchId] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ingredientCsvFile = event.target.files?.[0]
    setSelectedFile(ingredientCsvFile)
  }

  const handleUploadButtonClick = async () => {
    if (selectedFile) {
      const formData = new FormData()
      formData.append('ingredientCsvFile', selectedFile)

      try {
        const response = await fetch(
          'http://3.13.92.74:30009/master-data/admin/ingredient/ingredient.csv',
          {
            method: 'POST',
            body: formData,
            headers: {
             
              'X-USER-ID': '1',
             
            },
          }
        )
        if (response.ok) {
          console.log('File uploaded successfully')
          setSelectedFile(null)
        } else {
          console.error('Error uploading file')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
 const [pageNumber, setPageNumber] = useState(0)
 
const {ingredients}=useSampleIngredients(pageNumber);
const handlePrevClick = () => {
  setPageNumber(pageNumber - 1)
}
const handleNextClick = () => {
  setPageNumber(pageNumber + 1)
}

const originalData=ingredients&&ingredients.response?ingredients.response:[]
const totalPages = ingredients && ingredients.totalPages ? ingredients.totalPages : 0
const [data, setData] = useState([])
const handleSearchClick = async () => {
   try {
     let url
     if (searchOption === 'id') {
       if (searchId) {
         url = `http://3.13.92.74:30009/master-data/admin/ingredient/id/${searchId}`
         const response = await fetch(url, {
           method: 'GET',
           headers: {
             'X-USER-ID': '1',
           },
         })
         if (response.ok) {
           const ingredient = await response.json()
           console.log(ingredient)
           setData([ingredient.response])
         } else {
           console.error('Error searching for formulations')
         }
       } else {
         console.error('Please enter an ID to search')
         return
       }
     } else if(searchOption=='name') {
       url = `http://3.13.92.74:30009/master-data/admin/ingredient/name/${searchId}`
       const response = await fetch(url, {
         method: 'GET',
         headers: {
           'X-USER-ID': '1',
         },
       })
       if (response.ok) {
         const ingredient = await response.json()
         console.log(ingredient)
         setData([ingredient.response])
       } else {
         console.error('Error searching for formulations')
       }

     }else{
       url = `http://3.13.92.74:30009/master-data/admin/ingredient/regex/name/${searchId}`
      const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-USER-ID': '1',
          },
        })
        if (response.ok) {
          const ingredient = await response.json()
          console.log(ingredient)
          setData(ingredient.response)
        } else {
          console.error('Error searching for formulations')
        }
     }
    
   } catch (error) {
     console.error(error)
   }
}

 return (
   <>
     <SectionMain>
       <CardBox className="mb-6">
         <div className="flex justify-between">
           {/* <CardBox className=" bg-gradient-to-tr from-gray-500 via-gray-500 to-gray-500 mb-6 "> */}
           <CardBox className="  mb-6 ">
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
                 <option value="regex">By Regex</option>
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
               {searchOption === 'regex' && (
                 <div className="flex justify-end">
                   <input
                     type="text"
                     placeholder="Enter regex"
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
                 className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc]  text-white font-bold py-2 px-4 rounded"
               />
             </div>
           </CardBox>
           <CardBox className="  mb-6 ">
             <div>
               <input type="file" onChange={handleFileInputChange} />
               <BaseButton
                 label="Upload"
                 icon={mdiUpload}
                 onClick={handleUploadButtonClick}
                 className="bg-blue-500 border-blue-500 hover:bg-[#7dd3fc] text-white font-bold py-2 px-4 rounded"
               />
             </div>
           </CardBox>
         </div>
       </CardBox>

       <CardBox className=" mb-6">
         {searchId.length > 0
           ? data.map((ingredient: Ingredient) => (
               <CardBox className="w-640 h-640 mb-4">
                 <IngredientItem key={ingredient.id} ingredient={ingredient} />
               </CardBox>
             ))
           : originalData.map((ingredient: Ingredient) => (
               <CardBox className="w-640 h-640 mb-2">
                 <IngredientItem key={ingredient.id} ingredient={ingredient} />
               </CardBox>
             ))}
       </CardBox>
       <CardBox>
         <div className="flex justify-end  mt-6">
           <button
             className="mr-2 px-4 py-2 rounded-md bg-blue-500 border-blue-500 text-white-700 hover:bg-blue-500 focus:bg-blue-600 focus:outline-none"
             onClick={handlePrevClick}
             disabled={pageNumber === 0}
             style={{ opacity: pageNumber === 0 ? 0.5 : 1 }}
           >
             Prev
           </button>
           <button
             className="mr-2 px-4 py-2 rounded-md bg-blue-500 border-blue-500 text-white-600 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
             disabled={pageNumber === 0}
           >
             {pageNumber}
           </button>
           <button
             className="px-4 py-2 rounded-md bg-blue-500 border-blue-500 text-white-700 hover:bg-blue-500 focus:bg-blue-600 focus:outline-none"
             onClick={handleNextClick}
             disabled={pageNumber === totalPages - 1}
             style={{ opacity: pageNumber === totalPages - 1 ? 0.5 : 1 }}
           >
             Next
           </button>
         </div>
       </CardBox>
     </SectionMain>
   </>
 )
}

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default TablesPage
