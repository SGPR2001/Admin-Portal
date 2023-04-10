import useSWR from 'swr'
 
  
   const fetcher = (url: string) =>fetch(url).then((res) => {return res.json()})
  

 export const useSampleClients =  () => {
  const { data, error } = useSWR(
    'http://3.13.92.74:30005/questionnaire/admin/question',
    fetcher
  )
   const clients= data ?? []
  
  return {
    clients,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleIngredients = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/ingredient?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const ingredients = data ?? []
  
  return {
    ingredients,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleFormulations = (pageNumber:number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/formulation?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const formulations = data ?? []
 
  return {
    formulations,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleDiets = (pageNumber:number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/diet?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const diets = data ?? []
  console.log(diets)
  return {
    diets,
    isLoading: !error && !data,
    isError: error,
  }
}


export const useSampleDisease = (pageNumber:number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/disease?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const disease = data ?? []
  console.log(disease)
  return {
    disease,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleOil = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/oil?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const oil = data ?? []
  console.log(oil)
  return {
   oil,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleYoga = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/yoga?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const yoga = data ?? []
  console.log(yoga)
  return {
   yoga,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSamplePulses = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/pulses?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const pulses = data ?? []
  console.log(pulses)
  return {
    pulses,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleNonVeg = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/non-veg?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const nonveg = data ?? []
  console.log(nonveg)
  return {
    nonveg,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleFruit= (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/fruit?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const fruits = data ?? []
  console.log(fruits)
  return {
   fruits,
    isLoading: !error && !data,
    isError: error,
  }
}

export const useSamplePpg = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/pathophysiological-goal?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const ppg = data ?? []
  console.log(ppg)
  return {
    ppg,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleVegetable = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/vegetable?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const vegetables = data ?? []
  console.log(vegetables)
  return {
   vegetables,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleOtherFood = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/other-food?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const otherfood = data ?? []
  console.log(otherfood)
  return {
    otherfood,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleDairy = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/dairy?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const dairy = data ?? []
  console.log(dairy)
  return {
    dairy,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleSpice = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/spice?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const spice = data ?? []
  console.log(spice)
  return {
    spice,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleVeganFood = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/vegan-food?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const veganfood = data ?? []
  console.log(veganfood)
  return {
    veganfood,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleSweetner= (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/sweetner?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const sweetner = data ?? []
  console.log(sweetner)
  return {
    sweetner,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleCereal = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/cereal?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const cereal = data ?? []
  console.log(cereal)
  return {
    cereal,
    isLoading: !error && !data,
    isError: error,
  }
}
export const useSampleWeekDiet = (pageNumber: number) => {
  const { data, error } = useSWR(
    `http://3.13.92.74:30009/master-data/admin/week-diet?pageNumber=${pageNumber}&pageSize=5`,
    fetcher
  )
  const weekdiet = data ?? []
  
  return {
   weekdiet,
    isLoading: !error && !data,
    isError: error,
  }
}
 export const useSampleLabels = () => {
   const { data, error } = useSWR('/admin-one-react-tailwind/data-sources/clients.json', fetcher)
   

   return {
     clients : data?.data ?? [],
     isLoading: !error && !data,
     isError: error,
   }
 }



export const useSampleTransactions = () => {
  const { data, error } = useSWR('/admin-one-react-tailwind/data-sources/history.json', fetcher)

  return {
    transactions: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  }
}
