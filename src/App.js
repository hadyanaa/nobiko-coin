/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-distracting-elements */
import './App.css';
import logo from './assets/images/logo-cat.png';
import copy from './assets/images/copy.png';
import logoRev from './assets/images/logo-cat-rev.png';
import { useRef, useState } from 'react';
import sq1 from './assets/images/docs/square_0007_2.png';
import sq2 from './assets/images/docs/square_0006_5.png';
import sq3 from './assets/images/docs/square_0005_9.png';
import sq4 from './assets/images/docs/square_0004_14.png';
import sq5 from './assets/images/docs/square_0003_15.png';
import sq6 from './assets/images/docs/square_0002_16.png';
import sq7 from './assets/images/docs/square_0001_17.png';
import sq8 from './assets/images/docs/square_0000_21.png';
import ln1 from './assets/images/docs/lenskep_0006_4.png';
import ln2 from './assets/images/docs/lenskep_0005_7.png';
import ln3 from './assets/images/docs/lenskep_0004_12-copy.png';
import ln4 from './assets/images/docs/lenskep_0000_22-copy.png';
import ln5 from './assets/images/docs/lenskep_0003_13-copy.png';
import ln6 from './assets/images/docs/lenskep_0001_20.png';
import pr1 from './assets/images/docs/potrait_0004_8.png';
import pr2 from './assets/images/docs/potrait_0007_1.png';
import pr3 from './assets/images/docs/potrait_0006_3.png';
import pr4 from './assets/images/docs/potrait_0005_6.png';
import pr5 from './assets/images/docs/potrait_0000_23-copy.png';
import pr6 from './assets/images/docs/potrait_0003_10.png';
import pr7 from './assets/images/docs/potrait_0002_11.png';
import pr8 from './assets/images/docs/potrait_0001_19.png';
import welcome from './assets/videos/welcome.mp4';
import tokenomics from './assets/videos/tokenomics.mp4';
// import Carousel from './Carousel';
import CarouselPage from './ResponsiveCarousel';

function App() {
   const textRef = useRef(null);
   const [copied, setCopied] = useState(false);
   let CA = '0x00000000000000000000000000000000000000';

    // Fungsi untuk menyalin teks ke clipboard
   const handleCopyClick = () => {
      // Mendapatkan teks dari elemen div
      const textToCopy = CA;

      // Buat elemen textarea sementara untuk menyalin teks
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = textToCopy;
      document.body.appendChild(tempTextarea);

      // Pilih teks di dalam elemen textarea
      tempTextarea.select();
      // Salin teks ke clipboard
      document.execCommand('copy');

      // Hapus elemen textarea sementara
      document.body.removeChild(tempTextarea);

      setCopied(true);
      setTimeout(() => {
         setCopied(false);
      }, 3000);
   }
   return (
      <>
         {/* header */}
         <div className='flex gap-x-8 bg-heading items-center py-6 my-auto'>
            <div className='marquee'>
               <div className='marquee-inner inter-heading font-bold'>
                  <span className='flex flex-row gap-x-6 sm:text-xs md:text-sm lg:text-base xl:text-lg'>
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                  </span>
                  <span className='flex flex-row gap-x-6 sm:text-xs md:text-sm lg:text-base xl:text-lg'>
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <p>NOBIKO COIN</p>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                  </span>
               </div>
            </div>
         </div>
         <div className='flex w-full sm:h-24 md:h-28 lg:h-36 bg-secondary justify-between'>
            <div className='sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 my-auto'>
               <img className='sm:w-12 md:w-16 lg:w-24 xl:w-28 h-auto' src={logo} alt="logo" />
            </div>
            <div className='hidden md:flex flex-row text-2xl lg:text-3xl md:text-lg items-center just-another'>
               <h3 className='btn-header'>TELEGRAM</h3>
               <h3 className='btn-header'>TWITTER X</h3>
               <h3 className='btn-header'>SOLCAN</h3>
               <h3 className='btn-header'>DEXSCREEN</h3>
               <h3 className='btn-header'>RAYDIUM</h3>
            </div>
            <div className='sm:mr-8 md:mr-12 lg:mr-16 xl:mr-24 my-auto'>
               <img className='sm:w-12 md:w-16 lg:w-24 xl:w-28 h-auto' src={logoRev} alt="logo" />
            </div>
         </div>
         {/* section welcome */}
         <div className='bg-primary py-8'>
            <div className='flex flex-col w-[75%] mx-auto justify-center items-center gap-y-8'>
               <h1 className='inter-heading text-4xl font-black text-center text-outline'>WHAT IS NOBIKO COIN</h1>
               <video className='w-full h-auto' width="640" height="360" autoPlay loop muted>
                  <source src={welcome} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
               <p className='just-another -mt-4 text-3xl text-center'>NOBIKO COIN Isn’t Literally Just A NOBIKO COIN:; It’s A Symbol Of Progress, For Futuristic Transactions, A Beacon For Those Who Think Ahead. It’s Clear That The Future Belongs To Those Who Embrace Innovations Like NOBIKO COIN, Transcending Boundaries & Paving A New Era In Finance And Technology.</p>
               <div className='btn inter-heading font-black rounded-lg py-4 px-6'>
                  BUY NOBIKO COIN
               </div>
            </div>
         </div>
         {/* section season */}
         <div className='bg-secondary py-8'>
            <div className='flex flex-col w-[75%] mx-auto justify-center items-center gap-y-8'>
               <h1 className='inter-heading text-4xl font-black text-center text-outline'>THIS TIME IS NOBIKO COIN SEASON</h1>
               <p className='just-another -mt-4 text-3xl text-center'>
               This time is NOBIKO COIN season, a time to celebrate the creativity and uniqueness of cat owners and their furry friends. NOBIKO COIN is not just a trend, but a way of life for some people who love to dress up their cats with clothes or costumes. Whether it is everyday clothes, accessories, hats, glasses, or even traditional outfits, NOBIKO COIN can show the personality, style, or humor of the cat owners and the cats themselves. NOBIKO COIN can also be a fun way to join various events, such as Halloween, Christmas, Easter, or birthday parties. NOBIKO COIN can bring joy, happiness, and cuteness to many people who see them.
               </p>
            </div>         
         </div>
         {/* slideshow */}
         <div className='flex flex-row w-full bg-primary py-4'>
            {/* <Carousel /> */}
            <CarouselPage />
         </div>
         {/* copy tag */}
         <div className='flex bg-secondary items-center justify-center py-8'>
            <div className='flex md:flex-row xs:flex-col w-[75%] mx-auto justify-center items-center p-4 gap-x-4 bg-heading'>
               <div ref={textRef} className="inter-heading font-bold xs:font-normal xs:text-xs md:text-sm lg:text-lg">{copied ? 'Copied!' : 'CA:' + CA}</div>
               {!copied && <button className='w-6 rounded' onClick={handleCopyClick}>
                  <img src={copy} alt="copy" />
               </button>}
            </div>
         </div>
         {/* tokenomics */}
         <div className='bg-primary py-8'>
            <div className='flex flex-col w-[75%] mx-auto justify-center items-center gap-y-8'>
               <h1 className='inter-heading text-4xl text-center font-black text-outline'>TOKENOMICS NOBIKO COIN</h1>
               <h4 className='inter-heading font-extrabold text-xl text-center'>The NOBIKO COIN smart contract has 0 tax on all buys and sells. The total supply of $SOL is 1,000,000,000. Trust in $SOL.</h4>
               <div className='btn inter-heading font-black rounded-lg py-4 px-6'>
                  BUY NOBIKO COIN
               </div>
               <p className='just-another -mt-4 text-3xl text-center'>
               NOBIKO COIN is a new and innovative project that combines the love for cats and clothes with the power of blockchain and smart contracts. NOBIKO COIN is a token that runs on the Ethereum network, with a total supply of 1 billion $ETH. NOBIKO COIN has a unique feature that makes it different from other tokens: it has 0 tax on all transactions. This means that there is no fee or deduction when you buy or sell NOBIKO COIN, making it more attractive and profitable for users. NOBIKO COIN is a token that you can trust, as it is backed by the security and transparency of the Ethereum network.
               </p>
               <video className='w-full h-auto' width="640" height="360" autoPlay loop muted>
                  <source src={tokenomics} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>
            </div>
         </div>
         {/* join community */}
         <div className='bg-secondary py-8'>
            <div className='flex flex-col w-[75%] mx-auto justify-center items-center gap-y-8'>
               <h1 className='inter-heading text-4xl text-center font-black text-outline'>JOIN WITH NOBIKO COIN COMMUNITY</h1>
               <p className='just-another -mt-4 text-3xl text-center'>
               If you love cats and clothes, you should join the NOBIKO COIN Community! It is a group where you can share your cat fashion with other cat lovers. You can post pictures, get tips, and find patterns. You can also join events, contests, and giveaways. The NOBIKO COIN Community is a family of cat lovers who have fun and learn from each other. Join the NOBIKO COIN Community today and unleash your cat’s inner style!
               </p>
               <div className='w-full bg-heading'>
                  <div className='flex md:flex-row xs:flex-col xs:text-sm md:text-base lg:text-lg xl:text-xl font-semibold xs:font-normal items-center justify-center inter-heading'>
                     <h3 className='btn-community'>TELEGRAM</h3>
                     <h3 className='btn-community'>TWITTER X</h3>
                     <h3 className='btn-community'>SOLCAN</h3>
                     <h3 className='btn-community'>DEXSCREEN</h3>
                     <h3 className='btn-community'>RAYDIUM</h3>
                  </div>
               </div>
            </div>
         </div>
         {/* docs */}
         <div className='flex flex-col bg-primary py-8 gap-y-3'>
            <div className='w-[75%] mx-auto grid grid-cols-4 gap-3'>
               <img src={sq1} alt="grid 1" />
               <img src={sq2} alt="grid 2" />
               <img src={sq3} alt="grid 3" />
               <img src={sq4} alt="grid 4" />
               <img src={sq5} alt="grid 5" />
               <img src={sq6} alt="grid 6" />
               <img src={sq7} alt="grid 7" />
               <img src={sq8} alt="grid 8" />
            </div>
            <div className='w-[75%] mx-auto grid grid-cols-3 gap-3'>
               <img src={ln1} alt="grid lenskep 1" />
               <img src={ln2} alt="grid lenskep 2" />
               <img src={ln3} alt="grid lenskep 3" />
               <img src={ln4} alt="grid lenskep 4" />
               <img src={ln5} alt="grid lenskep 5" />
               <img src={ln6} alt="grid lenskep 6" />  
            </div>
            <div className='w-[75%] mx-auto grid grid-cols-4 gap-3'>
               <img src={pr1} alt="grid portrait 1" />
               <img src={pr2} alt="grid portrait 2" />
               <img src={pr3} alt="grid portrait 3" />
               <img src={pr4} alt="grid portrait 4" />
               <img src={pr5} alt="grid portrait 5" />
               <img src={pr6} alt="grid portrait 6" />
               <img src={pr7} alt="grid portrait 7" />
               <img src={pr8} alt="grid portrait 8" />
            </div>
         </div>
         {/* footer */}
         <div className='flex gap-x-8 w-full bg-heading items-center py-6 my-auto'>
            <div className='marquee'>
               <div className='marquee-inner inter-heading font-bold'>
                  <span className='flex flex-row gap-x-6'>
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                  </span>
                  <span className='flex flex-row gap-x-6'>
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                     <h4>NOBIKO COIN</h4>
                     <img className='w-8 h-8' src={logoRev} alt="logo reversed" />
                  </span>
               </div>
            </div>
         </div>
         <div className='flex w-full py-4 bg-secondary justify-between'>
            <div className='sm:ml-8 md:ml-12 lg:ml-16 xl:ml-24 my-auto'>
               <img className='sm:w-12 md:w-16 lg:w-24 xl:w-28 h-auto' src={logo} alt="logo" />
            </div>
            <div className='flex flex-row sm:text-xs md:text-base lg:text-lg xl:text-2xl gap-x-8 items-center just-another'>
               Copyright&#169;2024NOBIKO COIN | support@nobikocoin.vip
            </div>
            <div className='sm:mr-8 md:mr-12 lg:mr-16 xl:mr-24 my-auto'>
               <img className='sm:w-12 md:w-16 lg:w-24 xl:w-28 h-auto' src={logoRev} alt="logo" />
            </div>
         </div>
      </>
   );
}

export default App;
