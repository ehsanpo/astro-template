import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPortfolioData } from "../utils/data";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const serviceWrappersRef = useRef([]);
  const { services } = getPortfolioData();

  useEffect(() => {
    const headerHeight = 64;

    serviceWrappersRef.current.forEach((serviceBlock, index) => {
      if (serviceBlock) {
        ScrollTrigger.create({
          trigger: serviceBlock,
          start: `top ${headerHeight}`,
          end: `bottom ${headerHeight}`,
          pin: true,
          pinSpacing: false,
          scrub: true,
          toggleClass: "active",
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        });
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [serviceWrappersRef]);

  const updateServiceWrappersRef = (el, index) => {
    serviceWrappersRef.current[index] = el;
  };

  const addToRefs = (el) => {
    if (el && !serviceWrappersRef.current.includes(el)) {
      serviceWrappersRef.current.push(el);
    }
  };

  return (
    <div>
      <div className="service-details-wrapper ">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`pin-spacer flex w-full bg-black/80`}
            ref={(el) => updateServiceWrappersRef(el, index)}
          >
            <div
              className={`service-details-container position-relative p-0 d-flex flex-column justify-content-center container mx-auto px-4 ${
                index % 2 === 0 ? "image-right" : "image-left"
              } ${service.isLast ? "last" : ""}`}
              style={{ width: "100%" }}
            >
              <div className="service-detail-image-hold parallax-img">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    willChange: "transform",
                  }}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div
                    className={`col-md-6 ${
                      service.imageAlignment === "image-left"
                        ? "offset-md-6"
                        : "offset-md-0"
                    }`}
                  >
                    <div className="service-details-box position-relative d-flex flex-column">
                      <div className="service-details-box-body animate-child trigger">
                        <h2 className="outline mb-1">{`0${service.id}.`}</h2>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ul className="services-list d-flex flex-wrap">
                          {service.features.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
