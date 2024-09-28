import React from "react"
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon
} from "next-share"

export default function ShareFriend({
  title,
  url
}: {
  title: string
  url: string | undefined
}) {
  return (
    <div className="my-5 friendsocials">
      <div className="title">
        <h3>Share it with Friends:</h3>
      </div>
      <div className="flex gap-3">
        <FacebookShareButton
          url={`https://growlearnhub.com${url}`}
          quote={title}
          hashtag={"#growlearnhub"}
        >
          <FacebookIcon size={40} />
        </FacebookShareButton>
        <WhatsappShareButton
          url={`https://growlearnhub.com${url}`}
          title={title}
        >
          <WhatsappIcon size={40} />
        </WhatsappShareButton>
      </div>
    </div>
  )
}
