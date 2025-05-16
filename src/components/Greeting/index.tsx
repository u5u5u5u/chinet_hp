import Image from "next/image";
import Heading from "@/components/Heading";

const Greeting = () => {
  return (
    <div className="bg-[#c2c2c2] text-black py-20">
      <div className="flex flex-col items-center justify-center w-[80%] max-w-[1000px] mx-auto">
        <Heading title="Greeting" />
        <div className="flex max-md:flex-col items-center justify-center space-y-8 md:space-x-10 w-full">
          <Image
            // src="https://dummyimage.com/600x400/9d9d9d/ffffff"
            src="/dummy-greeting.png"
            width={600}
            height={400}
            alt="representative"
            className="w-[80%] md:w-[50%] rounded-lg"
          />
          <div className="w-[80%] md:w-[50%] max-sm:text-[0.8rem] ">
            <p className="mb-2">
              <span className="inline-block">
                楽しそうに活動する子どもたちの笑顔。
              </span>
              <span className="inline-block">
                わからなかったことが「できた！」
              </span>
              <span className="inline-block">に変わった瞬間の</span>
              <span className="inline-block">キラキラした表情。</span>
            </p>
            <p className="mb-2">
              <span className="inline-block">そんな姿に、私たちも多くの</span>
              <span className="inline-block">元気と学びをもらっています。</span>
            </p>
            <p className="mb-2">
              <span className="inline-block">
                活動を支えてくださる地域の皆さま、
              </span>
              <span className="inline-block">企業の皆さま、</span>
              <span className="inline-block">そして一緒に取り組んでくれる</span>
              <span className="inline-block">仲間たちのおかげで、</span>
              <span className="inline-block">
                地球っ子ネットワークは少しずつ、
              </span>
              <span className="inline-block">地域に根ざした団体として</span>
              <span className="inline-block">成長してきました。</span>
            </p>
            <p className="mb-2">今後とも、どうぞよろしくお願いいたします。</p>
            <p className="mt-4">
              <span className="mr-4">代表</span>陣内 勇冴
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
