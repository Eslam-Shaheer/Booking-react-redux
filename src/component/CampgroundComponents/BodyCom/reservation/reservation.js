import React, { useState, useEffect } from "react";
import "./reservation.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18next";
export default function Reservation(props) {
  const [campgroundWith, setcampgroundWith] = useState([]);
  const [parking, setParking] = useState();

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    if (props.campground.facilities.parking) {
      let parking = (
        <div className="d-flex mx-3 align-items-center ">
          <div className="me-2">
            <span class="badge bg-dark fs-6 p-2 h-50">
              <b>P</b>
            </span>
          </div>
          <div>
            <p className="mt-3">
              {t("CampgroundComponents.BodyCom.reservation.Free parking!")}
            </p>
          </div>
        </div>
      );
      setParking(parking);
    }
  }, []);
  let Name;
  if (props.campground) {
    Name = "Campground";
  }

  return (
    <>
      <div className="Reservation mt-3">
        <div className="p-3">
          <div className="d-flex">
            <p>
              <svg
                className="me-1"
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
              {t("CampgroundComponents.BodyCom.reservation.Located in")}{" "}
              {props.campground.country} this {Name} has {props.rate}{" "}
              {t("CampgroundComponents.BodyCom.reservation.location score of")}{" "}
              {props.campground.avgReviews}
            </p>
          </div>

          <div className="d-flex flex-column">
            <h6 className="text-secondary">
              {t("CampgroundComponents.BodyCom.reservation.Food Include")}
            </h6>
            {props.campground.facilities.breakfast && (
              <div>
                {" "}
                <svg
                  className="me-1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enable-background="new 0 0 1000 1000"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                >
                  <g>
                    <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                      <path d="M6926.5,4565.3c293.1-326.9,500.4-801.4,520.3-1196.2c23.9-460.5-105.7-709.7-542.3-1036.7C6623.4,2121.2,6458,1880,6372.2,1557c-75.8-289.1-41.9-809.4,73.8-1138.3c15.9-47.8,25.9-89.7,21.9-93.7c-4-6-109.6-17.9-235.2-27.9c-877.2-71.8-1473.3-303-1630.8-628c-41.9-83.7-43.9-107.7-31.9-352.9c35.9-693.8,129.6-1351.7,273.1-1911.9c149.5-588.1,460.5-1459.3,556.2-1561c103.7-109.6,430.6-201.3,897.1-253.2c346.9-37.9,1523.1-31.9,1808.2,10c452.6,63.8,737.6,177.4,765.5,303c6,33.9,29.9,99.7,51.8,149.5c39.9,87.7,43.9,89.7,163.5,113.6c382.8,71.8,596.1,352.9,707.7,933c43.8,231.3,65.8,428.6,93.7,861.2c39.9,620-6,849.3-217.3,1098.5L9564-815.4l12,243.2c15.9,275.1,6,313-101.7,430.6c-251.2,281.1-935,440.6-1878,440.6h-364.8l13.9,75.8c19.9,111.6,79.7,259.2,139.6,344.9c107.7,155.5,269.1,241.2,640,336.9c526.3,139.6,727.7,225.3,893.1,380.8c201.3,191.4,283.1,488.4,227.3,821.4c-59.8,348.9-203.3,620-482.5,921c-97.7,105.7-181.4,187.4-187.4,183.4c-4-4,23.9-55.8,63.8-115.6c115.6-177.4,159.5-334.9,159.5-576.1c0-199.4-4-217.3-71.8-358.8c-129.6-271.1-338.9-458.5-747.6-665.9c-123.6-61.8-279.1-149.5-348.9-195.4c-177.4-113.6-414.7-358.8-492.4-508.4c-85.7-161.5-131.6-376.8-113.6-532.3l14-117.6l-135.6,12c-75.8,8-177.4,14-225.3,14h-87.7l12,175.4c15.9,217.3,57.8,416.7,121.6,586.1c117.6,313,265.1,466.5,727.7,745.6c305,183.4,384.8,257.2,472.5,438.6c65.8,131.6,75.8,167.5,83.7,342.9c10,237.2-25.9,444.6-129.6,721.7c-189.4,506.4-496.4,964.9-829.3,1238l-103.7,87.7L6926.5,4565.3z M8170.5-29.9c504.4-51.8,879.2-161.5,1012.7-291.1c71.8-69.8,77.8-99.7,31.9-175.5c-91.7-155.5-434.6-275.1-984.8-340.9c-289.1-35.9-1409.5-47.9-1836.1-21.9c-805.4,51.8-1269.9,163.5-1421.5,340.9c-73.8,89.7-67.8,129.6,37.9,191.4C5297.7-159.5,5939.6-37.9,6775,8C7034.1,21.9,7907.3,0,8170.5-29.9z M8471.5-1325.7c325-33.9,508.4-63.8,560.2-91.7c31.9-17.9,35.9-53.8,35.9-376.8c0-592.1-69.8-1202.1-161.5-1417.4c-49.8-115.6-109.6-153.5-327-205.4c-75.8-17.9-155.5-37.9-173.4-43.8c-33.9-10-33.9-8,0,51.8c33.9,59.8,33.9,61.8-14,97.7c-27.9,21.9-161.5,67.8-299,101.7c-269.1,69.8-400.7,115.6-400.7,139.6c0,15.9,297.1,39.9,526.3,39.9c273.1,0,362.8,17.9,388.8,73.8c55.8,123.6,119.6,743.6,121.6,1172.2v181.4l-237.2,115.6c-213.3,105.7-352.9,189.4-319,191.4C8180.4-1295.8,8314-1309.8,8471.5-1325.7z" />
                      <path d="M1994.3,2920.6c-428.6-199.4-976.9-815.4-1291.9-1455.3C529,1110.4,495.1,891.1,590.8,705.7c117.6-227.3,430.6-364.8,851.3-370.8c179.4-2,215.3,4,360.8,61.8c185.4,71.8,346.9,179.4,432.6,287.1c47.9,59.8,63.8,97.7,69.8,191.4c8,101.7-2,137.6-61.8,273.1c-37.9,87.7-73.8,201.4-81.7,253.2c-16,135.6,15.9,406.7,97.7,833.3c93.7,478.5,107.7,641.9,59.8,695.8C2267.4,2986.4,2127.9,2982.4,1994.3,2920.6z" />
                      <path d="M2508.6,564.2c-189.4-313-422.6-522.3-749.6-677.8C1312.5-325,947.7-297.1,696.5-31.9C570.9,101.7,521,201.4,485.1,392.7C441.3,626,361.5,707.7,265.8,618C122.3,482.5,60.5,89.7,126.3-283.1C220-825.4,654.6-1694.6,875.9-1782.3c217.3-87.7,699.8-119.6,925-61.8c195.4,49.8,426.6,175.4,574.2,311c219.3,199.4,372.8,436.6,566.2,875.2c59.8,137.6,141.5,307,181.4,378.8c59.8,105.7,73.8,149.5,71.8,239.2c0,141.5-35.9,207.3-225.3,406.7c-83.7,87.7-187.4,209.3-229.3,267.1c-41.9,55.8-85.7,103.7-99.7,103.7C2626.3,737.6,2566.5,659.9,2508.6,564.2z" />
                      <path d="M3371.9,245.2c6-41.9,33.9-173.4,61.8-295c89.7-378.8,67.8-725.7-59.8-1004.8c-233.2-512.3-943-1170.2-1421.4-1317.8c-197.4-61.8-342.9-53.8-508.4,29.9c-167.5,83.7-237.2,89.7-283.1,19.9c-35.9-55.8-27.9-167.5,21.9-311c33.9-93.7,189.4-307,424.6-580.2c289.1-332.9,590.1-582.1,897.1-741.6c297.1-151.5,526.3-195.4,1190.2-221.3c283.1-12,815.4,12,841.3,35.9c6,6-21.9,49.8-61.8,95.7c-89.7,105.7-231.3,394.8-299,612c-197.4,630-273.1,1539.1-231.3,2769.1c12,384.8,17.9,719.7,10,741.6c-17.9,61.8-119.6,111.6-354.9,179.4c-117.6,33.9-219.3,61.8-227.3,61.8C3365.9,319,3365.9,285.1,3371.9,245.2z" />
                    </g>
                  </g>
                </svg>
                {t("CampgroundComponents.BodyCom.reservation.Breakfast")}
              </div>
            )}
            {props.campground.facilities.lunch && (
              <div>
                {" "}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enable-background="new 0 0 1000 1000"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                >
                  <g>
                    <g transform="translate(0.000000,317.000000) scale(0.100000,-0.100000)">
                      <path d="M4866,1175.7c-143.6-46-268-225.9-268-388.7v-59.4l-137.8-13.4c-438.4-40.2-1043.4-222.1-1495.2-449.9c-480.6-241.2-834.7-497.8-1219.6-882.6C1069.5-1296,613.8-2195.8,464.5-3145.4c-38.3-248.9-61.3-616.5-38.3-643.3c32.5-38.3,9115.1-40.2,9145.7-1.9c30.6,34.5-5.7,478.6-63.2,788.8C9208.2-1376.4,8011.6-5.6,6441.7,511.4c-304.4,99.6-666.3,181.9-899.8,202.9c-139.8,13.4-139.8,13.4-139.8,70.8c0,222.1-199.1,421.2-413.5,413.5C4957.9,1196.8,4902.4,1187.2,4866,1175.7z M5132.1,1032.1c76.6-40.2,135.9-139.8,135.9-224v-59.4h-268h-268v59.4c0,135.9,126.4,258.5,268,258.5C5036.4,1066.6,5097.7,1051.3,5132.1,1032.1z M5545.7,578.4c777.3-93.8,1502.9-384.8,2134.7-859.6c243.2-181.9,631.8-561,821.3-804.1c494-629.9,804.1-1372.7,913.2-2174.9c13.4-111,26.8-250.8,26.8-310.2v-111H4996.2H552.6l11.5,197.2c51.7,821.3,386.7,1694.4,915.1,2374c241.2,310.2,580.1,639.5,882.6,863.5C2980.2,207,3744.1,503.7,4502.2,586C4728.2,609,5314,605.2,5545.7,578.4z" />
                      <path d="M4718.6,185.9c-135.9-21.1-158.9-30.6-158.9-72.8c0-68.9,42.1-82.3,183.8-61.3c72.7,9.6,206.8,19.2,296.7,19.2c176.1,0,237.4,23,224,88.1c-5.7,32.5-24.9,36.4-225.9,38.3C4917.7,199.3,4772.2,193.6,4718.6,185.9z" />
                      <path d="M3730.7-72.6c-528.4-214.4-957.3-509.3-1374.7-940c-568.6-589.7-940-1340.2-1056.8-2142.4c-30.6-201-23-239.3,45.9-239.3c47.9,0,53.6,11.5,91.9,252.7c68.9,419.3,172.3,739,359.9,1116.2c421.2,850.1,1150.6,1506.7,2060,1857.1c176.1,67,187.6,74.7,181.9,122.5C4029.4,28.9,3966.2,25.1,3730.7-72.6z" />
                      <path d="M106.5-4133.3c-19.1-76.6,5.8-231.7,55.5-340.8c65.1-139.8,162.7-243.2,304.4-319.7l120.6-65.1h4403.4h4403.4l107.2,49.8c147.4,68.9,254.6,170.4,321.7,306.3c59.3,118.7,91.9,289.1,70.8,371.4l-11.5,47.9H5000H118L106.5-4133.3z M9759.5-4288.4c-7.6-40.2-36.4-120.6-65.1-178c-57.4-114.9-178-212.5-306.3-248.9c-97.7-26.8-8678.6-26.8-8776.2,0c-128.3,36.4-248.9,134-306.3,248.9c-28.7,57.4-57.4,137.9-65.1,178l-11.5,70.8h4771h4771L9759.5-4288.4z" />
                    </g>
                  </g>
                </svg>
                {t("CampgroundComponents.BodyCom.reservation.Lunch")}
              </div>
            )}
            {props.campground.facilities.dinner && (
              <div>
                <svg
                  className="me-1"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enable-background="new 0 0 1000 1000"
                  xmlSpace="preserve"
                  width="20"
                  height="20"
                >
                  <g>
                    <path d="M10,859.5c90.7-95.3,181-191.2,272.2-285.7c64.4-66.6,130-131.3,197.7-199.5c-39.2-44.1-34.2-83,4-122.5c58.5-60.4,115.4-123.2,172.1-186.4c15.2-17,26.9-39.2,40.2-59c6.4,0,12.7,0,19.1,0c-2.9,19.9-0.4,47.4-9.7,58.5c-41.2,48.9-86.7,91.7-128.2,140.1c-8.5,10-6.3,34.9-9.1,52.9c18.6,2.4,42.6,15.4,54.7,5.1c39-33,73.6-74.3,109.7-112.7c6.1-6.5,10.4-18.1,17.1-20.6c17.2-6.6,35.2-9.4,52.9-13.7c-7,19.8-10.4,44.5-21.8,58.3c-29.5,35.6-63.7,64.9-93.9,99.6c-17.6,20.3-47.8,44.5-23.5,79.4c23.4,33.7,47.7,9,69.3-15.6c37.5-42.6,75.5-85,115.7-123.2c10.7-10.2,30.5-4.6,46.2-6.2c-6.5,15.2-10.3,34.2-19.9,45c-64.6,73.1-129.4,146.3-196.7,215.3c-16.6,17-49.4,33.9-63.4,24.2c-46.2-32.1-71.7,7.6-97.5,37.1C386.5,679.5,257.5,831.6,127.9,983c-2,2.3-2.4,7-3.5,10.5c-15.9,0-31.8,0-47.7,0c-22.2-28.4-44.5-56.9-66.7-85.3C10,892,10,875.7,10,859.5z" />
                    <path d="M491.2,654.1c40.2-39.4,66.4-110.9,134.3-87.2c4.4,1.5,10.3,1.8,14.1-0.7c62.2-41.9,98,17.4,137.3,59.3C838,690.9,898.2,758,958.3,825c27,30,46.5,61.9,16.8,108.3c-33,51.5-83.8,69.6-115.9,34.3C798.7,901,739.8,832,680.6,763.6c-26.8-30.9-51.7-64.6-79.7-93.4c-8.1-8.3-24-6.6-36.1-5.7c-23.4,1.8-46.6,6.3-70,9.7C493.6,667.5,492.4,660.8,491.2,654.1z" />
                    <path d="M308.1,437.6c-50.8-62.2-106.7-129.4-161.4-198c-32-40.1-42.4-90.1-31-145.4C131,20.7,199-6.5,244.1,43.3c52.3,57.6,103.5,116.9,154.6,176.2c5.9,6.9,13.9,23.2,11.8,27.1C376.9,309.8,406.1,421.6,308.1,437.6z" />
                  </g>
                </svg>
                {t("CampgroundComponents.BodyCom.reservation.Dinner")}
              </div>
            )}
          </div>
        </div>
        {parking}
        <div className="p-3">
          <a className="btn btn-primary w-100 rounded-0" href="#ReV">
            {t("CampgroundComponents.BodyCom.reservation.Reserve")}
          </a>
        </div>
      </div>
    </>
  );
}
