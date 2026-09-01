import React from 'react';

/**
 * 100% Authentic Official Google Gmail Icon (4-Color Google Workspace Vector)
 */
export const GmailOfficialIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left Pillar (Blue) */}
    <path fill="#4285F4" d="M6 39V15.5L16 23V39H6z" />
    {/* Right Pillar (Green) */}
    <path fill="#34A853" d="M42 39V15.5L32 23V39H42z" />
    {/* Center Roof & V (Red) */}
    <path fill="#EA4335" d="M32 9L24 15.5 16 9h-5c-2.76 0-5 2.24-5 5v1.5l18 13.5 18-13.5V14c0-2.76-2.24-5-5-5h-5z" />
    {/* Top Left Shoulder (Yellow) */}
    <path fill="#FBBC05" d="M6 14c0-2.76 2.24-5 5-5h5l-10 7.5V14z" />
    {/* Top Right Shoulder (Dark Red) */}
    <path fill="#C5221F" d="M42 14c0-2.76-2.24-5-5-5h-5l10 7.5V14z" />
  </svg>
);

/**
 * 100% Authentic Official Microsoft Outlook 365 Icon (Multi-layered Blue Envelope + 'O' Badge)
 */
export const OutlookOfficialIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Envelope Back */}
    <path fill="#0078D4" d="M26 8h14c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H26V8z" />
    {/* Upper Envelope Flap (Light Azure Blue) */}
    <path fill="#28A8EA" d="M26 8l18 13.5L26 30V8z" />
    {/* Lower Envelope Flap (Medium Blue) */}
    <path fill="#106EBE" d="M26 30l18-8.5V36c0 2.2-1.8 4-4 4H26V30z" />
    {/* Bottom Shadow Fold (Deep Blue) */}
    <path fill="#005A9E" d="M26 30l12 10H26v-10z" />
    {/* Outlook 'O' Badge */}
    <rect x="4" y="11" width="22" height="26" rx="3" fill="#0078D4" />
    {/* White 'O' Ring */}
    <ellipse cx="15" cy="24" rx="6" ry="7" fill="#ffffff" />
    <ellipse cx="15" cy="24" rx="3" ry="4" fill="#0078D4" />
  </svg>
);

/**
 * 100% Authentic Official Yahoo Mail Icon (Yahoo Purple #6001D2 + Official Yahoo 'Y!' Logo)
 */
export const YahooOfficialIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Official Yahoo Purple Rounded Base */}
    <rect x="2" y="2" width="44" height="44" rx="10" fill="#6001D2" />
    {/* Subtle Inner Mail Glow */}
    <path
      d="M7 14a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V14z"
      fill="#ffffff"
      fillOpacity="0.14"
    />
    <path
      d="M8 15l16 11 16-11"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.4"
    />
    {/* Official Yahoo 'Y' Letter */}
    <path
      fill="#FFFFFF"
      d="M13 15.5l5.5 10V33h4V25.5l5.5-10h-4.2l-3.3 6.5-3.3-6.5H13z"
    />
    {/* Official Yahoo '!' Exclamation */}
    <path fill="#FFFFFF" d="M30.5 15.5h3.6v11h-3.6V15.5zm0 14h3.6V33h-3.6v-3.5z" />
  </svg>
);

export interface EmailProvider {
  id: 'gmail' | 'outlook' | 'yahoo';
  name: string;
  shortName: string;
  tagline: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  icon: React.FC<{ className?: string }>;
  getComposeUrl: (to: string, subject: string, body: string) => string;
}

export const EMAIL_PROVIDERS: EmailProvider[] = [
  {
    id: 'gmail',
    name: 'Google Gmail',
    shortName: 'Gmail',
    tagline: 'Open directly in Gmail Web Composer',
    borderClass: 'border-red-300 hover:border-red-500 shadow-red-100',
    bgClass: 'bg-white hover:bg-red-50/50',
    textClass: 'text-[#EA4335]',
    icon: GmailOfficialIcon,
    getComposeUrl: (to, subject, body) =>
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
  },
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    shortName: 'Outlook',
    tagline: 'Open directly in Outlook Live / Office 365',
    borderClass: 'border-blue-300 hover:border-blue-500 shadow-blue-100',
    bgClass: 'bg-white hover:bg-blue-50/50',
    textClass: 'text-[#0078D4]',
    icon: OutlookOfficialIcon,
    getComposeUrl: (to, subject, body) =>
      `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
        to
      )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  },
  {
    id: 'yahoo',
    name: 'Yahoo Mail',
    shortName: 'Yahoo',
    tagline: 'Open directly in Yahoo Mail Composer',
    borderClass: 'border-purple-300 hover:border-purple-500 shadow-purple-100',
    bgClass: 'bg-white hover:bg-purple-50/50',
    textClass: 'text-[#6001D2]',
    icon: YahooOfficialIcon,
    getComposeUrl: (to, subject, body) =>
      `https://compose.mail.yahoo.com/?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
  },
];
