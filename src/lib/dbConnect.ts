
import { MongoClient, Collection, ServerApiVersion, Document } from "mongodb";

const uri: string = process.env.MONGODB_URI as string;
const dbName: string = process.env.DB_NAME as string;

export const collectionNameObj = {
  servicesCollention: "services"
}

// Cache the MongoDB client to prevent multiple connections in Next.js
let cachedClient: MongoClient | null = null;

export default async function dbConnect<T extends Document = Document>(
  collectionName: string
): Promise<Collection<T>> {
  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await cachedClient.connect(); 
  }

  return cachedClient.db(dbName).collection<T>(collectionName);
}




