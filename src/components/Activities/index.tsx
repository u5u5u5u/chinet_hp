import Image from "next/image";
import Heading from "@/components/Heading";

const Activities = () => {
  return (
    <div className="flex flex-col items-center bg-[#c2c2c2] text-black py-20">
      <Heading title="Activities" />
      <div className="space-y-10 w-[90%] max-w-[1000px]">
        <section className="flex justify-between">
          <div className="w-[70%]">
            <Image
              src="/images/activity1.png"
              width={1000}
              height={1000}
              alt="Description of image 1"
            />
          </div>
          <div className="flex flex-col justify-center space-y-2 w-[70%] border-white/10 border-2 shadow-xl rounded-[26%_74%_70%_30%_/_30%_26%_74%_70%] bg-white/30 backdrop-blur-sm pt-6 px-9 sm:px-16 md:px-24 lg:px-32 pb-8 sm:py-14 md:pb-20 lg:py-24 mt-32 md:mt-40 lg:mt-48 -ml-32">
            <h3 className="sm:text-lg md:text-xl lg:text-3xl font-bold">
              01 自習場所の提供
            </h3>
            <p className="text-[0.6rem] sm:text-xs md:text-base lg:text-xl leading-loose">
              毎週日曜日(※1)ゆめタウン飯塚内のゆめホール(つなぐカフェ@飯塚)を13時～17時に自習室として開放します。
              九工大生も課題をしたり、勉強をしたりしているので、もしわからない問題があったら聞いてください。
            </p>
          </div>
        </section>
        <section className="flex justify-between">
          <div className="flex flex-col justify-center space-y-2 w-[70%] border-white/10 border-2 shadow-xl rounded-[26%_74%_70%_30%_/_30%_26%_74%_70%] bg-white/30 backdrop-blur-sm pt-6 px-9 sm:px-16 md:px-24 lg:px-32 pb-8 sm:py-14 md:pb-20 lg:py-24 mt-32 md:mt-40 lg:mt-48 -mr-32">
            <h3 className="sm:text-lg md:text-xl lg:text-3xl font-bold">
              02 イベント開催
            </h3>
            <p className="text-[0.6rem] sm:text-xs md:text-base lg:text-xl leading-loose">
              月に1回(※2)、色々なイベントを中高生対象で行っています。
              過去問会などの勉強から、プログラミング、遊びまで幅広いジャンルのイベントを開催予定です。
              月に1回ですが、みなさんによりよいイベント、経験をお届けできるよう頑張っています。
            </p>
          </div>
          <div className="w-[70%]">
            <Image
              src="/images/activity2.png"
              width={1000}
              height={1000}
              alt="Description of image 2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activities;
