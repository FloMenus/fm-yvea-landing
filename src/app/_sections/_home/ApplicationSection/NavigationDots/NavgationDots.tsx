import "./style.css";
import { applicationData } from "../data";

export default function NavigationDots({
  activeIndex,
  onClick,
  disabled,
}: {
  activeIndex: number;
  onClick: (index: number) => void;
  disabled: boolean;
}) {
  return (
    <div className="navigation_dots">
      {applicationData.map((el, i) => (
        <button
          key={i}
          className={`navigation_dot ${i === activeIndex ? "active" : ""}`}
          onClick={() => onClick(i)}
          disabled={disabled}
        ></button>
      ))}
    </div>
  );
}
