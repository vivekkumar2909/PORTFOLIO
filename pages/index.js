import { Inter } from "next/font/google";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { DiCode } from "react-icons/di";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import Image from "next/image";
import wave from "../public/dev-ed-wave.png"
import design from "../public/design.png";
import code from "../public/code.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";
import Skill from "./components/Skill";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Vivek Kumar PortFolio</title>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" select-auto bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white  ">
        <section className=" min-h-screen">
          <nav className="p-10 mb-12 flex justify-between ">
            <h1 className=" text-xl font-burtons">DEVELOPER</h1>
            <ul className=" flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/drive/folders/1XDF9Psy2wFUHmxbVSSZnm2XVYQ5i9BgB" target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className=" text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Vivek Shah
            </h2>
            <h3 className="text-2xl py-2 md:text-xl">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-lq mx-auto dark:text-white">
              shxbxjnijqe.ml,xoijidmkjdjchpuihjkmsx;inecmjiehjnmxniihjdkm
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500  dark:text-white">
            <a href="https://www.linkedin.com/in/vivek-kumar-571b32242/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="/" >
              <AiFillTwitterCircle />
            </a>
            <a href="/">
              <AiFillYoutube />
            </a>
            <a href="https://leetcode.com/vivek_kumar2909/" target="_blank">
              <DiCode />
            </a>
          </div>

          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={wave} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-3xl py-1">Introduction</h1>
            <p className="text-md leading-8 text-gray-500  dark:text-white ">
              {" "}
              bxulyy g;dbna9 uj dnl d js lsjcc hfuewd he8fhdncuuun edhushbbu
              sbxw uo gudhuxh hdwnupdu 32 h3iham, lrem23 cheqied h3uh
            </p>
          </div>
          {/* <div className="lg:flex gap-10">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="text-center"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful design
              </h3>
              <div className=" dark:text-white">
                <p className="py-2">
                  Creating elegant design suited for needs design theory
                </p>
                <h4 className="text-teal-500 py-4">Skills Which I have</h4>
                <p className="text-gray-600 py-1 dark:text-white  ">C++</p>
                <p className="text-gray-600 py-1 dark:text-white">NeXt JS</p>
                <p className="text-gray-600 py-1 dark:text-white">Node</p>
                <p className="text-gray-600 py-1 dark:text-white">JavaScript</p>
                <p className="text-gray-600 py-1 dark:text-white ">Python</p>
                <p className="text-gray-600 py-1 dark:text-white ">JavaScript</p>
              </div>

            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="text-center"
                src={code}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful design
              </h3>
              <p className="py-2">
                Creating elegant design suited for needs design theory
              </p>
              <h4 className="text-teal-500 py-4">Skills Which I have</h4>
              <p className="text-gray-600 py-1">C++</p>
              <p className="text-gray-600 py-1">NeXt JS</p>
              <p className="text-gray-600 py-1">Node</p>
              <p className="text-gray-600 py-1">JavaScript</p>
              <p className="text-gray-600 py-1">Python</p>
              <p className="text-gray-600 py-1">JavaScript</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="text-center"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful design
              </h3>
              <p className="py-2">
                Creating elegant design suited for needs design theory
              </p>
              <h4 className="text-teal-500 py-4">Skills Which I have</h4>
              <p className="text-gray-600 py-1">C++</p>
              <p className="text-gray-600 py-1">NeXt JS</p>
              <p className="text-gray-600 py-1">Node</p>
              <p className="text-gray-600 py-1">JavaScript</p>
              <p className="text-gray-600 py-1">Python</p>
              <p className="text-gray-600 py-1">JavaScript</p>
            </div> */}
          {/* </div> */}


           

        </section>
        

            <div className="text-2xl mt-2 mb-2"> SKILLS</div>

        <section>
              <div className=" justify-between  p-50 items-center text-3xl shadow-md  rounded-lg "> 
              <Skill/>
              </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Project</h3>
            <p className="text-md leading-8  py-2 text-gray-800  dark:text-white ">
              nxabyugcna uhd ydhhiijww8d8 3hxuhjidn udh 33h38hnjsjn
              ndchuhehhnsnsnxuhcjdndc cuqies m xuiu9uejenf dcnjdijc njija
              cmjncennn
            </p>

            <p className="text-md leading-8  py-2 text-gray-800  dark:text-white">
              nxabyugcna uhd ydhhiijww8d8 3hxuhjidn udh 33h38hnjsjn
              ndchuhehhnsnsnxuhcjdndc cuqies m xuiu9uejenf dcnjdijc njija
              cmjncennn
            </p>
          </div>
          <div className="flex flex-col py-10 gap-10 shadow-lg p-10 rounded-2xl pb-10 mb-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100"}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
