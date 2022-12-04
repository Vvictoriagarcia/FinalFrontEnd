import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({data}) => {
  console.log(data);
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {data?.map(item => <Card key={item.id} data={item}/>)}
        {/* Aqui deberias renderizar las cards */}
      </div>

    </main>
  )
}

export default Home