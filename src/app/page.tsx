import About from "@/components/About";
import Activities from "@/components/Activities";
import Greeting from "@/components/Greeting";
import Information from "@/components/Information";
import MainVisual from "@/components/MainVisual";
import News from "@/components/News";
import InView from "@/components/InView";

export default function Home() {
  return (
    <main>
      <MainVisual />
      <InView>
        <About />
      </InView>
      <InView>
        <Activities />
      </InView>
      <InView>
        <News />
      </InView>
      <InView>
        <Greeting />
      </InView>
      <InView>
        <Information />
      </InView>
    </main>
  );
}
