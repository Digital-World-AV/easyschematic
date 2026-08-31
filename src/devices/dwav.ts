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
    deviceType: "wired-mic",
    label: "Audio-Technica BP3600",
    manufacturer: "Audio-Technica",
    modelNumber: "BP3600",
    referenceUrl: "https://www.audio-technica.com/en-us/bp3600",
    searchTerms: ["bp3600", "immersive audio", "microphone array", "8-channel", "atmos mic", "dwav"],
    unitCost: 4235.9,
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
    unitCost: 2421.75,
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
    deviceType: "speaker",
    label: "Martin Audio ACS-40TS-W",
    manufacturer: "Martin Audio",
    modelNumber: "ACS-40TS-W",
    referenceUrl: "https://martin-audio.com/products/loudspeakers/acs-40ts",
    searchTerms: ["acs-40ts", "adorn", "ceiling speaker", "70v", "100v", "dwav"],
    widthMm: 221,
    depthMm: 115,
    heightMm: 30,
    weightKg: 2.2,
    unitCost: 81,
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
];
