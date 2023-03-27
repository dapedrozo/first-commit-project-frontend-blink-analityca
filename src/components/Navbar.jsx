import React, { useState } from "react";
import { close, logo2, menu } from "../assets";
import { Dropdown } from "flowbite-react";
import {useTranslation} from 'react-i18next'

const Navbar = () => {

  const [toogle, setToogle] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    {
      id: "home",
      title: t("Home"),
    },
    {
      id: "features",
      title: t("Features"),
    },
    {
      id: "product",
      title: t("Products"),
    },
    {
      id: "clients",
      title: t("Clients"),
    },
  ];
  
  const handleLangChange = (lang) => { 
    //https://spontaneous-pudding-bcc5f1.netlify.app/
    //http://localhost:5173/
    let loc = "https://spontaneous-pudding-bcc5f1.netlify.app/";
    window.location.replace(loc + "?lng=" + lang);
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo2} alt="blinkAnalityca" className="w-[128px] h-[38px]" loading="lazy" decoding="async"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[16px] ml-10 mr-0 text-white">
              <Dropdown label={t("Languages")} inline={true}>
                <Dropdown.Item onClick={()=>handleLangChange('es')}>{t('SelectLangEs')}</Dropdown.Item>
                <Dropdown.Item onClick={()=>handleLangChange('en')}>{t('SelectLangEn')}</Dropdown.Item>
              </Dropdown>
            </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toogle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToogle((prev) => !prev)}
          loading="lazy" decoding="async"
        />
        <div
          className={`${
            toogle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-col flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <li className="font-poppins font-normal cursor-pointer text-[16px] mr-0 mt-4 text-white">
              <Dropdown label="Languages" inline={true}>
                <Dropdown.Item>Spanish</Dropdown.Item>
                <Dropdown.Item>English</Dropdown.Item>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
