import React from 'react'
import CallList from '@/components/ui/CallList';

const Previous = () => {
  return (
    <section className='flex size-full gap-10 text-white flex-col'>
      <h1 className='text-3xl font-bold'>
        Previous
      </h1>

      <CallList type="ended"/>
    </section>
  )
}

export default Previous;