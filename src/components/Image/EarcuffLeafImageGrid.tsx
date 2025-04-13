import {EarcuffLeafImageData} from "@/data/imageData";
import Image from "next/image";
import Link from "next/link";

const EarcuffLeafImageGrid = () => {
    return (
        <div
            className="grid sm:items-center sm:justify-center grid-cols-2 sm:px-2 md:px-10 lg:px-20 gap-1.5 sm:gap-3 md:gap-4">
            {EarcuffLeafImageData.map((image, index) => (
                <div key={index} className="flex flex-col">
                    <Link href={image.link}>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={600}
                            height={600}
                            className="object-cover w-full h-full min-w-[80px] min-h-[80px]"
                        />
                    </Link>
                </div>
            ))}
        </div>

    );
}

export default EarcuffLeafImageGrid