"use client";

import Image from "next/image";
import { useState } from "react";

const accounts = {
  tiktok: "https://vt.tiktok.com/ZSXDnd2Qc/",
  snapchat: "https://snapchat.com/t/sMLfLiEJ",
  instagram: "https://www.instagram.com/p/DasUIF1jLBr/?igsh=MWQ4YWUwYnFwNWE0bg==",
  maps: "https://maps.app.goo.gl/geCFB3AthX9LxFVUA?g_st=iw",
  phone: "tel:+966561817777",
  whatsapp: "https://wa.me/966561817777",
};

const links = [
  { title: "TikTok", subtitle: "شاهدوا أحدث مقاطعنا", href: accounts.tiktok, icon: "tiktok" },
  { title: "Instagram", subtitle: "تابعوا يوميات Beeya", href: accounts.instagram, icon: "instagram" },
  { title: "Snapchat", subtitle: "أضيفونا على سناب شات", href: accounts.snapchat, icon: "snapchat" },
  { title: "Google Maps", subtitle: "موقعنا على الخريطة", href: accounts.maps, icon: "map" },
  { title: "اتصل بنا", subtitle: "يسعدنا سماعكم", href: accounts.phone, icon: "phone" },
  { title: "WhatsApp", subtitle: "تواصلوا معنا مباشرة", href: accounts.whatsapp, icon: "whatsapp", featured: true },
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "share") return <svg {...common}><circle cx="18" cy="5" r="2.2"/><circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="19" r="2.2"/><path d="m8 11 8-5M8 13l8 5"/></svg>;
  if (name === "instagram") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>;
  if (name === "tiktok") return <svg {...common}><path d="M15 4v10.2a4.2 4.2 0 1 1-3.2-4.1"/><path d="M15 4c.7 2.3 2 3.7 4 4"/></svg>;
  if (name === "snapchat") return <svg {...common}><path d="M12 3.2c-2.8 0-4.4 2.2-4.4 5.1 0 .8.1 1.5 0 2-.2.5-.8.7-1.5 1-.8.3-1.2.7-.9 1.3.2.4.8.6 1.7.7.3 1.3 1.2 2.1 2.5 2.4.2.7.5 1.1 1.1 1 .5-.1 1-.3 1.5-.3s1 .2 1.5.3c.6.1.9-.3 1.1-1 1.3-.3 2.2-1.1 2.5-2.4.9-.1 1.5-.3 1.7-.7.3-.6-.1-1-.9-1.3-.7-.3-1.3-.5-1.5-1-.1-.5 0-1.2 0-2 0-2.9-1.6-5.1-4.4-5.1Z"/></svg>;
  if (name === "map") return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>;
  if (name === "phone") return <svg {...common}><path d="M6.6 3.8 9 7.4 7.5 9a15.2 15.2 0 0 0 7.5 7.5l1.6-1.5 3.6 2.4c.5.3.7.9.4 1.4-.7 1.4-2.2 2.2-3.8 2-6.9-1-12.6-6.7-13.6-13.6-.2-1.6.6-3.1 2-3.8.5-.3 1.1-.1 1.4.4Z"/></svg>;
  if (name === "whatsapp") return <svg {...common}><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.4 7.7c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.8c.1.3 0 .5-.1.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.6.6-1.5.8-2.5.5-1.1-.3-2.6-.8-4.3-2.3-1.4-1.3-2.4-2.9-2.7-4-.4-1.2 0-1.9.3-2.3.4-.4.9-.7 1.6-.9Z"/></svg>;
  return <svg {...common}><path d="M19 12H5M10 7l-5 5 5 5"/></svg>;
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function sharePage() {
    const data = { title: "Beeya", text: "روابط Beeya الرسمية", url: window.location.href };
    if (navigator.share) {
      await navigator.share(data).catch(() => {});
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <main className="page-shell">
      <div className="ambient ambient-top" aria-hidden="true" />
      <div className="ambient ambient-bottom" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <section className="profile-card" aria-labelledby="profile-name">
        <button className="share-button" onClick={sharePage} aria-label="مشاركة الصفحة">
          <Icon name="share" size={20} />
        </button>

        <header className="profile-header">
          <Image
            className="brand-logo"
            src="/beeya-logo.png"
            alt="Beeya"
            width={969}
            height={199}
            priority
          />
          <h1 id="profile-name" className="sr-only">Beeya</h1>
          <p className="intro">كل روابطنا في مكان واحد</p>
          <span className="gold-line" aria-hidden="true" />
        </header>

        <nav className="links-list" aria-label="روابط Beeya الرسمية">
          {links.map((link, index) => (
            <a
              className={`link-card${link.featured ? " featured" : ""}`}
              href={link.href}
              key={link.title}
              target={link.icon === "phone" ? undefined : "_blank"}
              rel={link.icon === "phone" ? undefined : "noopener noreferrer"}
              style={{ "--delay": `${100 + index * 70}ms` }}
            >
              <span className="link-icon"><Icon name={link.icon} /></span>
              <span className="link-copy">
                <strong>{link.title}</strong>
                <small>{link.subtitle}</small>
              </span>
              <span className="arrow"><Icon name="arrow" size={19} /></span>
            </a>
          ))}
        </nav>

        <footer>
          <p>© {new Date().getFullYear()} Beeya</p>
          <span>الروابط الرسمية</span>
        </footer>
      </section>

      <div className={`toast ${copied ? "show" : ""}`} role="status" aria-live="polite">
        تم نسخ رابط الصفحة
      </div>
    </main>
  );
}
