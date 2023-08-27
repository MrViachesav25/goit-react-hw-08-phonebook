import React from 'react'
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <RotatingLines
        strokeColor={'#086a68'}
        strokeWidth="5"
        animationDuration="0.85"
        width="200"
        visible={true}
    />
  )
}

export default Loader;