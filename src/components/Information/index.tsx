import { Card } from "@/components/ui/card";
import { InformationContents } from "./contents";

const Information = () => {
  return (
    <Card className="flex justify-center items-center w-[60%] pt-8 pb-14 px-40 mx-auto my-20 bg-white/30 shadow-sm">
      <ul className="w-full text-foreground">
        {InformationContents.map((content, index) => (
          <li key={index} className="flex justify-between items-center border-b border-gray-300 py-8">
            <p className="w-[30%] opacity-75 text-lg ">{content.title}</p>
            <p className="w-[70%] text-xl text-start">{content.detail}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Information;
