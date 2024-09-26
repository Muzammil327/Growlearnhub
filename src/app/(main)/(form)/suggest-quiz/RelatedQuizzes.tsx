// "use client"
// import React, { useEffect, useState } from "react"
// import Label from "@/src/components/ui/Label"
// import Select from "@/src/components/ui/Select"
// import axios from "axios"

// export default function RelatedQuizzes({
//   setRelatedQuizzesData,
//   relatedQuizzesData,
//   relatedQuizzes,
//   setRelatedQuizzes
// }: any) {
//   const [error, setError] = useState<string>("")
//   const [loading, setLoading] = useState<boolean>(true) // Set loading to true initially

//   useEffect(() => {
//     const fetchMcqs = async () => {
//       try {
//         const response = await axios.get("/api/mcqs")
//         console.log(response.data)
//         setRelatedQuizzesData(response.data)
//       } catch (error) {
//         console.error("Error fetching MCQs:", error)
//         setError("Failed to load data.")
//       } finally {
//         setLoading(false) // Set loading to false
//       }
//     }

//     fetchMcqs() // Call the fetch function
//   }, [])

//   return (
//     <div className="mb-4">
//       {loading ? (
//         <p>Loading...</p> // Loading state
//       ) : (
//         <>
//           <Label label="Enter Correct Option:" htmlFor="correctoption" />
//           <Select
//             options={relatedQuizzesData}
//             selectedOption={relatedQuizzes}
//             onChange={(e: any) => setRelatedQuizzes(e.target.value)}
//           />
//           {error && <p className="text-red-500">{error}</p>}
//         </>
//       )}
//     </div>
//   )
// }
import React from 'react'

export default function RelatedQuizzes() {
  return (
    <div>RelatedQuizzes</div>
  )
}
