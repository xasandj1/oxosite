import React, { useState } from 'react';
import { Upload } from 'antd';
import Button, { primaryButton } from '../../../../components/Ul/Button';
import { useCreateUser } from '../../service/Mutation/useUpload';

export const CreateProductItem = () => {
    const [fileList, setFileList] = useState([]);
    const { mutate } = useCreateUser();

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        mutate(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;
        console.log(src);
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    const handleUpload = async () => {
        try {
            await mutate(fileList);
            console.log("Files uploaded successfully");
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };


    return (
        <section className="mt-[48px]">
            <div className="container">
                <div className="flex flex-col">
                    <h3 className="text-dark text-2xl font-bold">E’lon berish</h3>
                    <div className="max-w-[1111px] w-full flex flex-col ">
                        <div className="flex flex-col bg-white pl-8 py-8 mt-6 rounded-lg">
                            <h2 className="text-dark text-xl font-medium">Bizga e’loningiz haqida gapirib bering</h2>
                            <div className="flex flex-col mt-7">
                                <form className="flex flex-col">
                                    <label className='text-borderColor text-xs font-regular tracking-0.4px'>Sarlavha kiriting</label>
                                    <input type="text" className='border max-w-[794px] w-full mt-2 rounded border-inputBorder py-[14px] pl-4 placeholder:text-borderColor font-regular text-base outline-none' placeholder='Masalan iphone 13 Pro Max' />
                                </form>
                                <form className="flex flex-col mt-6">
                                    <label className='text-primary text-xs font-regular tracking-0.4px'>Rukn</label>
                                    <select className="border max-w-[794px] w-full mt-2 rounded border-inputBorder py-[14px] pl-4 text-borderColor font-regular text-base outline-none">
                                        <option value="">Bo’limni tanlang</option>
                                        <option value="">Ko’chmas mulk</option>
                                        <option value="">Ish</option>
                                        <option value="">Xobbi</option>
                                        <option value="">Elektr jihozlari</option>
                                    </select>
                                </form>
                            </div>

                        </div>
                        <div className="flex flex-col bg-white pl-8 py-8 mt-6 rounded-lg">
                            <div className="">
                                <h2 className="text-dark text-xl font-medium">Bizga e’loningiz haqida gapirib bering</h2>
                                <p className='text-borderColor text-xs font-regular mt-3'>Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.</p>
                            </div>
                            <div className="flex flex-col mt-7">
                                <Upload
                                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                >
                                    {fileList.length < 5 && '+ Upload'}
                                </Upload>
                            </div>

                        </div>
                        <div className="flex flex-col bg-white pl-8 py-8 mt-6 rounded-lg">
                            <div className="flex flex-col pl-8 py-8 mt-6 rounded-lg">
                                <h2 className="text-dark text-xl font-medium">Tavsif</h2>
                                <div className="flex flex-col mt-7">
                                    <form className="flex flex-col">
                                        <label className='text-borderColor text-xs font-regular tracking-0.4px'>Summani Kirting</label>
                                        <input type="number" className='border max-w-[794px] w-full mt-2 rounded border-inputBorder py-[14px] pl-4 placeholder:text-borderColor font-regular text-base outline-none' placeholder='Masalan 10000 UYE' />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white pl-8 py-8 mt-6 rounded-lg">
                            <h2 className="text-dark text-xl font-medium">Siz bilan bog’lanish uchun</h2>
                            <div className="flex flex-col mt-7">
                                <form className="flex flex-col ">
                                    <label className='text-primary text-xs font-regular tracking-0.4px'>Joylashuv</label>
                                    <select className="border max-w-[794px] w-full mt-2 rounded border-inputBorder py-[14px] pl-4 text-borderColor font-regular text-base outline-none">
                                        <option value="">Bo’limni tanlang</option>
                                        <option value="">Ko’chmas mulk</option>
                                        <option value="">Ish</option>
                                        <option value="">Xobbi</option>
                                        <option value="">Elektr jihozlari</option>
                                    </select>
                                </form>
                                <form className="flex flex-col mt-6">
                                    <label className='text-borderColor text-xs font-regular tracking-0.4px'>Ism</label>
                                    <input type="text" className='border max-w-[794px] w-full mt-2 rounded border-inputBorder py-[14px] pl-4 placeholder:text-borderColor font-regular text-base outline-none' />
                                </form>
                                <form className="flex flex-col mt-6">
                                    <label className='text-borderColor text-xs font-regular tracking-0.4px'>Email-manzil</label>
                                    <input type="text" className='border max-w-[794px] w-full mt-2 rounded border-inputBorder py-[14px] pl-4 placeholder:text-borderColor font-regular text-base outline-none' />
                                </form>
                                <form className="flex flex-col mt-6">
                                    <label className='text-borderColor text-xs font-regular tracking-0.4px'>Telefon raqami</label>
                                    <input type="numberTelefon raqami" className='border max-w-[794px] w-full mt-2 rounded border-inputBorder py-[14px] pl-4 placeholder:text-borderColor font-regular text-base outline-none' />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-end justify-end">
                    <Button
                        classes={`${primaryButton} max-w-[343px] w-full flex items-center justify-center`}
                        onClick={handleUpload} // Add onClick handler
                    >
                        E’lon joylash
                    </Button>
                </div>
            </div>
        </section>
    )
}
