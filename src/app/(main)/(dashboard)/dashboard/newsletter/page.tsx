"use client"
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow
} from "@/src/components/ui/table"
import axios from "axios"
import React, { useEffect } from "react"

export default function Page() {
  const [data, setData] = React.useState([])

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const response = await axios.get("/api/form/newsletter")
        setData(response.data.get_newsletter_email)
      } catch (error) {
        console.log(error)
      }
    }

    fetchNewsletter()
  }, [])
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Email</TableHeader>
          </TableRow>
        </TableHead>
        {/* Table body should be outside the map loop */}
        <TableBody>
          {data.map((user: { _id: string; email: string }) => (
            <TableRow key={user._id}>
              <TableData>{user._id}</TableData>
              <TableData>{user.email}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
