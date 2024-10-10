import React from "react"
import ReactPlayer from "react-player"
import JoinUS from "@/src/components/sidebar/JoinUS"
import RelatedSidebar from "@/src/components/sidebar/RelatedSidebar"
import ShareFriend from "@/src/components/sidebar/ShareFriend"

interface RelatedProps {
  id: string
  name: string
  slug: string
}

interface SidebarProps {
  title: string
  videoId?: string
  list?: RelatedProps[]
  url: string | undefined
  vedioUrl?: string
}

export default function Sidebar({ title, url, list, vedioUrl }: SidebarProps) {
  return (
    <React.Fragment>
      <JoinUS />
      <RelatedSidebar list={list} />
      <ShareFriend title={title} url={url} />
      {/* <ReactPlayer
        url={`https://youtube.com/shorts/${vedioUrl ? vedioUrl : "QSHEBycK-Dk"}`}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        // height="100%"
        onError={(error) => {
          console.log("video error", error)
        }}
      /> */}
    </React.Fragment>
  )
}
