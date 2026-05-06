import { Suspense } from 'react'

import AddNewTransaction from '@/app/bank/my-transactions/components/add-new-transaction'
import Menu from '@/components/menu'
import WelComeSection from '@/components/wel-come-section'
import { fetchApplications } from '@/services/applications'
import StatmentListLoading from './transactions/components/loading/recent-transaction-list-loading'
import StatementList from './transactions/statement-list'

export default async function Bank() {
  const { applications } = await fetchApplications();

  return (
    <div className="flex gap-6 p-6">
      <div className='flex-1'>
        <Menu
          menus={applications}
        />
      </div>
      <div className='flex-3 flex flex-col gap-6'>
        <WelComeSection />
        <AddNewTransaction />
      </div>
      <div className='flex-2'>
        <Suspense fallback={<StatmentListLoading />}>
          <StatementList />
        </Suspense>
      </div>
    </div>
  )
}
