import React from 'react'

const Card = ({house}) => {
  return (
    <div className='Card'>
      <h1>{house.name}</h1>
      <h2><span>Founded:</span>{house.founded || 'N/A'}</h2>
      <p>seats:</p>
      {
        house.seats.map(seat => {
          return <p>{seat}</p>
        })
      }
      <p>titles:</p>
      {
      house.titles.map(title => {
        return <p>{title}</p>
      })
      }
      <p>ancestral weapons:</p>
      {
      house.ancestralWeapons.map(ancestralweapon => {
        return <p>{ancestralweapon}</p>
      })
      }
      <p>coat of arms:</p>
      <p>{house.coatOfArms}</p>
    </div>
  )
}

export default Card