import Image from "next/image";
import Heading from "@/components/Heading";

const Greeting = () => {
  return (
    <div className="bg-[#c2c2c2] text-black py-20">
      <div className="flex flex-col items-center justify-center w-[80%] max-w-[1000px] mx-auto">
        <Heading title="Greeting" />
        <div className="flex max-sm:flex-col items-center justify-center space-y-8 md:space-x-10 w-full">
          <Image
            src="https://dummyimage.com/600x400/9d9d9d/ffffff"
            width={600}
            height={400}
            alt="representative"
            className="w-[80%] md:w-[50%] rounded-lg"
          />
          <div className="w-[80%] md:w-[50%]">
            <p>
              自身の経験により、子どもたちには様々な経験をして将来の選択肢を増やしていってほしいと思い設立しました。
              子どもたちに寄り添い、多くの子どもたちが集ってくれると嬉しいです。
            </p>
            <p className="mt-4">代表 陣内 勇冴</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
