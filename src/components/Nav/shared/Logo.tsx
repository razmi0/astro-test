export default function Logo() {
  return (
    <>
      <figure className="w-fit h-fit">
        <a href="/" aria-label="Home">
          <img
            src="logo.webp"
            width="52"
            height="52"
            decoding="async"
            loading="lazy"
            alt="Colorful logo of the company"
            className="rounded-sm"
          />
        </a>
      </figure>
    </>
  );
}
