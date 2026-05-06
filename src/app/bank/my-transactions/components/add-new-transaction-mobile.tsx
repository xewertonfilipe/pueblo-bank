'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import AddNewTransactionForm from './add-new-transaction-form'

export default function AddNewTransactionMobile() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="justify-start">
          <Plus /> Nova Transação
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Adicionar nova transação</DrawerTitle>
          <DrawerDescription>
            Acompanhe seus gastos e receitas. Preencha os detalhes da transação.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pt-0">
          <AddNewTransactionForm onSuccess={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
