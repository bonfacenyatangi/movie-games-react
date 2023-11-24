import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

// Passing children to a componenteve
// Inspecting Components with React Dev Tools
// Building a button component
