// we are achieving the look
import brackets from "../assets/svg/Brackets";
const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {/* is children maaii ayyee gaa joo bii tagline kyyy center maiii hoo gaaa woooo */}
      {brackets("right")}
    </div>
  );
};

export default TagLine;
