import React from "react"

import Layout from "../../components/projects/project_layout"
import SEO from "../../components/seo"
import LightBox from "../../components/lightbox"
import {photos} from "../../srcsets/3dponics-images"

const ProjectSummary = () => (
  <Layout>
    <SEO title="3Dponics" />
    <div className="project-summary pt-4" id="page-container">
      <div id="project-content-wrap">
        <div className="container p-5">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-md-12 text-center">
              <h1>3Dponics</h1>
            </div>
          </div>
          <LightBox photos={photos}></LightBox>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectSummary
