import { Card } from "@/components/ui/card";
import { InformationContents } from "./contents";

const Information = () => {
  return (
    <Card className="flex justify-center items-center w-[70%] mx-auto mt-10">
      <table>
        <tbody>
          {InformationContents.map((content, index) => (
            <tr key={index}>
              <td>{content.title}</td>
              <td>{content.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Information;
