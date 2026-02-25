"use client";

import { View } from "@react-three/drei";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";

type FeaturesProps = {
  items: { tag?: string; heading: string; body: string }[];
};

const Features = ({ items }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      id="features"
      className="features-container relative bg-[#FFF3EE] text-gray-900"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="features-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {items.map((item, index) => (
            <div
              key={item.heading}
              id={index === 0 ? "conducteurs" : index === 1 ? "clients" : undefined}
              className="feature-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-2xl p-6 backdrop-blur-lg max-md:bg-white/40",
                )}
              >
                {item.tag && (
                  <span
                    className={clsx(
                      "mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-widest",
                      item.tag === "e-Go Taxi"
                        ? "bg-[#FF4C00] text-white"
                        : "bg-[#0F0F0F] text-white",
                    )}
                  >
                    {item.tag}
                  </span>
                )}
                <h2 className="text-balance text-4xl font-black uppercase text-gray-900 md:text-6xl">
                  {item.heading}
                </h2>
                <div className="mt-4 text-xl text-gray-700">
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Features;
