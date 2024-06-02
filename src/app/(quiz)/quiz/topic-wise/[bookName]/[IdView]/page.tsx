import React from "react";
import IdView from "@/src/views/quizView/bookNameView/Heading1View/Heading2View/page";

interface IpropsbookName {
  bookName: string;
  IdView: string;
}
interface Iprops {
  params: IpropsbookName;
}

export default async function Page({ params }: Iprops) {
  return <IdView bookName={params.bookName} heading1={params.IdView} />;
}
