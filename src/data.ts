// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/lokeshramchand', 
  },
  {
    label: 'GitHub',
    url: 'https://github.com/lokeshramchand-ctrl', 
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lokeshramchand/', 
  },
];

const resourceLinks = [
  {
    label: 'Resume',
    url: '/LokeshRamChand_Resume.pdf',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/lokeshramchand-ctrl',
  },
];

const heroText =
  'A dedicated software engineer building intelligent, scalable platforms. I combine modern full-stack development with machine learning technologies to architect comprehensive, production-ready solutions.';

const locationPlace = `17°22'31.0"N 78°28'27.0"E`; 
const locationCountry = 'Hyderabad, India'; 

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'lokeshramchand/30min'; 
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};