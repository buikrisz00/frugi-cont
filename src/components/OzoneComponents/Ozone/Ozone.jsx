import React from 'react';
import Layout from '../../Global/Layout/Layout';
import OzoneLandingSection from '../OzoneLandingSection/OzoneLandingSection';
import WhyOzoneSection from '../WhyOzoneSection/WhyOzoneSection';

function Ozone() {
    return (
        <Layout>
            <OzoneLandingSection />
            <WhyOzoneSection />
        </Layout>
    )
}

export default Ozone;