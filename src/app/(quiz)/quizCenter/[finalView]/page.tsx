import FinalView from "@/src/views/quizView/bookNameView/Heading1View/Heading2View/finalView/page";
import React from "react";

interface IpropsbookName {
  finalView: string;
}
interface Iprops {
  params: IpropsbookName;
}

export default async function Page({ params }: Iprops) {
  return (
    <>
      <FinalView final={params.finalView} />
    </>
  );
}
