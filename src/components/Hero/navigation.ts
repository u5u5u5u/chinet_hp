interface NavigationType {
  title: string;
  sub_title?: string;
  href: string;
}

export const heroNavigation: NavigationType[] = [
  {
    title: "News",
    sub_title: "お知らせ",
    href: "/news/",
  },
  {
    title: "Contact",
    sub_title: "お問い合わせ",
    href: "/contact",
  },
];
