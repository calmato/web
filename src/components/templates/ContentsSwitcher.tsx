import React from "react";
import { CategoryName, Product, Profile } from "../../types";
import { ContactForm } from "../ContactForm";
import { ProductList } from "../ProductList";
import { ProfileList } from "../ProfileList";

const productList: Product[] = [
  {
    name: "塾管理システム 「SHS Web」",
    linkName: "shs_web",
    imgSrc: "/img/product/shs_web/1.png",
  },
  {
    name: "農園向けECサイト 「瀬戸内大崎上島農園」",
    linkName: "kamijima_farm",
    imgSrc: "/img/product/kamijima_farm/1.png",
  },
  {
    name: "スニーカーECサイト 「Qengine sports」",
    linkName: "qengine_sports",
    imgSrc: "/img/product/qengine_sports/1.png",
  },
  {
    name: "レシピ共有アプリ「Gran Cook」",
    linkName: "gran_cook",
    imgSrc: "/img/product/gran_cook/1.png",
  },
  {
    name: "割り勘計算アプリ 「Presto Pay」",
    linkName: "presto_pay",
    imgSrc: "/img/product/presto_pay/4.png",
  },
  {
    name: "書籍フリマアプリ 「Gran Book」",
    linkName: "gran_book",
    imgSrc: "/img/product/gran_book/1.png",
  },
  {
    name: "シフト管理システム「2HS WEB」",
    linkName: "2hs_web",
    imgSrc: "/img/product/2hs_web/1.png",
  },
];

const profileList: Profile[] = [
  {
    name: "Kodai Hamada",
    avator: "/img/profile/user0.jpg",
    introduction: "PO/Frontend engineer/Android engineer",
  },
  {
    name: "Tadashi Nishikawa",
    avator: "/img/profile/user1.png",
    introduction: "Backend engineer/Infrastructure engineer",
  },
  {
    name: "Yuki Yamada",
    avator: "/img/profile/user2.png",
    introduction:
      "Frontend engineer/Machine learning engineer/Backend engineer",
  },
  {
    name: "Daisuke Serikawa",
    avator: "/img/profile/serikawa.jpg",
    introduction: "Sales",
  },
  {
    name: "Kaito Nakamura",
    avator: "/img/profile/user3.png",
    introduction: "Infrastructure engineer",
  },
  {
    name: "Atsuhide Inatomi",
    avator: "/img/profile/user4.png",
    introduction: "Frontend engineer/Android engineer",
  },
  {
    name: "Hazuki Nishiguchi",
    avator: "/img/profile/user5.jpg",
    introduction: "Designer/Marketing"
  },
  {
    name: "Yuto Hagiwara",
    avator: "/img/profile/hagiwara.jpg",
    introduction: "Backend engineer"
  }
];

interface Props {
  contentType: CategoryName;
}

function switcher(contentType: CategoryName) {
  switch (contentType) {
    case "Contact":
      return <ContactForm />;
    case "Profile":
      return <ProfileList profileList={profileList} />;
    case "Product":
      return <ProductList productList={productList} />;
    default:
      break;
  }
}

export function ContentsSwitcher(props: Props) {
  const { contentType } = props;
  return <>{switcher(contentType)}</>;
}
