import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Header() {
  const
  return (
    <div className='p-5 flex justify-between items-center border shadow-md'>
      <Image src ={'./logo.svg'}
      alt = 'logo'
      width={60}
      height={60}
      />
      <Button>Get Started</Button>
      
    </div>
  )
}

export default Header
