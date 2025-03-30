import Image from "next/image";
import Heading from "@/components/Heading";

const Activities = () => {
  return (
    <div className="flex flex-col items-center space-y-20 bg-[#c2c2c2] text-black py-20">
      <Heading title="Activities" />
      <section className="flex justify-between">
        <div className="w-[600px] h-[500px]">
          <Image
            src="/images/activity1.png"
            width={1000}
            height={1000}
            alt="Description of image 1"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4 w-[600px] h-[500px] border-2 shadow-xl rounded-[26%_74%_70%_30%_/_30%_26%_74%_70%] backdrop-blur-sm px-[8%] mt-48 -ml-40">
          <h3 className="text-3xl font-bold">01 自習場所の提供</h3>
          <p className="leading-loose">
            毎週日曜日(※1)ゆめタウン飯塚内のゆめホール(つなぐカフェ@飯塚)を13時～17時に自習室として開放します。
            九工大生も課題をしたり、勉強をしたりしているので、もしわからない問題があったら聞いてください。
            家で勉強するのはやる気が出ない、図書館のような静かな環境では集中できない人におすすめです。
          </p>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="flex flex-col justify-center space-y-4 w-[600px] h-[500px] border-2 shadow-xl rounded-[41%_59%_28%_72%_/_35%_20%_80%_65%] backdrop-blur-sm px-[8%] mt-48 -mr-40">
          <h3 className="text-3xl font-bold">02 イベント開催</h3>
          <p className="leading-loose">
            月に1回(※2)、色々なイベントを中高生対象で行っています。
            過去問会などの勉強から、プログラミング、遊びまで幅広いジャンルのイベントを開催予定です。
            月に1回ですが、みなさんによりよいイベント、経験をお届けできるよう頑張っています。
          </p>
        </div>
        <div className="w-[600px] h-[500px]">
          <Image
            src="/images/activity2.png"
            width={1000}
            height={1000}
            alt="Description of image 2"
          />
        </div>
      </section>
    </div>
  );
};

export default Activities;
