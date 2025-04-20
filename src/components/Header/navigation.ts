interface NavigationType {
  name: string;
  href: string;
  inTopPage?: boolean;
}

export const headerNavigation: NavigationType[] = [
  {
    name: "ご挨拶",
    href: "greeting",
    inTopPage: true,
  },
  {
    name: "活動内容",
    href: "activities",
    inTopPage: true,
  },
  {
    name: "お知らせ",
    href: "news",
    inTopPage: false,
  },
  {
    name: "団体情報",
    href: "information",
    inTopPage: true,
  },
  {
    name: "お問い合わせ",
    href: "contact",
    inTopPage: false,
  },
];
