import React from "react"
import JoinUS from "@/src/components/ui/sidebar/JoinUS"
import ShareFriend from "@/src/components/ui/sidebar/ShareFriend"

export default function Sidebar({
  title,
  url
}: {
  title: string
  url: string
}) {
  return (
    <React.Fragment>
      <JoinUS />
      <ShareFriend title={title} url={url} />
    </React.Fragment>
  )
}
