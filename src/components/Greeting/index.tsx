import Image from "next/image";
import Heading from "@/components/Heading";

const MESSAGE = [["私たちは、子どもたちにさまざまな体験や人との出会いを通して、","挑戦する楽しさや仲間と協力する大切さを感じてもらいたい","という思いで活動しています。"],
["また、大学生という子どもたちに近い立場だからこそ、一人ひとりに寄り添いながら多くの活動に取り組み、子どもたちと共に","私たち自身も成長していきたいと考えています。"],
["今後とも、地球っ子ネットワークへの温かいご支援とご協力を","よろしくお願いいたします。"]];
const REP = ["浦埜 彩菜","中本 あやり" ]

const Greeting = () => {
  return (
    <div className="bg-[#c2c2c2] text-black py-20">
      <div className="flex flex-col items-center justify-center w-[80%] max-w-[1000px] mx-auto">
        <Heading title="Greeting" />
        <div className="flex max-md:flex-col items-center justify-center space-y-8 md:space-x-10 w-full">
          {/* <Image
            // src="https://dummyimage.com/600x400/9d9d9d/ffffff"
            src="/dummy-greeting.png"
            width={600}
            height={400}
            alt="representative"
            className="w-[80%] md:w-[50%] rounded-lg"
          /> */}
          <div className="w-[80%] md:w-[50%] max-sm:text-[0.8rem] ">
            {MESSAGE.map((paragraph, pIdx) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: 静的なテキスト配列のためインデックスで安全
                <p key={pIdx} className="mb-2">
                  {paragraph.map((chunk, cIdx) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: 静的なテキスト配列のためインデックスで安全
                    <span key={cIdx} className="inline-block">
                      {chunk}
                    </span>)
                )}
                </p>
              )
            )}
            <div className="mt-4 flex justify-end text-right">
              <span className="mr-4">代表</span>
                <div className="text-left">
                  {REP.map((name, ndx) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: 静的なテキスト配列のためインデックスで安全
                    <div key={ndx}>{name}</div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
