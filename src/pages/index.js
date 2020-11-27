import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from "../components/banner/Banner";
import Section from "../components/section/Section";
import indexContent from "../content/index";
import ProductImg from "../components/image_files/productImg";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner 
        heading={indexContent.bannerContent.heading} 
        subHeading={indexContent.bannerContent.subheading} 
        info={indexContent.bannerContent.info} 
        links={indexContent.bannerLinks} 
        list={indexContent.listInfo}
      >
      <ProductImg/>
      </Banner>
      {indexContent.sectionContent.map((props, index) => (
          <Section key={props.heading} {...props}>
            <p>{indexContent.sectionContent[index].content}</p>
          </Section>
        )
      )}
    </Layout>
  )
};

export default IndexPage;
