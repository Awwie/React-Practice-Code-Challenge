import React, { Fragment } from 'react'

const Table = ({ eaten, funds }) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={ index } className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ funds } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          { renderPlates( eaten ) }
        </div>
      </div>
    </Fragment>
  )
}

export default Table