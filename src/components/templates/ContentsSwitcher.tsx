import React from "react";
import { CategoryName, Product, Profile } from "../../types";
import { ContactForm } from "../ContactForm";
import { ProductList } from "../ProductList";
import { ProfileList } from "../ProfileList";

const productList: Product[] = [
  {
    name: "塾管理システム 「SHS Web」",
    linkName: "shs_web",
    imgSrc: "/img/product/shs_web.png",
  },
  {
    name: "レシピ共有アプリ「Gran Cook」",
    linkName: "gran_cook",
    imgSrc: "/img/product/gran_cook.png",
  },
  {
    name: "割り勘計算ネイティブアプリ 「Presto Pay」",
    linkName: "presto_pay",
    imgSrc: "/img/product/presto_pay.png",
  },
  {
    name: "書籍フリマネイティブアプリ 「Gran Book」",
    linkName: "gran_book",
    imgSrc: "/img/product/gran_book.png",
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
    introduction: "Server side engineer/Infrastructure engineer",
  },
  {
    name: "Yuki Yamada",
    avator: "/img/profile/user2.png",
    introduction:
      "Frontend engineer/Machine learning engineer/Server side engineer",
  },
  {
    name: "Kaito Nakamura",
    avator: "/img/profile/user3.png",
    introduction: "Infrastructure engineer/Sales",
  },
  {
    name: "Atsuhide Inatomi",
    avator: "/img/profile/user4.png",
    introduction: "Frontend engineer/Android engineer",
  },
  {
    name: "Hazuki Nishiguchi",
    avator: "/img/profile/user5.jpg",
    introduction: "Designer"
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
