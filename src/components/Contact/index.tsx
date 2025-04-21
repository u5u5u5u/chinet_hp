"use client";
import Input from "@/components/Inputs/Input";
import Textarea from "@/components/Inputs/Textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async () => {
    const res = await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfFsTf2YT_xrZasI5PFzcE47e3JeLk6UdUxE6Db0uwOQIB6hw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "entry.1591240883": formData.name,
          "entry.152476375": formData.organization,
          "entry.555870479": formData.email,
          "entry.1087619992": formData.phone,
          "entry.2063429848": formData.message,
        }),
      }
    );
    if (res) {
      alert("お問い合わせが送信されました。");
    } else {
      alert("お問い合わせの送信に失敗しました。");
    }
  };

  return (
    <div className="w-full px-6 py-36 flex flex-col items-center">
      <div className="flex flex-col items-center max-w-screen-lg bg-slate-200 px-9 py-12 rounded-lg text-gray-800 max-md:px-4 max-md:py-6">
        <p className="text-lg mb-4 max-md:text-base max-md:px-2 max-md:py-3">
          お問い合わせは、以下のフォームからお願いいたします。
          <br />
          返信にはお時間をいただく場合がございますので、あらかじめご了承ください。
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <Input
            label="お名前"
            name="entry.1591240883"
            type="text"
            required
            placeholder="山田 太郎"
            className="mb-4"
            autoComplete="name"
            autoFocus
            maxLength={50}
            minLength={2}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="会社名/学校名"
            name="entry.152476375"
            type="text"
            required
            placeholder="株式会社〇〇"
            className="mb-4"
            autoComplete="organization"
            maxLength={50}
            minLength={2}
            onChange={(e) =>
              setFormData({ ...formData, organization: e.target.value })
            }
          />
          <Input
            label="メールアドレス"
            name="entry.555870479"
            type="email"
            required
            placeholder="example@example.com"
            className="mb-4"
            autoComplete="email"
            maxLength={100}
            minLength={5}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            label="電話番号"
            name="entry.1087619992"
            type="tel"
            required
            placeholder="090-1234-5678"
            className="mb-4"
            autoComplete="tel"
            maxLength={15}
            minLength={10}
            pattern="^\d{2,4}-\d{2,4}-\d{4}$"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Textarea
            label="お問い合わせ内容"
            name="entry.2063429848"
            required
            placeholder="お問い合わせ内容を入力してください。"
            className="mb-4"
            autoComplete="off"
            maxLength={500}
            minLength={10}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 float-right"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
