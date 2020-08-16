import React from 'react';

import {
    HsjBasePage,

    HsjFooter,
    HsjHeader,
    HsjHeroGradient,
} from 'hsj-rjs';


export default function Home(props: any) {
    return (
        <div>
            <HsjHeroGradient
                gradientType='hsj-hero-gradient-shatter'
            >
                <h1 style={{
                        position: 'relative',
                        top: '120px',
                        left: '20%',
                    }}>Ocean Analyzer</h1>
                <h3 style={{
                        position: 'relative',
                        top: '120px',
                        left: '20%',
                }}>Know Your Audience</h3>
                <h3 style={{
                        position: 'relative',
                        top: '120px',
                        left: '20%',
                }}>Know Your Product</h3>
            </HsjHeroGradient>

            <section className='ocean-home-section-desc'>
                <h3>Based on the Work of Jason Vandenberghe</h3>
                <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/cnZ9Fx_tsE8'
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen>
                </iframe>

                <div>OCEAN Analyzer is based on the work of Jason Vandenberghe.</div>
            </section>
        </div>
    );
}