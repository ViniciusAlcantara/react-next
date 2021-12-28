import Btn from '../components/Btn'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Tabela from '../components/Table'
import useClients from '../hooks/useClients'
import useShow from '../hooks/useShow'

export default function Home() {
  const { selectedClient, deletedClient, saveClient, newClient, showTable, client, clients, visibleTable } = useClients()

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-tr from-blue-700 to-purple-500 text-white">
      <Layout title="Simple Register" >
        {
          visibleTable ? (
            <> 
              <div className="flex justify-end mb-4">
                <Btn onClick={() => newClient()}> 
                  <div>New Client</div>
                </Btn>
              </div>
              <Tabela clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} />
            </>
          ) 
          : (
            <Form cancel={() => showTable()} save={ saveClient } client={client} />
          )
        }
      </Layout>
    </div>
  )
}
