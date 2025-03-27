const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center space-y-8 py-10">
      <div className="flex justify-between items-center container mx-auto px-4">
        <p className="text-2xl">地球っ子ネットワーク</p>
        <nav>
          <ul className="flex space-x-6">
            <li>ご挨拶</li>
            <li>活動内容</li>
            <li>お知らせ</li>
            <li>団体情報</li>
            <li>お問い合わせ</li>
          </ul>
        </nav>
      </div>
      <p className="text-xs">&copy; 2025 地球っ子ネットワーク</p>
    </footer>
  );
};

export default Footer;
