import firebase from "../config";
import Client from "../../core/Client";
import ClientRep from "../../core/ClientRep";

export default class ClientCollection implements ClientRep {
    converter = {
        toFirestore(client: Client) {
            return {
                name: client.getName(),
                age: client.getAge()
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
            const data = snapshot?.data(options)
            return new Client(data.name, data.age, snapshot.id)
        }
    }

    async saveClient(client: Client): Promise<Client> {
        if (client?.getId()) {
            await this.collection().doc(client.getId()).set(client)
            return client
        } else {
            const docRef = await this.collection().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async getAll(): Promise<Client[]> {
        const query = await this.collection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    deleteClient(client: Client): Promise<void> {
        return this.collection().doc(client.getId()).delete()
    }

    private collection() {
        return firebase.firestore().collection('clients')
            .withConverter(this.converter)
    }
}