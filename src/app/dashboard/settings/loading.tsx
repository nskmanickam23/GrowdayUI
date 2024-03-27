import React from 'react'

const Loading = () => {
  return (
    <section className=''>
      <div className="flex flex-row gap-2 justify-center">
        <div className="w-4 h-4 rounded-full bg-palettePrimary animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-palatteSecondary animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-palatteTeritary animate-bounce [animation-delay:.7s]"></div>
      </div>
    </section>
  )
}

export default Loading