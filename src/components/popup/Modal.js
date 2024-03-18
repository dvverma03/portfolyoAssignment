import useClickOutside from "@/src/useClickOutside";
import { Fragment } from "react";
const Modal = ({ children, close }) => {
  let domNode = useClickOutside(() => {
    close(null);
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-fade dora-popup mfp-ready" />
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade dora-popup mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-inline-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-fade">
              {children}
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close(null)}
              >
                ×
              </button>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Modal;
