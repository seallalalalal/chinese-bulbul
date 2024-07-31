"use client";
import React, { PropsWithChildren } from "react";

import Sidebar from "@/components/Sidebar";
// import { AcmeLogo } from "./AcmeLogo.jsx";

const pageContent = [
  {
    title: "外觀",
    description:
      "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。",
  },
  {
    title: "棲地",
    description:
      "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。",
  },
  {
    title: "食性",
    description:
      "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。",
  },
];
export default function Page() {
  function renderContent() {}

  return (
    <div className="h-full">
      <div className="bg-banner bg-cover w-full lg:h-3/5 h-[375px] lg:w-full flex flex-col place-items-end justify-end px-12 py-9 gap-1">
        <div className="flex lg:flex-row flex-col items-end">
          <div className="text-white font-bold text-5xl">白頭翁</div>
          <div className="text-white font-bold text-5xl">&nbsp;(Chinese</div>
          <div className="text-white font-bold text-5xl">&nbsp;bulbul)</div>
        </div>
        <div className="text-white w-full flex justify-end text-center">
          又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
          年。
        </div>
      </div>
      <div className="bg-[#DCCCBC] flex xl:flex-row flex-col lg:min-h-max justify-evenly py-14 px-12 gap-12 items-center lg:h-2/5 min-h-[calc(100%-339px)]">
        {pageContent.map((pg) => (
          <div key={pg.title} className="flex flex-row gap-5 max-w-[278px]">
            <Title>{pg.title}</Title>
            <div>{pg.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Title({ children }: PropsWithChildren) {
  return (
    <div className="font-bold text-3xl [writing-mode:vertical-lr] [text-orientation:upright]">
      {children}
      <div className="h-[25px] w-[25px] rounded-full border-8 border-[#AA666699] relative -bottom-[50px] right-[15px]"></div>
    </div>
  );
}
