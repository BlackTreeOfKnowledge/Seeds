# Seeds

A small, source-first exploration of Black demographics in the United States.

Serve the directory over HTTP so the Three.js module can load:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`. Each card leads with a sourced quote and archival portrait, followed by a sourced demographic fact. Refreshes advance through a daily shuffled sequence; after all ten cards, it reshuffles and continues without a daily cap. The facts are curated snapshots, not live Census API results. Select a labeled branch, a 3D marker, or use the arrow controls to browse manually.

## Sources and definitions

The fact set links to Census, CDC/NCHS, BJS/FBI, NCES/NAEP, peer-reviewed research, and BlackDemographics sources. Quotes link to their cited speeches or texts; portraits link to Wikimedia Commons file pages with credit and license notes. Source notes keep the population, denominator, and year visible. The family branch distinguishes household arrangements in the 2019 CPS from self-reported fatherhood prevalence in the 2015–2019 NSFG; neither alone establishes what share of births are concentrated among a share of unique fathers.
