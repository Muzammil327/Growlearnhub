"use client";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

interface Iprops {
  title: string;
  para: string;
}

export default function Accordation({ data }: { data: Iprops[] }) {
  return (
    <Accordion className="mt-4">
      {data.map((data: Iprops) => {
        return (
          <AccordionItem key={data.title}>
            <AccordionItemHeading>
              <AccordionItemButton>{data.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="mx-2 my-0">
              <p className="p5 px-4 py-4">{data.para}</p>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
