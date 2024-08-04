import { string } from "prop-types";

function LinkButton({ className, href, label }) {
  return (
    <a className={`button ${className}`} href={href}>
      {label}
    </a>
  );
}

// 속성 검사
LinkButton.propTypes = {
  className: string.isRequired,
  href: string.isRequired,
  label: string.isRequired,
};

export default LinkButton;
