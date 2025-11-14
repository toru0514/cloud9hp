import ProductArea from "@/components/home/Product";
import FeaturesArea from "@/components/home/Features";
import GalleryArea from "@/components/home/Gallery";
import AboutUsArea from "@/components/home/AboutUs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SnsLinks from "@/components/home/SnsLinks";
import ReviewArea from "@/components/home/Review";
import OnlineShopArea from "@/components/home/OnlineShop";
import WoodsIntroArea from "@/components/home/Woods";
import {Locale, defaultLocale} from "@/lib/i18n";

type HomePageContentProps = {
  locale?: Locale;
};

const HomePageContent = ({locale = defaultLocale}: HomePageContentProps) => (
  <div>
    <Header locale={locale}/>
    <main>
      <OnlineShopArea locale={locale}/>
      <ProductArea locale={locale}/>
      <FeaturesArea locale={locale}/>
      <GalleryArea locale={locale}/>
      {/*<VoiceArea />*/}
      <AboutUsArea locale={locale}/>
      <WoodsIntroArea locale={locale}/>
      <ReviewArea locale={locale}/>
      <SnsLinks locale={locale}/>
    </main>
    <Footer locale={locale}/>
  </div>
);

export default HomePageContent;
