import Image from "next/image";
import Heading from "@/components/Heading";

const Greeting = () => {
  return (
    <div className="bg-foreground text-black py-20">
      <div className="flex flex-col items-center justify-center w-[80%] max-w-[1000px] mx-auto">
        <Heading title="Greeting" />
        <div className="flex items-center justify-center space-x-10 w-full">
          <Image
            src="https://dummyimage.com/600x400/9d9d9d/ffffff"
            width={600}
            height={400}
            alt="representative"
            className="w-[50%] rounded-lg"
          />
          <div className="">
            <p>
              自身の経験により、子どもたちには様々な経験をして将来の選択肢を増やしていってほしいと思い設立しました。
              子どもたちに寄り添い、多くの子どもたちが集ってくれると嬉しいです。
            </p>
            <p>代表 陣内 勇冴</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
