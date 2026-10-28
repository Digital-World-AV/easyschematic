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
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
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
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "On one of 2 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 300 W continuous / 500 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
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
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT E", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT F", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT G", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT H", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 75 W continuous / 125 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
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
      { ...port("OUTPUT A", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT B", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT C", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT D", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT E", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT F", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT G", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
      { ...port("OUTPUT H", "speaker-level", "output", "phoenix"), notes: "On one of 4 4-pin Euroblocks (7.62 mm), two channels per block, 10 AWG max. 150 W continuous / 250 W max at 8, 4 or 2 Ohm, 70 V or 100 V; bridge with its pair for 2x." },
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
  {
    id: "dbec9b64-c39a-4326-9c03-eed2caef4cc9",
    deviceType: "speaker",
    label: "Martin Audio CDD6",
    shortName: "CDD6",
    manufacturer: "Martin Audio", modelNumber: "CDD6W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD6datasheet.pdf",
    searchTerms: ["cdd6", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 210, heightMm: 325, depthMm: 210, weightKg: 5.69,
    unitCost: 550,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Ultra-compact passive two-way Coaxial Differential Dispersion system, 9 litre composite enclosure.
    // LF 6.5 in (165 mm) with 1.5 in voice coil, long excursion, ferrite motor; HF 1 in (25 mm) voice coil fabric dome, neodymium motor.
    // Dispersion 110-80 deg horizontal x 80 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 2.5 kHz passive crossover.
    // 150 W AES / 600 W peak, 8 ohms nominal, 91 dB sensitivity, 113 dB continuous / 119 dB peak max SPL. 80 Hz - 20 kHz +/-3 dB (-10 dB at 70 Hz).
    // 4 x M6 inserts for wall / ceiling brackets. Accessories: CDDWB6/8B/W wall bracket, CDDCB6/8B/W ceiling bracket.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: white (RAL9016) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 13A push-lock, pluggable 4-pole Euroblock (user guide: 12 A). Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "ac8870b4-f3d9-4ab0-8b3c-8e3f2d439c5b",
    deviceType: "speaker",
    label: "Martin Audio CDD6",
    shortName: "CDD6",
    manufacturer: "Martin Audio", modelNumber: "CDD6B",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD6datasheet.pdf",
    searchTerms: ["cdd6", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 210, heightMm: 325, depthMm: 210, weightKg: 5.69,
    unitCost: 550,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Ultra-compact passive two-way Coaxial Differential Dispersion system, 9 litre composite enclosure.
    // LF 6.5 in (165 mm) with 1.5 in voice coil, long excursion, ferrite motor; HF 1 in (25 mm) voice coil fabric dome, neodymium motor.
    // Dispersion 110-80 deg horizontal x 80 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 2.5 kHz passive crossover.
    // 150 W AES / 600 W peak, 8 ohms nominal, 91 dB sensitivity, 113 dB continuous / 119 dB peak max SPL. 80 Hz - 20 kHz +/-3 dB (-10 dB at 70 Hz).
    // 4 x M6 inserts for wall / ceiling brackets. Accessories: CDDWB6/8B/W wall bracket, CDDCB6/8B/W ceiling bracket.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: black (RAL9005) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 13A push-lock, pluggable 4-pole Euroblock (user guide: 12 A). Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "ce33bec1-2ae7-4767-a209-d046b6952e04",
    deviceType: "speaker",
    label: "Martin Audio CDD8",
    shortName: "CDD8",
    manufacturer: "Martin Audio", modelNumber: "CDD8W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD8datasheet.pdf",
    searchTerms: ["cdd8", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 256, heightMm: 410, depthMm: 252, weightKg: 9.5,
    unitCost: 960,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Ultra-compact passive two-way Coaxial Differential Dispersion system, 14 litre composite enclosure.
    // LF 8 in (200 mm) with 2 in voice coil, long excursion, ferrite motor shared with the HF; HF 1 in (25 mm) exit, 1.4 in voice coil polyimide dome compression driver.
    // Dispersion 110-80 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 2.3 kHz passive crossover.
    // 200 W AES / 800 W peak, 8 ohms nominal, 94 dB sensitivity, 117 dB continuous / 123 dB peak max SPL. 70 Hz - 20 kHz +/-3 dB (-10 dB at 55 Hz).
    // 6 x M6 inserts for wall / ceiling brackets. Accessories: CDDWB6/8B/W wall bracket, CDDCB6/8B/W ceiling bracket.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: white (RAL9016) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 13A push-lock, pluggable 4-pole Euroblock (user guide: 12 A). Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "2dd4f5d5-cfd0-48c6-ac86-c17570c9a112",
    deviceType: "speaker",
    label: "Martin Audio CDD8",
    shortName: "CDD8",
    manufacturer: "Martin Audio", modelNumber: "CDD8B",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD8datasheet.pdf",
    searchTerms: ["cdd8", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 256, heightMm: 410, depthMm: 252, weightKg: 9.5,
    unitCost: 960,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Ultra-compact passive two-way Coaxial Differential Dispersion system, 14 litre composite enclosure.
    // LF 8 in (200 mm) with 2 in voice coil, long excursion, ferrite motor shared with the HF; HF 1 in (25 mm) exit, 1.4 in voice coil polyimide dome compression driver.
    // Dispersion 110-80 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 2.3 kHz passive crossover.
    // 200 W AES / 800 W peak, 8 ohms nominal, 94 dB sensitivity, 117 dB continuous / 123 dB peak max SPL. 70 Hz - 20 kHz +/-3 dB (-10 dB at 55 Hz).
    // 6 x M6 inserts for wall / ceiling brackets. Accessories: CDDWB6/8B/W wall bracket, CDDCB6/8B/W ceiling bracket.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: black (RAL9005) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 13A push-lock, pluggable 4-pole Euroblock (user guide: 12 A). Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "95df4260-64d6-416c-87bb-55fd5ecb40c8",
    deviceType: "speaker",
    label: "Martin Audio CDD10",
    shortName: "CDD10",
    manufacturer: "Martin Audio", modelNumber: "CDD10W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD10datasheet.pdf",
    searchTerms: ["cdd10", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 323, heightMm: 513, depthMm: 310, weightKg: 15.3,
    unitCost: 1400,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Compact passive two-way Coaxial Differential Dispersion system, 28 litre composite enclosure.
    // LF 10 in (250 mm) with 2.5 in voice coil, long excursion, ferrite motor shared with the HF; HF 1 in (25 mm) exit, 1.4 in voice coil polyimide dome compression driver.
    // Dispersion 110-75 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 2 kHz passive crossover.
    // 250 W AES / 1000 W peak, 8 ohms nominal, 96 dB sensitivity, 120 dB continuous / 126 dB peak max SPL. 65 Hz - 20 kHz +/-3 dB (-10 dB at 55 Hz).
    // 6 x M8 inserts for wall bracket, 10 x M8 fly points. Accessories: CDDWB10/12B/W wall bracket, CDDY10B/W yoke.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: white (RAL9016) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 20A push-lock, pluggable 4-pole Euroblock. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "5f82a369-0e6a-4a8c-822a-044419e60349",
    deviceType: "speaker",
    label: "Martin Audio CDD10",
    shortName: "CDD10",
    manufacturer: "Martin Audio", modelNumber: "CDD10B",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD10datasheet.pdf",
    searchTerms: ["cdd10", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 323, heightMm: 513, depthMm: 310, weightKg: 15.3,
    unitCost: 1400,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Compact passive two-way Coaxial Differential Dispersion system, 28 litre composite enclosure.
    // LF 10 in (250 mm) with 2.5 in voice coil, long excursion, ferrite motor shared with the HF; HF 1 in (25 mm) exit, 1.4 in voice coil polyimide dome compression driver.
    // Dispersion 110-75 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 2 kHz passive crossover.
    // 250 W AES / 1000 W peak, 8 ohms nominal, 96 dB sensitivity, 120 dB continuous / 126 dB peak max SPL. 65 Hz - 20 kHz +/-3 dB (-10 dB at 55 Hz).
    // 6 x M8 inserts for wall bracket, 10 x M8 fly points. Accessories: CDDWB10/12B/W wall bracket, CDDY10B/W yoke.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA2004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: black (RAL9005) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 20A push-lock, pluggable 4-pole Euroblock. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "2e4e304a-092c-4820-be51-2d4168feda84",
    deviceType: "speaker",
    label: "Martin Audio CDD12",
    shortName: "CDD12",
    manufacturer: "Martin Audio", modelNumber: "CDD12W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD12datasheet.pdf",
    searchTerms: ["cdd12", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 360, heightMm: 560, depthMm: 350, weightKg: 19,
    unitCost: 1750,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Compact high-output passive two-way Coaxial Differential Dispersion system, 38 litre birch plywood enclosure.
    // LF 12 in (300 mm) with 2.5 in voice coil, long excursion, ferrite motor shared with the HF; HF 1 in (25 mm) exit, 1.7 in voice coil polyimide dome compression driver.
    // Dispersion 110-60 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 1.9 kHz passive crossover.
    // 300 W AES / 1200 W peak, 8 ohms nominal, 97 dB sensitivity, 122 dB continuous / 128 dB peak max SPL. 62 Hz - 20 kHz +/-3 dB (-10 dB at 50 Hz).
    // 6 x M8 inserts for wall bracket, 10 x M8 fly points. Accessories: CDDWB10/12B/W wall bracket, CDDY12B/W yoke.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA5002, VIA5004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: white (RAL9016) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 20A push-lock, pluggable 4-pole Euroblock. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "1579294f-a37d-4c84-84fe-ab0554e684d2",
    deviceType: "speaker",
    label: "Martin Audio CDD12",
    shortName: "CDD12",
    manufacturer: "Martin Audio", modelNumber: "CDD12B",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD12datasheet.pdf",
    searchTerms: ["cdd12", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 360, heightMm: 560, depthMm: 350, weightKg: 19,
    unitCost: 1750,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Compact high-output passive two-way Coaxial Differential Dispersion system, 38 litre birch plywood enclosure.
    // LF 12 in (300 mm) with 2.5 in voice coil, long excursion, ferrite motor shared with the HF; HF 1 in (25 mm) exit, 1.7 in voice coil polyimide dome compression driver.
    // Dispersion 110-60 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 1.9 kHz passive crossover.
    // 300 W AES / 1200 W peak, 8 ohms nominal, 97 dB sensitivity, 122 dB continuous / 128 dB peak max SPL. 62 Hz - 20 kHz +/-3 dB (-10 dB at 50 Hz).
    // 6 x M8 inserts for wall bracket, 10 x M8 fly points. Accessories: CDDWB10/12B/W wall bracket, CDDY12B/W yoke.
    // Recommended amplifiers: iK41, iK81, VIA2502, VIA5002, VIA5004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: black (RAL9005) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 20A push-lock, pluggable 4-pole Euroblock. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "fd85533e-439e-4798-b28b-52478253aedb",
    deviceType: "speaker",
    label: "Martin Audio CDD15",
    shortName: "CDD15",
    manufacturer: "Martin Audio", modelNumber: "CDD15W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD15datasheet.pdf",
    searchTerms: ["cdd15", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 432, heightMm: 685, depthMm: 413, weightKg: 26,
    unitCost: 2500,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // High-output passive two-way Coaxial Differential Dispersion system, 68 litre birch plywood enclosure.
    // LF 15 in (380 mm) with 3 in voice coil, long excursion, ferrite motor shared with the HF; HF 1.4 in (36 mm) exit, 3 in voice coil titanium dome compression driver.
    // Dispersion 100-60 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 1.6 kHz passive crossover.
    // 400 W AES / 1600 W peak, 8 ohms nominal, 100 dB sensitivity, 126 dB continuous / 132 dB peak max SPL. 55 Hz - 18 kHz +/-3 dB (-10 dB at 45 Hz).
    // 10 x M8 fly points. Accessories: CDDY15B/W yoke, WB15B/W wall bracket.
    // Recommended amplifiers: iK41, iK81, VIA5002, VIA5004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: white (RAL9016) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 20A push-lock, pluggable 4-pole Euroblock. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "c7c12800-7470-4d1c-818e-d7d4f01bbc4d",
    deviceType: "speaker",
    label: "Martin Audio CDD15",
    shortName: "CDD15",
    manufacturer: "Martin Audio", modelNumber: "CDD15B",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/CDD15datasheet.pdf",
    searchTerms: ["cdd15", "martin audio cdd", "coaxial differential dispersion", "on-wall speaker", "dwav"],
    widthMm: 432, heightMm: 685, depthMm: 413, weightKg: 26,
    unitCost: 2500,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // High-output passive two-way Coaxial Differential Dispersion system, 68 litre birch plywood enclosure.
    // LF 15 in (380 mm) with 3 in voice coil, long excursion, ferrite motor shared with the HF; HF 1.4 in (36 mm) exit, 3 in voice coil titanium dome compression driver.
    // Dispersion 100-60 deg horizontal x 60 deg vertical, -6 dB; the coaxial driver is USER-ROTATABLE, so the wide axis can go either way round. 1.6 kHz passive crossover.
    // 400 W AES / 1600 W peak, 8 ohms nominal, 100 dB sensitivity, 126 dB continuous / 132 dB peak max SPL. 55 Hz - 18 kHz +/-3 dB (-10 dB at 45 Hz).
    // 10 x M8 fly points. Accessories: CDDY15B/W yoke, WB15B/W wall bracket.
    // Recommended amplifiers: iK41, iK81, VIA5002, VIA5004. No 70/100 V tap on this model (the TX versions are separate products) - a low-Z amplifier load.
    // Finish: black (RAL9005) textured paint, perforated steel grille with scrim; any RAL to order.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Low-profile 20A push-lock, pluggable 4-pole Euroblock. Pins left to right: Input+, Input-, Link-, Link+." },
      { ...port("LINK", "speaker-level", "output", "terminal-block"), notes: "Parallel link on the same 4-pole push-lock block, for daisy-chain wiring." },
    ],
  },
  {
    id: "2990b44d-d93e-4579-ab63-339cec445720",
    deviceType: "speaker",
    label: "Martin Audio FP4",
    shortName: "FP4",
    manufacturer: "Martin Audio", modelNumber: "FP4",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/FP4datasheet.pdf",
    searchTerms: ["fp4", "flexpoint", "martin audio fp4", "miniature point source", "fill speaker", "dwav"],
    widthMm: 130, heightMm: 130, depthMm: 126, weightKg: 1.9,
    unitCost: 650,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Miniature passive two-way coaxial point-source loudspeaker for short-throw fill and spot coverage.
    // LF 4 in with 1.25 in voice coil, ferrite motor; HF 0.7 in exit, 1 in voice coil HT polymer dome compression driver, coaxial.
    // 110 deg conical dispersion (-6 dB). 2.6 kHz crossover. 142 Hz - 18 kHz +/-3 dB (-10 dB at 103 Hz) with preset.
    // 60 W AES / 240 W peak, 16 ohms nominal, 84 dB sensitivity (4 V, 1 m), 102 dB continuous / 108 dB peak max SPL.
    // 0.8 litre birch plywood enclosure, black hardwearing paint, steel grille with triple-layer polyester backing.
    // 4 x M6 inserts and one 3/8 in mic-stand fixing; touring & install yoke accessory.
    // Powered by iKON amplifiers, or VIA amplifiers with a DX4.0 / DX0.4 / DX0.6 controller. No 70/100 V tap - low-Z load.
    ports: [
      { ...port("INPUT (NL4)", "speaker-level", "input", "speakon"), notes: "Neutrik NL4MP, input on 1+ / 1-." },
      { ...port("LINK (NL4)", "speaker-level", "output", "speakon"), notes: "Neutrik NL4MP link, passes 1+/- and 2+/- through." },
      { ...port("INPUT (Phoenix)", "speaker-level", "input", "phoenix"), notes: "Phoenix terminal block 1725302 (datasheet). The sheet does not say whether it is in parallel with the NL4 input." },
    ],
  },
  {
    id: "57611a55-9dfc-47ea-87b5-11c8d01ea3b1",
    deviceType: "led-fixture",
    label: "Chauvet Professional Maverick Force X Spot",
    shortName: "Maverick Force X Spot",
    manufacturer: "Chauvet Professional", modelNumber: "MAVERICKFORCEXSPOT",
    referenceUrl: "https://chauvetprofessional.com/wp-content/uploads/2025/07/Maverick_Force_X_Spot_UM_Rev5.pdf",
    searchTerms: ["maverick force x spot", "chauvet professional", "moving head", "spot", "cmy", "520 w led", "dwav"],
    widthMm: 361, heightMm: 646, depthMm: 239, weightKg: 20,
    powerDrawW: 565,
    voltage: "100 - 240 V AC, 50/60 Hz auto-ranging",
    unitCost: 4280,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // 520 W LED yoke spot: CMY, colour wheel, rotating + static gobo wheels, zoom 3.5-57.7 deg, 16-bit dimming.
    // Beam 3.5-51.3 deg, field 3.7-56.3 deg, cutoff 3.9-57.7 deg. 93,084 lux at 5 m narrow, 1,135 lux wide.
    // Output 17,325 (the UM table prints the unit as lux; it is the lumens row). 6462 K, CRI 72.2 (90 with the filter).
    // 361 (L) x 239 (W) x 646 (H) mm, 44.2 lb (20 kg). Recorded W 361 x H 646 x D 239: across the yoke arms, overall height
    // (head vertical), head depth. UM p. 6 drawing: head 276 W x 457 long x 239 deep, tilt axis 356 mm above the base
    // bottom, base 330 W x 106 H x 231 D.
    // Consumption 565 W @100 V, 554 W @120 V, 541 W @208 V, 542 W @230 V, 541 W @240 V; current 5.66 / 4.64 / 2.68 / 2.44 / 2.34 A.
    // Power_Max_W 565 (the 100 V figure), Power_Typ_W 554 (120 V, what a US circuit sees). Current_120V_A 4.6 (4.64, CRM
    // takes one decimal).
    // Power link 12 A at every voltage: at 120 V two fixtures per link (2 x 4.64 = 9.3 A).
    // F 10 A 250 V fuse. Max ambient 45 C, fan-assisted. No IP rating stated for the fixture (the Powerkon connectors are IP65).
    // Control: 3- and 5-pin DMX, Art-Net, sACN, CRMX, RDM; 22 or 29 channels. UL 1573, CSA C22.2 No. 166.
    // Chauvet item code 08012672, UPC 781462230203.
    ports: [
      { ...port("DMX IN (3-pin)", "dmx", "input", "xlr-3"), notes: "3-pin XLR. DMX personalities 22 or 29 channels; RDM." },
      { ...port("DMX OUT (3-pin)", "dmx", "output", "xlr-3"), notes: "3-pin XLR through." },
      { ...port("DMX IN (5-pin)", "dmx", "input", "xlr-5"), notes: "5-pin XLR, same DMX input as the 3-pin (use one)." },
      { ...port("DMX OUT (5-pin)", "dmx", "output", "xlr-5"), notes: "5-pin XLR through." },
      { ...port("Ethernet 1", "ethernet", "bidirectional", "ethercon"), addressable: true, notes: "Seetronic Etherkon (etherCON-compatible) through port. Art-Net / sACN, web server." },
      { ...port("Ethernet 2", "ethernet", "bidirectional", "ethercon"), notes: "Seetronic Etherkon through port (daisy chain)." },
      { ...port("CRMX", "dmx", "input", "wireless"), notes: "Built-in LumenRadio CRMX receiver, up to 300 m from the transmitter." },
      { ...port("USB-C", "usb", "input", "usb-c"), notes: "Software update only (FAT32 flash drive)." },
      { ...port("AC IN", "power", "input", "powercon-true1"), notes: "Seetronic Powerkon IP65 (TRUE1-compatible). 554 W / 4.64 A at 120 V 60 Hz; 541 W / 2.68 A at 208 V." },
      { ...port("AC OUT", "power", "output", "powercon-true1"), notes: "Seetronic Powerkon IP65 power link out, 12 A max at every voltage (2 units at 120 V incl. this one)." },
    ],
  },
  {
    id: "bdfc16da-87bb-47b5-b3f5-befc4189f694",
    deviceType: "network-switch",
    label: "Netgear M4250-9G1F-PoE+",
    shortName: "M4250-9G1F-PoE+",
    manufacturer: "Netgear", modelNumber: "M4250-9G1F-PoE+ (GSM4210PD)",
    referenceUrl: "https://www.netgear.com/business/wired/switches/fully-managed/gsm4210pd/",
    searchTerms: ["m4250", "gsm4210pd", "av line switch", "poe switch", "netgear av", "dante switch", "dwav"],
    widthMm: 210, heightMm: 40, depthMm: 140, weightKg: 0.965,
    powerDrawW: 132.3,
    voltage: "54 V DC 2.4 A, ext. adapter",
    unitCost: 714.01,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Netgear AV Line M4250 desktop switch, fanless: 8 x 1G PoE+ (110 W budget, 30 W/port), 1 x 1G, 1 x SFP.
    // Rear 1G out-of-band management port and USB 2.0; front USB-C console. External 54 V adapter.
    // Desk / under-table / wall mount with the included brackets - not rack-mountable (HIG).
    // Max 132.25 W / 451.5 BTU/hr with PoE, 9.88 W without. 210 x 140 x 40 mm (W x D x H), 965 g. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("Port 1 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 2 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 3 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 4 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 5 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 6 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 7 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 8 (PoE+)", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, PoE+ 802.3at source up to 30 W; ports 1-8 share the 110 W PoE budget." },
      { ...port("Port 9", "ethernet", "bidirectional", "rj45"), linkSpeed: "1G", notes: "10/100/1000BASE-T, no PoE." },
      { ...port("Port 10 (SFP)", "ethernet", "bidirectional", "sfp"), linkSpeed: "1G", notes: "1000BASE-X SFP fibre uplink; transceiver sold separately." },
      { ...port("OOB", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "1G", notes: "Rear 1000BASE-T out-of-band management port." },
      { ...port("Console (USB-C)", "usb", "bidirectional", "usb-c"), notes: "Front USB Type-C, console access only." },
      { ...port("USB", "usb", "bidirectional", "usb-a"), notes: "Rear USB 2.0 port (storage)." },
      { ...port("DC IN", "power", "input", "barrel"), notes: "Rear DC receptacle 54 V 2.4 A from the included external adapter (130 W per the M4250 product brief)." },
    ],
  },
  {
    id: "53804e65-29d2-43ab-874c-1332658aa294",
    deviceType: "power-distribution",
    label: "Furman M-8x2",
    shortName: "M-8x2",
    manufacturer: "Furman", modelNumber: "M-8x2",
    referenceUrl: "https://furmanpower.com/products/m-8x2",
    searchTerms: ["m-8x2", "merit series", "power conditioner", "rack power", "furman", "dwav"],
    widthMm: 482.6, heightMm: 44.5, depthMm: 95.3, weightKg: 2.268,
    voltage: "120 V AC, 15 A",
    unitCost: 139.95,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Furman Merit Series 15 A standard power conditioner, 1U: 8 rear + 1 front outlets, 6 ft 14 AWG captive cord.
    // Spike protection line-neutral, 150 J, 12,000 A peak. 19 W x 3.75 D x 1.75 H in, 5 lb, rack ears included. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("Outlet 1 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 2 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 3 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 4 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 5 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 6 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 7 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 8 (rear)", "power", "output", "edison"), notes: "15 A Edison outlet, rear; 15 A total across all nine." },
      { ...port("Outlet 9 (front)", "power", "output", "edison"), notes: "15 A Edison convenience outlet on the front panel." },
      { ...port("AC IN", "power", "input", "edison"), notes: "6 ft captive 14 AWG cord, 3-conductor Edison plug; 15 A max." },
    ],
  },
  {
    id: "4b895c8f-aac3-46ff-8848-c8da1920f0cb",
    deviceType: "audio-mixer",
    label: "Shure SCM410",
    shortName: "SCM410",
    manufacturer: "Shure", modelNumber: "SCM410",
    referenceUrl: "https://www.canford.de/Products/ManufacturerInformation/Shure/ss/us_pro_scm410_specsheet.pdf",
    searchTerms: ["scm410", "automatic mixer", "automixer", "shure mixer", "gated mixer", "dwav"],
    widthMm: 219, heightMm: 44, depthMm: 267, weightKg: 1.75,
    powerDrawW: 12,
    voltage: "100-120 V AC, 100 mA",
    unitCost: 1459,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Shure SCM410 four-channel automatic mic mixer (IntelliMix), half-rack 1U; long / short rack brackets and straddle bracket included.
    // 4 balanced XLR mic inputs with 12 V phantom, XLR mic/line out, phono aux out, DB-15 logic, link in/out.
    // 44 H x 219 W x 267 D mm, 1.75 kg. 100-120 V AC, 100 mA max. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("MIC IN 1", "analog-audio", "input", "xlr-3"), notes: "Active balanced mic-level XLR; 12 V phantom (DIP switch)." },
      { ...port("MIC IN 2", "analog-audio", "input", "xlr-3"), notes: "Active balanced mic-level XLR; 12 V phantom (DIP switch)." },
      { ...port("MIC IN 3", "analog-audio", "input", "xlr-3"), notes: "Active balanced mic-level XLR; 12 V phantom (DIP switch)." },
      { ...port("MIC IN 4", "analog-audio", "input", "xlr-3"), notes: "Active balanced mic-level XLR; 12 V phantom (DIP switch)." },
      { ...port("OUTPUT", "analog-audio", "output", "xlr-3"), notes: "Balanced XLR, mic or line level by DIP switch." },
      { ...port("AUX OUT", "analog-audio", "output", "rca"), notes: "Unbalanced aux-level phono output, unaffected by the mic/line switch." },
      { ...port("LOGIC", "gpio", "bidirectional", "db15"), channelCount: 4, notes: "High-density DB-15 male: per channel gate out, mute in and override in, logic ground (pins in the user guide)." },
      { ...port("LINK IN", "analog-audio", "input", "other"), notes: "Unbalanced link to other SCM410 / FP410 / SCM810 / SCM800 / AMS8100; link cable 95A8889 supplied. Jack type not printed in the guide." },
      { ...port("LINK OUT", "analog-audio", "output", "other"), notes: "Unbalanced link out; see LINK IN. Jack type not printed in the guide." },
      { ...port("AC POWER", "power", "input", "other"), notes: "100-120 V AC 50/60 Hz, 100 mA max; power cord supplied. Inlet type not printed in the guide." },
    ],
  },
  {
    id: "df8f6320-9391-4e55-878d-8aeaabd3cd62",
    deviceType: "wireless-mic-receiver",
    label: "Audio-Technica ATW-R1440",
    shortName: "ATW-R1440",
    manufacturer: "Audio-Technica", modelNumber: "ATW-R1440 (ATW-RC14 + ATW-RU14)",
    referenceUrl: "https://docs.audio-technica.com/all/System20PRO_Datasheet_EN_v7.pdf",
    searchTerms: ["atw-r1440", "system 20 pro", "wireless receiver", "2.4 ghz wireless", "audio-technica wireless", "dwav"],
    widthMm: 209.8, heightMm: 42.5, depthMm: 165.6, weightKg: 0.74,
    powerDrawW: 6,
    voltage: "12 V DC 0.5 A, AC adapter",
    unitCost: 923,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Audio-Technica System 20 PRO 2.4 GHz receiver: half-rack chassis ATW-RC14 with removable receiver unit ATW-RU14
    // (front-mounted or remote on Cat5e). 2 channels Standard / 4 channels HD; 4 XLR outs, ch 4 doubles as mix.
    // RJ45 network, RJ12 link in/out (up to 5 receivers). 209.8 W x 165.6 D x 42.5 H mm, 740 g; RU14 86 x 70.2 x 18.7 mm, 77 g. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("CH 1 OUT", "analog-audio", "output", "xlr-3"), notes: "Balanced XLR-3M, mic or line level (line max +22 dBu)." },
      { ...port("CH 2 OUT", "analog-audio", "output", "xlr-3"), notes: "Balanced XLR-3M, mic or line level (line max +22 dBu)." },
      { ...port("CH 3 OUT", "analog-audio", "output", "xlr-3"), notes: "Balanced XLR-3M, mic or line level (line max +22 dBu)." },
      { ...port("CH 4 / MIX OUT", "analog-audio", "output", "xlr-3"), notes: "Balanced XLR-3M; channel 4 or a mix of all channels (setting). Two channels in Standard mode, four in HD mode." },
      { ...port("RF IN", "rf", "input", "wireless"), notes: "2.4 GHz diversity on the ATW-RU14 receiver unit (half-wave dipoles). Receives ATW-T1401 / T1402." },
      { ...port("RECEIVER UNIT", "custom", "bidirectional", "rj45"), notes: "RJ45 to the ATW-RU14 when it is mounted remotely, Cat5e or better; one receiver unit per chassis." },
      { ...port("NETWORK", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "100M", notes: "RJ45 Fast Ethernet: Wireless Manager and IP control." },
      { ...port("LINK IN", "custom", "input", "rj12"), notes: "RX-link, up to five receivers, link cable included." },
      { ...port("LINK OUT", "custom", "output", "rj12"), notes: "RX-link out to the next receiver." },
      { ...port("DC IN", "power", "input", "barrel"), notes: "12 V DC 0.5 A from the included AC adapter; 3.7 W." },
    ],
  },
  {
    id: "5bd0791b-e83a-4a05-85ae-52dafd68914f",
    deviceType: "wired-mic",
    label: "Audio-Technica ATW-T1401",
    shortName: "ATW-T1401",
    manufacturer: "Audio-Technica", modelNumber: "ATW-T1401",
    referenceUrl: "https://docs.audio-technica.com/all/System20PRO_Datasheet_EN_v7.pdf",
    searchTerms: ["atw-t1401", "system 20 pro", "body-pack transmitter", "bodypack", "wireless lavalier", "dwav"],
    widthMm: 63.7, heightMm: 107.4, depthMm: 22.7, weightKg: 0.08,
    voltage: "3 V DC, 2 x AA",
    unitCost: 377,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Audio-Technica System 20 PRO body-pack transmitter, 2.4 GHz, 10 mW EIRP.
    // Four-pin locking (cW) input: pin 1 GND, 2 instrument in, 3 mic in, 4 +10 V bias. 2 x AA (NiMH chargeable in ATW-CHG3a).
    // 63.7 W x 107.4 H x 22.7 D mm, 80 g without batteries. EasySchematic has no transmitter type - recorded as Wired Mic. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("MIC / INST IN", "analog-audio", "input", "other"), notes: "A-T cW four-pin locking connector: 1 GND, 2 instrument in, 3 mic in, 4 +10 V DC bias. Takes BP892xcW etc." },
      { ...port("RF OUT", "rf", "output", "wireless"), notes: "2.4 GHz, 10 mW EIRP, to an ATW-R1440." },
      { ...port("USB-C", "usb", "input", "usb-c"), notes: "Firmware updates only." },
      { ...port("CHARGE", "power", "input", "other"), notes: "Charging contacts for ATW-CHG3a / CHG3Na (NiMH only). 2 x AA: approx. 15 h alkaline, 14.5 h NiMH, 29 h lithium." },
    ],
  },
  {
    id: "73b98533-2f70-4778-9103-13c461d3b80e",
    deviceType: "wired-mic",
    label: "Audio-Technica ATW-T1402",
    shortName: "ATW-T1402",
    manufacturer: "Audio-Technica", modelNumber: "ATW-T1402",
    referenceUrl: "https://docs.audio-technica.com/all/System20PRO_Datasheet_EN_v7.pdf",
    searchTerms: ["atw-t1402", "system 20 pro", "handheld transmitter", "wireless handheld", "wireless mic", "dwav"],
    widthMm: 53.7, heightMm: 265, depthMm: 53.7, weightKg: 0.3,
    voltage: "3 V DC, 2 x AA",
    unitCost: 405,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Audio-Technica System 20 PRO handheld transmitter, dynamic hypercardioid element, 2.4 GHz, 10 mW EIRP.
    // 265.0 x 53.7 mm (length x head diameter), 300 g. 2 x AA (NiMH chargeable in ATW-CHG3a).
    // EasySchematic has no transmitter type - recorded as Wired Mic. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("RF OUT", "rf", "output", "wireless"), notes: "2.4 GHz, 10 mW EIRP, to an ATW-R1440." },
      { ...port("USB-C", "usb", "input", "usb-c"), notes: "Firmware updates only." },
      { ...port("CHARGE", "power", "input", "other"), notes: "Charging contacts for ATW-CHG3a / CHG3Na (NiMH only). 2 x AA: approx. 18 h alkaline, 16.5 h NiMH, 35 h lithium." },
    ],
  },
  {
    id: "011adec5-e1f4-4c76-a5a4-69de80ad46b3",
    deviceType: "wired-mic",
    label: "Audio-Technica BP892xcW",
    shortName: "BP892xcW",
    manufacturer: "Audio-Technica", modelNumber: "BP892xcW",
    referenceUrl: "https://docs.audio-technica.com/us/p52761_bp892x_spec.pdf",
    searchTerms: ["bp892", "bp892xcw", "microset", "earset", "headworn mic", "dwav"],
    voltage: "Bias 2.5-10 V from transmitter",
    unitCost: 533,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Audio-Technica BP892x MicroSet omnidirectional condenser earset, black, cW termination for A-T wireless body-packs.
    // Sensitivity -43 dB, max 136 dB SPL, 20-20,000 Hz. Capsule 9.5 mm long x 2.6 mm dia; 2.6 g mic, boom and earpiece; 1.4 m detachable cable. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("OUTPUT", "analog-audio", "output", "other"), notes: "cW-style locking 4-pin on a 1.4 m detachable cable; pin 4 bias + in. For ATW-T1401 and other cW body-packs." },
    ],
  },
  {
    id: "a8bb19be-066d-4ae5-86ca-a88be177dd69",
    deviceType: "charging-station",
    label: "Audio-Technica ATW-CHG3aAD",
    shortName: "ATW-CHG3aAD",
    manufacturer: "Audio-Technica", modelNumber: "ATW-CHG3aAD",
    referenceUrl: "https://docs.audio-technica.com/us/ATW-CHG3a_UM_351702570_V1_EN_web_231124.pdf",
    searchTerms: ["atw-chg3a", "charging station", "charger", "system 20 pro", "3000 series", "dwav"],
    widthMm: 185, heightMm: 68.5, depthMm: 99, weightKg: 0.405,
    powerDrawW: 4.9,
    voltage: "12 V DC 3.0 A (AD-SA1230XA)",
    unitCost: 416,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Audio-Technica ATW-CHG3a two-bay charging station with AC adapter (AD-SA1230XA). Charges System 20 PRO / 3000 Series transmitters (NiMH), approx. 6.5 h.
    // Up to five docks linked on one AD-SA1230XA adapter (AT8687 link kit). 4.9 W charging two; 27.4 W for five docks / ten transmitters.
    // 185 W x 99 D x 68.5 H mm, 405 g. Flat surface only. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("BAY 1", "power", "output", "other"), notes: "Charging contacts, 3.6 V 500 mA; takes ATW-T1401 / T1402 and 3000 Series transmitters." },
      { ...port("BAY 2", "power", "output", "other"), notes: "Charging contacts, 3.6 V 500 mA." },
      { ...port("DC IN", "power", "input", "barrel"), notes: "12 V DC 3.0 A from AD-SA1230XA (one adapter feeds up to five linked docks)." },
      { ...port("LINK DC IN", "power", "input", "barrel"), notes: "DC input for linking from the previous dock (AT8687 link kit)." },
      { ...port("LINK DC OUT", "power", "output", "barrel"), notes: "DC output to the next dock (AT8687 link kit), five docks max." },
    ],
  },
  {
    id: "2b31ec6d-606b-46bc-b8bb-b508de47e3f5",
    deviceType: "charging-station",
    label: "Audio-Technica ATW-CHG3aEXP",
    shortName: "ATW-CHG3aEXP",
    manufacturer: "Audio-Technica", modelNumber: "ATW-CHG3aEXP",
    referenceUrl: "https://docs.audio-technica.com/us/ATW-CHG3a_UM_351702570_V1_EN_web_231124.pdf",
    searchTerms: ["atw-chg3a", "charging station", "charger", "system 20 pro", "3000 series", "dwav"],
    widthMm: 185, heightMm: 68.5, depthMm: 99, weightKg: 0.405,
    powerDrawW: 4.9,
    voltage: "12 V DC 3.0 A (AD-SA1230XA)",
    unitCost: 369,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Audio-Technica ATW-CHG3a two-bay charging station with AT8687 link kit (no AC adapter). Charges System 20 PRO / 3000 Series transmitters (NiMH), approx. 6.5 h.
    // Up to five docks linked on one AD-SA1230XA adapter (AT8687 link kit). 4.9 W charging two; 27.4 W for five docks / ten transmitters.
    // 185 W x 99 D x 68.5 H mm, 405 g. Flat surface only. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("BAY 1", "power", "output", "other"), notes: "Charging contacts, 3.6 V 500 mA; takes ATW-T1401 / T1402 and 3000 Series transmitters." },
      { ...port("BAY 2", "power", "output", "other"), notes: "Charging contacts, 3.6 V 500 mA." },
      { ...port("DC IN", "power", "input", "barrel"), notes: "12 V DC 3.0 A from AD-SA1230XA (one adapter feeds up to five linked docks)." },
      { ...port("LINK DC IN", "power", "input", "barrel"), notes: "DC input for linking from the previous dock (AT8687 link kit)." },
      { ...port("LINK DC OUT", "power", "output", "barrel"), notes: "DC output to the next dock (AT8687 link kit), five docks max." },
    ],
  },
  {
    id: "5f6d8804-528f-4374-8a45-9ed9174243c4",
    deviceType: "amplifier",
    label: "Sonance PowerZone Connect PRO 2000.2",
    shortName: "PZC PRO 2000.2",
    manufacturer: "Sonance", modelNumber: "PowerZone Connect PRO 2000.2 (93804)",
    referenceUrl: "https://www.sonance.com/products/93804",
    searchTerms: ["powerzone connect pro", "2000.2", "pzconn", "sonance amplifier", "70v amplifier", "zone amplifier", "dwav"],
    widthMm: 440, heightMm: 88, depthMm: 320, weightKg: 7.4,
    powerDrawW: 700,
    voltage: "AC 100-240 V, 50/60 Hz",
    unitCost: 2100,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Sonance PowerZone Connect PRO 2000.2, 2 ch DSP zone amplifier, 2U, rack ears included: 2 x 1000 W at 4 / 8 Ohm, 70 V or 100 V
    // (per-channel Hi-Z / Lo-Z, default Hi-Z 70 V). Class D, UREC universal mains with PFC; 700 W consumption, < 0.5 W standby.
    // Full-matrix DSP via the built-in web app; GPIO, S/PDIF I/O, network control. 88 x 440 x 320 mm, 7.4 kg. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("INPUT 1", "analog-audio", "input", "phoenix"), notes: "Balanced on Euroblock or unbalanced on RCA phono - one input, wire one (quick start)." },
      { ...port("INPUT 2", "analog-audio", "input", "phoenix"), notes: "Balanced on Euroblock or unbalanced on RCA phono - one input, wire one." },
      { ...port("S/PDIF", "spdif", "bidirectional", "other"), notes: "Configurable S/PDIF audio I/O. Connector not printed for the 2U (RCA phono on the 1U models)." },
      { ...port("OUTPUT 1", "speaker-level", "output", "other"), notes: "Channel 1: 1000 W at 4 / 8 Ohm, 70 V or 100 V, set per channel (default Hi-Z 70 V). Connector type not printed - check the unit." },
      { ...port("OUTPUT 2", "speaker-level", "output", "other"), notes: "Channel 2: as channel 1. Connector type not printed - check the unit." },
      { ...port("NETWORK", "ethernet", "bidirectional", "rj45"), addressable: true, notes: "Network control socket: built-in PowerZone Control web app, iOS app, Wall-M controller, open API. RJ45 per the data sheet's wired-connection note." },
      { ...port("GPIO", "gpio", "bidirectional", "other"), notes: "Configurable GPIO socket (web app). Type and pin count not printed in the 2U documents." },
      { ...port("AC MAINS", "power", "input", "other"), notes: "100-240 V 50/60 Hz universal, PFC; 700 W consumption. Mains cable supplied; inlet type not printed." },
    ],
  },
  {
    id: "9ef0d791-ca11-4492-96dd-a7abb764ffa9",
    deviceType: "speaker",
    label: "Sonance IS6T",
    shortName: "IS6T",
    manufacturer: "Sonance", modelNumber: "IS6T (40198)",
    referenceUrl: "https://images.salsify.com/image/upload/s--jn3LAhFi--/l0s6p2z3wnvphnzt2ttu.pdf",
    searchTerms: ["is6t", "invisible series", "invisible speaker", "plaster-in speaker", "sonance", "dwav"],
    widthMm: 409, heightMm: 409, depthMm: 98, weightKg: 8.35,
    unitCost: 682.5,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Sonance Invisible Series IS6T commercial loudspeaker with transformer: installs flush in a ceiling or wall and is finished over
    // (up to 1/8 in of flexible material). 84 dB (2.83 V / 1 m), 50 Hz - 30 kHz +/-3 dB, 170 deg hemispherical to 10 kHz.
    // 100 W RMS, taps 30 / 15 / 7.5 / 3.8 W (70 V) and bypass. 409 x 409 x 98 mm, 86 mm mounting depth, 8.35 kg. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "terminal-block"), notes: "Screw terminals with strain relief. Rear-mounted tap selector 30 / 15 / 7.5 / 3.8 W (70 V) or bypass." },
    ],
  },
  {
    id: "9c977a54-80e5-465c-9e5a-269b7f1cc0ea",
    deviceType: "speaker",
    label: "Martin Audio Blackline Q26",
    shortName: "Q26",
    manufacturer: "Martin Audio", modelNumber: "Q26-W",
    referenceUrl: "https://martin-audio.com/downloads/datasheets/Q26datasheet.pdf",
    searchTerms: ["q26", "blacklineq", "blackline q26", "column speaker", "martin audio", "dwav"],
    widthMm: 193, heightMm: 670, depthMm: 218, weightKg: 9.5,
    unitCost: 640,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Martin Audio BlacklineQ Q26: passive two-way compact column, 2 x 6 in LF + 1 in compression driver, plywood, white.
    // 300 W AES / 1200 W peak, 8 Ohm, 94 dB, 119 dB continuous / 125 dB peak. 69 Hz - 17 kHz +/-3 dB. Dispersion 100-120 x 40 deg.
    // 3 x M8 + 1 x M6 inserts, 4 x M6 for WB6/8, pole socket. Accessories WB6/8, SP6/8, Q26YP yoke, HTKCT05. 193 x 670 x 218 mm, 9.5 kg. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("INPUT", "speaker-level", "input", "speakon"), notes: "1 x NL4, pins 1+ / 1-. No link connector." },
    ],
  },
  {
    id: "4eadec1b-4cea-41e5-8c1b-23aa11c92f14",
    deviceType: "digital-signage-player",
    label: "BrightSign LS445",
    shortName: "LS445",
    manufacturer: "BrightSign", modelNumber: "LS445 (LS5)",
    referenceUrl: "https://www.brightsign.biz/wp-content/uploads/2023/04/LS5-datasheet.pdf",
    searchTerms: ["ls445", "ls5", "brightsign", "signage player", "media player", "dwav"],
    widthMm: 126.6, heightMm: 19.4, depthMm: 141.8, weightKg: 0.18,
    powerDrawW: 18,
    voltage: "12 V DC 1.5 A, locking adapter",
    unitCost: 495,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // BrightSign LS5 series LS445: 4K HDMI signage player, HTML5, USB-C (host / device), 10/100 Ethernet, 3.5 mm analog / S/PDIF audio, microSD.
    // GPIO, serial and IR only through BrightSign USB-C adapter cables; optional Wi-Fi / BT module on the internal M.2 slot.
    // 126.6 W x 141.84 D x 19.41 H mm, 0.18 kg, built-in wall mounting, locking 12 V 1.5 A supply. Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("HDMI OUT", "hdmi", "output", "hdmi"), notes: "HDMI out, 4K on the LS445." },
      { ...port("AUDIO", "analog-audio", "output", "trs-eighth"), notes: "3.5 mm analog audio; also carries S/PDIF digital audio." },
      { ...port("USB-C", "usb", "bidirectional", "usb-c"), notes: "Host and device mode; BrightSign USB-C adapters add GPIO, serial (3.5 mm) and IR." },
      { ...port("ETHERNET", "ethernet", "bidirectional", "rj45"), addressable: true, linkSpeed: "100M", notes: "10/100 Ethernet. No PoE." },
      { ...port("DC IN", "power", "input", "barrel"), notes: "Locking power input, 12 V 1.5 A supply." },
    ],
  },
  {
    id: "5d05bdeb-783e-4798-b22b-48bf51cda0b8",
    deviceType: "power-distribution",
    label: "SSRC SL-12-2/6-520D",
    shortName: "SL-12-2/6",
    manufacturer: "SSRC", modelNumber: "SL-12-2/6-520D",
    referenceUrl: "https://www.ssrconline.com/",
    searchTerms: ["ssrc", "connector strip", "lightbar", "sl series", "raceway", "dwav"],
    widthMm: 3657.6, heightMm: 85.7, depthMm: 63.5,
    voltage: "2 x 20 A circuits",
    unitCost: 760.76,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // SSRC SL Series connector strip, 12 ft, 2 x 20 A circuits, 6 outlets, type code 520D: extruded aluminium wireway, 2.5 x 3.375 in section,
    // hung on a pipe batten (steel C-channel brackets at 60 in o.c., U-bolts to 2 in O.D.) or wall. Outlets on 6 in increments only.
    // The Room Designer draws it from the library entry SSRC-SL (buildlib.py, sources of 2026-10-05). Verified 2026-10-27 against the maker documents listed in sources.
    ports: [
      { ...port("CIRCUIT 1 FEED", "power", "input", "terminal-block"), notes: "One 20 A homerun to the terminal box (#10 AWG max) at the feed end." },
      { ...port("CIRCUIT 2 FEED", "power", "input", "terminal-block"), notes: "One 20 A homerun to the terminal box (#10 AWG max) at the feed end." },
      { ...port("OUTLET 1", "power", "output", "edison"), notes: "20 A NEMA 5-20 (\"520\" in the part code), circuit 1 of 2 - SSRC assigns circuits; the \"D\" suffix is not on SSRC's order sheet, confirm with SSRC." },
      { ...port("OUTLET 2", "power", "output", "edison"), notes: "20 A NEMA 5-20 (\"520\" in the part code), circuit 1 of 2 - SSRC assigns circuits; the \"D\" suffix is not on SSRC's order sheet, confirm with SSRC." },
      { ...port("OUTLET 3", "power", "output", "edison"), notes: "20 A NEMA 5-20 (\"520\" in the part code), circuit 1 of 2 - SSRC assigns circuits; the \"D\" suffix is not on SSRC's order sheet, confirm with SSRC." },
      { ...port("OUTLET 4", "power", "output", "edison"), notes: "20 A NEMA 5-20 (\"520\" in the part code), circuit 2 of 2 - SSRC assigns circuits; the \"D\" suffix is not on SSRC's order sheet, confirm with SSRC." },
      { ...port("OUTLET 5", "power", "output", "edison"), notes: "20 A NEMA 5-20 (\"520\" in the part code), circuit 2 of 2 - SSRC assigns circuits; the \"D\" suffix is not on SSRC's order sheet, confirm with SSRC." },
      { ...port("OUTLET 6", "power", "output", "edison"), notes: "20 A NEMA 5-20 (\"520\" in the part code), circuit 2 of 2 - SSRC assigns circuits; the \"D\" suffix is not on SSRC's order sheet, confirm with SSRC." },
    ],
  },
  {
    id: "8ff58568-9552-4dc6-92ea-1874509187bf",
    deviceType: "led-fixture",
    label: "Chauvet Professional COLORado 1 Quad Zoom",
    shortName: "COLORado 1 Quad Zoom",
    manufacturer: "Chauvet Professional", modelNumber: "COLORADO1QUADZOOM",
    referenceUrl: "https://chauvetprofessional.com/wp-content/uploads/2018/01/Colorado_1_Quad_Zoom_NG_UM_Rev2.pdf",
    searchTerms: ["colorado 1 quad zoom", "chauvet professional", "par / wash", "dwav"],
    widthMm: 236, heightMm: 334, depthMm: 190, weightKg: 7,
    powerDrawW: 119,
    voltage: "100-240 VAC, 50/60 Hz",
    unitCost: 999,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // IP65 RGBW LED wash PAR, 7 x 15 W Osram quad LEDs, motorised zoom 7-45 deg, centre-pixel control, 16-bit dimming.
    // UM Rev. 2 p. 27: 334 L x 236 W x 190 H mm (13.14 x 9.25 x 7.48 in), 15.4 lb (7 kg). Recorded W 236 x H 334 x D 190: across yoke arms + knob, yoke top to lens face (as hung pointing down), body diameter. p. 6 drawing prints the width as 235 mm.
    // UM p. 27: 112 W / 0.97 A at 120 V 60 Hz, 119 W / 0.51 A at 230 V 50 Hz; power link 13.6 A = 14 units at 120 V, 26 at 230 V; p. 7: 23 at 208 V.
    // UM p. 27: beam 7-32 deg, field 13-45 deg (narrow/wide), 4,009 / 324 lux at 5 m. Photometrics Report (2020) p. 2: 2,662 lm full flood at 120 V (all RGBW full).
    // Max ambient 45 C, convection cooled, no fan (UM p. 3, 27). UL 1573, CSA C22.2 No. 166. Chauvet item code 01031243, UPC 781462215910.
    // DMX: 12 personalities FULL 25, TR16 17, STD.Y 17, TOUR 12, C1Q 10, AR2.Z 7, AR2.S 6, AR2.D 5, ARC.2 4, AR1.D 4, ARC.1 3, HSV 3 (UM p. 13-21).
    // Verified 2026-10-21 against Chauvet Colorado 1 Quad Zoom User Manual Rev. 2 (2021-02), pages as cited.
    // Disagreements: POWER: UM Rev. 2 (2021-02) p. 27 = 112 W / 0.97 A at 120 V; the 2026 web spec sheet (pdf/en/COLORADO1QUADZOOM.pdf) = 101 W / 0.861 A (this is where the Jetbuilt 101 W comes from); the 2020 Photometrics Report measured 104.96-105.74 W / 0.875-0.885 A at 119-120 V. UM used (current revisioned manual; also the conservative number for circuit loading). LINKING: UM p. 7/27 = 14 at 120 V, 23 at 208 V, 26 at 230 V; QRG Rev. 3 (2020-07) p. 2 and the web sheet = 15 at 120 V, 27 at 208 V, 28 at 230 V (QRG adds 13 at 100 V, 29 at 240 V). UM (newest revisioned document) used. LENGTH: UM 334 mm (table and p. 6 drawing); web sheet 357 x 236 x 190 mm. UM used (it matches its own dimensioned drawing). WIDTH: table 236 mm vs drawing 235 mm (table used). OPTICS: UM and web sheet beam 7-32 / field 13-45 deg; the 2020 Photometrics Report measured beam 9.3-9.6 / 37.1 deg and field 15.8-15.9 / 52.4 deg (full spot / full flood). UM used. NARROW ILLUMINANCE: UM 4,009 lux at 5 m; web 3,280 lux at 5 m (13 deg). PERSONALITY NAMES: the web sheet spells AR1D, AR2Z, ARC1, ARC2, ARC2D, ARC2S; the UM DMX section prints AR1.D, AR2.Z, ARC.1, ARC.2, AR2.D, AR2.S (UM names used). JETBUILT: CRM 7.0 kg matches the maker (UM 7 kg); CRM 101.0 W matches only the web sheet, not the UM (112 W).
    // Left blank: cct_k and cri: not published (RGBW mixer; the photometric report gives only CIE x 0.246 y 0.191 at full). Fuse: not published. Default DMX personality: not stated. pan/tilt: not a moving head. Lumens per zoom position other than the 2020 report not published (output_lm 2,662 is the report's full-flood figure; full spot 2,354 lm, 50 % zoom 2,650 lm).
    // power.link_units_208: 23
    // power.link_units_230: 26
    // Weight_lb 15.4: as the maker prints it in pounds (the kg figure converts to a hair different).
    ports: [
      { ...port("DMX In (5-pin)", "dmx", "input", "xlr-5"), notes: "Seetronic IP65 5-pin XLR. 12 personalities 3-25 ch. Use IP65 cables or the attached caps to keep IP65 (UM p. 2, 7-8)." },
      { ...port("DMX Out (5-pin)", "dmx", "output", "xlr-5"), notes: "Seetronic IP65 5-pin XLR thru; also carries master/slave (UM p. 5, 8)." },
      { ...port("AC In", "power", "input", "powercon-true1"), notes: "Seetronic Powerkon IP65 (TRUE1-style). 112 W / 0.97 A at 120 V 60 Hz; 119 W / 0.51 A at 230 V 50 Hz. Ships with Powerkon-to-Edison cord (UM p. 7, 27)." },
      { ...port("AC Out", "power", "output", "powercon-true1"), notes: "Power link: 14 units at 120 V (13.6 A), 23 at 208 V, 26 at 230 V (UM p. 7, 27). UM table prints \"Edison\" in the US column for the output; the p. 5 overview, the UK column and the 2026 web sheet show Seetronic Powerkon IP65 - see questions." },
    ],
  },
  {
    id: "ceffe9a4-6b40-4aaf-8831-78e44d8b7b84",
    deviceType: "led-fixture",
    label: "Chauvet Professional Ovation E-160WW",
    shortName: "Ovation E-160WW",
    manufacturer: "Chauvet Professional", modelNumber: "OVATIONE160WW-2",
    referenceUrl: "https://chauvetprofessional.com/wp-content/uploads/2015/01/Ovation-E-160WW_UM_Rev8.pdf",
    searchTerms: ["ovation e-160ww", "chauvet professional", "ellipsoidal", "dwav"],
    widthMm: 285, heightMm: 487, depthMm: 495, weightKg: 6.4,
    powerDrawW: 103,
    voltage: "100-240 VAC, 50/60 Hz",
    unitCost: 1250,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Warm-white LED ellipsoidal light engine (575 W tungsten equivalent), ERS-style barrel, 4 shutters, A/B gobo slot, lens tube sold separately. Model ID OVATIONE160WW-2 (UM Rev. 8, 09/2024).
    // UM Rev. 8 p. 16: fixture only (no lens) 495 L x 285 W x 487 H mm (19.49 x 11.22 x 19.17 in), 14.2 lb (6.4 kg). Recorded W 285 x H 487 x D 495.
    // With the 26 deg lens: 653 mm long on the p. 6 drawing / 658 mm "extended" on the web sheet; 18.4 lb (8.3 kg) (web sheet). OHDLENS26: 245 x 174 x 174 mm, 4.0 lb (1.8 kg).
    // UM p. 16: 103 W / 0.9 A at 120 V 60 Hz, 99 W / 0.5 A at 208 V, 102 W / 0.5 A at 230 V; link 13.6 A = 15 units at 120 V, 26 at 208 V, 28 at 230 V; fuse T 2 A 250 V.
    // With the 26 deg HD lens: beam 16 deg, field 25 deg, 3,189 lux at 5 m, 5,458 lm (UM p. 16). 3031 K, CRI 90 (web sheet; not in the UM).
    // Max ambient 45 C (UM p. 2, 16); fan with Auto/On/Off/Silent modes (UM p. 11, 14) although the spec table says "Convection". IP20 (spec sheet p. 3, web sheet).
    // DMX personalities 1Ch, 2Ch, 3Ch, 6Ch (UM p. 10-12); RDM. Chauvet item code 03032341, UPC 781462226893. UL 1573, CSA C22.2 No. 166.
    // Verified 2026-10-21 against Chauvet Ovation E-160WW User Manual Rev. 8 (09/2024), pages as cited; lens tubes against the OHDLENS / OEZOOM web spec sheets.
    // Disagreements: FUSE: UM Rev. 8 p. 16 spec table T 2 A 250 V; UM p. 7 fuse-replacement text T 3.15 A 250 V. Table value recorded, unresolved. CURRENT: UM p. 16 0.9 A at 120 V; UM p. 7 linking table 0.86 A at 120 V (1.02 / 0.86 / 0.51 / 0.47 / 0.45 A at 100/120/208/230/240 V); web sheet 101 W / 0.86 A. Spec table (103 W / 0.9 A) used. LINKING: UM p. 16 and QRG Rev. 8 = 15 units at 120 V (13.6 A); UM p. 7 says "Never exceed 12 A on a single circuit"; web sheet = 13 units at 120 V, 23 at 208, 25 at 230, 26 at 240 V. UM table + QRG (both Rev. 8) used. LED: UM 88 W / 2.3 A; 2017 spec sheet 90 W (Citizen); web sheet 86 W. UM used. CONNECTORS: 2017 spec sheet says Neutrik powerCON in/thru; UM Rev. 8 ("Updated power connectors") and the web sheet say Seetronic Powerkon IP65 - Rev. 8 used (it is the -2 model). COOLING: UM p. 16 "Convection" vs fan modes on p. 11/14 and the spec sheet ("active cooling via a low noise fan"). PHOTOMETRY: the Photometric Report Rev. 1 (measured 2019-11, original model) gives the 26 deg lens beam 18.5-18.7 / field 26.9-27.3 deg, 6,657 lm, 114.3 W / 0.944 A at 121 V; UM Rev. 8 (the -2 model) gives 16 / 25 deg, 5,458 lm - UM used. Same report, 36 deg lens: 24.3 / 35.2 deg vs UM 20 / 33. HEIGHT: spec table 487 mm vs 506 mm on the p. 6 drawing (yoke top to the lowest shutter handle) - table used for height_mm. LENS TUBE PAGE says "six fixed focal lengths, 5 to 36 deg" but lists seven (5, 10, 14, 19, 26, 36, 50). ZOOM CODES: OHDZOOM1530/2550 (Ovation web sheet) vs OEZOOM1530/2550 (zoom-lens web sheet).
    // Left blank: Lumens for the 5/10/14 deg and zoom lenses: UM prints "N/a". Default DMX personality: not stated. pan/tilt: fixed fixture. Floor/stand use: not described. White-housing lens tube (OHDLENS26WHT): no Chauvet document found (the US lens page and web sheet list only OHDLENS5-50); its row is assumed identical to OHDLENS26 optically - weight/finish of the white version not published. Lens-tube weights of the 12-piece pack: not published.
    // with_26_lens: {"depth_mm_drawing": 653, "depth_mm_web_extended": 658, "height_mm_drawing": 506, "weight_kg": 8.3, "weight_lb": 18.4, "notes": "UM p. 6 drawing (with a 245 mm HD lens tube) prints 653 mm long and 506 mm from yoke top to the lowest shutter handle; web sheet: \"w/ 26 deg Lens Extended 658 x 285 x 487 mm\", 18.4 lb (8.3 kg)."}
    // crm_related: [{"record_id": "6798303000022213005", "product_code": "OHDLENS26WHT", "product_name": "26\u00b0 - Ovation Ellipsoidal HD Lens Tube (WHITE Housing)"}, {"record_id": "6798303000022213003", "product_code": "(12-piece code)", "product_name": "26\u00b0 Ovation Ellipsoidal HD Lens Tube, 12-piece"}]
    // light.lens_for_angles: OHDLENS26 (26 deg HD lens tube) - the angles belong to the lens; see lenses
    // power.link_units_208: 26
    // power.link_units_230: 28
    // Weight_lb 14.1: as the maker prints it in pounds (the kg figure converts to a hair different).
    // 2026-10-21, user: 'use the most conservative numbers' - link 12 A / 13 units (UM p. 7, web sheet) over the table's 13.6 A / 15.
    ports: [
      { ...port("DMX In (3-pin)", "dmx", "input", "xlr-3"), notes: "3-pin XLR; 1/2/3/6 ch personalities; RDM (UM p. 5, 7)." },
      { ...port("DMX In (5-pin)", "dmx", "input", "xlr-5"), notes: "5-pin XLR, same DMX input as the 3-pin (UM p. 5)." },
      { ...port("DMX Out (3-pin)", "dmx", "output", "xlr-3"), notes: "3-pin XLR thru." },
      { ...port("DMX Out (5-pin)", "dmx", "output", "xlr-5"), notes: "5-pin XLR thru." },
      { ...port("AC In", "power", "input", "powercon-true1"), notes: "Seetronic Powerkon IP65 (TRUE1-style; the web sheet lists \"TRUE 1 Style power extension cables\"). 103 W / 0.9 A at 120 V 60 Hz (UM p. 16). Ships with a 5 ft Powerkon-to-Edison cord." },
      { ...port("AC Out", "power", "output", "powercon-true1"), notes: "Seetronic Powerkon IP65 link out: designed to 12 A / 13 units at 120 V (UM p. 7 'never exceed 12 A', web sheet 13) - the conservative figures; UM p. 16 / QRG print 13.6 A / 15 units." },
    ],
  },
  {
    id: "c1db2e4e-f229-4c00-a82e-1a18b429ac5a",
    deviceType: "led-fixture",
    label: "Chauvet Professional Rogue R1X Wash",
    shortName: "Rogue R1X Wash",
    manufacturer: "Chauvet Professional", modelNumber: "ROGUER1XWASH",
    referenceUrl: "https://chauvetprofessional.com/wp-content/uploads/2019/10/Rogue_R1X_Wash_UM_Rev7-2.pdf",
    searchTerms: ["rogue r1x wash", "chauvet professional", "moving head wash", "dwav"],
    widthMm: 265, heightMm: 354, depthMm: 187, weightKg: 6.2,
    powerDrawW: 303,
    voltage: "100-240 VAC, 50/60 Hz",
    unitCost: 1499,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // Compact RGBW LED moving-head wash, 7 x 25 W quad LEDs, motorised zoom 7.9-62.7 deg, 540 / 230 deg pan / tilt, 16-bit dimming.
    // UM Rev. 7 p. 25: 187 L x 265 W x 354 H mm (7.36 x 10.43 x 13.94 in), 13.6 lb (6.2 kg). Recorded W 265 (base incl. handles) x H 354 (overall, head up) x D 187 (base depth).
    // UM p. 25: 160 W @100 V, 157 W @120 V, 152 W @208 V, 153 W @230/240 V; 1.6 / 1.33 / 0.738 / 0.660 / 0.629 A. Power link 12 A at every voltage. Fuse F 3 A 250 V (p. 6, 25).
    // UM p. 25: beam 7.9-35.5 deg, field 11.5-50.8 deg, cutoff 19.3-62.7 deg, zoom range 7.9-62.7 deg; 2,872 lux at 5 m (11 deg), 279 lux (50.8 deg); CCT range 2800-10000 K.
    // Output 2,455 lm (4,000 lm source) and IP20: web spec sheet only (the UM prints neither). Pan 540 deg / tilt 230 deg (UM p. 8 menu; web sheet).
    // DMX personalities 14CH, 15CH, 19CH, 21CH (UM p. 10); RDM. Max ambient 45 C, fan-assisted. Chauvet item code 08011591, UPC 781462219390. UL 1573, CSA C22.2 No. 166.
    // Verified 2026-10-21 against Chauvet Rogue R1X Wash User Manual Rev. 7 (08/2025), pages as cited.
    // Disagreements: POWER: UM Rev. 7 (2025-08) p. 25 = 157 W / 1.33 A at 120 V; the web spec sheet (pdf/en/ROGUER1XWASH.pdf, generated 2026-06) = 303 W / 2.34 A at 120 V, 297 W / 1.35 A at 208 V, 299 W / 1.20 A at 230 V and power linking 5 units at 120 V. UM used (revisioned manual, consistent with the QRG; 303 W is implausible for 7 x 25 W LEDs) - but this must be confirmed. LINKING: UM p. 25 prints "12 A (10 products)" at 120 V, which its own 1.33 A contradicts (10 x 1.33 = 13.3 A); QRG Rev. 6 (2022) p. 2 = 7 / 9 / 16 / 18 / 19 units at 100 / 120 / 208 / 230 / 240 V, which is floor(12 A / current). QRG count (9 at 120 V) recorded as the safe, self-consistent figure; UM p. 6 also says "Never exceed 12 A on a single circuit". DIMENSION LABEL: the p. 5 front view prints "7.81 in / 198.5" on a dimension line that measures 247 mm at the drawing scale (head top to the top of the base); not used.
    // Left blank: cct_k / cri: RGBW mixer - only a 2800-10000 K range and a 7500 K calibrated-white mode are published, no CRI. Head width and tilt-axis height above the base: not printed on the drawing. Default DMX personality: not stated. floor_ok: upright use not described.
    // light.cct_range_k: [2800, 10000]
    // light.pan_tilt_selectable: {"pan": [540, 360, 180], "tilt": [230, 180, 90]}
    // light.parts_note: UM p. 5: front view 230 mm across the yoke arms, 265 mm across the base, 97 mm base height, 354 mm overall; side view 152 mm head depth, 187 mm base depth, 162 mm head length (head top to the bottom of the head, head pointing up). Head width and tilt-axis height are not printed.
    // Weight_lb 13.7: as the maker prints it in pounds (the kg figure converts to a hair different).
    // 2026-10-21, user: 'use the most conservative numbers' - power and link count switched to the web sheet's 303 W / 2.34 A / 5 per link.
    ports: [
      { ...port("DMX In (3-pin)", "dmx", "input", "xlr-3"), notes: "3-pin XLR; 14/15/19/21 ch; RDM (UM p. 4, 6)." },
      { ...port("DMX Out (3-pin)", "dmx", "output", "xlr-3"), notes: "3-pin XLR thru." },
      { ...port("DMX In (5-pin)", "dmx", "input", "xlr-5"), notes: "5-pin XLR, same input as the 3-pin." },
      { ...port("DMX Out (5-pin)", "dmx", "output", "xlr-5"), notes: "5-pin XLR thru." },
      { ...port("AC In", "power", "input", "powercon"), notes: "Neutrik powerCON A (blue). 303 W / 2.34 A at 120 V (2026 web sheet - the conservative figure; UM Rev. 7 p. 25 says 157 W / 1.33 A). Ships with powerCON-to-Edison cord. Fuse F 3 A 250 V." },
      { ...port("AC Out", "power", "output", "powercon"), notes: "Neutrik powerCON B (grey) link out, 12 A max: 5 units at 120 V (2026 web sheet - the conservative count; QRG Rev. 6 says 9, the UM table 10)." },
    ],
  },
  {
    id: "4dc1c064-8a33-4791-83ef-acc6777a157d",
    deviceType: "led-fixture",
    label: "ETC Source 4WRD II Retrofit Kit, 120 V, black",
    shortName: "Source 4WRD II",
    manufacturer: "ETC", modelNumber: "S4WRDT120",
    referenceUrl: "https://www.etcconnect.com/workarea/DownloadAsset.aspx?id=10737484370",
    searchTerms: ["source 4wrd ii", "etc", "ellipsoidal", "dwav"],
    widthMm: 178, heightMm: 142, depthMm: 160, weightKg: 1.69,
    powerDrawW: 150,
    voltage: "114-125 VAC, 60 Hz",
    unitCost: 720,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // LED retrofit that replaces the HPL burner/lamp cap of an existing full-size Source Four ellipsoidal; DMX/RDM over RJ45 or line-dimmable; 3200 K, 80 CRI (standard version).
    // Kit only: 142 H x 178 W x 160 D mm (5.59 x 7.00 x 6.29 in), 1.69 kg (3.73 lb) (datasheet p. 2, 7; UM p. 9). Recorded W 178 x H 142 x D 160.
    // 150 W / 1.26 A at 120 V full, 1.2 W standby in DMX mode, 0 W in AC mode; 114-125 V 60 Hz; inrush 30 A; 14 per 20 A switched circuit, 2 per dimmed circuit (datasheet p. 2; UM p. 9).
    // Output with the existing lens: 8,941 lm with a 26 deg Source Four lens (beam 18.6 / field 25.7 deg), 11,430 lm max with the 26 deg EDLT (Photometry Guide p. 5-6; datasheet p. 2, 5).
    // CRI Ra 81 (R9 9), TLCI 66, TM-30 measured 3233 K (datasheet p. 3-4). Fan cooled, 28 dBA. IP20, indoor only. UL 1598C (retrofit kit), CSA TIL B79-A.
    // DMX: 1 channel (intensity); RDM personalities 1 = DMX, 2 = AC Dimming, 3 = Local Control (UM p. 20).
    // Verified 2026-10-21 against ETC Source 4WRD II datasheet Rev M 2026-02 and Installation and User Manual v2.0 (7067M1230-2.0 Rev D, 2026-01), both from etcconnect.com.
    // Disagreements: Ambient: datasheet p. 2 says 5-50 C ambient operating; UM p. 9 says 5-40 C ambient operating with a 50 C maximum recommended (Ta) - UM wording kept. Power: datasheet / UM 150 W at full; the Photometry Guide tables list 149 W. Weight installed: datasheet "with fixture body (no lens)" 5.99 kg vs UM "installed on 26 deg fixture with yoke and C-clamp" 6.39 kg - different configurations, both recorded. Inrush at 230/240 V: datasheet 12 A at 230 V, UM 12 A at 240 V (the 120 V kit is 114-125 V only).
    // Left blank: Fuse: not published. Beam/field of the kit itself: none - they belong to the Source Four lens tube (lenses table). Lens-tube weights: not in these documents. Default personality: not stated. Power link/thru: none exists. The Gallery / Daylight variants are different part numbers (not these records).
    // what_it_is: LED replacement for the standard Source Four HPL burner assembly (lamp cap/housing): remove the incandescent lamp housing, fit the supplied threaded post and slide the Source 4WRD II onto the existing Source Four body; the fixture's own reflector, shutter barrel and lens tube stay. Fits any full-size Source Four incandescent ellipsoidal (and the Source 4WRD PAR / PARNel fixture bodies); NOT compatible with Source Four LED, Fresnel, PAR, PARNel or jr (UM p. 5, 12-14; datasheet p. 1, 3).
    // part_decoding: S4WRDT120 = "Source 4WRD II, Retrofit Kit, 120 V", ETC part number 7067A1112 (datasheet p. 1; standard 80 CRI 3200 K version - G = Gallery 90+ CRI 7067A1114, DG = Daylight Gallery 5900 K 7067A1116, FB = with Source Four fixture body 7067A1113, 230 V = S4WRDT230 7067A1200). No "-1" = black ("For White please add -1", datasheet p. 1). No connector suffix: the 1 m power lead is supplied bare-ended (UM p. 11: "If you ordered a Source 4WRD II retrofit without a power connector, wire the connector...").
    // installed: {"with_fixture_body_and_26_lens_mm": {"h": 535, "w": 339, "d": 604}, "weight_kg_fixture_body_no_lens": 5.99, "weight_kg_on_26_fixture_with_yoke_and_c_clamp": 6.39, "adds_kg_over_standard_burner": 0.93, "notes": "Datasheet p. 7 (S4WRDFB with 26 deg lens: 535 H x 339 W x 604 D max; body no lens 5.99 kg / 13.20 lb; +0.93 kg / 2.05 lb over a standard burner); UM p. 9 (installed on a 26 deg fixture with yoke and C-clamp: 6.39 kg / 14.08 lb)."}
    // accessory_7067K1001: ETC 7067K1001 = S4WRDACCKIT "Data Accessory Kit": RJ45-to-female 5-pin XLR adapter (W6538), RJ45-to-male 5-pin XLR adapter (W6539) and an RJ45 DMX terminator (N4086) - lets the RJ45-only Source 4WRD II / Color II join a 5-pin XLR DMX line (datasheet p. 6; UM p. 17).
    // weight_lb: 3.73
    // part_number: 7067A1112
    // light.kind: LED retrofit light engine for an existing ETC Source Four (lens and barrel are the fixture's)
    // light.lens_for_angles: ETC 426LT (Source Four 26 deg) - the angles are the existing lens tube's; see lenses
    // light.output_lm_max: 11430
    // light.tlci: 66
    // power.standby_w: 1.2
    // power.inrush_a_120: 30
    // power.per_circuit_120: 14
    // power.per_dimmed_circuit_120: 2
    // power.link: No power thru: one cord per kit. 14 per 20 A switched circuit (R20); 2 per dimmed circuit (D20) recommended.
    // AC In port note, full text: Hardwired 1 m cord, bare end (no connector suffix). Brown live / blue neutral / green-yellow earth. 114-125 V 60 Hz, 150 W / 1.26 A at full; DMX mode needs constant/relay power or a dimmer parked at full; AC mode = line dimming. Inrush 30 A first half-cycle. No power thru. Bare end - recorded as connector "none".
    ports: [
      { ...port("DMX In (RJ45)", "dmx", "input", "rj45"), notes: "DMX512 + RDM on RJ45: pin 1 DMX+, pin 2 DMX-, pin 7 common/shield, others NC. Cat5e or better, 300 m / 32 fixtures per chain; terminate the last with N4086. XLR via W6538/W6539 (kit 7067K1001) or the retrofit-mounted 7067A1118 adapter (UM p. 11, 16-18)." },
      { ...port("DMX Thru (RJ45)", "dmx", "output", "rj45"), notes: "RJ45 DMX/RDM thru (UM p. 11, 16)." },
      { ...port("AC In (1 m cord)", "power", "input", "none"), notes: "1 m cord, bare end (brown L / blue N / green-yellow E). 114-125 V 60 Hz, 150 W / 1.26 A at full, inrush 30 A. DMX mode: constant or relay power (or a dimmer parked at full); AC mode: line dimming. No power thru." },
    ],
  },
  {
    id: "0f9efb17-03c2-4e26-b10b-2df7696aab56",
    deviceType: "led-fixture",
    label: "ETC Source 4WRD II Retrofit Kit, 120 V, black, stage pin",
    shortName: "Source 4WRD II (stage pin)",
    manufacturer: "ETC", modelNumber: "S4WRDT120-B",
    referenceUrl: "https://www.etcconnect.com/workarea/DownloadAsset.aspx?id=10737484370",
    searchTerms: ["source 4wrd ii (stage pin)", "etc", "ellipsoidal", "dwav"],
    widthMm: 178, heightMm: 142, depthMm: 160, weightKg: 1.69,
    powerDrawW: 150,
    voltage: "114-125 VAC, 60 Hz",
    unitCost: 720,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // LED retrofit that replaces the HPL burner/lamp cap of an existing full-size Source Four ellipsoidal; DMX/RDM over RJ45 or line-dimmable; 3200 K, 80 CRI (standard version).
    // Kit only: 142 H x 178 W x 160 D mm (5.59 x 7.00 x 6.29 in), 1.69 kg (3.73 lb) (datasheet p. 2, 7; UM p. 9). Recorded W 178 x H 142 x D 160.
    // 150 W / 1.26 A at 120 V full, 1.2 W standby in DMX mode, 0 W in AC mode; 114-125 V 60 Hz; inrush 30 A; 14 per 20 A switched circuit, 2 per dimmed circuit (datasheet p. 2; UM p. 9).
    // Output with the existing lens: 8,941 lm with a 26 deg Source Four lens (beam 18.6 / field 25.7 deg), 11,430 lm max with the 26 deg EDLT (Photometry Guide p. 5-6; datasheet p. 2, 5).
    // CRI Ra 81 (R9 9), TLCI 66, TM-30 measured 3233 K (datasheet p. 3-4). Fan cooled, 28 dBA. IP20, indoor only. UL 1598C (retrofit kit), CSA TIL B79-A.
    // DMX: 1 channel (intensity); RDM personalities 1 = DMX, 2 = AC Dimming, 3 = Local Control (UM p. 20).
    // Verified 2026-10-21 against ETC Source 4WRD II datasheet Rev M 2026-02 and Installation and User Manual v2.0 (7067M1230-2.0 Rev D, 2026-01), both from etcconnect.com.
    // Disagreements: Ambient: datasheet p. 2 says 5-50 C ambient operating; UM p. 9 says 5-40 C ambient operating with a 50 C maximum recommended (Ta) - UM wording kept. Power: datasheet / UM 150 W at full; the Photometry Guide tables list 149 W. Weight installed: datasheet "with fixture body (no lens)" 5.99 kg vs UM "installed on 26 deg fixture with yoke and C-clamp" 6.39 kg - different configurations, both recorded. Inrush at 230/240 V: datasheet 12 A at 230 V, UM 12 A at 240 V (the 120 V kit is 114-125 V only).
    // Left blank: Fuse: not published. Beam/field of the kit itself: none - they belong to the Source Four lens tube (lenses table). Lens-tube weights: not in these documents. Default personality: not stated. Power link/thru: none exists. The Gallery / Daylight variants are different part numbers (not these records).
    // what_it_is: LED replacement for the standard Source Four HPL burner assembly (lamp cap/housing): remove the incandescent lamp housing, fit the supplied threaded post and slide the Source 4WRD II onto the existing Source Four body; the fixture's own reflector, shutter barrel and lens tube stay. Fits any full-size Source Four incandescent ellipsoidal (and the Source 4WRD PAR / PARNel fixture bodies); NOT compatible with Source Four LED, Fresnel, PAR, PARNel or jr (UM p. 5, 12-14; datasheet p. 1, 3).
    // part_decoding: S4WRDT120 = "Source 4WRD II, Retrofit Kit, 120 V", ETC part number 7067A1112 (datasheet p. 1; standard 80 CRI 3200 K version - G = Gallery 90+ CRI 7067A1114, DG = Daylight Gallery 5900 K 7067A1116, FB = with Source Four fixture body 7067A1113, 230 V = S4WRDT230 7067A1200). No "-1" = black ("For White please add -1", datasheet p. 1). Suffix "-B" = factory-fitted "Two-pin and ground, 20 amp connector" (stage pin) - ETC's connector-designation key on the Source Four datasheets (-A parallel-blade U-ground / Edison, -B two-pin and ground 20 A, -C grounded 20 A twist-lock, -M dimmer doubling NEMA L5-15P); the S4WRD II datasheet only says "1 m cord, bare end or various connector options (120 V)" and does not print the key itself.
    // installed: {"with_fixture_body_and_26_lens_mm": {"h": 535, "w": 339, "d": 604}, "weight_kg_fixture_body_no_lens": 5.99, "weight_kg_on_26_fixture_with_yoke_and_c_clamp": 6.39, "adds_kg_over_standard_burner": 0.93, "notes": "Datasheet p. 7 (S4WRDFB with 26 deg lens: 535 H x 339 W x 604 D max; body no lens 5.99 kg / 13.20 lb; +0.93 kg / 2.05 lb over a standard burner); UM p. 9 (installed on a 26 deg fixture with yoke and C-clamp: 6.39 kg / 14.08 lb)."}
    // accessory_7067K1001: ETC 7067K1001 = S4WRDACCKIT "Data Accessory Kit": RJ45-to-female 5-pin XLR adapter (W6538), RJ45-to-male 5-pin XLR adapter (W6539) and an RJ45 DMX terminator (N4086) - lets the RJ45-only Source 4WRD II / Color II join a 5-pin XLR DMX line (datasheet p. 6; UM p. 17).
    // weight_lb: 3.73
    // part_number: 7067A1112-B
    // light.kind: LED retrofit light engine for an existing ETC Source Four (lens and barrel are the fixture's)
    // light.lens_for_angles: ETC 426LT (Source Four 26 deg) - the angles are the existing lens tube's; see lenses
    // light.output_lm_max: 11430
    // light.tlci: 66
    // power.standby_w: 1.2
    // power.inrush_a_120: 30
    // power.per_circuit_120: 14
    // power.per_dimmed_circuit_120: 2
    // power.link: No power thru: one cord per kit. 14 per 20 A switched circuit (R20); 2 per dimmed circuit (D20) recommended.
    // AC In port note, full text: Hardwired 1 m cord with factory-fitted two-pin-and-ground 20 A ("stage pin") plug - ETC connector suffix -B. Brown live / blue neutral / green-yellow earth. 114-125 V 60 Hz, 150 W / 1.26 A at full; DMX mode needs constant/relay power or a dimmer parked at full; AC mode = line dimming. Inrush 30 A first half-cycle. No power thru. No vocabulary slug for a 2P&G stage-pin plug - recorded as "other".
    ports: [
      { ...port("DMX In (RJ45)", "dmx", "input", "rj45"), notes: "DMX512 + RDM on RJ45: pin 1 DMX+, pin 2 DMX-, pin 7 common/shield, others NC. Cat5e or better, 300 m / 32 fixtures per chain; terminate the last with N4086. XLR via W6538/W6539 (kit 7067K1001) or the retrofit-mounted 7067A1118 adapter (UM p. 11, 16-18)." },
      { ...port("DMX Thru (RJ45)", "dmx", "output", "rj45"), notes: "RJ45 DMX/RDM thru (UM p. 11, 16)." },
      { ...port("AC In (1 m cord)", "power", "input", "other"), notes: "1 m cord, factory 2P&G 20 A stage-pin plug (ETC suffix -B; no slug - 'other'). 114-125 V 60 Hz, 150 W / 1.26 A at full, inrush 30 A. DMX mode: constant or relay power; AC mode: line dimming. No power thru." },
    ],
  },
  {
    id: "0617867d-df7c-4e69-aa39-baba601c9dfc",
    deviceType: "led-fixture",
    label: "ETC Source 4WRD Color II Retrofit Kit, black",
    shortName: "Source 4WRD Color II",
    manufacturer: "ETC", modelNumber: "S4WRDCII",
    referenceUrl: "https://www.etcconnect.com/WorkArea/DownloadAsset.aspx?id=10737513601",
    searchTerms: ["source 4wrd color ii", "etc", "ellipsoidal", "dwav"],
    widthMm: 178, heightMm: 142, depthMm: 160, weightKg: 1.63,
    powerDrawW: 148,
    voltage: "100-240 VAC, 50/60 Hz",
    unitCost: 720,   // sale price (CRM Unit_Price / MSRP) - never dealer cost in this public file
    dwavVerified: true,
    // RGBA LED retrofit that replaces the HPL burner/lamp cap of an existing full-size Source Four; 6-channel DMX/RDM over RJ45; switched power, not line-dimmable.
    // Kit only: 142 H x 178 W x 160 D mm (5.59 x 7.00 x 6.29 in), 1.63 kg (3.6 lb) (datasheet p. 2, 6; UM p. 30). Recorded W 178 x H 142 x D 160.
    // 146 W / 1.25 A at 120 V typical, 3 W standby; 148 W / 1.5 A at 100 V; 143 W / 0.67 A at 230 V; inrush 32 A; 10 per 20 A non-dim circuit (datasheet p. 2; UM p. 30).
    // With the existing lens: 4,505 lm Full ON with a Source Four 26 deg (beam 20.0 / field 25.8 deg), 6,042 lm max with the 26 deg EDLT (datasheet p. 2, 4; photometry workbook).
    // CRI Ra 88 (R9 96) at 3200 K, 80 (63) at 5600 K; 2200-6500 K; camera flicker 1.2 / 20 kHz; 27 dBA; IP20 indoor (datasheet p. 2, 4).
    // Verified 2026-10-21 against ETC Source 4WRD Color II datasheet Rev E 2026-02 and Installation and User Manual v3.0 (7068M1220-3.0 Rev D, 2026-01), both from etcconnect.com.
    // Disagreements: Weight: datasheet p. 2 and UM p. 30 = 1.63 kg (3.6 lb); datasheet p. 6 weight table = 1.69 kg (3.73 lb), the same figure as the white-light S4WRD II - p. 2 / UM used. Power: datasheet / UM 146 W at 120 V; the photometry workbook lists 143 W Full ON. Installed weight: UM 8.98 kg on a 26 deg fixture with yoke and C-clamp vs datasheet 5.99 kg "with fixture body" (no lens) - different configurations; the 8.98 kg looks high next to the S4WRD II's 6.39 kg for the same build, flag only. The 2020 Photometry Guide's "Source 4WRD Color" pages are the first-generation Color retrofit, not Color II - not used.
    // Left blank: Fuse: not published. Kit beam/field: none (lens tube's). Default mode: only one mode. cct_k: RGBA, range only. Power thru: none.
    // what_it_is: RGBA (red, green, blue, amber) LED replacement for the standard Source Four HPL burner assembly; installs on the existing Source Four body with the supplied threaded post, plus a reflector insert placed over the Source Four reflector. Switched (non-dim) power, DMX dimming. Not compatible with Source Four LED, Fresnel, PAR, PARNel or jr; can also go in a Source 4WRD PAR / PARNel fixture body (UM p. 5, 9-14).
    // part_decoding: S4WRDCII = "Source 4WRD Color II Retrofit Kit, Black": UL part number 7068A1011, CE part number 7068A1211; "-1" for white (datasheet p. 1). No connector suffix: 1 m cord, bare end (datasheet p. 2 "Hardwired, 1 m cord, bare end or various connector options (120 V)"; UM p. 9).
    // installed: {"with_fixture_body_and_26_lens_mm": {"h": 535, "w": 339, "d": 604}, "weight_kg_fixture_body": 5.99, "weight_kg_on_26_fixture_with_yoke_and_c_clamp": 8.98, "adds_kg_over_standard_burner": 0.93, "notes": "Datasheet p. 6; UM p. 30 (installed on a 26 deg fixture with yoke and C-clamp: 8.98 kg / 19.8 lb)."}
    // accessory_7067K1001: ETC 7067K1001 = S4WRDACCKIT "Data Accessory Kit": RJ45-to-female 5-pin XLR adapter (W6538), RJ45-to-male 5-pin XLR adapter (W6539) and an RJ45 DMX terminator (N4086) (Color II datasheet p. 5; Color II UM p. 17).
    // weight_lb: 3.6
    // part_number: 7068A1011
    // light.kind: RGBA LED retrofit light engine for an existing ETC Source Four (lens and barrel are the fixture's)
    // light.lens_for_angles: ETC 426LT (Source Four 26 deg) - the angles are the existing lens tube's; see lenses
    // light.output_lm_max: 6042
    // light.cct_range_k: [2200, 6500]
    // light.cri_note: Ra 88 (R9 96) at 3200 K; Ra 80 (R9 63) at 5600 K; TLCI 78 / 83
    // power.standby_w: 3.0
    // power.inrush_a_120: 32
    // power.per_circuit_120: 10
    // power.link: No power thru. Max 10 per non-dimmed 20 A circuit (R20).
    // AC In port note, full text: Hardwired 1 m cord, bare end (black live / white neutral / green + drain earth). 100-240 V 50/60 Hz switched (non-dim) power; 146 W / 1.25 A at 120 V, 148 W / 1.5 A at 100 V, 143 W / 0.67 A at 230 V; inrush 32 A at 120 V. No power thru. Bare end - recorded as connector "none".
    // Beam / field with the 26 deg tube are ETC's 20.02 / 25.83 deg, carried to one decimal in CRM.
    ports: [
      { ...port("DMX In (RJ45)", "dmx", "input", "rj45"), notes: "DMX512 + RDM on RJ45: pin 1 DMX+, pin 2 DMX-, pins 3/6 DMX2 (pass-thru), pins 7/8 common. 32 fixtures / 300 m per chain; 6-ch footprint. XLR via 7067K1001 or 7067A1118 (UM p. 9, 17-18)." },
      { ...port("DMX Thru (RJ45)", "dmx", "output", "rj45"), notes: "RJ45 DMX/RDM thru (UM p. 9)." },
      { ...port("AC In (1 m cord)", "power", "input", "none"), notes: "1 m cord, bare end (black L / white N / green E). 100-240 V 50/60 Hz switched (non-dim) power: 146 W / 1.25 A at 120 V, 143 W / 0.67 A at 230 V; inrush 32 A at 120 V. No power thru." },
    ],
  },
];
