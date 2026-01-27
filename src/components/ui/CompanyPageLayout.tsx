import { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import ProjectNavigator from "./ProjectNavigator";

export type Feature = {
  systemName: string;
  skills: string[];
  description: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  };
};

export type Project = {
  id: string;
  title: string;
  mainMedia: {
    type: "image" | "video";
    src: string;
    alt?: string;
    title?: string;
  };
  features: Feature[];
};

export type CompanyData = {
  name: string;
  duration: string;
  role: string;
  summary: string;
  projects: Project[];
  navigatorItems?: Array<{
    id: string;
    image: string;
    label: string;
  }>;
};

type CompanyPageLayoutProps = {
  company: CompanyData;
};

const CompanyPageLayout = ({ company }: CompanyPageLayoutProps) => {
  // Auto-scroll to the section if coming from Experience page
  useEffect(() => {
    const scrollToSection = localStorage.getItem('scrollToSection');
    if (scrollToSection) {
      const element = document.getElementById(scrollToSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      localStorage.removeItem('scrollToSection');
    }
    
    // Also check for hash in URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <main style={{ paddingBottom: "40px" }} className="company-page-section">
      {/* Company Header */}
      <section className="company-hero">
        <div className="company-header">
          <div className="company-title-section">
            <h1 className="company-name">{company.name}</h1>
            <span className="company-duration">{company.duration}</span>
          </div>
          <div className="company-role-section">
            <h2 className="company-role">Role - {company.role}</h2>
            <p className="company-summary">{company.summary}</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      {company.projects.map((project) => (
        <section key={project.id} id={project.id} className="project-section">
          <SectionHeading title={project.title} />
          
          {/* Main Project Media */}
          <div className="project-main-media">
            {project.mainMedia.type === 'image' ? (
              <img 
                src={project.mainMedia.src} 
                alt={project.mainMedia.alt || project.title}
                title={project.mainMedia.title}
                className="project-main-image"
              />
            ) : (
              <div className="project-video-container">
                <iframe 
                  src={project.mainMedia.src} 
                  title={project.mainMedia.title || project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="project-video"
                />
              </div>
            )}
          </div>

          {/* Features List */}
          <div className="features-list">
            {project.features.map((feature, index) => (
              <div key={index} className="feature-item">
                {/* Feature Media (if provided) */}
                {feature.media && (
                  <div className="feature-media">
                    {feature.media.type === 'image' ? (
                      <img 
                        src={feature.media.src} 
                        alt={feature.media.alt || feature.systemName}
                        className="feature-image"
                      />
                    ) : (
                      <div className="feature-video-container">
                        <iframe 
                          src={feature.media.src} 
                          title={feature.systemName}
                          allowFullScreen
                          className="feature-video"
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="feature-content">
                  <h3 className="feature-system-name">{feature.systemName}</h3>
                  
                  {/* Skills */}
                  <div className="feature-skills">
                    {feature.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag feature-skill">{skill}</span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Project Navigator - Only show if navigatorItems provided
      {company.navigatorItems && company.navigatorItems.length > 0 && (
        <ProjectNavigator items ={company.navigatorItems} />
      )} */}
    </main>
  );
};

export default CompanyPageLayout;