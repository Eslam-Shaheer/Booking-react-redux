import React, { useState, useEffect } from "react";
import "./reservation.css";
export default function Reservation(props) {
  const [ApartlWith, setApartlWith] = useState([]);

  useEffect(() => {
    
     window.scrollTo({
       top: 0,
       left: 0,
       behavior: "instant",
     });
    let viewElement = [];
    for (let view of props.apartment.facilities.view) {
      switch (view) {
        case "Garden view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xmlSpace="preserve"
              >
                <g>
                  <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                    <path d="M2419.8,4872c-375.1-120-635.5-472.1-635.5-854.9v-148l-94.4-30.6c-158.2-48.5-354.7-199.1-454.3-342c-114.8-165.9-165.9-334.3-165.9-541v-158.2l-127.6-81.7C390.9,2360.7,368,1564.4,901.4,1197c222-150.6,306.2-165.9,990.2-165.9H2499v-1225v-1225h-178.6h-178.6v265.4c0,148-12.8,298.6-28.1,339.4c-30.6,81.7-655.9,926.4-686.5,926.4S771.2-732.4,740.6-814.1c-15.3-40.8-28.1-191.4-28.1-339.4v-265.4H406.2H100v-204.2v-204.2h306.2h306.2v-510.4v-510.4H406.2H100v-204.2v-204.2h306.2h306.2V-3971v-714.6h714.6h714.6v714.6v714.6l479.8-5.1l477.2-7.7l7.7-709.5l5.1-706.9h701.8h701.8v714.6v714.6H5000h484.9V-3971v-714.6h714.6h714.6v714.6v714.6h472.1h472.1V-3971v-714.6h714.6h714.6v714.6v714.6h306.3H9900v204.2v204.2h-306.3h-306.3v510.4v510.4h306.3H9900v204.2v204.2h-306.3h-306.3v265.4c0,148-10.2,296.1-25.5,331.8c-12.8,35.7-173.5,265.4-359.8,513l-336.9,446.6l-347.1-464.5l-347.1-464.5l-7.7-313.9l-10.2-313.9h-214.4h-214.4v1314.3v1314.3h454.3c561.5,0,643.1,23,849.8,227.1c158.2,158.2,227.1,316.5,227.1,510.4c0,242.5-122.5,482.3-316.5,617.6c-109.7,79.1-112.3,81.7-122.5,252.7c-10.2,125-33.2,206.7-79.1,288.4c-81.7,140.4-239.9,283.3-357.3,324.1c-81.7,30.6-89.3,43.4-102.1,168.4c-28.1,275.6-178.6,497.7-421.1,615.1c-196.5,94.4-464.5,99.5-655.9,7.7c-242.5-120-377.7-306.3-428.8-599.7c-25.5-145.5-33.2-160.8-107.2-188.8c-227.1-81.7-418.6-357.3-441.5-632.9c-10.2-150.6-17.9-163.3-112.3-227.1c-395.6-275.6-426.2-847.3-66.3-1171.4c183.8-165.9,296-191.4,829.4-191.4h441.5V-104.6v-1314.3h-63.8h-63.8v296c0,173.5-12.8,316.5-30.6,349.6c-43.4,84.2-653.3,888.1-671.2,888.1c-25.5,0-650.8-839.6-676.3-911.1c-15.3-35.7-25.5-191.4-25.5-344.5v-278.2h-482.3h-482.3L4510-1105l-7.7,313.9l-347.1,464.5l-347.1,464.5l-342-451.7l-342-454.3l-7.7-324.1l-10.2-326.7h-99.5h-99.5v1222.4v1225l658.4,7.7c612.5,7.7,663.5,12.8,778.4,63.8c183.8,86.8,382.8,288.4,467,474.7c181.2,398.1,25.5,913.7-336.9,1128l-130.2,76.6l-15.3,216.9c-7.7,137.8-30.6,260.3-66.4,339.4c-79.1,183.8-283.3,382.8-474.7,467l-160.8,68.9l-10.2,186.3c-23,347.1-211.8,622.7-530.8,770.7C2912.4,4910.2,2601,4930.6,2419.8,4872z M2914.9,4466.2c99.5-43.4,234.8-181.2,270.5-278.2c56.1-145.5,33.2-301.2-74-525.7c-56.2-114.8-102.1-211.8-102.1-214.4c0-5.1,104.6,5.1,229.7,17.9c265.4,25.5,385.4,2.6,513-104.6c194-163.3,224.6-405.8,89.3-689.1c-86.8-178.7-86.8-181.2-33.2-196.5c30.6-7.7,91.9-15.3,132.7-15.3c229.7,0,461.9-168.4,523.2-375.2c68.9-227.1-51-500.2-262.9-597.2c-102.1-43.4-186.3-48.5-1505.7-48.5c-1324.5,0-1403.6,2.6-1493,48.5c-120,61.3-196.5,142.9-247.6,262.9c-127.6,308.8,79.1,653.3,421.1,696.7c63.8,7.6,153.1,20.4,196.5,28.1l84.2,12.8l-89.3,176.1c-142.9,283.3-112.3,528.3,89.3,696.7c125,104.6,239.9,130.2,507.9,102.1c127.6-12.8,232.2-17.9,232.2-15.3c0,5.1-45.9,99.5-102.1,211.8c-112.3,222-132.7,387.9-66.4,543.6c43.4,102.1,155.7,219.5,257.8,262.9C2588.3,4509.6,2810.3,4512.1,2914.9,4466.2z M7368.3,3853.7c120-61.3,188.9-158.2,201.6-275.6c10.2-89.3-7.6-148-91.9-321.6c-97-199.1-99.5-209.3-45.9-199.1c186.3,40.8,400.7,40.8,487.5,5.1c199.1-84.2,247.5-316.5,117.4-576.8l-76.6-150.6l148-15.3c79.1-7.6,188.9-33.2,242.5-56.2c181.2-76.6,252.7-311.3,145.5-484.9c-97-160.8-89.3-160.8-1281.2-160.8c-1010.6,0-1084.6,2.6-1158.6,48.5c-89.3,53.6-163.3,191.4-163.3,301.2c0,86.8,79.1,219.5,163.3,275.6c33.2,23,140.4,53.6,234.8,66.4c94.4,12.8,176.1,28.1,183.8,33.2c5.1,5.1-25.5,79.1-68.9,165.9c-91.9,181.2-99.5,306.2-28.1,423.6c86.8,140.4,193.9,173.5,454.3,145.5c122.5-12.8,224.6-20.4,229.7-17.9c2.6,2.6-40.8,104.6-99.5,224.6c-84.2,178.6-102.1,237.3-89.3,308.8C6916.6,3817.9,7174.4,3953.2,7368.3,3853.7z M1593-752.8l140.4-191.4v-237.3v-237.3h-306.3h-306.3v237.3v237.3l145.5,196.5c81.7,109.7,155.7,194,165.9,191.4C1442.4-561.4,1513.9-648.2,1593-752.8z M3963.9-742.6l142.9-188.9v-245v-242.5h-306.2h-306.3v232.2v234.8l148,199.1c79.1,109.7,153.1,199.1,160.8,201.6C3813.3-551.2,3884.7-638,3963.9-742.6z M6352.6-752.8L6505.7-957v-229.7v-232.2h-306.3h-306.3v247.6v245l140.4,188.9c79.1,102.1,145.5,186.3,153.1,186.3C6191.8-551.2,6265.8-643.1,6352.6-752.8z M8733.7-752.8l145.5-199.1v-234.8v-232.2h-306.3h-306.3v237.3v237.3l145.5,196.5c79.1,107.2,153.1,196.5,160.8,196.5C8580.6-553.8,8652-643.1,8733.7-752.8z M1733.3-2337.7v-510.4h-306.3h-306.3v510.4v510.4h306.3h306.3V-2337.7z M3106.3-2342.8l5.1-505.3h-484.9h-484.9v510.4v510.4l479.8-5.1l477.2-7.7L3106.3-2342.8z M4106.8-2337.7v-510.4h-306.2h-306.3v492.5c0,273.1,7.7,502.8,17.9,510.4c7.7,10.2,145.5,17.9,306.3,17.9h288.4V-2337.7z M5484.9-2337.7v-510.4H5000h-484.9v510.4v510.4H5000h484.9V-2337.7z M6505.7-2337.7v-510.4h-306.3h-306.3v510.4v510.4h306.3h306.3V-2337.7z M7858.3-2337.7v-510.4h-467h-469.6l-15.3,487.4c-10.2,268-12.8,497.7-2.6,510.4c7.7,12.8,224.6,23,484.9,23h469.6V-2337.7z M8879.2-2337.7v-510.4h-306.3h-306.3v510.4v510.4h306.3h306.3V-2337.7z M1733.3-3766.8v-510.4h-306.3h-306.3v510.4v510.4h306.3h306.3V-3766.8z M4111.9-3338.1c5.1-45.9,15.3-275.6,17.9-510.4l7.7-428.7h-321.6h-321.6v492.5c0,273.1,7.7,502.8,17.9,510.4c7.7,10.2,145.5,17.9,301.1,17.9h285.8L4111.9-3338.1z M6505.7-3766.8v-510.4h-306.3h-306.3v510.4v510.4h306.3h306.3V-3766.8z M8879.2-3766.8v-510.4h-306.3h-306.3v510.4v510.4h306.3h306.3V-3766.8z" />
                  </g>
                </g>
              </svg>
              <span className="ms-1">Garden view</span>
            </div>
          );
          setApartlWith(viewElement);
          break;
        case "Balcony":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M391,384.3c-19.1,14.1-35.8,28-54.1,39.3c-15.7,9.7-32.8,17.5-50,24.3c-11.8,4.6-23.6,0.2-32.3-9c-39.3-41.4-78.5-83-117.5-124.8c-11-11.8-12.3-28.1-4.5-41c7.7-12.7,21.9-18.4,37.5-15c1.9,0.4,3.7,1.1,6.4,1.9c0.7-2.7,1.4-5.1,1.8-7.5c2.6-14.1,2.6-14.1-10.4-18.2c-22.4-7.1-33.8-24.9-28.7-50.1c3.5-17.2,10.8-33.6,17.1-50c0.9-2.4,6.1-4.8,9-4.5c22.7,2.8,45.4,6.1,68,9.6c2.2,0.3,5.4,2.9,5.8,5c4.3,20.7,7.3,41.5,1.6,62.5c-6.2,22.5-20.9,33.6-44,32.1c-6.6-0.4-8.4,1.2-10.1,7.9c-3.8,14.4,1.3,23.4,11.3,33.4c26.6,26.3,51.7,54,77.8,81.5c5.5-4.7,8-6.6,10.3-8.8c31.6-29.2,64.7-56.9,94.2-88c20.9-22.1,46.5-30.4,73.7-37.7c3.1-0.8,6.5-0.8,9.7-0.8c22.6-0.1,45.2,0.7,67.8-0.2c24.4-1,45.5,8,65.5,20.1c6.7,4,12.2,11,16.6,17.7c29.8,44.9,59,90.1,88.7,135c18.7,28.3,45.6,48.9,69.9,71.8c14.3,13.5,29.1,26.5,44.9,40.7c-3.6,0.4-5.9,0.8-8.2,0.8c-22.6,0-45.2,0.3-67.8-0.2c-4.8-0.1-10.2-2-14.2-4.6c-38.1-24.5-67.9-58.6-100.4-89.7c-5.1-4.9-10.4-9.6-17.3-16.1c-1.3,14-2.2,25.8-3.5,37.4c-2.4,21.5-5.2,43-7.6,64.6c-0.7,6.4-3.2,8.7-9.9,8.7c-57.6-0.3-115.3-0.2-172.9,0c-6.5,0-9.4-1.7-10-8.5c-2.3-26.2-4.8-52.4-7.7-78.5C396.1,412.2,393.5,399.4,391,384.3L391,384.3z M238.6,180.1c-1.2-9-2.3-19.4-4.3-29.7c-0.5-2.7-3.7-6.7-6.2-7.1c-20-3.2-40.1-6-60.2-8.2c-2.8-0.3-7.8,2.5-8.7,5c-5.2,13.7-11,27.5-13.6,41.9c-5.1,28,6.7,43.8,34.3,49.5c31.5,6.5,51.1-4.3,56.3-31.3C237.4,194.1,237.7,187.8,238.6,180.1L238.6,180.1z" />
                  <path d="M500.7,658.9c-140.1,0-280.3,0-420.4,0c-25.6,0-33.9-8.3-33.9-34.4c0-9.2-0.1-18.4,0-27.6c0.2-20.2,10.1-30.3,30.3-30.3c72.4-0.1,144.7-0.1,217.1-0.1c206.6,0,413.2,0,619.9,0c4.9,0,9.8-0.2,14.7,0.2c15.6,1.2,25,11.3,25.2,27.1c0.2,12.2,0.1,24.4,0,36.5c-0.1,18.7-9.7,28.5-28.5,28.5c-73.7,0.1-147.3,0.1-221,0.1C636.3,658.9,568.5,658.9,500.7,658.9" />
                  <path d="M432.9,105.3c0.7-21.7,4.5-43.3,16.4-62.6c16.4-26.8,44.4-38.1,74.4-30.3c30.3,7.8,50.2,30.7,50.7,62.3c0.7,47.8-20.3,85.1-60.5,110.3c-24.5,15.4-49.7,8-65.1-16.8C437,149.2,433.3,127.9,432.9,105.3" />
                  <path d="M255.9,699h61.6v290.6h-61.6V699" />
                  <path d="M111.8,699.1h61.5v290.6h-61.5V699.1" />
                  <path d="M399.8,699.1h61.7v290.5h-61.7V699.1" />
                  <path d="M543.4,989.5V699.2H605v290.3H543.4" />
                  <path d="M748.9,990h-61.5V699.3h61.5V990" />
                  <path d="M831,698.9h61.6v290.6H831V698.9" />
                  <path d="M194.2,222.5c-6.3-1.4-12.9-2.2-18.9-4.4c-14.1-5.1-21.6-25.7-14.3-38.8c0.9-1.6,4.2-2.9,6.2-2.7c16.8,2,33.6,4.2,50.4,6.9c2.1,0.3,5,3.3,5.3,5.3C225.8,206.8,212.3,222.2,194.2,222.5" />
                </g>
              </svg>
              <span className="ms-1">Balcony</span>
            </div>
          );
          setApartlWith(viewElement);
          break;
        case "Terrace":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path>
              </svg>
              <span className="ms-1">Terrace</span>
            </div>
          );
          setApartlWith(viewElement);
          break;
        case "View":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M127.5 104.38l-45.33-82a4.323 4.323 0 0 0-.33-.5 10.858 10.858 0 0 0-2-2c-4.7-3.567-11.398-2.674-15 2a3.61 3.61 0 0 0-.33.5l-25.44 46-7.87-10.47a4 4 0 0 0-6.75.55l-24 46A4 4 0 0 0 4 110.31h120a4 4 0 0 0 3.5-5.93zM71.32 26.57a2.73 2.73 0 0 1 3.68-.32c.128.093.246.2.35.32L89 51.35l-7.33 6.87-2.54-2.84a7.85 7.85 0 0 0-5.83-2.68 7.88 7.88 0 0 0-5.87 2.68l-2.54 2.83-7.24-6.91zM28.61 67.79l6.21 8.28-14.51 26.24H10.6zm.84 34.52L42.83 78.1c.196-.265.358-.554.48-.86l10.34-18.7 5.86 5.6a7.78 7.78 0 0 0 5.71 2.17 7.89 7.89 0 0 0 5.56-2.67l2.52-2.83 2.53 2.83a7.85 7.85 0 0 0 5.55 2.67h.32a7.75 7.75 0 0 0 5.37-2.17l6-5.58 24.19 43.74z"></path>
              </svg>
              <span className="ms-1">Mountain view</span>
            </div>
          );
          setApartlWith(viewElement);
          break;

        default:
          break;
      }
    }
  }, []);
  let Name;
  if (props.apartment) {
    Name = "apartment";
  }
  return (
    <>
      <div>
        <div className="Reservation mt-3">
          <div className="p-3">
            <h6>Perfect for a 1-night stay!</h6>
            <div className="d-flex">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0071c2"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
              </p>
              <p>
                {" "}
                Located in {props.apartment.country} this {Name} has{" "}
                {props.rate} location score of {props.apartment.avgReviews}
              </p>{" "}
            </div>

            <div className="d-flex flex-column">
              <h6 className="text-secondary mt-2">Apartment with:</h6>
              <div className="ms-0">
                {ApartlWith.map((item) => {
                  return item;
                })}
              </div>
            </div>
          </div>

          <div className="p-3">
            <button className="btn btn-primary w-100 rounded-0">Reserve</button>
          </div>
        </div>
      </div>
    </>
  );
}
