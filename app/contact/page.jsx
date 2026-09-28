import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sprout,
  Wheat,
} from "lucide-react";

import HeroCarousel from "@/components/home/HeroCarousel";

export const metadata = {
  title: "Contact Us | AfriBEST SEEDS",
  description:
    "Contact AfriBEST SEEDS through our head office, regional zones, phone, email, WhatsApp, Facebook and Instagram.",
};

const branches = [
  {
    name: "Headquarters",
    location: "Arusha",
    phones: ["+255 714 199 128", "+255 682 510 710"],
    image:
      "images/carrot.jpg",
  },
  {
    name: "Southern Zone",
    location: "Southern Tanzania",
    phones: ["+255 677 242 791"],
    image:
      "images/okra.jpeg",
  },
  {
    name: "Northern Zone",
    location: "Northern Tanzania",
    phones: ["+255 756 321 662"],
    image:
      "images/saro.jpeg",
  },
  {
    name: "Lake Zone",
    location: "Lake Zone",
    phones: ["+255 712 216 292"],
    image:
      "images/michihili1.jpeg",
  },
  {
    name: "Eastern Zone",
    location: "Eastern Tanzania",
    phones: ["+255 743 916 626"],
    image:
      "images/mustard1.jpg",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    username: "Afribest Seeds",
    href: "https://www.facebook.com/afribestseeds",
    icon: Facebook,
    description: "Follow our latest updates",
  },
  {
    name: "Instagram",
    username: "@afribestseeds",
    href: "https://www.instagram.com/afribestseeds",
    icon: Instagram,
    description: "See our products & farming stories",
  },
  {
    name: "WhatsApp",
    username: "+255 682 510 710",
    href: "https://wa.me/255682510710",
    icon: MessageCircle,
    description: "Chat with our team directly",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#063d29] md:min-h-[760px]">

        {/* Hero carousel is now handled by the separate Client Component */}
        <HeroCarousel />

        {/* Bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white via-white/70 to-transparent" />

      </section>

      {/* =========================================================
          MAIN CONTACT + MAP
      ========================================================= */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl lg:grid-cols-2">
            {/* CONTACT INFORMATION */}
            <div className="bg-[#F3FBF7] p-7 sm:p-10 lg:p-12">
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
                  <MapPin className="h-5 w-5" />
                  Contact Information
                </div>

                <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl">
                  Let&apos;s talk about seeds and farming
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Reach AfriBEST SEEDS through our head office or connect with
                  us through your nearest regional zone.
                </p>
              </div>

              {/* HEAD OFFICE */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#075C3A] text-white shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                      Head Office
                    </p>

                    <h3 className="mt-1 text-lg font-black text-[#123B2A]">
                      AfriBEST SEEDS
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Plot #432, Moshono Arusha,
                      <br />
                      Along Nelson Mandela Road
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#075C3A] text-white shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                      Phone
                    </p>

                    <a
                      href="tel:+255682510710"
                      className="mt-1 block text-lg font-black text-[#123B2A] transition-colors hover:text-[#00A863]"
                    >
                      +255 682 510 710
                    </a>

                    <p className="mt-1 text-sm text-slate-500">
                      Main office contact
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#075C3A] text-white shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                      Email
                    </p>

                    <a
                      href="mailto:sales@afribestseeds.com"
                      className="mt-1 block text-lg font-black text-[#123B2A] transition-colors hover:text-[#00A863]"
                    >
                      sales@afribestseeds.com
                    </a>

                    <p className="mt-1 text-sm text-slate-500">
                      Send us your enquiry
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="mt-10 border-t border-[#075C3A]/10 pt-8">
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                    Follow & Connect
                  </p>

                  <h3 className="mt-1 text-xl font-black text-[#123B2A]">
                    Stay connected with AfriBEST
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Follow us for product updates, farming information and
                    company news.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border border-white bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF8F1] text-[#075C3A] transition-colors group-hover:bg-[#00A863] group-hover:text-white">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-black text-[#123B2A]">
                              {social.name}
                            </p>

                            <p className="truncate text-xs font-medium text-slate-500">
                              {social.username}
                            </p>
                          </div>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-slate-500">
                          {social.description}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="relative min-h-[500px] overflow-hidden bg-slate-100 lg:min-h-full">
              <iframe
                title="AfriBEST SEEDS Head Office Location"
                src="https://www.google.com/maps?q=AfriBEST+SEEDS+COMPANY+LTD,+Moshono,+Arusha,+Tanzania&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* MAP OVERLAY CARD */}
              <div className="pointer-events-none absolute left-5 right-5 top-5 sm:left-7 sm:right-auto sm:max-w-sm">
                <div className="rounded-2xl border border-white/50 bg-white/95 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00A863] text-white">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#00A863]">
                        Visit Our Head Office
                      </p>

                      <h3 className="mt-1 text-base font-black text-[#123B2A]">
                        Moshono, Arusha
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Plot #432, Along Nelson Mandela Road
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DIRECTIONS */}
              <div className="absolute bottom-5 left-5 sm:left-7">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=AfriBEST+SEEDS+COMPANY+LTD,+Moshono,+Arusha,+Tanzania"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto inline-flex items-center rounded-xl bg-[#075C3A] px-5 py-3 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:bg-[#00A863]"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRANCHES INTRO
      ========================================================= */}
      <section className="bg-[#F5FBF8] px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#00A863]">
                <MapPin className="h-5 w-5" />
                Our Branches
              </div>

              <h2 className="text-3xl font-black text-[#123B2A] sm:text-4xl lg:text-5xl">
                Regional Contacts
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                AfriBEST SEEDS has contact points across different zones. Reach
                the team in your region directly using the numbers below.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-[#00A863]/10 bg-white px-6 py-5 shadow-sm">
                <p className="text-sm font-black italic text-[#075C3A]">
                  &quot;Pure Seeds for Better Yield&quot;
                </p>
                <div className="mt-2 h-1 w-20 rounded-full bg-[#00A863]" />
              </div>
            </div>
          </div>

          {/* BRANCH CARDS */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {branches.map((branch) => (
              <article
                key={branch.name}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Branch Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={`${branch.name} agricultural region`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#075C3A] shadow-md">
                      {branch.location}
                    </span>
                  </div>
                </div>

                {/* Branch Details */}
                <div className="p-5">
                  <h3 className="text-lg font-black text-[#123B2A]">
                    {branch.name}
                  </h3>

                  <div className="mt-4 space-y-2">
                    {branch.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#00A863]"
                      >
                        <Phone className="h-4 w-4 shrink-0 text-[#00A863]" />
                        {phone}
                      </a>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <a
                      href={`tel:${branch.phones[0].replace(/\s/g, "")}`}
                      className="inline-flex items-center text-sm font-bold text-[#00A863] transition-colors hover:text-[#075C3A]"
                    >
                      Call this zone
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA WITH BACKGROUND
      ========================================================= */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="images/back1.png"
            alt="Vegetable farm"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[#043D27]/90" />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#73E6AF]">
                <MessageCircle className="h-5 w-5" />
                Have a Question?
              </div>

              <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                We&apos;re here to help.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Need information about a vegetable seed variety? Want to reach
                a regional representative? Contact AfriBEST SEEDS through any
                of the channels available to you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/255682510710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#00A863] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#008F55]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Us a Message
                </a>

                <a
                  href="mailto:sales@afribestseeds.com"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>

            {/* CTA FEATURES */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Sprout,
                  title: "Quality Seeds",
                  text: "Explore our vegetable seed varieties.",
                },
                {
                  icon: Wheat,
                  title: "Better Crops",
                  text: "Start your farming journey with the right seed.",
                },
                {
                  icon: MessageCircle,
                  title: "Farmer Support",
                  text: "Connect with our team for product information.",
                },
                {
                  icon: MapPin,
                  title: "Regional Contacts",
                  text: "Reach the AfriBEST team in your zone.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A863] text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/65">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CONTACT STRIP
      ========================================================= */}
      <section className="bg-[#075C3A] px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#73E6AF]">
              AfriBEST SEEDS
            </p>

            <p className="mt-1 text-xl font-black text-white">
              Pure Seeds for Better Yield
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+255682510710"
              className="inline-flex items-center rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              <Phone className="mr-2 h-4 w-4" />
              +255 682 510 710
            </a>

            <a
              href="mailto:sales@afribestseeds.com"
              className="inline-flex items-center rounded-xl bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>

            <a
              href="https://wa.me/255682510710"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-[#00A863] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#008F55]"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}