import React, { Fragment } from 'react'
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ sushi, eatenSushi, handleSushiClick, handlePageClick }) => {

  const isSushiEaten = (singleSushi) => {
    return eatenSushi.includes(singleSushi)
  }

  const sushiCollection = sushi.map( singleSushi => {
    return <Sushi key={ singleSushi.id } data={ singleSushi } eaten={ isSushiEaten(singleSushi) } handleSushiClick={ handleSushiClick } />
  })

  return (
    <Fragment>
      <div className="belt">
        { sushiCollection }
        <MoreButton handlePageClick={ handlePageClick } />
      </div>
    </Fragment>
  )
}

export default SushiContainer