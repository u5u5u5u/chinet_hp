import React from "react";
import { Card } from "@/components/ui/card";
import { InformationContents } from "./contents";
import Heading from "@/components/Heading";

const Information = () => {
  return (
    <div className="py-20">
      <Heading title="Information" />
      <Card className="flex justify-center items-center w-[80%] max-w-[700px] pt-8 pb-14 px-40 mx-auto my-10 bg-white/30 shadow-sm">
        <ul className="w-full text-foreground">
          {InformationContents.map((content, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-300 py-8"
            >
              <p className="w-[30%] opacity-75 text-lg ">{content.title}</p>
              <p className="w-[70%] text-xl text-start">{content.detail}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Information;
