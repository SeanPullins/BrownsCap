const DATA = {
  asOf: 'As of 2026-02-19 (OTC scrape)',
  dataNote:
    'Player list and pre-June cut values were scraped from OverTheCap Browns cap page. Post-June/trade-post/restructure outputs are planning estimates.',
  defaults: {
    projectedLeagueCap: 279200000,
    brownsTop51Commitments: 294358677,
    estRookiePoolReserve: 7800000,
  },
  rules: [
    'Pre-June cut dead/cap savings are sourced from OTC row values in this snapshot.',
    'Post-June outputs are estimated by splitting a share of pre-June dead cap into future years.',
    'Restructure is modeled estimate: immediate relief + matching future dead-cap burden.',
    'Tool outputs planning estimates, not official NFL accounting.'
  ],
  players: [
  {"name": "Deshaun Watson", "pos": "QB", "capHit": 80716514, "guaranteedLeft": 50446864, "cutSavingsPre": -50446864, "deadPre": 131163378, "deadFuturePre": 0, "cutSavingsPost": -21590921, "deadPost": 102307435, "deadFuturePost": 28855943, "tradeSavingsPre": -50446864, "tradeDeadPre": 131163378, "tradeDeadFuturePre": 0, "restructureSavings": 24000000, "restructureDeadFuture": 24000000},
  {"name": "Denzel Ward", "pos": "CB", "capHit": 32893412, "guaranteedLeft": 3289341, "cutSavingsPre": 3237212, "deadPre": 29656200, "deadFuturePre": 0, "cutSavingsPost": 9761576, "deadPost": 23131836, "deadFuturePost": 6524364, "tradeSavingsPre": 3237212, "tradeDeadPre": 29656200, "tradeDeadFuturePre": 0, "restructureSavings": 9868024, "restructureDeadFuture": 9868024},
  {"name": "Myles Garrett", "pos": "EDGE", "capHit": 23674000, "guaranteedLeft": 79420100, "cutSavingsPre": -79420100, "deadPre": 103094100, "deadFuturePre": 0, "cutSavingsPost": -56739398, "deadPost": 80413398, "deadFuturePost": 22680702, "tradeSavingsPre": -79420100, "tradeDeadPre": 103094100, "tradeDeadFuturePre": 0, "restructureSavings": 7102200, "restructureDeadFuture": 7102200},
  {"name": "Joel Bitonio", "pos": "G", "capHit": 23504000, "guaranteedLeft": 2350400, "cutSavingsPre": 0, "deadPre": 23504000, "deadFuturePre": 0, "cutSavingsPost": 5170880, "deadPost": 18333120, "deadFuturePost": 5170880, "tradeSavingsPre": 0, "tradeDeadPre": 23504000, "tradeDeadFuturePre": 0, "restructureSavings": 7051200, "restructureDeadFuture": 7051200},
  {"name": "David Njoku", "pos": "TE", "capHit": 10834000, "guaranteedLeft": 13497000, "cutSavingsPre": -13497000, "deadPre": 24331000, "deadFuturePre": 0, "cutSavingsPost": -8144180, "deadPost": 18978180, "deadFuturePost": 5352820, "tradeSavingsPre": -13497000, "tradeDeadPre": 24331000, "tradeDeadFuturePre": 0, "restructureSavings": 3250200, "restructureDeadFuture": 3250200},
  {"name": "Wyatt Teller", "pos": "G", "capHit": 10393000, "guaranteedLeft": 9011000, "cutSavingsPre": -9011000, "deadPre": 19404000, "deadFuturePre": 0, "cutSavingsPost": -4742120, "deadPost": 15135120, "deadFuturePost": 4268880, "tradeSavingsPre": -9011000, "tradeDeadPre": 19404000, "tradeDeadFuturePre": 0, "restructureSavings": 3117900, "restructureDeadFuture": 3117900},
  {"name": "Jerry Jeudy", "pos": "WR", "capHit": 10372400, "guaranteedLeft": 17952600, "cutSavingsPre": -17952600, "deadPre": 28325000, "deadFuturePre": 0, "cutSavingsPost": -11721100, "deadPost": 22093500, "deadFuturePost": 6231500, "tradeSavingsPre": -17952600, "tradeDeadPre": 28325000, "tradeDeadFuturePre": 0, "restructureSavings": 3111720, "restructureDeadFuture": 3111720},
  {"name": "Mason Graham", "pos": "DT", "capHit": 9289589, "guaranteedLeft": 24152932, "cutSavingsPre": -24152932, "deadPre": 33442521, "deadFuturePre": 0, "cutSavingsPost": -16795577, "deadPost": 26085166, "deadFuturePost": 7357355, "tradeSavingsPre": -24152932, "tradeDeadPre": 33442521, "tradeDeadFuturePre": 0, "restructureSavings": 2786877, "restructureDeadFuture": 2786877},
  {"name": "Grant Delpit", "pos": "S", "capHit": 8033000, "guaranteedLeft": 4927000, "cutSavingsPre": -4927000, "deadPre": 12960000, "deadFuturePre": 0, "cutSavingsPost": -2075800, "deadPost": 10108800, "deadFuturePost": 2851200, "tradeSavingsPre": -4927000, "tradeDeadPre": 12960000, "tradeDeadFuturePre": 0, "restructureSavings": 2409900, "restructureDeadFuture": 2409900},
  {"name": "Jack Conklin", "pos": "OT", "capHit": 5561608, "guaranteedLeft": 6851365, "cutSavingsPre": -6851365, "deadPre": 12412973, "deadFuturePre": 0, "cutSavingsPost": -4120511, "deadPost": 9682119, "deadFuturePost": 2730854, "tradeSavingsPre": -6851365, "tradeDeadPre": 12412973, "tradeDeadFuturePre": 0, "restructureSavings": 1668482, "restructureDeadFuture": 1668482},
  {"name": "Jeremiah Owusu-Koramoah", "pos": "LB", "capHit": 5441624, "guaranteedLeft": 12361128, "cutSavingsPre": -12361128, "deadPre": 17802752, "deadFuturePre": 0, "cutSavingsPost": -8444523, "deadPost": 13886147, "deadFuturePost": 3916605, "tradeSavingsPre": -12361128, "tradeDeadPre": 17802752, "tradeDeadFuturePre": 0, "restructureSavings": 1632487, "restructureDeadFuture": 1632487},
  {"name": "Maliek Collins", "pos": "DT", "capHit": 5327824, "guaranteedLeft": 3468176, "cutSavingsPre": -3468176, "deadPre": 8796000, "deadFuturePre": 0, "cutSavingsPost": -1533056, "deadPost": 6860880, "deadFuturePost": 1935120, "tradeSavingsPre": -3468176, "tradeDeadPre": 8796000, "tradeDeadFuturePre": 0, "restructureSavings": 1598347, "restructureDeadFuture": 1598347},
  {"name": "Tyson Campbell", "pos": "CB", "capHit": 4916000, "guaranteedLeft": 8200000, "cutSavingsPre": -8200000, "deadPre": 13116000, "deadFuturePre": 0, "cutSavingsPost": -5314480, "deadPost": 10230480, "deadFuturePost": 2885520, "tradeSavingsPre": -8200000, "tradeDeadPre": 13116000, "tradeDeadFuturePre": 0, "restructureSavings": 1474800, "restructureDeadFuture": 1474800},
  {"name": "Ethan Pocic", "pos": "C", "capHit": 4368000, "guaranteedLeft": 436800, "cutSavingsPre": 0, "deadPre": 4368000, "deadFuturePre": 0, "cutSavingsPost": 960960, "deadPost": 3407040, "deadFuturePost": 960960, "tradeSavingsPre": 0, "tradeDeadPre": 4368000, "tradeDeadFuturePre": 0, "restructureSavings": 1310400, "restructureDeadFuture": 1310400},
  {"name": "Alex Wright", "pos": "EDGE", "capHit": 3970995, "guaranteedLeft": 7210872, "cutSavingsPre": -7210872, "deadPre": 11181867, "deadFuturePre": 0, "cutSavingsPost": -4750861, "deadPost": 8721856, "deadFuturePost": 2460011, "tradeSavingsPre": -7210872, "tradeDeadPre": 11181867, "tradeDeadFuturePre": 0, "restructureSavings": 1191298, "restructureDeadFuture": 1191298},
  {"name": "Cedric Tillman", "pos": "WR", "capHit": 3927584, "guaranteedLeft": 270084, "cutSavingsPre": 3657500, "deadPre": 270084, "deadFuturePre": 0, "cutSavingsPost": 3716918, "deadPost": 210666, "deadFuturePost": 59418, "tradeSavingsPre": 3657500, "tradeDeadPre": 270084, "tradeDeadFuturePre": 0, "restructureSavings": 1178275, "restructureDeadFuture": 1178275},
  {"name": "Dawand Jones", "pos": "OT", "capHit": 3803084, "guaranteedLeft": 198084, "cutSavingsPre": 3605000, "deadPre": 198084, "deadFuturePre": 0, "cutSavingsPost": 3648578, "deadPost": 154506, "deadFuturePost": 43578, "tradeSavingsPre": 3605000, "tradeDeadPre": 198084, "tradeDeadFuturePre": 0, "restructureSavings": 1140925, "restructureDeadFuture": 1140925},
  {"name": "Isaiah McGuire", "pos": "EDGE", "capHit": 3782982, "guaranteedLeft": 177982, "cutSavingsPre": 3605000, "deadPre": 177982, "deadFuturePre": 0, "cutSavingsPost": 3644156, "deadPost": 138826, "deadFuturePost": 39156, "tradeSavingsPre": 3605000, "tradeDeadPre": 177982, "tradeDeadFuturePre": 0, "restructureSavings": 1134895, "restructureDeadFuture": 1134895},
  {"name": "Cornelius Lucas", "pos": "OT", "capHit": 3435000, "guaranteedLeft": 343500, "cutSavingsPre": 1835000, "deadPre": 1600000, "deadFuturePre": 0, "cutSavingsPost": 2187000, "deadPost": 1248000, "deadFuturePost": 352000, "tradeSavingsPre": 1835000, "tradeDeadPre": 1600000, "tradeDeadFuturePre": 0, "restructureSavings": 1030500, "restructureDeadFuture": 1030500},
  {"name": "Carson Schwesinger", "pos": "LB", "capHit": 2681909, "guaranteedLeft": 6972964, "cutSavingsPre": -6972964, "deadPre": 9654873, "deadFuturePre": 0, "cutSavingsPost": -4848892, "deadPost": 7530801, "deadFuturePost": 2124072, "tradeSavingsPre": -6972964, "tradeDeadPre": 9654873, "tradeDeadFuturePre": 0, "restructureSavings": 804573, "restructureDeadFuture": 804573},
  {"name": "Quinshon Judkins", "pos": "RB", "capHit": 2591390, "guaranteedLeft": 6737614, "cutSavingsPre": -6737614, "deadPre": 9329004, "deadFuturePre": 0, "cutSavingsPost": -4685233, "deadPost": 7276623, "deadFuturePost": 2052381, "tradeSavingsPre": -6737614, "tradeDeadPre": 9329004, "tradeDeadFuturePre": 0, "restructureSavings": 777417, "restructureDeadFuture": 777417},
  {"name": "Shelby Harris", "pos": "DT", "capHit": 2043000, "guaranteedLeft": 204300, "cutSavingsPre": 0, "deadPre": 2043000, "deadFuturePre": 0, "cutSavingsPost": 449460, "deadPost": 1593540, "deadFuturePost": 449460, "tradeSavingsPre": 0, "tradeDeadPre": 2043000, "tradeDeadFuturePre": 0, "restructureSavings": 612900, "restructureDeadFuture": 612900},
  {"name": "Michael Hall Jr.", "pos": "DT", "capHit": 1928135, "guaranteedLeft": 192813, "cutSavingsPre": 440927, "deadPre": 1487208, "deadFuturePre": 0, "cutSavingsPost": 768113, "deadPost": 1160022, "deadFuturePost": 327186, "tradeSavingsPre": 440927, "tradeDeadPre": 1487208, "tradeDeadFuturePre": 0, "restructureSavings": 578440, "restructureDeadFuture": 578440},
  {"name": "Zak Zinter", "pos": "G", "capHit": 1564020, "guaranteedLeft": 156402, "cutSavingsPre": 1068660, "deadPre": 495360, "deadFuturePre": 0, "cutSavingsPost": 1177639, "deadPost": 386381, "deadFuturePost": 108979, "tradeSavingsPre": 1068660, "tradeDeadPre": 495360, "tradeDeadFuturePre": 0, "restructureSavings": 469206, "restructureDeadFuture": 469206},
  {"name": "Harold Fannin Jr.", "pos": "TE", "capHit": 1532474, "guaranteedLeft": 153247, "cutSavingsPre": 374537, "deadPre": 1157937, "deadFuturePre": 0, "cutSavingsPost": 629283, "deadPost": 903191, "deadFuturePost": 254746, "tradeSavingsPre": 374537, "tradeDeadPre": 1157937, "tradeDeadFuturePre": 0, "restructureSavings": 459742, "restructureDeadFuture": 459742},
  {"name": "Devin Bush", "pos": "LB", "capHit": 1440000, "guaranteedLeft": 144000, "cutSavingsPre": 0, "deadPre": 1440000, "deadFuturePre": 0, "cutSavingsPost": 316800, "deadPost": 1123200, "deadFuturePost": 316800, "tradeSavingsPre": 0, "tradeDeadPre": 1440000, "tradeDeadFuturePre": 0, "restructureSavings": 432000, "restructureDeadFuture": 432000},
  {"name": "Dillon Gabriel", "pos": "QB", "capHit": 1415073, "guaranteedLeft": 141507, "cutSavingsPre": 538899, "deadPre": 876174, "deadFuturePre": 0, "cutSavingsPost": 731657, "deadPost": 683416, "deadFuturePost": 192758, "tradeSavingsPre": 538899, "tradeDeadPre": 876174, "tradeDeadFuturePre": 0, "restructureSavings": 424522, "restructureDeadFuture": 424522},
  {"name": "Dylan Sampson", "pos": "RB", "capHit": 1237641, "guaranteedLeft": 123764, "cutSavingsPre": 539718, "deadPre": 697923, "deadFuturePre": 0, "cutSavingsPost": 693261, "deadPost": 544380, "deadFuturePost": 153543, "tradeSavingsPre": 539718, "tradeDeadPre": 697923, "tradeDeadFuturePre": 0, "restructureSavings": 371292, "restructureDeadFuture": 371292},
  {"name": "Kendrick Green", "pos": "G", "capHit": 1215000, "guaranteedLeft": 0, "cutSavingsPre": 1215000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1215000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1215000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 364500, "restructureDeadFuture": 364500},
  {"name": "Teven Jenkins", "pos": "G", "capHit": 1200000, "guaranteedLeft": 120000, "cutSavingsPre": 0, "deadPre": 1200000, "deadFuturePre": 0, "cutSavingsPost": 264000, "deadPost": 936000, "deadFuturePost": 264000, "tradeSavingsPre": 0, "tradeDeadPre": 1200000, "tradeDeadFuturePre": 0, "restructureSavings": 360000, "restructureDeadFuture": 360000},
  {"name": "Luke Wypler", "pos": "C", "capHit": 1189993, "guaranteedLeft": 44993, "cutSavingsPre": 1145000, "deadPre": 44993, "deadFuturePre": 0, "cutSavingsPost": 1154898, "deadPost": 35095, "deadFuturePost": 9898, "tradeSavingsPre": 1145000, "tradeDeadPre": 44993, "tradeDeadFuturePre": 0, "restructureSavings": 356998, "restructureDeadFuture": 356998},
  {"name": "Shedeur Sanders", "pos": "QB", "capHit": 1116845, "guaranteedLeft": 111684, "cutSavingsPre": 781310, "deadPre": 335535, "deadFuturePre": 0, "cutSavingsPost": 855128, "deadPost": 261717, "deadFuturePost": 73818, "tradeSavingsPre": 781310, "tradeDeadPre": 335535, "tradeDeadFuturePre": 0, "restructureSavings": 335054, "restructureDeadFuture": 335054},
  {"name": "Myles Harden", "pos": "CB", "capHit": 1102583, "guaranteedLeft": 55166, "cutSavingsPre": 1047417, "deadPre": 55166, "deadFuturePre": 0, "cutSavingsPost": 1059554, "deadPost": 43029, "deadFuturePost": 12137, "tradeSavingsPre": 1047417, "tradeDeadPre": 55166, "tradeDeadFuturePre": 0, "restructureSavings": 330775, "restructureDeadFuture": 330775},
  {"name": "Edefuan Ulofoshio", "pos": "LB", "capHit": 1075000, "guaranteedLeft": 0, "cutSavingsPre": 1075000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1075000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1075000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 322500, "restructureDeadFuture": 322500},
  {"name": "Nathaniel Watson", "pos": "LB", "capHit": 1075000, "guaranteedLeft": 0, "cutSavingsPre": 1075000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1075000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1075000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 322500, "restructureDeadFuture": 322500},
  {"name": "Tyre Phillips", "pos": "OT", "capHit": 1075000, "guaranteedLeft": 0, "cutSavingsPre": 1075000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1075000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1075000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 322500, "restructureDeadFuture": 322500},
  {"name": "Isaiah Bond", "pos": "WR", "capHit": 1022666, "guaranteedLeft": 1137668, "cutSavingsPre": -1137668, "deadPre": 2160334, "deadFuturePre": 0, "cutSavingsPost": -662395, "deadPost": 1685061, "deadFuturePost": 475273, "tradeSavingsPre": -1137668, "tradeDeadPre": 2160334, "tradeDeadFuturePre": 0, "restructureSavings": 306800, "restructureDeadFuture": 306800},
  {"name": "Adin Huntington", "pos": "TE", "capHit": 1011666, "guaranteedLeft": 13334, "cutSavingsPre": 998332, "deadPre": 13334, "deadFuturePre": 0, "cutSavingsPost": 1001265, "deadPost": 10401, "deadFuturePost": 2933, "tradeSavingsPre": 998332, "tradeDeadPre": 13334, "tradeDeadFuturePre": 0, "restructureSavings": 303500, "restructureDeadFuture": 303500},
  {"name": "Easton Mascarenas-Arnold", "pos": "LB", "capHit": 1008333, "guaranteedLeft": 6667, "cutSavingsPre": 1001666, "deadPre": 6667, "deadFuturePre": 0, "cutSavingsPost": 1003133, "deadPost": 5200, "deadFuturePost": 1467, "tradeSavingsPre": 1001666, "tradeDeadPre": 6667, "tradeDeadFuturePre": 0, "restructureSavings": 302500, "restructureDeadFuture": 302500},
  {"name": "Donovan McMillon", "pos": "S", "capHit": 1008333, "guaranteedLeft": 6667, "cutSavingsPre": 1001666, "deadPre": 6667, "deadFuturePre": 0, "cutSavingsPost": 1003133, "deadPost": 5200, "deadFuturePost": 1467, "tradeSavingsPre": 1001666, "tradeDeadPre": 6667, "tradeDeadFuturePre": 0, "restructureSavings": 302500, "restructureDeadFuture": 302500},
  {"name": "Raheim Sanders", "pos": "RB", "capHit": 1005000, "guaranteedLeft": 0, "cutSavingsPre": 1005000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1005000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1005000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 301500, "restructureDeadFuture": 301500},
  {"name": "Dom Jones", "pos": "OT", "capHit": 1005000, "guaranteedLeft": 0, "cutSavingsPre": 1005000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1005000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1005000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 301500, "restructureDeadFuture": 301500},
  {"name": "Jeremiah Byers", "pos": "OT", "capHit": 1005000, "guaranteedLeft": 0, "cutSavingsPre": 1005000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1005000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1005000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 301500, "restructureDeadFuture": 301500},
  {"name": "Gage Larvadain", "pos": "WR", "capHit": 1005000, "guaranteedLeft": 0, "cutSavingsPre": 1005000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1005000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1005000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 301500, "restructureDeadFuture": 301500},
  {"name": "K.T. Leveston", "pos": "OL", "capHit": 1005000, "guaranteedLeft": 0, "cutSavingsPre": 1005000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1005000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1005000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 301500, "restructureDeadFuture": 301500},
  {"name": "Chris Edmonds", "pos": "S", "capHit": 1005000, "guaranteedLeft": 0, "cutSavingsPre": 1005000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1005000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1005000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 301500, "restructureDeadFuture": 301500},
  {"name": "Kingsley Eguakun", "pos": "C", "capHit": 1005000, "guaranteedLeft": 0, "cutSavingsPre": 1005000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 1005000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 1005000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 301500, "restructureDeadFuture": 301500},
  {"name": "Justin Osborne", "pos": "WR", "capHit": 890000, "guaranteedLeft": 10000, "cutSavingsPre": 880000, "deadPre": 10000, "deadFuturePre": 0, "cutSavingsPost": 882200, "deadPost": 7800, "deadFuturePost": 2200, "tradeSavingsPre": 880000, "tradeDeadPre": 10000, "tradeDeadFuturePre": 0, "restructureSavings": 267000, "restructureDeadFuture": 267000},
  {"name": "Nik Constantinou", "pos": "P", "capHit": 885000, "guaranteedLeft": 0, "cutSavingsPre": 885000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 885000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 885000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 265500, "restructureDeadFuture": 265500},
  {"name": "Caden Prieskorn", "pos": "TE", "capHit": 885000, "guaranteedLeft": 0, "cutSavingsPre": 885000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 885000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 885000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 265500, "restructureDeadFuture": 265500},
  {"name": "Sal Cannella", "pos": "TE", "capHit": 885000, "guaranteedLeft": 0, "cutSavingsPre": 885000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 885000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 885000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 265500, "restructureDeadFuture": 265500},
  {"name": "Jack Conley", "pos": "G", "capHit": 885000, "guaranteedLeft": 0, "cutSavingsPre": 885000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 885000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 885000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 265500, "restructureDeadFuture": 265500},
  {"name": "Luke Floriea", "pos": "WR", "capHit": 885000, "guaranteedLeft": 0, "cutSavingsPre": 885000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 885000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 885000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 265500, "restructureDeadFuture": 265500},
  {"name": "Ahmani Marshall", "pos": "CB", "capHit": 885000, "guaranteedLeft": 0, "cutSavingsPre": 885000, "deadPre": 0, "deadFuturePre": 0, "cutSavingsPost": 885000, "deadPost": 0, "deadFuturePost": 0, "tradeSavingsPre": 885000, "tradeDeadPre": 0, "tradeDeadFuturePre": 0, "restructureSavings": 265500, "restructureDeadFuture": 265500}
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
    `Pre-6/1 cut (OTC): ${money(player.cutSavingsPre)} | 2026 dead ${money(player.deadPre)} | future dead ${money(player.deadFuturePre)}`,
    `Post-6/1 cut (est): ${money(player.cutSavingsPost)} | 2026 dead ${money(player.deadPost)} | future dead ${money(player.deadFuturePost)}`,
    `Pre-6/1 trade (est): ${money(player.tradeSavingsPre)} | 2026 dead ${money(player.tradeDeadPre)} | future dead ${money(player.tradeDeadFuturePre)}`,
    `Restructure (est): ${money(player.restructureSavings)} immediate relief | future dead +${money(player.restructureDeadFuture)}`,
  ].join('<br />');
}

function renderCapContext() {
  document.getElementById('asOfLabel').textContent = DATA.asOf;
  document.getElementById('dataNote').textContent = DATA.dataNote;
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
    case 'release_pre': return { capChange: player.cutSavingsPre, dead2026: player.deadPre, deadFuture: player.deadFuturePre };
    case 'release_post': return { capChange: player.cutSavingsPost, dead2026: player.deadPost, deadFuture: player.deadFuturePost };
    case 'trade_pre': return { capChange: player.tradeSavingsPre, dead2026: player.tradeDeadPre, deadFuture: player.tradeDeadFuturePre };
    case 'restructure': return { capChange: player.restructureSavings, dead2026: 0, deadFuture: player.restructureDeadFuture };
    default: return { capChange: 0, dead2026: 0, deadFuture: 0 };
  }
}

function buildRecommendation(player) {
  const post = actionResult(player, 'release_post');
  const pre = actionResult(player, 'release_pre');
  const trade = actionResult(player, 'trade_pre');
  const restructure = actionResult(player, 'restructure');

  if (player.guaranteedLeft > 25000000 || pre.capChange < -10000000) return `Restructure-first profile: about ${money(restructure.capChange)} relief with future risk.`;
  if (post.capChange > 12000000 && post.deadFuture <= 12000000) return 'Post-6/1 release is best relief path while keeping future dead manageable.';
  if (trade.capChange > 8000000 && player.pos !== 'QB') return 'Trade market is preferred for cap relief + possible draft return.';
  if (restructure.capChange > 5000000) return 'Restructure is a viable cap lever if you can absorb future dead money.';
  if (pre.capChange > 5000000) return 'Pre-6/1 release is viable if replacement is already planned.';
  return 'Keep and pursue restructure or pay-adjustment options first.';
}

function filteredAndSortedPlayers() {
  const term = document.getElementById('searchInput').value.trim().toLowerCase();
  const pos = document.getElementById('positionFilter').value;
  const sortValue = document.getElementById('sortSelect').value;

  const filtered = DATA.players.filter((p) => (`${p.name} ${p.pos}`).toLowerCase().includes(term) && (pos === 'ALL' || p.pos === pos));
  const [field, dir] = sortValue.split('_');
  return filtered.sort((a, b) => field === 'name'
    ? (dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    : (dir === 'asc' ? a.capHit - b.capHit : b.capHit - a.capHit));
}

function renderRows() {
  const tbody = document.getElementById('playerRows');
  const players = filteredAndSortedPlayers();
  document.getElementById('playerCountNote').textContent = `Showing ${players.length} of ${DATA.players.length} Browns players from OTC snapshot.`;

  tbody.innerHTML = players.map((player) => {
    const action = decisions.get(player.name) || 'keep';
    const result = actionResult(player, action);
    const recommendation = recommendations.get(player.name) || '';
    return `<tr>
      <td><strong>${player.name}</strong><div class="small">${player.pos}</div></td>
      <td>${money(player.capHit)}</td>
      <td>${money(player.guaranteedLeft)}</td>
      <td class="contract-info">${contractInfo(player)}</td>
      <td><select data-player="${player.name}" class="decision">
          <option value="keep" ${action === 'keep' ? 'selected' : ''}>Keep</option>
          <option value="release_pre" ${action === 'release_pre' ? 'selected' : ''}>Release (Pre-6/1)</option>
          <option value="release_post" ${action === 'release_post' ? 'selected' : ''}>Release (Post-6/1)</option>
          <option value="trade_pre" ${action === 'trade_pre' ? 'selected' : ''}>Trade (Pre-6/1)</option>
          <option value="restructure" ${action === 'restructure' ? 'selected' : ''}>Restructure</option>
      </select></td>
      <td><div class="inline-reco"><button type="button" class="recommend-btn" data-player="${player.name}">Ask GM</button><span class="reco-text">${recommendation}</span></div></td>
      <td class="money ${result.capChange >= 0 ? 'pos' : 'neg'}">${money(result.capChange)}</td>
      <td>${money(result.dead2026)}</td>
      <td>${money(result.deadFuture)}</td>
    </tr>`;
  }).join('') || '<tr><td colspan="9">No players match this filter.</td></tr>';

  document.querySelectorAll('.decision').forEach((select) => select.addEventListener('change', (event) => {
    decisions.set(event.target.dataset.player, event.target.value);
    renderRows();
    renderSummary();
  }));

  document.querySelectorAll('.recommend-btn').forEach((button) => button.addEventListener('click', (event) => {
    const name = event.target.dataset.player;
    const player = DATA.players.find((p) => p.name === name);
    recommendations.set(name, buildRecommendation(player));
    renderRows();
  }));
}

function renderSummary() {
  let capDelta = 0, dead2026 = 0, deadFuture = 0;
  DATA.players.forEach((player) => {
    const result = actionResult(player, decisions.get(player.name) || 'keep');
    capDelta += result.capChange;
    dead2026 += result.dead2026;
    deadFuture += result.deadFuture;
  });

  const spaceAfterMoves = baselineSpace() + capDelta;
  document.getElementById('scenarioSummary').innerHTML = `
    <div class="stat"><span class="label">Total 2026 cap change</span><span class="value ${capDelta >= 0 ? 'money pos' : 'money neg'}">${money(capDelta)}</span></div>
    <div class="stat"><span class="label">Effective cap space after moves</span><span class="value ${spaceAfterMoves >= 0 ? 'money pos' : 'money neg'}">${money(spaceAfterMoves)}</span></div>
    <div class="stat"><span class="label">2026 dead cap created</span><span class="value">${money(dead2026)}</span></div>
    <div class="stat"><span class="label">Future dead cap pushed (all future years)</span><span class="value">${money(deadFuture)}</span></div>
  `;
}

function populatePositionFilter() {
  const positions = Array.from(new Set(DATA.players.map((p) => p.pos))).sort();
  document.getElementById('positionFilter').innerHTML = ['<option value="ALL">All positions</option>', ...positions.map((p) => `<option value="${p}">${p}</option>`)].join('');
}

function bindControls() {
  document.getElementById('searchInput').addEventListener('input', renderRows);
  document.getElementById('positionFilter').addEventListener('change', renderRows);
  document.getElementById('sortSelect').addEventListener('change', renderRows);
  document.getElementById('resetBtn').addEventListener('click', () => { decisions.clear(); recommendations.clear(); renderRows(); renderSummary(); });
  document.getElementById('leagueCapInput').addEventListener('input', (event) => {
    const value = Number(event.target.value);
    if (Number.isFinite(value) && value > 0) { projectedLeagueCap = value; renderCapContext(); renderSummary(); }
  });
  document.getElementById('resetCapBtn').addEventListener('click', () => { projectedLeagueCap = DATA.defaults.projectedLeagueCap; renderCapContext(); renderSummary(); });
}

function init() {
  populatePositionFilter();
  renderCapContext();
  renderRules();
  renderRows();
  renderSummary();
  bindControls();
}

init();
