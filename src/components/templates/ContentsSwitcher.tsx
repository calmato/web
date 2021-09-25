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
    avator: "",
    introduction: "PO/Frontend engineer/Android engineer",
  },
  {
    name: "Tadashi Nishikawa",
    avator: "",
    introduction: "Server side engineer/Infrastructure engineer",
  },
  {
    name: "Yuki Yamada",
    avator: "",
    introduction: "Frontend engineer/Machine learning engineer/Server side engineer",
  },
  {
    name: "Kaito Nakamura",
    avator: "",
    introduction: "Infrastructure engineer/Sales",
  },
  {
    name: "Atsuhide Inatomi",
    avator: "",
    introduction: "Frontend engineer/Android engineer",
  },
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
