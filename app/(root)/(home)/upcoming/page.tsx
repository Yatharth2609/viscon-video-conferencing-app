import CallList from '@/components/ui/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex size-full gap-10 text-white flex-col'>
      <h1 className='text-3xl font-bold'>
        Upcoming
      </h1>

      <CallList type="upcoming"/>
    </section>
  )
}

export default Upcoming
