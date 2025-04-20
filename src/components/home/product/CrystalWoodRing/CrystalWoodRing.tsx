import Button from "@/components/ui/Button";
import CrystalWoodringImageGrid from "@/components/image/CrystalWoodringImageGrid";

const CristalWoodringArea = () => {
  return (
    <div className="p-2 lg:p-4">
      <div className="lg:p-2 lg:px-20">
        <div className="p-4 lg:p-6 bg-gray-100 ">
          <h2
            className="sm:text-xl md:text-3xl lg:text-3xl pl-2 md:font-semibold lg:font-semibold mb-2 md:mb-4 lg:mb-4 text-left">
            ◆ CRYSTAL & WOODRING
          </h2>
          <CrystalWoodringImageGrid/>
          <div className="items-center flex justify-center pt-6">
            <Button link="/product#crystalwoodring"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CristalWoodringArea;
