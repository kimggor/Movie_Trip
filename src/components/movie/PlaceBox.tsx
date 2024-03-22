import { useState } from "react";
import { MoviePlaceDataType } from "@/type/movieType";
import React from "react";
import CheckBackground from "../common/CheckBackground";
import { useRecoilValue } from "recoil";
import { selectPlaceState } from "@/atom/selectPlaceStore";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip"; // Tooltip 추가

type PlaceBoxType = {
  movie: MoviePlaceDataType;
  handleClick?: (movie: MoviePlaceDataType) => void;
};

export default function PlaceBox({
  movie,
  handleClick = () => {},
}: PlaceBoxType) {
  const selectedPlace = useRecoilValue(selectPlaceState);

  return (
    <div
      key={movie.moviePlaceId}
      className="w-[340px] h-[220px] flex flex-col items-center relative"
    >
      <div
        className="w-full h-[85%] rounded-lg cursor-pointer relative flex justify-center items-center"
        onClick={() => handleClick(movie)}
      >
        <img
          src={`/images/place/${movie.title}/${movie.placeName}.png`}
          alt="장소 이미지"
          className="w-full h-full rounded-lg"
        />
        {selectedPlace.find(
          (item) => item.moviePlaceId === movie.moviePlaceId
        ) && <CheckBackground />}
      </div>
      <div className="relative">
        <div className="min-w-[60%] px-2 py-1 flex items-center justify-center bg-[#030303] rounded-full mt-[2px]">
          <p className="text-[18px] text-white">{movie.placeName}</p>
          <Tooltip
            title={
              <div>
                <p className="text-[12px]">{movie.description}</p>
                <p className="text-[18px]">{movie.address}</p>
              </div>
            }
            placement="top"
          >
            <InfoIcon
              className="ml-2 cursor-pointer"
              style={{ color: "gray" }}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
