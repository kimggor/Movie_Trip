import React from "react";
export default function Category() {
  return (
    <div
      className="map_wrap"
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Malgun Gothic, dotum, 돋움, sans-serif",
        fontSize: "12px",
        position: "relative",
        width: "100%",
        height: "350px",
      }}
    >
      <div
        id="map"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      ></div>
      <ul
        id="category"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          borderRadius: "5px",
          border: "1px solid #909090",
          boxShadow: "0 1px 1px rgba(0, 0, 0, 0.4)",
          background: "#fff",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <li
          id="FD6"
          data-order={0}
          style={{
            float: "left",
            listStyle: "none",
            width: "50px",
            borderRight: "1px solid #acacac",
            padding: "6px 0",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <span
            className="category_bg bank"
            style={{
              display: "block",
              margin: "0 auto 3px",
              width: "27px",
              height: "28px",
              background:
                "url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png) no-repeat", //https://ibb.co/1Tyjd2X,
              backgroundPosition: "-10px 0",
            }}
          ></span>
          음식점
        </li>
        <li
          id="MT1"
          data-order={1}
          style={{
            float: "left",
            listStyle: "none",
            width: "50px",
            borderRight: "1px solid #acacac",
            padding: "6px 0",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <span
            className="category_bg mart"
            style={{
              display: "block",
              margin: "0 auto 3px",
              width: "27px",
              height: "28px",
              background:
                "url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png) no-repeat",
              backgroundPosition: "-10px -36px",
            }}
          ></span>
          마트
        </li>
        <li
          id="PM9"
          data-order={2}
          style={{
            float: "left",
            listStyle: "none",
            width: "50px",
            borderRight: "1px solid #acacac",
            padding: "6px 0",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <span
            className="category_bg pharmacy"
            style={{
              display: "block",
              margin: "0 auto 3px",
              width: "27px",
              height: "28px",
              background:
                "url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png) no-repeat",
              backgroundPosition: "-10px -72px",
            }}
          ></span>
          약국
        </li>
        <li
          id="OL7"
          data-order={3}
          style={{
            float: "left",
            listStyle: "none",
            width: "50px",
            borderRight: "1px solid #acacac",
            padding: "6px 0",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <span
            className="category_bg oil"
            style={{
              display: "block",
              margin: "0 auto 3px",
              width: "27px",
              height: "28px",
              background:
                "url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png) no-repeat",
              backgroundPosition: "-10px -108px",
            }}
          ></span>
          주유소
        </li>
        <li
          id="CE7"
          data-order={4}
          style={{
            float: "left",
            listStyle: "none",
            width: "50px",
            borderRight: "1px solid #acacac",
            padding: "6px 0",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <span
            className="category_bg cafe"
            style={{
              display: "block",
              margin: "0 auto 3px",
              width: "27px",
              height: "28px",
              background:
                "url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png) no-repeat",
              backgroundPosition: "-10px -144px",
            }}
          ></span>
          카페
        </li>
        <li
          id="CS2"
          data-order={5}
          style={{
            float: "left",
            listStyle: "none",
            width: "50px",
            borderRight: "1px solid #acacac",
            padding: "6px 0",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <span
            className="category_bg store"
            style={{
              display: "block",
              margin: "0 auto 3px",
              width: "27px",
              height: "28px",
              background:
                "url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png) no-repeat",
              backgroundPosition: "-10px -180px",
            }}
          ></span>
          편의점
        </li>
      </ul>
    </div>
  );
}
