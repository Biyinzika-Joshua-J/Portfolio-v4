import React from 'react';
import Ribbon from './RibbonSection';
import HeroSection from './HeroSection';
import WhoItsForSection from './WhoItsForSection';
import BenefitsSection from './BenefitsSection';
import HowItWorksSection from './HowItWorksSection';
import SocialProofSection from './SocialProofSection';
import PricingSection from './PricingSection';
import ReferralSection from './ReferralProgramSection';
import LeadFormSection from './LeadFormSection';
import FAQSection from './FAQSection';
import FooterSection from './FooterSection';

const SellOnlinePage = () => {
  return (
    <div>
      <div className="space-y-0">
        <Ribbon />
        <HeroSection />
        <WhoItsForSection />
        <BenefitsSection />
        <HowItWorksSection />
        <SocialProofSection />
        <PricingSection />
        <ReferralSection />
        <LeadFormSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default SellOnlinePage;
