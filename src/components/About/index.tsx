import Heading from "@/components/Heading";

const About = () => {
  return (
    <div className="w-[80%] py-20 mx-auto">
      <Heading title="About" />
      <p className="sm:text-xl text-center leading-[3] sm:leading-[4]">
        私たち「勉楽のつどい」は
        <br />
        子どもたちの可能性を少しでも広げたい思いを持った大学生たちが
        <br />
        設立した団体です。
        <br />
        代表の朝岡が 地域の無料で使えた自習室の存在によって進路実現を果たし、
        <br />
        自分と同じように学びたいのに環境が充分でない子どもの力になりたい、
        <br />
        座学以外の様々な学びにつながる機会を与えたい
        <br />
        と思い様々な活動を行なっております。
        <br />
        設立当初は大学の組織としてではなく、独立して活動していましたが、
        <br />
        現在は飯塚市、麻生グループ、九工大の「地球っ子ネットワーク」に加わり、
        <br />
        その中の一事業という立場になりました。
        <br />
        これからも設立時の思いを忘れずに、子どもたちの未来のために
        <br />
        行動できればと考えております。
      </p>
    </div>
  );
};

export default About;
