# Seeds

A small, source-first exploration of Black demographics in the United States.

Serve the directory over HTTP so the Three.js module can load:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173`. Each card leads with a sourced quote and archival portrait, followed by a sourced demographic fact. Refreshes advance through a daily shuffled sequence; after all ten cards, it reshuffles and continues without a daily cap. The facts are curated snapshots, not live Census API results. Select a labeled branch, a 3D marker, or use the arrow controls to browse manually.

## Sources and definitions

The fact set links to Census, CDC/NCHS, BJS/FBI, NCES/NAEP, peer-reviewed research, and BlackDemographics sources. Quotes link to their cited speeches or texts; portraits link to Wikimedia Commons file pages with credit and license notes. Source notes keep the population, denominator, and year visible. The family branch distinguishes household arrangements in the 2019 CPS from self-reported fatherhood prevalence in the 2015–2019 NSFG; neither alone establishes what share of births are concentrated among a share of unique fathers.

The chart section uses bars for group comparisons and labels each measure's population, denominator, and year. It does not infer multiple-partner fertility from household arrangements, treat homicide victims as offenders, or present SNAP participant composition as a race-specific participation rate. The FY 2023 USDA SNAP race/ethnicity figures show each category's share of all participants; race/ethnicity was voluntary and unknown or missing for 17 percent, and the figures are national rather than area-specific. The FBI offender-victim cross-tab is limited to 2019 single-victim/single-offender incidents and does not identify law-enforcement status. A separate 2019 chart compares 2,574 FBI Black-victim/Black-offender cases with 294 Black people in Mapping Police Violence's database; the FBI count excludes other incident types, and the sources have different coverage, so these are counts rather than complete, comparable population rates. The rotating accountability panel includes only guilty pleas, convictions, or court findings; case summaries are limited to what those records establish and do not generalize one person's conduct to a racial group. Marriage and divorce charts show current marital-status prevalence in the 2024 ACS, not annual event rates. The multiple-partner fertility estimates are from an overall young-women cohort and are not Black-specific; the Gallup identity chart uses approximate thresholds reported for racial and ethnic groups, not exact estimates or measures of attraction or behavior. Religion charts use Pew's 2023–24 Religious Landscape Study, distinguishing affiliation from self-reported monthly participation; death-rate comparisons use NCHS's age-adjusted 2024 rates corrected for race and Hispanic-origin misclassification.
