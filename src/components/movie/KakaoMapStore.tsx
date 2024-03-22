import React, { useEffect, useState } from "react";

const MapComponent: React.FC = () => {
  const [currCategory, setCurrCategory] = useState<string>("");
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (!map) return;

    const ps = new window.kakao.maps.services.Places(map);

    function searchPlaces() {
      if (!currCategory) {
        return;
      }

      removeMarker();

      ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    }

    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        displayPlaces(data);
      } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
        // Handle zero results
      } else if (status === window.kakao.maps.services.Status.ERROR) {
        // Handle error
      }
    }

    function displayPlaces(places: any) {
      for (let i = 0; i < places.length; i++) {
        const marker = addMarker(
          new window.kakao.maps.LatLng(places[i].y, places[i].x)
        );
        (function (marker: any, place: any) {
          window.kakao.maps.event.addListener(marker, "click", function () {
            displayPlaceInfo(place);
          });
        })(marker, places[i]);
      }
    }

    function addMarker(position: any) {
      const marker = new window.kakao.maps.Marker({
        position: position,
      });
      marker.setMap(map);
      return marker;
    }

    function removeMarker() {
      // Remove existing markers
    }

    function displayPlaceInfo(place: any) {
      // Display place info
    }

    window.kakao.maps.event.addListener(map, "idle", searchPlaces);

    return () => {
      // Cleanup function
    };
  }, [currCategory, map]);

  const onClickCategory = (id: string, className: string) => {
    if (className === "on") {
      setCurrCategory("");
    } else {
      setCurrCategory(id);
    }
  };

  return (
    <div>
      <div className="map_wrap">
        <div
          id="map"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        ></div>
        <ul id="category">
          <li
            id="BK9"
            data-order="0"
            onClick={() => onClickCategory("BK9", "on")}
          >
            <span className="category_bg bank"></span>
            은행
          </li>
          <li
            id="MT1"
            data-order="1"
            onClick={() => onClickCategory("MT1", "on")}
          >
            <span className="category_bg mart"></span>
            마트
          </li>
          <li
            id="PM9"
            data-order="2"
            onClick={() => onClickCategory("PM9", "on")}
          >
            <span className="category_bg pharmacy"></span>
            약국
          </li>
          <li
            id="OL7"
            data-order="3"
            onClick={() => onClickCategory("OL7", "on")}
          >
            <span className="category_bg oil"></span>
            주유소
          </li>
          <li
            id="CE7"
            data-order="4"
            onClick={() => onClickCategory("CE7", "on")}
          >
            <span className="category_bg cafe"></span>
            카페
          </li>
          <li
            id="CS2"
            data-order="5"
            onClick={() => onClickCategory("CS2", "on")}
          >
            <span className="category_bg store"></span>
            편의점
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MapComponent;
