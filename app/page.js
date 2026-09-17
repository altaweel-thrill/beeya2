"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSnapchat,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faArrowLeft,
  faLocationDot,
  faPhone,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

const accounts = {
  tiktok: "https://www.tiktok.com/@beeya.protection?_r=1&_t=ZS-99m1i21kvDh",
  snapchat: "https://www.snapchat.com/@beeyaprotection?share_id=qIbASw2ZTrClgCXABDHTVg&locale=en_SA@calendar=gregorian",
  instagram: "https://www.instagram.com/beeya.protection?stkn=MWo3bnJsc2dnZDN6cA%3D%3D&utm_source=qr",
  maps: "https://maps.app.goo.gl/t48mruzs3jwBPrC67?g_st=iw",
  phone: "tel:+966556926228",
  whatsapp: "https://wa.me/966556926228",
};

const links = [
  { title: "TikTok", subtitle: "شاهدوا أحدث مقاطعنا", href: accounts.tiktok, icon: "tiktok" },
  { title: "Instagram", subtitle: "تابعوا يوميات Beeya", href: accounts.instagram, icon: "instagram" },
  { title: "Snapchat", subtitle: "أضيفونا على سناب شات", href: accounts.snapchat, icon: "snapchat" },
  { title: "Google Maps", subtitle: "موقعنا على الخريطة", href: accounts.maps, icon: "map" },
  { title: "اتصل بنا", subtitle: "يسعدنا سماعكم", href: accounts.phone, icon: "phone" },
  { title: "WhatsApp", subtitle: "تواصلوا معنا مباشرة", href: accounts.whatsapp, icon: "whatsapp", featured: true },
];

const iconMap = {
  share: faShareNodes,
  instagram: faInstagram,
  tiktok: faTiktok,
  snapchat: faSnapchat,
  map: faLocationDot,
  phone: faPhone,
  whatsapp: faWhatsapp,
  arrow: faArrowLeft,
};

function Icon({ name, size = 24 }) {
  return (
    <FontAwesomeIcon
      icon={iconMap[name]}
      aria-hidden="true"
      style={{ width: size, height: size }}
    />
  );
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
              target={link.icon === "phone" || link.download ? undefined : "_blank"}
              rel={link.icon === "phone" || link.download ? undefined : "noopener noreferrer"}
              download={link.download ? "Bilal-Alfarran.vcf" : undefined}
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
