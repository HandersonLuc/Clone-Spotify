import { Foooter } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import {Home as ChevronLeft, ChevronRight, Play} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-4'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-3'>
            <a href="#" className='bg-white/5 rounded-md flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors'> 
              <Image src="/avenged_sevenfold.jpg"  width={104} height={104} alt="capa de album"/>
              <strong>Avenged Sevenfold</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded-md flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors'> 
              <Image src="/deep_house.jpeg"  width={104} height={104} alt="capa de album"/>
              <strong>Deep House Chill 2025</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded-md flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors'> 
              <Image src="/from_zero.jpeg" width={104} height={104}  alt="capa de album"/>
              <strong>From Zero</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded-md flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors'> 
              <Image src="/avenged_sevenfold.jpg" width= {104} height={104} alt="capa de album"/>
              <strong>Avenged Sevenfold</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded-md flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors'> 
              <Image src="/avenged_sevenfold.jpg"  width={104} height={104} alt="capa de album"/>
              <strong>Avenged Senvenfold</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className='bg-white/5 rounded-md flex items-center gap-4 overflow-hidden group hover:bg-white/10 transition-colors'> 
              <Image src="/avenged_sevenfold.jpg"  width={104} height={104} alt="capa de album"/>
              <strong>Avenged Senvenfold</strong>
              <button className='invisible group-hover:visible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-7'>Made for you</h2>

          <div className='grid grid-cols-8 gap-4 mt-2'>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/avenged_sevenfold.jpg" className='w-full'  width={100} height={100} alt="capa de album"/>
            <strong className='font-semibold'>Daily Mix</strong>
            <span className='text-sm text-zinc-500'>Avenged Sevenfold</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/avenged_sevenfold.jpg" className='w-full'  width={100} height={100} alt="capa de album"/>
            <strong className='font-semibold'>Daily Mix</strong>
            <span className='text-sm text-zinc-500'>Avenged Sevenfold</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/avenged_sevenfold.jpg" className='w-full'  width={100} height={100} alt="capa de album"/>
            <strong className='font-semibold'>Daily Mix</strong>
            <span className='text-sm text-zinc-500'>Avenged Sevenfold</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/avenged_sevenfold.jpg" className='w-full'  width={100} height={100} alt="capa de album"/>
            <strong className='font-semibold'>Daily Mix</strong>
            <span className='text-sm text-zinc-500'>Avenged Sevenfold</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
            <Image src="/avenged_sevenfold.jpg" className='w-full'  width={100} height={100} alt="capa de album"/>
            <strong className='font-semibold'>Daily Mix</strong>
            <span className='text-sm text-zinc-500'>Avenged Sevenfold</span>
            </a>
          </div>
        </main>
      </div>
      <Foooter/>
    </div>
  );
}
