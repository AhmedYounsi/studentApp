 
import React from 'react'
function Layout({children}) {
  return (
    <div>
    <p>Header</p>
     <div className='routes'>
     {children}
     </div>
    <p>Footer</p>
    </div>
  )
}

export default Layout