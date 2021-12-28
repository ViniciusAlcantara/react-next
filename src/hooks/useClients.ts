
import { useEffect, useState } from 'react'
import ClientCollection from '../backend/db/ClientCollection'
import Client from '../core/Client'
import ClientRep from '../core/ClientRep'
import useShow from './useShow'

export default function useClients() {
  const repo: ClientRep = new ClientCollection()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const {showForm, showTable, visibleForm, visibleTable} = useShow()

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients)
      showTable()
    })
  }

  function selectedClient(client: Client) {
    console.log('Selected')
    console.log(client)
    setClient(client)
    showForm()
  }

  async function deletedClient(client: Client) {
    await repo.deleteClient(client)
    getAll()
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
  }

  async function saveClient(client: Client) {
    await repo.saveClient(client)
    getAll()
  }

  return {
    client,
    clients,
    visibleTable,
    showTable,
    newClient,
    saveClient,
    deletedClient,
    selectedClient,
    getAll
  }
}