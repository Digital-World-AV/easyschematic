import { port } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * DWAV-verified device templates, compiled from the CRM Device Ports subform.
 * Ship this file via a normal push+deploy so every DWAV EasySchematic user gets
 * these automatically -- no manual "Import from JSON" step, no localStorage
 * dependency. Each device's `id` should be treated as stable: it round-trips
 * back to the CRM product's compiled template.
 *
 * Do not edit by hand for anything CRM-managed -- regenerate from CRM via the
 * Design Studio compiler once it exists. See dwav-design-studio/docs/CREATED.md.
 */
export const templates: DeviceTemplate[] = [
  {
    id: "37e3b485-ed14-4d44-83d7-703cc6b6df3f",
    dwavVerified: true,
    deviceType: "wired-mic",
    label: "Audio-Technica BP3600",
    manufacturer: "Audio-Technica",
    modelNumber: "BP3600",
    referenceUrl: "https://www.audio-technica.com/en-us/bp3600",
    searchTerms: ["bp3600", "immersive audio", "microphone array", "8-channel", "atmos mic", "dwav"],
    widthMm: 160.4,
    depthMm: 160.4,
    heightMm: 217.7,
    weightKg: 0.656,
    unitCost: 8472,   // MSRP — DWAV rule: never dealer cost in this public file
    ports: [
      {
        ...port("Audio Out (8-ch)", "analog-audio", "output", "multipin"),
        channelCount: 8,
        notes:
          "LEMO 2B 10-pin multi-out on mic body. Ships with LEMO-to-XLRM (x8) breakout cable for 8 discrete channels; each channel requires 48V phantom from the downstream device.",
      },
    ],
  },
  {
    id: "7af08446-b1a9-49ef-a0b7-88b6d789be31",
    dwavVerified: true,
    deviceType: "wired-mic",
    label: "Audio-Technica ATND1061DAN",
    manufacturer: "Audio-Technica",
    modelNumber: "ATND1061DAN",
    referenceUrl: "https://www.audio-technica.com/en-us/atnd1061",
    searchTerms: ["atnd1061", "beamforming", "ceiling array", "dante", "poe", "dwav"],
    widthMm: 227.5,
    depthMm: 227.5,
    heightMm: 30,
    weightKg: 1.25,
    unitCost: 4844,
    ports: [
      {
        ...port("Dante Primary", "dante", "bidirectional", "rj45"),
        addressable: true,
        poeDrawW: 7,
        notes:
          "Carries Dante audio + mic control data (100 Mbps control over 1 Gbps link). PoE input, IEEE 802.3af Class 0, 7W max.",
      },
      {
        ...port("Dante Secondary", "dante", "bidirectional", "rj45"),
        addressable: true,
        notes: "Redundant Dante network port (Single Cable or Split mode).",
      },
      {
        ...port("Analog Input", "analog-audio", "input", "phoenix"),
        notes: "Euroblock 3-pin. External analog mic/source input.",
      },
      {
        ...port("Analog Output", "analog-audio", "output", "phoenix"),
        notes: "Euroblock 3-pin. Local analog output for non-Dante integration.",
      },
      {
        ...port("GPI", "contact-closure", "input", "phoenix"),
        notes: "Euroblock 3-pin general-purpose trigger input.",
      },
    ],
  },
  {
    id: "46f26a4d-ce40-4f16-b042-a4e34c1c4d36",
    dwavVerified: true,
    deviceType: "speaker",
    label: "Martin Audio ACS-40TS-W",
    manufacturer: "Martin Audio",
    modelNumber: "ACS-40TS-W",
    referenceUrl: "https://martin-audio.com/products/loudspeakers/acs-40ts",
    searchTerms: ["acs-40ts", "adorn", "ceiling speaker", "70v", "100v", "dwav"],
    widthMm: 221,
    depthMm: 221,
    heightMm: 115,
    weightKg: 2.2,
    unitCost: 135,
    ports: [
      {
        ...port("Audio In", "speaker-level", "input", "terminal-block"),
        notes:
          "Ceramic terminal block, positions 1&2 (+/-). 70V taps: 20/10/5/2.5W; 100V taps: 20/10/5W; 16-ohm direct also selectable.",
      },
      {
        ...port("Link Out", "speaker-level", "output", "terminal-block"),
        notes: "Ceramic terminal block, positions 3&4 (+/-). Loop-through to next speaker in a daisy chain.",
      },
    ],
  },
  {
    id: "1f4c9a2e-6b3d-4e57-8a10-2c9e7d5b4a01",
    deviceType: "display",
    label: "Samsung QM32C",
    shortName: "QM32C",
    manufacturer: "Samsung",
    modelNumber: "QM32C",
    referenceUrl: "https://images.samsung.com/is/content/samsung/assets/de/business/displays/pdf/Datenblatt_Smart-Signage_LH32QMCEBGCXEN.pdf",
    searchTerms: ["qm32c", "qmc", "samsung signage", "32 inch", "commercial display", "tizen", "dwav"],
    widthMm: 727.3,
    heightMm: 421.9,
    depthMm: 28.5,
    weightKg: 5.2,
    powerDrawW: 29,
    voltage: "100-240V",
    unitCost: 840,
    dwavVerified: true,
    // 32" Full HD QMC-series commercial display, VESA 100x100 M4. Verified 2026-09-11 against Samsung's own
    // spec sheets (see referenceUrl); CRM Products record carries the same ports + ES_Template_ID.
    ports: [
      { ...port("HDMI In 1", "hdmi", "input", "hdmi"), notes: "HDMI (HDCP 2.2)" },
      { ...port("HDMI In 2", "hdmi", "input", "hdmi"), notes: "HDMI (HDCP 2.2)" },
      { ...port("HDMI In 3", "hdmi", "input", "hdmi"), notes: "HDMI (HDCP 2.2)" },
      { ...port("USB 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port: media playback, firmware, peripherals." },
      { ...port("USB 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port." },
      { ...port("Audio Out", "analog-audio", "output", "trs-eighth"), notes: "Stereo mini-jack line out. No analog audio input on this series." },
      { ...port("RS232C In", "serial", "input", "trs-eighth"), notes: "RS-232C on a 3.5 mm stereo jack; Samsung ships an RS232C (IN) gender adapter to DB9 in the box." },
      { ...port("RS232C Out", "serial", "output", "trs-eighth"), notes: "RS-232C loop-through to the next display (3.5 mm stereo jack)." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 for MagicINFO/SSSP, MDC control and firmware." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "Built-in Wi-Fi 2.4/5 GHz dual band." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Built-in Bluetooth." },
      { ...port("AC Power In", "power", "input", "iec"), notes: "AC 100-240 V 50/60 Hz, detachable IEC cord included. 29 W typical (max not published)." },
    ],
  },
  {
    id: "2a5d0b3f-7c4e-4f68-9b21-3d0f8e6c5b02",
    deviceType: "display",
    label: "Samsung QM43C",
    shortName: "QM43C",
    manufacturer: "Samsung",
    modelNumber: "QM43C",
    referenceUrl: "https://image-us.samsung.com/SamsungUS/samsung/us/tvs/decrypted/QMC-Crystal-UHD-Series-Leaflet.pdf",
    searchTerms: ["qm43c", "qmc", "samsung signage", "43 inch", "commercial display", "tizen", "dwav"],
    widthMm: 969.5,
    heightMm: 557.8,
    depthMm: 28.5,
    weightKg: 8.8,
    powerDrawW: 121,
    voltage: "100-240V",
    unitCost: 1090,
    dwavVerified: true,
    // 43" 4K UHD QMC-series commercial display, VESA 200x200 M8. Verified 2026-09-11 against Samsung's own
    // spec sheets (see referenceUrl); CRM Products record carries the same ports + ES_Template_ID.
    ports: [
      { ...port("DP In", "displayport", "input", "displayport"), notes: "DisplayPort 1.2 (also the daisy-chain input for DP video-wall mode)." },
      { ...port("HDMI In 1", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 2", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 3", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("USB 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port: media playback, firmware, peripherals." },
      { ...port("USB 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port." },
      { ...port("Audio Out", "analog-audio", "output", "trs-eighth"), notes: "Stereo mini-jack line out. No analog audio input on this series." },
      { ...port("RS232C In", "serial", "input", "trs-eighth"), notes: "RS-232C on a 3.5 mm stereo jack; Samsung ships an RS232C (IN) gender adapter to DB9 in the box." },
      { ...port("RS232C Out", "serial", "output", "trs-eighth"), notes: "RS-232C loop-through to the next display (3.5 mm stereo jack)." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 for MagicINFO/SSSP, MDC control and firmware." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "Built-in Wi-Fi 2.4/5 GHz dual band." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Built-in Bluetooth." },
      { ...port("AC Power In", "power", "input", "iec"), notes: "AC 100-240 V 50/60 Hz, detachable IEC cord included. 121 W max." },
    ],
  },
  {
    id: "3b6e1c40-8d5f-4079-ac32-4e1a9f7d6c03",
    deviceType: "display",
    label: "Samsung QM55C",
    shortName: "QM55C",
    manufacturer: "Samsung",
    modelNumber: "QM55C",
    referenceUrl: "https://image-us.samsung.com/SamsungUS/samsung/us/tvs/decrypted/QMC-Crystal-UHD-Series-Leaflet.pdf",
    searchTerms: ["qm55c", "qmc", "samsung signage", "55 inch", "commercial display", "tizen", "dwav"],
    widthMm: 1237.9,
    heightMm: 708.8,
    depthMm: 28.5,
    weightKg: 15.7,
    powerDrawW: 154,
    voltage: "100-240V",
    unitCost: 1660,
    dwavVerified: true,
    // 55" 4K UHD QMC-series commercial display, VESA 200x200 M8. Verified 2026-09-11 against Samsung's own
    // spec sheets (see referenceUrl); CRM Products record carries the same ports + ES_Template_ID.
    ports: [
      { ...port("DP In", "displayport", "input", "displayport"), notes: "DisplayPort 1.2 (also the daisy-chain input for DP video-wall mode)." },
      { ...port("HDMI In 1", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 2", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 3", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("USB 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port: media playback, firmware, peripherals." },
      { ...port("USB 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port." },
      { ...port("Audio Out", "analog-audio", "output", "trs-eighth"), notes: "Stereo mini-jack line out. No analog audio input on this series." },
      { ...port("RS232C In", "serial", "input", "trs-eighth"), notes: "RS-232C on a 3.5 mm stereo jack; Samsung ships an RS232C (IN) gender adapter to DB9 in the box." },
      { ...port("RS232C Out", "serial", "output", "trs-eighth"), notes: "RS-232C loop-through to the next display (3.5 mm stereo jack)." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 for MagicINFO/SSSP, MDC control and firmware." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "Built-in Wi-Fi 2.4/5 GHz dual band." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Built-in Bluetooth." },
      { ...port("AC Power In", "power", "input", "iec"), notes: "AC 100-240 V 50/60 Hz, detachable IEC cord included. 154 W max." },
    ],
  },
  {
    id: "4c7f2d51-9e60-418a-bd43-5f2b0a8e7d04",
    deviceType: "display",
    label: "Samsung QM65C",
    shortName: "QM65C",
    manufacturer: "Samsung",
    modelNumber: "QM65C",
    referenceUrl: "https://image-us.samsung.com/SamsungUS/samsung/us/tvs/decrypted/QMC-Crystal-UHD-Series-Leaflet.pdf",
    searchTerms: ["qm65c", "qmc", "samsung signage", "65 inch", "commercial display", "tizen", "dwav"],
    widthMm: 1456.8,
    heightMm: 831.9,
    depthMm: 28.5,
    weightKg: 21.5,
    powerDrawW: 187,
    voltage: "100-240V",
    unitCost: 1900,
    dwavVerified: true,
    // 65" 4K UHD QMC-series commercial display, VESA 400x300 M8. Verified 2026-09-11 against Samsung's own
    // spec sheets (see referenceUrl); CRM Products record carries the same ports + ES_Template_ID.
    ports: [
      { ...port("DP In", "displayport", "input", "displayport"), notes: "DisplayPort 1.2 (also the daisy-chain input for DP video-wall mode)." },
      { ...port("HDMI In 1", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 2", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 3", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("USB 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port: media playback, firmware, peripherals." },
      { ...port("USB 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port." },
      { ...port("Audio Out", "analog-audio", "output", "trs-eighth"), notes: "Stereo mini-jack line out. No analog audio input on this series." },
      { ...port("RS232C In", "serial", "input", "trs-eighth"), notes: "RS-232C on a 3.5 mm stereo jack; Samsung ships an RS232C (IN) gender adapter to DB9 in the box." },
      { ...port("RS232C Out", "serial", "output", "trs-eighth"), notes: "RS-232C loop-through to the next display (3.5 mm stereo jack)." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 for MagicINFO/SSSP, MDC control and firmware." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "Built-in Wi-Fi 2.4/5 GHz dual band." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Built-in Bluetooth." },
      { ...port("AC Power In", "power", "input", "iec"), notes: "AC 100-240 V 50/60 Hz, detachable IEC cord included. 187 W max." },
    ],
  },
  {
    id: "5d803e62-af71-429b-8e54-603c1b9f8e05",
    deviceType: "display",
    label: "Samsung QM75C",
    shortName: "QM75C",
    manufacturer: "Samsung",
    modelNumber: "QM75C",
    referenceUrl: "https://image-us.samsung.com/SamsungUS/samsung/us/tvs/decrypted/QMC-Crystal-UHD-Series-Leaflet.pdf",
    searchTerms: ["qm75c", "qmc", "samsung signage", "75 inch", "commercial display", "tizen", "dwav"],
    widthMm: 1682.3,
    heightMm: 960.4,
    depthMm: 28.5,
    weightKg: 33.0,
    powerDrawW: 214.5,
    voltage: "100-240V",
    unitCost: 4300,
    dwavVerified: true,
    // 75" 4K UHD QMC-series commercial display, VESA 400x400 M8. Verified 2026-09-11 against Samsung's own
    // spec sheets (see referenceUrl); CRM Products record carries the same ports + ES_Template_ID.
    ports: [
      { ...port("DP In", "displayport", "input", "displayport"), notes: "DisplayPort 1.2 (also the daisy-chain input for DP video-wall mode)." },
      { ...port("HDMI In 1", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 2", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 3", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("USB 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port: media playback, firmware, peripherals." },
      { ...port("USB 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port." },
      { ...port("Audio Out", "analog-audio", "output", "trs-eighth"), notes: "Stereo mini-jack line out. No analog audio input on this series." },
      { ...port("RS232C In", "serial", "input", "trs-eighth"), notes: "RS-232C on a 3.5 mm stereo jack; Samsung ships an RS232C (IN) gender adapter to DB9 in the box." },
      { ...port("RS232C Out", "serial", "output", "trs-eighth"), notes: "RS-232C loop-through to the next display (3.5 mm stereo jack)." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 for MagicINFO/SSSP, MDC control and firmware." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "Built-in Wi-Fi 2.4/5 GHz dual band." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Built-in Bluetooth." },
      { ...port("AC Power In", "power", "input", "iec"), notes: "AC 100-240 V 50/60 Hz, detachable IEC cord included. 214.5 W max." },
    ],
  },
  {
    id: "6e914f73-b082-43ac-9f65-714d2ca09f06",
    deviceType: "display",
    label: "Samsung QM85C",
    shortName: "QM85C",
    manufacturer: "Samsung",
    modelNumber: "QM85C",
    referenceUrl: "https://image-us.samsung.com/SamsungUS/samsung/us/tvs/decrypted/QMC-Crystal-UHD-Series-Leaflet.pdf",
    searchTerms: ["qm85c", "qmc", "samsung signage", "85 inch", "commercial display", "tizen", "dwav"],
    widthMm: 1904.3,
    heightMm: 1085.3,
    depthMm: 28.5,
    weightKg: 41.4,
    powerDrawW: 330,
    voltage: "100-240V",
    unitCost: 6300,
    dwavVerified: true,
    // 85" 4K UHD QMC-series commercial display, VESA 400x400 M8. Verified 2026-09-11 against Samsung's own
    // spec sheets (see referenceUrl); CRM Products record carries the same ports + ES_Template_ID.
    ports: [
      { ...port("DP In", "displayport", "input", "displayport"), notes: "DisplayPort 1.2 (also the daisy-chain input for DP video-wall mode)." },
      { ...port("HDMI In 1", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 2", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 3", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("USB 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port: media playback, firmware, peripherals." },
      { ...port("USB 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port." },
      { ...port("Audio Out", "analog-audio", "output", "trs-eighth"), notes: "Stereo mini-jack line out. No analog audio input on this series." },
      { ...port("RS232C In", "serial", "input", "trs-eighth"), notes: "RS-232C on a 3.5 mm stereo jack; Samsung ships an RS232C (IN) gender adapter to DB9 in the box." },
      { ...port("RS232C Out", "serial", "output", "trs-eighth"), notes: "RS-232C loop-through to the next display (3.5 mm stereo jack)." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 for MagicINFO/SSSP, MDC control and firmware." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "Built-in Wi-Fi 2.4/5 GHz dual band." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Built-in Bluetooth." },
      { ...port("AC Power In", "power", "input", "iec"), notes: "AC 100-240 V 50/60 Hz, detachable IEC cord included. 330 W max." },
    ],
  },
  {
    id: "7fa25084-c193-44bd-a076-825e3db1a007",
    deviceType: "display",
    label: "Samsung QM98C",
    shortName: "QM98C",
    manufacturer: "Samsung",
    modelNumber: "QM98C",
    referenceUrl: "https://image-us.samsung.com/SamsungUS/samsung/us/tvs/decrypted/Samsung-QH98C_QM98C-Enterprise-Leaflet.pdf",
    searchTerms: ["qm98c", "qmc", "samsung signage", "98 inch", "commercial display", "tizen", "dwav"],
    widthMm: 2193.2,
    heightMm: 1248.8,
    depthMm: 48.1,
    weightKg: 56.3,
    powerDrawW: 363,
    voltage: "100-240V",
    unitCost: 8999,
    dwavVerified: true,
    // 98" 4K UHD QMC-series commercial display, VESA 600x400 M8. Verified 2026-09-11 against Samsung's own
    // spec sheets (see referenceUrl); CRM Products record carries the same ports + ES_Template_ID.
    ports: [
      { ...port("DP In", "displayport", "input", "displayport"), notes: "DisplayPort 1.2 (also the daisy-chain input for DP video-wall mode)." },
      { ...port("HDMI In 1", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 2", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("HDMI In 3", "hdmi", "input", "hdmi"), notes: "HDMI 2.0" },
      { ...port("USB 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port: media playback, firmware, peripherals." },
      { ...port("USB 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 host port." },
      { ...port("Audio Out", "analog-audio", "output", "trs-eighth"), notes: "Stereo mini-jack line out. No analog audio input on this series." },
      { ...port("RS232C In", "serial", "input", "trs-eighth"), notes: "RS-232C on a 3.5 mm stereo jack; Samsung ships an RS232C (IN) gender adapter to DB9 in the box." },
      { ...port("RS232C Out", "serial", "output", "trs-eighth"), notes: "RS-232C loop-through to the next display (3.5 mm stereo jack)." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 for MagicINFO/SSSP, MDC control and firmware." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "Built-in Wi-Fi 2.4/5 GHz dual band." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Built-in Bluetooth." },
      { ...port("AC Power In", "power", "input", "iec"), notes: "AC 100-240 V 50/60 Hz, detachable IEC cord included. 363 W max." },
    ],
  },
  {
    id: "0b0ca970-834f-47a8-9e1c-84fd9d6ff3e8",
    deviceType: "video-bar",
    label: "Logitech Rally Bar",
    shortName: "Rally Bar",
    manufacturer: "Logitech",
    modelNumber: "960-001312",
    referenceUrl: "https://hub.sync.logitech.com/Rally-Bar/post/rally-bar---specifications-y6v2UoNh2YbpNKh",
    searchTerms: ["rally bar", "960-001312", "960-001308", "video bar", "logitech", "collabos", "ptz", "conference camera", "dwav"],
    widthMm: 910,
    heightMm: 164,
    depthMm: 130.5,
    weightKg: 7.08,
    powerDrawW: 90,
    voltage: "100-240V",
    unitCost: 5611.11,
    dwavVerified: true,
    // All-in-one video bar for medium/large rooms: 4K PTZ camera (motorized pan +/-25, tilt +/-15, 15x HD zoom = 5x optical x 3x digital; FOV 90 D / 82.1 H / 52.2 V), AI Viewfinder (174 D), 6-mic beamforming array (23 ft pickup), 2 x 70 mm speakers (99 dB SPL @ 8 W, 1/2 m). 910 x 164 (with table stand) x 130.5 mm, lens depth 28.8 mm, 7.08 kg. Mounts: TV Mount for Video Bars 952-000041, Wall Mount for Video Bars 952-000044.
    // Verified 2026-09-12 against Logitech's own spec page (referenceUrl); the CRM Products record
    // carries the same ports plus the camera facts (Cam_* fields) and this id as ES_Template_ID.
    ports: [
      { ...port("HDMI Out 1", "hdmi", "output", "hdmi"), notes: "HDMI 1.4 to the room display; 1080p60 max output (no 4K out)." },
      { ...port("HDMI Out 2", "hdmi", "output", "hdmi"), notes: "HDMI 1.4, second display; 1080p60 max." },
      { ...port("HDMI In", "hdmi", "input", "hdmi"), notes: "HDMI 1.4 content / BYOD input; 1080p60 passthrough (no 4K passthrough)." },
      { ...port("USB-C (PC)", "usb", "bidirectional", "usb-c"), notes: "USB 3.0 Type-C: the meeting-room PC / laptop connection in USB (PC) and BYOD modes. 2.2 m USB-A to USB-C cable included." },
      { ...port("USB-A 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 Type-A host port: Logitech Tap (USB), Swytch, DisplayLink adapter for a third display." },
      { ...port("USB-A 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 Type-A host port." },
      { ...port("USB-A 3", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 Type-A host port." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "10/100/1G Ethernet: appliance-mode meetings, Tap IP, Logitech Sync management." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "802.11a/b/g/n/ac MIMO." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Bluetooth Low Energy for the included remote control." },
      { ...port("Mic Pod In", "analog-audio", "input", "multipin"), notes: "Proprietary Logitech 12-pin Rally Mic Pod input: up to 4 Rally Mic Pods, 2 Mic Pod Hubs, 2 x 10 m extension cables." },
      { ...port("DC Power In", "power", "input", "barrel"), notes: "19 V DC from the included 90 W auto-sensing supply (PN 993-001943, 100-240 V, 4.74 A); 1.5 m DC lead. Thermal 57 BTU/hr idle, 64 in meeting." },
    ],
  },
  {
    id: "742dbf25-0edb-446e-93ff-a8977ac08e07",
    deviceType: "video-bar",
    label: "Logitech Rally Bar Mini",
    shortName: "Rally Bar Mini",
    manufacturer: "Logitech",
    modelNumber: "960-001336",
    referenceUrl: "https://hub.sync.logitech.com/rallybarmini/post/specifications---rally-bar-mini-K3ptSACa3kgpz8h",
    searchTerms: ["rally bar mini", "960-001336", "video bar", "logitech", "collabos", "ptz", "conference camera", "dwav"],
    widthMm: 719,
    heightMm: 91.4,
    depthMm: 101,
    weightKg: 4.03,
    powerDrawW: 90,
    voltage: "100-240V",
    unitCost: 3499,
    dwavVerified: true,
    // All-in-one video bar for small/medium rooms: 4K camera, motorized pan +/-25 / tilt +/-15, 4x HD digital zoom, FOV 120 D / 113 H / 80.7 V (163 x 110 total room coverage), AI Viewfinder, 6-mic beamforming array (23 ft), 70 mm woofer + 2 x 1.5 in mid-range (99 dB SPL @ 8 W, 1/2 m). 719 x 91.4 x 101 mm, 4.03 kg. Mounts: TV Mount for Video Bars 952-000041, Wall Mount for Video Bars 952-000044.
    // Verified 2026-09-12 against Logitech's own spec page (referenceUrl); the CRM Products record
    // carries the same ports plus the camera facts (Cam_* fields) and this id as ES_Template_ID.
    ports: [
      { ...port("HDMI Out 1", "hdmi", "output", "hdmi"), notes: "HDMI 1.4 to the room display; 1080p60 max output (no 4K out)." },
      { ...port("HDMI Out 2", "hdmi", "output", "hdmi"), notes: "HDMI 1.4, second display; 1080p60 max." },
      { ...port("HDMI In", "hdmi", "input", "hdmi"), notes: "HDMI 1.4 content / BYOD input; 1080p60 passthrough (no 4K passthrough)." },
      { ...port("USB-C (PC)", "usb", "bidirectional", "usb-c"), notes: "USB 3.0 Type-C: the meeting-room PC / laptop connection in USB (PC) and BYOD modes. 2.2 m USB-A to USB-C cable included." },
      { ...port("USB-A 1", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 Type-A host port: Logitech Tap (USB), Swytch, DisplayLink adapter for a third display." },
      { ...port("USB-A 2", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 Type-A host port." },
      { ...port("USB-A 3", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 Type-A host port." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "10/100/1G Ethernet: appliance-mode meetings, Tap IP, Logitech Sync management." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "802.11a/b/g/n/ac MIMO." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Bluetooth Low Energy for the included remote control." },
      { ...port("Mic Pod In", "analog-audio", "input", "multipin"), notes: "Proprietary Logitech 12-pin Rally Mic Pod input: up to 3 Rally Mic Pods, 2 Mic Pod Hubs, 2 x 10 m extension cables." },
      { ...port("DC Power In", "power", "input", "barrel"), notes: "19 V DC from the included 90 W auto-sensing supply (PN 993-001943, 100-240 V, 4.74 A); 1.5 m DC lead. Thermal 57 BTU/hr idle, 64 in meeting." },
    ],
  },
  {
    id: "cf1ac7fd-28c6-406c-b171-4f70571879c8",
    deviceType: "video-bar",
    label: "Logitech Rally Bar Huddle",
    shortName: "Rally Bar Huddle",
    manufacturer: "Logitech",
    modelNumber: "960-001577",
    referenceUrl: "https://hub.sync.logitech.com/rallybarhuddle/post/rally-bar-huddle-technical-specifications-tswoyEOkgn1Aja7",
    searchTerms: ["rally bar huddle", "960-001577", "960-001485", "video bar", "logitech", "collabos", "huddle room", "conference camera", "dwav"],
    widthMm: 549.6,
    heightMm: 78.9,
    depthMm: 76,
    weightKg: 1.8,
    powerDrawW: 40,
    voltage: "100-240V",
    unitCost: 2480.56,
    dwavVerified: true,
    // All-in-one video bar for huddle/small rooms: 4K digital-PTZ camera (digital pan +/-48 / tilt +/-32 at 4x, 4x digital zoom; FOV 120 D / 113 H / 80 V), motorized privacy shutter, 6-mic array (23 ft), 55 mm ported speaker (8 W). 549.6 x 78.9 x 76 mm, 1.8 kg. Multi Mount in the box (wall / table / display); TV Mount Adapter Kit 952-000248 for above/below a display. No Rally Mic Pod input.
    // Verified 2026-09-12 against Logitech's own spec page (referenceUrl); the CRM Products record
    // carries the same ports plus the camera facts (Cam_* fields) and this id as ES_Template_ID.
    ports: [
      { ...port("HDMI Out", "hdmi", "output", "hdmi"), notes: "HDMI 1.4 to the room display; 1080p max output. One display natively (second via a USB-to-Display adapter)." },
      { ...port("HDMI In", "hdmi", "input", "hdmi"), notes: "HDMI 1.4 content / BYOD input; 1080p60 passthrough (no 4K passthrough)." },
      { ...port("USB-C (PC)", "usb", "bidirectional", "usb-c"), notes: "USB 3.1 Type-C: the meeting-room PC / laptop connection in USB (PC) and BYOD modes. 2.2 m USB-A to USB-C cable included." },
      { ...port("USB-A", "usb", "bidirectional", "usb-a"), notes: "USB 3.1 Type-A host port: Logitech Tap (USB), USB-to-Display adapter for a second display." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "10/100/1G Ethernet: appliance-mode meetings, Tap IP, Logitech Sync management. IPv4/IPv6." },
      { ...port("Wi-Fi", "ethernet", "bidirectional", "wireless"), addressable: true, notes: "802.11a/b/g/n/ac." },
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Bluetooth Low Energy." },
      { ...port("DC Power In", "power", "input", "barrel"), notes: "19 V DC from the included auto-sensing supply (100-240 V, 2.1 A = 40 W rating); 1.5 m DC lead. No external Rally Mic Pod input on this model." },
    ],
  },
  {
    id: "5f872f2b-146e-4369-a202-ba66250f5e9f",
    deviceType: "camera",
    label: "Cisco Quad Camera",
    shortName: "Quad Camera",
    manufacturer: "Cisco",
    modelNumber: "CS-QUADCAM=",
    referenceUrl: "https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/spark-room-kit-series/datasheet-c78-738752.html",
    searchTerms: ["quad camera", "cs-quadcam", "cs-quadcam2", "room kit plus", "room kit pro", "webex", "speaker track", "cisco camera", "dwav"],
    widthMm: 950,
    heightMm: 120,
    depthMm: 102.5,
    weightKg: 4.8,
    powerDrawW: 70,
    voltage: "12V DC (100-240V adapter)",
    unitCost: 16238.48,
    dwavVerified: true,
    // Camera + speaker bar for the Room Kit Plus / Pro and SX80 integrator package: four 5K sensors (one 83 deg
    // wide lens + three 50 deg tele lenses, 5x digital zoom, 51.5 deg vertical), 6-element mic array for speaker
    // tracking ONLY (no far-end audio pickup), internal speakers 70 Hz-20 kHz / 90 dB SPL. 950 x 120 x 102.5 mm,
    // 4.8 kg. Needs a Cisco codec - it is not an all-in-one. Also sold as CS-QUADCAM+ / CS-QUADCAM2 (First
    // Light) / CS-QUADCAM2-C+ (Carbon Black): same device. Verified 2026-09-14 against Cisco's Room Kit Plus data
    // sheet, installation guide connector legend and CAD drawing D15386.01; CRM Products carries the same ports.
    ports: [
      { ...port("HDMI Out 1", "hdmi", "output", "hdmi"), notes: "Camera video to the codec camera input (Codec Plus / SX80), 1080p60. High Speed HDMI 1.4b cable." },
      { ...port("HDMI Out 2", "hdmi", "output", "hdmi"), notes: "Second camera stream, 1080p60 (dual-input codecs such as the SX80 integrator package)." },
      { ...port("Camera Control", "ethernet", "bidirectional", "rj45"), notes: "Point-to-point link to the codec's camera-control Ethernet port: control, speaker-track data and audio to the built-in speakers. Not on the LAN." },
      { ...port("Subwoofer Out", "analog-audio", "output", "rca"), notes: "Line-level RCA for an optional subwoofer; the bar's own speakers are internal (70 Hz-20 kHz, 90 dB SPL max)." },
      { ...port("USB-A", "usb", "bidirectional", "usb-a"), notes: "USB 2.0 Type-A." },
      { ...port("Maintenance", "usb", "bidirectional", "usb-micro"), notes: "Micro-USB maintenance port; factory-reset pinhole beside it." },
      { ...port("DC Power In", "power", "input", "barrel"), notes: "12 V DC from the supplied 100-240 V adapter (FSP FSP070-AHAN2 or AcBel ADF019, 5.83 A = 70 W rating). Power on/off button and Kensington slot on the same panel." },
    ],
  },
  {
    id: "b441e32b-1ff1-47fa-a1ec-23ca0e9666ac",
    deviceType: "speaker",
    label: "Biamp Desono C-IC6",
    shortName: "C-IC6",
    manufacturer: "Biamp",
    modelNumber: "Desono C-IC6",
    referenceUrl: "https://downloads.biamp.com/assets/docs/default-source/data-sheets/biamp_data_sheet_desono_c_ic6_aug23.pdf",
    searchTerms: ["desono", "c-ic6", "ceiling speaker", "conferencing loudspeaker", "biamp", "dwav"],
    widthMm: 276,
    heightMm: 151,
    depthMm: 276,
    weightKg: 3.5,
    voltage: "Passive, 8 ohm (60 W, 240 W peak)",
    unitCost: 276,
    dwavVerified: true,
    // Two-way 6.5 in coaxial conferencing ceiling loudspeaker: 60 Hz-20 kHz (-10 dB), 130 deg conical, 88 dB sensitivity, 112 dB peak SPL,
    // 8 ohm passive, 60 W continuous / 240 W peak. 151 mm deep x 276 mm dia, 248 mm cutout, 3.5 kg; C-ring, tile bridge and paintable grille
    // included; UL 2043 plenum. Euroblock (two parallel pairs) plus two RJ-45 for termination-free feeds from an AMP-450BP or TCM-XA.
    // Verified 2026-09-15 against Biamp data sheet aug23; CRM Products carries the same ports.
    ports: [
      { ...port("Speaker In (Euroblock)", "speaker-level", "input", "phoenix"), notes: "4-pole Euroblock, two parallel pairs, up to 16 AWG. 8 ohm passive, 60 W continuous (240 W peak)." },
      { ...port("Speaker In (RJ-45) 1", "speaker-level", "input", "rj45"), notes: "Termination-free speaker feed over category cable from a Tesira AMP-450BP or Parle TCM-XA." },
      { ...port("Speaker In (RJ-45) 2", "speaker-level", "passthrough", "rj45"), notes: "Parallel loop-through to the next C-IC6 on the same amplifier channel." },
    ],
  },
  {
    id: "4c83603a-5700-414f-b6a2-71683134491e",
    deviceType: "wired-mic",
    label: "Biamp Parl\u00e9 TCM-1",
    shortName: "TCM-1",
    manufacturer: "Biamp",
    modelNumber: "Parl\u00e9 TCM-1",
    referenceUrl: "https://downloads.biamp.com/assets/docs/default-source/data-sheets/biamp_data_sheet_parle_tcm-1_jul22.pdf",
    searchTerms: ["parle", "tcm-1", "pendant microphone", "beamtracking", "ceiling mic", "tesira", "biamp", "dwav"],
    widthMm: 63,
    heightMm: 51,
    depthMm: 63,
    weightKg: 0.2,
    powerDrawW: 15.4,
    voltage: "PoE IEEE 802.3at Class 3",
    unitCost: 2101,
    dwavVerified: true,
    // AVB Beamtracking pendant microphone for Tesira: pendant head 63 x 51 x 63 mm / 0.2 kg on a custom 2-pin lead (10 ft max drop) from a
    // plenum box 178 x 51 x 181 mm / 1.1 kg that carries the DSP, PoE (Class 3, 15.4 W) and a second RJ-45 for daisy-chaining up to two TCM-1EX.
    // Three 120 deg zones, 150 Hz-16 kHz, 106 dB max SPL. Verified 2026-09-15 against Biamp data sheet jul22.
    ports: [
      { ...port("Network (PoE)", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "AVB to the Tesira network from the plenum box. PoE IEEE 802.3at Class 3, 15.4 W." },
      { ...port("Pendant Mic (2-pin)", "ethernet", "input", "phoenix"), notes: "Custom 2-pin lead from the pendant head to a 2-pin 3.5 mm Phoenix on the plenum box (digital audio + power); adjustable drop, 3 m max." },
      { ...port("Daisy Chain Out", "ethernet", "output", "rj45"), notes: "To a TCM-1EX plenum box; max three mics per chain (one TCM-1 or TCM-1A plus two TCM-1EX)." },
    ],
  },
  {
    id: "8b46a786-ef1e-4fa9-9e67-cec99d60284b",
    deviceType: "wired-mic",
    label: "Biamp Parl\u00e9 TCM-XA",
    shortName: "TCM-XA",
    manufacturer: "Biamp",
    modelNumber: "Parl\u00e9 TCM-XA",
    referenceUrl: "https://downloads.biamp.com/assets/docs/default-source/data-sheets/biamp_data_sheet_parle-mics_all-models_jul22.pdf",
    searchTerms: ["parle", "tcm-xa", "tcm-x", "ceiling microphone", "beamtracking", "poe+ amplifier", "tesira", "biamp", "dwav"],
    widthMm: 150,
    heightMm: 17,
    depthMm: 150,
    weightKg: 0.34,
    powerDrawW: 30,
    voltage: "PoE+ IEEE 802.3at Class 4",
    unitCost: 3150,
    dwavVerified: true,
    // AVB Beamtracking ceiling microphone with a 2-channel PoE+ amplifier in its network box: mic head 150 mm dia x 17 mm / 0.34 kg on a 2 m
    // RJ-45 lead, network box 172 x 30 x 132 mm / 0.68 kg with DSP, PoE+ (Class 4, 30 W), an RJ-45 for a TCM-XEX (10 m max) and two RJ-45
    // speaker outputs (40 W @ 4 ohm / 30 W @ 8 ohm burst, 4 W continuous both driven). Four 90 deg zones, 109 dB max SPL.
    // Verified 2026-09-15 against Biamp Parle all-models data sheet jul22.
    ports: [
      { ...port("Network (PoE+)", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "One Cat6 (Cat5e min, 100 m max) from the IDF: AVB to the Tesira network and PoE+ Class 4 (30 W) for the box, two mic heads and both amplifier channels." },
      { ...port("Mic Head", "ethernet", "input", "rj45"), notes: "Proprietary digital audio + power to the TCM-XA mic head over category cable (Cat5e min): 2 m captive lead, 10 m max." },
      { ...port("TCM-XEX Expansion", "ethernet", "output", "rj45"), notes: "Second mic (Parle TCM-XEX), proprietary digital + power over category cable (Cat5e min), 10 m max." },
      { ...port("Speaker Out 1", "speaker-level", "output", "rj45"), notes: "Built-in Class D PoE+ amplifier channel 1 on RJ-45: Cat6 (Cat5e min) to a Desono C-IC6 RJ-45 input, no speaker cable; a second C-IC6 loops through in parallel (4 ohm). 40 W @ 4 ohm / 30 W @ 8 ohm burst, 8 W continuous one channel driven, 4 W both." },
      { ...port("Speaker Out 2", "speaker-level", "output", "rj45"), notes: "Second amplifier channel, same rating; software-selectable power vs channel count." },
    ],
  },
  {
    id: "84cff4ca-fb37-47ae-a0e8-63ac605d1f30",
    deviceType: "wired-mic",
    label: "Biamp Parl\u00e9 TCM-XEX",
    shortName: "TCM-XEX",
    manufacturer: "Biamp",
    modelNumber: "Parl\u00e9 TCM-XEX",
    referenceUrl: "https://downloads.biamp.com/assets/docs/default-source/data-sheets/biamp_data_sheet_parle_tcm-xex_nov25.pdf",
    searchTerms: ["parle", "tcm-xex", "expansion microphone", "beamtracking", "ceiling mic", "tesira", "devio", "biamp", "dwav"],
    widthMm: 150,
    heightMm: 17,
    depthMm: 150,
    weightKg: 0.34,
    voltage: "From the host TCM-X / TCM-XA box",
    unitCost: 1635,
    dwavVerified: true,
    // Beamtracking expansion ceiling microphone: 150 mm dia x 17 mm / 0.34 kg, four 90 deg zones, 109 dB max SPL. In Tesira systems it hangs
    // off the spare RJ-45 of a TCM-X or TCM-XA network box (2 m captive lead, 10 m max) and cannot stand alone; in Devio it is a standalone mic.
    // Verified 2026-09-15 against Biamp data sheet nov25.
    ports: [
      { ...port("To TCM-X / TCM-XA Box", "ethernet", "input", "rj45"), notes: "Proprietary digital audio + power from the host network box; 2 m captive lead, 10 m max. Not standalone in Tesira systems." },
    ],
  },
  {
    id: "8cafc8bb-7bfc-41bc-9fb6-f980ff485484",
    deviceType: "amplifier",
    label: "Biamp Tesira AMP-450BP",
    shortName: "AMP-450BP",
    manufacturer: "Biamp",
    modelNumber: "Tesira AMP-450BP",
    referenceUrl: "https://downloads.biamp.com/assets/docs/default-source/data-sheets/biamp_data_sheet_tesira_amp-450bp.pdf",
    searchTerms: ["tesira", "amp-450bp", "poe+ amplifier", "backpack amplifier", "conferencing amplifier", "avb", "biamp", "dwav"],
    widthMm: 195,
    heightMm: 30,
    depthMm: 120,
    weightKg: 0.7,
    powerDrawW: 30,
    voltage: "PoE+ IEEE 802.3at Class 4",
    unitCost: 1028,
    dwavVerified: true,
    // Four-channel PoE+ conferencing amplifier, AVB endpoint: 195 x 30 x 120 mm, 0.7 kg, plenum rated (UL 2043), mounts to a Desono C-IC6 back
    // can (BPAK). Class D, 50 W @ 4 ohm / 30 W @ 8 ohm burst per channel; 15 W / 7 W / 3 W continuous with 1 / 2 / 4 channels driven;
    // software-selectable power vs channel count. RJ-45 speaker outputs for termination-free category-cable runs.
    // Verified 2026-09-15 against Biamp data sheet; CRM Products carries the same ports.
    ports: [
      { ...port("AVB Network (PoE+)", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Gigabit Ethernet; AVB audio and control from the Tesira system. PoE+ IEEE 802.3at Class 4, 30 W." },
      { ...port("Speaker Out 1", "speaker-level", "output", "rj45"), notes: "Class D; 50 W @ 4 ohm / 30 W @ 8 ohm burst; 15 W continuous one channel driven, 7 W two, 3 W all four. Category cable to a Desono C-IC6." },
      { ...port("Speaker Out 2", "speaker-level", "output", "rj45"), notes: "As channel 1." },
      { ...port("Speaker Out 3", "speaker-level", "output", "rj45"), notes: "As channel 1." },
      { ...port("Speaker Out 4", "speaker-level", "output", "rj45"), notes: "As channel 1." },
    ],
  },
  {
    id: "5b83e300-4ac8-4c4e-8f11-237d1ae53f01",
    deviceType: "ptz-camera",
    label: "Cisco Room Vision PTZ",
    shortName: "Room Vision PTZ",
    manufacturer: "Cisco", modelNumber: "CS-CAM-RVPTZ-C=",
    referenceUrl: "https://www.cisco.com/c/en/us/products/collateral/collaboration-endpoints/conferencing-cameras/room-vision-ptz-ds.html",
    searchTerms: ["room vision ptz", "cs-cam-rvptz", "ttc8-13", "cisco ptz", "ptz camera", "webex camera", "room kit eq", "room kit pro", "dwav"],
    widthMm: 165, heightMm: 196, depthMm: 176, weightKg: 2.36,
    powerDrawW: 25.5,
    unitCost: 14429.75,   // CRM Unit_Price (sale price) — Cisco CS-CAM-RVPTZ-L, synced 2026-09-16
    voltage: "PoE+ IEEE 802.3at Type 2 (42.5-57 V)",
    dwavVerified: true,
    // 4K PTZ for Cisco Room Series codecs: 12x optical / 5x digital (60x total), 80.5 deg HFOV, pan +/-170 deg, tilt -25 to
    // +90 deg, 3840x2160p30 / 1080p60, F1.8-3.6. 165 W x 196 H x 176 D mm, 2.36 kg (data sheet says 2.3). PoE+ Type 2, 12 W
    // average / 3 W standby. Also CS-CAM-RVPTZ-L= (Arctic White) and the -CBUN / -LBUN bundles. Mounts: 1/4-20 tripod thread,
    // wall kit CS-CAM-RVPTZ-CBKC/-CBKL (HDMI + PoE+, 250 mm off the wall) or -WBKC/-WBKL (PoE only, 217 mm), the CBK kit also
    // serves as the inverted ceiling mount (lens 173 mm below the ceiling). Verified 2026-09-16 against Cisco data sheet,
    // CAD drawing D15545.02 and installation guide D15542.03.
    ports: [
      { ...port("Ethernet (PoE+)", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "RJ45 10/100/1000 to the codec network; powered by PoE+ IEEE 802.3at Type 2 (12 W average, 3 W standby). Video over IP to Cisco Room Series codecs." },
      { ...port("HDMI Out", "hdmi", "output", "hdmi"), notes: "Camera video to a codec HDMI camera input (up to 3840x2160p30 / 1080p60). Not needed when the camera is used over IP." },
    ],
  },
  {
    id: "26f28910-4b8e-40d2-8fbc-1518abf1f319",
    deviceType: "hdbaset-extender",
    label: "Extron DTP T HWP 4K 331 D",
    shortName: "DTP T HWP 4K 331 D",
    manufacturer: "Extron", modelNumber: "DTP T HWP 4K 331 D",
    referenceUrl: "https://media.extron.com/public/download/files/brochure/dtp_t_hwp_4k_331_d_A4.pdf",
    searchTerms: ["dtp t hwp 4k 331 d", "dtp t hwp 331 d", "60-1421-53", "60-1421-52", "extron dtp transmitter", "hdmi wall plate transmitter", "decorator wallplate", "hdbaset transmitter", "dtp 330", "dwav"],
    widthMm: 43, heightMm: 71, depthMm: 48,
    voltage: "External PSU: 100-240 VAC 50/60 Hz in, 12 VDC 1 A (12 W) out; or remote-powered over the DTP link in DTP mode",
    unitCost: 960,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Single-gang decorator-style wallplate transmitter: HDMI + analog stereo audio + bidirectional RS-232 and IR over one
    // shielded CATx cable, up to 330 ft (100 m) to a DTP 330-enabled product. HDMI 1.4, HDCP 2.3, max 10.2 Gbps; 4K/UHD
    // @30 Hz 4:4:4 8-bit and @60 Hz 4:2:0 8-bit. Rear recessed 2-position switch selects DTP or HDBaseT output mode -
    // in DTP mode the unit can be remote-powered over the TP link (analog audio + remote power available); in HDBaseT
    // mode remote power is disabled and it must be powered locally. The RJ-45 is a point-to-point TP link, NOT a network
    // port - Extron warns against connecting it to a telecom or computer data network, so it is not addressable.
    // Enclosure (device) 1.7 W x 2.8 H x 1.9 D in = 43 x 71 x 48 mm. Decorator faceplate 2.45 x 4.28 in = 62.2 x 108.7 mm;
    // recommended wall cut-out 1.94 x 3.06 in = 49.3 x 77.8 mm. One PSU can power both this transmitter and its receiver.
    // Also sold as 60-1421-52 (Black). Verified 2026-09-19 against Extron brochure 68-2676-01 Rev. A4 and user guide
    // 68-2544-01 Rev. D.
    ports: [
      { ...port("HDMI In", "hdmi", "input", "hdmi"), notes: "Front panel. HDMI 1.4, HDCP 2.3, max 10.2 Gbps (3.4 Gbps per colour). 4K/UHD @30 Hz 4:4:4 8-bit, @60 Hz 4:2:0 8-bit; 1080p/60 Deep Color up to 12-bit. CEC and embedded HD lossless audio pass through." },
      { ...port("DTP / HDBaseT Out", "hdbaset", "output", "rj45"), notes: "Rear panel. Point-to-point shielded TP link, up to 330 ft (100 m) at 1080p60, 2560x1600 and 4K. DTP mode carries HDMI + embedded audio, analog audio, RS-232, IR and remote power; HDBaseT mode drops analog audio and remote power. Not a network port." },
      { ...port("Audio In", "analog-audio", "input", "trs-eighth"), channelCount: 2, notes: "Front panel. 1 stereo (2 channel) unbalanced, 3.5 mm stereo jack: tip L, ring R, sleeve ground. NOT embedded onto the HDMI signal - sent simultaneously with the HDMI embedded audio and output on a separate receiver connector. DTP mode only." },
      { ...port("RS-232 (Over TP)", "serial", "bidirectional", "phoenix"), notes: "Rear panel. Bidirectional RS-232 pass-through. Shares one 3.5 mm 5-pole captive screw 'Over TP' connector with the bidirectional IR line - one physical connector, two signal paths." },
      { ...port("IR (Over TP)", "ir", "bidirectional", "phoenix"), notes: "Rear panel. Bidirectional IR pass-through. Shares one 3.5 mm 5-pole captive screw 'Over TP' connector with the bidirectional RS-232 line - one physical connector, two signal paths." },
      { ...port("Power 12 VDC", "power", "input", "phoenix"), notes: "Rear panel 2-pole captive screw. Included external PSU: 100-240 VAC 50/60 Hz in, 12 VDC 1 A (12 W) out; one PSU can power both transmitter and receiver. In DTP mode it can instead be remote-powered over the TP link; HDBaseT mode requires local power." },
    ],
  },
  {
    id: "2501f167-5ccc-4e98-8dfc-79a477cbf2b1",
    deviceType: "amplifier",
    label: "Extron NetPA 204 POE",
    shortName: "NetPA 204 POE",
    manufacturer: "Extron", modelNumber: "NetPA 204 POE (60-2047-01)",
    referenceUrl: "https://www.extron.com/download/files/brochure/netpa_204_poe_revA1.pdf",
    searchTerms: ["netpa 204 poe", "netpa", "poe amplifier", "dante amplifier", "ceiling amplifier", "plenum amplifier", "extron amplifier", "60-2047-01", "dwav"],
    widthMm: 221, heightMm: 43, depthMm: 76, weightKg: 0.4,
    powerDrawW: 38.7,
    voltage: "PoE++ IEEE 802.3bt Class 5 (38.7 W max), PoE+ 802.3at Class 4 (25.5 W) or PoE 802.3af Class 3 (13.9 W)",
    dwavVerified: true,
    // Four-channel Dante / AES67 PoE amplifier with a 4x4 DSP mix matrix, made to sit above the ceiling tiles near the speakers:
    // half-rack 1U, 221 W x 43 H x 76 D mm, 0.4 kg, UL 2043 plenum rated, fanless. Up to 20 W rms per channel into 8 or 4 ohm
    // (one or two 8 ohm speakers or one 4 ohm per channel); total output scales with the PoE class - 10-18 W (PoE), 18-20 W (PoE+),
    // 20-23 W (PoE++) per channel. Power, audio and control on one RJ-45. Mounts on the included MBU 123 low-profile kit or the
    // optional ATB 100 tile bridge. Verified 2026-09-20 against Extron brochure 68-3893-01 rev A1 and setup guide 68-3742-50 rev A.
    ports: [
      { ...port("AT (PoE++) - Dante", "dante", "bidirectional", "rj45"), addressable: true, poeDrawW: 38.7, linkSpeed: "1G", notes: "RJ-45: Dante / AES67 audio in (4 ch), control (SIS, DSP Configurator Pro, Dante Controller) and PoE power on one cable. Negotiates 802.3af / at / bt; output power scales with the class." },
      { ...port("Speaker Out 1", "speaker-level", "output", "phoenix"), notes: "2-pin 5 mm captive screw, Class 2 wiring. Up to 20 W into 8 or 4 ohm: one or two 8 ohm speakers or one 4 ohm per channel; 10-23 W depending on PoE class and channels used." },
      { ...port("Speaker Out 2", "speaker-level", "output", "phoenix"), notes: "2-pin 5 mm captive screw, Class 2 wiring. Same rating as channel 1; each channel set to 8 ohm, 4 ohm or off in DSP Configurator Pro." },
      { ...port("Speaker Out 3", "speaker-level", "output", "phoenix"), notes: "2-pin 5 mm captive screw, Class 2 wiring. Same rating as channel 1." },
      { ...port("Speaker Out 4", "speaker-level", "output", "phoenix"), notes: "2-pin 5 mm captive screw, Class 2 wiring. Same rating as channel 1." },
      { ...port("Remote (mute)", "contact-closure", "input", "phoenix"), notes: "2-pole 3.5 mm captive screw: jump MUTE to G to mute all four outputs." },
      { ...port("Config (USB-C)", "usb", "bidirectional", "usb-c"), notes: "Rear USB Type-C for DSP Configurator Pro when the amplifier cannot be reached over the network." },
    ],
  },
  {
    id: "0658e301-6707-4146-9be5-3e31e8e8af56",
    deviceType: "speaker",
    label: "Martin Audio C4.8T",
    shortName: "C4.8T",
    manufacturer: "Martin Audio", modelNumber: "C4.8T",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/C4.8Tdatasheet.pdf",
    searchTerms: ["c4.8t", "c4 8t", "ceiling speaker", "martin audio", "c-series ceiling", "70v ceiling speaker", "100v ceiling speaker", "flush mount speaker", "dwav"],
    widthMm: 205, heightMm: 131, depthMm: 205, weightKg: 2.6,
    voltage: "Passive: 16 ohm, or 70 V / 100 V line via the included 25 W transformer (taps 25 / 12.5 / 6 W at 100 V; 25 / 12.5 / 6 / 3 W at 70 V)",
    unitCost: 165,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Compact two-way flush-mount ceiling speaker: 4 in (100 mm) UL94V-0 carbon-fibre-loaded polypropylene cone plus a 0.8 in (19 mm)
    // dome tweeter side by side on the baffle, 5 kHz passive crossover, 100 Hz-20 kHz +/-3 dB (-10 dB at 80 Hz), 86 dB sensitivity,
    // 100 dB continuous / 106 dB peak, 180 deg conical dispersion (-6 dB) up to 10 kHz - made for low ceilings. 16 ohm, 40 W AES /
    // 160 W peak, or 70 / 100 V line through the included 25 W transformer. Steel back can, 205 mm OD x 131 mm deep, 178 mm cut-out,
    // 2.6 kg; white overpaintable bezel and perforated steel grille; tile rails, C bracket, paint mask and template included.
    // UL 2043 (air-handling spaces) and UL 1480. Verified 2026-09-20 against Martin Audio's C4.8T data sheet and product page.
    ports: [
      { ...port("Speaker In (70/100 V or 16 ohm)", "speaker-level", "input", "phoenix"), notes: "Phoenix MSTB 2,5/4-ST rising-clamp plug and socket (fireproofed, pre-wireable). 16 ohm passive, 40 W AES / 160 W peak, or the included 25 W line transformer: 100 V taps 25 / 12.5 / 6 W, 70 V taps 25 / 12.5 / 6 / 3 W. Loop on at the plug." },
    ],
  },
  {
    id: "a1134584-0b4f-466e-b54d-28e6b3ddd689",
    deviceType: "power-distribution",
    label: "ACE PE Electric Pocket Panel",
    shortName: "PE",
    manufacturer: "ACE Backstage", modelNumber: "PE",
    referenceUrl: "https://www.acebackstage.com/product/connextrix-pocket-panels-pnl-100-series/",
    searchTerms: ["ace backstage", "pe", "switchbox", "stage pocket outlet", "connectrix electric panel", "duplex", "dwav"],
    widthMm: 93.7, heightMm: 114.3, depthMm: 63.5,
    voltage: "120 V AC branch circuit, by EC",
    unitCost: 10.67,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // CONNECTRIX electric pocket panel: one standard duplex outlet on a single-gang switch box, for isolated high
    // voltage in the same pocket as AV connectivity. Complete with duplex switch box, black powder-coated steel
    // mounting plate and a narrow black powder-coated cover plate with mounting screws. Indexed so the plug clears
    // the lid when the pocket is closed. Fits the Half, Full, Double Wide and Super Double Wide pockets, taking one
    // CONNECTRIX panel bay. PE-MP is the Mini Pocket version (use with ISOBBX). UL listed in conjunction with UL
    // listed ACE pockets when the AC is run in isolating conduit.
    // 3.69 W x 4.50 H x 2.50 D in. Dimensions from the AV-iQ product record (ACE publish no PE spec sheet); the
    // 4.50 in height matches the PNL-100 plate height on ACE's own pocket drawings, which is the cross-check.
    // WEIGHT LEFT BLANK - not in ACE's product weight guide.
    ports: [
      { ...port("LINE IN", "power", "input", "terminal-block"), notes: "120 V AC branch circuit hardwired into the switch box by the EC; isolated from the AV bays." },
      { ...port("OUTLET 1", "power", "output", "edison"), notes: "NEMA 5-15R, upper half of the duplex." },
      { ...port("OUTLET 2", "power", "output", "edison"), notes: "NEMA 5-15R, lower half of the duplex." },
    ],
  },
  {
    id: "4e1487e5-6f3e-40f2-bd7b-82781dbb8173",
    deviceType: "led-fixture",
    label: "Chauvet DJ SlimPAR Pro H USB",
    shortName: "SlimPAR Pro H USB",
    manufacturer: "Chauvet DJ", modelNumber: "SLIMPARPROHUSBWHT",
    referenceUrl: "https://www.chauvetdj.com/wp-content/uploads/2016/01/SlimPAR_Pro_H_USB_UM_Rev3_WO.pdf",
    searchTerms: ["slimpar pro h usb", "chauvet dj", "hex par", "rgbaw+uv", "wash light", "d-fi usb", "dwav"],
    widthMm: 253, heightMm: 290, depthMm: 98, weightKg: 3.3,
    powerDrawW: 99,
    voltage: "100 - 240 V AC, 50/60 Hz auto-ranging",
    unitCost: 505.48,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Low-profile hex-colour LED wash PAR, WHITE HOUSING (Chauvet item code 03031280; 03031132 is the black).
    // 12 x 10 W RGBAW+UV (6-in-1) LEDs, 2.4 A LED current, 50,000 hour rated lifespan.
    // Beam angle 24 deg, field angle 41 deg, 3,218 lux at 2 m. Strobe 0-31 Hz.
    // 253 (L) x 98 (W) x 290 (H) mm, 7.2 lb (3.3 kg) - recorded as W 253 x H 290 x D 98, which is how the
    // fixture actually sits: wide face, tall with the yoke, shallow body.
    // Consumption 99 W / 1.4 A at 120 V 60 Hz; 96 W / 0.8 A at 230 V 50 Hz. F 2 A 250 V fuse, replaceable.
    // Indoor only (IP20), convection cooled, maximum ambient 40 C (104 F). Never connect to a dimmer.
    // DMX 6, 7 or 12 channel personalities; standalone sound-active and automatic programs.
    // Rated power_max_w and power_typ_w are the same 99 W: Chauvet publish one consumption figure per voltage,
    // not a max/typical pair.
    ports: [
      { ...port("DMX IN", "dmx", "input", "xlr-3"), notes: "3-pin XLR. DMX personality 6, 7 or 12 channels." },
      { ...port("DMX OUT", "dmx", "output", "xlr-3"), notes: "3-pin XLR through." },
      { ...port("D-Fi USB", "usb", "input", "usb-a"), notes: "USB port for the Chauvet D-Fi USB wireless DMX transceiver (sold separately)." },
      { ...port("AC IN", "power", "input", "iec"), notes: "IEC inlet. 99 W / 1.4 A at 120 V, 60 Hz; 96 W / 0.8 A at 230 V." },
      { ...port("AC OUT", "power", "output", "edison"), notes: "Power link out (Edison in the US, IEC in UK/Europe): up to 5 units at 120 V, 10 at 230 V, 8 A." },
    ],
  },
  {
    id: "73e5741b-05da-4646-97c1-d1066bfdae05",
    deviceType: "speaker",
    label: "Martin Audio CDD15-WR",
    shortName: "CDD15-WR",
    manufacturer: "Martin Audio", modelNumber: "CDD15W-WR",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD15-WRdatasheet.pdf",
    searchTerms: ["cdd15-wr", "cdd15w-wr", "martin audio weatherised", "ip54 speaker", "outdoor coaxial", "dwav"],
    widthMm: 429, heightMm: 691, depthMm: 413, weightKg: 28.3,
    unitCost: 2750,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Weatherised high-output passive two-way Coaxial Differential Dispersion system, rated IP54 - the outdoor
    // version of the CDD15. White (RAL9016); CDD15B-WR is the black.
    // LF 15 in (380 mm) with 3 in voice coil sharing a ferrite motor with the HF; HF 1.4 in (36 mm) exit,
    // 3 in voice coil titanium dome compression driver. 1.6 kHz passive crossover, 68 litre composite enclosure.
    // Dispersion 100-60 deg horizontal x 60 deg vertical, -6 dB, user-rotatable driver.
    // 400 W AES / 1600 W peak, 8 ohms, 100 dB sensitivity, 126 dB continuous / 132 dB peak max SPL.
    // 55 Hz - 18 kHz +/-3 dB. Zinc plated steel grille with weatherised backing. 10 x M8 fly points.
    // Accessories: CDDYA15B/W yoke assembly, WB15B/W wall bracket. No 70/100 V tap - low-Z amplifier load.
    // Recommended amplifiers: iK41, iK81, VIA5002, VIA5004.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low profile 20A push-lock under a weatherproof input panel cover with cable gland. Pins: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same push-lock block." },
    ],
  },
  {
    id: "6f2798e0-5bee-4b84-8d4e-d7a378abe201",
    deviceType: "speaker",
    label: "Martin Audio CDD5",
    shortName: "CDD5",
    manufacturer: "Martin Audio", modelNumber: "CDD5B",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD5datasheet.pdf",
    searchTerms: ["cdd5", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 160, heightMm: 230, depthMm: 149, weightKg: 3,
    unitCost: 315,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Ultra-compact passive two-way Coaxial Differential Dispersion system in a moulded ABS enclosure.
    // LF 5.25 in (130 mm) with 1.25 in voice coil, ferrite motor; HF 0.75 in (19 mm) fabric dome, neodymium.
    // Dispersion 120-90 deg horizontal x 80 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the
    // wide axis can be put either way round. 2.5 kHz passive crossover, 3 litre enclosure.
    // 100 W AES / 400 W peak, 8 ohms nominal, 90 dB sensitivity, 110 dB continuous / 116 dB peak max SPL.
    // 100 Hz - 20 kHz +/-3 dB. 6 x M5 inserts for wall/ceiling brackets; the ASM10001 (white) / ASM10002 (black)
    // omnidirectional wall bracket ships with the speaker, CDDCB5B/W is the optional close-mount ceiling bracket.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap - this is a low-Z amplifier load.
    // Finish: black (RAL9005 black / RAL9016 white); any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low profile 13A push-lock, 4-way block. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-way push-lock block." },
    ],
  },
  {
    id: "cfc99124-a50a-460b-b7c9-192d1e149fcc",
    deviceType: "speaker",
    label: "Martin Audio CDD5",
    shortName: "CDD5",
    manufacturer: "Martin Audio", modelNumber: "CDD5W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD5datasheet.pdf",
    searchTerms: ["cdd5", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 160, heightMm: 230, depthMm: 149, weightKg: 3,
    unitCost: 315,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Ultra-compact passive two-way Coaxial Differential Dispersion system in a moulded ABS enclosure.
    // LF 5.25 in (130 mm) with 1.25 in voice coil, ferrite motor; HF 0.75 in (19 mm) fabric dome, neodymium.
    // Dispersion 120-90 deg horizontal x 80 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the
    // wide axis can be put either way round. 2.5 kHz passive crossover, 3 litre enclosure.
    // 100 W AES / 400 W peak, 8 ohms nominal, 90 dB sensitivity, 110 dB continuous / 116 dB peak max SPL.
    // 100 Hz - 20 kHz +/-3 dB. 6 x M5 inserts for wall/ceiling brackets; the ASM10001 (white) / ASM10002 (black)
    // omnidirectional wall bracket ships with the speaker, CDDCB5B/W is the optional close-mount ceiling bracket.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap - this is a low-Z amplifier load.
    // Finish: white (RAL9005 black / RAL9016 white); any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low profile 13A push-lock, 4-way block. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-way push-lock block." },
    ],
  },
  {
    id: "938584aa-3902-454f-8d1d-df0815c30034",
    deviceType: "amplifier",
    label: "Martin Audio iKON iK41",
    shortName: "iK41",
    manufacturer: "Martin Audio", modelNumber: "iK41",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/ik41-datasheet.pdf",
    searchTerms: ["ik41", "ikon", "martin audio amplifier", "class d", "vu-net", "dante amplifier", "dwav"],
    widthMm: 482, heightMm: 88, depthMm: 441, weightKg: 12.5,
    voltage: "85 - 240 V AC auto-sensing, 47 - 63 Hz",
    unitCost: 7000,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Four-channel Class D amplifier with 96 kHz DSP on all inputs and outputs (48 kHz on outputs when FIR filters are used).
    // Power output: 1500W into 2 ohms, 1500W into 4 ohms, 750W into 8 ohms, 325W into 16 ohms; 3000W bridged per channel pair at 4 or 8 ohms; Constant voltage: 685W at 25V, 1500W at 70V, 1163W at 100V line.
    // Analogue, AES3 and Dante (AES67 compatible) inputs; Ethernet for VU-NET control and monitoring.
    // Dynamic range >113 dBA analogue, >114 dBA AES/Dante. 7 Hz - 30 kHz (-2.5 dB, 4 ohm). THD <0.05%% at 1 kHz.
    // Damping factor >800 ref 8 ohms. Slew rate >60 V/us. Dual vari-speed fans, front-to-back airflow;
    // maximum ambient 40 C (105 F). Series resonant power supply with External Breaker Protection.
    // 2U, 482 x 88 x 441 mm including handles and the optional rear support. 12.5 kg.
    // AMPLIFIER OUTPUTS: 4 x NL4, one per channel.
    // POWER CONSUMPTION LEFT BLANK: the datasheet gives input power as a load-dependent graph, not a single figure.
    ports: [
      { ...port("ANALOGUE IN 1", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 2", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 3", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 4", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE LINK 1", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 2", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 3", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 4", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("AES3 IN", "aes", "input", "xlr-3"), notes: "Neutrik XLR female, balanced, 2 channels." },
      { ...port("AES3 LINK", "aes", "output", "xlr-3"), notes: "Neutrik XLR male, balanced link out." },
      { ...port("DANTE", "dante", "bidirectional", "rj45"), addressable: true, channelCount: 4, notes: "Dante / AES67 compatible, 4 channels. Martin Audio's datasheet states the channel count but not whether a redundant secondary port is fitted; one port recorded." },
      { ...port("NETWORK", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Ethernet for control and monitoring via Martin Audio VU-NET. DHCP, static and auto-IP; direct computer connection without a switch." },
      { ...port("OUT 1", "speaker-level", "output", "speakon"), notes: "Neutrik Speakon NL4." },
      { ...port("OUT 2", "speaker-level", "output", "speakon"), notes: "Neutrik Speakon NL4." },
      { ...port("OUT 3", "speaker-level", "output", "speakon"), notes: "Neutrik Speakon NL4." },
      { ...port("OUT 4", "speaker-level", "output", "speakon"), notes: "Neutrik Speakon NL4." },
      { ...port("AC MAINS", "power", "input", "powercon"), notes: "Neutrik 32A powerCON. Inrush 6A at 115V, 12A at 230V, max for <10 ms." },
    ],
  },
  {
    id: "b7c0fa92-349f-472c-99db-337dbb43a292",
    deviceType: "amplifier",
    label: "Martin Audio iKON iK42",
    shortName: "iK42",
    manufacturer: "Martin Audio", modelNumber: "iK42",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/ik42-datasheet.pdf",
    searchTerms: ["ik42", "ikon", "martin audio amplifier", "class d", "vu-net", "dante amplifier", "dwav"],
    widthMm: 482, heightMm: 88, depthMm: 441, weightKg: 12.5,
    voltage: "85 - 240 V AC auto-sensing, 47 - 63 Hz",
    unitCost: 10500,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Four-channel Class D amplifier with 96 kHz DSP on all inputs and outputs (48 kHz on outputs when FIR filters are used).
    // Power output: 5000W into 2 ohms, 3000W into 4 ohms, 1500W into 8 ohms, 750W into 16 ohms; 10000W bridged per channel pair at 4 ohms, 6000W at 8 ohms; Constant voltage: 1250W at 25V, 3500W at 70V, 5000W at 100V line.
    // Analogue, AES3 and Dante (AES67 compatible) inputs; Ethernet for VU-NET control and monitoring.
    // Dynamic range >113 dBA analogue, >114 dBA AES/Dante. 7 Hz - 30 kHz (-2.5 dB, 4 ohm). THD <0.05%% at 1 kHz.
    // Damping factor >800 ref 8 ohms. Slew rate >60 V/us. Dual vari-speed fans, front-to-back airflow;
    // maximum ambient 40 C (105 F). Series resonant power supply with External Breaker Protection.
    // 2U, 482 x 88 x 441 mm including handles and the optional rear support. 12.5 kg.
    // AMPLIFIER OUTPUTS: 4 x NL4, one per channel.
    // POWER CONSUMPTION LEFT BLANK: the datasheet gives input power as a load-dependent graph, not a single figure.
    ports: [
      { ...port("ANALOGUE IN 1", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 2", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 3", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 4", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE LINK 1", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 2", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 3", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 4", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("AES3 IN", "aes", "input", "xlr-3"), notes: "Neutrik XLR female, balanced, 2 channels." },
      { ...port("AES3 LINK", "aes", "output", "xlr-3"), notes: "Neutrik XLR male, balanced link out." },
      { ...port("DANTE PRIMARY", "dante", "bidirectional", "rj45"), addressable: true, channelCount: 4, notes: "Dante / AES67, 4 channels in. Primary port (user guide: Primary and Secondary)." },
      { ...port("DANTE SECONDARY", "dante", "bidirectional", "rj45"), addressable: true, notes: "Dante secondary (redundant) port, same channels as primary." },
      { ...port("NETWORK", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Ethernet for control and monitoring via Martin Audio VU-NET. DHCP, static and auto-IP; direct computer connection without a switch." },
      { ...port("OUT 1", "speaker-level", "output", "speakon"), notes: "Neutrik NL4, channel 1 on 1+/1-. Also carries channel 2 on 2+/2- (duplicate, for bi-amp). Bridged 1+2: pins 1+/2+." },
      { ...port("OUT 2", "speaker-level", "output", "speakon"), notes: "Neutrik NL4, channel 2 on 1+/1-." },
      { ...port("OUT 3", "speaker-level", "output", "speakon"), notes: "Neutrik NL4, channel 3 on 1+/1-. Also carries channel 4 on 2+/2- (duplicate, for bi-amp). Bridged 3+4: pins 1+/2+." },
      { ...port("OUT 4", "speaker-level", "output", "speakon"), notes: "Neutrik NL4, channel 4 on 1+/1-." },
      { ...port("AUX", "contact-closure", "input", "phoenix"), notes: "Aux port, Phoenix pluggable terminal block: contact closures recall snapshots or mute / sleep (Aux Style)." },
      { ...port("FAULT RELAY", "contact-closure", "output", "phoenix"), notes: "Isolated fault relay output, Phoenix pluggable terminal block, for external monitoring." },
      { ...port("AC MAINS", "power", "input", "powercon"), notes: "Neutrik 32A powerCON. Inrush 6A at 115V, 12A at 230V, max for <10 ms." },
    ],
  },
  {
    id: "c8020e18-742a-430e-a035-69545edcd0c3",
    deviceType: "amplifier",
    label: "Martin Audio iKON iK81",
    shortName: "iK81",
    manufacturer: "Martin Audio", modelNumber: "iK81",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/ik81-datasheet.pdf",
    searchTerms: ["ik81", "ikon", "martin audio amplifier", "class d", "vu-net", "dante amplifier", "dwav"],
    widthMm: 482, heightMm: 88, depthMm: 441, weightKg: 12.5,
    voltage: "85 - 240 V AC auto-sensing, 47 - 63 Hz",
    unitCost: 11250,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Eight-channel Class D amplifier with 96 kHz DSP on all inputs and outputs (48 kHz on outputs when FIR filters are used).
    // Power output: 1250W into 2, 4 or 8 ohms, 625W into 16 ohms; 2500W bridged per channel pair at 4 or 8 ohms; Constant voltage: 625W at 25V, 1250W at 70V, 1250W at 100V line.
    // Analogue, AES3 and Dante (AES67 compatible) inputs; Ethernet for VU-NET control and monitoring.
    // Dynamic range >113 dBA analogue, >114 dBA AES/Dante. 7 Hz - 30 kHz (-2.5 dB, 4 ohm). THD <0.05%% at 1 kHz.
    // Damping factor >800 ref 8 ohms. Slew rate >60 V/us. Dual vari-speed fans, front-to-back airflow;
    // maximum ambient 40 C (105 F). Series resonant power supply with External Breaker Protection.
    // 2U, 482 x 88 x 441 mm including handles and the optional rear support. 12.5 kg.
    // AMPLIFIER OUTPUTS are 4 x NL4 on every model in the range - on the iK81 each NL4 carries two channels.
    // POWER CONSUMPTION LEFT BLANK: the datasheet gives input power as a load-dependent graph, not a single figure.
    ports: [
      { ...port("ANALOGUE IN 1", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 2", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 3", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE IN 4", "analog-audio", "input", "xlr-3"), notes: "Neutrik XLR female, 20 kohm balanced to ground, +20 dBu maximum input level." },
      { ...port("ANALOGUE LINK 1", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 2", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 3", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("ANALOGUE LINK 4", "analog-audio", "output", "xlr-3"), notes: "Neutrik XLR male, parallel link out." },
      { ...port("AES3 IN", "aes", "input", "xlr-3"), notes: "Neutrik XLR female, balanced, 2 channels." },
      { ...port("AES3 LINK", "aes", "output", "xlr-3"), notes: "Neutrik XLR male, balanced link out." },
      { ...port("DANTE PRIMARY", "dante", "bidirectional", "rj45"), addressable: true, channelCount: 8, notes: "Dante / AES67, 8 channels in. Primary port (user guide: Primary and Secondary)." },
      { ...port("DANTE SECONDARY", "dante", "bidirectional", "rj45"), addressable: true, notes: "Dante secondary (redundant) port, same channels as primary." },
      { ...port("NETWORK", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Ethernet for control and monitoring via Martin Audio VU-NET. DHCP, static and auto-IP; direct computer connection without a switch." },
      { ...port("OUT 1 CH 1", "speaker-level", "output", "speakon"), notes: "Channel 1 on NL4 OUT 1, pins 1+/1- (each NL4 carries 2 channels). Bridged 1+2: pins 1+/2+ of OUT 1." },
      { ...port("OUT 1 CH 2", "speaker-level", "output", "speakon"), notes: "Channel 2 on NL4 OUT 1, pins 2+/2- (each NL4 carries 2 channels). Bridged 1+2: pins 1+/2+ of OUT 1." },
      { ...port("OUT 2 CH 3", "speaker-level", "output", "speakon"), notes: "Channel 3 on NL4 OUT 2, pins 1+/1- (each NL4 carries 2 channels). Bridged 3+4: pins 1+/2+ of OUT 2." },
      { ...port("OUT 2 CH 4", "speaker-level", "output", "speakon"), notes: "Channel 4 on NL4 OUT 2, pins 2+/2- (each NL4 carries 2 channels). Bridged 3+4: pins 1+/2+ of OUT 2." },
      { ...port("OUT 3 CH 5", "speaker-level", "output", "speakon"), notes: "Channel 5 on NL4 OUT 3, pins 1+/1- (each NL4 carries 2 channels). Bridged 5+6: pins 1+/2+ of OUT 3." },
      { ...port("OUT 3 CH 6", "speaker-level", "output", "speakon"), notes: "Channel 6 on NL4 OUT 3, pins 2+/2- (each NL4 carries 2 channels). Bridged 5+6: pins 1+/2+ of OUT 3." },
      { ...port("OUT 4 CH 7", "speaker-level", "output", "speakon"), notes: "Channel 7 on NL4 OUT 4, pins 1+/1- (each NL4 carries 2 channels). Bridged 7+8: pins 1+/2+ of OUT 4." },
      { ...port("OUT 4 CH 8", "speaker-level", "output", "speakon"), notes: "Channel 8 on NL4 OUT 4, pins 2+/2- (each NL4 carries 2 channels). Bridged 7+8: pins 1+/2+ of OUT 4." },
      { ...port("AUX", "contact-closure", "input", "phoenix"), notes: "Aux port, Phoenix pluggable terminal block: contact closures recall snapshots or mute / sleep (Aux Style)." },
      { ...port("FAULT RELAY", "contact-closure", "output", "phoenix"), notes: "Isolated fault relay output, Phoenix pluggable terminal block, for external monitoring." },
      { ...port("AC MAINS", "power", "input", "powercon"), notes: "Neutrik 32A powerCON. Inrush 6A at 115V, 12A at 230V, max for <10 ms." },
    ],
  },
  {
    id: "cdb91e50-c35c-46ab-b128-e3a85b64d54c",
    deviceType: "speaker",
    label: "Martin Audio TORUS T1215",
    shortName: "TORUS T1215",
    manufacturer: "Martin Audio", modelNumber: "T1215-W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/T1215datasheet.pdf",
    searchTerms: ["t1215", "torus", "martin audio", "constant curvature array", "array element", "dwav"],
    widthMm: 650, heightMm: 369, depthMm: 452, weightKg: 31,
    unitCost: 4500,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // TORUS T1215: passive two-way 12” constant curvature array element, 60-75-90 deg horizontal (Dynamic Horn Flare) x 15 deg vertical.
    // LF 12 in with 3 in voice coil, neodymium; HF 3 x 1 in exit, 1.4 in voice coil HT polymer dome neodymium compression drivers.
    // 400 W AES / 1600 W peak, 8 ohms, 100 dB sensitivity (2.83 V 1 m free field), 128dB continuous, 134dB peak.
    // Martin Audio quote a crest factor of 2 (6 dB peak to continuous); add 6 dB to compare with makers quoting 12 dB.
    // Frequency response see datasheet.
    // Plywood enclosure in PU textured paint, two pocket handles, full-width steel grille with cloth backing.
    // Integral rigging for vertical and horizontal arrays of up to six enclosures; pole-mount fixing.
    // Powered by Martin Audio iKON amplifiers (VU-NET control, Dante); modelled in DISPLAY 3.
    // Finish: white. Standard is black (T1215B); white is made to order.
    // No 70/100 V tap - this is a low-Z amplifier load.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "speakon"), notes: "Neutrik NL4. Passive configuration on pins 1+/1- or 2+/2-, selected by the rear-panel switch." },
      { ...port("LINK", "speaker-level", "output", "speakon"), notes: "Second NL4, parallel link for the next enclosure in the array." },
    ],
  },
  {
    id: "653ad00e-7d0f-4478-ae70-356b16897d48",
    deviceType: "speaker",
    label: "Martin Audio TORUS T1215",
    shortName: "TORUS T1215",
    manufacturer: "Martin Audio", modelNumber: "T1215",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/T1215datasheet.pdf",
    searchTerms: ["t1215", "torus", "martin audio", "constant curvature array", "array element", "dwav"],
    widthMm: 650, heightMm: 369, depthMm: 452, weightKg: 31,
    unitCost: 4500,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // TORUS T1215: passive two-way 12” constant curvature array element, 60-75-90 deg horizontal (Dynamic Horn Flare) x 15 deg vertical.
    // LF 12 in with 3 in voice coil, neodymium; HF 3 x 1 in exit, 1.4 in voice coil HT polymer dome neodymium compression drivers.
    // 400 W AES / 1600 W peak, 8 ohms, 100 dB sensitivity (2.83 V 1 m free field), 128dB continuous, 134dB peak.
    // Martin Audio quote a crest factor of 2 (6 dB peak to continuous); add 6 dB to compare with makers quoting 12 dB.
    // Frequency response see datasheet.
    // Plywood enclosure in PU textured paint, two pocket handles, full-width steel grille with cloth backing.
    // Integral rigging for vertical and horizontal arrays of up to six enclosures; pole-mount fixing.
    // Powered by Martin Audio iKON amplifiers (VU-NET control, Dante); modelled in DISPLAY 3.
    // Finish: black. Standard is black (T1215B); white is made to order.
    // No 70/100 V tap - this is a low-Z amplifier load.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "speakon"), notes: "Neutrik NL4. Passive configuration on pins 1+/1- or 2+/2-, selected by the rear-panel switch." },
      { ...port("LINK", "speaker-level", "output", "speakon"), notes: "Second NL4, parallel link for the next enclosure in the array." },
    ],
  },
  {
    id: "3ebcbb9b-b7c7-4a81-8337-4547092d9ad1",
    deviceType: "speaker",
    label: "Martin Audio TORUS T1230",
    shortName: "TORUS T1230",
    manufacturer: "Martin Audio", modelNumber: "T1230-W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/T1230datasheet.pdf",
    searchTerms: ["t1230", "torus", "martin audio", "constant curvature array", "array element", "dwav"],
    widthMm: 650, heightMm: 350, depthMm: 442, weightKg: 26,
    unitCost: 4500,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // TORUS T1230: passive two-way 12” constant curvature array element, 60-75-90 deg horizontal (Dynamic Horn Flare) x 30 deg vertical.
    // LF 12 in with 3 in voice coil, neodymium; HF 3 x 1 in exit, 1.4 in voice coil HT polymer dome neodymium compression drivers.
    // 400 W AES / 1600 W peak, 8 ohms, 99 dB sensitivity (2.83 V 1 m free field), 126dB continuous, 132dB peak.
    // Martin Audio quote a crest factor of 2 (6 dB peak to continuous); add 6 dB to compare with makers quoting 12 dB.
    // Frequency response see datasheet.
    // Plywood enclosure in PU textured paint, two pocket handles, full-width steel grille with cloth backing.
    // Integral rigging for vertical and horizontal arrays of up to six enclosures; pole-mount fixing.
    // Powered by Martin Audio iKON amplifiers (VU-NET control, Dante); modelled in DISPLAY 3.
    // Finish: white. Standard is black (T1230B); white is made to order.
    // No 70/100 V tap - this is a low-Z amplifier load.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "speakon"), notes: "Neutrik NL4. Passive configuration on pins 1+/1- or 2+/2-, selected by the rear-panel switch." },
      { ...port("LINK", "speaker-level", "output", "speakon"), notes: "Second NL4, parallel link for the next enclosure in the array." },
    ],
  },
  {
    id: "b7a0e1fb-9ecf-48ad-adb0-9ee8568b1300",
    deviceType: "speaker",
    label: "Martin Audio TORUS T1230",
    shortName: "TORUS T1230",
    manufacturer: "Martin Audio", modelNumber: "T1230",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/T1230datasheet.pdf",
    searchTerms: ["t1230", "torus", "martin audio", "constant curvature array", "array element", "dwav"],
    widthMm: 650, heightMm: 350, depthMm: 442, weightKg: 26,
    unitCost: 4500,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // TORUS T1230: passive two-way 12” constant curvature array element, 60-75-90 deg horizontal (Dynamic Horn Flare) x 30 deg vertical.
    // LF 12 in with 3 in voice coil, neodymium; HF 3 x 1 in exit, 1.4 in voice coil HT polymer dome neodymium compression drivers.
    // 400 W AES / 1600 W peak, 8 ohms, 99 dB sensitivity (2.83 V 1 m free field), 126dB continuous, 132dB peak.
    // Martin Audio quote a crest factor of 2 (6 dB peak to continuous); add 6 dB to compare with makers quoting 12 dB.
    // Frequency response see datasheet.
    // Plywood enclosure in PU textured paint, two pocket handles, full-width steel grille with cloth backing.
    // Integral rigging for vertical and horizontal arrays of up to six enclosures; pole-mount fixing.
    // Powered by Martin Audio iKON amplifiers (VU-NET control, Dante); modelled in DISPLAY 3.
    // Finish: black. Standard is black (T1230B); white is made to order.
    // No 70/100 V tap - this is a low-Z amplifier load.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "speakon"), notes: "Neutrik NL4. Passive configuration on pins 1+/1- or 2+/2-, selected by the rear-panel switch." },
      { ...port("LINK", "speaker-level", "output", "speakon"), notes: "Second NL4, parallel link for the next enclosure in the array." },
    ],
  },
  {
    id: "7423fe14-aae7-41b0-b756-bf574b86368d",
    deviceType: "speaker",
    label: "Martin Audio TORUS T820",
    shortName: "TORUS T820",
    manufacturer: "Martin Audio", modelNumber: "T820-W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/T820datasheet.pdf",
    searchTerms: ["t820", "torus", "martin audio", "constant curvature array", "array element", "dwav"],
    widthMm: 500, heightMm: 257, depthMm: 320, weightKg: 14,
    unitCost: 3000,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // TORUS T820: passive two-way 8” constant curvature array element, 100 deg horizontal x 20 deg vertical.
    // LF 8 in with 2 in voice coil, neodymium; HF 2 x 1 in exit, 1.4 in voice coil HT polymer dome neodymium compression drivers.
    // 200 W AES / 800 W peak, 8 ohms, 97 dB sensitivity (2.83 V 1 m free field), 124dB continuous, 130dB peak.
    // Martin Audio quote a crest factor of 2 (6 dB peak to continuous); add 6 dB to compare with makers quoting 12 dB.
    // Frequency response 70 Hz - 18 kHz +/-3 dB with iKON settings, -10 dB at 56 Hz.
    // Plywood enclosure in PU textured paint, two pocket handles, full-width steel grille with cloth backing.
    // Integral rigging for vertical and horizontal arrays of up to six enclosures; pole-mount fixing.
    // Powered by Martin Audio iKON amplifiers (VU-NET control, Dante); modelled in DISPLAY 3.
    // Finish: white. Standard is black (T820B); white is made to order.
    // No 70/100 V tap - this is a low-Z amplifier load.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "speakon"), notes: "Neutrik NL4. Passive configuration on pins 1+/1- or 2+/2-, selected by the rear-panel switch." },
      { ...port("LINK", "speaker-level", "output", "speakon"), notes: "Second NL4, parallel link for the next enclosure in the array." },
    ],
  },
  {
    id: "9fe30450-6662-430d-a512-9044725efabe",
    deviceType: "speaker",
    label: "Martin Audio TORUS T820",
    shortName: "TORUS T820",
    manufacturer: "Martin Audio", modelNumber: "T820",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/T820datasheet.pdf",
    searchTerms: ["t820", "torus", "martin audio", "constant curvature array", "array element", "dwav"],
    widthMm: 500, heightMm: 257, depthMm: 320, weightKg: 14,
    unitCost: 3000,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // TORUS T820: passive two-way 8” constant curvature array element, 100 deg horizontal x 20 deg vertical.
    // LF 8 in with 2 in voice coil, neodymium; HF 2 x 1 in exit, 1.4 in voice coil HT polymer dome neodymium compression drivers.
    // 200 W AES / 800 W peak, 8 ohms, 97 dB sensitivity (2.83 V 1 m free field), 124dB continuous, 130dB peak.
    // Martin Audio quote a crest factor of 2 (6 dB peak to continuous); add 6 dB to compare with makers quoting 12 dB.
    // Frequency response 70 Hz - 18 kHz +/-3 dB with iKON settings, -10 dB at 56 Hz.
    // Plywood enclosure in PU textured paint, two pocket handles, full-width steel grille with cloth backing.
    // Integral rigging for vertical and horizontal arrays of up to six enclosures; pole-mount fixing.
    // Powered by Martin Audio iKON amplifiers (VU-NET control, Dante); modelled in DISPLAY 3.
    // Finish: black. Standard is black (T820B); white is made to order.
    // No 70/100 V tap - this is a low-Z amplifier load.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "speakon"), notes: "Neutrik NL4. Passive configuration on pins 1+/1- or 2+/2-, selected by the rear-panel switch." },
      { ...port("LINK", "speaker-level", "output", "speakon"), notes: "Second NL4, parallel link for the next enclosure in the array." },
    ],
  },
  {
    id: "4ef1e9a6-6986-4d7b-b971-ac23ff654c17",
    deviceType: "amplifier",
    label: "QSC CX-Q 2K4",
    shortName: "CX-Q 2K4",
    manufacturer: "QSC", modelNumber: "CX-Q 2K4",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/cx-q/4_channel/q_rep_specs_cxq_4ch.pdf",
    searchTerms: ["cx-q 2k4", "cx-q", "q-sys amplifier", "network amplifier", "flexamp", "q-lan", "dwav"],
    widthMm: 482, heightMm: 89, depthMm: 406, weightKg: 10.4,
    voltage: "AC mains, IEC C-14 inlet",
    unitCost: 3235,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 4-channel Q-SYS network amplifier, 500 W per channel, 2RU.
    // 5th generation high-efficiency Class D hybrid powertrain on the PL380 PowerLight platform, with fully
    // active Power Factor Correction. FlexAmp allows asymmetric per-channel power; FAST (Flexible Amplifier
    // Summing Technology) combines channels in bridge, parallel or bridge/parallel mode for up to 200 Vrms
    // or up to 35 A. Low impedance, 70 V and 100 V direct drive on all channels - no output transformers.
    // Native Q-SYS component: drag-and-drop into a design, with Intrinsic Correction loudspeaker voicings.
    // 4 channels of mic/line input with +12 V phantom act as Q-SYS on-ramps.
    // Noise: unweighted output unmuted >102 dB, weighted output muted >106 dB.
    // Protection: short circuit, open circuit, over current, over voltage, thermal, RF, DC fault shutdown,
    // active inrush limiting, on/off muting.
    // 89 x 482 x 406 mm (H x W x D), 10.4 kg net.
    // POWER CONSUMPTION LEFT BLANK: QSC publish current draw and heat loss as per-load tables, not one figure.
    ports: [
      { ...port("MIC/LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("Q-LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Q-LAN network - audio transport, control and monitoring as a native Q-SYS component. QSC's spec sheet says 'Q-LAN Network connectivity' without stating a port count; one port recorded." },
      { ...port("OUTPUT 1", "speaker-level", "output", "phoenix"), notes: "Channel 1: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 2", "speaker-level", "output", "phoenix"), notes: "Channel 2: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 3", "speaker-level", "output", "phoenix"), notes: "Channel 3: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 4", "speaker-level", "output", "phoenix"), notes: "Channel 4: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("GPIO", "gpio", "bidirectional", "phoenix"), channelCount: 8, notes: "Eight configurable bi-directional GPIO connections." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC C-14 inlet with AC power disconnect; locking IEC cord supplied." },
    ],
  },
  {
    id: "8952ed98-0d58-4522-b678-f1794337d9aa",
    deviceType: "amplifier",
    label: "QSC CX-Q 4K4",
    shortName: "CX-Q 4K4",
    manufacturer: "QSC", modelNumber: "CX-Q 4K4",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/cx-q/4_channel/q_rep_specs_cxq_4ch.pdf",
    searchTerms: ["cx-q 4k4", "cx-q", "q-sys amplifier", "network amplifier", "flexamp", "q-lan", "dwav"],
    widthMm: 482, heightMm: 89, depthMm: 406, weightKg: 11.3,
    voltage: "AC mains, IEC C-14 inlet",
    unitCost: 4355,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 4-channel Q-SYS network amplifier, 1000 W per channel, 2RU.
    // 5th generation high-efficiency Class D hybrid powertrain on the PL380 PowerLight platform, with fully
    // active Power Factor Correction. FlexAmp allows asymmetric per-channel power; FAST (Flexible Amplifier
    // Summing Technology) combines channels in bridge, parallel or bridge/parallel mode for up to 200 Vrms
    // or up to 35 A. Low impedance, 70 V and 100 V direct drive on all channels - no output transformers.
    // Native Q-SYS component: drag-and-drop into a design, with Intrinsic Correction loudspeaker voicings.
    // 4 channels of mic/line input with +12 V phantom act as Q-SYS on-ramps.
    // Noise: unweighted output unmuted >102 dB, weighted output muted >106 dB.
    // Protection: short circuit, open circuit, over current, over voltage, thermal, RF, DC fault shutdown,
    // active inrush limiting, on/off muting.
    // 89 x 482 x 406 mm (H x W x D), 11.3 kg net.
    // POWER CONSUMPTION LEFT BLANK: QSC publish current draw and heat loss as per-load tables, not one figure.
    ports: [
      { ...port("MIC/LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("Q-LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Q-LAN network - audio transport, control and monitoring as a native Q-SYS component. QSC's spec sheet says 'Q-LAN Network connectivity' without stating a port count; one port recorded." },
      { ...port("OUTPUT 1", "speaker-level", "output", "phoenix"), notes: "Channel 1: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 2", "speaker-level", "output", "phoenix"), notes: "Channel 2: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 3", "speaker-level", "output", "phoenix"), notes: "Channel 3: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 4", "speaker-level", "output", "phoenix"), notes: "Channel 4: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("GPIO", "gpio", "bidirectional", "phoenix"), channelCount: 8, notes: "Eight configurable bi-directional GPIO connections." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC C-14 inlet with AC power disconnect; locking IEC cord supplied." },
    ],
  },
  {
    id: "348cef68-3778-4641-a700-62204945edd7",
    deviceType: "amplifier",
    label: "QSC CX-Q 8K4",
    shortName: "CX-Q 8K4",
    manufacturer: "QSC", modelNumber: "CX-Q 8K4",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/cx-q/4_channel/q_rep_specs_cxq_4ch.pdf",
    searchTerms: ["cx-q 8k4", "cx-q", "q-sys amplifier", "network amplifier", "flexamp", "q-lan", "dwav"],
    widthMm: 482, heightMm: 89, depthMm: 406, weightKg: 11.8,
    voltage: "AC mains, IEC C-14 inlet",
    unitCost: 5465,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 4-channel Q-SYS network amplifier, 2000 W per channel, 2RU.
    // 5th generation high-efficiency Class D hybrid powertrain on the PL380 PowerLight platform, with fully
    // active Power Factor Correction. FlexAmp allows asymmetric per-channel power; FAST (Flexible Amplifier
    // Summing Technology) combines channels in bridge, parallel or bridge/parallel mode for up to 200 Vrms
    // or up to 35 A. Low impedance, 70 V and 100 V direct drive on all channels - no output transformers.
    // Native Q-SYS component: drag-and-drop into a design, with Intrinsic Correction loudspeaker voicings.
    // 4 channels of mic/line input with +12 V phantom act as Q-SYS on-ramps.
    // Noise: unweighted output unmuted >102 dB, weighted output muted >106 dB.
    // Protection: short circuit, open circuit, over current, over voltage, thermal, RF, DC fault shutdown,
    // active inrush limiting, on/off muting.
    // 89 x 482 x 406 mm (H x W x D), 11.8 kg net.
    // POWER CONSUMPTION LEFT BLANK: QSC publish current draw and heat loss as per-load tables, not one figure.
    ports: [
      { ...port("MIC/LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("Q-LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Q-LAN network - audio transport, control and monitoring as a native Q-SYS component. QSC's spec sheet says 'Q-LAN Network connectivity' without stating a port count; one port recorded." },
      { ...port("OUTPUT 1", "speaker-level", "output", "phoenix"), notes: "Channel 1: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 2", "speaker-level", "output", "phoenix"), notes: "Channel 2: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 3", "speaker-level", "output", "phoenix"), notes: "Channel 3: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 4", "speaker-level", "output", "phoenix"), notes: "Channel 4: +/- pair on the 8-pin touch-proof Euroblock (green). Low-Z, 70 V or 100 V direct drive." },
      { ...port("GPIO", "gpio", "bidirectional", "phoenix"), channelCount: 8, notes: "Eight configurable bi-directional GPIO connections." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC C-14 inlet with AC power disconnect; locking IEC cord supplied." },
    ],
  },
  {
    id: "d04a97c3-3b52-49bd-948f-74d85fc762c5",
    deviceType: "amplifier",
    label: "QSC CX-Q 8K8",
    shortName: "CX-Q 8K8",
    manufacturer: "QSC", modelNumber: "CX-Q 8K8",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/cx-q/8_channel/q_rep_specs_cxq_8ch.pdf",
    searchTerms: ["cx-q 8k8", "cx-q", "q-sys amplifier", "network amplifier", "flexamp", "q-lan", "dwav"],
    widthMm: 482, heightMm: 89, depthMm: 406, weightKg: 11.8,
    voltage: "AC mains, IEC C-14 inlet",
    unitCost: 7915,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 8-channel Q-SYS network amplifier, 1000 W per channel, 2RU.
    // 5th generation high-efficiency Class D hybrid powertrain on the PL380 PowerLight platform, with fully
    // active Power Factor Correction. FlexAmp allows asymmetric per-channel power; FAST (Flexible Amplifier
    // Summing Technology) combines channels in bridge, parallel or bridge/parallel mode for up to 200 Vrms
    // or up to 35 A. Low impedance, 70 V and 100 V direct drive on all channels - no output transformers.
    // Native Q-SYS component: drag-and-drop into a design, with Intrinsic Correction loudspeaker voicings.
    // 8 channels of mic/line input with +12 V phantom act as Q-SYS on-ramps.
    // Noise: unweighted output unmuted >102 dB, weighted output muted >106 dB.
    // Protection: short circuit, open circuit, over current, over voltage, thermal, RF, DC fault shutdown,
    // active inrush limiting, on/off muting.
    // 89 x 482 x 406 mm (H x W x D), 11.8 kg net.
    // POWER CONSUMPTION LEFT BLANK: QSC publish current draw and heat loss as per-load tables, not one figure.
    ports: [
      { ...port("MIC/LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 5", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 6", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 7", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 8", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("Q-LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Q-LAN network - audio transport, control and monitoring as a native Q-SYS component. QSC's spec sheet says 'Q-LAN Network connectivity' without stating a port count; one port recorded." },
      { ...port("OUTPUT 1", "speaker-level", "output", "phoenix"), notes: "Channel 1: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 2", "speaker-level", "output", "phoenix"), notes: "Channel 2: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 3", "speaker-level", "output", "phoenix"), notes: "Channel 3: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 4", "speaker-level", "output", "phoenix"), notes: "Channel 4: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 5", "speaker-level", "output", "phoenix"), notes: "Channel 5: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 6", "speaker-level", "output", "phoenix"), notes: "Channel 6: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 7", "speaker-level", "output", "phoenix"), notes: "Channel 7: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 8", "speaker-level", "output", "phoenix"), notes: "Channel 8: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("GPIO", "gpio", "bidirectional", "phoenix"), channelCount: 8, notes: "Eight configurable bi-directional GPIO connections." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC C-14 inlet with AC power disconnect; locking IEC cord supplied." },
    ],
  },
  {
    id: "24cc0a31-6d82-4804-a250-23e148ac2a6d",
    deviceType: "audio-dsp",
    label: "Q-SYS Core Nano",
    shortName: "Core Nano",
    manufacturer: "QSC", modelNumber: "Core Nano",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/dsp_cores/core_nano/q_core_nano_specsheet.pdf",
    searchTerms: ["core nano", "q-sys core", "q-sys processor", "network i/o processor", "dsp", "qsc", "dwav"],
    widthMm: 220, heightMm: 43.6, depthMm: 286.6, weightKg: 1.6,
    powerDrawW: 60,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 3285,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network-only AV&C processor: 64x64 Q-LAN / AES67, software Dante 8x8 (32x32 licensed), 8 AEC,
    // 12x12 WAN, 2 VoIP softphones, USB AV bridging 8x8 audio + Q-SYS cameras, 32 network peripherals. No analog audio.
    // 1U half-rack, 220 W x 43.6 H x 286.6 D mm, 1.6 kg; rack ears / spacer for one or two in a 19 in space.
    // 40 W typical / 60 W max. Verified 2026-09-25 against the QSC spec sheet (2/24/2023) and the Core Nano / 8 Flex
    // hardware user manual TD-001615-00-B.
    ports: [
      { ...port("USB Type B (Device)", "usb", "bidirectional", "usb-b"), notes: "USB 3.0 dedicated device port: USB audio (up to 8x8, 24-bit 48 kHz) + UVC video bridging to a room PC; appears as audio, video and communications devices." },
      { ...port("USB Type C (Host / Device)", "usb", "bidirectional", "usb-c"), notes: "USB 3.1, host port or device port (device only when USB Type B is not in use)." },
      { ...port("USB Type A Host 1", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host: standard USB headset or speakerphone (one device at a time) and Q-SYS USB peripherals." },
      { ...port("USB Type A Host 2", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host." },
      { ...port("USB Type A Host 3", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host." },
      { ...port("USB Type A Host 4", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host." },
      { ...port("LAN A", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Primary, 1000 Mbps: Q-LAN, AES67, software Dante (8x8 included, 32x32 licensed), VoIP, WAN streaming, control." },
      { ...port("LAN B", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Backup / second network, 1000 Mbps: assignable to Q-LAN redundancy, VoIP, control or streaming." },
      { ...port("RS-232 COM 1", "serial", "bidirectional", "phoenix"), notes: "3-position 3.5 mm Euroblock." },
      { ...port("RS-232 COM 2", "serial", "bidirectional", "phoenix"), notes: "3-position 3.5 mm Euroblock." },
      { ...port("AC Mains", "power", "input", "iec"), notes: "IEC 60320 C14, internal universal supply 100-240 V 50/60 Hz. 40 W typical, 60 W maximum, 110 BTU/hr typical." },
    ],
  },
  {
    id: "595410f1-23ac-4643-904e-35d904974f62",
    deviceType: "audio-dsp",
    label: "Q-SYS Core 8 Flex",
    shortName: "Core 8 Flex",
    manufacturer: "QSC", modelNumber: "Core 8 Flex",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/dsp_cores/q_dn_core_nano_8flex_usermanual.pdf",
    searchTerms: ["core 8 flex", "q-sys core", "q-sys processor", "flex channels", "dsp", "qsc", "dwav"],
    widthMm: 220, heightMm: 43.6, depthMm: 286.6, weightKg: 1.8,
    powerDrawW: 60,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 4180,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS AV&C processor with 8 FLEX Channels (each a mic/line input with +48 V phantom or a line output, set in
    // the design) and 8x8 GPIO, plus the Core Nano's network I/O, USB AV bridging, VoIP and control engine.
    // 1U half-rack, 220 W x 43.6 H x 286.6 D mm, 1.8 kg. 40 W typical / 60 W max. Verified 2026-09-25 against
    // the Core Nano / 8 Flex hardware user manual TD-001615-00-B.
    ports: [
      { ...port("FLEX 1", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("FLEX 2", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("FLEX 3", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("FLEX 4", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("FLEX 5", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("FLEX 6", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("FLEX 7", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("FLEX 8", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX Channel: 3-pin Euroblock, set per channel in the design (or at run time) as a mic/line input or a line output; +48 V phantom on inputs (IEC 61938 P48, 10 mA)." },
      { ...port("GPIO Inputs 1-8", "gpio", "input", "phoenix"), channelCount: 8, notes: "Upper pins 1-8 of the GPIO block: 0-24 V analog input or contact closure. +12 VDC (0.1 A) and ground pins on the same block." },
      { ...port("GPIO Outputs 1-8", "gpio", "output", "phoenix"), channelCount: 8, notes: "Lower pins 1-8 of the GPIO block: open collector, 24 V 0.2 A max, pull-up to +3.3 V." },
      { ...port("USB Type B (Device)", "usb", "bidirectional", "usb-b"), notes: "USB 3.0 dedicated device port: USB audio (up to 8x8, 24-bit 48 kHz) + UVC video bridging to a room PC; appears as audio, video and communications devices." },
      { ...port("USB Type C (Host / Device)", "usb", "bidirectional", "usb-c"), notes: "USB 3.1, host port or device port (device only when USB Type B is not in use)." },
      { ...port("USB Type A Host 1", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host: standard USB headset or speakerphone (one device at a time) and Q-SYS USB peripherals." },
      { ...port("USB Type A Host 2", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host." },
      { ...port("USB Type A Host 3", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host." },
      { ...port("USB Type A Host 4", "usb", "bidirectional", "usb-a"), notes: "USB 3.0 host." },
      { ...port("LAN A", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Primary, 1000 Mbps: Q-LAN, AES67, software Dante (8x8 included, 32x32 licensed), VoIP, WAN streaming, control." },
      { ...port("LAN B", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Backup / second network, 1000 Mbps: assignable to Q-LAN redundancy, VoIP, control or streaming." },
      { ...port("RS-232 COM 1", "serial", "bidirectional", "phoenix"), notes: "3-position 3.5 mm Euroblock." },
      { ...port("RS-232 COM 2", "serial", "bidirectional", "phoenix"), notes: "3-position 3.5 mm Euroblock." },
      { ...port("AC Mains", "power", "input", "iec"), notes: "IEC 60320 C14, internal universal supply 100-240 V 50/60 Hz. 40 W typical, 60 W maximum, 110 BTU/hr typical." },
    ],
  },
  {
    id: "a59f65c4-8137-4b64-8b8e-e64deccbe57f",
    deviceType: "audio-dsp",
    label: "Q-SYS Core 24f",
    shortName: "Core 24f",
    manufacturer: "QSC", modelNumber: "Core 24f",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/dsp_cores/core_24f/q_dn_core24f_specsheet.pdf",
    searchTerms: ["core 24f", "q-sys core", "q-sys processor", "flex channels", "dsp", "qsc", "dwav"],
    widthMm: 482.6, heightMm: 43.6, depthMm: 310.9, weightKg: 5.44,
    powerDrawW: 150,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 6415,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network + analog AV&C processor, 1U: 160x160 network channels, 8 mic/line in (+48 V), 8 line out,
    // 8 FLEX channels, 24 AEC, 8 VoIP softphones, software Dante 8x8 (64x64 licensed), 96 network peripherals.
    // 8x8 GPIO, 2 RS-232, USB-C (AV bridging / HID / DP Alt) + 2 USB-A, four 2.5 Gb LAN ports. 482.6 W x 310.9 D x
    // 43.6 H mm, 5.44 kg; 60 W typical / 150 W max. Needs 6 in open behind it. Verified 2026-09-25 against the Core 24f
    // spec sheet and hardware user manual WA-001710-01-A.
    ports: [
      { ...port("MIC/LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("MIC/LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("MIC/LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("MIC/LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("MIC/LINE IN 5", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("MIC/LINE IN 6", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("MIC/LINE IN 7", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("MIC/LINE IN 8", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (orange), balanced or unbalanced, +48 V phantom (IEC 61938 P48, 10 mA), -36 to +24 dBu." },
      { ...port("FLEX 1", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("FLEX 2", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("FLEX 3", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("FLEX 4", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("FLEX 5", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("FLEX 6", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("FLEX 7", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("FLEX 8", "analog-audio", "bidirectional", "phoenix"), notes: "3-pin Euroblock (blue), set per channel as a mic/line input (+48 V available) or a line output." },
      { ...port("LINE OUT 1", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("LINE OUT 2", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("LINE OUT 3", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("LINE OUT 4", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("LINE OUT 5", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("LINE OUT 6", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("LINE OUT 7", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("LINE OUT 8", "analog-audio", "output", "phoenix"), notes: "3-pin Euroblock (green), balanced or unbalanced, -36 to +24 dBu, 100 Ohm." },
      { ...port("GPIO Inputs 1-8", "gpio", "input", "phoenix"), channelCount: 8, notes: "10-terminal Euroblock: pins 2-9 0-24 VDC analog, potentiometer, TTL or contact closure (GPI 1 can be word clock in); pin 1 12 VDC 0.2 A; pin 10 ground." },
      { ...port("GPIO Outputs 1-8", "gpio", "output", "phoenix"), channelCount: 8, notes: "10-terminal Euroblock: pins 2-9 open collector (24 V, 0.2 A max) with 3.3 V pull-ups or TTL; pin 1 12 VDC 0.2 A; pin 10 ground." },
      { ...port("RS-232 COM A", "serial", "bidirectional", "phoenix"), notes: "3-terminal Euroblock." },
      { ...port("RS-232 COM B", "serial", "bidirectional", "phoenix"), notes: "3-terminal Euroblock." },
      { ...port("USB-C", "usb", "bidirectional", "usb-c"), notes: "USB 3.1 host, device or DisplayPort Alt Mode; AV bridging and HID routing (16x16 audio), up to 3 USB audio devices; sources 2.0 A." },
      { ...port("USB-A 1", "usb", "bidirectional", "usb-a"), notes: "USB 3.1 host, 900 mA." },
      { ...port("USB-A 2", "usb", "bidirectional", "usb-a"), notes: "USB 3.1 host, 900 mA." },
      { ...port("LAN A", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Up to 2.5 Gbps. Q-LAN, AES67, software Dante (8x8 included, 64x64 licensed), VoIP, streaming, control." },
      { ...port("LAN B", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Up to 2.5 Gbps. Assignable: Q-LAN redundancy, VoIP, control, streaming." },
      { ...port("LAN C", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Up to 2.5 Gbps. Assignable." },
      { ...port("LAN D", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Up to 2.5 Gbps. Assignable." },
      { ...port("AC Mains", "power", "input", "iec"), notes: "Universal 100-240 VAC 50/60 Hz, 150 W (rear label). 60 W typical, 150 W max, 136 BTU/hr." },
    ],
  },
  {
    id: "4b057d00-c5aa-44da-be5a-b385722b3ae1",
    deviceType: "audio-dsp",
    label: "Q-SYS Server Core X10",
    shortName: "Server Core X10",
    manufacturer: "QSC", modelNumber: "Server Core X10",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/dsp_cores/server_core_x10/q_dn_server_core_x10_specsheet.pdf",
    searchTerms: ["server core x10", "core x10", "q-sys server core", "q-sys processor", "dsp", "qsc", "dwav"],
    widthMm: 438, heightMm: 44, depthMm: 460, weightKg: 8.5,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 9940,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network-only server processor, 1U: 256x256 network audio, software Dante 8x8 (128x128 licensed),
    // 64x64 WAN/media, 32 VoIP softphones, 64 AEC, 256 GB media drive. Four 2.5 Gb LAN (2 Q-SYS Multimedia,
    // 2 Q-SYS Aux), one DB-9 RS-232, one 500 W universal PSU module. 438 W x 460 D x 44 H mm body (rail kit and
    // rack-ear handles included), 8.5 kg. Verified 2026-09-25 against the Server Core X10 spec sheet (14 May 2025).
    ports: [
      { ...port("LAN 1 (Multimedia)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Q-SYS Multimedia port, 2.5 Gbps: Q-LAN, AES67, Dante, media." },
      { ...port("LAN 2 (Multimedia)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Q-SYS Multimedia port, 2.5 Gbps." },
      { ...port("LAN 3 (Aux)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Q-SYS Aux port, 2.5 Gbps: control, VoIP, management." },
      { ...port("LAN 4 (Aux)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "2.5G", notes: "Q-SYS Aux port, 2.5 Gbps." },
      { ...port("RS-232", "serial", "bidirectional", "db9"), notes: "DB-9, 16550-compliant, rear panel." },
      { ...port("AC Mains", "power", "input", "other"), notes: "One universal-input 500 W PSU module, 100-240 VAC 50/60 Hz, 2.0 A; region-specific cord included. Inlet type not stated." },
    ],
  },
  {
    id: "96eeece2-d9a8-41ad-9b14-88c976a297d1",
    deviceType: "audio-dsp",
    label: "Q-SYS Server Core X20r",
    shortName: "Server Core X20r",
    manufacturer: "QSC", modelNumber: "Server Core X20r",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/dsp_cores/server_core_x20r/q_dn_server_core_x20r_specsheet.pdf",
    searchTerms: ["server core x20r", "core x20r", "q-sys server core", "q-sys processor", "dsp", "qsc", "redundant", "dwav"],
    widthMm: 482, heightMm: 42.8, depthMm: 599, weightKg: 13.23,
    voltage: "AC 100-240 V, dual PSU",
    unitCost: 16070,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network-only server processor on a Dell R360XE, 1U, dual 600 W PSUs: 384x384 network audio, software
    // Dante 8x8 (256x256 licensed), 96x96 WAN/media, 64 VoIP, 128 AEC, 480 GB media drive. Four 1 Gb LAN (2 Q-SYS
    // Multimedia, 2 Q-SYS Aux), dedicated iDRAC v9 Ethernet, one DB-9 RS-232, iDRAC Direct micro-USB on the front.
    // 482 W x 599 D x 42.8 H mm including rack ears and handles, 13.23 kg - needs a deep rack. Verified 2026-09-25
    // against the Server Core X20r spec sheet (14 May 2025).
    ports: [
      { ...port("LAN 1 (Multimedia)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-SYS Multimedia port, 1000 Mbps: Q-LAN, AES67, Dante, media." },
      { ...port("LAN 2 (Multimedia)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-SYS Multimedia port, 1000 Mbps." },
      { ...port("LAN 3 (Aux)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-SYS Aux port, 1000 Mbps: control, VoIP, management." },
      { ...port("LAN 4 (Aux)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-SYS Aux port, 1000 Mbps." },
      { ...port("iDRAC", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Dedicated iDRAC v9 out-of-band management Ethernet (rear)." },
      { ...port("iDRAC Direct", "usb", "bidirectional", "usb-micro"), notes: "Front panel Micro-AB USB for iDRAC Direct." },
      { ...port("RS-232", "serial", "bidirectional", "db9"), notes: "DB-9, 16550-compliant, rear panel." },
      { ...port("AC Mains 1", "power", "input", "other"), notes: "PSU 1 of 2, universal 600 W module, 100-240 VAC 50/60 Hz. Inlet type not stated; two cords included." },
      { ...port("AC Mains 2", "power", "input", "other"), notes: "PSU 2 of 2 (redundant), universal 600 W module." },
    ],
  },
  {
    id: "8784717f-4dff-4a86-a79c-efc65ac00e72",
    deviceType: "amplifier",
    label: "QSC CX-Q 4K8",
    shortName: "CX-Q 4K8",
    manufacturer: "QSC", modelNumber: "CX-Q 4K8",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/cx-q/8_channel/q_rep_specs_cxq_8ch.pdf",
    searchTerms: ["cx-q 4k8", "cx-q", "q-sys amplifier", "network amplifier", "flexamp", "q-lan", "dwav"],
    widthMm: 482, heightMm: 89, depthMm: 406, weightKg: 11.3,
    voltage: "AC mains, IEC C-14 inlet",
    unitCost: 6355,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 8-channel Q-SYS network amplifier: 300 W continuous per channel at 8 Ohm / 70 V / 100 V, all channels driven,
    // 1000 W max (20 ms burst, one channel); 4,000 W supply shared by FlexAmp. 2RU.
    // FAST combines channels: BTL pairs 600 W at 8 Ohm / 140-200 V, parallel pairs 600 W at 70 / 100 V, bridge/parallel
    // quads 1200 W, parallel quads 1200 W down to 1 Ohm. Low-Z, 70 V and 100 V direct drive - no output transformers.
    // 8 channels of mic/line input with +12 V phantom act as Q-SYS on-ramps. Universal supply 100-240 VAC with active PFC.
    // 89 x 482 x 406 mm (H x W x D), 25 lb / 11.3 kg net. Verified 2026-09-25 against the CX-Q Series 8-channel
    // specifications sheet (4K8 column).
    // POWER CONSUMPTION LEFT BLANK: QSC publish current draw and heat loss as per-load tables, not one figure.
    ports: [
      { ...port("MIC/LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 5", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 6", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 7", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("MIC/LINE IN 8", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (green), mic/line with +12 V phantom power; acts as a Q-SYS on-ramp." },
      { ...port("Q-LAN", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Q-LAN network - audio transport, control and monitoring as a native Q-SYS component. QSC's spec sheet says 'Q-LAN Network connectivity' without stating a port count; one port recorded." },
      { ...port("OUTPUT 1", "speaker-level", "output", "phoenix"), notes: "Channel 1: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 2", "speaker-level", "output", "phoenix"), notes: "Channel 2: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 3", "speaker-level", "output", "phoenix"), notes: "Channel 3: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 4", "speaker-level", "output", "phoenix"), notes: "Channel 4: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 5", "speaker-level", "output", "phoenix"), notes: "Channel 5: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 6", "speaker-level", "output", "phoenix"), notes: "Channel 6: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 7", "speaker-level", "output", "phoenix"), notes: "Channel 7: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("OUTPUT 8", "speaker-level", "output", "phoenix"), notes: "Channel 8: +/- pair on one of the two 8-pin touch-proof Euroblocks (green), 4 channels each. Low-Z, 70 V or 100 V direct drive." },
      { ...port("GPIO", "gpio", "bidirectional", "phoenix"), channelCount: 8, notes: "Eight configurable bi-directional GPIO connections." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC C-14 inlet with AC power disconnect; locking IEC cord supplied." },
    ],
  },
  {
    id: "799eb38d-4ae3-4b7c-9811-8108cdb9da27",
    deviceType: "amplifier",
    label: "QSC MPA-Q 4x250",
    shortName: "MPA-Q 4x250",
    manufacturer: "QSC", modelNumber: "MPA-Q 4x250",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/mpa-q/q_amp_mpa-q_series_spec_sheet.pdf",
    searchTerms: ["mpa-q 4x250", "mpa-q", "q-sys amplifier", "network amplifier", "q-lan", "70v amplifier", "dwav"],
    widthMm: 483, heightMm: 89, depthMm: 381, weightKg: 9,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 2325,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 4-channel Q-SYS network amplifier, 2RU: 150 W continuous (all channels) / 250 W max per channel at
    // 8, 4 or 2 Ohm and 70 / 100 V; bridged pairs double it (2 Ohm bridged not supported).
    // 4 line-level analog inputs (not mic). Q-SYS Mode or Analog Mode by a rear switch read at boot; standby
    // fails over to the analog inputs when the network drops. DSP: IIR/FIR (1024 taps), 2020 ms delay, limiters.
    // 4 GPI + 2 NO/NC relays on a 12-pin Euroblock; LAN A optionally PoE 802.3af.
    // 381 D x 483 W x 89 H mm, 9.0 kg. Verified 2026-09-25 against the MPA-Q Series spec sheet (April 29, 2026),
    // the hardware user manual and help.qsys.com (rear panel).
    // POWER CONSUMPTION LEFT BLANK: QSC publish only the AC current range, not a wattage.
    ports: [
      { ...port("LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LAN A (PoE)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN primary, 1 Gbps. Optionally accepts PoE 802.3af Type 1 so the amp's network side restores audio within seconds after a power interruption." },
      { ...port("LAN B", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN secondary / redundant, 1 Gbps." },
      { ...port("GPI 1-4", "gpio", "input", "phoenix"), channelCount: 4, notes: "4 GPI inputs, 0-3.3 V DC closure, on the 12-pin (2-row) 3.5 mm Euroblock shared with the relays. GPIO (MPA-Q) component." },
      { ...port("Relays 1-2", "contact-closure", "output", "phoenix"), channelCount: 2, notes: "2 relay outputs, NO / C / NC each, on the same 12-pin Euroblock." },
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC inlet, 100-240 V 50/60 Hz, 2.8-1.8 A. No wattage published." },
    ],
  },
  {
    id: "4fbe948b-c129-4d98-b692-d4e69825eebe",
    deviceType: "amplifier",
    label: "QSC MPA-Q 4x500",
    shortName: "MPA-Q 4x500",
    manufacturer: "QSC", modelNumber: "MPA-Q 4x500",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/mpa-q/q_amp_mpa-q_series_spec_sheet.pdf",
    searchTerms: ["mpa-q 4x500", "mpa-q", "q-sys amplifier", "network amplifier", "q-lan", "70v amplifier", "dwav"],
    widthMm: 483, heightMm: 89, depthMm: 381, weightKg: 9.4,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 2975,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 4-channel Q-SYS network amplifier, 2RU: 300 W continuous (all channels) / 500 W max per channel at
    // 8, 4 or 2 Ohm and 70 / 100 V; bridged pairs double it (2 Ohm bridged not supported).
    // 4 line-level analog inputs (not mic). Q-SYS Mode or Analog Mode by a rear switch read at boot; standby
    // fails over to the analog inputs when the network drops. DSP: IIR/FIR (1024 taps), 2020 ms delay, limiters.
    // 4 GPI + 2 NO/NC relays on a 12-pin Euroblock; LAN A optionally PoE 802.3af.
    // 381 D x 483 W x 89 H mm, 9.4 kg. Verified 2026-09-25 against the MPA-Q Series spec sheet (April 29, 2026),
    // the hardware user manual and help.qsys.com (rear panel).
    // POWER CONSUMPTION LEFT BLANK: QSC publish only the AC current range, not a wattage.
    ports: [
      { ...port("LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LAN A (PoE)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN primary, 1 Gbps. Optionally accepts PoE 802.3af Type 1 so the amp's network side restores audio within seconds after a power interruption." },
      { ...port("LAN B", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN secondary / redundant, 1 Gbps." },
      { ...port("GPI 1-4", "gpio", "input", "phoenix"), channelCount: 4, notes: "4 GPI inputs, 0-3.3 V DC closure, on the 12-pin (2-row) 3.5 mm Euroblock shared with the relays. GPIO (MPA-Q) component." },
      { ...port("Relays 1-2", "contact-closure", "output", "phoenix"), channelCount: 2, notes: "2 relay outputs, NO / C / NC each, on the same 12-pin Euroblock." },
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC inlet, 100-240 V 50/60 Hz, 4.6-2.5 A. No wattage published." },
    ],
  },
  {
    id: "395efd09-bc6a-46f6-8c0f-a5a81d94da61",
    deviceType: "amplifier",
    label: "QSC MPA-Q 8x125",
    shortName: "MPA-Q 8x125",
    manufacturer: "QSC", modelNumber: "MPA-Q 8x125",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/mpa-q/q_amp_mpa-q_series_spec_sheet.pdf",
    searchTerms: ["mpa-q 8x125", "mpa-q", "q-sys amplifier", "network amplifier", "q-lan", "70v amplifier", "dwav"],
    widthMm: 483, heightMm: 89, depthMm: 381, weightKg: 10.2,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 3550,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 8-channel Q-SYS network amplifier, 2RU: 75 W continuous (all channels) / 125 W max per channel at
    // 8, 4 or 2 Ohm and 70 / 100 V; bridged pairs double it (2 Ohm bridged not supported).
    // 8 line-level analog inputs (not mic). Q-SYS Mode or Analog Mode by a rear switch read at boot; standby
    // fails over to the analog inputs when the network drops. DSP: IIR/FIR (1024 taps), 2020 ms delay, limiters.
    // 4 GPI + 2 NO/NC relays on a 12-pin Euroblock; LAN A optionally PoE 802.3af.
    // 381 D x 483 W x 89 H mm, 10.2 kg. Verified 2026-09-25 against the MPA-Q Series spec sheet (April 29, 2026),
    // the hardware user manual and help.qsys.com (rear panel).
    // POWER CONSUMPTION LEFT BLANK: QSC publish only the AC current range, not a wattage.
    ports: [
      { ...port("LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 5", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 6", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 7", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 8", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LAN A (PoE)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN primary, 1 Gbps. Optionally accepts PoE 802.3af Type 1 so the amp's network side restores audio within seconds after a power interruption." },
      { ...port("LAN B", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN secondary / redundant, 1 Gbps." },
      { ...port("GPI 1-4", "gpio", "input", "phoenix"), channelCount: 4, notes: "4 GPI inputs, 0-3.3 V DC closure, on the 12-pin (2-row) 3.5 mm Euroblock shared with the relays. GPIO (MPA-Q) component." },
      { ...port("Relays 1-2", "contact-closure", "output", "phoenix"), channelCount: 2, notes: "2 relay outputs, NO / C / NC each, on the same 12-pin Euroblock." },
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT E", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT F", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT G", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT H", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC inlet, 100-240 V 50/60 Hz, 3.2-2.0 A. No wattage published." },
    ],
  },
  {
    id: "520930c6-504d-4f01-83ff-9eca4c2de771",
    deviceType: "amplifier",
    label: "QSC MPA-Q 8x250",
    shortName: "MPA-Q 8x250",
    manufacturer: "QSC", modelNumber: "MPA-Q 8x250",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/mpa-q/q_amp_mpa-q_series_spec_sheet.pdf",
    searchTerms: ["mpa-q 8x250", "mpa-q", "q-sys amplifier", "network amplifier", "q-lan", "70v amplifier", "dwav"],
    widthMm: 483, heightMm: 89, depthMm: 381, weightKg: 10.4,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 4475,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 8-channel Q-SYS network amplifier, 2RU: 150 W continuous (all channels) / 250 W max per channel at
    // 8, 4 or 2 Ohm and 70 / 100 V; bridged pairs double it (2 Ohm bridged not supported).
    // 8 line-level analog inputs (not mic). Q-SYS Mode or Analog Mode by a rear switch read at boot; standby
    // fails over to the analog inputs when the network drops. DSP: IIR/FIR (1024 taps), 2020 ms delay, limiters.
    // 4 GPI + 2 NO/NC relays on a 12-pin Euroblock; LAN A optionally PoE 802.3af.
    // 381 D x 483 W x 89 H mm, 10.4 kg. Verified 2026-09-25 against the MPA-Q Series spec sheet (April 29, 2026),
    // the hardware user manual and help.qsys.com (rear panel).
    // POWER CONSUMPTION LEFT BLANK: QSC publish only the AC current range, not a wattage.
    ports: [
      { ...port("LINE IN 1", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 2", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 3", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 4", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 5", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 6", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 7", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LINE IN 8", "analog-audio", "input", "phoenix"), notes: "3-pin Euroblock (3.5 mm), balanced or unbalanced, LINE LEVEL ONLY (not mic). >11k balanced. Q-SYS Mode: on-ramp over Q-LAN; Analog Mode: drives the matching output directly." },
      { ...port("LAN A (PoE)", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN primary, 1 Gbps. Optionally accepts PoE 802.3af Type 1 so the amp's network side restores audio within seconds after a power interruption." },
      { ...port("LAN B", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Q-LAN secondary / redundant, 1 Gbps." },
      { ...port("GPI 1-4", "gpio", "input", "phoenix"), channelCount: 4, notes: "4 GPI inputs, 0-3.3 V DC closure, on the 12-pin (2-row) 3.5 mm Euroblock shared with the relays. GPIO (MPA-Q) component." },
      { ...port("Relays 1-2", "contact-closure", "output", "phoenix"), channelCount: 2, notes: "2 relay outputs, NO / C / NC each, on the same 12-pin Euroblock." },
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT E", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT F", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT G", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT H", "speaker-level", "output", "phoenix"), notes: "4-pin Euroblock (7.62 mm), 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("AC MAINS", "power", "input", "iec"), notes: "IEC inlet, 100-240 V 50/60 Hz, 5.2-2.8 A. No wattage published." },
    ],
  },
  {
    id: "c73bcce0-984a-4081-a755-9daafa244632",
    deviceType: "amplifier",
    label: "QSC SPA-Qf 60x2",
    shortName: "SPA-Qf 60x2",
    manufacturer: "QSC", modelNumber: "SPA-Qf 60x2",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/spa-q/q_rep_spa-qf_specsheet.pdf",
    searchTerms: ["spa-qf 60x2", "spa-q", "spa-qf", "q-sys amplifier", "network amplifier", "half rack amplifier", "dwav"],
    widthMm: 221, heightMm: 44, depthMm: 286,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 1645,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 2-channel Q-SYS network amplifier, half-rack 1U, convection cooled: 60 W per channel at 4, 8 or 16 Ohm;
    // bridged pairs 120 W at 8/16 Ohm or 70 / 100 V (70 / 100 V only bridged), 100 W at 4 Ohm.
    // 2 FLEX channels (mic/line in with 48 V, or line out), 4 bi-directional GPIO, one 1 Gb Q-LAN port.
    // 44 H x 221 W x 286 D mm; rack / wall kit included. Verified 2026-09-25 against the SPA-Q Series spec sheet
    // (2023) and the SPA-Qf hardware user manual TD-001669-01-A.
    ports: [
      { ...port("FLEX 1", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX channel, 3.5 mm Euroblock (blue): mic/line input with 48 V phantom (-30 to +20 dBu, EIN < -123 dBu) or line output (to +21 dBu), set in Q-SYS Designer." },
      { ...port("FLEX 2", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX channel, 3.5 mm Euroblock (blue): mic/line input with 48 V phantom (-30 to +20 dBu, EIN < -123 dBu) or line output (to +21 dBu), set in Q-SYS Designer." },
      { ...port("GPIO 1-4", "gpio", "bidirectional", "phoenix"), channelCount: 4, notes: "6-position 3.5 mm Euroblock (black): 4 bi-directional pins, one 3.3 V 100 mA power pin, one ground." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "RJ45, 1 Gigabit Q-LAN. The only network port." },
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "On the 4-position 5 mm Euroblock (green, screw locks) shared with B. 60 W at 4/8/16 Ohm; bridged with B: 120 W at 8/16 Ohm, 70 V or 100 V (100 W at 4 Ohm)." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "On the 4-position 5 mm Euroblock (green, screw locks) shared with A. 60 W at 4/8/16 Ohm; bridged with A: 120 W at 8/16 Ohm, 70 V or 100 V (100 W at 4 Ohm)." },
      { ...port("AC POWER", "power", "input", "other"), notes: "100-240 VAC +/-10 %, 50-60 Hz with PFC; power cord included. Inlet type not stated in QSC's sheet or manual." },
    ],
  },
  {
    id: "79fb97f5-8c4c-49c5-9cbf-30a944b5fa65",
    deviceType: "amplifier",
    label: "QSC SPA-Qf 60x4",
    shortName: "SPA-Qf 60x4",
    manufacturer: "QSC", modelNumber: "SPA-Qf 60x4",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/amp/spa-q/q_rep_spa-qf_specsheet.pdf",
    searchTerms: ["spa-qf 60x4", "spa-q", "spa-qf", "q-sys amplifier", "network amplifier", "half rack amplifier", "dwav"],
    widthMm: 221, heightMm: 44, depthMm: 286,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 1940,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 4-channel Q-SYS network amplifier, half-rack 1U, convection cooled: 60 W per channel at 4, 8 or 16 Ohm;
    // bridged pairs 120 W at 8/16 Ohm or 70 / 100 V (70 / 100 V only bridged), 100 W at 4 Ohm.
    // 2 FLEX channels (mic/line in with 48 V, or line out), 4 bi-directional GPIO, one 1 Gb Q-LAN port.
    // 44 H x 221 W x 286 D mm; rack / wall kit included. Verified 2026-09-25 against the SPA-Q Series spec sheet
    // (2023) and the SPA-Qf hardware user manual TD-001669-01-A.
    ports: [
      { ...port("FLEX 1", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX channel, 3.5 mm Euroblock (blue): mic/line input with 48 V phantom (-30 to +20 dBu, EIN < -123 dBu) or line output (to +21 dBu), set in Q-SYS Designer." },
      { ...port("FLEX 2", "analog-audio", "bidirectional", "phoenix"), notes: "FLEX channel, 3.5 mm Euroblock (blue): mic/line input with 48 V phantom (-30 to +20 dBu, EIN < -123 dBu) or line output (to +21 dBu), set in Q-SYS Designer." },
      { ...port("GPIO 1-4", "gpio", "bidirectional", "phoenix"), channelCount: 4, notes: "6-position 3.5 mm Euroblock (black): 4 bi-directional pins, one 3.3 V 100 mA power pin, one ground." },
      { ...port("LAN", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "RJ45, 1 Gigabit Q-LAN. The only network port." },
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "On the 4-position 5 mm Euroblock (green, screw locks) shared with B. 60 W at 4/8/16 Ohm; bridged with B: 120 W at 8/16 Ohm, 70 V or 100 V (100 W at 4 Ohm)." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "On the 4-position 5 mm Euroblock (green, screw locks) shared with A. 60 W at 4/8/16 Ohm; bridged with A: 120 W at 8/16 Ohm, 70 V or 100 V (100 W at 4 Ohm)." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "On the 4-position 5 mm Euroblock (green, screw locks) shared with D. 60 W at 4/8/16 Ohm; bridged with D: 120 W at 8/16 Ohm, 70 V or 100 V (100 W at 4 Ohm)." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "On the 4-position 5 mm Euroblock (green, screw locks) shared with C. 60 W at 4/8/16 Ohm; bridged with C: 120 W at 8/16 Ohm, 70 V or 100 V (100 W at 4 Ohm)." },
      { ...port("AC POWER", "power", "input", "other"), notes: "100-240 VAC +/-10 %, 50-60 Hz with PFC; power cord included. Inlet type not stated in QSC's sheet or manual." },
    ],
  },
  {
    id: "089cdb31-d159-4b9a-9ab7-4c2679a2a4ab",
    deviceType: "amplifier",
    label: "QSC ISA500Ti",
    shortName: "ISA500Ti",
    manufacturer: "QSC", modelNumber: "ISA500Ti",
    referenceUrl: "https://www.qscaudio.com/resource-files/productresources/amp/q_amp_isa_specs.pdf",
    searchTerms: ["isa500ti", "isa 500ti", "isa series", "70v amplifier", "transformer amplifier", "qsc amplifier", "dwav"],
    widthMm: 483, heightMm: 133, depthMm: 400, weightKg: 22.3,
    voltage: "AC 100/120/230 V, 50-60 Hz",
    unitCost: 739,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 2-channel installed amplifier with internal output transformers (Ti), Class AB, 3RU. Per channel, both driven:
    // direct 260 W / 8 Ohm, 425 W / 4 Ohm, 700 W / 2 Ohm; isolated XF outputs 500 W at 70 or 100 V, 300 W at 25 V.
    // Bridge mono 900 W / 8, 1400 W / 4 Ohm, 1000 W at 140 / 200 V. Inputs XLR and Euroblock in parallel per channel,
    // 20k balanced; rear gain knobs, 10-position DIP switch; DataPort V2 (HD-15). 133 H x 483 W x 400 D mm (behind
    // the front rails), 22.3 kg. Discontinued. Verified 2026-09-25 against the QSC ISA Series spec sheet (02/22/06).
    ports: [
      { ...port("INPUT 1", "analog-audio", "input", "xlr-3"), notes: "Active balanced, 20k, pin 2+. XLR and 3-pin Euroblock in parallel: one input, wire one." },
      { ...port("INPUT 2", "analog-audio", "input", "xlr-3"), notes: "Active balanced, 20k, pin 2+. XLR and 3-pin Euroblock in parallel: one input, wire one." },
      { ...port("DataPort V2", "custom", "bidirectional", "db15"), notes: "HD-15 DataPort V2 for DPV2-compatible QSC signal processing accessories." },
      { ...port("OUTPUT 1", "speaker-level", "output", "terminal-block"), notes: "Covered barrier strip: direct (260 W / 8 Ohm) and isolated 25 / 70 / 100 V transformer terminals; the terminals used set the mode." },
      { ...port("OUTPUT 2", "speaker-level", "output", "terminal-block"), notes: "As OUTPUT 1. Bridge mono across both: 900 W / 8 Ohm or 1000 W at 140 / 200 V." },
      { ...port("AC MAINS", "power", "input", "other"), notes: "100, 120 or 230 VAC, 50-60 Hz (regional). Inlet type not stated on the sheet." },
    ],
  },
  {
    id: "77426a01-5945-43ff-afd7-8a3c4df75d36",
    deviceType: "ptz-camera",
    label: "Q-SYS NC-12x80",
    shortName: "NC-12x80",
    manufacturer: "QSC", modelNumber: "NC-12x80",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/nc_series/q_dn_qsys_ncseries_specsheet.pdf",
    searchTerms: ["nc-12x80", "nc series", "q-sys camera", "ptz camera", "network camera", "visionsuite", "dwav"],
    widthMm: 142, heightMm: 201, depthMm: 170, weightKg: 1.6,
    powerDrawW: 13,
    voltage: "PoE IEEE 802.3af Type 1 Class 3, or 12 VDC 2 A local",
    unitCost: 4950,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network PTZ camera: 12x optical zoom, 80 deg HFOV wide, 1/2.8 in CMOS, f=3.47-41.65 mm, F1.84-F3.72.
    // Pan +/-170 deg, tilt -30 to +90 deg, flip for ceiling mounting (PTZ-CMB1 ceiling mount, optional; PTZ-WMB1 wall
    // bracket included). Video to Q-SYS bridging endpoints over the network (no USB extenders); HDMI 1.4b 4K30 or 3G-SDI
    // 1080p60 local out. PoE Type 1 Class 3, 12.95 W max, or 12 VDC local.
    // 142 W x 201 H x 170 D mm, 1.6 kg. Verified 2026-09-25 against the NC Series spec sheet (Nov 4, 2025), the NC Series
    // user manual TD-001654-01-C (rear panel, dimension drawing) and QSC's A&E specification (dimension orientation).
    ports: [
      { ...port("HDMI Out", "hdmi", "output", "hdmi"), notes: "HDMI 1.4b, up to 2160p30 (RGB 4:4:4 8-bit). HDMI or 3G-SDI, not both at once. Not needed for Q-SYS bridging, which is over the network." },
      { ...port("3G-SDI Out", "sdi", "output", "bnc"), notes: "3G-SDI up to 1080p60. HDMI or SDI, not both at once." },
      { ...port("LAN / PoE", "ethernet", "bidirectional", "rj45"), addressable: true, poeDrawW: 13, linkSpeed: "1G", notes: "Gigabit Q-LAN: video (H.264 / MJPEG / YUY2 to the bridging endpoint), control, PoE Type 1 Class 3 (12.95 W max). Cat5e or better." },
      { ...port("DC 12 V", "power", "input", "barrel"), notes: "Optional local power: 12 VDC 2 A, EIAJ-04, centre positive, class 2 / LPS supply NOT included. PoE alone is enough." },
    ],
  },
  {
    id: "6a4aec71-7bfe-4798-8017-de2e0f14f5da",
    deviceType: "ptz-camera",
    label: "Q-SYS NC-20x60",
    shortName: "NC-20x60",
    manufacturer: "QSC", modelNumber: "NC-20x60",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/nc_series/q_dn_qsys_ncseries_specsheet.pdf",
    searchTerms: ["nc-20x60", "nc series", "q-sys camera", "ptz camera", "network camera", "visionsuite", "dwav"],
    widthMm: 142, heightMm: 201, depthMm: 170, weightKg: 1.6,
    powerDrawW: 13,
    voltage: "PoE IEEE 802.3af Type 1 Class 3, or 12 VDC 2 A local",
    unitCost: 5930,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network PTZ camera: 20x optical zoom, 60 deg HFOV wide, 1/1.8 in CMOS, f=6.25-125 mm, F1.58-F3.95.
    // Pan +/-170 deg, tilt -30 to +90 deg, flip for ceiling mounting (PTZ-CMB1 ceiling mount, optional; PTZ-WMB1 wall
    // bracket included). Video to Q-SYS bridging endpoints over the network (no USB extenders); HDMI 1.4b 4K30 or 3G-SDI
    // 1080p60 local out. PoE Type 1 Class 3, 12.95 W max, or 12 VDC local.
    // 142 W x 201 H x 170 D mm, 1.6 kg. Verified 2026-09-25 against the NC Series spec sheet (Nov 4, 2025), the NC Series
    // user manual TD-001654-01-C (rear panel, dimension drawing) and QSC's A&E specification (dimension orientation).
    ports: [
      { ...port("HDMI Out", "hdmi", "output", "hdmi"), notes: "HDMI 1.4b, up to 2160p30 (RGB 4:4:4 8-bit). HDMI or 3G-SDI, not both at once. Not needed for Q-SYS bridging, which is over the network." },
      { ...port("3G-SDI Out", "sdi", "output", "bnc"), notes: "3G-SDI up to 1080p60. HDMI or SDI, not both at once." },
      { ...port("LAN / PoE", "ethernet", "bidirectional", "rj45"), addressable: true, poeDrawW: 13, linkSpeed: "1G", notes: "Gigabit Q-LAN: video (H.264 / MJPEG / YUY2 to the bridging endpoint), control, PoE Type 1 Class 3 (12.95 W max). Cat5e or better." },
      { ...port("DC 12 V", "power", "input", "barrel"), notes: "Optional local power: 12 VDC 2 A, EIAJ-04, centre positive, class 2 / LPS supply NOT included. PoE alone is enough." },
    ],
  },
  {
    id: "9d564526-15ef-456f-bfdd-2804f5df1c31",
    deviceType: "camera",
    label: "Q-SYS NC-110",
    shortName: "NC-110",
    manufacturer: "QSC", modelNumber: "NC-110",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/nc_series/q_dn_qsys_nc-110_specsheet.pdf",
    searchTerms: ["nc-110", "nc series", "q-sys camera", "eptz", "conference camera", "network camera", "wide angle camera", "dwav"],
    widthMm: 194.3, heightMm: 34, depthMm: 41.5, weightKg: 0.4,
    powerDrawW: 6.4,
    voltage: "PoE IEEE 802.3af Type 1 Class 2",
    unitCost: 1550,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network ePTZ conference camera: fixed-focus 110 deg HFOV lens (f=1.86 mm), 1/2.8 in 4K CMOS, 8x digital
    // zoom (2x lossless), electronic pan/tilt. Video to Q-SYS bridging endpoints over the network; no HDMI or SDI out.
    // PoE Type 1 Class 2, 6.4 W max. Removable bracket for monitor or surface mounting, universal mount adapter.
    // Body 194.26 W x 34 H x 41.5 D mm (manual drawing); 194.5 x 54.7 x 95.7 mm and 0.4 kg with the bracket.
    // Verified 2026-09-25 against the NC-110 spec sheet (Feb 12, 2026) and the NC Series user manual TD-001654-01-C.
    ports: [
      { ...port("LAN / PoE", "ethernet", "bidirectional", "rj45"), addressable: true, poeDrawW: 6.4, linkSpeed: "1G", notes: "The only port: Gigabit Q-LAN (video to the bridging endpoint, control) and PoE Type 1 Class 2, 6.4 W max. Cat5e or better." },
    ],
  },
  {
    id: "ea06d9d4-6694-436f-b678-ee8dd257e981",
    deviceType: "wall-plate",
    label: "Q-SYS QIO-WP-BT-NA",
    shortName: "QIO-WP-BT",
    manufacturer: "QSC", modelNumber: "QIO-WP-BT-NA",
    referenceUrl: "https://www.qsys.com/resource-files/productresources/dn/io_peripherals/wall_plate/qio-wp-bt/q_dn_io_wallplate_qio-wp-bt_specs.pdf",
    searchTerms: ["qio-wp-bt", "qio", "bluetooth wall plate", "bluetooth", "auracast", "q-sys wall plate", "dwav"],
    widthMm: 69.9, heightMm: 117.1, depthMm: 39.5, weightKg: 0.17,
    powerDrawW: 3,
    voltage: "PoE IEEE 802.3af Class 0, 3 W max",
    unitCost: 980,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Q-SYS network Bluetooth audio wall plate, North American 1-gang Decora: Bluetooth 5.4 - A2DP/AVRCP receive,
    // HFP two-way calls, Auracast broadcast (LE PBP), SBC / AAC / aptX / aptX HD / LC3; NFC tap-to-pair, pairing button,
    // RGB status LED. Two Q-LAN channels to/from Q-SYS. PoE Class 0, 3 W max, 10.24 BTU/h; no fan.
    // 69.9 W x 117.1 H x 39.5 D mm with the 1-gang cover plate; fits a single- or dual-gang box >= 1.50 in deep. 170 g.
    // White and black faceplates included. Verified 2026-09-25 against the QIO-WP-BT spec sheet (Sep 24, 2026).
    ports: [
      { ...port("Bluetooth", "bluetooth", "bidirectional", "wireless"), notes: "Bluetooth 5.4, >25 m line of sight. Receive A2DP stereo media; HFP two-way for call bridging; transmit Auracast (PBP, LC3). Up to 10 paired devices remembered." },
      { ...port("LAN (PoE)", "ethernet", "bidirectional", "rj45"), addressable: true, poeDrawW: 3, linkSpeed: "1G", notes: "1 Gbps Q-LAN: two audio channels each way, control; PoE 802.3af Class 0, 3 W max." },
      { ...port("Link", "ethernet", "bidirectional", "rj45"), notes: "Second RJ45 link port - not active yet: supported in a future Q-SYS Designer Software release." },
    ],
  },
];
