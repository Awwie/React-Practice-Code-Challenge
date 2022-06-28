import React from 'react'

const Sushi = ({ data, handleSushiClick, eaten }) => {

  const { id, img_url, name, price } = data

  const handleOnClick = () => {
    // fire upstream event handler here
    handleSushiClick(id, eaten)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleOnClick}>
        { eaten ? null : <img src={ img_url } width="100%" alt='Sushey' /> }
      </div>
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  )
}

export default Sushi