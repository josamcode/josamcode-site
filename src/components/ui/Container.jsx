export default function Container({ children, className = "", as: As = "div", id }) {
  return (
    <As id={id} className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </As>
  );
}
