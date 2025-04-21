import Image from "next/image";
import Heading from "@/components/Heading";

const Activities = () => {
  return (
    <div className="flex flex-col items-center bg-[#c2c2c2] text-black py-20">
      <Heading title="Activities" />
      <div className="space-y-10 w-[90%] max-w-[1000px]">
        <section className="flex justify-center">
          <div>
            <Image
              src="/images/activity1.png"
              width={1000}
              height={1000}
              alt="Description of image 1"
              className="w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] md:w-[450px] md:h-[400px] lg:w-[550px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col justify-center space-y-2 w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] md:w-[450px] md:h-[400px] lg:w-[550px] lg:h-[500px] border-white/10 border-2 shadow-xl rounded-[26%_74%_70%_30%_/_30%_26%_74%_70%] bg-white/30 backdrop-blur-sm pt-6 px-9 sm:px-16 md:px-24 lg:px-24 pb-8 sm:py-14 md:pb-20 lg:py-24 mt-32 md:mt-40 lg:mt-48 -ml-32">
            <h3 className="sm:text-lg md:text-xl lg:text-3xl font-bold">
              01 ボランティア活動
            </h3>
            <p className="text-[0.5rem] sm:text-xs md:text-base lg:text-xl leading-loose">
              地域の学校や団体などから依頼を受けて、学習支援やイベントの運営補助などを行います。
              子どもたちと直接関わりながら、勉強のサポートをしたり、遊びやものづくりのお手伝いをしたりする中で、大学生自身も多くの学びと気づきを得ています。
            </p>
          </div>
        </section>
        <section className="flex justify-center">
          <div className="flex flex-col justify-center space-y-2 w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] md:w-[450px] md:h-[400px] lg:w-[550px] lg:h-[500px] border-white/10 border-2 shadow-xl rounded-[26%_74%_70%_30%_/_30%_26%_74%_70%] bg-white/30 backdrop-blur-sm pt-6 px-9 sm:px-16 md:px-24 lg:px-24 pb-8 sm:py-14 md:pb-20 lg:py-24 mt-32 md:mt-40 lg:mt-48 -mr-32">
            <h3 className="sm:text-lg md:text-xl lg:text-3xl font-bold">
              02 イベント開催
            </h3>
            <p className="text-[0.5rem] sm:text-xs md:text-base lg:text-xl leading-loose">
              学びや遊びなどをテーマに、小中学生向けのイベントを企画から運営まで大学生が主体となって行います。
              楽しみながら学べる内容を工夫し、子どもたちが「できた！」という達成感を得られるよう心がけています。
            </p>
          </div>
          <div>
            <Image
              src="/images/activity2.png"
              width={1000}
              height={1000}
              alt="Description of image 2"
              className="w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] md:w-[450px] md:h-[400px] lg:w-[550px] lg:h-[500px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activities;
