"use client";
import '../globals.css'
import localFont from 'next/font/local';


const myFont = localFont({ src: '../../font/NotoSansArabic-Regular.ttf' })
import ArrowBottom from "@/svg/ArrowBottom";
import IconAddress from "@/svg/IconAddress";
import IconCardOne from "@/svg/IconCardOne";
import IconCardThree from "@/svg/IconCardThree";
import IconCardTwo from "@/svg/IconCardTwo";
import IconChat from "@/svg/IconChat";
import IconMessage from "@/svg/IconMessage";
import IconPhone from "@/svg/IconPhone";
import IconTelegram from "@/svg/IconTelegram";
import IconTwitter from "@/svg/IconTwitter";
import IconWhatsApp from "@/svg/IconWhatsApp";
import Language from "@/svg/Language";
import Logo from "@/svg/Logo";
import LogoCardFive from "@/svg/LogoCardFive";
import LogoCardOne from "@/svg/LogoCardOne";
import LogoCardSix from "@/svg/LogoCardSix";
import LogoCardThree from "@/svg/LogoCardThree";
import LogoCardTwo from "@/svg/LogoCardTwo";
import Link from "next/link";

import { useState } from "react";
import RectangelOne from '@/svg/RectangelOne';
import RectangelThree from '@/svg/RectangelThree';
import IconHeadPhone from '@/svg/IconHeadPhone';
import IconCOpyRight from '@/svg/IconCopyRight';


export default function Home() {

  const [dropdown, set_dropdwon] = useState(false)
  const [url, set_url] = useState('home')

  const dropdownhnadler = () => {
    set_dropdwon(!dropdown)
  }
  return (

    <main className={`${myFont.className}`} dir="rtl" >

      <div id="home">  </div>
      {/* header */}
      <header className="shadow-md select-none sticky top-0 z-[1000] bg-white">
        <div className="container mx-auto flex justify-between h-full">
          <div className="flex ">
            {
              dropdown == true ?
                <div className="h-screen w-screen absolute top-0 left-0" onClick={dropdownhnadler} ></div>
                : <></>

            }
            {/* homde and contact in menu */}
            <div className={`2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden cursor-pointer text-orange_1 hover:text-orange-400 hover:border-orange-400 mx-6 flex items-center h-full   ${url == 'home' ? 'border-b-4 border-orange_1' : ''}`} onClick={() => set_url('home')}>
              <a className="text-xl h-full  flex justify-center items-center" href="#home" >خانه</a>
            </div>
            <div className={`2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden cursor-pointer text-orange_1 hover:text-orange-400 mx-6 flex items-center h-full ${url == 'contact' ? 'border-b-4 border-orange_1' : ''}`} onClick={() => set_url('contact')}>
              <a className="text-xl h-full flex justify-center items-center  " href="#footer" > تماس با ما</a>
            </div>



            <div className=" mx-6 xs:mx-0 2xs:mx-0 3xs:mx-0 4xs:mx-0 flex py-3 items-center h-full text-orange_1 hover:border-orange-400 hover:text-orange-400 cursor-pointer relative" onClick={dropdownhnadler}>
              <div className="h-6 xs:h-6 2xs:h-4 3xs:h-4 4xs:h-4 xs:w-10 2xs:w-6 3xs:w-10 4xs:w-10 ">
                <Language />
              </div>
              <span className="px-2 xs:px-2 2xs:px-1 3xs:px-1 4xs:px-1 text-xl xs:text-lg 2xs:text-sm 3xs:text-lg 4xs:text-base">
                کوردی
              </span>
              <div className="h-2 xs:w-8 2xs:w-4  3xs:w-4 4xs:w-5  xs:h-1.5 2xs:h-1.5 3xs:h-1.5 4xs:h-1.5 mt-1 ">
                <ArrowBottom />
              </div>

              <div className={` bg-white shadow-lg absolute  2xl:top-16 xl:top-16 lg:top-16 md:top-12 sm:top-14 xs:top-12 2xs:top-12 3xs:top-12 4xs:top-12 top-12 right-0 w-20 flex-col items-center ${dropdown == true ? 'flex' : 'hidden'} `}>
                <div className="  hover:bg-orange-100  w-full text-center">
                  <Link href={'/en'} className="block h-full w-full p-2">English</Link>
                </div>
                <div className="border-y hover:bg-orange-100 bg-orange-100  border-dashed text-center w-full disabled:block">
                  <Link href='/ku' className="block h-full w-full p-2">کوردی</Link>
                </div>
                <div className=" w-full hover:bg-orange-100 disabled:block  text-center">
                  <Link href='/fa' className="block h-full w-full p-2">فارسی</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center py-5 xs:py-3 2xs:py-3 3xs:py-3 4xs:py-3 h-full 2xl:w-52 xl:w-52 lg:w-52 md:w-52 sm:w-52 xs:w-24 2xs:w-24 3xs:w-24 4xs:w-24">
            <h1 className="px-2 2xl:text-4xl xl:text-3xl lg:text-5xl md:text-2xl sm:text-2xl xs:text-2xl 2xs:text-xl 3xs:text-lg 4xs:text-base text-orange_1">
              کواپ
            </h1>
            <div className="2xl:h-12 xl:h-7 lg:h-7 md:h8 sm:h-5 xs:h-5 2xs:h-6 3xs:h-5 4xs:h-5">
              <Logo />
            </div>


          </div>
        </div>
      </header>





      {/* content */}

      <div className="container xs:px-3 2xs:px-3 3xs:px-3 mx-auto " >
        <h1 className="text-4xl pt-14 pb-7 mb-6 text-orange_1 border-b-2  2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
          کورد بازرگان کارزان
        </h1>

        {/* cards decktop */}
        <div className="flex flex-wrap flex-row">
          <div className="flex flex-col  justify-between xl:w-7/12 lg:w-7/12 md:w-full xs:items-end 2xs:items-end 3xs:items-end 4xs:items-end ">
            {/* card 1 */}
            <div className='relative 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block w-3/5'>
              <RectangelOne />
              <div className='h-11 rounded-lg bg-white w-11 shadow-2xl p-2 xs:top-4 2xs:top-4 3xs:top-4 4xs:top-4 top-4left-1/4 absolute'>
                <LogoCardOne />
              </div>
            </div>
            <h2 className="text-2xl xs:ml-20 2xs:ml-20 3xs:ml-20 4xs:ml-20 xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-center 2xs:self-center 3xs:self-center 4xs:self-center">
              زیرەک کردنەوەی خانوو
            </h2>
            <div className='flex flex-wrap w-full  justify-end relative'>
              <div className=" relative z-20 shadow-xl p-4 3xs:pt-0 4xs:pt-0 pt-6 py-8 2xl:my-8 xl:my-8 lg:my-8 md:my-8 sm:my-8 xs:my-0 2xs:my-0 rounded-xl my-8 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full xs:w-4/5 2xs:w-4/5 3xs:w-4/5 4xs:w-4/5  self-end  bg-white 3xs:my-0 4xs:my-0">

                <div className=" w-full 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                  <div className=" w-8">
                    <LogoCardOne />
                  </div>
                  <h2 className="text-2xl xs:text-xl 2xs:text-lg 2xs:mt-4 mx-4 pb-4 2xs:pb-0 3xs:pb-0 4xs:pb-0 bfg text-orange_1 ">
                    زیرەک کردنەوەی خانوو
                  </h2>
                </div>
                <p className="text-xl xs:text-lg text-center 2xs:text-base 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 pt-6 ">
                  زیرەک کردنەوەی خانوو بە مەبەستی زیاد کردنی خۆشگوزەرانی، راحەتی و دڵنیایی نیشتەجێیان ئەکرێ و بە شێوازی زیرەکانە ئەبێتە هۆی کەم کردنەوەی بەکارهێنانی وزەی کارەبا و خەرجی ئەبێت.
                </p>
              </div>
              <div className=' w-2/5 absolute  right-0 bottom-[-70px] z-10 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block'>
                <div className='relative h-52 right-1.5  border-[3px] border-l-0 border-yellow_1 rounded-r-2xl rounded-br-2xl flex justify-center items-center'>
                  <div className='h-11 w-11 right-[-25px] bg-white rounded-lg shadow-2xl p-2 absolute'>
                    <LogoCardTwo />
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <h2 className="z-10 xs:mt-[50px] 2xs:mt-[50px] 3xs:mt-[50px] 4xs:mt-[50px]  bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-center 2xs:self-center 3xs:self-center 4xs:self-center text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm">
              شاری زیرەک
            </h2>
            <div className="shadow-xl p-4 py-8 rounded-xl ">
              <div className="flex 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden" >
                <div className="flex basis-8">
                  <LogoCardTwo />
                </div>
                <h2 className="text-2xl mx-4 pb-4 text-orange_1">
                  شاری زیرەک
                </h2>
              </div>

              <p className="text-xl xs:text-lg 2xs:text-base text-justify 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 ">
                مەبەست لە وەبەرهێنانی شاری زیرەک، پێوەندی تکنولۆژیای ICT و ئامێرە جۆراوجۆرەکان لە سەر تۆڕی ئینترنتی شتومت (IOT) بۆ باشتر کردنەوەی ژیانی شارستانی و خزمەتگوزاری و پێوەندیەکانی خەڵکە.
              </p>
            </div>

            {/* card 3 */}
            <div className=' h-16 w-4/5 flex justify-center items-center pr-15 relative 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex 2xs:flex 3xs:flex 4xs:flex'>
              <RectangelThree />
              <div className='h-10 w-11 bg-white rounded-lg  shadow-2xl p-2 absolute'>
                <LogoCardThree />
              </div>
            </div>
            <h2 className=" text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-center 2xs:self-center 3xs:self-center 4xs:self-center">
              زیرەک کردنەوەی ئیش و کارەکان
            </h2>
            <div className="relative shadow-xl p-4 py-8 rounded-xl 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 ">
              <div className="flex 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                <div className="flex basis-8">
                  <LogoCardThree />
                </div>
                <h2 className="text-2xl mx-4  pb-4 text-orange_1">
                  زیرەک کردنەوەی ئیش و کارەکان
                </h2>
              </div>
              <p className="text-xl xs:text-lg 2xs:text-base text-justify 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 ">
                دیجیتاڵ بوون، دیجیتاڵ کردن و گۆڕانکاری دیجیتاڵ، سێ چەمکی یەکسان لە زیرەک کردنەوەی ئیش و کارن کە کارکردی جیاوازیان هەیە. بە گشتی زیرەک کردنەوەی ئیش و کار بە کۆچی داتا و زانیاریەکان لە ئانالۆگ (سونەتی) بۆ دیجیتاڵ دەست پێ دەکات.

              </p>
            </div>

            {/* card 4 */}
            <div className=' h-16 w-4/5 justify-start   items-center pr-15 relative 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex 2xs:flex 3xs:flex 4xs:flex'>
              <div className='relative left-12 h-16 w-4/5 '>
                <RectangelThree />
              </div>
              <div className='h-10 w-10 bg-white rounded-lg shadow-2xl p-2 absolute'>
                <LogoCardFive />
              </div>
            </div>
            <h2 className=" text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-start 2xs:self-start 3xs:self-start 4xs:self-start">
              بازرگانی، گومرک و ترانزیت
            </h2>
            <div className='flex flex-wrap w-full  justify-end relative'>
              <div className=" relative z-20 shadow-xl p-4 pt-6 py-8 3xs:my-0 4xs:my-0 3xs:py-0 4xs:py-0 2xl:my-8 xl:my-8 lg:my-8 md:my-8 sm:my-8 xs:my-0 2xs:my-0 rounded-xl my-8 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full xs:w-4/5 2xs:w-4/5 3xs:w-4/5 4xs:w-4/5  self-end  bg-white">

                <div className=" w-full 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                  <div className=" w-8">
                    <LogoCardFive />
                  </div>
                  <h2 className=" text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm 2xs:mt-4 mx-4 pb-4 text-orange_1 ">
                    بازرگانی، گومرک و ترانزیت
                  </h2>
                </div>
                <p className="text-xl xs:text-lg 2xs:text-base text-justify 3xs:text-base 4xs:text-base px-12 py-8 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 ">
                  بۆ هەر مەبەستێکی بازرگانی، گومرک و ترانزیت لە ئێرانەوە کۆمپانیای کورد بازرگان خاوەنی ئیجازەی رەسمی لە گومرکی ئێران و ژووری بازرگانی،  ئامادەیە هەموو پێداویستیەکانی بازرگانەکان بە باشتری شێواز جێ بە جێ بکات.
                </p>
              </div>
              <div className=' w-2/5 absolute  right-0 bottom-[-70px] z-10 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block'>
                <div className='relative h-52 right-1.5 border-[3px] border-l-0 border-yellow_1 rounded-r-2xl rounded-br-2xl flex justify-center items-center'>
                  <div className='h-11 w-11 right-[-25px] bg-white rounded-lg  shadow-2xl p-2 absolute'>
                    <LogoCardSix />
                  </div>
                </div>
              </div>
            </div>

            {/* card 5 */}
            <h2 className="z-10 xs:mt-[50px] 2xs:mt-[50px] 3xs:mt-[50px] 4xs:mt-[50px] text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-center 2xs:self-center 3xs:self-center 4xs:self-center">
              موەلیدەی کارەبا بە بێ سووتەمەنی
            </h2>
            <div className="shadow-xl p-4 py-8  rounded-xl ">
              <div className="flex  2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                <div className="flex basis-8 ">
                  <LogoCardSix />
                </div>
                <h2 className="text-2xl mx-4 pb-4 text-orange_1">
                  موەلیدەی کارەبا بە بێ سووتەمەنی
                </h2>
              </div>
              <p className="text-xl xs:text-lg 2xs:text-base text-justify 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8  ">
                موەلیدەکانی کارەبا سووتەنیێکی زۆر ئەسووتێنن.
                ئەم تکنولوژیە لە تایبەتمەندی فیزیایی سووراندنەوە و وزەی دەسپێک کارەبا بەرهەمدێنێت و پێویستی بە سووتەمەنی نیە…
              </p>
            </div>
          </div>
          <div className="flex flex-col  xl:w-5/12 lg:w-5/12 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden  2xs:hidden 3xs:hidden 4xs:hidden ">
            <div className="flex justify-center ">
              <IconCardOne />
            </div>
            <div className="  mt-32 flex justify-center">
              <IconCardTwo />
            </div>
            <div className=" mt-32 flex justify-center">
              <IconCardThree />
            </div>
          </div>
        </div>
      </div>
      <div className=' h-14 w-full justify-center items-center  relative 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex 2xs:flex 3xs:flex 4xs:flex'>
        <RectangelThree />
        <div className='h-10 absolute top-2 bg-white rounded-lg shadow-2xl p-2 '>
          <IconHeadPhone />
        </div>
      </div>








      {/* footer */}
      <footer id="footer" className="bg-gray_1 xs:pt-8 2xs:pt-8 3xs:pt-8 4xs:pt-8  2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-20  ">
        <div className="container mx-auto flex flex-wrap">
          <div className="basis-full">
            <div className="flex items-center pt-6 px-3 2xl:pb-18 xl:pb-16 lg:pb-16 md:pb-16 sm:pb-10 xs:pb-5 2xs:pb-5 3xs:pb-5 pb-5  xs:pt-0 2xs:pt-0 3xs:pt-0 ">
              <div className="xl:basis-12 lg:basis-12 md:basis-8 sm:basis-6 xs:basis-6 2xs:basis-6 3xs:basis-6 4xs:basis-6 basis-6  ">
                <Logo />
              </div>
              <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl 2xs:text-xl 3xs:text-xl text-xl mx-4 py-2 text-orange_1">
                کورد بازرگان کارزان
              </h2>
            </div>
          </div>

          <div className="px-3 pb-3 xl:basis-4/12 lg:basis-4/12 md:basis-fullsm:basis-full ">
            <div className="flex ">
              <IconChat />
              <span className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-lg 3xs:text-lg text-lg mx-4 text-dark_1">
                رێگا کانی پێوەندی :
              </span>
            </div>
            <div className="flex my-5">
              <IconPhone />
              <span className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg xs:text-md 2xs:text-base 3xs:text-base text-base  pt-2 mx-4 text-dark_1 flex">
                <a href="tel:+989355950555" className='decoration-0 h-full w-full text-inherit'>
                  <span className='text-xl'> ٠٥٥٥ ٥٩٥ ٩٣٥ </span>
                  <span className='text-xl'> ٩٨+ </span>
                </a>
              </span>
            </div>
            <div className="flex mt-5 mb-1">
              <IconMessage />
              <a href="mailto:kurdbazergan@gmail.com" className='decoration-0 h-full w-full text-inherit'>
                <span className=" 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg xs:text-md 2xs:text-base 3xs:text-base text-base  mx-4 text-dark_1">
                  kurdbazergan@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div className="px-3 xl:basis-4/12 lg:basis-4/12 md:basis-full sm:basis-full">
            {/* <div className="flex items-center">
              <div className="basis-6">
                <IconAddress />
              </div>

              <h2 className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-lg 3xs:text-lg text-lg mx-4 text-orange_1 xs:pt-2 2xs:pt-2 3xs:pt-2 4xs:pt-2  ">
                آدرس :
              </h2>
            </div> */}
            <div className="flex mt-2 mb-4">
              <div className="basis-14">
                <IconAddress />
              </div>
              <span className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg xs:text-md 2xs:text-base 3xs:text-base text-base  text-dark_1">
                ئێران، سنە، شەقامی حەسەن ئاوا، تالاری نەقش جەهان، قاتی یەکەم.
              </span>
            </div>
          </div>
          <div className="p-3 xl:basis-4/12 lg:basis-4/12 md:basis-full sm:basis-full xs:basis-full 2xs:basis-full basis-full flex xs:justify-center 2xl:justify-center xl:justify-center lg:justify-center  2xs:justify-center 3xs:justify-center justify-center items-center xl:items-center lg:items-center md:items-start sm:items-center flex-col">
            <h2 className="2xl:block xl:block lg:block md:block sm:block xs:hidden 2xs:hidden 3xs:hidden   2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-lg 3xs:text-lg text-lg pb-8 text-dark_1">
              شبکه های اجتماعی :
            </h2>

            <div className="flex flex-wrap  w-full lg:justify-center  md:justify-start sm:justify-start xs:justify-start 2xs:justify-center 3xs:justify-center 4xs:justify-center">
              <div className="mx-1  2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:w-10 xs:h-4 2xs:h-8 3xs:h-8 4xh:h-8 xs:w-4 2xs:w-8 3xs:w-8 4xh:w-8  ">
                <IconTwitter />
              </div>
              <div className="mx-1  2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:w-10 xs:h-4 2xs:h-8 3xs:h-8 4xh:h-8 xs:w-4 2xs:w-8 3xs:w-8 4xh:w-8">
                <a href="https://wa.me/+989355950555/" className='decoration-0 block h-full w-full text-inherit' target='_blank'>
                  <IconWhatsApp />
                </a>
              </div>
              <div className="mx-1  2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:w-10 xs:h-4 2xs:h-8 3xs:h-8 4xh:h-8 xs:w-4 2xs:w-8 3xs:w-8 4xh:w-8">
                <a href="http://t.me/Muhammadako/" className='decoration-0 block h-full w-full text-inherit' target='_blank'>
                  <IconTelegram />
                </a>
              </div>
              {/* <div className="mx-1  2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:w-10 xs:h-4 2xs:h-8 3xs:h-8 4xh:h-8 xs:w-4 2xs:w-8 3xs:w-8 4xh:w-8">
                <IconFaceBook />
              </div>
              <div className="mx-1  2xl:h-12 xl:h-12 lg:h-12 md:h-12 sm:w-10 xs:h-4 2xs:h-8 3xs:h-8 4xh:h-8 xs:w-4 2xs:w-8 3xs:w-8 4xh:w-8˝">
                <IconInstagram />
              </div> */}
            </div>
          </div>
          <div className=' flex items-center py-4 text-center w-full justify-center  text-dark_1 opacity-80'>
            <IconCOpyRight />
            <p className='text-lg xs:text-sm 2xl:text-sm xl:text-sm lg:text-lg md:text-base sm:text-sm 2xs:text-[12px] 3xs:text-[10px] 4xs:text-[8px]  px-1'>
              هەمووی مافەکانی ئەم لاپەڕەیە بۆ کۆمپانیای کورد بازرگان پارێزراوە
            </p>
          </div>
        </div>
      </footer>
    </main >
  )
}
