import Container from "@/src/components/element/container";
import SubHeader from "@/src/components/layout/header/subheader/page";
import React from "react";

export default function page() {
  return (
    <div>
      <SubHeader title="CS 201 Lecture 1" />
      <Container>
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-7 content">
            <p>
              Definition: &rdquo;A program is a precise sequence of steps to
              solve a particular problem.&rdquo;
            </p>
          </div>
          <div className="col-span-3">hg</div>
        </div>
      </Container>
    </div>
  );
}
