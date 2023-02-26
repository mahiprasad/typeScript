import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client = await MongoClient.connect('mongodb+srv://oyebeauty:7ewb6zoKd7FrZeW7@cluster0.z7d2ske.mongodb.net/test', {
            //useUnifiedTopology: true,
          });

        //   const db = client.db();

        //   await db.collection('fruits').createIndex({ email: 1 }, { unique: true, sparse: true });

        return client.db();
        } catch (e) {
          throw e;
        }
      }
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}