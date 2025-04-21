import Heading from "@/components/Heading";

const About = () => {
  return (
    <div className="w-[80%] max-w-[700px] py-20 mx-auto">
      <Heading title="About" />
      <div className="text-base sm:text-lg md:text-xl text-center ">
        <p className="leading-[2] sm:leading-[3] md:leading-[4] mb-4">
          <span className="inline-block">地球っ子ネットワークは</span>
          <span className="inline-block">
            九工大の学生と（株）麻生、 飯塚市が
          </span>
          <span className="inline-block">連携して活動する</span>
          <span className="inline-block">教育ボランティア団体です。</span>
        </p>
        <p className="leading-[2] sm:leading-[3] md:leading-[4] mb-4">
          <span className="inline-block">
            子どもたちの可能性を少しでも広げたい
          </span>
          <span className="inline-block">思いを持った大学生たちが</span>
          <span className="inline-block">活動しています。</span>
        </p>
        <p className="leading-[2] sm:leading-[3] md:leading-[4] mb-4">
          <span className="inline-block">私たちは、子どもたちの学びに</span>
          <span className="inline-block">つながるような体験を</span>
          <span className="inline-block">届けることを目指し、</span>
          <span className="inline-block">
            プログラミング教室や学習支援など、
          </span>
          <span className="inline-block">さまざまな活動を行っています。</span>
        </p>
        <p className="leading-[2] sm:leading-[3] md:leading-[4] mb-4">
          <span className="inline-block">
            九工大生ならではのアイデアを活かして、
          </span>
          <span className="inline-block">
            地域に根ざした教育支援を実践しています。
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
