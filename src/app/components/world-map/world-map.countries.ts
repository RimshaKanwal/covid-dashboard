export function getCountryId(name: string): string {
  let id: string = '';
  name = filterString(name);
  if (name == filterString('Antigua and Barbuda')) {
			id = '01';
		} else if (name == filterString('Bahamas')) {
			id = '02';
		} else if (name == filterString('Barbados')) {
			id = '03';
		} else if (name == filterString('Belize')) {
			id = '04';
		} else if (name == filterString('Canada')) {
			id = '05';
		} else if (name == filterString('Costa Rica')) {
			id = '06';
		} else if (name == filterString('Cuba')) {
			id = '07';
		} else if (name == filterString('Dominica')) {
			id = '08';
		} else if (name == filterString('Dominican Republic')) {
			id = '09';
		} else if (name == filterString('El Salvador')) {
			id = '10';
		} else if (name == filterString('Grenada')) {
			id = '11';
		} else if (name == filterString('Guatemala')) {
			id = '12';
		} else if (name == filterString('Haiti')) {
			id = '13';
		} else if (name == filterString('Honduras')) {
			id = '14';
		} else if (name == filterString('Jamaica')) {
			id = '15';
		} else if (name == filterString('Mexico')) {
			id = '16';
		} else if (name == filterString('Nicaragua')) {
			id = '17';
		} else if (name == filterString('Panama')) {
			id = '18';
		} else if (name == filterString('St. Kitts & Nevis')) {
			id = '19';
		} else if (name == filterString('St. Lucia')) {
			id = '20';
		} else if (name == filterString('St. Vincent & the Grenadines')) {
			id = '21';
		} else if (name == filterString('Trinidad-and-Tobago')) {
			id = '22';
		} else if (name == filterString('USA')) {
			id = '23';
		} else if (name == filterString('Greenland')) {
			id = '24';
		} else if (name == filterString('Argentina')) {
			id = '25';
		} else if (name == filterString('Bolivia')) {
			id = '26';
		} else if (name == filterString('Brazil')) {
			id = '27';
		} else if (name == filterString('Chile')) {
			id = '28';
		} else if (name == filterString('Colombia')) {
			id = '29';
		} else if (name == filterString('Ecuador')) {
			id = '30';
		} else if (name == filterString('Falkland Islands')) {
			id = '31';
		} else if (name == filterString('French Guiana')) {
			id = '32';
		} else if (name == filterString('Guyana')) {
			id = '33';
		} else if (name == filterString('Paraguay')) {
			id = '34';
		} else if (name == filterString('Peru')) {
			id = '35';
		} else if (name == filterString('Suriname')) {
			id = '36';
		} else if (name == filterString('Uruguay')) {
			id = '37';
		} else if (name == filterString('Venezuela)')) {
			id = '38';
		} else if (name == filterString('Algeria')) {
			id = '39';
		} else if (name == filterString('Angola')) {
			id = '40';
		} else if (name == filterString('Benin')) {
			id = '41';
		} else if (name == filterString('Botswana')) {
			id = '42';
		} else if (name == filterString('Burkina Faso')) {
			id = '43';
		} else if (name == filterString('Burundi')) {
			id = '44';
		} else if (name == filterString('Cameroon')) {
			id = '45';
		} else if (name == filterString('Cabo Verde')) {
			id = '46';
		} else if (name == filterString('Africa')) {
			id = '47';
		} else if (name == filterString('Chad')) {
			id = '48';
		} else if (name == filterString('Comoros')) {
			id = '49';
		} else if (name == filterString('Ivory Coast')) {
			id = '50';
		} else if (name == filterString('Congo')) {
			id = '51';
		} else if (name == filterString('Djibouti')) {
			id = '52';
		} else if (name == filterString('Egypt')) {
			id = '53';
		} else if (name == filterString('Equatorial Guinea')) {
			id = '54';
		} else if (name == filterString('Eritrea')) {
			id = '55';
		} else if (name == filterString('Ethiopia')) {
			id = '56';
		} else if (name == filterString('Gabon')) {
			id = '57';
		} else if (name == filterString('Ghana')) {
			id = '58';
		} else if (name == filterString('Guinea')) {
			id = '59';
		} else if (name == filterString('Guinea-Bissau')) {
			id = '60';
		} else if (name == filterString('Kenya')) {
			id = '61';
		} else if (name == filterString('Lesotho')) {
			id = '62';
		} else if (name == filterString('Liberia')) {
			id = '63';
		} else if (name == filterString('Libya')) {
			id = '64';
		} else if (name == filterString('Madagascar')) {
			id = '65';
		} else if (name == filterString('Malawi')) {
			id = '66';
		} else if (name == filterString('Mali')) {
			id = '67';
		} else if (name == filterString('Mauritania')) {
			id = '68';
		} else if (name == filterString('Morocco')) {
			id = '69';
		} else if (name == filterString('Mozambique')) {
			id = '70';
		} else if (name == filterString('Namibia')) {
			id = '71';
		} else if (name == filterString('Niger')) {
			id = '72';
		} else if (name == filterString('Nigeria')) {
			id = '73';
		} else if (name == filterString('Rwanda')) {
			id = '74';
		} else if (name == filterString('Sao Tome and Principe')) {
			id = '75';
		} else if (name == filterString('Senegal')) {
			id = '76';
		} else if (name == filterString('Seychelles')) {
			id = '77';
		} else if (name == filterString('Sierra Leone')) {
			id = '78';
		} else if (name == filterString('Somalia')) {
			id = '79';
		} else if (name == filterString('South Africa')) {
			id = '80';
		} else if (name == filterString('Sudan')) {
			id = '81';
		} else if (name == filterString('Swaziland')) {
			id = '82';
		} else if (name == filterString('Tanzania')) {
			id = '83';
		} else if (name == filterString('Togo')) {
			id = '84';
		} else if (name == filterString('Tunisia')) {
			id = '85';
		} else if (name == filterString('Uganda')) {
			id = '86';
		} else if (name == filterString('Western Sahara')) {
			id = '87';
		} else if (name == filterString('Zambia')) {
			id = '88';
		} else if (name == filterString('Zimbabwe')) {
			id = '89';
		} else if (name == filterString('Gambia')) {
			id = '90';
		} else if (name == filterString('Congo (Kinshasa)')) {
			id = '91';
		} else if (name == filterString('Mauritius')) {
			id = '92';
		} else if (name == filterString('Afghanistan')) {
			id = '93';
		} else if (name == filterString('Armenia')) {
			id = '94';
		} else if (name == filterString('Azerbaijan')) {
			id = '95';
		} else if (name == filterString('Bangladesh')) {
			id = '96';
		} else if (name == filterString('Bhutan')) {
			id = '97';
		} else if (name == filterString('Brunei')) {
			id = '98';
		} else if (name == filterString('Myanmar')) {
			id = '99';
		} else if (name == filterString('Cambodia')) {
			id = '100';
		} else if (name == filterString('China')) {
			id = '101';
		} else if (name == filterString('Timor-Leste')) {
			id = '102';
		} else if (name == filterString('Georgia')) {
			id = '103';
		} else if (name == filterString('India')) {
			id = '104';
		} else if (name == filterString('Indonesia')) {
			id = '105';
		} else if (name == filterString('Iran')) {
			id = '106';
		} else if (name == filterString('Japan')) {
			id = '107';
		} else if (name == filterString('Kazakhstan')) {
			id = '108';
		} else if (name == filterString('N-Korea')) {
			id = '109';
		} else if (name == filterString('S-Korea')) {
			id = '110';
		} else if (name == filterString('Kyrgyzstan')) {
			id = '111';
		} else if (name == filterString('Laos')) {
			id = '112';
		} else if (name == filterString('Malaysia')) {
			id = '113';
		} else if (name == filterString('Mongolia')) {
			id = '114';
		} else if (name == filterString('Nepal')) {
			id = '115';
		} else if (name == filterString('Pakistan')) {
			id = '116';
		} else if (name == filterString('Philippines')) {
			id = '117';
		} else if (name == filterString('Russia')) {
			id = '118';
		} else if (name == filterString('Singapore')) {
			id = '119';
		} else if (name == filterString('Sri Lanka')) {
			id = '120';
		} else if (name == filterString('Tajikistan')) {
			id = '121';
		} else if (name == filterString('Thailand')) {
			id = '122';
		} else if (name == filterString('Turkmenistan')) {
			id = '123';
		} else if (name == filterString('Uzbekistan')) {
			id = '124';
		} else if (name == filterString('Vietnam')) {
			id = '125';
		} else if (name == filterString('Albania')) {
			id = '129';
		} else if (name == filterString('Andorra')) {
			id = '130';
		} else if (name == filterString('Austria')) {
			id = '131';
		} else if (name == filterString('Belarus')) {
			id = '132';
		} else if (name == filterString('Belgium')) {
			id = '133';
		} else if (name == filterString('Bosnia and Herzegovina')) {
			id = '134';
		} else if (name == filterString('Bulgaria')) {
			id = '135';
		} else if (name == filterString('Croatia')) {
			id = '136';
		} else if (name == filterString('Czechia')) {
			id = '137';
		} else if (name == filterString('Denmark')) {
			id = '138';
		} else if (name == filterString('Estonia')) {
			id = '139';
		} else if (name == filterString('Finland')) {
			id = '140';
		} else if (name == filterString('France')) {
			id = '141';
		} else if (name == filterString('Germany')) {
			id = '142';
		} else if (name == filterString('Greece')) {
			id = '143';
		} else if (name == filterString('Hungary')) {
			id = '144';
		} else if (name == filterString('Iceland')) {
			id = '145';
		} else if (name == filterString('Ireland')) {
			id = '146';
		} else if (name == filterString('Italy')) {
			id = '147';
		} else if (name == filterString('Latvia')) {
			id = '148';
		} else if (name == filterString('Liechtenstein')) {
			id = '149';
		} else if (name == filterString('Lithuania')) {
			id = '150';
		} else if (name == filterString('Luxembourg')) {
			id = '151';
		} else if (name == filterString('Macedonia')) {
			id = '152';
		} else if (name == filterString('Malta')) {
			id = '153';
		} else if (name == filterString('Moldova')) {
			id = '154';
		} else if (name == filterString('Monaco')) {
			id = '155';
		} else if (name == filterString('Montenegro')) {
			id = '156';
		} else if (name == filterString('Netherlands')) {
			id = '157';
		} else if (name == filterString('Norway')) {
			id = '158';
		} else if (name == filterString('Poland')) {
			id = '159';
		} else if (name == filterString('Portugal')) {
			id = '160';
		} else if (name == filterString('Romania')) {
			id = '161';
		} else if (name == filterString('San Marino')) {
			id = '162';
		} else if (name == filterString('Serbia')) {
			id = '163';
		} else if (name == filterString('Slovakia')) {
			id = '164';
		} else if (name == filterString('Slovenia')) {
			id = '165';
		} else if (name == filterString('Spain')) {
			id = '166';
		} else if (name == filterString('Sweden')) {
			id = '167';
		} else if (name == filterString('Switzerland')) {
			id = '168';
		} else if (name == filterString('Ukraine')) {
			id = '169';
		} else if (name == filterString('UK')) {
			id = '170';
		} else if (name == filterString('Vatican City ')) {
			id = '171';
		} else if (name == filterString('Cyprus')) {
			id = '172';
		} else if (name == filterString('Turkey')) {
			id = '173';
		} else if (name == filterString('Australia')) {
			id = '175';
		} else if (name == filterString('Fiji')) {
			id = '176';
		} else if (name == filterString('Kiribati')) {
			id = '177';
		} else if (name == filterString('Marshall Islands')) {
			id = '178';
		} else if (name == filterString('Micronesia')) {
			id = '179';
		} else if (name == filterString('Nauru')) {
			id = '180';
		} else if (name == filterString('New Zealand')) {
			id = '181';
		} else if (name == filterString('Republic of Palau')) {
			id = '182';
		} else if (name == filterString('Papua New Guinea')) {
			id = '183';
		} else if (name == filterString('Samoa')) {
			id = '184';
		} else if (name == filterString('Solomon Islands')) {
			id = '185';
		} else if (name == filterString('Tonga')) {
			id = '186';
		} else if (name == filterString('Tuvalu')) {
			id = '187';
		} else if (name == filterString('Vanuatu')) {
			id = '188';
		} else if (name == filterString('New Caledonia')) {
			id = '189';
		} else if (name == filterString('Bahrain')) {
			id = '190';
		} else if (name == filterString('Iraq')) {
			id = '191';
		} else if (name == filterString('Israel')) {
			id = '192';
		} else if (name == filterString('Jordan')) {
			id = '193';
		} else if (name == filterString('Kuwait')) {
			id = '194';
		} else if (name == filterString('Lebanon')) {
			id = '195';
		} else if (name == filterString('Oman')) {
			id = '196';
		} else if (name == filterString('Qatar')) {
			id = '197';
		} else if (name == filterString('Saudi Arabia')) {
			id = '198';
		} else if (name == filterString('Syria')) {
			id = '199';
		} else if (name == filterString('UAE')) {
			id = '200';
		} else if (name == filterString('Yemen')) {
			id = '201';
		} else if (name == filterString('Puerto Rico')) {
			id = '202';
		} else if (name == filterString('Cayman Islands')) {
			id = '203';
		} else if (name == filterString('South Sudan')) {
			id = '204';
		} else if (name == filterString('Kosovo')) {
			id = '205';
		} else if (name == filterString('Aruba')) {
			id = '206';
		} else if (name == filterString('Anguilla')) {
			id = '207';
		} else if (name == filterString('American Samoa')) {
			id = '208';
		} else if (name == filterString('Bermuda')) {
			id = '209';
		} else if (name == filterString('BES Islands')) {
			id = '210';
		} else if (name == filterString('Cocos (Keeling) Islands')) {
			id = '211';
		} else if (name == filterString('Cook Islands')) {
			id = '212';
		} else if (name == filterString('Christmas Island')) {
			id = '213';
		} else if (name == filterString('Curacao')) {
			id = '214';
		} else if (name == filterString('Faroe Islands')) {
			id = '215';
		} else if (name == filterString('French Polynesia')) {
			id = '216';
		} else if (name == filterString('Gibraltar')) {
			id = '217';
		} else if (name == filterString('Guam')) {
			id = '218';
		} else if (name == filterString('Guadeloupe')) {
			id = '219';
		} else if (name == filterString('Gaza Strip')) {
			id = '220';
		} else if (name == filterString('Guernsey')) {
			id = '221';
		} else if (name == filterString('Isle of Man')) {
			id = '222';
		} else if (name == filterString('Jersey')) {
			id = '223';
		} else if (name == filterString('Kingman Reef')) {
			id = '224';
		} else if (name == filterString('Maldives')) {
			id = '225';
		} else if (name == filterString('Montserrat')) {
			id = '226';
		} else if (name == filterString('Mayotte')) {
			id = '227';
		} else if (name == filterString('Martinique')) {
			id = '228';
		} else if (name == filterString('Norfolk Island')) {
			id = '229';
		} else if (name == filterString('Northern Mariana Islands')) {
			id = '230';
		} else if (name == filterString('Niue')) {
			id = '231';
		} else if (name == filterString('Pitcairn Islands')) {
			id = '232';
		} else if (name == filterString('La Réunion')) {
			id = '233';
		} else if (name == filterString('Sint Maarten')) {
			id = '234';
		} else if (name == filterString('Saint Helena')) {
			id = '235';
		} else if (name == filterString('Saint Pierre and Miquelon')) {
			id = '236';
		} else if (name == filterString('Turks and Caicos Islands')) {
			id = '237';
		} else if (name == filterString('Virgin Islands')) {
			id = '238';
		} else if (name == filterString('Virgin Islands')) {
			id = '239';
		} else if (name == filterString('Palestine')) {
			id = '240';
		} else if (name == filterString('Wallis and Futuna')) {
			id = '241';
		} else if (name == filterString('Cape Town')) {
			id = '242';
		} else if (name == filterString('La Paz')) {
			id = '243';
		} else if (name == filterString('Abkhazia')) {
			id = '244';
		} else if (name == filterString('Netherlands Antilles')) {
			id = '245';
		} else if (name == filterString('Northern Cyprus')) {
			id = '246';
		} else if (name == filterString('Svalbard')) {
			id = '247';
		} else if (name == filterString('Tokelau')) {
			id = '248';
    }
  return id;
}

export function filterString(name: string): string {
  return name.replace(/[^A-Z0-9]/ig, "");
}