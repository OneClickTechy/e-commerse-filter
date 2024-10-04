import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

const Aside = () => {
  return (
    <aside>
        <Category />
        <Price />
        <Colors />
    </aside>
  )
}

export default Aside