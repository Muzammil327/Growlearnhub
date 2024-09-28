"use client"
import { useState } from "react"
import LoaderIcon from "../LoaderIcon"
import Label from "../../ui/Label"
import Input from "../../ui/Input"
import Button from "../../ui/Button"
import Textarea from "../../ui/textarea"

export default function Form(props: { url: string }) {
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [error, setError] = useState(false)
  const [commentForm, setCommentForm] = useState({
    fname: "",
    lname: "",
    email: "",
    url: props.url,
    message: ""
  })

  const SubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoadingBtn(false)
    try {
      setLoadingBtn(true)
      setError(false)
      // const data = await PostCommentForm(commentForm)

      // if (data.status === '400' || data.status === '500') {
      //   setError(data.message)
      // } else {
      //   setError(data.message)
      //   setCommentForm({
      //     fname: '',
      //     lname: '',
      //     email: '',
      //     url: props.url,
      //     message: '',
      //   })
      // }
    } catch (error) {
      console.log(error)
      setError(true)
    } finally {
      setLoadingBtn(false)
    }
  }
  return (
    <div className="my-20 relative">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className=" font-bold tracking-tight text-emerald-500 lg:text-4xl md:text-3xl text-2xl text-center">
          Comment Here
        </h3>
        <span className="mt-3 md:text-lg sm:text-base text-sm md:leading-8 leading-7 text-gray-600 dark:text-white text-center">
          Plz comment below.
        </span>
      </div>

      <form className="mt-16 sm:mt-20" onSubmit={SubmitHandle}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mb-2">
          <div>
            <Label label="First Name:" htmlFor="fname" />
            <div className="mt-2.5">
              <Input
                type="text"
                value={commentForm.fname}
                placeholder="Enter First Name"
                onChange={(e) =>
                  setCommentForm({ ...commentForm, fname: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <Label label="Last Name:" htmlFor="lname" />

            <div className="mt-2.5">
              <Input
                type="text"
                placeholder="Enter Last Name"
                value={commentForm.lname}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, lname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label label="Email:" htmlFor="emails" />

            <div className="mt-2.5">
              <Input
                type="email"
                placeholder="Enter Email"
                value={commentForm.email}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, email: e.target.value })
                }
                autoComplete="email"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Label label="Url:" htmlFor="url" />

            <div className="mt-2.5">
              <Input
                type="url"
                placeholder="Enter Url"
                value={props.url}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, url: e.target.value })
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label label="Message:" htmlFor="message" />

            <div className="mt-2.5">
              <Textarea
                value={commentForm.message}
                name="message"
                placeholder="Enter your Message"
                onChange={(e) =>
                  setCommentForm({ ...commentForm, message: e.target.value })
                }
                rows={4}
                cols={50}
              />
            </div>
          </div>
        </div>
        {error && <span className="text-emerald-500">{error}</span>}

        <Button
          type="submit"
          loading={loadingBtn}
          variant="outline"
          className="w-full"
        >
          {loadingBtn ? (
            <div className="flex gap-2 justify-center items-center text-center mx-auto">
              <LoaderIcon />
              <span>Loading</span>
            </div>
          ) : (
            "Submit Here"
          )}
        </Button>
      </form>
    </div>
  )
}
