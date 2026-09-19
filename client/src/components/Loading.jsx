import {Loader2Icon} from 'lucide-react'

const Loading = () => {
  return (
    
    <div role = "status" arial-lable="loading" className='h-screen flex item-center justify-center bg-white'>
      <Loader2Icon size={26} className='animate-spin text-zinc-950'/>
    </div>
  )
}

export default Loading;