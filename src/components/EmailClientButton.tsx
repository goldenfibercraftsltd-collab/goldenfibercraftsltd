import React, { useState, useEffect } from 'react';
import { EMAIL_PROVIDERS } from './OfficialEmailIcons';

interface EmailClientButtonProps {
  toEmail?: string;
  subject?: string;
  body?: string;
}

export const EmailClientButton: React.FC<EmailClientButtonProps> = ({
  toEmail = 'shafiq@goldenfibercraftsltd.com',
  subject = 'Export Inquiry - Golden Fiber Crafts Ltd',
  body = 'Dear Golden Fiber Crafts Team,\n\nI am interested in your natural fiber handicraft products and would like to request export pricing and catalog details.\n\nBest regards,',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Smoothly cycle through official email providers (Gmail -> Outlook -> Yahoo) every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EMAIL_PROVIDERS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const activeProvider = EMAIL_PROVIDERS[currentIndex];
  const ActiveIcon = activeProvider.icon;

  // Universal mailto URL so the visitor's device uses its default email client (Outlook, Gmail, Apple Mail, etc.)
  const mailtoUrl = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoUrl}
      title={`Send Email to ${toEmail} (Opens your device's default Email app)`}
      className="flex items-center justify-center p-0.5 rounded-xl hover:bg-stone-100/80 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shrink-0"
    >
      <div key={activeProvider.id} className="flex items-center justify-center animate-scaleIn">
        <ActiveIcon className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-xs" />
      </div>
    </a>
  );
};

export default EmailClientButton;

