import SimpleItem from "./SimpleItem";
import { links } from "./data";

export default function MenuHeader() {
  return (
    <>
      <SimpleItem iconName="home" href={links[0].href} iconClass="-translate-y-1">
        Accueil
      </SimpleItem>
      <SimpleItem iconName="contact" href={links[4].href} iconClass="-translate-y-[1px]">
        Contact
      </SimpleItem>
      <SimpleItem iconName="about" href={links[2].href} iconClass="-translate-y-[2px]">
        Qui nous sommes
      </SimpleItem>
    </>
  );
}
