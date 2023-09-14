import React from 'react'
import { footerLinks } from '../Constant/main'

const Footer = () => {
  return (
    <footer>
      <div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4>
                {section.title}
              </h4>
              <ul>
                
                {section.links.map((link) => (
                  <li
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      {/* <div>
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
      </div> */}
      <p>2021 MovieBox by Adriana Eka Prayudha.</p>
    </footer>
  )
}

export default Footer


