export function SocialIcon({ BootStrapIcon, href, style, className }) {
  return (
    <li className="social-icons">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer" // ✅ always set for security
        style={style}
        className={className}
      >
        <BootStrapIcon />
      </a>
    </li>
  );
}
