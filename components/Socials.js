import Link from "next/link";

import {
  // RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {/* <Link href={'https://www.facebook.com/profile.php?id=100005207028337'} className="hover:text-accent transition-all duration-300"><RiFacebookLine /></Link> */}
      <Link
        href={"https://github.com/RavinduISHA"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/ravindu98/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://wa.me/qr/5OD5O6ILAU4EP1"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
