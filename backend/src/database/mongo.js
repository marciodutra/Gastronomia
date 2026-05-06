import { MongoClient } from 'mongodb'

export const Mongo = {
    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectionString)

            await client.connect
            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            return 'Banco de dados conectado com sucesso!'

        } catch (error) {
            return { text: 'Erro na conexão do banco de dados', error }
        }
        
    }
}    