'use client';
import { selectPlaceState } from '@/atom/selectPlaceStore';
import Divider from '@/components/common/Divider';
import KakaoMap from '@/components/movie/KakaoMap';
import MovieDetails from '@/components/movie/MovieDetails';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

export default function MovieDetailPage({ params }: { params: { movie: string | number } }) {
    const [isSelected, setIsSelected] = useState(false);
    const setSelectPlace = useSetRecoilState(selectPlaceState);

    const handleSelect = (validateMoviePlace: boolean) => {
        validateMoviePlace && setIsSelected(true);
    };

    const handleUnSelect = () => {
        setIsSelected(false);
    };
    // 페이지 벗어날 때 선택한 장소 초기화
    useEffect(() => {
        return () => {
            setSelectPlace([]);
        };
    }, []);


    return !isSelected ? (
        <MovieDetails movie={params.movie as string} handleSelect={handleSelect} />
    ) : (
        <div className="w-full h-full min-w-[1920px]">
            <Divider />
            <div className="w-full flex items-center justify-between py-10 px-16">
                <div className="flex items-center gap-5">
                    <div onClick={handleUnSelect} className='cursor-pointer'>
                        <img src="/images/return.svg" alt="돌아가기 아이콘" className="w-10 h-10" />
                    </div>
                    <h2 className="text-[#333333] text-[32px] font-[700]">선택한 촬영지 기반으로 경로를 안내할게요!</h2>
                </div>
                <div className="w-[282px] h-[52px] flex items-center justify-between p-2 bg-black rounded-lg">
                    <p className="text-[#f2f2f2] text-[24px]">{decodeURIComponent(params.movie as string)}</p>
                    <img src="/images/Search.png" alt="검색 아이콘" className="w-[40px] h-[40px]" />
                </div>
            </div>
            <div className="w-full">
                <KakaoMap />
            </div>
        </div>
    );
}
