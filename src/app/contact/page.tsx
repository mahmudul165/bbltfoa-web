"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import type { ContactFormValues } from "@/types/bbtfoa";

const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["House #28, Road #28, 1st Floor", "Block-K, Banani, Dhaka 1213", "Bangladesh"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+880 2 4881 0638", "+880 2 4881 0639", "+880 2 4881 0640"],
    href: "tel:+88024881063",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["bbltfoanb@gmail.com"],
    href: "mailto:bbltfoanb@gmail.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Sunday – Thursday", "9:00 AM – 5:00 PM (BST)"],
  },
];

const subjects = [
  "General Enquiry",
  "Membership Application",
  "Training / Event Registration",
  "Policy Submission",
  "Media / Press",
  "Complaint / Grievance",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent! We will respond within 2 working days.");
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with the BBLTFOA Secretariat. We respond within two working days."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="section-py bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Contact info column */}
            <div className="lg:col-span-2 space-y-5">
              <div className="reveal-left">
                <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Get in Touch</div>
                <h2 className="text-2xl font-bold text-foreground">We would Love to Hear From You</h2>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  Whether you are a factory owner, prospective member, researcher, or journalist,
                  BBLTFOA is here to help.
                </p>
              </div>

              {contactInfo.map(({ icon: Icon, title, lines, href }, idx) => (
                <div
                  key={title}
                  className="reveal bg-white rounded-xl border border-border p-5 flex gap-4 hover:shadow-md transition-shadow duration-200"
                  data-delay={String(idx * 80)}
                >
                  <div className="w-10 h-10 rounded-lg bg-tea-pale flex items-center justify-center text-tea-green shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    {lines.map((line, i) =>
                      i === 0 && href ? (
                        <a key={line} href={href} className="text-sm text-muted-foreground hover:text-tea-green transition-colors block">
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-sm text-muted-foreground">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form + Map column */}
            <div className="lg:col-span-3 space-y-6">
              <div className="reveal-right bg-white rounded-2xl border border-border p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle size={52} className="text-tea-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting BBLTFOA. Our secretariat will respond within 2 working days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="text-lg font-bold text-foreground mb-2">Send Us a Message</h3>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name <span className="text-bd-red">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-tea-green/30 focus:border-tea-green transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Email Address <span className="text-bd-red">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-tea-green/30 focus:border-tea-green transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                        <input
                          id="phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="+880..."
                          className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-tea-green/30 focus:border-tea-green transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                          Subject <span className="text-bd-red">*</span>
                        </label>
                        <select
                          id="subject" name="subject" required
                          value={form.subject} onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-tea-green/30 focus:border-tea-green transition-colors bg-white"
                        >
                          <option value="">Select a subject</option>
                          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message <span className="text-bd-red">*</span>
                      </label>
                      <textarea
                        id="message" name="message" rows={4} required
                        value={form.message} onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-2.5 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-tea-green/30 focus:border-tea-green transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit" disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Google Maps embed — Banani, Dhaka */}
              <div className="reveal rounded-2xl overflow-hidden border border-border shadow-sm">
                <div className="bg-white px-5 py-3 border-b border-border flex items-center gap-2">
                  <MapPin size={16} className="text-tea-green" />
                  <span className="text-sm font-semibold text-foreground">
                    Find Us — House #28, Road #28, Block-K, Banani, Dhaka 1213
                  </span>
                </div>
                <iframe
                  title="BBLTFOA Office Location — Banani, Dhaka"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.209491636754!2d90.40185007538288!3d23.79356728708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7157ccf7ac3%3A0xfc5e28cc88e95855!2sBanani%2C%20Dhaka%201213!5e0!3m2!1sen!2sbd!4v1717000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}