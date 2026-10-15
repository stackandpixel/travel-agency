import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface WhatsAppButtonProps {
  tripTitle?: string;
  departureDate?: string;
  customMessage?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'sticky';
  label?: string;
  className?: string;
  onClickCustom?: () => void;
}

export const generateWhatsAppLink = (tripTitle?: string, departureDate?: string, customMessage?: string) => {
  let message = '';
  if (customMessage) {
    message = customMessage;
  } else if (tripTitle) {
    message = `Hi Roam Tribe India! 👋 I'm interested in the *${tripTitle}* trip${
      departureDate ? ` (Batch: ${departureDate})` : ''
    }. Could you please share the detailed PDF itinerary, available seats, inclusions, and booking process?`;
  } else {
    message = `Hi Roam Tribe India! 👋 I would like to enquire about upcoming group trips and join the travel community.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.primaryWhatsAppNumber}?text=${encodedMessage}`;
};

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  tripTitle,
  departureDate,
  customMessage,
  variant = 'primary',
  label = 'Enquire on WhatsApp',
  className = '',
  onClickCustom
}) => {
  const url = generateWhatsAppLink(tripTitle, departureDate, customMessage);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClickCustom) {
      e.preventDefault();
      onClickCustom();
      return;
    }
  };

  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer text-sm whitespace-nowrap shrink-0';

  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles =
      'bg-[#163A32] text-white hover:bg-[#224D43] shadow-sm hover:shadow active:scale-[0.98] py-2.5 px-5 rounded-lg';
  } else if (variant === 'secondary') {
    variantStyles =
      'bg-[#F28C45] text-white hover:bg-[#e07b36] shadow-sm hover:shadow active:scale-[0.98] py-2.5 px-5 rounded-lg';
  } else if (variant === 'outline') {
    variantStyles =
      'border border-[#163A32] text-[#163A32] hover:bg-[#163A32] hover:text-white py-2 px-4 rounded-lg';
  } else if (variant === 'sticky') {
    variantStyles =
      'bg-[#25D366] text-white hover:bg-[#1ebc59] shadow-md py-3 px-6 rounded-lg font-semibold';
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      aria-label={`${label} for ${tripTitle || 'Roam Tribe'}`}
    >
      <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
      <span>{label}</span>
    </a>
  );
};
