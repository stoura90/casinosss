const r = Object.freeze({
  // Public routes
  root: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  resetPassword: '/reset-password',

  // Private routes
  dashboard: '/dashboard',
  leader: '/leader',
  news: '/news',
  newsItem: '/news/:id',
  aboutUs: '/about-us',
  matrixmini: '/pegasmini',
  personalTablemini: '/personal-pegasmini/:type',
  personalTableQueuemini: '/personal-pegasmini/:type/queue',
  tableQueuemini: '/pegasmini/:type/queue',
  tablemmini: '/pegasmini/:id',
  matrixs: '/matrixs',
  personalTablem: '/personal-matrixs/:type',
  personalTableQueuem: '/personal-matrixs/:type/queue',
  tableQueuem: '/matrixs/:type/queue',
  tablem: '/matrixs/:id',
  tables: '/tables',
  table: '/table/:id',
  premiumStars: '/MATRIX2',
  superStars: '/MATRIX3',
  personalPremiumTable: '/MATRIX2-table/:type',
  premiumTable: '/MATRIX2-table/:id',
  personalTable: '/personal-table/:type',
  personalTableQueue: '/personal-table/:type/queue',
  tableQueue: '/table/:type/queue',
  personalSSTable: '/MATRIX3-table/:type',
  ssTable: '/MATRIX3-table/:id',
  exchange: '/exchange/trade/ETH/BTC',
  dash: '/exchange/trade/DASH/BTC',
  usd: '/exchange/trade/USD/BTC',
  zec: '/exchange/trade/ZEC/BTC',
  wawes: '/exchange/trade/WAVES/BTC',
  starTrek: '/startrek',
  starTrekPlanets: '/startrek/planets',
  starTrekStatistic: '/startrek/statistic',
  starsUp: '/investbox',
  myinvestments: '/investbox/invests',
  investbox: '/investbox/history',
  casino: '/casino',
  rollet: '/casino/rollet',
  magicwhee: '/casino/magicwhee',
  dice: '/casino/dice',
  fool: '/casino/fool',
  slots: '/casino/slots',
  barr: '/casino/barr',
  cost: '/casino/cost',
  costs: '/casino/costs',
  obes: '/casino/obes',
  boom: '/casino/boom',
  christmasparty: '/casino/christmasparty',
  etraces: '/casino/etraces',
  blac: '/casino/blac',
  blaac: '/casino/blaac',
  blaacb: '/casino/blaacb',
  blaa: '/casino/blaa',
  lacs: '/casino/lacs',
  sas: '/casino/sas',
  sasn: '/casino/sasn',
  roll: '/casino/roll',
  rolll: '/casino/games',
  starsUpPersonTable: '/starsup/person/:level',
  starsUpPersonTableQueue: '/starsup/person/:level/queue',
  starsUpPersonBonuses: '/starsup/bonuses',
  finances: '/finances',
  team: '/team',
  smm: '/smm',
  smmsoc: '/smm/snapsocial',
  promo: '/promo',
  education: '/education',
  educationComment: '/education/create-comment',
  educationForm: '/education/send-request',
  chat: '/chat',
  reviews: '/reviews',
  settings: '/settings',
})

export default r
