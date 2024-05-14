import flags from "./feature-flags"

const menuItems = [
  { to: "/", label: "Home", className: "d-none d-xl-block" },
  { to: "/writings", label: "Writings" },
  { to: "/projects", label: "Projects" },
  { to: "/readings", label: "Readings", hidden: !flags.readings },
  { to: "/speakings", label: "Speakings" },
]

export default menuItems
