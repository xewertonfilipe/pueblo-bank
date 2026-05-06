import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface SearchProps {
  search: string
  onSearchChange: (value: string) => void
  onTypeFilterChange: (value: string) => void
}

export default function Filter({ search, onSearchChange }: SearchProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar por título"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
    </div>
  )
}
