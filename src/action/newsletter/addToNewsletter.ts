import { dbDocClient } from "@/src/util/dbconfig"
import { GetCommand, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb"

interface AddToNewsletterProps {
  email: string
}

const addToNewsletter = async (data: AddToNewsletterProps) => {
  console.log("0")
  try {
    console.log("1")

    // Send data to the database
    const params = {
      TableName: "newsletter",
      Item: {
        id: Math.floor(Math.random() * 1000000), // Set as a number (N)
        email: data.email,
        createdAt: new Date().toISOString()
      },
      ConditionExpression: "attribute_not_exists(email)"
    }
    console.log("2")

    await dbDocClient.send(new PutCommand(params))
    console.log("Newsletter posted successfully:")
  } catch (error) {
    console.error("Error posting data:", error)
    throw new Error("Could not post data")
  }
}

export default addToNewsletter
