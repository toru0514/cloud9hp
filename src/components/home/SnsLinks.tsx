import {snsLinks} from "@/data/snsLinks";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionContainer from "@/components/ui/SectionContainer";

const SnsLinks = () => (
  <SectionContainer>
    <SectionTitle>OFFICIAL LINKS</SectionTitle>
    <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto px-4 mt-5">
      {snsLinks.map((sns, i) => (
        <a
          key={i}
          href={sns.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:shadow-lg transition p-4 rounded-xl text-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={sns.icon} alt={sns.name} className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto object-contain"/>
          {/*<p className="text-sm text-gray-800">{sns.message}</p>*/}
        </a>
      ))}
    </div>
  </SectionContainer>
);

export default SnsLinks;
