import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18next";

export default function Description(props) {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="my-4">
      <p>{props.description}</p>

      <p className="text-primary text-center">
        {t("CampgroundComponents.BodyCom.DescCom.Missing some information?")}{" "}
        <a className="text-decoration-none fw-bold" href="#">
          {t("CampgroundComponents.BodyCom.DescCom.Yes")}
        </a>
        /
        <a className="text-decoration-none fw-bold" href="#">
          {t("CampgroundComponents.BodyCom.DescCom.No")}
        </a>
      </p>
    </div>
  );
}
