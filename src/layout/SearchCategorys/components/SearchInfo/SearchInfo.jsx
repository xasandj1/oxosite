import React from 'react'
import Button, { secondaryButton } from '../../../../components/Ul/Button'
import { Locatin } from '../../../../assets/icons/Locatin'
import { Search } from '../../../../assets/icons/Search'
import useDebounce from '../../../../hook/useDebaunse'
import { SearchCards } from '../../../../components/SearchCards'
import { useGetForyou } from '../../server/Query/useGetSearch'
import { nanoid } from 'nanoid'

export const SearchInfo = () => {
    const [value, setValue] = React.useState("")
    const search = useDebounce(value)
    const { data, isLoading, error } = useGetForyou(search)
    return (
        <section className="my-8">
            <div className="container flex flex-col">
                <div className="flex items-center">
                    <form className="max-w-[560px] w-full relative">
                        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className='w-full rounded-l-lg border border-borderColor outline-none py-[13px] pl-[48px]  text-primary text-sm font-regular'
                            placeholder='198 182 natija bo‘yicha ' />
                        <Button classes={`absolute left-4 top-[25%]`}><Search /></Button>
                    </form>
                    <div className="max-w-[392px] w-full relative">
                        <input type="text" className='w-full border rounded-r-lg border-borderColor outline-none py-[13px] pl-[48px]  text-primary text-sm font-regular' placeholder='Butun O‘zbekiston' />
                        <Button classes={`absolute left-4 top-[25%]`}><Locatin /></Button>
                    </div>
                    <Button classes={`${secondaryButton} ml-3`}>Izlash</Button>
                </div>
                <div className="mt-4">
                    {value.length > 3 ? <div className="flex items-center gap-[15px] flex-wrap">
                        {data?.map((item) => (
                            <SearchCards key={nanoid()} {...item} />
                        ))}
                    </div> : (
                        ""
                    )}
                </div>
            </div>
        </section>
    )
}
