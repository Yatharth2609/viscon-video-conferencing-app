import React from 'react'
import CallList from '@/components/ui/CallList'

const Recordings = () => {
  return (
    <section className='flex size-full gap-10 text-white flex-col'>
      <h1 className='text-3xl font-bold'>
        Recordings
      </h1>

      <CallList type="recordings"/>
    </section>
  )
}

export default Recordings
