// src/app/product/page.tsx

import {
    bangleItems,
    crystalwoodringItems,
    earcuffItems,
    earcuffleafItems,
    woodringItems,
} from "@/components/Product/productData";
import {ProductCard} from "@/components/Product/ProductCard";
import React from "react";

const productSections = [
    {
        id: undefined,
        title: "- WOOD RING -",
        items: woodringItems,
    },
    {
        id: "crystalwoodring",
        title: "- CRYSTAL & WOOD RING -",
        items: crystalwoodringItems,
    },
    {
        id: "bangle",
        title: "- WOOD BANGLE -",
        items: bangleItems,
    },
    {
        id: "earcuff",
        title: "- WOOD EARCUFF -",
        items: earcuffItems,
    },
    {
        id: "earcuffleaf",
        title: "- WOOD EARCUFF LEAF -",
        items: earcuffleafItems,
    },
];

const ProductSection = ({id, title, items}: { id?: string; title: string; items: typeof woodringItems }) => (
    <div id={id} className="px-4 py-4 max-w-screen-xl mx-auto">
        <h2 className="pb-2 text-2xl font-semibold text-center">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
                <ProductCard
                    key={item.id}
                    enName={item.enName}
                    jpName={item.jpName}
                    description={item.description}
                    image={item.image}
                    url={item.url}
                    murl={item.mUrl}
                />
            ))}
        </div>
    </div>
);

const ProductPage = () => {
    return (
        <>
            <div className="px-4 py-8 max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold mb-2 text-center">PRODUCTS</h1>
            </div>
            {productSections.map((section) => (
                <ProductSection key={section.title} {...section} />
            ))}
        </>
    );
};

export default ProductPage;
