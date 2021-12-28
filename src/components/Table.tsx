import Client from '../core/Client'
import { EditIcon, TrashIcon } from './Icons'

interface TabelaProps {
    clients: Client[],
    selectedClient?: (client: Client) => void,
    deletedClient?: (client: Client) => void
}

export default function Tabela(props: TabelaProps) {
    const showActions = props.selectedClient || props.deletedClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Cod</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                { showActions ? (<th className="text-center">Actions</th>) : false }
            </tr>
        )
    }

    function renderRows() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.getId()} className={i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}>
                    <td className="text-left p-4">{ client.getId() }</td>
                    <td className="text-left p-4">{ client.getName() }</td>
                    <td className="text-left p-4">{ client.getAge() }</td>
                    { showActions ? renderActions(client) : false }
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <th className="text-left p-4 flex justify-center items-center">
                {
                    props.selectedClient ? (
                        <button className="text-left p-2 justify-center items-center text-green-600 rounded-full hover:bg-white"
                            onClick={() => props.selectedClient?.(client) }
                        >
                            {EditIcon}
                        </button>
                    )
                    : false
                }

                {
                    props.deletedClient ? (
                        <button className="text-left p-2 justify-center items-center text-red-600 rounded-full hover:bg-white"
                            onClick={() => props.deletedClient?.(client) }
                        >
                            {TrashIcon}
                        </button>
                    ) 
                    : false
                }
                
            </th>
        )
    }

    return (
        <table className="w-full rounded-md overflow-hidden">
            <thead className='bg-gradient-to-r from-blue-600 to-blue-900 text-white'>
                {renderHeader()}
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}