"use client";
import '../globals.css'
import localFont from 'next/font/local';


const myFont = localFont({ src: '../../font/iransansdn.ttf' })
import ArrowBottom from "@/svg/ArrowBottom";
import IconAddress from "@/svg/IconAddress";
import IconCardOne from "@/svg/IconCardOne";
import IconCardThree from "@/svg/IconCardThree";
import IconCardTwo from "@/svg/IconCardTwo";
import IconChat from "@/svg/IconChat";
import IconInstagram from "@/svg/IconInstagram";
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
import IconFaceBook from '@/svg/IconFaceBook';


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
        <div className="container   mx-auto flex justify-between h-full">
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



            <div className="mx-6 flex py-3 items-center h-full text-orange_1 hover:border-orange-400 hover:text-orange-400 cursor-pointer relative" onClick={dropdownhnadler}>
              <div className="h-6">
                <Language />
              </div>
              <span className=" px-2 text-xl xs:text-lg 2xs:text-lg 3xs:text-lg 4xs:text-base">
                کوردی
              </span>
              <div className="h-2">
                <ArrowBottom />
              </div>

              <div className={` bg-white shadow-lg absolute  2xl:top-16 xl:top-16 lg:top-16 md:top-12 sm:top-14 xs:top-12 2xs:top-12 3xs:top-12 4xs:top-12 top-12 right-0 w-20 flex-col items-center ${dropdown == true ? 'flex' : 'hidden'} `}>
                <div className="  hover:bg-orange-100  w-full text-center">
                  <Link href={'/en'} className="block h-full w-full p-2">English</Link>
                </div>
                <div className="border-y hover:bg-orange-100 bg-orange-100 border-dashed text-center w-full disabled:block">
                  <Link href='/ku' className="block h-full w-full p-2">کوردی</Link>
                </div>
                <div className=" w-full hover:bg-orange-100  disabled:block  text-center">
                  <Link href='/fa' className="block h-full w-full p-2">فارسی</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center py-5 xs:py-3 2xs:py-3 3xs:py-3 4xs:py-3 h-full ">
            <h1 className="px-2 2xl:text-4xl xl:text-3xl lg:text-5xl md:text-2xl sm:text-2xl xs:text-2xl 2xs:text-xl 3xs:text-lg 4xs:text-base text-orange_1">
              کواپ
            </h1>
            <div className="2xl:h-12 xl:h-9 lg:h-9 md:h8 sm:h-5 xs:h-5 2xs:h-6 3xs:h-5 4xs:h-5">
              <Logo />
            </div>


          </div>
        </div>
      </header>





      {/* content */}

      <div className="container xs:px-3 2xs:px-3 3xs:px-3 mx-auto " >
        <h1 className="text-4xl pt-14 pb-7 mb-6 text-orange_1 border-b-2  2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
          شرکت کرد بازرگان کارزان
        </h1>

        {/* cards decktop */}
        <div className="flex flex-wrap flex-row">
          <div className="flex flex-col xl:w-7/12 lg:w-7/12 md:w-full  xs:items-end 2xs:items-end 3xs:items-end 4xs:items-end ">
            {/* card 1 */}
            <div className='relative 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block w-3/5'>
              <RectangelOne />
              <div className='h-11 rounded-lg bg-white w-11 shadow-2xl p-2 4xs:top-2 top-4 left-1/4 absolute'>
                <LogoCardOne />
              </div>
            </div>
            <h2 className="text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-start 2xs:self-start 3xs:self-start 4xs:self-start">
              هوشمند سازی ساختمان
            </h2>
            <div className='flex flex-wrap w-full  justify-end relative'>
              <div className=" relative z-20 shadow-2xl p-4 3xs:pt-0 4xs:pt-0 pt-6 py-8 2xl:my-8 xl:my-8 lg:my-8 md:my-8 sm:my-8 xs:my-0 2xs:my-0 rounded-xl my-8 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full xs:w-4/5 2xs:w-4/5 3xs:w-4/5 4xs:w-4/5  self-end  bg-slate-50">

                <div className=" w-full 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                  <div className=" w-8">
                    <LogoCardOne />
                  </div>
                  <h2 className="text-2xl xs:text-xl 2xs:text-lg 2xs:mt-4 mx-4 pb-4 2xs:pb-0 3xs:pb-0 4xs:pb-0 bfg text-orange_1 ">
                    هوشمند سازی ساختمان
                  </h2>
                </div>
                <p className="text-xl xs:text-lg 2xs:text-base 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 pt-6 ">
                  هوشمندسازی خانه با هدف افزایش آسایش، راحتی و
                  امنیت ساکنین انجام می شود و به شکل هوشمندانه ای
                  موجب کاهش مصرف انرژی برق و به طبع آن کاهش
                  مبلغ قبض برق خواهد شد.
                </p>
              </div>
              <div className=' w-2/5 absolute  right-0 bottom-[-70px] z-10 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block'>
                <div className='relative h-52 border-[3px] border-l-0 border-yellow_1 rounded-r-2xl rounded-br-2xl flex justify-center items-center'>
                  <div className='h-11 w-11 right-[-25px] bg-white rounded-lg  shadow-2xl p-2 absolute'>
                    <LogoCardTwo />
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <h2 className="z-10 xs:mt-[50px] 2xs:mt-[50px] 3xs:mt-[50px] 4xs:mt-[50px]  bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-center 2xs:self-center 3xs:self-center 4xs:self-center text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm">
              شهر هوشمند
            </h2>
            <div className="shadow-xl p-4 py-8 rounded-xl ">
              <div className="flex 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden" >
                <div className="flex basis-8">
                  <LogoCardTwo />
                </div>
                <h2 className="text-2xl mx-4  pb-4 text-orange_1">
                  شهر هوشمند
                </h2>
              </div>

              <p className="text-xl xs:text-lg 2xs:text-base 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 ">
                هدف از ایجاد شهر هوشمند، ادغام فناوری اطلاعات و
                ارتباطات (ICT) و دستگاه های فیزیکی مختلف متصل
                به شبکه اینترنت اشیا برای بهینه سازی فرآیندهای شهری
                و ارائه خدمات و ارتباط بهینه با شهروندان است.
              </p>
            </div>

            {/* card 3 */}
            <div className=' h-16 w-4/5 flex justify-center items-center pr-15 relative 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex 2xs:flex 3xs:flex 4xs:flex'>
              <RectangelThree />
              <div className='h-10 bg-white rounded-lg  shadow-2xl p-2 absolute'>
                <LogoCardThree />
              </div>
            </div>
            <h2 className=" text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-center 2xs:self-center 3xs:self-center 4xs:self-center">
              هوشمند سازی ساختمان
            </h2>
            <div className="relative shadow-xl p-4 py-8 rounded-xl ">
              <div className="flex 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                <div className="flex basis-8">
                  <LogoCardThree />
                </div>
                <h2 className="text-2xl mx-4  pb-4 text-orange_1">
                  هوشمندسازی بیزینس های مختلف
                </h2>
              </div>
              <p className="text-xl xs:text-lg 2xs:text-base 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 ">
                دیجیتالی ‌شدن، دیجیتال‌سازی و تحول دیجیتال، سه مفهوم مشابه در
                هوشمند سازی کسب‌ و کار هستند که کارکردهای متفاوتی دارند.
                در دیجیتالی شدن، اطلاعات از محیط آنالوگ به محیط دیجیتال
                مهاجرت می‌کنند. استفاده از داده‌های دیجیتالی نسبت به استفاده از داده‌ها
                به روش‌های سنتی، کارآمدتر است. دیجیتال‌سازی با الکترونیکی کردن تفاوت دارد
                . منظور از محیط دیجیتال، تلفیقی از محیط‌های آنلاین و آفلاین است
                که هم برای کارمندان و هم برای مشتریان اهمیت دارد.

              </p>
            </div>

            {/* card 4 */}
            <div className=' h-16 w-4/5 justify-start   items-center pr-15 relative 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:flex 2xs:flex 3xs:flex 4xs:flex'>
              <div className='relative left-12 h-16 w-4/5 '>
                <RectangelThree />
              </div>
              <div className='h-10 bg-white rounded-lg  shadow-2xl p-2 absolute'>
                <LogoCardFive />
              </div>
            </div>
            <h2 className=" text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-start 2xs:self-start 3xs:self-start 4xs:self-start">
              خدمات بازرگانی، گمرک و ترانزیت از ایران
            </h2>
            <div className='flex flex-wrap w-full  justify-end relative'>
              <div className=" relative z-20 shadow-2xl p-4 pt-6 py-8 3xs:my-0 4xs:my-0 3xs:py-0 4xs:py-0 2xl:my-8 xl:my-8 lg:my-8 md:my-8 sm:my-8 xs:my-0 2xs:my-0 rounded-xl my-8 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full xs:w-4/5 2xs:w-4/5 3xs:w-4/5 4xs:w-4/5  self-end  bg-slate-50">

                <div className=" w-full 2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                  <div className=" w-8">
                    <Logo />
                  </div>
                  <h2 className=" text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm 2xs:mt-4 mx-4 pb-4 text-orange_1 ">
                    خدمات بازرگانی، گمرک و ترانزیت از ایران
                  </h2>
                </div>
                <p className="text-xl xs:text-lg 2xs:text-base 3xs:text-base 4xs:text-base px-12 py-8 2xs:px-4 3xs:px-3 4xs:px-2 leading-8 ">
                  امور بازرگانی واردات در شرکت کرد بازرگان بدون واسطه انجام می‌شود
                  و مشاوران ما لحظه به لحظه با شما همراه خواهند بود.
                  با توجه به جهت گیری واردات کالا به سمت حمایت از تولید و واردات
                  کالاهای اساسی، واردات کالا یک مبحث تخصصی شده و فعالیت
                  در این حوزه نیازمند تجربه، تخصص و تسلط بر قوانین تجارت بین­‌الملل
                  در همه امور واردات است.
                </p>
              </div>
              <div className=' w-2/5 absolute  right-0 bottom-[-70px] z-10 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block'>
                <div className='relative h-52 border-[3px] border-l-0 border-yellow_1 rounded-r-2xl rounded-br-2xl flex justify-center items-center'>
                  <div className='h-11 w-11 right-[-25px] bg-white rounded-lg  shadow-2xl p-2 absolute'>
                    <LogoCardSix />
                  </div>
                </div>
              </div>
            </div>

            {/* card 5 */}
            <h2 className="z-10 xs:mt-[50px] 2xs:mt-[50px] 3xs:mt-[50px] 4xs:mt-[50px] text-2xl xs:text-xl 2xs:text-lg 3xs:text-md 4xs:text-sm bg-orange_1 text-white w-fit p-1 px-3 rounded-2xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block 2xs:block 3xs:block 4xs:block xs:self-center 2xs:self-center 3xs:self-center 4xs:self-center">
              تولید ژنراتور برق بدون سوخت
            </h2>
            <div className="shadow-xl p-4 py-8 rounded-xl ">
              <div className="flex  2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden 2xs:hidden 3xs:hidden 4xs:hidden">
                <div className="flex basis-8 ">
                  <LogoCardSix />
                </div>
                <h2 className="text-2xl mx-4 pb-4 text-orange_1">
                  تولید ژنراتور برق بدون سوخت                </h2>
              </div>
              <p className="text-xl xs:text-lg 2xs:text-base 3xs:text-base 4xs:text-base px-12 2xs:px-4 3xs:px-3 4xs:px-2 leading-8  ">
                درحال حاضر نیروگاه های تولید برق مقادیر هنگفتی از انرژی مصرفی
                را در قالب حرارت تلف می کنند
                اکنون این فناوری نوین صنعتی جدید است که با استفاده از انرژی
                اولیه و چرخدنده ها برق تولید می کند و عملا سوختی مصرف نمی کند
              </p>
            </div>
          </div>
          <div className="flex flex-col   xl:w-5/12 lg:w-5/12 2xl:block xl:block lg:block md:block sm:hidden xs:hidden  2xs:hidden 3xs:hidden 4xs:hidden ">
            <div className="   flex justify-center ">
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
      <footer id="footer" className="bg-gray_1 xs:pt-8 2xs:pt-8 3xs:pt-8 4xs:pt-8 ">
        <div className="container mx-auto flex flex-wrap">
          <div className="basis-full">
            <div className="flex items-center pt-6 px-3 2xl:pb-18 xl:pb-16 lg:pb-16 md:pb-16 sm:pb-10 xs:pb-5 2xs:pb-5 3xs:pb-5 pb-5  xs:pt-0 2xs:pt-0 3xs:pt-0 ">
              <div className="xl:basis-12 lg:basis-12 md:basis-8 sm:basis-6 xs:basis-6 2xs:basis-6 3xs:basis-6 4xs:basis-6 basis-6  ">
                <Logo />
              </div>
              <h2 className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl 2xs:text-xl 3xs:text-xl text-xl mx-4 py-2 text-orange_1">
                کرد بازرگان کارزان
              </h2>
            </div>
          </div>

          <div className="px-3 pb-3 xl:basis-4/12 lg:basis-4/12 md:basis-fullsm:basis-full ">
            <div className="flex ">
              <IconChat />
              <span className="2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-lg 3xs:text-lg text-lg mx-4 text-dark_1">
                راه های ارتباطی :
              </span>
            </div>
            <div className="flex my-5">
              <IconPhone />
              <span className="2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg xs:text-md 2xs:text-base 3xs:text-base text-base pt-2 mx-4 text-dark_1">
                +98 935 595 0555
              </span>
            </div>
            <div className="flex mt-5 mb-1">
              <IconMessage />
              <span className=" 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg xs:text-md 2xs:text-base 3xs:text-base text-base  mx-4 text-dark_1">
                kurdbazergan@gmail.com
              </span>
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
                استان بخرب ، شهر بئربئ، خیابان تتهن ، کوچه بئذذ ،پلاک 10
              </span>
            </div>
          </div>
          <div className="p-3 xl:basis-4/12 lg:basis-4/12 md:basis-full sm:basis-full xs:basis-full 2xs:basis-full basis-full flex xs:justify-center 2xs:justify-center 3xs:justify-center  justify-center items-center xl:items-center lg:items-center md:items-center sm:items-center flex-col">
            <h2 className="2xl:block xl:block lg:block md:block sm:block xs:hidden 2xs:hidden 3xs:hidden   2xl:text-3xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl xs:text-lg 2xs:text-lg 3xs:text-lg text-lg pb-8 text-dark_1">
              شبکه های اجتماعی :
            </h2>

            <div className="flex flex-wrap justify-center w-full">
              <div className="mx-1">
                <IconTwitter />
              </div>
              <div className="mx-1">
                <IconWhatsApp />
              </div>
              <div className="mx-1">
                <IconTelegram />
              </div>
              <div className="mx-1">
                <IconFaceBook />
              </div>
              <div className="mx-1">
                <IconInstagram />
              </div>
            </div>
          </div>
          <div className=' flex items-center py-4 text-center w-full justify-center  text-dark_1'>
            <IconCOpyRight />
            <p className='text-lg xs:text-sm 2xs:text-sm 3xs:text-sm 4xs:text-sm  px-2'>
              تمامی حقوق کپی رایت برای وب سایت کرد بازرگان محفوظ است
            </p>
          </div>
        </div>
      </footer>
    </main >
  )
}
