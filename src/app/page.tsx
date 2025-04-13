import ProductArea from "@/components/Product/Product";
import FeaturesArea from "@/components/Features/Features";
import GalleryArea from "@/components/Gallery/Gallery";
// import VoiceArea from "@/components/Voice/Voice";
import AboutUsArea from "@/components/AboutUs/AboutUs";
import HeaderMenu from "@/components/Header/Header";
import FooterMenu from "@/components/Footer/FooterMenu";

export default function Home() {
    return (
        <div>
            <HeaderMenu/>
            <main>
                <ProductArea/>
                <FeaturesArea/>
                <GalleryArea/>
                {/*<VoiceArea />*/}
                <AboutUsArea/>
            </main>
            <FooterMenu/>
        </div>
    );
}
