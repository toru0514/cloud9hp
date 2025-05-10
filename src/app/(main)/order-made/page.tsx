import {orderMadeData} from "@/data/orderMadeData";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";

const OrderMadePage = () => {
  return (
    <SectionContainer>
      <SectionTitle>ORDER MADE</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {orderMadeData.map((order, index) => (
          <Link
            href={`/order-made/${order.slug}`}
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
          >
            {/* 画像部分：正方形にする */}
            <div className="relative w-full aspect-square">
              <Image
                src={order.image}
                alt={order.title}
                fill
                className="object-cover"
              />
            </div>

            {/* テキスト部分 */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2">{order.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{order.description}</p>
              <div className="text-gray-500 text-sm mt-auto space-y-1">
                <div>
                  使用木材: {order.wood}
                </div>
                <div>
                  制作目安日数:{" "}
                  {order.days !== undefined ? (
                    `${order.days}日`
                  ) : (
                    <span className="text-gray-400">要相談</span>
                  )}
                </div>
                <div>
                  {order.price !== undefined ? (
                    `目安価格: ¥${order.price.toLocaleString()}〜（税込）`
                  ) : (
                    <span className="text-gray-400">目安価格: 応相談</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OrderMadePage;
