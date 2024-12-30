import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const serviceWrappersRef = useRef([]);
  const headerRef = useRef(null);

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

  const services = [
    {
      id: 1,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo iste corporis voluptatem eos ab quidem. Animi ducimus culpa voluptas qui reiciendis illo optio.",
      image: "include/images/service-item-1.jpg",
      items: [
        "User Experience (UX)",
        "User Interface (UI)",
        "App Design",
        "Website Design",
        "E-commerce Website",
        "Signage and Posters",
      ],
      imageAlignment: "image-right",
    },
    {
      id: 2,
      title: "Html Conversion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo iste corporis voluptatem eos ab quidem. Animi ducimus culpa voluptas qui reiciendis illo optio.",
      image: "include/images/service-item-2.jpg",
      items: [
        "User Experience (UX)",
        "User Interface (UI)",
        "App Design",
        "Website Design",
        "E-commerce Website",
        "Signage and Posters",
      ],
      imageAlignment: "image-left",
    },
    {
      id: 3,
      title: "WordPress Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo iste corporis voluptatem eos ab quidem. Animi ducimus culpa voluptas qui reiciendis illo optio.",
      image: "include/images/service-item-3.jpg",
      items: [
        "User Experience (UX)",
        "User Interface (UI)",
        "App Design",
        "Website Design",
        "E-commerce Website",
        "Signage and Posters",
      ],
      imageAlignment: "image-right",
    },
    {
      id: 4,
      title: "React Js",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est illo iste corporis voluptatem eos ab quidem. Animi ducimus culpa voluptas qui reiciendis illo optio.",
      image: "include/images/service-item-4.jpg",
      items: [
        "User Experience (UX)",
        "User Interface (UI)",
        "App Design",
        "Website Design",
        "E-commerce Website",
        "Signage and Posters",
      ],
      imageAlignment: "image-left",
      isLast: true,
    },
  ];
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
      {/* Service Details Wrapper */}
      <div className="service-details-wrapper">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`pin-spacer`}
            ref={(el) => updateServiceWrappersRef(el, index)}
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div
              className={`service-details-container position-relative p-0 d-flex flex-column justify-content-center ${
                service.imageAlignment
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
                          {service.items.map((item, idx) => (
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
