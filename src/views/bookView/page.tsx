import Card2 from "@/src/components/card2/page";
import Container from "@/src/components/element/container";
import SubHeader from "@/src/components/layout/header/subheader/page";
import React from "react";

export default function page() {
  return (
    <div>
      <SubHeader title="Book Grow Learn Hub" />
      <Container>
        <div className="grid gap-4 grid-cols-3 my-10">
          <Card2 title="Class 9" link="/fdgd" />
          <Card2 title="Class 10" link="/fdgd" />
          <Card2 title="Class 11" link="/fdgd" />
          <Card2 title="Class 12" link="/fdgd" />
          <Card2 title="VU Computer Science" link="/fdgd" />
        </div>
      </Container>
    </div>
  );
}
