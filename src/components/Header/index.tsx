import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-[100000] w-full h-24 bg-white/10">
        <Image
          src="/images/chinet-icon.png"
          alt="Logo"
          width={100}
          height={100}
          priority
          className="absolute top-0 left-0 -z-10 m-4 h-16 w-auto rounded-full opacity-30"
        />
        <div className="flex items-center justify-between h-full text-white p-6">
          <h1 className="text-3xl font-extrabold ml-4">地球っ子ネットワーク</h1>
          <nav>
            <ul className="flex gap-8 font-bold">
              <li>ご挨拶</li>
              <li>活動内容</li>
              <li>お知らせ</li>
              <li>団体情報</li>
              <li>お問い合わせ</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
