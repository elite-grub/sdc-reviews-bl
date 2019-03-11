const _ = require('lodash');
const { Reviews } = require('./schema.js');
const { db } = require('./index.js');

const fakeDataAvatar = [
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/Audio2.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/alex-suprun-801039-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/alexander-krivitskiy-1284838-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/ana-francisconi-1373147-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/anastasia-vityukova-1325190-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/anastasia-vityukova-1325245-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/anastasia-vityukova-1325495-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/andrey-zvyagintsev-1195427-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/andy-lee-642320-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/benjamin-parker-736167-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/brandi-redd-1294329-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/charlie-howell-1292420-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/daniel-spase-548428-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/danijela-froki-1156474-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/davon-lee-1320524-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/don-delfin-espino-1365487-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/dwayne-legrand-1219218-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/ega-mp-1300094-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/elijah-o-donnell-1203091-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/emile-guillemot-1205599-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/emiliano-vittoriosi-1169898-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/emiliano-vittoriosi-1173149-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/gabrielle-henderson-1320013-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/gioavana-thayane-1234427-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/harishan-kobalasingam-1146816-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/hichem-dahmani-1148280-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/hichem-dahmani-1159317-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/jaime-lopes-1303988-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/jamie-sutter-1312916-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/javier-esteban-1129397-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/jc-gellidon-705193-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/joel-mott-1328102-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/jonathan-cooper-1165190-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/kouki-walim-1334503-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/laia-nunez-1155771-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/lindie-wilton-1180819-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/loren-joseph-279441-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/luz-fuertes-1191512-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/marco-perretta-1301472-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/meg-1350574-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/mihai-stefan-1360934-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/minh-ng-c-1132596-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/mohammad-ali-jafarian-1248546-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/mohammad-khaksarmadani-1150015-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/monika-rams-1257243-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/nicolas-horn-689011-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/radu-florin-1212129-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/radu-florin-1336426-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/rawpixel-1137686-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/rokas-niparavicius-349604-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/sara-kauten-61305-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/sazzad-aryan-1149273-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/uchral-sanjaadorj-1313450-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/vladislav-nikonov-1388982-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-avatar/yuliya-kosolapova-1325107-unsplash.jpg',
];

const fakeDataFoodPictures = [
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/alex-munsell-18753-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/alison-marras-323017-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/amirali-mirhashemian-1271779-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/amirali-mirhashemian-1313199-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/amirali-mirhashemian-1354154-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/anastasia-zhenina-84104-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/armando-ascorve-morales-155473-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/brenan-greene-229562-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/brenda-godinez-227275-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/brenda-godinez-228182-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/brooke-lark-289769-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/brooke-lark-296282-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/brooke-lark-331977-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/bruno-thethe-1283664-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/dan-gold-105700-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/dan-gold-298710-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/daria-nepriakhina-340852-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/dragne-marius-117368-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/eaters-collective-132773-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/eaters-collective-172258-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/eaters-collective-197218-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/edward-guk-357344-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/elli-o-33653-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/hanny-naibaho-313771-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/hisu-lee-110005-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/jill-heyer-189419-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/jimi-filipovski-189721-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/jimmy-chang-1247468-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/joanna-stolowicz-1169157-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/joseph-gonzalez-228027-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/kazuend-33925-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/melissa-walker-horn-1137106-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/monika-grabkowska-323579-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/prudence-earl-600279-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/rawpixel-1168550-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/sambazon-63913-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/stil-336188-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/thanos-pal-598887-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/toa-heftiba-243296-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/toa-heftiba-250940-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/toa-heftiba-250941-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/vernon-raineil-cenzon-1236186-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/whitney-wright-286731-unsplash.jpg',
  'https://s3-us-west-1.amazonaws.com/elite-grub-food/yoori-koo-51884-unsplash.jpg',
];

const fakeDataName = [
'Spark P.', 'Kenneth T.', 'Winnie F.', 'Brian L.',
'Talan P.', 'Coleman A.', 'Kianna B.', 'Casey B.',
'Marcos C.', 'Charles H.', 'Vaughn C.', 'Gunnar O.',
'Maximus S.', 'David O.', 'Cade N.', 'Kathryn R.',
'Mina S.', 'Gideon Y.', 'Hayley F.', 'Aiden A.',
'Brisa D.', 'Araceli P.', 'Ryann B.', 'Rafael E.',
'Jay H.', 'Molly C.', 'Myles S.', 'Nickolas O.',
'Simone A.', 'Nick F.', 'Eden A.', 'Michelle O.',
'Dania F.', 'Ariana H.', 'Rhett P.', 'Raul B.',
'Elias V.', 'Larissa H.', 'Jan H.', 'Simone C.',
'Messiah H.', 'Jama W.', 'Genevieve L.', 'Neveah L.',
'Adeline J.', 'Jaden M.', 'Kristian L.', 'Turner W.',
'Jamiya Z.', 'Marcus P.', 'Carolyn K.', 'Yurem N.',
'Graham P.', 'Jaxon J.', 'Rylie R.',
'Colt N.', 'Jazmyn C.', 'Johan B.', 'Anna G.'
];

const fakeDataLocation = [
'San Francisco, CA', 'Los Angeles, CA', 'Fremont, CA', 'San Ramon, CA',
'Milpitas, CA', 'Hayward, CA', 'Oakland, CA', 'San Jose, CA',
'Berkeley, CA', 'Palo Alto, CA', 'Mountain View, CA', 'Sunnyvale, CA',
'Pleasanton, CA', 'Redwood City, CA', 'Concord, CA', 'Livermore, CA',
'Los Altos, CA', 'Santa Rosa, CA', 'Vallejo, CA', 'Cupertino, CA',
'Daly City, CA', 'San Leandro, CA', 'Antioch, CA', 'Walnut Creek, CA',
'Los Gatos, CA', 'Saratoga, CA', 'Menlo Park, CA', 'Burlingame, CA',
'South San Francisco, CA', 'Emeryville, CA', 'Danville, CA',
'Pittsburg, CA', 'Moraga, CA', 'Albany, CA', 'Hillsborough, CA',
'Foster City, CA', 'San Rafael, CA', 'Orinda, CA', 'Dublin, CA',
'East Palo Alto, CA', 'Atherton, CA', 'Fairfield, CA', 'Tiburon, CA',
'Santa Clara, CA', 'El Cerrito, CA', 'San Mateo, CA', 'Gilroy, CA',
'San Pablo, CA', 'Piedmont, CA', 'Half Moon Bay, CA', 'Belmon, CA',
'Sausalito, CA'
];

const fakeDataReview = [
  'Biodiesel man bun bitters, offal bicycle rights gentrify live-edge flexitarian blog plaid affogato food truck. Vegan coloring book jianbing locavore put a bird on it gastropub master cleanse bespoke single-origin coffee swag raw denim mumblecore helvetica green juice crucifix. Bushwick kitsch fashion axe, meggings leggings semiotics organic mixtape tote bag schlitz beard you probably haven\'t heard of them chambray lumbersexual forage. Viral prism man braid offal.',
  'Truffaut cloud bread kitsch cliche prism. Cardigan taiyaki cliche hammock narwhal mumblecore vinyl yr. Sustainable bespoke shabby chic stumptown normcore cloud bread hell of flannel gastropub scenester cray palo santo copper mug. \nHelvetica subway tile messenger bag mixtape. Chartreuse before they sold out pok pok, hot chicken viral tilde migas meh. Man braid copper mug hot chicken plaid godard you probably haven\'t heard of them enamel pin four dollar toast unicorn hoodie raw denim pug vaporware 8-bit hashtag. \nStumptown cray next level distillery meggings 90\'s, polaroid shabby chic whatever taxidermy viral 8-bit twee.',
  'Keytar fam organic farm-to-table occupy man braid. Next level four loko thundercats crucifix messenger bag roof party, knausgaard taxidermy banjo raw denim retro cornhole hoodie. PBR&B af kogi cornhole. Jean shorts thundercats next level disrupt knausgaard portland irony iceland tote bag godard taxidermy stumptown.',
  'Hoodie church-key etsy, artisan wolf paleo chia aesthetic tilde narwhal craft beer. Copper mug cliche gluten-free squid vegan polaroid, craft beer brooklyn four loko mlkshk marfa fam. Viral banh mi church-key portland lo-fi. \nUmami vaporware vexillologist pitchfork plaid copper mug messenger bag jean shorts tousled squid.',
  'Narwhal beard copper mug, af taiyaki echo park taxidermy vexillologist shoreditch. Tbh swag scenester, lumbersexual poutine before they sold out crucifix pug viral schlitz. Affogato actually celiac lo-fi squid bushwick single-origin coffee taiyaki truffaut, tilde forage unicorn 3 wolf moon gastropub. Photo booth lyft succulents, pork belly glossier scenester af polaroid celiac etsy chambray lumbersexual.',
  'Humblebrag beard vaporware sartorial meh woke jianbing selfies semiotics live-edge neutra +1. Godard cray try-hard roof party. \nThundercats swag coloring book tilde, truffaut poutine kombucha PBR&B plaid flexitarian mixtape meditation shabby chic meh. \nLeggings mumblecore health goth brooklyn pok pok palo santo kogi. Seitan craft beer actually mixtape tacos woke. \nHammock roof party vice, keytar farm-to-table synth cornhole readymade literally prism DIY intelligentsia. Wolf aesthetic pitchfork blog activated charcoal shaman.',
  'Tote bag bespoke fam, yuccie fashion axe church-key chia freegan semiotics letterpress vice offal. \nLiterally chia chicharrones 8-bit umami four dollar toast vegan farm-to-table kitsch crucifix vape twee kinfolk taiyaki meditation. Meditation readymade etsy cliche. \nMan bun fingerstache meh pitchfork ennui roof party 90\'s artisan biodiesel coloring book chillwave 3 wolf moon schlitz. Waistcoat pop-up vice lomo lo-fi bespoke portland swag seitan. \nGastropub pok pok 3 wolf moon, occupy meditation woke thundercats fingerstache stumptown artisan wayfarers twee. Cardigan edison bulb bespoke fanny pack chambray health goth, schlitz mlkshk stumptown la croix.',
  'Organic squid cray microdosing everyday carry paleo. Kitsch heirloom kale chips taxidermy chillwave tacos stumptown, direct trade next level unicorn. \nHeirloom enamel pin tote bag literally, health goth brooklyn banjo vape sriracha selfies hexagon. Etsy adaptogen cliche cloud bread godard literally dreamcatcher wayfarers chambray tbh hoodie cold-pressed seitan roof party. \nDistillery palo santo prism messenger bag. Cold-pressed trust fund YOLO, woke ugh farm-to-table vexillologist tote bag vape craft beer. Semiotics cardigan heirloom hell of tumblr poke affogato locavore meh actually.',
  'Authentic blue bottle gentrify selvage cronut seitan marfa, keytar chicharrones kinfolk locavore glossier before they sold out brooklyn scenester. Fixie godard williamsburg organic adaptogen scenester hell of, normcore raclette schlitz church-key mlkshk tbh snackwave. Hashtag chicharrones etsy post-ironic disrupt listicle. Hashtag lumbersexual migas humblebrag snackwave cray. Offal freegan banh mi franzen seitan godard. \nSingle-origin coffee poke food truck try-hard.',
  'You probably haven\'t heard of them church-key pug, 8-bit keytar kitsch portland photo booth. Pug PBR&B iceland, chambray selvage gastropub blog vice. Hammock palo santo hella retro. Cardigan vexillologist street art chartreuse scenester gluten-free.',
  'Austin hot chicken wayfarers intelligentsia. Skateboard celiac direct trade, thundercats offal art party cliche. Roof party hashtag shaman kale chips pickled fanny pack vexillologist tumblr truffaut tbh asymmetrical. Mustache pickled bitters godard mumblecore, kale chips seitan vegan chia adaptogen sartorial letterpress scenester tote bag lyft.',
  'Pug vinyl seitan, tote bag unicorn activated charcoal tattooed affogato. Microdosing YOLO man braid next level craft beer paleo. Brunch DIY tumblr, brooklyn tofu selfies authentic listicle vape everyday carry quinoa gastropub intelligentsia roof party bespoke. Green juice bespoke occupy, pinterest vexillologist pop-up fashion axe.',
  'DIY hella gluten-free asymmetrical shabby chic ethical 8-bit vape trust fund swag humblebrag. Put a bird on it selvage deep v disrupt vice cornhole knausgaard hella you probably haven\'t heard of them synth retro. \nSmall batch schlitz mumblecore ramps vice you probably haven\'t heard of them gluten-free lo-fi microdosing readymade mlkshk hoodie. Echo park locavore bitters hella 3 wolf moon yr.',
  'Cliche la croix normcore cloud bread irony portland. Blog unicorn umami gentrify street art green juice irony, post-ironic single-origin coffee trust fund messenger bag vaporware venmo crucifix. Etsy fingerstache lyft lo-fi, adaptogen brunch hexagon. \nActivated charcoal cornhole selfies raclette brunch squid try-hard everyday carry ennui knausgaard gochujang.',
  'Chia mixtape whatever williamsburg, hoodie pickled polaroid lo-fi iceland. DIY occupy sustainable trust fund. \nTousled lyft live-edge tumeric PBR&B irony man bun hell of copper mug four loko wayfarers paleo schlitz migas. Fingerstache keffiyeh pour-over pinterest chicharrones kickstarter, vice fixie meh hexagon venmo. Lyft meditation try-hard, gochujang williamsburg migas wolf cardigan chillwave hot chicken hashtag activated charcoal. Ugh narwhal cliche VHS, wolf ethical franzen chicharrones everyday carry kitsch letterpress paleo 8-bit pabst.',
  'Unicorn deep v pinterest fixie jean shorts tousled. \nSingle-origin coffee intelligentsia taxidermy locavore. Bitters you probably haven\'t heard of them portland 8-bit pickled iPhone lyft vape enamel pin. +1 seitan chicharrones umami palo santo organic sartorial asymmetrical man bun keytar helvetica aesthetic ethical poutine actually. Kickstarter poke church-key williamsburg locavore small batch. Literally occupy gentrify enamel pin tacos kitsch. Scenester 90\'s skateboard la croix.',
  'Vape crucifix dreamcatcher jianbing gochujang. Letterpress hella tousled, artisan pabst occupy heirloom. Affogato chia ugh plaid semiotics chartreuse. Mlkshk ugh master cleanse forage slow-carb, tote bag venmo banh mi affogato pok pok quinoa. Flexitarian cloud bread tilde, occupy next level migas schlitz fixie la croix farm-to-table. Unicorn coloring book humblebrag, tousled hashtag cardigan seitan knausgaard poutine four dollar toast semiotics shoreditch tilde pug subway tile. Salvia man bun pabst, normcore hot chicken sustainable umami kickstarter selfies hashtag butcher mustache lomo.',
  'Vaporware enamel pin gastropub, blue bottle cornhole blog chicharrones sriracha chartreuse ugh. Etsy letterpress mumblecore ennui synth. Ennui taiyaki vexillologist direct trade wolf kogi tbh vinyl ramps. Tbh skateboard ennui tote bag echo park kickstarter pabst lyft VHS tacos next level. Photo booth vape semiotics, austin venmo enamel pin hella.',
  'Yr tote bag vinyl freegan selfies chambray kale chips tousled sartorial next level. Direct trade kinfolk ennui lomo kale chips hot chicken yuccie food truck tousled godard tumeric chicharrones scenester venmo affogato. Kickstarter occupy fixie, celiac knausgaard cred health goth stumptown leggings messenger bag cornhole tumblr. Cred vice air plant hexagon bushwick waistcoat chia.',
  'Plaid kombucha twee health goth bitters chambray pop-up cronut +1 deep v readymade taiyaki cold-pressed. Mixtape mumblecore keytar squid listicle pour-over bicycle rights tbh. Vaporware humblebrag lumbersexual bushwick. Flannel chia yr, skateboard trust fund fixie artisan.',
  'Dreamcatcher pitchfork air plant keffiyeh lo-fi ethical man bun brunch pork belly PBR&B. Cray gastropub post-ironic, whatever pabst wolf paleo mixtape. \nTaxidermy freegan squid pickled photo booth artisan hot chicken glossier bitters marfa craft beer microdosing XOXO tumeric. Four loko gluten-free health goth synth poke adaptogen aesthetic distillery craft beer church-key. \nYuccie roof party fingerstache tumblr XOXO leggings, irony synth.',
];

const fakeDataThoughts = [
  'Useful',
  'Cool',
  'Funny',
];

const fakeDataTitle = [
  'Business Manager',
  'Owner',
  'Manager',
  'Partner',
  'General Manager',
];

// Helper function for random inclusive number
const getRandomInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const peopleRecommendedReviews = () => {
  return _.sample(fakeDataName);
}

const fakeAvatar = () => {
  return _.sample(fakeDataAvatar);
};

const fakeName = () => {
  return _.sample(fakeDataName);
};

const fakeLocation = () => {
  return _.sample(fakeDataLocation);
};

const fakeFriends = () => {
  return getRandomInclusive(5, 300);
};

const fakeOtherReviews = () => {
  return getRandomInclusive(1, 300);
};

const fakeOtherPhotos = () => {
  return getRandomInclusive(1, 100);
};

const fakeIsElite = () => {
  return _.sample([true, false]);
};

const fakeElite = () => {
  return getRandomInclusive(16, 19);
};

const fakeStars = () => {
  let stars = [
    5, 5, 5, 5, 5,
    4.5, 4.5, 4.5, 4.5,
    4, 4, 4, 4, 4, 4, 4, 4, 4,
    3.5, 3.5,
    3, 3,
    2.5,
    2,
    1.5,
    1
  ]
  return _.sample(stars);
};

const fakeLanguages = () => {
  let languagesArr = [
    'Japanese',
    'Portugese',
    'Chinese',
    'Polish',
    'Spanish',
    'Korean',
    'French',
    'Greek',
    'Filipino',
    'Malaysian'
  ];
  return `${_.sample(languagesArr)} (${getRandomInclusive(1, 28)})`
}

const fakeDate = () => {
  let month = getRandomInclusive(1, 12);
  let day = getRandomInclusive(1, 29);
  let year = getRandomInclusive(2018, 2019);
  return `${month}/${day}/${year}`;
};

const fakeDidCheckIn = () => {
  return _.sample([true, false]);
};

const fakeCheckInStatus = () => {
  return getRandomInclusive(1, 3);
};

const fakeReview = () => {
  return _.sample(fakeDataReview);
};

const fakeHasPictures = () => {
  return _.sample([true, false]);
};

const fakeFoodPictures = () => {
  return _.sample(fakeDataFoodPictures);
};

const fakeWasThisReview = () => {
  return _.sample([true, false]);
};

const fakePeerVotedAvatar = () => {
  return _.sample(fakeDataAvatar);
};

const fakePeerVotedName = () => {
  return _.sample(fakeDataName);
};

const fakePeerVotedThoughts = () => {
  return _.sample(fakeDataThoughts);
}

const fakeUseful = () => {
  return getRandomInclusive(0, 3);
};

const fakeFunny = () => {
  return getRandomInclusive(0, 3);
};

const fakeCool = () => {
  return getRandomInclusive(0, 3);
};

const fakeCommentFromOwner = () => {
  let commentBooArr = [
    false, false, false, false, false,
    true
  ];
  return _.sample(commentBooArr);
};

const fakeOwnerReviewAvatar = () => {
  return _.sample(fakeDataAvatar);
};

const fakeOwnerReviewName = () => {
  return _.sample(fakeDataName);
};

const fakeOwnerReviewTitle = () => {
  return _.sample(fakeDataTitle);
};

const fakeOwnerReviewDate = () => {
  let month = getRandomInclusive(1, 12);
  let day = getRandomInclusive(1, 29);
  let year = getRandomInclusive(2018, 2019);
  return `${month}/${day}/${year}`;
};

const fakeOwnerReview = () => {
  return _.sample(fakeDataReview);
};

const fakeRestaurantName = () => {
  let fakeNameArr = [
    'Fog Harbor Fish House',
    'E & J',
    'Super Duper',
    'Marufuku Ramen',
    'Farmhouse',
    'Mensho Tokyo',
    'Tacorea',
    'Kitchen Story',
    'Box Kitchen',
    'Golden Boy Pizza',
    'Brenda\'s French Soul Food',
    'Burma Superstar',
    'The Front Porch',
    'The Bird',
    'Chubby Noodle',
    'Palm House',
    'SoMa StrEat',
    'HRD',
    'Fondue Cowboy',
    'Straw',
    'Liholiho Yacht Club',
    'Tataki',
    'Thanh Long',
    'Zero Zero',
    'Barrel Head BrewHouse',
    'Sushirrito',
    'Hog Island Oyster Co',
    'Dumpling Time'
  ];
  return _.sample(fakeNameArr);
}

module.exports.save = () => {
  for (var i = 1; i < 101; i++) {
    const allReviews = new Reviews({
      id: i,
      user: {
        avatar: fakeAvatar(),
        name: fakeName(),
        location: fakeLocation(),
        friends: fakeFriends(),
        otherReviews: fakeOtherReviews(),
        photos: fakeOtherPhotos(),
        isElite: fakeIsElite(),
        elite: fakeElite(),
      },
      stars: fakeStars(),
      date: fakeDate(),
      didCheckIn: fakeDidCheckIn(),
      checkInStatus: fakeCheckInStatus(),
      review: fakeReview(),
      hasPictures: fakeHasPictures(),
      pictures: fakeFoodPictures(),
      wasThisReview: fakeWasThisReview(),
      peerVoted: {
        avatar: fakePeerVotedAvatar(),
        name: fakePeerVotedName(),
        thoughts: fakePeerVotedThoughts(),
      },
      thoughts: {
        useful: fakeUseful(),
        funny: fakeFunny(),
        cool: fakeCool(),
      },
      commentFromOwner: fakeCommentFromOwner(),
      ownerReview: {
        avatar: fakeOwnerReviewAvatar(),
        name: fakeOwnerReviewName(),
        title: fakeOwnerReviewTitle(),
        date: fakeOwnerReviewDate(),
        review: fakeOwnerReview(),
      },
      languages: fakeLanguages(),
      restaurantName: fakeRestaurantName(),
      nameAndOthers: peopleRecommendedReviews(),
      collateral: {
        emptyProfile: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/empty_profile.png',
        cameraIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/camera.png',
        complimentIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/compliment.png',
        coolIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/cool.png',
        embedReviewIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/embed-review.png',
        emptyStarsIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/empty-stars.png',
        fiveStarsIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/five-stars.png',
        followIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/follow.png',
        fourStarsIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/four-stars.png',
        friendsIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/friends.png',
        funnyIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/funny.png',
        morePagesFooter: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/more-pages.png',
        searchIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/search.png',
        shareReviewIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/share-review.png',
        threeStarsIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/three-stars.png',
        usefulIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/useful.png',
        reviewsStarsIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/reviews-stars.png',
        sendMessageIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/send-message.png',
        footerSiteMapIcon: 'https://s3-us-west-1.amazonaws.com/elite-grub-collateral/footer-site-map.png',
      }
    });
    allReviews.save(err => {
      return err ?
      console.log('error: failed to save allReviews') :
      console.log('success: saved allReviews');
    });
  }
};