

export function SocialIcon({ BootStrapIcon, href, style, rel, className }) {
  return (
    <li className="social-icons">
      <a
        href={href}
        target="_blank"
        style={style}
        rel={rel}
        className={className}
      >
        <BootStrapIcon />
      </a>
    </li>
  );
}
