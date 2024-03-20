import React from 'react'
import { images } from '../../../../constants/images';
import Button from '../../../../components/Ul/Button';
import { loadState } from '../../../../lib/storage';
import { ForYou } from '../../../Home/components/ForYouCards/ForYou';
import { useGetForyou } from '../../../Home/Service/Query/useGetForyou';
import { FaceBook } from '../../../../assets/icons/FaceBook';
import { Link } from 'react-router-dom';
import { Pint } from '../../../../assets/icons/Pint';
import { Basketbool } from '../../../../assets/icons/Basketbool';
import { Telegram } from '../../../../assets/icons/Telegram';
import { Announcements } from '../../../../components/Announcements';
import { nanoid } from 'nanoid';
import { Close } from '../../../../assets/icons/Close';

export const UserProfile = () => {
    const { data, isLoading, error } = useGetForyou()
    const user = loadState("userInfo")
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Selected file:', file);
        }
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };
    return (
        <section className="mt-[39px]">
            <div className="container flex flex-col">
                <div className=" bg-white rounded-lg py-4 px-6 flex flex-col">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="mr-6">
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={handleFileInputChange}
                                />
                                <button onClick={handleButtonClick} style={{
                                    width: '74px',
                                    height: '74px',
                                    border: 'none',
                                    background: `url(${images.SendPicture}) no-repeat center center`,
                                    backgroundSize: 'cover',
                                    cursor: 'pointer',
                                }}></button>
                            </div>
                            <div className='flex flex-col'>
                                <div className="flex items-center">
                                    <p className='text-primary text-2xl font-bold'>{user.name}</p>
                                    <img src={images.BlueTick} alt="" />
                                </div>
                                <p className='text-gray text-sm font-regular mt-1'>{formattedDate}</p>
                                <p className="text-gray text-sm font-regular mt-1">2019-yil iyun oyidan OXO da</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button classes={`bg-primary py-3 rounded-lg px-[24px] text-white text-base font-medium`}>Fikr bildirish</Button>
                            <Button classes={`flex items-center gap-[6px] border border-red py-3 rounded-lg px-[51px] text-base font-medium`}><img src={images.Heart} alt="" />Obuna bo’lish</Button>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center gap-7">
                        <Link to="#">
                            <FaceBook />
                        </Link>
                        <Link to="#">
                            <Pint />
                        </Link>
                        <Link to="#">
                            <Basketbool />
                        </Link>
                        <Link to="#">
                            <Telegram />
                        </Link>
                    </div>
                </div>
                <div className="mt-9 flex items-center gap-2">
                    <div className="relative">
                        <Link className='bg-black text-white py-2 pl-3 pr-[35px] rounded-lg flex items-center gap-[10px]'>{data[0]?.name} ({data?.length})</Link>
                        <Button classes="absolute top-[12px] right-[12px] z-10"><Close /></Button>
                    </div>
                    <div className="">
                        <Link className='bg-blue text-primary py-2 px-3 rounded-lg flex items-center gap-[10px]'>{data[0]?.name} ({data?.length})</Link>
                    </div>
                    <div className="">
                        <Link className='bg-blue text-primary py-2 px-3 rounded-lg flex items-center gap-[10px]'>{data[0]?.name} ({data?.length})</Link>
                    </div>
                    <div className="">
                        <Link className='bg-blue text-primary py-2 px-3 rounded-lg flex items-center gap-[10px]'>{data[0]?.name} ({data?.length})</Link>
                    </div>
                    <div className="">
                        <Link className='bg-blue text-primary py-2 px-3 rounded-lg flex items-center gap-[10px]'>{data[0]?.name} ({data?.length})</Link>
                    </div>
                </div>
                <div className="flex fex-col">

                    <div className="mt-8 gap-[15px] flex items-center flex-wrap">
                        {data?.map((item) => (
                            <Announcements key={nanoid()} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
