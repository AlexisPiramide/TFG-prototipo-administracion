import { useRef, useEffect } from "react";
import Granim from "granim";
import gradientConfigs from "./../services/util.gradient_border";

export default function Embellezedor() {
  const refs = {
    bottom: useRef(null),
    top: useRef(null),
    left: useRef(null),
    right: useRef(null),
  };

  const instances = {
    bottom: useRef(null),
    top: useRef(null),
    left: useRef(null),
    right: useRef(null),
  };

  useEffect(() => {
    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        const config = gradientConfigs[key];
        instances[key].current = new Granim({
          element: ref.current,
          name: config.name,
          direction: config.direction,
          opacity: [1, 1],
          transitionSpeed: 2000,
          isPausedWhenNotInView: true,
          states: {
            "default-state": {
              gradients: config.gradients,
            },
          },
        });
      }
    });

    return () => {
      Object.values(instances).forEach(instanceRef => {
        if (instanceRef.current) instanceRef.current.destroy();
      });
    };
  }, []);

  return (
    <>
      <div className="embellezedor tipo-nav">
        <canvas ref={refs.top} />
      </div>
      <div className="embellezedor tipo-left">
        <canvas ref={refs.left} />
      </div>
      <div className="embellezedor tipo-right">
        <canvas ref={refs.right} />
      </div>
      <div className="embellezedor tipo-footer">
        <canvas ref={refs.bottom} />
      </div>
    </>
  );
}
