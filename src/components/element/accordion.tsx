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
    <Accordion>
      {data.map((data: Iprops) => {
        return (
          <AccordionItem key={data.title}>
            <AccordionItemHeading>
              <AccordionItemButton>{data.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{data.para}</p>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
