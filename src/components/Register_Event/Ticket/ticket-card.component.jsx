import { memo, useEffect, useState } from "react";
import { FirebaseAuth } from "../../../firebase/firebase.config";
import { getUserId } from "../../../helpers/storage.helpers";

const DEFAULT_IMAGE = "/assets/svgs/default.svg";
export const TicketCard = memo(
  ({ userName = "", Semester, department }) => {
    const id = getUserId();
    const [image, setImage] = useState(DEFAULT_IMAGE);

    useEffect(() => {
      if (FirebaseAuth.currentUser) {
        const {
          currentUser: { photoURL },
        } = FirebaseAuth;
        setImage(photoURL);
      }
    }, [FirebaseAuth.currentUser]);

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="325.066"
        viewBox="1979 574.935 551 325.066"
        id="my_ticket"
      >
        <defs>
          <pattern
            id="pattern"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 128 128"
          >
            <image width="128" height="128" href={image} />
          </pattern>
        </defs>
        <rect
          id="Rectangle_1"
          data-name="Rectangle 1"
          width="551"
          height="319"
          rx="10"
          transform="translate(1979 581)"
          fill="#f6f8fc"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="215"
          height="145"
          transform="translate(2218 616)"
          fill="#e3dfef"
        />
        <path
          id="Polygon_1"
          data-name="Polygon 1"
          d="M57.5,0,115,100H0Z"
          transform="matrix(0.731, 0.682, -0.682, 0.731, 2074.895, 574.935)"
          fill="#f1bdc7"
        />
        <text
          id="Rohit_Jangid"
          transform="translate(2223 636)"
          fontSize="24"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="38">
            {userName}
          </tspan>
        </text>
        <text
          id="Sem_7_Computer"
          data-name="Sem 7"
          transform="translate(2223 683)"
          fill="#565353"
          fontSize="20"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="26">
            Sem {Semester}
          </tspan>
        </text>
        <text
          id="Nxt.TECH"
          transform="translate(2167 775)"
          fontSize="35"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="43">
            Nxt.TECH
          </tspan>
        </text>
        <text
          id="GEC_Dahod"
          data-name="GEC Dahod"
          transform="translate(2223 737)"
          fill="#565353"
          fontSize="20"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            {department}
          </tspan>
        </text>
        <rect
          id="_41"
          data-name="41"
          width="99"
          height="99"
          rx="49.5"
          transform="translate(2081 638)"
          fill="url(#pattern)"
        />
        <path
          id="Intersection_1"
          data-name="Intersection 1"
          d="M-1270,124a10,10,0,0,1-10-10V17.995a83.365,83.365,0,0,1,66.5-33A83.5,83.5,0,0,1-1130,68.5a83.2,83.2,0,0,1-21.113,55.5Z"
          transform="translate(3259 776)"
          fill="#b5c9f0"
        />
        <path
          id="Intersection_2"
          data-name="Intersection 2"
          d="M-812,151V-168h56a10,10,0,0,1,10,10V141a10,10,0,0,1-10,10Z"
          transform="translate(3276 749)"
          fill="#a9b3f3"
        />
        <path
          id="Intersection_3"
          data-name="Intersection 3"
          d="M-938,124a63,63,0,0,1,63-63,63,63,0,0,1,63,63Z"
          transform="translate(3276 776)"
          fill="#d4dcee"
        />
        <text
          id="_87e5T9r"
          data-name="#87e5T9r"
          transform="translate(2508 795) rotate(-90)"
          fill="#2a1341"
          fontSize="25"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            #{String(id).toUpperCase().substr(0, 5)}
          </tspan>
        </text>
        <text
          id="_15th_16th_of_July"
          data-name="15th &amp; 16th of July"
          transform="translate(2166 852)"
          fill="#676767"
          fontSize="20"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            15th &amp; 16th of July
          </tspan>
        </text>
        <text
          id="_10:00_AM_to_12:00_AM"
          data-name="10:00 AM to 12:00 AM"
          transform="translate(2178 875)"
          fill="#676767"
          fontSize="15"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            10:00 AM to 12:00 AM
          </tspan>
        </text>
      </svg>
    );
  }
);
