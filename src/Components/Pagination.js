import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage, total, currentPageNo }) {
  const toatalPages = total / 50
  return (
    <div className="container">
      <div className="pagination">
        <div className="pagination__buttons">
          { gotoPrevPage && <button className="btn btn-default" onClick={ gotoPrevPage }>prev</button> }
          { gotoNextPage && <button className="btn btn-default" onClick={ gotoNextPage }>next</button> }
        </div>
        <div>
          { `Page: ${ currentPageNo } / ${ toatalPages }` }
        </div>
      </div>
    </div>
  )
}