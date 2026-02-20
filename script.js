const DATA = {
  asOf: 'As of 2026-02-19',
  defaults: {
    projectedLeagueCap: 279200000,
    brownsTop51Commitments: 302400000,
    estRookiePoolReserve: 7800000,
  },
  rules: [
    'Signing/option bonus proration accelerates on release/trade unless a Post-June 1 treatment is used.',
    'Pre-June 1 release/trade pushes all remaining prorated bonus into current-year dead cap.',
    'Post-June 1 release keeps current-year proration in-year and pushes all remaining future proration out.',
    'Guaranteed salary can remain on cap depending on guarantee triggers and contract language.',
    'Restructure is modeled as converting salary to bonus and prorating across remaining years/void years.',
    'Tool outputs planning estimates, not official NFL accounting.'
  ],
  players: [
    { name: 'Deshaun Watson', pos: 'QB', capHit: 72400000, guaranteedLeft: 92000000, cutSavingsPre: -48600000, deadPre: 121000000, deadFuturePre: 0, cutSavingsPost: -31400000, deadPost: 103800000, deadFuturePost: 17600000, tradeSavingsPre: -48600000, tradeDeadPre: 121000000, tradeDeadFuturePre: 0 },
    { name: 'Myles Garrett', pos: 'EDGE', capHit: 34300000, guaranteedLeft: 4000000, cutSavingsPre: 14600000, deadPre: 19700000, deadFuturePre: 0, cutSavingsPost: 25200000, deadPost: 9100000, deadFuturePost: 10600000, tradeSavingsPre: 14600000, tradeDeadPre: 19700000, tradeDeadFuturePre: 0 },
    { name: 'Denzel Ward', pos: 'CB', capHit: 24800000, guaranteedLeft: 4200000, cutSavingsPre: 5300000, deadPre: 19500000, deadFuturePre: 0, cutSavingsPost: 14300000, deadPost: 10500000, deadFuturePost: 9000000, tradeSavingsPre: 5300000, tradeDeadPre: 19500000, tradeDeadFuturePre: 0 },
    { name: 'Joel Bitonio', pos: 'G', capHit: 16500000, guaranteedLeft: 0, cutSavingsPre: 11400000, deadPre: 5100000, deadFuturePre: 0, cutSavingsPost: 13200000, deadPost: 3300000, deadFuturePost: 1800000, tradeSavingsPre: 11400000, tradeDeadPre: 5100000, tradeDeadFuturePre: 0 },
    { name: 'Wyatt Teller', pos: 'G', capHit: 17500000, guaranteedLeft: 2500000, cutSavingsPre: 8200000, deadPre: 9300000, deadFuturePre: 0, cutSavingsPost: 12100000, deadPost: 5400000, deadFuturePost: 3900000, tradeSavingsPre: 8200000, tradeDeadPre: 9300000, tradeDeadFuturePre: 0 },
    { name: 'David Njoku', pos: 'TE', capHit: 13800000, guaranteedLeft: 1200000, cutSavingsPre: 7400000, deadPre: 6400000, deadFuturePre: 0, cutSavingsPost: 9800000, deadPost: 4000000, deadFuturePost: 2400000, tradeSavingsPre: 7400000, tradeDeadPre: 6400000, tradeDeadFuturePre: 0 },
    { name: 'Jack Conklin', pos: 'OT', capHit: 17100000, guaranteedLeft: 0, cutSavingsPre: 9600000, deadPre: 7500000, deadFuturePre: 0, cutSavingsPost: 12900000, deadPost: 4200000, deadFuturePost: 3300000, tradeSavingsPre: 9600000, tradeDeadPre: 7500000, tradeDeadFuturePre: 0 },
    { name: 'Jerry Jeudy', pos: 'WR', capHit: 19800000, guaranteedLeft: 7000000, cutSavingsPre: 4100000, deadPre: 15700000, deadFuturePre: 0, cutSavingsPost: 9100000, deadPost: 10700000, deadFuturePost: 5000000, tradeSavingsPre: 4100000, tradeDeadPre: 15700000, tradeDeadFuturePre: 0 },
    { name: 'Greg Newsome II', pos: 'CB', capHit: 13900000, guaranteedLeft: 0, cutSavingsPre: 9000000, deadPre: 4900000, deadFuturePre: 0, cutSavingsPost: 10800000, deadPost: 3100000, deadFuturePost: 1800000, tradeSavingsPre: 9000000, tradeDeadPre: 4900000, tradeDeadFuturePre: 0 },
    { name: 'Jeremiah Owusu-Koramoah', pos: 'LB', capHit: 12200000, guaranteedLeft: 3100000, cutSavingsPre: 5400000, deadPre: 6800000, deadFuturePre: 0, cutSavingsPost: 7800000, deadPost: 4400000, deadFuturePost: 2400000, tradeSavingsPre: 5400000, tradeDeadPre: 6800000, tradeDeadFuturePre: 0 },
    { name: 'Amari Cooper', pos: 'WR', capHit: 11200000, guaranteedLeft: 0, cutSavingsPre: 7800000, deadPre: 3400000, deadFuturePre: 0, cutSavingsPost: 8700000, deadPost: 2500000, deadFuturePost: 900000, tradeSavingsPre: 7800000, tradeDeadPre: 3400000, tradeDeadFuturePre: 0 },
    { name: 'Dawand Jones', pos: 'OT', capHit: 5300000, guaranteedLeft: 1000000, cutSavingsPre: 2100000, deadPre: 3200000, deadFuturePre: 0, cutSavingsPost: 3300000, deadPost: 2000000, deadFuturePost: 1200000, tradeSavingsPre: 2100000, tradeDeadPre: 3200000, tradeDeadFuturePre: 0 },
    { name: 'Zac Zinter', pos: 'G', capHit: 2700000, guaranteedLeft: 600000, cutSavingsPre: 900000, deadPre: 1800000, deadFuturePre: 0, cutSavingsPost: 1300000, deadPost: 1400000, deadFuturePost: 400000, tradeSavingsPre: 900000, tradeDeadPre: 1800000, tradeDeadFuturePre: 0 },
    { name: 'Cedric Tillman', pos: 'WR', capHit: 3200000, guaranteedLeft: 300000, cutSavingsPre: 1800000, deadPre: 1400000, deadFuturePre: 0, cutSavingsPost: 2400000, deadPost: 800000, deadFuturePost: 600000, tradeSavingsPre: 1800000, tradeDeadPre: 1400000, tradeDeadFuturePre: 0 },
    { name: 'Elijah Moore', pos: 'WR', capHit: 5200000, guaranteedLeft: 0, cutSavingsPre: 3100000, deadPre: 2100000, deadFuturePre: 0, cutSavingsPost: 3600000, deadPost: 1600000, deadFuturePost: 500000, tradeSavingsPre: 3100000, tradeDeadPre: 2100000, tradeDeadFuturePre: 0 },
    { name: 'Nick Chubb', pos: 'RB', capHit: 8400000, guaranteedLeft: 1200000, cutSavingsPre: 3200000, deadPre: 5200000, deadFuturePre: 0, cutSavingsPost: 5400000, deadPost: 3000000, deadFuturePost: 2200000, tradeSavingsPre: 3200000, tradeDeadPre: 5200000, tradeDeadFuturePre: 0 },
    { name: 'Pierre Strong Jr.', pos: 'RB', capHit: 1900000, guaranteedLeft: 0, cutSavingsPre: 1200000, deadPre: 700000, deadFuturePre: 0, cutSavingsPost: 1400000, deadPost: 500000, deadFuturePost: 200000, tradeSavingsPre: 1200000, tradeDeadPre: 700000, tradeDeadFuturePre: 0 },
    { name: 'Jedrick Wills Jr.', pos: 'OT', capHit: 10300000, guaranteedLeft: 0, cutSavingsPre: 4900000, deadPre: 5400000, deadFuturePre: 0, cutSavingsPost: 7200000, deadPost: 3100000, deadFuturePost: 2300000, tradeSavingsPre: 4900000, tradeDeadPre: 5400000, tradeDeadFuturePre: 0 },
    { name: 'Ethan Pocic', pos: 'C', capHit: 8700000, guaranteedLeft: 700000, cutSavingsPre: 4600000, deadPre: 4100000, deadFuturePre: 0, cutSavingsPost: 6200000, deadPost: 2500000, deadFuturePost: 1600000, tradeSavingsPre: 4600000, tradeDeadPre: 4100000, tradeDeadFuturePre: 0 },
    { name: 'Jordan Hicks', pos: 'LB', capHit: 6400000, guaranteedLeft: 0, cutSavingsPre: 4300000, deadPre: 2100000, deadFuturePre: 0, cutSavingsPost: 5000000, deadPost: 1400000, deadFuturePost: 700000, tradeSavingsPre: 4300000, tradeDeadPre: 2100000, tradeDeadFuturePre: 0 },
    { name: 'Grant Delpit', pos: 'S', capHit: 9100000, guaranteedLeft: 1800000, cutSavingsPre: 3800000, deadPre: 5300000, deadFuturePre: 0, cutSavingsPost: 6200000, deadPost: 2900000, deadFuturePost: 2400000, tradeSavingsPre: 3800000, tradeDeadPre: 5300000, tradeDeadFuturePre: 0 },
    { name: 'Juan Thornhill', pos: 'S', capHit: 7600000, guaranteedLeft: 0, cutSavingsPre: 5100000, deadPre: 2500000, deadFuturePre: 0, cutSavingsPost: 5900000, deadPost: 1700000, deadFuturePost: 800000, tradeSavingsPre: 5100000, tradeDeadPre: 2500000, tradeDeadFuturePre: 0 },
    { name: 'Martin Emerson Jr.', pos: 'CB', capHit: 4200000, guaranteedLeft: 800000, cutSavingsPre: 1900000, deadPre: 2300000, deadFuturePre: 0, cutSavingsPost: 2800000, deadPost: 1400000, deadFuturePost: 900000, tradeSavingsPre: 1900000, tradeDeadPre: 2300000, tradeDeadFuturePre: 0 },
    { name: 'Dalvin Tomlinson', pos: 'DT', capHit: 14300000, guaranteedLeft: 2900000, cutSavingsPre: 6200000, deadPre: 8100000, deadFuturePre: 0, cutSavingsPost: 9800000, deadPost: 4500000, deadFuturePost: 3600000, tradeSavingsPre: 6200000, tradeDeadPre: 8100000, tradeDeadFuturePre: 0 },
    { name: 'Shelby Harris', pos: 'DT', capHit: 3900000, guaranteedLeft: 0, cutSavingsPre: 2400000, deadPre: 1500000, deadFuturePre: 0, cutSavingsPost: 2900000, deadPost: 1000000, deadFuturePost: 500000, tradeSavingsPre: 2400000, tradeDeadPre: 1500000, tradeDeadFuturePre: 0 },
    { name: 'Ogbo Okoronkwo', pos: 'EDGE', capHit: 7100000, guaranteedLeft: 0, cutSavingsPre: 4200000, deadPre: 2900000, deadFuturePre: 0, cutSavingsPost: 5300000, deadPost: 1800000, deadFuturePost: 1100000, tradeSavingsPre: 4200000, tradeDeadPre: 2900000, tradeDeadFuturePre: 0 },
    { name: 'Alex Wright', pos: 'EDGE', capHit: 3200000, guaranteedLeft: 500000, cutSavingsPre: 1400000, deadPre: 1800000, deadFuturePre: 0, cutSavingsPost: 2200000, deadPost: 1000000, deadFuturePost: 800000, tradeSavingsPre: 1400000, tradeDeadPre: 1800000, tradeDeadFuturePre: 0 },
    { name: 'Siaki Ika', pos: 'DT', capHit: 2600000, guaranteedLeft: 400000, cutSavingsPre: 1000000, deadPre: 1600000, deadFuturePre: 0, cutSavingsPost: 1500000, deadPost: 1100000, deadFuturePost: 500000, tradeSavingsPre: 1000000, tradeDeadPre: 1600000, tradeDeadFuturePre: 0 },
    { name: 'Jordan Elliott', pos: 'DT', capHit: 3400000, guaranteedLeft: 0, cutSavingsPre: 1800000, deadPre: 1600000, deadFuturePre: 0, cutSavingsPost: 2300000, deadPost: 1100000, deadFuturePost: 500000, tradeSavingsPre: 1800000, tradeDeadPre: 1600000, tradeDeadFuturePre: 0 },
    { name: 'Za\'Darius Smith', pos: 'EDGE', capHit: 11800000, guaranteedLeft: 0, cutSavingsPre: 6100000, deadPre: 5700000, deadFuturePre: 0, cutSavingsPost: 8300000, deadPost: 3500000, deadFuturePost: 2200000, tradeSavingsPre: 6100000, tradeDeadPre: 5700000, tradeDeadFuturePre: 0 },
    { name: 'Jerome Ford', pos: 'RB', capHit: 2900000, guaranteedLeft: 300000, cutSavingsPre: 1200000, deadPre: 1700000, deadFuturePre: 0, cutSavingsPost: 1800000, deadPost: 1100000, deadFuturePost: 600000, tradeSavingsPre: 1200000, tradeDeadPre: 1700000, tradeDeadFuturePre: 0 },
    { name: 'Dustin Hopkins', pos: 'K', capHit: 4100000, guaranteedLeft: 400000, cutSavingsPre: 2100000, deadPre: 2000000, deadFuturePre: 0, cutSavingsPost: 2900000, deadPost: 1200000, deadFuturePost: 800000, tradeSavingsPre: 2100000, tradeDeadPre: 2000000, tradeDeadFuturePre: 0 },
    { name: 'Corey Bojorquez', pos: 'P', capHit: 1700000, guaranteedLeft: 0, cutSavingsPre: 1100000, deadPre: 600000, deadFuturePre: 0, cutSavingsPost: 1300000, deadPost: 400000, deadFuturePost: 200000, tradeSavingsPre: 1100000, tradeDeadPre: 600000, tradeDeadFuturePre: 0 },
    { name: 'Charley Hughlett', pos: 'LS', capHit: 1400000, guaranteedLeft: 0, cutSavingsPre: 900000, deadPre: 500000, deadFuturePre: 0, cutSavingsPost: 1050000, deadPost: 350000, deadFuturePost: 150000, tradeSavingsPre: 900000, tradeDeadPre: 500000, tradeDeadFuturePre: 0 },
    { name: 'Jameis Winston', pos: 'QB', capHit: 6400000, guaranteedLeft: 1000000, cutSavingsPre: 2500000, deadPre: 3900000, deadFuturePre: 0, cutSavingsPost: 4100000, deadPost: 2300000, deadFuturePost: 1600000, tradeSavingsPre: 2500000, tradeDeadPre: 3900000, tradeDeadFuturePre: 0 },
    { name: 'Dorian Thompson-Robinson', pos: 'QB', capHit: 1600000, guaranteedLeft: 200000, cutSavingsPre: 700000, deadPre: 900000, deadFuturePre: 0, cutSavingsPost: 1000000, deadPost: 600000, deadFuturePost: 300000, tradeSavingsPre: 700000, tradeDeadPre: 900000, tradeDeadFuturePre: 0 },
    { name: 'Anthony Schwartz', pos: 'WR', capHit: 1300000, guaranteedLeft: 0, cutSavingsPre: 850000, deadPre: 450000, deadFuturePre: 0, cutSavingsPost: 980000, deadPost: 320000, deadFuturePost: 130000, tradeSavingsPre: 850000, tradeDeadPre: 450000, tradeDeadFuturePre: 0 },
    { name: 'Michael Dunn', pos: 'G', capHit: 1450000, guaranteedLeft: 0, cutSavingsPre: 920000, deadPre: 530000, deadFuturePre: 0, cutSavingsPost: 1090000, deadPost: 360000, deadFuturePost: 170000, tradeSavingsPre: 920000, tradeDeadPre: 530000, tradeDeadFuturePre: 0 },
    { name: 'James Hudson III', pos: 'OT', capHit: 2100000, guaranteedLeft: 100000, cutSavingsPre: 1000000, deadPre: 1100000, deadFuturePre: 0, cutSavingsPost: 1400000, deadPost: 700000, deadFuturePost: 400000, tradeSavingsPre: 1000000, tradeDeadPre: 1100000, tradeDeadFuturePre: 0 },
    { name: 'Cade York', pos: 'K', capHit: 1200000, guaranteedLeft: 0, cutSavingsPre: 760000, deadPre: 440000, deadFuturePre: 0, cutSavingsPost: 900000, deadPost: 300000, deadFuturePost: 140000, tradeSavingsPre: 760000, tradeDeadPre: 440000, tradeDeadFuturePre: 0 },
    { name: 'Tony Fields II', pos: 'LB', capHit: 1500000, guaranteedLeft: 0, cutSavingsPre: 980000, deadPre: 520000, deadFuturePre: 0, cutSavingsPost: 1150000, deadPost: 350000, deadFuturePost: 170000, tradeSavingsPre: 980000, tradeDeadPre: 520000, tradeDeadFuturePre: 0 },
    { name: 'Ronnie Hickman', pos: 'S', capHit: 1350000, guaranteedLeft: 50000, cutSavingsPre: 700000, deadPre: 650000, deadFuturePre: 0, cutSavingsPost: 980000, deadPost: 370000, deadFuturePost: 280000, tradeSavingsPre: 700000, tradeDeadPre: 650000, tradeDeadFuturePre: 0 },
    { name: 'Cedric Hinton', pos: 'CB', capHit: 1220000, guaranteedLeft: 0, cutSavingsPre: 780000, deadPre: 440000, deadFuturePre: 0, cutSavingsPost: 910000, deadPost: 310000, deadFuturePost: 130000, tradeSavingsPre: 780000, tradeDeadPre: 440000, tradeDeadFuturePre: 0 },
    { name: 'Luke Wypler', pos: 'C', capHit: 1310000, guaranteedLeft: 50000, cutSavingsPre: 710000, deadPre: 600000, deadFuturePre: 0, cutSavingsPost: 990000, deadPost: 320000, deadFuturePost: 280000, tradeSavingsPre: 710000, tradeDeadPre: 600000, tradeDeadFuturePre: 0 },
    { name: 'Mohamoud Diabate', pos: 'LB', capHit: 1240000, guaranteedLeft: 0, cutSavingsPre: 790000, deadPre: 450000, deadFuturePre: 0, cutSavingsPost: 920000, deadPost: 320000, deadFuturePost: 130000, tradeSavingsPre: 790000, tradeDeadPre: 450000, tradeDeadFuturePre: 0 },
    { name: 'Mike Hall Jr.', pos: 'DT', capHit: 2100000, guaranteedLeft: 300000, cutSavingsPre: 900000, deadPre: 1200000, deadFuturePre: 0, cutSavingsPost: 1400000, deadPost: 700000, deadFuturePost: 500000, tradeSavingsPre: 900000, tradeDeadPre: 1200000, tradeDeadFuturePre: 0 },
    { name: 'Cameron Mitchell', pos: 'CB', capHit: 1380000, guaranteedLeft: 80000, cutSavingsPre: 720000, deadPre: 660000, deadFuturePre: 0, cutSavingsPost: 990000, deadPost: 390000, deadFuturePost: 270000, tradeSavingsPre: 720000, tradeDeadPre: 660000, tradeDeadFuturePre: 0 },
    { name: 'Isaiah McGuire', pos: 'EDGE', capHit: 2050000, guaranteedLeft: 200000, cutSavingsPre: 980000, deadPre: 1070000, deadFuturePre: 0, cutSavingsPost: 1450000, deadPost: 600000, deadFuturePost: 470000, tradeSavingsPre: 980000, tradeDeadPre: 1070000, tradeDeadFuturePre: 0 },
    { name: 'Bo Nixson', pos: 'WR', capHit: 1210000, guaranteedLeft: 0, cutSavingsPre: 770000, deadPre: 440000, deadFuturePre: 0, cutSavingsPost: 900000, deadPost: 310000, deadFuturePost: 130000, tradeSavingsPre: 770000, tradeDeadPre: 440000, tradeDeadFuturePre: 0 },
    { name: 'Dylan Drummond', pos: 'WR', capHit: 1180000, guaranteedLeft: 0, cutSavingsPre: 760000, deadPre: 420000, deadFuturePre: 0, cutSavingsPost: 890000, deadPost: 290000, deadFuturePost: 130000, tradeSavingsPre: 760000, tradeDeadPre: 420000, tradeDeadFuturePre: 0 },
    { name: 'Hakeem Adeniji', pos: 'OL', capHit: 1260000, guaranteedLeft: 0, cutSavingsPre: 800000, deadPre: 460000, deadFuturePre: 0, cutSavingsPost: 930000, deadPost: 330000, deadFuturePost: 130000, tradeSavingsPre: 800000, tradeDeadPre: 460000, tradeDeadFuturePre: 0 },
    { name: 'Nate McCrary', pos: 'RB', capHit: 1170000, guaranteedLeft: 0, cutSavingsPre: 740000, deadPre: 430000, deadFuturePre: 0, cutSavingsPost: 870000, deadPost: 300000, deadFuturePost: 130000, tradeSavingsPre: 740000, tradeDeadPre: 430000, tradeDeadFuturePre: 0 },
    { name: 'A.J. Green', pos: 'CB', capHit: 1290000, guaranteedLeft: 0, cutSavingsPre: 820000, deadPre: 470000, deadFuturePre: 0, cutSavingsPost: 950000, deadPost: 340000, deadFuturePost: 130000, tradeSavingsPre: 820000, tradeDeadPre: 470000, tradeDeadFuturePre: 0 },
    { name: 'Demetric Felton', pos: 'RB', capHit: 1150000, guaranteedLeft: 0, cutSavingsPre: 730000, deadPre: 420000, deadFuturePre: 0, cutSavingsPost: 860000, deadPost: 290000, deadFuturePost: 130000, tradeSavingsPre: 730000, tradeDeadPre: 420000, tradeDeadFuturePre: 0 }
  ]
};

const decisions = new Map();
const recommendations = new Map();
let projectedLeagueCap = DATA.defaults.projectedLeagueCap;

function money(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

function baselineSpace() {
  return projectedLeagueCap - DATA.defaults.brownsTop51Commitments - DATA.defaults.estRookiePoolReserve;
}

function contractInfo(player) {
  return [
    `Pre-6/1 cut: ${money(player.cutSavingsPre)} | 2026 dead ${money(player.deadPre)} | future dead ${money(player.deadFuturePre)}`,
    `Post-6/1 cut: ${money(player.cutSavingsPost)} | 2026 dead ${money(player.deadPost)} | future dead ${money(player.deadFuturePost)}`,
    `Pre-6/1 trade: ${money(player.tradeSavingsPre)} | 2026 dead ${money(player.tradeDeadPre)} | future dead ${money(player.tradeDeadFuturePre)}`,
  ].join('<br />');
}

function renderCapContext() {
  document.getElementById('asOfLabel').textContent = DATA.asOf;
  document.getElementById('leagueCapInput').value = String(projectedLeagueCap);
  const wrap = document.getElementById('capContext');
  const items = [
    ['Projected League Cap', projectedLeagueCap],
    ['Browns Top-51 Commitments', DATA.defaults.brownsTop51Commitments],
    ['Rookie Pool Reserve (est.)', DATA.defaults.estRookiePoolReserve],
    ['Baseline Effective Cap Space', baselineSpace()],
  ];

  wrap.innerHTML = items
    .map(([label, value]) => `<div class="stat"><span class="label">${label}</span><span class="value ${value >= 0 ? 'money pos' : 'money neg'}">${money(value)}</span></div>`)
    .join('');
}

function renderRules() {
  document.getElementById('rulesList').innerHTML = DATA.rules.map((rule) => `<li>${rule}</li>`).join('');
}

function actionResult(player, action) {
  switch (action) {
    case 'release_pre':
      return { capChange: player.cutSavingsPre, dead2026: player.deadPre, deadFuture: player.deadFuturePre };
    case 'release_post':
      return { capChange: player.cutSavingsPost, dead2026: player.deadPost, deadFuture: player.deadFuturePost };
    case 'trade_pre':
      return { capChange: player.tradeSavingsPre, dead2026: player.tradeDeadPre, deadFuture: player.tradeDeadFuturePre };
    case 'keep':
    default:
      return { capChange: 0, dead2026: 0, deadFuture: 0 };
  }
}

function buildRecommendation(player) {
  const post = actionResult(player, 'release_post');
  const pre = actionResult(player, 'release_pre');
  const trade = actionResult(player, 'trade_pre');

  if (player.guaranteedLeft > 25000000 || pre.capChange < -10000000) return 'Keep: guarantees/dead cap make moves inefficient this cycle.';
  if (post.capChange > 12000000 && post.deadFuture <= 12000000) return 'Post-6/1 release is best relief path while keeping future dead manageable.';
  if (trade.capChange > 8000000 && player.pos !== 'QB') return 'Trade market is preferred for cap relief + possible draft return.';
  if (pre.capChange > 5000000) return 'Pre-6/1 release is viable if replacement is already planned.';
  return 'Keep and pursue restructure or pay-adjustment options first.';
}

function renderRows() {
  const term = document.getElementById('searchInput').value.trim().toLowerCase();
  const tbody = document.getElementById('playerRows');
  const filteredPlayers = DATA.players.filter((p) => `${p.name} ${p.pos}`.toLowerCase().includes(term));
  document.getElementById('playerCountNote').textContent = `Showing ${filteredPlayers.length} of ${DATA.players.length} players (full modeled contract set).`;

  const rows = filteredPlayers
    .map((player) => {
      const action = decisions.get(player.name) || 'keep';
      const result = actionResult(player, action);
      const recommendation = recommendations.get(player.name) || '';
      return `<tr>
        <td><strong>${player.name}</strong><div class="small">${player.pos}</div></td>
        <td>${money(player.capHit)}</td>
        <td>${money(player.guaranteedLeft)}</td>
        <td class="contract-info">${contractInfo(player)}</td>
        <td>
          <select data-player="${player.name}" class="decision">
            <option value="keep" ${action === 'keep' ? 'selected' : ''}>Keep</option>
            <option value="release_pre" ${action === 'release_pre' ? 'selected' : ''}>Release (Pre-6/1)</option>
            <option value="release_post" ${action === 'release_post' ? 'selected' : ''}>Release (Post-6/1)</option>
            <option value="trade_pre" ${action === 'trade_pre' ? 'selected' : ''}>Trade (Pre-6/1)</option>
          </select>
        </td>
        <td>
          <div class="inline-reco">
            <button type="button" class="recommend-btn" data-player="${player.name}">Ask GM</button>
            <span class="reco-text">${recommendation}</span>
          </div>
        </td>
        <td class="money ${result.capChange >= 0 ? 'pos' : 'neg'}">${money(result.capChange)}</td>
        <td>${money(result.dead2026)}</td>
        <td>${money(result.deadFuture)}</td>
      </tr>`;
    })
    .join('');

  tbody.innerHTML = rows || '<tr><td colspan="9">No players match this filter.</td></tr>';

  document.querySelectorAll('.decision').forEach((select) => {
    select.addEventListener('change', (event) => {
      decisions.set(event.target.dataset.player, event.target.value);
      renderRows();
      renderSummary();
    });
  });

  document.querySelectorAll('.recommend-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
      const name = event.target.dataset.player;
      const player = DATA.players.find((p) => p.name === name);
      recommendations.set(name, buildRecommendation(player));
      renderRows();
    });
  });
}

function renderSummary() {
  let capDelta = 0;
  let dead2026 = 0;
  let deadFuture = 0;

  DATA.players.forEach((player) => {
    const action = decisions.get(player.name) || 'keep';
    const result = actionResult(player, action);
    capDelta += result.capChange;
    dead2026 += result.dead2026;
    deadFuture += result.deadFuture;
  });

  const spaceAfterMoves = baselineSpace() + capDelta;
  const summary = document.getElementById('scenarioSummary');
  summary.innerHTML = `
    <div class="stat"><span class="label">Total 2026 cap change</span><span class="value ${capDelta >= 0 ? 'money pos' : 'money neg'}">${money(capDelta)}</span></div>
    <div class="stat"><span class="label">Effective cap space after moves</span><span class="value ${spaceAfterMoves >= 0 ? 'money pos' : 'money neg'}">${money(spaceAfterMoves)}</span></div>
    <div class="stat"><span class="label">2026 dead cap created</span><span class="value">${money(dead2026)}</span></div>
    <div class="stat"><span class="label">Future dead cap pushed (all future years)</span><span class="value">${money(deadFuture)}</span></div>
  `;
}

function bindControls() {
  document.getElementById('searchInput').addEventListener('input', renderRows);

  document.getElementById('resetBtn').addEventListener('click', () => {
    decisions.clear();
    recommendations.clear();
    renderRows();
    renderSummary();
  });

  document.getElementById('leagueCapInput').addEventListener('input', (event) => {
    const value = Number(event.target.value);
    if (Number.isFinite(value) && value > 0) {
      projectedLeagueCap = value;
      renderCapContext();
      renderSummary();
    }
  });

  document.getElementById('resetCapBtn').addEventListener('click', () => {
    projectedLeagueCap = DATA.defaults.projectedLeagueCap;
    renderCapContext();
    renderSummary();
  });
}

function init() {
  renderCapContext();
  renderRules();
  renderRows();
  renderSummary();
  bindControls();
}

init();
