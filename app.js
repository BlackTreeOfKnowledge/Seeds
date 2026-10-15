const facts = [
  {
    category: "People",
    branch: "people",
    year: "UNITED STATES · 2020",
    overline: "THE COUNT MOST HEADLINES LEAVE OUT",
    title: "46.9 million people identified as Black alone or in combination in the 2020 Census.",
    detail: "That is 14.2% of the U.S. population. It includes people who identified as Black, whether or not they also reported another race.",
    sourceNote: "The brief reports 46,936,733 people, or 14.2%, as Black alone or in combination.",
    sources: [{ label: "U.S. Census Bureau · The Black Population: 2020", url: "https://www.census.gov/library/publications/2023/decennial/c2020br-06.html" }],
  },
  {
    category: "Health",
    branch: "health",
    year: "UNITED STATES · 2022",
    overline: "A DISPARITY MEASURED IN RATES",
    title: "The reported abortion rate for Black women was 4.3 times the rate for White women.",
    detail: "This is CDC surveillance data for 2022. CDC says race and ethnicity are markers, not causes, of these differences; structural barriers and unequal access to care matter.",
    sourceNote: "CDC reported abortion rates and ratios 4.3 and 4.0 times higher, respectively, among Black women than White women. Surveillance coverage is limited to reporting areas.",
    sources: [{ label: "CDC · Abortion Surveillance, 2022", url: "https://www.cdc.gov/mmwr/volumes/73/ss/ss7307a1.htm" }],
  },
  {
    category: "Safety",
    branch: "safety",
    year: "UNITED STATES · 2023",
    overline: "HOMICIDE VICTIMIZATION",
    title: "The Black homicide victimization rate was 21.3 per 100,000 people.",
    detail: "That was more than six times the White rate of 3.2 per 100,000. This is a measure of victims, not offender race, and it does not tell us who committed those homicides.",
    sourceNote: "BJS and FBI estimated 11,060 Black homicide victims in 2023. The table reports victim demographics, not a Black-on-Black offender count.",
    sources: [{ label: "Bureau of Justice Statistics · Homicide Victimization in the U.S., 2023", url: "https://bjs.ojp.gov/library/publications/homicide-victimization-united-states-2023" }],
  },
  {
    category: "Safety",
    branch: "safety",
    year: "UNITED STATES · 2023",
    overline: "WHAT THE HOMICIDE TABLE DOES AND DOESN'T SAY",
    title: "For 34% of Black homicide victims, the offender relationship was unknown.",
    detail: "The largest reported relationship category was someone outside the family but known to the victim, at 37.3%. Relationship is not race: this table cannot substantiate a claim about the race of offenders.",
    sourceNote: "BJS notes percentages can overlap because an incident can involve multiple offenders. Percentages do not sum to 100.",
    sources: [{ label: "BJS · 2023 homicide tables, Table 3", url: "https://bjs.ojp.gov/document/hvus23.zip" }],
  },
  {
    category: "Safety",
    branch: "safety",
    year: "UNITED STATES · LIFETIME ESTIMATE",
    overline: "POLICE USE OF FORCE",
    title: "A 2019 study estimated a 1-in-1,000 lifetime risk for Black men of being killed by police.",
    detail: "The study estimated risk at then-current levels and found the highest lifetime risk among Black men. This lifetime estimate is not directly comparable to an annual homicide rate.",
    sourceNote: "Peer-reviewed estimate using police-involved death data; published in the Proceedings of the National Academy of Sciences.",
    sources: [{ label: "PNAS · Risk of being killed by police use of force", url: "https://doi.org/10.1073/pnas.1821204116" }],
  },
  {
    category: "Learning",
    branch: "learning",
    year: "UNITED STATES · 2024",
    overline: "READING ACHIEVEMENT IS SLIDING",
    title: "Eighth-grade reading scores fell 5 points from 2019 to 2024.",
    detail: "The national average was also 2 points lower than in 2022. NAEP scores measure tested reading achievement, not an adult literacy rate; this headline trend covers students nationally, not Black students alone.",
    sourceNote: "National Assessment of Educational Progress, grade 8 reading. See the report's race/ethnicity breakdown for subgroup comparisons.",
    sources: [{ label: "NCES · 2024 NAEP Reading Assessment", url: "https://www.nationsreportcard.gov/reports/reading/2024/g4_8/" }],
  },
  {
    category: "Families",
    branch: "families",
    year: "UNITED STATES · CPS 2019",
    overline: "CHILDREN'S LIVING ARRANGEMENTS",
    title: "42% of Black children lived with two parents; 31% lived with a never-married mother.",
    detail: "This is a household snapshot, not a count of births by unique father. A child living outside a father's household does not tell us whether he is involved or how many children he has.",
    sourceNote: "BlackDemographics' chart cites the 2019 Current Population Survey Annual Social and Economic Supplement.",
    sources: [
      { label: "BlackDemographics · Black Children, Two-parent Households, and Black Fatherhood", url: "https://blackdemographics.com/data-black-children-two-parent-households-and-black-fatherhood/" },
      { label: "U.S. Census Bureau · CPS 2019 Families and Living Arrangements", url: "https://www.census.gov/data/tables/2019/demo/families/cps-2019.html" },
    ],
  },
  {
    category: "Families",
    branch: "families",
    year: "UNITED STATES · NSFG 2015–19",
    overline: "FATHERHOOD, MEASURED DIRECTLY",
    title: "81% of Black men in their 40s reported having children.",
    detail: "BlackDemographics' analysis of NSFG data also reports 46% of Black men ages 15–49 were fathers. The figures are self-reported; the source notes men may underreport children who do not live with them.",
    sourceNote: "Fatherhood prevalence is not the same as the share of all children fathered by a given share of men.",
    sources: [
      { label: "BlackDemographics · Exploring Black Fertility and Family Trends", url: "https://blackdemographics.com/exploring-black-fertility-and-family-trends/" },
      { label: "CDC/NCHS · National Survey of Family Growth", url: "https://www.cdc.gov/nchs/nsfg/index.htm" },
    ],
  },
  {
    category: "Families",
    branch: "families",
    year: "DATA LIMIT · FATHERHOOD",
    overline: "WHAT THE 80/20 CLAIM WOULD REQUIRE",
    title: "The CPS household figures do not, by themselves, verify an 80/20 fatherhood split.",
    detail: "That conclusion requires a distribution of births across unique fathers. The cited living-arrangement chart measures who shares a household with children, which is a different denominator.",
    sourceNote: "The source chart cites CPS 2019 ASEC; the separate NSFG analysis measures fatherhood prevalence, not birth concentration.",
    sources: [
      { label: "BlackDemographics · CPS household chart", url: "https://blackdemographics.com/data-black-children-two-parent-households-and-black-fatherhood/" },
      { label: "BlackDemographics · NSFG fatherhood analysis", url: "https://blackdemographics.com/exploring-black-fertility-and-family-trends/" },
    ],
  },
  {
    category: "Families",
    branch: "families",
    year: "UNITED STATES · ACS 2023",
    overline: "WHAT DOES “SINGLE” MEAN?",
    title: "The Census separates six marital statuses instead of one “single” category.",
    detail: "For Black-alone adults, ACS table B12002 breaks results out by sex and age, separating never married, married, separated, divorced, and widowed. A claim about “single” adults can change depending on which groups and ages it combines.",
    sourceNote: "ACS B12002B reports sex by marital status by age for the Black-alone population age 15 and over.",
    sources: [{ label: "U.S. Census Bureau · ACS Table B12002B", url: "https://data.census.gov/table/ACSDT1Y2023.B12002B" }],
  },
];

const voices = [
  {
    name: "Frederick Douglass",
    angle: "RESISTANCE AND PROGRESS",
    quote: "If there is no struggle, there is no progress.",
    quoteSource: "1857 speech · West India Emancipation Society",
    quoteUrl: "https://www.blackpast.org/african-american-history/1857-frederick-douglass-if-there-is-no-struggle-there-is-no-progress/",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Frederick_Douglass_%28circa_1879%29.jpg/330px-Frederick_Douglass_%28circa_1879%29.jpg",
    portraitAlt: "Frederick Douglass, portrait circa 1879",
    portraitCredit: "Portrait · Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Frederick_Douglass_(circa_1879).jpg",
  },
  {
    name: "W. E. B. Du Bois",
    angle: "THE COLOR-LINE",
    quote: "The problem of the Twentieth Century is the problem of the color-line.",
    secondQuote: "One ever feels his two-ness,—an American, a Negro; two souls, two thoughts, two unreconciled strivings.",
    secondQuoteLabel: "DOUBLE CONSCIOUSNESS · SAME CHAPTER",
    secondQuoteSource: "The Souls of Black Folk · 1903",
    quoteContext: "A second line from the same chapter expands on the tension behind the color-line.",
    quoteSource: "The Souls of Black Folk · 1903",
    quoteUrl: "https://www.gutenberg.org/files/408/408-h/408-h.htm",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg/330px-W.E.B._Du_Bois_by_James_E._Purdy%2C_1907.jpg",
    portraitAlt: "W. E. B. Du Bois, portrait by James E. Purdy, 1907",
    portraitCredit: "Portrait · Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:W.E.B._Du_Bois_by_James_E._Purdy,_1907.jpg",
  },
  {
    name: "Booker T. Washington",
    angle: "ORIGINAL QUOTE · ECONOMIC COOPERATION",
    featuredContrast: true,
    quote: "Cast down your bucket where you are.",
    secondQuote: "In all things that are purely social we can be as separate as the fingers, yet one as the hand in all things essential to mutual progress.",
    secondQuoteLabel: "CONTRASTING QUOTE · SOCIAL SEPARATION",
    secondQuoteSource: "Atlanta Exposition address · 1895",
    quoteContext: "This is not a strict logical contradiction: Washington urged economic cooperation while accepting social segregation. But quoting the cooperation line alone can imply support for social equality that the second line explicitly rejects.",
    quoteSource: "Atlanta Exposition address · 1895",
    quoteUrl: "https://www.gutenberg.org/files/2376/2376-h/2376-h.htm",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Booker_T._Washington_by_Francis_Benjamin_Johnston%2C_c._1895.jpg/330px-Booker_T._Washington_by_Francis_Benjamin_Johnston%2C_c._1895.jpg",
    portraitAlt: "Booker T. Washington, portrait by Frances Benjamin Johnston, circa 1895",
    portraitCredit: "Portrait · Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Booker_T._Washington_by_Francis_Benjamin_Johnston,_c._1895.jpg",
  },
  {
    name: "Frances E. W. Harper",
    angle: "SHARED HUMANITY",
    quote: "We are all bound up together in one great bundle of humanity.",
    quoteSource: "We Are All Bound Up Together · 1866",
    quoteUrl: "https://www.blackpast.org/african-american-history/1866-frances-ew-harper-we-are-all-bound-together/",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Frances_E.W._Harper%2C_three-quarter_length_portrait%2C_standing%2C_facing_front_LCCN97513270_%28cropped%29.jpg/330px-Frances_E.W._Harper%2C_three-quarter_length_portrait%2C_standing%2C_facing_front_LCCN97513270_%28cropped%29.jpg",
    portraitAlt: "Frances E. W. Harper, portrait from the Library of Congress",
    portraitCredit: "Portrait · Library of Congress via Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Frances_E.W._Harper,_three-quarter_length_portrait,_standing,_facing_front_LCCN97513270_(cropped).jpg",
  },
  {
    name: "Langston Hughes",
    angle: "DREAMS AND POSSIBILITY",
    quote: "Hold fast to dreams, for if dreams die",
    quoteSource: "Dreams · 1922",
    quoteUrl: "https://www.gutenberg.org/files/71128/71128-h/71128-h.htm",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Langston_Hughes_%281901-1967%29_portrait.jpg/330px-Langston_Hughes_%281901-1967%29_portrait.jpg",
    portraitAlt: "Langston Hughes, portrait",
    portraitCredit: "Portrait · Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Langston_Hughes_(1901-1967)_portrait.jpg",
  },
  {
    name: "Fannie Lou Hamer",
    angle: "VOTING RIGHTS",
    quote: "I'm sick and tired of being sick and tired.",
    secondQuote: "Is this America, the land of the free and the home of the brave?",
    secondQuoteLabel: "AMERICAN DEMOCRACY · SAME TESTIMONY",
    secondQuoteSource: "1964 Democratic National Convention testimony",
    quoteContext: "Both lines come from Hamer's testimony describing the barriers she faced while trying to register to vote.",
    quoteSource: "1964 Democratic National Convention testimony",
    quoteUrl: "https://www.blackpast.org/african-american-history/1964-fannie-lou-hamer-testifies-before-democratic-national-convention/",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/%28Fannie_Lou_Hamer%2C_Mississippi_Freedom_Democratic_Party_delegate%2C_at_the_Democratic_National_Convention%2C_Atlantic_City%2C_New_Jersey%2C_August_1964%29_%28LOC%29_-_Flickr_-_The_Library_of_Congress.jpg/330px-thumbnail.jpg",
    portraitAlt: "Fannie Lou Hamer at the 1964 Democratic National Convention",
    portraitCredit: "Photograph · Library of Congress · No known restrictions",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:(Fannie_Lou_Hamer,_Mississippi_Freedom_Democratic_Party_delegate,_at_the_Democratic_National_Convention,_Atlantic_City,_New_Jersey,_August_1964)_(LOC)_-_Flickr_-_The_Library_of_Congress.jpg",
  },
  {
    name: "Ida B. Wells",
    angle: "TRUTH AND POWER",
    quote: "The appeal to the white man's pocket has ever been more effectual than all the appeals ever made to his conscience.",
    quoteSource: "Southern Horrors · 1892",
    quoteUrl: "https://www.gutenberg.org/files/14975/14975-h/14975-h.htm",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ida_B._Wells-Barnett.jpg/330px-Ida_B._Wells-Barnett.jpg",
    portraitAlt: "Ida B. Wells-Barnett, portrait",
    portraitCredit: "Portrait · Wikimedia Commons · CC BY-SA 4.0",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Ida_B._Wells-Barnett.jpg",
  },
  {
    name: "Mary McLeod Bethune",
    angle: "LOVE AND HOPE",
    quote: "I leave you love. I leave you hope.",
    quoteSource: "Last Will and Testament · 1955",
    quoteUrl: "https://www.nps.gov/articles/000/mary-mcleod-bethune-last-will-testament.htm",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mary_McLeod_Bethune_by_Carl_Van_Vechten_-_Original.tiff/lossy-page1-330px-Mary_McLeod_Bethune_by_Carl_Van_Vechten_-_Original.tiff.jpg",
    portraitAlt: "Mary McLeod Bethune, portrait by Carl Van Vechten",
    portraitCredit: "Portrait · Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Mary_McLeod_Bethune_by_Carl_Van_Vechten_-_Original.tiff",
  },
  {
    name: "Sojourner Truth",
    angle: "LABOR AND WOMANHOOD",
    quote: "I have plowed and planted and gathered into barns, and no man could head me!",
    secondQuote: "I could work as much and eat as much as a man—when I could get it—and bear the lash as well.",
    secondQuoteLabel: "WORK AND THE LASH · SAME SPEECH",
    secondQuoteSource: "Women's Rights Convention speech · 1851",
    quoteContext: "These lines are from the 1851 account of Truth's speech; later retellings use different wording.",
    quoteSource: "Women's Rights Convention speech · 1851",
    quoteUrl: "https://www.blackpast.org/african-american-history/1851-sojourner-truth-aint-i-a-woman/",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Sojourner_Truth%2C_1870_%28cropped%2C_restored%29.jpg/330px-Sojourner_Truth%2C_1870_%28cropped%2C_restored%29.jpg",
    portraitAlt: "Sojourner Truth, portrait from 1870",
    portraitCredit: "Portrait · Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Sojourner_Truth,_1870_(cropped,_restored).jpg",
  },
  {
    name: "Paul Laurence Dunbar",
    angle: "MASKS AND IDENTITY",
    quote: "We wear the mask that grins and lies.",
    quoteSource: "We Wear the Mask · 1896",
    quoteUrl: "https://www.gutenberg.org/files/18338/18338-h/18338-h.htm",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Paul_Laurence_Dunbar_1903.png/330px-Paul_Laurence_Dunbar_1903.png",
    portraitAlt: "Paul Laurence Dunbar, portrait from 1903",
    portraitCredit: "Portrait · Wikimedia Commons · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Paul_Laurence_Dunbar_1903.png",
  },
];

const factTitle = document.querySelector("#fact-title");
const factDetail = document.querySelector("#fact-detail");
const factCategory = document.querySelector("#fact-category");
const factNumber = document.querySelector(".fact-number");
const factDate = document.querySelector("#fact-date");
const factCount = document.querySelector("#fact-count");
const factOverline = document.querySelector(".fact-overline");
const sourceLinks = document.querySelector("#source-links");
const sourceNote = document.querySelector("#source-note");
const treeIndex = document.querySelector(".tree-index");
const dailyVisit = document.querySelector("#daily-visit");
const voiceQuote = document.querySelector("#voice-quote");
const voiceName = document.querySelector("#voice-name");
const voiceSource = document.querySelector("#voice-source");
const voiceAngle = document.querySelector("#voice-angle");
const voicePortrait = document.querySelector("#voice-portrait");
const portraitCredit = document.querySelector("#portrait-credit");
const secondQuoteSection = document.querySelector("#second-quote");
const secondQuoteLabel = document.querySelector("#second-quote-label");
const voiceSecondQuote = document.querySelector("#voice-second-quote");
const voiceSecondSource = document.querySelector("#voice-second-source");
const voiceQuoteContext = document.querySelector("#voice-quote-context");
const treeNodes = [...document.querySelectorAll(".tree-topic")];

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function localDateKey() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function createDailyOrder() {
  const featuredIndex = voices.findIndex((voice) => voice.featuredContrast);
  const remaining = facts.map((_, index) => index).filter((index) => index !== featuredIndex);
  return featuredIndex < 0 ? shuffle(remaining) : [featuredIndex, ...shuffle(remaining)];
}

function advanceDailyDeck() {
  const date = localDateKey();
  const storageKey = "rooted-daily-deck-v2";
  let state;

  try {
    state = JSON.parse(localStorage.getItem(storageKey));
  } catch {
    state = null;
  }

  if (!state || state.date !== date || !Array.isArray(state.order) || state.order.length !== facts.length) {
    state = { date, order: createDailyOrder(), cursor: 0, visits: 0 };
  }
  if (state.cursor >= state.order.length) {
    state.order = createDailyOrder();
    state.cursor = 0;
  }

  const selectedIndex = state.order[state.cursor];
  state.cursor += 1;
  state.visits += 1;
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    // Keep the page usable when storage is disabled.
  }
  return { selectedIndex, visits: state.visits };
}

const dailySelection = advanceDailyDeck();
let dailyVisitCount = dailySelection.visits;
let currentIndex = dailySelection.selectedIndex;

function showVoice(voice) {
  voiceAngle.textContent = voice.angle;
  voiceQuote.textContent = `“${voice.quote}”`;
  voiceName.textContent = voice.name;
  voiceSource.textContent = voice.quoteSource;
  voiceSource.href = voice.quoteUrl;
  voicePortrait.src = voice.portrait;
  voicePortrait.alt = voice.portraitAlt;
  portraitCredit.textContent = voice.portraitCredit;
  portraitCredit.href = voice.portraitUrl;
  secondQuoteSection.hidden = !voice.secondQuote;
  if (voice.secondQuote) {
    secondQuoteLabel.textContent = voice.secondQuoteLabel ?? "A SECOND LINE · SAME SPEAKER";
    voiceSecondQuote.textContent = `“${voice.secondQuote}”`;
    voiceSecondSource.textContent = voice.secondQuoteSource ?? voice.quoteSource;
    voiceSecondSource.href = voice.secondQuoteUrl ?? voice.quoteUrl;
    voiceQuoteContext.textContent = voice.quoteContext ?? "";
  }
}

function showFact(index) {
  currentIndex = (index + facts.length) % facts.length;
  const fact = facts[currentIndex];
  const voice = voices[currentIndex];
  const displayNumber = String(currentIndex + 1).padStart(2, "0");
  const displayCount = `${displayNumber} / ${String(facts.length).padStart(2, "0")}`;

  showVoice(voice);
  dailyVisit.textContent = `TODAY · ${String(dailyVisitCount).padStart(2, "0")}`;
  factNumber.textContent = displayNumber;
  factCategory.textContent = fact.category.toUpperCase();
  factDate.textContent = fact.year;
  factOverline.textContent = fact.overline;
  factTitle.textContent = fact.title;
  factDetail.textContent = fact.detail;
  factCount.textContent = `TODAY · ${String(dailyVisitCount).padStart(2, "0")}`;
  treeIndex.innerHTML = `${displayNumber} <i>/</i> ${String(facts.length).padStart(2, "0")}`;
  sourceLinks.replaceChildren(...fact.sources.map((source) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = source.label;
    return link;
  }));
  sourceNote.textContent = fact.sourceNote;

  treeNodes.forEach((node) => {
    const isActive = node.dataset.branch === fact.branch;
    node.classList.toggle("is-active", isActive);
    node.setAttribute("aria-pressed", String(isActive));
  });
  window.dispatchEvent(new CustomEvent("rooted:active-branch", { detail: { branch: fact.branch } }));
}

document.querySelector("#previous-fact").addEventListener("click", () => showFact(currentIndex - 1));
document.querySelector("#next-fact").addEventListener("click", () => showFact(currentIndex + 1));

function showBranch(branch) {
  const index = facts.findIndex((fact) => fact.branch === branch);
  if (index !== -1) showFact(index);
}

treeNodes.forEach((node) => {
  node.addEventListener("click", () => showBranch(node.dataset.branch));
});

window.addEventListener("rooted:select-branch", (event) => showBranch(event.detail.branch));
document.querySelector("#show-featured-contrast").addEventListener("click", () => {
  showFact(voices.findIndex((voice) => voice.featuredContrast));
  document.querySelector(".fact-panel").scrollIntoView({ behavior: "smooth", block: "center" });
});

showFact(currentIndex);
