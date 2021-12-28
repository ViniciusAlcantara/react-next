import Client from "./Client";

export default interface ClientRep {
    saveClient(client: Client): Promise<Client>
    deleteClient(client: Client): Promise<void>
    getAll(): Promise<Client[]>
}