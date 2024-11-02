"use client"
import React from "react"
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon
} from "next-share"
import styles from "./Sidebar.module.scss"

export default function ShareFriend({
  title,
  url
}: {
  title: string
  url: string | undefined
}) {
  return (
    <div className="my-5">
      <div className={styles.title}>
        <h3 className={styles.h3}>Share it with Friends:</h3>
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
