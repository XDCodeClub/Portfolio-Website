// XD Code Club Official Health & Info API
export default function handler(req, res) {
  res.status(200).json({
    club: "XD Code Club",
    college: "ShriRam College of Engineering & Management (SRCEM), ShriRam Group of Colleges",
    location: "Lab 304, National Expressway, AB Road, Banmore (near Gwalior), Madhya Pradesh",
    motto: "Coding for creativity, curiosity & community",
    status: "Operational",
    version: "2.6.0",
    endpoints: {
      projects: "/projects",
      about: "/about",
      members: "/u",
      rules: "/rules",
      contact: "/contact",
    },
  });
}
