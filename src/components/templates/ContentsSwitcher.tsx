import React from "react";
import { CategoryName, Profile } from "../../types";
import { ContactForm } from "../ContactForm";
import { ProfileList } from "../ProfileList";

const profileList: Profile[] = [
  {
    name: "濵田広大",
    avator: "",
    introduction: "フロントエンジニア/マネジメント",
  },
  {
    name: "西川直志",
    avator: "",
    introduction: "サーバーサイドエンジニア/インフラエンジニア",
  },
  {
    name: "山田侑樹",
    avator: "",
    introduction: "フロントエンジニア/機械学習エンジニア",
  },
  {
    name: "中村海斗",
    avator: "",
    introduction: "インフラエンジニア",
  },
  {
    name: "稲富惇英",
    avator: "",
    introduction: "Androidエンジニア",
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
    default:
      break;
  }
}

export function ContentsSwitcher(props: Props) {
  const { contentType } = props;
  return <>{switcher(contentType)}</>;
}
