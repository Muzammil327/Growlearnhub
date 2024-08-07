import React from 'react'
import JoinUS from '@/src/components/sidebar/JoinUS'
import RelatedSidebar from '@/src/components/sidebar/RelatedSidebar'
import ShareFriend from '@/src/components/sidebar/ShareFriend'

interface RelatedProps {
  id: string
  name: string
  slug: string
}

interface SidebarProps {
  title: string
  videoId?: string
  list?: RelatedProps[]
  url: string
}

export default function Sidebar({ title, url, list }: SidebarProps) {
  return (
    <aside>
      <JoinUS />
      <RelatedSidebar list={list} />
      <ShareFriend title={title} url={url} />
    </aside>
  )
}
