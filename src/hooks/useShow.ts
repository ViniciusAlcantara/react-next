import { useEffect, useState } from 'react'

export default function useShow() {
  const [show, setShow] = useState<'table' | 'form'>('table')

  const showTable = () => setShow('table')
  const showForm = () => setShow('form')

  return {
    visibleTable: show === 'table',
    visibleForm: show === 'form',
    showTable,
    showForm
  }
}