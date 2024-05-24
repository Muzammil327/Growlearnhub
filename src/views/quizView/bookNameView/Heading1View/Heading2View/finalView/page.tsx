"use client";
import React from "react";
import Container from "@/src/components/element/container";
import SubHeader from "@/src/components/layout/header/subheader/page";
import FetchFinalView from "./FetchFinalView";
import Form from "@/src/components/element/form/page";
import { convertToUppercaseWithSpace } from "@/src/views/function/convertToUppercaseWithSpace";
import { IpropsFinal } from "@/src/types/page";
import Sidebar from "@/src/components/element/sidebar";

export default function FinalView({ final }: IpropsFinal) {
  const capitalizedfinalParams = convertToUppercaseWithSpace(final);

  return (
    <>
      <SubHeader title={capitalizedfinalParams} />

      <Container>
        <div className="grid md:grid-cols-9 md:gap-4">
          <article className="md:col-span-7">
            <section>
              {" "}
              <FetchFinalView final={final} />{" "}
            </section>
            <section>
              {" "}
              <Form
                url={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/mcqs/${final}`}
              />{" "}
            </section>
          </article>
          <article className="md:col-span-2">
            <Sidebar
              title={capitalizedfinalParams}
              videoId="Ko6uaohTe20"
              url={`https://growlearnhub.com/mcqs/${final}`}
            />
          </article>
        </div>
      </Container>
    </>
  );
}
