import React, { useEffect, Suspense } from 'react';
import '../styles/pageStyles/home.css';

import Hero from '../components/home/Hero.tsx';
import SectionDir from '../components/home/SectionDir.tsx';
import LightingSection from '../components/home/LightingSection.tsx';
import AuditsSection from '../components/home/AuditsSection.tsx';
import HvacSection from '../components/home/HvacSection.tsx';
import DecarbSection from '../components/home/DecarbSection.tsx';
import FinanceSection from '../components/home/FinanceSection.tsx';
import NewsletterSection from '../components/home/NewsletterSection.tsx';

import { useScrollDirection } from '../utils/hooks/useScrollDirection.tsx';

// const LightingSection = React.lazy(() => import('../components/home/LightingSection.tsx'));
// const AuditsSection = React.lazy(() => import('../components/home/AuditsSection.tsx'));
// const HvacSection = React.lazy(() => import('../components/home/HvacSection.tsx'));
// const DecarbSection = React.lazy(() => import('../components/home/DecarbSection.tsx'));
// const FinanceSection = React.lazy(() => import('../components/home/FinanceSection.tsx'));
// const NewsletterSection = React.lazy(() => import('../components/home/NewsletterSection.tsx'));


export default function Home() {

    const scrollDir = useScrollDirection()

    // useEffect(() => {
    //     import('../components/home/SectionDir.tsx');
    //     import('../components/home/LightingSection.tsx');
    //     import('../components/home/AuditsSection.tsx');
    //     import('../components/home/HvacSection.tsx');
    //     import('../components/home/DecarbSection.tsx');
    //     import('../components/home/FinanceSection.tsx');
    //     import('../components/home/NewsletterSection.tsx');
    // }, []);

    return (
        <div className="home">
            <Hero/>
            <SectionDir />
            <LightingSection />
            <AuditsSection />
            <HvacSection />
            <DecarbSection />
            <FinanceSection />
            <NewsletterSection />
        </div>
    );
}