import React, { useState, useEffect, useRef, useMemo } from "react";
import QRCode from "qrcode";

export default function MemberIdBadge({ member, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [avatarDataUrl, setAvatarDataUrl] = useState("");
  const [isDownloadingSvg, setIsDownloadingSvg] = useState(false);
  const [isDownloadingPng, setIsDownloadingPng] = useState(false);
  const cardRef = useRef(null);

  const profileUrl = member ? `https://xdcodeclub.netlify.app/u/${member.slug}` : "";
  const credentialId = member ? `XD-SRCEM-${(member.slug || "DEV").toUpperCase()}-2026` : "";

  // 100% Synchronous, Bulletproof Native Vector QR Geometry calculation
  const qrInfo = useMemo(() => {
    if (!profileUrl) return null;
    try {
      const qr = QRCode.create(profileUrl, { errorCorrectionLevel: "M" });
      const size = qr.modules.size;
      const margin = 2;
      const totalSize = size + margin * 2;
      const boxSize = 126;
      const cellSize = +(boxSize / totalSize).toFixed(3);
      const offsetX = 9;
      const offsetY = 9;

      let d = "";
      for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
          if (qr.modules.get(row, col)) {
            const x = +(offsetX + (col + margin) * cellSize).toFixed(2);
            const y = +(offsetY + (row + margin) * cellSize).toFixed(2);
            d += `M${x},${y}h${cellSize}v${cellSize}h-${cellSize}z `;
          }
        }
      }
      return { d, qr, size, margin, totalSize, cellSize };
    } catch (e) {
      console.error("QR computation error:", e);
      return null;
    }
  }, [profileUrl]);

  // Pre-cache member avatar to compact Base64 thumbnail for standalone export
  useEffect(() => {
    if (!isOpen || !member) return;

    let isMounted = true;
    const avImg = new Image();
    avImg.crossOrigin = "anonymous";
    avImg.onload = () => {
      if (!isMounted) return;
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 160;
        canvas.height = 160;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(avImg, 0, 0, 160, 160);
        setAvatarDataUrl(canvas.toDataURL("image/jpeg", 0.9));
      } catch (e) {
        setAvatarDataUrl(member.avatar || "/xdcodeclub-logo2.png");
      }
    };
    avImg.onerror = () => {
      if (isMounted) setAvatarDataUrl("/xdcodeclub-logo2.png");
    };
    avImg.src = member.avatar || "/xdcodeclub-logo2.png";

    return () => {
      isMounted = false;
    };
  }, [isOpen, member]);

  if (!isOpen || !member) return null;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rx = ((y - centerY) / centerY) * -12;
    const ry = ((x - centerX) / centerX) * 12;
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  const copyProfileLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Generate clean, high-contrast, luminous Cyberpunk Card SVG with 100% PURE VECTOR PATHS
  // (Zero nested <svg> tags and zero external asset dependencies so it opens perfectly anywhere)
  const generateSvgMarkup = () => {
    const finalAvatar = avatarDataUrl || member.avatar || "/xdcodeclub-logo2.png";

    // Ensure QR path is freshly generated if not already memoized
    let qrPathD = qrInfo ? qrInfo.d : "";
    if (!qrPathD && profileUrl) {
      try {
        const qr = QRCode.create(profileUrl, { errorCorrectionLevel: "M" });
        const size = qr.modules.size;
        const margin = 2;
        const totalSize = size + margin * 2;
        const boxSize = 126;
        const cellSize = +(boxSize / totalSize).toFixed(3);
        const offsetX = 9;
        const offsetY = 9;
        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            if (qr.modules.get(row, col)) {
              const x = +(offsetX + (col + margin) * cellSize).toFixed(2);
              const y = +(offsetY + (row + margin) * cellSize).toFixed(2);
              qrPathD += `M${x},${y}h${cellSize}v${cellSize}h-${cellSize}z `;
            }
          }
        }
      } catch (e) {
        console.error("QR build error in SVG markup:", e);
      }
    }

    return `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="640" height="400" viewBox="0 0 640 400" style="background:#090b1c; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <defs>
    <!-- Card Metallic Obsidian & Deep Indigo Gradient -->
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#191e4f" />
      <stop offset="40%" stop-color="#101438" />
      <stop offset="80%" stop-color="#1b1548" />
      <stop offset="100%" stop-color="#241b5a" />
    </linearGradient>

    <!-- Vibrant Luminous Neon Border -->
    <linearGradient id="neonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="35%" stop-color="#5F4DFF" />
      <stop offset="70%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>

    <!-- Top Neon Circuit Flare -->
    <radialGradient id="topFlare" cx="80%" cy="10%" r="65%">
      <stop offset="0%" stop-color="#5F4DFF" stop-opacity="0.45" />
      <stop offset="45%" stop-color="#00F0FF" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Gold Contactless EMV Chip -->
    <linearGradient id="goldChip" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082" />
      <stop offset="50%" stop-color="#FFB300" />
      <stop offset="100%" stop-color="#FF8F00" />
    </linearGradient>

    <!-- Avatar Rounded Clip Mask -->
    <clipPath id="avatarClip">
      <rect x="35" y="72" width="90" height="90" rx="18" />
    </clipPath>
  </defs>

  <!-- Base Card Canvas -->
  <rect x="4" y="4" width="632" height="392" rx="24" fill="url(#cardGrad)" stroke="url(#neonBorder)" stroke-width="3.5" />
  <rect x="4" y="4" width="632" height="392" rx="24" fill="url(#topFlare)" />

  <!-- Corner Tech Brackets -->
  <path d="M 16 42 L 16 16 L 42 16" stroke="#00F0FF" stroke-width="3" fill="none" />
  <path d="M 624 42 L 624 16 L 598 16" stroke="#5F4DFF" stroke-width="3" fill="none" />
  <path d="M 16 358 L 16 384 L 42 384" stroke="#5F4DFF" stroke-width="3" fill="none" />
  <path d="M 624 358 L 624 384 L 598 384" stroke="#00F0FF" stroke-width="3" fill="none" />

  <!-- Subtle Cybergrid Circuit Lines -->
  <g opacity="0.18" stroke="#00F0FF" stroke-width="1.2">
    <line x1="30" y1="58" x2="610" y2="58" />
    <line x1="30" y1="235" x2="610" y2="235" />
    <line x1="30" y1="325" x2="610" y2="325" />
  </g>

  <!-- Top Header Line -->
  <g transform="translate(35, 38)">
    <circle cx="0" cy="0" r="4.5" fill="#00F0FF" />
    <text x="14" y="4.5" fill="#00F0FF" font-size="12" font-weight="900" letter-spacing="2.5">XD CODE CLUB // GUILD CREDENTIAL</text>
  </g>

  <!-- Verified Status Pill (Top Right) -->
  <g transform="translate(450, 24)">
    <rect x="0" y="0" width="144" height="28" rx="14" fill="#052e16" stroke="#00FF9D" stroke-width="2" />
    <circle cx="16" cy="14" r="4" fill="#00FF9D" />
    <text x="28" y="18" fill="#00FF9D" font-size="10" font-weight="900" letter-spacing="1">VERIFIED BUILDER</text>
  </g>

  <!-- Member Avatar Frame & Photo -->
  <rect x="33" y="70" width="94" height="94" rx="20" fill="#15193f" stroke="#00F0FF" stroke-width="2.5" />
  <image href="${finalAvatar}" xlink:href="${finalAvatar}" x="35" y="72" width="90" height="90" clip-path="url(#avatarClip)" preserveAspectRatio="xMidYMid slice" />

  <!-- Gold Contactless EMV Chip -->
  <rect x="35" y="174" width="46" height="34" rx="6" fill="url(#goldChip)" stroke="#FFF" stroke-width="1" />
  <line x1="35" y1="191" x2="81" y2="191" stroke="#B45309" stroke-width="1.5" />
  <line x1="58" y1="174" x2="58" y2="208" stroke="#B45309" stroke-width="1.5" />
  <text x="88" y="196" fill="#00F0FF" font-size="10" font-weight="bold" font-family="monospace">NFC</text>

  <!-- Member Name & Roles (Ultra High-Contrast Crisp Typography) -->
  <text x="142" y="98" fill="#FFFFFF" font-size="23" font-weight="900" letter-spacing="1">${member.name.toUpperCase()}</text>
  <text x="142" y="122" fill="#00F0FF" font-size="13.5" font-weight="bold" letter-spacing="0.5">${member.role.toUpperCase()}</text>
  <text x="142" y="144" fill="#F8FAFC" font-size="11" font-weight="600">ShriRam College of Engineering &amp; Management (SRCEM)</text>
  <text x="142" y="162" fill="#CBD5E1" font-size="10">Part of ShriRam Group of Colleges, Banmore (near Gwalior)</text>

  <!-- Specialization & Level Badges -->
  <g transform="translate(142, 174)">
    <rect x="0" y="0" width="105" height="24" rx="7" fill="#2e1065" stroke="#a855f7" stroke-width="1.5" />
    <text x="52" y="16" fill="#F3E8FF" font-size="10" font-weight="bold" text-anchor="middle">${(member.domain || "CORE").toUpperCase()} GUILD</text>

    <rect x="115" y="0" width="85" height="24" rx="7" fill="#082f49" stroke="#00F0FF" stroke-width="1.5" />
    <text x="157" y="16" fill="#E0F2FE" font-size="10" font-weight="bold" text-anchor="middle">LEVEL 3 ARCH</text>
  </g>

  <!-- Scannable High-Contrast White QR Code Plate (Pure Vector Modules) -->
  <g transform="translate(450, 72)">
    <rect x="0" y="0" width="144" height="144" rx="14" fill="#FFFFFF" stroke="#00F0FF" stroke-width="3" />
    <path fill="#000000" d="${qrPathD}" />
    <text x="72" y="166" fill="#F8FAFC" font-size="10" font-weight="bold" letter-spacing="1.2" text-anchor="middle">SCAN TO VERIFY</text>
    <text x="72" y="180" fill="#00F0FF" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">xdcodeclub.netlify.app</text>
  </g>

  <!-- Credential ID Box -->
  <g transform="translate(35, 258)">
    <text x="0" y="0" fill="#94A3B8" font-size="10.5" font-weight="bold" letter-spacing="1">OFFICIAL CREDENTIAL ID</text>
    <rect x="0" y="8" width="235" height="30" rx="7" fill="#1e1b4b" stroke="#5F4DFF" stroke-width="1.5" />
    <text x="12" y="28" fill="#FFFFFF" font-size="13" font-family="monospace" font-weight="bold">${credentialId}</text>

    <text x="255" y="0" fill="#94A3B8" font-size="10.5" font-weight="bold" letter-spacing="1">CAMPUS BASE</text>
    <text x="255" y="28" fill="#00F0FF" font-size="13" font-weight="bold">LAB 304 • CSE DEPARTMENT</text>
  </g>

  <!-- Bottom Barcode & Security Strip -->
  <g transform="translate(35, 335)">
    <!-- High-Density Frequency Barcode -->
    <rect x="0" y="0" width="3" height="34" fill="#5F4DFF" />
    <rect x="5" y="0" width="2" height="34" fill="#FFFFFF" />
    <rect x="9" y="0" width="4" height="34" fill="#00F0FF" />
    <rect x="15" y="0" width="1" height="34" fill="#FFFFFF" />
    <rect x="19" y="0" width="5" height="34" fill="#5F4DFF" />
    <rect x="27" y="0" width="2" height="34" fill="#FFFFFF" />
    <rect x="32" y="0" width="3" height="34" fill="#00F0FF" />
    <rect x="38" y="0" width="4" height="34" fill="#5F4DFF" />
    <rect x="45" y="0" width="1" height="34" fill="#FFFFFF" />
    <rect x="49" y="0" width="5" height="34" fill="#00F0FF" />
    <rect x="57" y="0" width="2" height="34" fill="#FFFFFF" />
    <rect x="62" y="0" width="4" height="34" fill="#5F4DFF" />
    <rect x="69" y="0" width="3" height="34" fill="#FFFFFF" />
    <rect x="75" y="0" width="2" height="34" fill="#00F0FF" />
    <rect x="80" y="0" width="4" height="34" fill="#5F4DFF" />
    <rect x="87" y="0" width="1" height="34" fill="#FFFFFF" />
    <rect x="91" y="0" width="3" height="34" fill="#00F0FF" />

    <text x="110" y="16" fill="#E2E8F0" font-size="10.5" font-family="monospace" font-weight="bold">SEC-AUTH // 256-BIT CRYPTOGRAPHIC VERIFICATION</text>
    <text x="110" y="30" fill="#94A3B8" font-size="9" font-family="monospace">HASH: SHA256::7F8B4C9E...B204 // PERMANENT GUILD PASS</text>
  </g>
</svg>
    `.trim();
  };

  const downloadSvgBadge = () => {
    setIsDownloadingSvg(true);
    try {
      const svgMarkup = generateSvgMarkup();
      let url;
      if (typeof window !== "undefined" && window.URL && window.Blob) {
        const blob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
        url = URL.createObjectURL(blob);
      } else {
        url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgMarkup);
      }
      const link = document.createElement("a");
      link.href = url;
      link.download = `XD-Pass-${member.slug}.svg`;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (link.parentNode) link.parentNode.removeChild(link);
        if (url && url.startsWith("blob:")) URL.revokeObjectURL(url);
      }, 5000);
    } catch (e) {
      console.error("SVG Download failed:", e);
    }
    setIsDownloadingSvg(false);
  };

  // Direct Native Canvas PNG Generation:
  // QR Code drawn directly via Canvas 2D fillRect() (100% synchronous, zero network delays, zero missing codes)
  const downloadPngBadge = () => {
    setIsDownloadingPng(true);

    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1280; // 2x HD Resolution
      canvas.height = 800;
      const ctx = canvas.getContext("2d");

      // Helper for rounded rectangles
      const roundRect = (x, y, w, h, r) => {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
      };

      // 1. Draw Card Background
      const bgGrad = ctx.createLinearGradient(0, 0, 1280, 800);
      bgGrad.addColorStop(0, "#191e4f");
      bgGrad.addColorStop(0.4, "#101438");
      bgGrad.addColorStop(0.8, "#1b1548");
      bgGrad.addColorStop(1, "#241b5a");

      roundRect(8, 8, 1264, 784, 48);
      ctx.fillStyle = bgGrad;
      ctx.fill();

      // 2. Draw Vibrant Luminous Border
      const borderGrad = ctx.createLinearGradient(0, 0, 1280, 800);
      borderGrad.addColorStop(0, "#00F0FF");
      borderGrad.addColorStop(0.35, "#5F4DFF");
      borderGrad.addColorStop(0.7, "#a855f7");
      borderGrad.addColorStop(1, "#00F0FF");
      ctx.strokeStyle = borderGrad;
      ctx.lineWidth = 7;
      ctx.stroke();

      // 3. Draw Corner Tech Brackets
      ctx.strokeStyle = "#00F0FF";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(32, 84);
      ctx.lineTo(32, 32);
      ctx.lineTo(84, 32);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(1248, 84);
      ctx.lineTo(1248, 32);
      ctx.lineTo(1196, 32);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(32, 716);
      ctx.lineTo(32, 768);
      ctx.lineTo(84, 768);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(1248, 716);
      ctx.lineTo(1248, 768);
      ctx.lineTo(1196, 768);
      ctx.stroke();

      // 4. Header Bar
      ctx.fillStyle = "#00F0FF";
      ctx.font = "bold 24px monospace";
      ctx.fillText("● XD CODE CLUB // GUILD CREDENTIAL", 70, 76);

      // Verified Builder Badge
      roundRect(920, 48, 290, 56, 28);
      ctx.fillStyle = "#052e16";
      ctx.fill();
      ctx.strokeStyle = "#00FF9D";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "#00FF9D";
      ctx.font = "bold 20px monospace";
      ctx.fillText("● VERIFIED BUILDER", 950, 84);

      // 5. Typography
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "900 44px sans-serif";
      ctx.fillText(member.name.toUpperCase(), 284, 192);

      ctx.fillStyle = "#00F0FF";
      ctx.font = "bold 26px sans-serif";
      ctx.fillText(member.role.toUpperCase(), 284, 240);

      ctx.fillStyle = "#F8FAFC";
      ctx.font = "600 20px sans-serif";
      ctx.fillText("ShriRam College of Engineering & Management (SRCEM)", 284, 284);

      ctx.fillStyle = "#CBD5E1";
      ctx.font = "18px sans-serif";
      ctx.fillText("Part of ShriRam Group of Colleges, Banmore (near Gwalior)", 284, 318);

      // Guild Badge & Level Tags
      roundRect(284, 345, 200, 44, 12);
      ctx.fillStyle = "#2e1065";
      ctx.fill();
      ctx.strokeStyle = "#a855f7";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = "#F3E8FF";
      ctx.font = "bold 19px sans-serif";
      ctx.fillText(`${(member.domain || "CORE").toUpperCase()} GUILD`, 305, 375);

      roundRect(495, 345, 165, 44, 12);
      ctx.fillStyle = "#082f49";
      ctx.fill();
      ctx.strokeStyle = "#00F0FF";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = "#E0F2FE";
      ctx.font = "bold 19px sans-serif";
      ctx.fillText("LEVEL 3 ARCH", 515, 375);

      // Contactless EMV Chip
      roundRect(70, 345, 88, 64, 12);
      const goldGrad = ctx.createLinearGradient(70, 345, 158, 409);
      goldGrad.addColorStop(0, "#FFE082");
      goldGrad.addColorStop(0.5, "#FFB300");
      goldGrad.addColorStop(1, "#FF8F00");
      ctx.fillStyle = goldGrad;
      ctx.fill();
      ctx.strokeStyle = "#FFF";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = "#B45309";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(70, 377);
      ctx.lineTo(158, 377);
      ctx.moveTo(114, 345);
      ctx.lineTo(114, 409);
      ctx.stroke();

      ctx.fillStyle = "#00F0FF";
      ctx.font = "bold 19px monospace";
      ctx.fillText("NFC", 170, 386);

      // Credential ID Section
      ctx.fillStyle = "#94A3B8";
      ctx.font = "bold 21px monospace";
      ctx.fillText("OFFICIAL CREDENTIAL ID", 70, 495);

      roundRect(70, 510, 470, 60, 14);
      ctx.fillStyle = "#1e1b4b";
      ctx.fill();
      ctx.strokeStyle = "#5F4DFF";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 26px monospace";
      ctx.fillText(credentialId, 95, 550);

      // Campus Base Section
      ctx.fillStyle = "#94A3B8";
      ctx.font = "bold 21px monospace";
      ctx.fillText("CAMPUS BASE", 580, 495);

      ctx.fillStyle = "#00F0FF";
      ctx.font = "bold 26px monospace";
      ctx.fillText("LAB 304 • CSE DEPARTMENT", 580, 550);

      // Bottom Security Barcode Strip & Text
      ctx.fillStyle = "#E2E8F0";
      ctx.font = "bold 20px monospace";
      ctx.fillText("SEC-AUTH // 256-BIT CRYPTOGRAPHIC VERIFICATION", 250, 696);

      ctx.fillStyle = "#94A3B8";
      ctx.font = "17px monospace";
      ctx.fillText("HASH: SHA256::7F8B4C9E...B204 // PERMANENT GUILD PASS", 250, 726);

      let bx = 70;
      const barcodeColors = ["#5F4DFF", "#FFFFFF", "#00F0FF", "#FFFFFF", "#5F4DFF", "#00F0FF", "#5F4DFF"];
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = barcodeColors[i % barcodeColors.length];
        const bw = (i % 3 === 0) ? 7 : (i % 2 === 0) ? 5 : 3;
        ctx.fillRect(bx, 668, bw, 68);
        bx += bw + 4;
      }

      // 6. SYNCHRONOUS DIRECT QR CODE DRAW ON CANVAS PLATE
      // High-contrast white plate
      roundRect(880, 144, 288, 288, 28);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
      ctx.strokeStyle = "#00F0FF";
      ctx.lineWidth = 6;
      ctx.stroke();

      // Render QR modules directly to Canvas context
      try {
        const qr = (qrInfo && qrInfo.qr) || QRCode.create(profileUrl, { errorCorrectionLevel: "M" });
        const size = qr.modules.size;
        const margin = 2;
        const totalSize = size + margin * 2;
        const qrBox = 248;
        const cellSize = qrBox / totalSize;
        const startX = 900;
        const startY = 164;

        ctx.fillStyle = "#000000";
        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            if (qr.modules.get(row, col)) {
              ctx.fillRect(
                Math.round(startX + (col + margin) * cellSize),
                Math.round(startY + (row + margin) * cellSize),
                Math.ceil(cellSize),
                Math.ceil(cellSize)
              );
            }
          }
        }
      } catch (err) {
        console.error("Canvas QR drawing error:", err);
      }

      // QR Labels
      ctx.fillStyle = "#F8FAFC";
      ctx.font = "bold 20px monospace";
      ctx.textAlign = "center";
      ctx.fillText("SCAN TO VERIFY", 1024, 465);

      ctx.fillStyle = "#00F0FF";
      ctx.font = "bold 18px monospace";
      ctx.fillText("xdcodeclub.netlify.app", 1024, 495);
      ctx.textAlign = "left";

      // 7. Draw Avatar with Rounded Clip, then trigger PNG download
      const saveFinalPng = () => {
        try {
          const pngUrl = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = pngUrl;
          link.download = `XD-Pass-${member.slug}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (err) {
          console.error("Canvas PNG export error:", err);
        }
        setIsDownloadingPng(false);
      };

      const avImg = new Image();
      avImg.crossOrigin = "anonymous";
      avImg.onload = () => {
        try {
          ctx.save();
          roundRect(70, 144, 188, 188, 36);
          ctx.clip();
          ctx.drawImage(avImg, 70, 144, 188, 188);
          ctx.restore();

          roundRect(70, 144, 188, 188, 36);
          ctx.strokeStyle = "#00F0FF";
          ctx.lineWidth = 5;
          ctx.stroke();
        } catch (e) {
          console.warn("Avatar clip error:", e);
        }
        saveFinalPng();
      };

      avImg.onerror = () => {
        // Fallback badge if image cannot be drawn
        roundRect(70, 144, 188, 188, 36);
        ctx.fillStyle = "#15193f";
        ctx.fill();
        ctx.strokeStyle = "#00F0FF";
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.fillStyle = "#00F0FF";
        ctx.font = "bold 70px monospace";
        ctx.textAlign = "center";
        ctx.fillText((member.name || "XD")[0].toUpperCase(), 164, 260);
        ctx.textAlign = "left";

        saveFinalPng();
      };

      avImg.src = avatarDataUrl || member.avatar || "/xdcodeclub-logo2.png";
    } catch (e) {
      console.error("PNG direct generation error:", e);
      setIsDownloadingPng(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl transition-opacity animate-fadeIn overflow-y-auto">
      {/* Click backdrop to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center my-auto">
        {/* Header Bar */}
        <div className="w-full flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <h3 className="monu text-sm sm:text-base text-white font-bold flex items-center gap-2">
              <span className="text-[#00F0FF]">Official</span> Member ID Card Template
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 3D Holographic Card Template with Luminous High-Contrast Cyberpunk Styling */}
        <div
          style={{ perspective: "1000px" }}
          className="w-full flex justify-center py-2"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="w-full max-w-[560px] rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#191e4f] via-[#101438] to-[#241b5a] border-2 border-[#00F0FF]/80 shadow-[0_0_60px_rgba(0,240,255,0.35),0_0_90px_rgba(95,77,255,0.3)] relative overflow-hidden group select-none"
          >
            {/* Holographic Specular Highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-cyan-400/20 pointer-events-none" />

            {/* Corner Tech Brackets */}
            <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-purple-400" />
            <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />

            {/* Card Header Row */}
            <div className="flex justify-between items-start border-b border-indigo-400/30 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/xdcodeclub-logo2.png"
                  alt="XD Logo"
                  className="w-11 h-11 object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]"
                />
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-[#00F0FF] font-black block">
                    XD CODE CLUB GUILD
                  </span>
                  <span className="text-xs text-white font-bold comfort block">
                    SRCEM • ShriRam Group of Colleges
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 border border-emerald-400 text-emerald-300 text-[10px] font-mono font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED BUILDER
                </span>
                <span className="text-[9.5px] text-cyan-200 font-mono block mt-1 font-semibold">
                  BANMORE NODE // LAB 304
                </span>
              </div>
            </div>

            {/* Card Middle: Profile Details + Verified QR Code Plate */}
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-between mb-5">
              {/* Member Details Column */}
              <div className="flex items-center sm:items-start gap-4 flex-1">
                {/* Avatar with Vibrant Border */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-gradient-to-br from-cyan-400 via-indigo-600 to-purple-500 flex-shrink-0 shadow-[0_0_25px_rgba(0,240,255,0.5)]">
                  <img
                    src={avatarDataUrl || member.avatar || "/xdcodeclub-logo2.png"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl bg-black"
                  />
                  <div className="absolute -bottom-1.5 -right-1.5 bg-[#090b1c] text-[#00F0FF] text-[9px] font-mono px-1.5 py-0.5 rounded border border-cyan-400 font-black">
                    LVL 3
                  </div>
                </div>

                {/* Identity Information */}
                <div className="flex flex-col">
                  <h2 className="monu text-lg sm:text-2xl text-white font-black tracking-wide">
                    {member.name}
                  </h2>
                  <span className="text-xs sm:text-sm font-bold text-[#00F0FF] comfort mt-0.5">
                    {member.role}
                  </span>
                  <span className="text-xs text-indigo-100 font-medium comfort mt-1">
                    {member.domain} Guild • Lab 304
                  </span>
                  <div className="mt-2.5 flex items-center gap-2">
                    {/* Simulated EMV Contactless Gold Chip */}
                    <div className="w-9 h-6 rounded bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 border border-amber-100 relative overflow-hidden flex-shrink-0 shadow-md">
                      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-800" />
                      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-amber-800" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold tracking-wider">
                      NFC ENABLED
                    </span>
                  </div>
                </div>
              </div>

              {/* Scannable QR Code Plate (White High-Contrast Background, Pure Vector) */}
              <div className="flex flex-col items-center p-2 rounded-2xl bg-white border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.4)] flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white rounded-lg">
                  {qrInfo && qrInfo.d ? (
                    <svg
                      viewBox="0 0 144 144"
                      className="w-full h-full"
                      shapeRendering="crispEdges"
                    >
                      <path fill="#000000" d={qrInfo.d} />
                    </svg>
                  ) : (
                    <div className="font-mono text-[9px] text-black font-bold">
                      VERIFY QR
                    </div>
                  )}
                </div>
                <span className="text-[9px] font-mono text-black font-black tracking-wider mt-0.5">
                  SCAN TO VERIFY
                </span>
              </div>
            </div>

            {/* Bottom Bar: Credential ID & Security Barcode */}
            <div className="pt-3.5 border-t border-indigo-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="font-mono text-xs text-indigo-200">
                <span className="text-cyan-400 font-bold">ID: </span>
                <span className="text-white font-bold bg-white/15 px-2 py-0.5 rounded border border-white/20">
                  {credentialId}
                </span>
              </div>

              {/* Barcode Strip Graphic */}
              <div className="flex items-center gap-[2px] h-5 opacity-95">
                <div className="w-[3px] h-full bg-cyan-400" />
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[4px] h-full bg-purple-500" />
                <div className="w-[2px] h-full bg-white" />
                <div className="w-[5px] h-full bg-cyan-300" />
                <div className="w-[1px] h-full bg-white" />
                <div className="w-[3px] h-full bg-purple-400" />
                <div className="w-[2px] h-full bg-cyan-400" />
                <div className="w-[4px] h-full bg-white" />
                <div className="w-[1px] h-full bg-cyan-300" />
                <div className="w-[5px] h-full bg-purple-500" />
                <div className="w-[2px] h-full bg-white" />
                <div className="w-[3px] h-full bg-cyan-400" />
                <span className="text-[9px] font-mono text-cyan-300 ml-2 font-bold">
                  SEC-2026-X
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons: Vector SVG, HD PNG, Copy URL, Print */}
        <div className="w-full flex flex-wrap items-center justify-center gap-3 mt-5">
          {/* Download Vector SVG */}
          <button
            onClick={downloadSvgBadge}
            disabled={isDownloadingSvg}
            className="ripple px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F0FF] via-indigo-600 to-[#5F4DFF] hover:brightness-110 text-white text-xs font-bold monu flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer border border-cyan-300/40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{isDownloadingSvg ? "Saving SVG..." : "Download Vector SVG"}</span>
          </button>

          {/* Download High-Res PNG */}
          <button
            onClick={downloadPngBadge}
            disabled={isDownloadingPng}
            className="ripple px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-700 hover:brightness-110 text-white text-xs font-bold monu flex items-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all cursor-pointer border border-purple-400/40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{isDownloadingPng ? "Rendering PNG..." : "Download HD PNG"}</span>
          </button>

          {/* Copy Verification Link */}
          <button
            onClick={copyProfileLink}
            className="ripple px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold monu flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <span>{copied ? "Link Copied! ✓" : "Copy Verification URL"}</span>
          </button>

          {/* Print Badge */}
          <button
            onClick={handlePrint}
            className="ripple px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-100 hover:text-white text-xs font-semibold monu flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Print Badge</span>
          </button>
        </div>
      </div>
    </div>
  );
}
