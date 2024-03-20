import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';
import { ForYouCards } from '../../../components/ForYouCards';
import { loadState, saveState } from '../../../lib/storage';

export const LikeCards = () => {
    const dispatch = useDispatch();
    const likeItems = useSelector(state => state.likeReducer.likeItems);
    useEffect(() => {
        const storedLikeItems = loadState("likeItems");
        console.log('Stored likeItems:', storedLikeItems);
        if (storedLikeItems) {
            dispatch({ type: 'LOAD_LIKE_ITEMS', payload: storedLikeItems });
        }
    }, [dispatch]);
    useEffect(() => {
        saveState('likeItems', likeItems);
    }, [likeItems]);
    return (
        <section className='mt-8'>
            <div className="container">
                <h1 className="text-dark text-2xl font-bold">Siz yoqtirganla</h1>
                <div className="flex items-center gap-[15px] mt-8 flex-wrap">
                    {likeItems?.map((item) => (
                        <ForYouCards key={nanoid()} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
