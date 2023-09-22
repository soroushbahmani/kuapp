"use client";

import ArrowBottom from "@/svg/ArrowBottom";
import IconAddress from "@/svg/IconAddress";
import IconCardOne from "@/svg/IconCardOne";
import IconCardThree from "@/svg/IconCardThree";
import IconCardTwo from "@/svg/IconCardTwo";
import IconChat from "@/svg/IconChat";
import IconFaceBook from "@/svg/IconFAceBook";
import IconInstagram from "@/svg/IconInstagram";
import IconMessage from "@/svg/IconMessage";
import IconPhone from "@/svg/IconPhone";
import IconTelegram from "@/svg/IconTelegram";
import IconTwitter from "@/svg/IconTwitter";
import IconWhatsApp from "@/svg/IconWhatsApp";
import Language from "@/svg/Language";
import Logo from "@/svg/Logo";
import LogoCardFive from "@/svg/LogoCardFive";
import LogoCardFour from "@/svg/LogoCardFour";
import LogoCardOne from "@/svg/LogoCardOne";
import LogoCardSix from "@/svg/LogoCardSix";
import LogoCardThree from "@/svg/LogoCardThree";
import LogoCardTwo from "@/svg/LogoCardTwo";
import Link from "next/link";

import { useState } from "react";


export default function Home() {

  const [dropdown, set_dropdwon] = useState(false)
  const [url, set_url] = useState('home')



  // console.log(params.lang);

  // scroll 

  // const [scroll, set_scroll] = useState(0)

  // useEffect(() => {

  //   window.onscroll = () => {
  //     set_scroll(+window.scrollY)
  //   }

  // }, [])
  // useEffect(() => {
  //   var body = document.body,
  //     html = document.documentElement;
  //   console.log('====================================');
  //   console.log(scroll);
  //   console.log('=======screem =============================', Math.max(
  //     body.offsetHeight));

  // }, [scroll])


  const dropdownhnadler = () => {
    set_dropdwon(!dropdown)
  }




  return (

    <main className='' dir="rtl" >

      <div id="home">  </div>
      {/* header */}
      <header className="shadow-md select-none sticky top-0 z-10 bg-white">
        <div className="container mx-auto flex justify-between h-full">


          <div className="flex ">
            {
              dropdown == true ?
                <div className="h-screen w-screen absolute top-0 left-0" onClick={dropdownhnadler} ></div>
                : <></>

            }
            <div className={`2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden cursor-pointer text-orange_1 hover:text-orange-400 hover:border-orange-400 mx-6 flex items-center h-full   ${url == 'home' ? 'border-b-4 border-orange_1' : ''}`} onClick={() => set_url('home')}>

              <a className="text-xl h-full  flex justify-center items-center" href="#home" >خانه</a>
            </div>

            <div className={`2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden cursor-pointer text-orange_1 hover:text-orange-400 mx-6 flex items-center h-full ${url == 'contact' ? 'border-b-4 border-orange_1' : ''}`} onClick={() => set_url('contact')}>

              <a className="text-xl h-full flex justify-center items-center  " href="#footer" > تماس با ما</a>
            </div>
            <div className="mx-6 flex py-3 items-center h-full text-orange_1 hover:border-orange-400 hover:text-orange-400 cursor-pointer relative" onClick={dropdownhnadler}>
              <div className="h-6">
                <Language />
              </div>
              <span className=" px-2 text-xl">
                فارسی
              </span>
              <div className="h-2">
                <ArrowBottom />
              </div>


              <div className={` bg-white shadow-lg absolute  2xl:top-16 xl:top-16 lg:top-16 md:top-12 sm:top-14 xs:top-12 right-0 w-20 flex-col items-center ${dropdown == true ? 'flex' : 'hidden'} `}>
                <div className="  hover:bg-orange-100  w-full text-center">
                  <Link href={'/en'} className="block h-full w-full p-2">English</Link>
                </div>
                <div className="border-y hover:bg-orange-100  border-dashed text-center w-full disabled:block">
                  <Link href='/ku' className="block h-full w-full p-2">کوردی</Link>
                </div>
                <div className=" w-full hover:bg-orange-100 bg-orange-100 disabled:block  text-center">
                  <Link href='/fa' className="block h-full w-full p-2">فارسی</Link>
                </div>
              </div>
            </div>












          </div>

          <div className="flex items-center py-5 h-full ">

            <h1 className="px-2 2xl:text-4xl xl:text-3xl lg:text-5xl md:text-2xl sm:text-2xl xs:text-2xl text-orange_1">
              کواپ
            </h1>
            <div className="2xl:h-12 xl:h-9 lg:h-9 md:h8 sm:h-5 xs:h-5">
              <Logo />
            </div>


          </div>
        </div>
      </header>

      {/* content */}



      <div className="container mx-auto " >


        <h1 className="text-4xl pt-14 pb-7 mb-6 text-orange_1 border-b-2  2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden">

          شرکت کرد بازرگان کارزان

        </h1>

        {/* cards decktop */}
        <div className="flex flex-wrap flex-row">


          <div className="flex flex-col xl:w-7/12 lg:w-7/12 md:w-full   ">

            {/* card 1 */}
            <div className="shadow-xl p-4 py-8 rounded-xl my-8 ">
              <div className="flex">
                <div className="flex basis-8">
                  <LogoCardOne />
                </div>
                <h2 className="text-2xl mx-4 pb-4 text-orange_1">
                  هوشمند سازی ساختمان
                </h2>
              </div>

              <p className="text-xl px-12 leading-8">
                هوشمندسازی خانه با هدف افزایش آسایش، راحتی و
                امنیت ساکنین انجام می شود و به شکل هوشمندانه ای
                موجب کاهش مصرف انرژی برق و به طبع آن کاهش
                مبلغ قبض برق خواهد شد.
              </p>
            </div>
            {/* card 2 */}
            <div className="shadow-xl p-4 py-8 rounded-xl my-8">
              <div className="flex">
                <div className="flex basis-8">
                  <LogoCardTwo />
                </div>
                <h2 className="text-2xl mx-4  pb-4 text-orange_1">
                  شهر هوشمند
                </h2>
              </div>

              <p className="text-xl px-12 leading-8">
                هدف از ایجاد شهر هوشمند، ادغام فناوری اطلاعات و
                ارتباطات (ICT) و دستگاه های فیزیکی مختلف متصل
                به شبکه اینترنت اشیا برای بهینه سازی فرآیندهای شهری
                و ارائه خدمات و ارتباط بهینه با شهروندان است.
              </p>
            </div>

            {/* card 3 */}
            <div className="shadow-xl p-4 py-8 rounded-xl my-8">
              <div className="flex">
                <div className="flex basis-8">
                  <LogoCardThree />
                </div>
                <h2 className="text-2xl mx-4  pb-4 text-orange_1">
                  هوشمندسازی بیزینس های مختلف
                </h2>
              </div>

              <p className="text-xl px-12 leading-8">
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
            <div className="shadow-xl p-4 py-8 rounded-xl my-8">
              <div className="flex">
                <div className="flex basis-8">
                  <LogoCardFive />
                </div>
                <h2 className="text-2xl mx-4 pb-4 text-orange_1">
                  خدمات بازرگانی، گمرک و ترانزیت از ایران
                </h2>
              </div>

              <p className="text-xl px-12 leading-8">
                امور بازرگانی واردات در شرکت کرد بازرگان بدون واسطه انجام می‌شود
                و مشاوران ما لحظه به لحظه با شما همراه خواهند بود.
                با توجه به جهت گیری واردات کالا به سمت حمایت از تولید و واردات
                کالاهای اساسی، واردات کالا یک مبحث تخصصی شده و فعالیت
                در این حوزه نیازمند تجربه، تخصص و تسلط بر قوانین تجارت بین­‌الملل
                در همه امور واردات است.


              </p>
            </div>

            {/* card 5 */}
            <div className="shadow-xl p-4 py-8 rounded-xl my-8">
              <div className="flex">
                <div className="flex basis-8">
                  <LogoCardSix />
                </div>
                <h2 className="text-2xl mx-4 pb-4 text-orange_1">
                  تولید ژنراتور برق بدون سوخت                </h2>
              </div>

              <p className="text-xl px-12 leading-8">
                درحال حاضر نیروگاه های تولید برق مقادیر هنگفتی از انرژی مصرفی
                را در قالب حرارت تلف می کنند
                اکنون این فناوری نوین صنعتی جدید است که با استفاده از انرژی
                اولیه و چرخدنده ها برق تولید می کند و عملا سوختی مصرف نمی کند
              </p>
            </div>
          </div>


          <div className="flex flex-col   xl:w-5/12 lg:w-5/12 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden ">
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



      {/* footer */}
      <footer id="footer" className="bg-gray_1 py-16 mt-28">
        <div className="container mx-auto flex flex-wrap">

          <div className="basis-full">
            <div className="flex items-center pb-3 px-3">
              <div className="xl:basis-12 lg:basis-12 md:basis-8 sm:basis-6 basis-8  ">
                <Logo />
              </div>

              <h2 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl mx-4 pb-2 text-orange_1">
                کرد بازرگان کارزان
              </h2>
            </div>

          </div>

          <div className="p-3  xl:basis-4/12 lg:basis-4/12 md:basis-fullsm:basis-full ">




            <div className="flex ">
              <IconChat />
              <span className="text-2xl mx-4 text-dark_1">
                راه های ارتباطی :
              </span>
            </div>

            <div className="flex my-5">
              <IconPhone />
              <span className="text-lg mx-4 text-dark_1">
                +98 935 595 0555
              </span>
            </div>

            <div className="flex my-5">
              <IconMessage />
              <span className="text-lg mx-4 text-dark_1">
                kurdbazergan@gmail.com
              </span>
            </div>

          </div>

          <div className="p-3 xl:basis-4/12 lg:basis-4/12 md:basis-full sm:basis-full">

            <div className="flex items-center">
              <div className="basis-6">
                <IconAddress />
              </div>

              <h2 className="text-2xl mx-4 text-orange_1">
                آدرس :
              </h2>
            </div>



            <div className="flex my-5">

              <span className="text-lg mx-4 text-dark_1">
                استان بخرب ، شهر بئربئ، خیابان تتهن ، کوچه بئذذ ،پلاک 10
              </span>
            </div>

            <div className="flex my-5">
              <span className="text-lg mx-1 text-orange_1">کد پستی  : </span>


              <span className="text-lg mx-1 text-dark_1">
                4196526
              </span>
            </div>
          </div>
          <div className="p-3 xl:basis-4/12 lg:basis-4/12 md:basis-full sm:basis-full flex  justify-center items-start xl:items-center lg:items-center md:items-center sm:items-start flex-col">

            <h2 className="text-3xl  pb-8 text-dark_1">
              شبکه های اجتماعی : :
            </h2>

            <div className="flex ">

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
        </div>
      </footer>



    </main >
  )
}
