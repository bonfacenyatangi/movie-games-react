import React, { ReactNode } from "react";

interface Props {
  onClose: () => void;
}

const PageAlert = ({ onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      PageAlert
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default PageAlert;
