import WoodringArea from "@/components/Product/Woodring/Woodring";
import CrystalWoodringArea from "@/components/Product/CrystalWoodRing/CrystalWoodRing";
import BangleArea from "@/components/Product/Bangle/Bangle";
import EarcuffArea from "@/components/Product/Earcuff/Earcuff";
import EarcuffLeafArea from "@/components/Product/EarcuffLeaf/EarcuffLeaf";

const ProductArea = () => {
    return (
        <div className="p-4 lg:p-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">PRODUCT</h2>
            <WoodringArea/>
            <CrystalWoodringArea/>
            <BangleArea/>
            <EarcuffArea/>
            <EarcuffLeafArea/>
        </div>
    );
};

export default ProductArea;
