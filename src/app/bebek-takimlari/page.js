import FilrelemeEkrani from '@/components/FilrelemeEkrani'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <FilrelemeEkrani />
      </div>
    </div>
  )
}

export default page


