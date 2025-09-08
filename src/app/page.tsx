import ProductArea from "@/components/home/Product";
import FeaturesArea from "@/components/home/Features";
import GalleryArea from "@/components/home/Gallery";
// import VoiceArea from "@/components/Voice/Voice";
import AboutUsArea from "@/components/home/AboutUs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SnsLinks from "@/components/home/SnsLinks";
import ReviewArea from "@/components/home/Review";
import OnlineShopArea from "@/components/home/OnlineShop";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <OnlineShopArea/>
        <ProductArea/>
        <FeaturesArea/>
        <GalleryArea/>
        {/*<VoiceArea />*/}
        <AboutUsArea/>
        <ReviewArea/>
        <SnsLinks/>
      </main>
      <Footer/>
    </div>
  );
}
