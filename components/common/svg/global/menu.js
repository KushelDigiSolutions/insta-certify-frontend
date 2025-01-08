import React from 'react'

export default function GlobalMenu(props) {
  return (
    <svg id={`${props.navBg || props.currentPath === "/contact" || props.currentPath === "/bee-certification" || props.currentPath === "/lab-chemicals" || props.currentPath === "/general-laboratory-consumable" || props.currentPath === "/occupation-safety-security" || props.currentPath === "/veccum-tech-dry" || props.currentPath === "/distillation-dsf" || props.currentPath === "/industrial-specifiac-bundle" || props.currentPath === "/optical-instrumental-microscopes" || props.currentPath === "/analytic-measure-test" || props.currentPath === "/cleaning-&-ster" || props.currentPath === "/labware" || props.currentPath === "/about" || props.currentPath === "/account/account-details" || props.currentPath === "/catalog" || props.currentPath === "/products" || props.currentPath.startsWith("/products") || props.currentPath.startsWith("/catalogdetail") || props.currentPath === "/catalogdetail" || props.currentPath === "/bis-mark" || props.currentPath === "/cart" || props.currentPath === "/accounts" || props.currentPath === "/bis-isi-foreign" || props.currentPath === "/bis-isi-domestic" || props.currentPath === "/epr-plastic-waste" || props.currentPath === "/epr-e-waste" || props.currentPath === "/epr-battery-waste" || props.currentPath === "/epr-used-oil" || props.currentPath === "/epr-tyre" || props.currentPath === "/perso-certification" || props.currentPath === "/nsic-msme" || props.currentPath === "/stqc-certification" || props.currentPath === "/fssai-registration" || props.currentPath === "/cdsco-registration" || props.currentPath === "/noc-steel" || props.currentPath === "/bee-certi" || props.currentPath === "/wpc-eta-certification" || props.currentPath === "/iso-certification" || props.currentPath === "/haccp" || props.currentPath === "/halal" || props.currentPath === "/saber" || props.currentPath === "/g-mark-toys" || props.currentPath === "/g-mark-lved" || props.currentPath === "/sfda-rice" || props.currentPath === "/sfda-food" || props.currentPath === "/sfda-cosmetics" || props.currentPath === "/ce-certification" || props.currentPath === "/fcc-certification" || props.currentPath === "/imei-reg" || props.currentPath === "/tec-approval" || props.currentPath === "/imei-icdr-reg" ? "lkg" : "mjk"}`} height="32px" viewBox="0 0 32 32" width="32px"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" /></svg>
  )
}
