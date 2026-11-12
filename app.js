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

const accountabilityCases = [
  {
    id: "catherine-pugh",
    kicker: "DOCUMENTED CONVICTION · BALTIMORE",
    name: "Catherine Pugh",
    finding: "Pugh pleaded guilty to federal fraud and tax offenses and was sentenced to 36 months in prison. Prosecutors said the Healthy Holly book scheme included about $800,000 in payments from the University of Maryland Medical System.",
    context: "This case involved a book-sale fraud and Baltimore institutions; it does not establish that Black residents as a whole were the sole or direct victims.",
    portrait: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Baltimore_Mayor_Pugh_%281%29.jpg/500px-Baltimore_Mayor_Pugh_%281%29.jpg",
    portraitAlt: "Catherine Pugh, former Baltimore mayor",
    portraitCredit: "Photo · Bruce Emmerling · CC BY-SA 4.0",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Baltimore_Mayor_Pugh_(1).jpg",
    sources: [
      {
        label: "U.S. DOJ · Pugh sentencing and case details",
        url: "https://www.justice.gov/usao-md/pr/former-baltimore-mayor-catherine-pugh-sentenced-three-years-prison-federal-fraud-charges",
      },
    ],
  },
  {
    id: "rudy-giuliani",
    kicker: "CIVIL JURY FINDING · GEORGIA ELECTION WORKERS",
    name: "Rudy Giuliani",
    finding: "A federal civil jury found Giuliani liable for defaming Ruby Freeman and Shaye Moss, two Black election workers, after false election-fraud claims; the 2023 jury awarded $148.1 million in damages.",
    context: "This is a civil defamation judgment about two people, not a criminal fraud conviction or a finding about Black voters as a whole.",
    portrait: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Rudy_Giuliani_2025_%28cropped%29.jpg/500px-Rudy_Giuliani_2025_%28cropped%29.jpg",
    portraitAlt: "Rudy Giuliani in 2025",
    portraitCredit: "Photo · U.S. Department of Homeland Security · Public domain",
    portraitUrl: "https://commons.wikimedia.org/wiki/File:Rudy_Giuliani_2025_(cropped).jpg",
    sources: [
      {
        label: "Court docket · Freeman and Moss v. Giuliani",
        url: "https://www.courtlistener.com/docket/66692927/freeman-v-giuliani/",
      },
    ],
  },
  {
    id: "tyrone-brooks",
    kicker: "GUILTY PLEA · GEORGIA",
    name: "Tyrone Brooks",
    finding: "The former Georgia state representative pleaded guilty to federal tax fraud and no contest to mail- and wire-fraud charges tied to about $1 million diverted from two nonprofits associated with him. He was sentenced to one year and one day in prison.",
    context: "The case concerned Brooks's conduct and two nonprofits; it is not evidence about Georgia officials or Black community organizations generally. No appropriately licensed portrait was located for this entry.",
    portraitPlaceholder: "TB",
    portraitPlaceholderLabel: "Tyrone Brooks · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · Brooks pleads guilty to fraud and tax charges",
        url: "https://www.justice.gov/usao-ndga/pr/former-state-representative-tyrone-brooks-sr-pleads-guilty-fraud-and-tax-charges",
      },
      {
        label: "Atlanta Magazine · sentencing report",
        url: "https://www.atlantamagazine.com/news-culture-articles/tyrone-brooks-sentenced-to-federal-prison-for-a-year-and-a-day/",
      },
    ],
  },
  {
    id: "blmgnf-property",
    kicker: "REPORTED FINANCIAL SCRUTINY · ORGANIZATION",
    name: "Black Lives Matter Global Network Foundation",
    finding: "The Associated Press reported that the foundation's tax filing showed about $42 million in assets, and separately reported that it bought a $6 million Studio City property in October 2020 without publicly disclosing the purchase to donors at the time.",
    context: "This is an organization-level transparency controversy, not a court finding or proof that founders stole donations or personally profited. An asset balance is not evidence of theft, and the foundation said the property served organizational purposes. No finding of misappropriation was reported; no licensed property image was located.",
    portraitPlaceholder: "BLM",
    portraitPlaceholderLabel: "Black Lives Matter Global Network Foundation · organization entry",
    sources: [
      {
        label: "Associated Press · foundation financial filing",
        url: "https://news.google.com/rss/articles/CBMiygFBVV95cUxQVjJPaDcwQWZ5SnF1dUZvZ3JHS2hRa0kwWTQtUWJOSlJMZ2ZSSFc4QU1ySlhkR1FxQ0ZROFRlRzB6Mm8tVURwUzFDOUItUERMeGtZeG53VHg5YkdnUVhiQnh4eEpMYmhaY3hMRnY1cHF4X1VhZ3U5aklxZUtFMHBZOGplQmh1U3NQM2l2UnpPZVBRek1mNzNGMnZkLXd3YUV4Z1pFNWNfM0hhckpYZ09TY2VLaGVweXNGaG9OXzgzVlFwdHBtcVVKSk9R?oc=5",
      },
      {
        label: "Associated Press · investigation of the $6 million property",
        url: "https://news.google.com/rss/articles/CBMijwFBVV95cUxQSG5oNm1Rb1hwSGV3Y0czQmhQcG9PQzVUWDZYT2I5UGJTaUdYZXNPOTloMl9pc3otNzlBNDhVWFpNbWdRcjJtbmdNd2tGU2ZjVFR0TnRHbXJPM1YxMmdGWHpabUxEQ1J2dDdIWTNfQnp1QTBsN3psMi1kTjJ5M0ZVeXM3UzQyVUhHX0lhc2RtTQ?oc=5",
      },
    ],
  },
  {
    id: "kwame-kilpatrick",
    kicker: "FEDERAL CONVICTION · DETROIT",
    name: "Kwame Kilpatrick",
    finding: "A federal jury convicted the former Detroit mayor of racketeering, bribery, extortion, fraud, and tax offenses tied to city contracting. He was sentenced to 28 years in 2013.",
    context: "This was a public-corruption case involving Detroit city contracts. President Trump commuted Kilpatrick's prison sentence in 2021; the commutation did not erase his conviction.",
    portraitPlaceholder: "KK",
    portraitPlaceholderLabel: "Kwame Kilpatrick · no licensed portrait available",
    sources: [
      {
        label: "FBI · Kilpatrick public-corruption case",
        url: "https://www.fbi.gov/news/stories/public-corruption-inside-the-kwame-kilpatrick-case1",
      },
      {
        label: "Associated Press · 2021 sentence commutation",
        url: "https://apnews.com/article/donald-trump-kwame-kilpatrick-detroit-8441a18980a74aaa6503a5c098db25a1",
      },
    ],
  },
  {
    id: "harry-thomas",
    kicker: "GUILTY PLEA · PUBLIC-FUND THEFT",
    name: "Harry Thomas Jr.",
    finding: "The former D.C. councilmember pleaded guilty after diverting $353,500 from a public-private partnership for personal use. The money was designated for arts, youth recreation, and summer programs; he was sentenced to 38 months.",
    context: "The case involved funds intended for District residents and youth programs, not a finding about any racial group.",
    portraitPlaceholder: "HT",
    portraitPlaceholderLabel: "Harry Thomas Jr. · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · theft and tax sentencing",
        url: "https://www.justice.gov/archive/usao/dc/news/2012/may/12-155.html",
      },
    ],
  },
  {
    id: "jesse-jackson-jr",
    kicker: "GUILTY PLEA · CAMPAIGN-FUND FRAUD",
    name: "Jesse Jackson Jr.",
    finding: "The former Illinois congressman pleaded guilty to conspiring to defraud his re-election campaigns of about $750,000, which he spent on personal items and expenses. He was sentenced to 30 months in 2013.",
    context: "The case concerned campaign contributions and public trust. It documents Jackson's conduct, not wrongdoing by his constituents or community.",
    portraitPlaceholder: "JJ",
    portraitPlaceholderLabel: "Jesse Jackson Jr. · no licensed portrait available",
    sources: [
      {
        label: "NPR · sentencing and campaign-fund case",
        url: "https://www.npr.org/2013/08/14/212055227/jesse-jackson-jr-sentenced-to-30-months-in-prison",
      },
    ],
  },
  {
    id: "monica-conyers",
    kicker: "GUILTY PLEA · BRIBERY",
    name: "Monica Conyers",
    finding: "The former Detroit City Council member pleaded guilty to conspiracy to commit bribery in connection with her vote on a city sludge-disposal contract. She was sentenced to 37 months in 2010.",
    context: "This was a municipal-contract bribery case involving a public official; it is not evidence that Detroit residents as a group were involved.",
    portraitPlaceholder: "MC",
    portraitPlaceholderLabel: "Monica Conyers · no licensed portrait available",
    sources: [
      {
        label: "FBI · Conyers sentencing for bribery conspiracy",
        url: "https://www.fbi.gov/detroit/press-releases/2010/de031010a.htm",
      },
    ],
  },
  {
    id: "dianne-wilkerson",
    kicker: "GUILTY PLEA · ATTEMPTED EXTORTION",
    name: "Dianne Wilkerson",
    finding: "The former Massachusetts state senator pleaded guilty to eight attempted-extortion counts involving $23,500 in bribes sought for official acts related to a Roxbury development project. She was sentenced to 42 months.",
    context: "The court record concerns Wilkerson's official conduct and a local development project in her constituency; it does not support a group-wide claim.",
    portraitPlaceholder: "DW",
    portraitPlaceholderLabel: "Dianne Wilkerson · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · guilty plea and Roxbury project",
        url: "https://www.justice.gov/archive/usao/ma/news/2010/June/WilkersonPleaPR2.html",
      },
      {
        label: "First Circuit · sentence appeal",
        url: "https://media.ca1.uscourts.gov/pdf.opinions/11-1069P-01A.pdf",
      },
    ],
  },
  {
    id: "ray-nagin",
    kicker: "FEDERAL CONVICTION · PUBLIC CORRUPTION",
    name: "C. Ray Nagin",
    finding: "A federal jury convicted the former New Orleans mayor on 20 counts, including bribery, honest-services fraud, money laundering, and tax offenses tied to contractors. He was sentenced to 10 years in 2014.",
    context: "The case concerned city contracting and public office. The Fifth Circuit upheld the conviction; this is an individual accountability record, not a claim about New Orleans residents.",
    portraitPlaceholder: "RN",
    portraitPlaceholderLabel: "C. Ray Nagin · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · Nagin conviction",
        url: "https://www.justice.gov/usao-edla/pr/c-ray-nagin-former-new-orleans-mayor-convicted-federal-bribery-honest-services-wire",
      },
      {
        label: "U.S. DOJ · 10-year sentence",
        url: "https://www.justice.gov/usao-edla/pr/former-new-orleans-mayor-c-ray-nagin-sentenced-10-years-imprisonment-conspiracy-bribery",
      },
      {
        label: "Associated Press · appeal rejected",
        url: "https://apnews.com/46b99cf0fbc34cbab5389ebd73f6ca26/court-rejects-appeal-former-new-orleans-mayor-ray-nagin",
      },
    ],
  },
  {
    id: "daniel-holtzclaw",
    kicker: "CONVICTION · SEXUAL ASSAULT",
    name: "Daniel Holtzclaw",
    finding: "An Oklahoma jury convicted the former police officer on 18 counts involving eight women. He was sentenced to 263 years in 2016; trial reporting identified the women as Black.",
    context: "This entry concerns the specific assaults established at trial and the women who testified, not police officers or communities as a whole. The state appeals court affirmed the convictions and sentence in 2019.",
    portraitPlaceholder: "DH",
    portraitPlaceholderLabel: "Daniel Holtzclaw · no licensed portrait available",
    sources: [
      {
        label: "Oklahoma Court of Criminal Appeals · affirmed conviction",
        url: "https://law.justia.com/cases/oklahoma/court-of-appeals-criminal/2019/f-2016-62.html",
      },
      {
        label: "Associated Press · verdict",
        url: "https://apnews.com/general-news-national-bfc8b43fc51a49999eb0b07de01fffb4",
      },
    ],
  },
  {
    id: "michael-slager",
    kicker: "GUILTY PLEA · CIVIL-RIGHTS VIOLATION",
    name: "Michael Slager",
    finding: "The former North Charleston officer pleaded guilty to a federal civil-rights offense for the fatal shooting of Walter Scott, a Black man, during a traffic stop. Slager was sentenced to 20 years in 2017.",
    context: "The state murder charge was dropped under the federal plea agreement. This entry describes the conviction in Scott's case, not police officers generally.",
    portraitPlaceholder: "MS",
    portraitPlaceholderLabel: "Michael Slager · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · federal guilty plea",
        url: "https://www.justice.gov/archives/opa/pr/former-north-charleston-south-carolina-police-officer-michael-slager-pleads-guilty-federal",
      },
      {
        label: "U.S. DOJ · 20-year sentence",
        url: "https://www.justice.gov/usao-sc/pr/former-north-charleston-south-carolina-police-officer-michael-slager-sentenced-20-years",
      },
    ],
  },
  {
    id: "jason-van-dyke",
    kicker: "CONVICTION · MURDER",
    name: "Jason Van Dyke",
    finding: "A jury convicted the former Chicago officer of second-degree murder for killing Laquan McDonald, a Black teenager. Van Dyke was sentenced to 81 months in 2019 and released in 2022 after serving part of the sentence.",
    context: "The entry is about the verdict in McDonald's killing; it is not a statement about all police officers or Chicago residents.",
    portraitPlaceholder: "JV",
    portraitPlaceholderLabel: "Jason Van Dyke · no licensed portrait available",
    sources: [
      {
        label: "Associated Press · sentence and release",
        url: "https://apnews.com/article/laquan-mcdonald-jason-van-dyke-police-shooting-89fbc3c8be71480bfb0ee4385a672511",
      },
    ],
  },
  {
    id: "amber-guyger",
    kicker: "CONVICTION · MURDER",
    name: "Amber Guyger",
    finding: "A jury convicted the former Dallas officer of murdering Botham Jean, a Black man, in 2019 and sentenced her to 10 years. A Texas appeals court affirmed the conviction in 2021.",
    context: "Guyger was paroled and released in October 2026. This is a court record about Jean's killing, not a claim about police officers as a group.",
    portraitPlaceholder: "AG",
    portraitPlaceholderLabel: "Amber Guyger · no licensed portrait available",
    sources: [
      {
        label: "Texas Tribune · conviction and sentence",
        url: "https://www.texastribune.org/2019/10/02/amber-guyger-sentencing-former-dallas-officer-gets-10-years-prison/",
      },
      {
        label: "Texas Tribune · October 2026 parole release",
        url: "https://www.texastribune.org/2026/10/01/texas-dallas-amber-guyger-dallas-officer-parole/",
      },
    ],
  },
  {
    id: "derek-chauvin",
    kicker: "CONVICTION & FEDERAL GUILTY PLEA · GEORGE FLOYD",
    name: "Derek Chauvin",
    finding: "Chauvin was convicted of second-degree murder in George Floyd's death and sentenced to 22½ years in state court. He separately pleaded guilty to a federal civil-rights offense and received a concurrent 21-year sentence.",
    context: "Floyd was a Black man. The U.S. Supreme Court declined to review Chauvin's state conviction in 2023; this entry is limited to the findings in Floyd's case.",
    portraitPlaceholder: "DC",
    portraitPlaceholderLabel: "Derek Chauvin · no licensed portrait available",
    sources: [
      {
        label: "Associated Press · Supreme Court declines review",
        url: "https://apnews.com/article/supreme-court-george-floyd-officer-convicted-2c08301003ebb4ed83f53679e179d5e2",
      },
    ],
  },
  {
    id: "travis-mcmichael",
    kicker: "FEDERAL HATE-CRIME CONVICTION · AHMAUD ARBERY",
    name: "Travis McMichael",
    finding: "A federal jury convicted McMichael of hate crimes and related offenses in Ahmaud Arbery's killing. He was sentenced to life plus 10 years in 2022; the Eleventh Circuit upheld the federal convictions in 2025.",
    context: "Arbery was a Black man. This entry summarizes McMichael's individual conviction and does not generalize his actions to a group.",
    portraitPlaceholder: "TM",
    portraitPlaceholderLabel: "Travis McMichael · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · federal sentences in the Arbery case",
        url: "https://www.justice.gov/archives/opa/pr/federal-judge-sentences-three-men-convicted-racially-motivated-hate-crimes-connection-killing",
      },
      {
        label: "CBS News · appeals court affirms convictions",
        url: "https://www.cbsnews.com/news/ahmaud-arbery-killers-appeals-court-upholds-hate-crime-convictions/",
      },
    ],
  },
  {
    id: "dylann-roof",
    kicker: "FEDERAL HATE-CRIME CONVICTION · MOTHER EMANUEL AME",
    name: "Dylann Roof",
    finding: "A federal jury convicted Roof on 33 counts for killing and attempting to kill worshippers at Mother Emanuel AME Church. Nine Black church members were killed; Roof was sentenced to death in 2017.",
    context: "The Fourth Circuit affirmed the federal conviction and sentence. This is a record of the specific racist attack, not a generalization about any community.",
    portraitPlaceholder: "DR",
    portraitPlaceholderLabel: "Dylann Roof · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · federal death sentence",
        url: "https://www.justice.gov/usao-sc/pr/federal-jury-sentences-dylann-storm-roof-death",
      },
      {
        label: "Fourth Circuit · affirmed conviction and sentence",
        url: "https://www.ca4.uscourts.gov/opinions/252R1.U.pdf",
      },
    ],
  },
  {
    id: "byron-beckwith",
    kicker: "CONVICTION · MURDER OF MEDGAR EVERS",
    name: "Byron De La Beckwith",
    finding: "A Mississippi jury convicted Beckwith of murdering civil-rights leader Medgar Evers in 1994. The state Supreme Court affirmed the conviction in 1997.",
    context: "Evers was a Black civil-rights leader. The conviction followed two earlier trials that ended without a verdict.",
    portraitPlaceholder: "BB",
    portraitPlaceholderLabel: "Byron De La Beckwith · no licensed portrait available",
    sources: [
      {
        label: "Mississippi Supreme Court · affirmed conviction",
        url: "https://law.justia.com/cases/mississippi/supreme-court/1997/conv4396.html",
      },
    ],
  },
  {
    id: "edgar-killen",
    kicker: "CONVICTION · CIVIL-RIGHTS MURDERS",
    name: "Edgar Ray Killen",
    finding: "A Mississippi jury convicted Killen of three manslaughter counts in the 1964 killings of civil-rights workers James Chaney, Andrew Goodman, and Michael Schwerner. He received three consecutive 20-year terms.",
    context: "Chaney was Black; Goodman and Schwerner were white. The state Supreme Court affirmed the conviction and sentence in 2007.",
    portraitPlaceholder: "EK",
    portraitPlaceholderLabel: "Edgar Ray Killen · no licensed portrait available",
    sources: [
      {
        label: "Mississippi Supreme Court · affirmed conviction",
        url: "https://law.justia.com/cases/mississippi/supreme-court/2007/co40747.html",
      },
      {
        label: "PBS · sentencing report",
        url: "https://www.pbs.org/newshour/politics/law-jan-june05-killen_06-23",
      },
    ],
  },
  {
    id: "r-kelly",
    kicker: "FEDERAL CONVICTION · RACKETEERING",
    name: "R. Kelly",
    finding: "A New York federal jury convicted Kelly of racketeering and Mann Act violations in a scheme involving the recruitment and sexual abuse of girls and women. He was sentenced to 30 years in 2022; the Second Circuit affirmed in 2025.",
    context: "Black women were among the victims and accusers in the case. This entry concerns the people harmed and the crimes established in court, not a claim about any community.",
    portraitPlaceholder: "RK",
    portraitPlaceholderLabel: "R. Kelly · no licensed portrait available",
    sources: [
      {
        label: "U.S. DOJ · conviction",
        url: "https://www.justice.gov/usao-edny/pr/r-kelly-convicted-all-counts-federal-jury-brooklyn",
      },
      {
        label: "U.S. DOJ · 30-year sentence",
        url: "https://www.justice.gov/usao-edny/pr/r-kelly-sentenced-30-years-prison",
      },
      {
        label: "Second Circuit · affirmed conviction",
        url: "https://law.justia.com/cases/federal/appellate-courts/ca2/22-1481/22-1481-2025-02-12.html",
      },
    ],
  },
];

document.querySelector("#accountability-rotation-status").textContent =
  `${accountabilityCases.length} sourced entries appear in a shuffled, no-repeat sequence when session storage is available, then reshuffle after every entry has appeared. Court outcomes and reported financial controversies are labeled separately, and each entry links to its evidence.`;

const accountabilityStorageKey = "rooted-accountability-remaining";
const accountabilityLastCaseKey = "rooted-accountability-last-case";
const accountabilityIds = new Set(accountabilityCases.map((entry) => entry.id));
function shuffleAccountabilityIds(excludedId = "") {
  const shuffled = accountabilityCases
    .map((entry) => entry.id)
    .filter((id) => id !== excludedId);
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

let previousAccountabilityId = "";
let accountabilityOrder;
try {
  previousAccountabilityId = sessionStorage.getItem(accountabilityLastCaseKey) ?? "";
  const savedOrder = JSON.parse(sessionStorage.getItem(accountabilityStorageKey) ?? "null");
  if (
    Array.isArray(savedOrder)
    && savedOrder.every((id) => accountabilityIds.has(id))
    && new Set(savedOrder).size === savedOrder.length
  ) {
    accountabilityOrder = savedOrder.filter((id) => id !== previousAccountabilityId);
  }
} catch {
  // Session storage is optional; the panel still chooses a shuffled case.
}
if (!accountabilityOrder?.length) {
  accountabilityOrder = shuffleAccountabilityIds(previousAccountabilityId);
}
const accountabilityCaseId = accountabilityOrder.shift();
const accountabilityCase = accountabilityCases.find((entry) => entry.id === accountabilityCaseId);
try {
  sessionStorage.setItem(accountabilityStorageKey, JSON.stringify(accountabilityOrder));
  sessionStorage.setItem(accountabilityLastCaseKey, accountabilityCase.id);
} catch {
  // Session storage is optional; the panel still renders.
}

document.querySelector("#accountability-kicker").textContent = accountabilityCase.kicker;
document.querySelector("#accountability-name").textContent = accountabilityCase.name;
document.querySelector("#accountability-finding").textContent = accountabilityCase.finding;
document.querySelector("#accountability-context").textContent = accountabilityCase.context;
const accountabilityPortrait = document.querySelector("#accountability-portrait");
const accountabilityPortraitPlaceholder = document.querySelector("#accountability-portrait-placeholder");
const accountabilityPhotoCredit = document.querySelector("#accountability-photo-credit");
const accountabilityPortraitCaption = document.querySelector("#accountability-portrait-caption");
const hasAccountabilityPortrait = Boolean(accountabilityCase.portrait);
accountabilityPortrait.hidden = !hasAccountabilityPortrait;
accountabilityPortraitCaption.hidden = !hasAccountabilityPortrait;
accountabilityPortraitPlaceholder.hidden = hasAccountabilityPortrait;
if (hasAccountabilityPortrait) {
  accountabilityPortrait.src = accountabilityCase.portrait;
  accountabilityPortrait.alt = accountabilityCase.portraitAlt;
  accountabilityPhotoCredit.href = accountabilityCase.portraitUrl;
  accountabilityPhotoCredit.textContent = accountabilityCase.portraitCredit;
} else {
  const placeholderInitials = document.createElement("span");
  placeholderInitials.textContent = accountabilityCase.portraitPlaceholder;
  const placeholderNote = document.createElement("small");
  placeholderNote.textContent = "No licensed image available";
  accountabilityPortraitPlaceholder.replaceChildren(placeholderInitials, placeholderNote);
  accountabilityPortraitPlaceholder.setAttribute("aria-label", accountabilityCase.portraitPlaceholderLabel);
}
document.querySelector("#accountability-sources").replaceChildren(...accountabilityCase.sources.map((source) => {
  const link = document.createElement("a");
  link.href = source.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = source.label;
  return link;
}));
