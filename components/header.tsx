import { headers } from 'next/headers';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Link from 'next/link';
import React from 'react';
import Button from '@mui/material/Button';
import HeaderImg from '@/public/rasm2.png';
import Icon from '@/public/icon1.png';
import Image from 'next/image';
import Rasm4 from '@/public/rasm4.png';
import Rasm5 from '@/public/rasm5.png';
import Rasm6 from '@/public/rasm6.png';

const Index = () => {
    const links = [
        { path: "/", title: "Marketplace" },
        { path: "/rankings", title: "Rankings" },
        { path: "/connectawallet", title: "Connect a wallet" },
    ];

    return (
        <div className="scroll-my-0">
            <header className='flex justify-between p-7 bg-black text-center fixed w-full top-0 z-10'>
                <div className='flex text-pretty gap-5'>
                    <Image className='h-8' src={Icon} alt="Icon" />
                    <h1 className='text-2xl'>NFT Marketplace</h1>
                </div>
                <div className='flex gap-4'>
                    {links.map((item, index) => (
                        <Link href={item.path} key={index} className='text-[18px] text-white mt-3'>
                            {item.title}
                        </Link>
                    ))}
                    <div>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#A259FF', borderRadius: '20px', height: '50px', width: '142px' }}
                            startIcon={<PermIdentityIcon />}
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </header>
            <div className='flex w-[100%] gap-8 justify-center mt-40'>
                <div className="flex w-[40%] flex-col justify-center gap-5">
                    <h1 className="flex flex-col w-[480px] justify-center font-work-sans text-[67px] font-semibold leading-[110%] capitalize">
                        Discover digital art & Collect NFTs
                    </h1>
                    <p className="flex justify-center font-work-sans text-[22px] font-semibold leading-[110%] capitalize">
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                    </p>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#A259FF', borderRadius: '20px', height: '50px', width: '182px' }}
                        startIcon={<PermIdentityIcon />}
                    >
                        Get Started
                    </Button>
                    <div className='flex gap-4 mt-5'>
                        <div className='justify-center'>
                            <h3>240k+ </h3>
                            <p>Total Sale</p>
                        </div>
                        <div>
                            <h3>100k+ </h3>
                            <p>Auctions</p>
                        </div>
                        <div>
                            <h3>240k+ </h3>
                            <p>Artists</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-[40%]">
                    <Image src={HeaderImg} alt="img" />
                </div>
            </div>

            {/* 2-qisim */}
            <div>
                <div className='p-20 pt-12'>
                    <h1 className='text-[30px]'>Trending Collection</h1>
                    <p>Checkout our weekly updated trending collection.</p>
                </div>

                <div className='flex gap-20 justify-center'>
                    <div className='flex flex-col items-center text-center'>
                        <Image src={Rasm4} alt="img" />
                        <p className='pt-4'>Text for Image 1</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <Image src={Rasm5} alt="img" />
                        <p className='pt-4'>Text for Image 2</p>
                    </div>
                    <div className='flex flex-col items-center text-center'>
                        <Image src={Rasm6} alt="img" />
                        <p className='pt-4'>Text for Image 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
