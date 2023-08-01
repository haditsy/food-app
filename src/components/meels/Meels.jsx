import React from 'react'
import MeelItem from './MeelItem'



    
const Meels = ({meals}) => {
  return (
    <div style={{marginTop: '30px'}} className='container'>
      {meals.map((meal)=>{
        return <MeelItem title={meal.title} description={meal.description} price={meal.price} />
      })}
    </div>
  )
}

export default Meels
