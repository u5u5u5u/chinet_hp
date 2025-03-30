import About from "@/components/About";
import Activities from "@/components/Activities";
import Greeting from "@/components/Greeting";
import Information from "@/components/Information";
import MainVisual from "@/components/MainVisual";
import News from "@/components/News";

export default function Home() {
  return (
    <main>
      <MainVisual />
      <About />
      <Activities />
      <News />
      <Greeting />
      <Information />
    </main>
  );
}
