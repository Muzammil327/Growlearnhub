import React from 'react'
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'next-share'

export default function ShareFriend({
  title,
  url,
}: {
  title: string
  url: string
}) {
  return (
    <div className="my-5 friendsocials">
      <div className="title">
        <h3>Share it with Friends:</h3>
      </div>
      <div className="flex gap-3">
        <FacebookShareButton url={url} quote={title} hashtag={'#growlearnhub'}>
          <FacebookIcon size={40} />
        </FacebookShareButton>
        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={40} />
        </WhatsappShareButton>
      </div>
    </div>
  )
}
