import Section from '../components/section'
import Banner from '../components/banner';
import SectionTwo from '../components/sectiontwo';
import SectionThree from '../components/sectionthree';
import SectionFour from '../components/sectionfour';
import Faq from '../components/faq';


function Home() {
  return (
    <div className="bg-black">
    <Banner></Banner>
      <Section></Section>
      <SectionTwo></SectionTwo>
      <SectionThree/>
      <SectionFour/>
      <Faq/>
    </div>
  );
}

export default Home;
