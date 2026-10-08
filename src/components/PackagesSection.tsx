import React from 'react';
import {
  Check,
  MessageCircle,
  ArrowRight,
  Crown,
  Share2,
  Image as ImageIcon,
  TrendingUp,
  Radio,
  MessageSquare,
  Megaphone,
  Sparkles,
  Eye,
  Users,
  BarChart2,
  ShoppingCart,
  Shield,
  Heart,
} from 'lucide-react';
import {
  TRANSPARENT_PACKAGES,
  PACKAGE_GOALS,
  PACKAGE_DISCLAIMER,
  PackageTier,
  PackageCategory,
  getWhatsAppUrl,
} from '../data/siteData';

function renderCategoryIcon(iconName: PackageCategory['iconName'], className = 'w-4 h-4') {
  switch (iconName) {
    case 'social':
      return <Share2 className={className} />;
    case 'content':
      return <ImageIcon className={className} />;
    case 'strategy':
      return <TrendingUp className={className} />;
    case 'live':
      return <Radio className={className} />;
    case 'community':
      return <MessageSquare className={className} />;
    case 'ads':
      return <Megaphone className={className} />;
    case 'influencer':
      return <Sparkles className={className} />;
  }
}

function renderGoalIcon(icon: string, className = 'w-5 h-5') {
  switch (icon) {
    case 'sparkles':
      return <Eye className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'trending':
      return <BarChart2 className={className} />;
    case 'cart':
      return <ShoppingCart className={className} />;
    case 'shield':
      return <Shield className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-16 md:py-24 border-t border-sky-500/15 bg-[#030B1C] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse, #4F46E5 0%, #00D2FF 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Matching the Flyer's Professional Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E1F42] border border-sky-400/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#00D2FF] mb-4 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PACKAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Choose Your <span className="text-[#00D2FF]">Growth Plan</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-sky-100 font-medium italic">
            &ldquo;More Engagement • More Followers • More Sales&rdquo;
          </p>

          {/* Value Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="px-3 py-1 rounded-lg bg-[#071630] border border-sky-500/20 text-[#00D2FF]">
              More Engagement
            </span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 rounded-lg bg-[#071630] border border-sky-500/20 text-white">
              More Followers
            </span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 rounded-lg bg-[#071630] border border-sky-500/20 text-[#00D2FF]">
              More Sales
            </span>
          </div>
        </div>

        {/* 3 Main Package Cards (Aligned horizontally on same grid line) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-3">
          {TRANSPARENT_PACKAGES.map((tier: PackageTier) => {
            const isPremium = tier.id === 'premium';
            const isStandard = tier.id === 'standard';

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-200 ${
                  isStandard
                    ? 'bg-gradient-to-b from-[#0C1E42] via-[#081836] to-[#051126] border-2 border-[#00D2FF]/80 shadow-[0_0_35px_rgba(0,210,255,0.22)]'
                    : isPremium
                    ? 'bg-gradient-to-b from-[#14153C] via-[#0B1530] to-[#070F22] border-2 border-indigo-400/50 shadow-[0_0_35px_rgba(99,102,241,0.2)]'
                    : 'bg-gradient-to-b from-[#091833] to-[#051024] border-2 border-sky-500/25 hover:border-sky-400/50'
                }`}
              >
                {/* Floating Top Badge for Standard */}
                {isStandard && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className="px-3.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#00E1FF] to-[#0099FF] text-[#030D20] shadow-[0_0_15px_rgba(0,210,255,0.5)] whitespace-nowrap">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Floating Top Badge for Premium */}
                {isPremium && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-3.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-[#030D20] shadow-[0_0_15px_rgba(251,191,36,0.4)] whitespace-nowrap">
                      <Crown className="w-3 h-3 fill-current" />
                      FULL SERVICE
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Title Pill Badge & Subtitle */}
                  <div className="flex items-center justify-between gap-3 mb-4 h-9">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-extrabold tracking-wide text-sm ${
                        isPremium
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(129,140,248,0.4)]'
                          : isStandard
                          ? 'bg-gradient-to-r from-[#00D2FF] to-[#0077FF] text-[#030D20] shadow-[0_0_15px_rgba(0,210,255,0.35)]'
                          : 'bg-[#0E2652] text-sky-200 border border-sky-400/30'
                      }`}
                    >
                      {tier.hasCrown && <Crown className="w-4 h-4 fill-current text-amber-300" />}
                      <span>{tier.name}</span>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 bg-[#071733] px-3 py-1 rounded-full border border-sky-400/20">
                      {tier.subtitle}
                    </span>
                  </div>

                  {/* Highlight Note Badge */}
                  <div
                    className={`rounded-xl px-3.5 py-3 mb-6 flex items-center justify-center text-center text-xs font-bold border min-h-[50px] ${
                      isPremium
                        ? 'bg-gradient-to-r from-indigo-950/90 to-purple-950/90 text-purple-200 border-purple-500/30'
                        : isStandard
                        ? 'bg-[#0A2756] text-sky-200 border-sky-400/30'
                        : 'bg-[#091E44] text-slate-200 border-sky-500/20'
                    }`}
                  >
                    <span>{tier.highlightNote}</span>
                  </div>

                  {/* Structured Categories with Checkmark Items */}
                  <div className="space-y-5 flex-1">
                    {tier.categories.map((cat, catIdx) => (
                      <div key={catIdx} className="space-y-2">
                        {/* Category Header with Icon */}
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                          <span className="p-1 rounded bg-[#09224A] text-[#00D2FF]">
                            {renderCategoryIcon(cat.iconName, 'w-3.5 h-3.5')}
                          </span>
                          <span>{cat.title}</span>
                        </div>

                        {/* List Items */}
                        <ul className="space-y-1.5 pl-1">
                          {cat.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 leading-snug"
                            >
                              <Check className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with CTA Button */}
                <div className="p-6 sm:p-7 pt-3 bg-[#040C1E]/60 border-t border-sky-500/15">
                  <a
                    href={getWhatsAppUrl(
                      `Hello Bright Digitals! I want to get started with the ${tier.name} (${tier.subtitle}) package for my business.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg ${
                      isPremium
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 hover:from-indigo-400 hover:to-purple-500 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)]'
                        : isStandard
                        ? 'bg-gradient-to-r from-[#00E1FF] to-[#0099FF] hover:from-[#38BDF8] hover:to-[#00D2FF] text-[#030D20] shadow-[0_0_25px_rgba(0,210,255,0.4)]'
                        : 'bg-[#0C244E] hover:bg-[#103066] text-white border border-sky-400/40 hover:border-[#00D2FF]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Choose {tier.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    Click to discuss terms & customize deliverables directly on WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Bottom Pillars of Impact (Matches Flyer) */}
        <div className="mt-14 pt-10 border-t border-sky-500/20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
              OUR COMMITMENT WITH EVERY PACKAGE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {PACKAGE_GOALS.map((goal, idx) => (
              <div
                key={idx}
                className="bg-[#061734] border border-sky-500/20 rounded-2xl p-4 flex flex-col items-center text-center justify-center hover:border-[#00D2FF]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#092248] border border-sky-400/30 flex items-center justify-center text-[#00D2FF] mb-2.5">
                  {renderGoalIcon(goal.icon, 'w-5 h-5')}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {goal.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notice & Brand Motto Cards (Matches Flyer Footer) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Advertising & Influencer Fees Notice */}
          <div className="md:col-span-7 bg-[#071836] border border-sky-400/25 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0A2652] border border-sky-400/30 flex items-center justify-center text-[#00D2FF] shrink-0">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Advertising & Influencer Fees Notice
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PACKAGE_DISCLAIMER}
              </p>
            </div>
          </div>

          {/* Motto and Direct Phone Contact */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#0C2552] to-[#071630] border border-[#00D2FF]/35 rounded-2xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-bold text-white">
                Bright Digitals · Creative. Simple. Affordable.
              </span>
              <Heart className="w-4 h-4 text-[#00D2FF] shrink-0 fill-current" />
            </div>

            <div className="mt-3 pt-3 border-t border-sky-500/20 flex items-center justify-between">
              <div className="text-xs text-slate-300">
                <span>Direct Hotline:</span>
                <a
                  href="tel:0973073299"
                  className="block font-bold text-[#00D2FF] hover:underline text-sm"
                >
                  0973073299
                </a>
              </div>

              <a
                href={getWhatsAppUrl('Hello Bright Digitals! I want to ask about your social media packages.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Message Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
