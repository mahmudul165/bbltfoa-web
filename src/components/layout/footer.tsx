import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
  </svg>
);

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon, hover: "hover:bg-[#1877F2]" },
  { label: "YouTube",  href: "https://www.youtube.com/",  Icon: YoutubeIcon,  hover: "hover:bg-[#FF0000]" },
];

const pages = [
  { label: "About BBLTFOA",       href: "/about"               },
  { label: "President's Message", href: "/president-message"   },
  { label: "Executive Committee", href: "/executive-committee" },
  { label: "Member Directory",    href: "/members"             },
  { label: "Tea Industry",        href: "/tea-industry"        },
  { label: "Statistics",          href: "/statistics"          },
];

const resources = [
  { label: "News & Media",     href: "/news"         },
  { label: "Policy Advocacy",  href: "/policy"       },
  { label: "Events & Training",href: "/events"       },
  { label: "Publications",     href: "/publications" },
  { label: "Gallery",          href: "/gallery"      },
  { label: "Contact Us",       href: "/contact"      },
];

export function Footer() {
  return (
    <footer className="gradient-tea text-white">

      {/* Main */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform drop-shadow-lg">
                <Image src="/logo.png" alt="BBLTFOA Logo" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-base font-bold leading-tight tracking-tight">BBLTFOA</div>
                <div className="text-[10px] text-white/65 mt-0.5">Est. 1998</div>
              </div>
            </Link>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              As an association, we remain committed to promoting quality tea production,
              sustainable agricultural practices, technological advancement, environmental
              responsibility, and the welfare of all stakeholders connected with the bought
              leaf tea industry.
            </p>
            <div className="text-xs text-white/30 leading-relaxed mb-5">
              House #28, Road #28, 1st Floor,<br />
              Block-K, Banani, Dhaka 1213
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-white/10 ${hover} text-white flex items-center justify-center transition-colors duration-200`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">Organisation</h4>
            <ul className="space-y-2.5">
              {pages.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {resources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">Contact</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/75 leading-relaxed">
                  House #28, Road #28, 1st Floor, Block-K,<br />
                  Banani, Dhaka 1213, Bangladesh
                </span>
              </li>
              <li>
                <a href="tel:+88024881063" className="flex items-center gap-3 text-sm text-white/75 hover:text-gold transition-colors">
                  <Phone size={13} className="text-gold shrink-0" />
                  +880 2 4881 0638 / 0639 / 0640
                </a>
              </li>
              <li>
                <a href="mailto:bbltfoanb@gmail.com" className="flex items-center gap-3 text-sm text-white/75 hover:text-gold transition-colors">
                  <Mail size={13} className="text-gold shrink-0" />
                  bbltfoanb@gmail.com
                </a>
              </li>
              <li className="text-xs text-white/30 pt-1">
                Office: Sun–Thu, 9:00 AM – 5:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[.07]">
        <div className="section-container py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>© {new Date().getFullYear()} BBLTFOA. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <a href="https://bbltfoa.org.bd" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
              bbltfoa.org.bd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
