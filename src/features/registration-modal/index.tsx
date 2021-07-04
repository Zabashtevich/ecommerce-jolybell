import { createPortal } from "react-dom";

import { Registration } from "@src/components";
import { useRegModal } from "../../contexts";
import { useEffect } from "react";

if (typeof document !== "undefined") {
  const current: HTMLDivElement = document.createElement("div");
  current.setAttribute("id", "registration-root");
  document.body.appendChild(current);
}

const RegistrationModal = () => {
  const { visible, setVisible } = useRegModal();

  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [visible]);

  return visible
    ? createPortal(
        <Registration setVisible={setVisible} />,
        document.getElementById("registration-root") as HTMLDivElement,
      )
    : null;
};

export default RegistrationModal;
