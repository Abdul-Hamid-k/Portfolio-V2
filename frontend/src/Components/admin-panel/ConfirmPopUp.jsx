import React, { useEffect } from 'react'

const ConfirmPopUp = (props) => {
  console.log(props)
  // console.log(props.confirmed)
  useEffect(() => {
    console.log(props.functionProps)
    if (props.confirmed) {
      props.updateFunction(props?.functionProps)
      props.setIsConfirmPanelOpen(false)
      props.setConfirmed(false)
    }
  }, [props.confirmed])


  return (
    <div className='flex justify-center items-center fixed bg-white/50 dark:bg-black-500/50 backdrop-blur-xl w-full h-screen z-100 top-0 left-0'>
      <div className="bg-white shadow-md dark:bg-black  w-[90%] sm:max-w-1/2 md:w-1/3 h-fit p-5 rounded-2xl text-center relative">
        <p className='text-lg mb-4'>Are you sure?</p>
        {props.message.split('\n').map(message => (
          <p key={message} className='text-sm'>{message}</p>
        ))}
        <i
          onClick={() => { props.setIsConfirmPanelOpen(false); props.setConfirmed(false); props.setConfirmFunction(null) }}
          className="ri-close-fill text-2xl absolute top-3 right-5 cursor-pointer"></i>

        <div className="flex justify-between mt-5">
          <button
            onClick={() => { props.setIsConfirmPanelOpen(false); props.setConfirmed(false); props.setConfirmFunction(null) }}
            className='px-5 py-2 rounded-lg cursor-pointer bg-red-500 font-medium'>Cancel</button>
          <button
            onClick={() => props.setConfirmed(true)}
            className='px-5 py-2 rounded-lg cursor-pointer bg-green-500 font-medium'>Confirm</button>
        </div>
      </div>
    </div >
  )
}

export default ConfirmPopUp