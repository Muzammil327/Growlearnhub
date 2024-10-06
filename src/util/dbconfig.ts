import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, TranslateConfig } from "@aws-sdk/lib-dynamodb"
import {
  NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  NEXT_PUBLIC_AWS_REGION
} from "./constant"

if (
  !NEXT_PUBLIC_AWS_ACCESS_KEY_ID ||
  !NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ||
  !NEXT_PUBLIC_AWS_REGION
) {
  console.log("Database Not Connect")
}

const dbClientConfig: DynamoDBClientConfig = {
  region: NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
  }
}

const dbClient = new DynamoDBClient(dbClientConfig)

const marshallOptions: TranslateConfig["marshallOptions"] = {
  convertEmptyValues: false,
  removeUndefinedValues: true,
  convertClassInstanceToMap: false
}

const unmarshallOptions: TranslateConfig["unmarshallOptions"] = {
  wrapNumbers: false
}

const translateConfig: TranslateConfig = {
  marshallOptions,
  unmarshallOptions
}

const dbDocClient = DynamoDBDocumentClient.from(dbClient, translateConfig)

export { dbDocClient }
