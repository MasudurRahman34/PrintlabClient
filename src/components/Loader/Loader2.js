import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loader2() {
  return (
    <div className="h-full flex justify-center items-center">
        <ClipLoader color="#FFD333"   size={48} />
    </div>
  )
}
