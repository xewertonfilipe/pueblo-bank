'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ApplicationsInterface } from '@/interfaces/aplications'

type Props = {
  menus: ApplicationsInterface[]
}

export default function Menu({ menus }: Props) {
  return (
    <div className='bg-secondary min-h-[744]'>
      <div className="flex flex-col gap-2 p-1">
        {menus.map(item => (
          <Link href="#" key={item.id}>
            <Button className="w-full justify-start" variant={'link'}>
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
