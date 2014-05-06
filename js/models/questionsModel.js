Quiz.Questions = DS.Model.extend(Ember.Validations.Mixin,{
	question: DS.attr('string'),
	expected: DS.attr('string'),
	uservalue: DS.attr('string'),
	options:DS.hasMany('option',{ async: true })
	/*option1:DS.attr('string'),
	option2:DS.attr('string'),
	option3:DS.attr('string'),
	option4:DS.attr('string')*/
});
Quiz.Questions.FIXTURES = [
 {
   id: 1,
   question: 'Who among these is the fastest man on the Earth?',
   expected:'Usain Bolt',
   options:[1,2,3,4]
	/*option1: 'Asafa Powell',
	option2: 'Usain Bolt',
	option3: 'Tyson Gay',
	option4: 'Shawn Crawford'*/
 },
 {
 	id: 2,
   question: 'Who was the first foreign traveller to India?',
    expected:'Fahien',
    options:[5,6,7,8]
   /*option1: 'Fahien',
	option2: 'Magellan',
	option3:  'Vasco da Gama',
	option4: 'Columbus'*/
 },
 {
   id: 3,
   question: 'With which game is \'Thomas Cup\' associated?',
    expected:'Badminton',
    options:[9,10,11,12]
   /*option1: 'Rugby',
   option2: 'Badminton',
   option3:  'Polo',
   option4: 'Tennis'*/
 },
 {
   id: 4,
   question: 'The komodo dragons are found in which country?',
    expected:'Indonesia',
    options:[13,14,15,16]
   /*option1: 'Tanzania',
   option2: 'Syria',
   option3:  'Algeria',
   option4: 'Indonesia'*/
 },
 {
   id: 5,
   question: 'Who was the first man in space??',
    expected:'Yuri Gagarin',
    options:[17,18,19,20]
   /*option1: 'Neil Armstrong',
   option2: 'Edmund Hillary',
   option3:  'Tenzing Norgay',
   option4: 'Yuri Gagarin'*/
 },
 {
   id: 6,
   question: 'Which of these is not a multi-seeded fruit?',
    expected:'Litchi',
    options:[21,22,23,24]
   /*option1: 'Papaya',
   option2: 'Pomegranate',
   option3:  'Litchi',
   option4: 'Apple'*/
 },
 {
   id: 7,
   question: 'Which is the slowest animal?',
    expected:'Sloth',
    options:[25,26,27,28]
   /*option1: 'Tortoise',
   option2: 'Snail',
   option3:  'Sloth',
   option4: 'Mule'*/
 },
 {
   id: 8,
   question: 'Who acted as Superman in the motion picture?',
   expected:'Christopher Reeve',
   options:[29,30,31,32]
   /*option1: 'Christopher Lee',
   option2: 'Mel Gibson',
   option3:  'Christopher Reeve',
   option4: 'Tom Cruise'*/
 },
 {
   id: 9,
   question: 'Which is the broadest river in the world?',
   expected:'Amazon',
   options:[33,34,35,36]
   /*option1: 'Nile',
   option2: 'Brahamaputra',
   option3:  'Amazon',
   option4: 'Missisippi'*/
 },
 {
   id: 10,
   question: 'The highest mountain range in Europe is..',
   expected:'Alps',
   options:[37,38,39,40]
   /*option1: 'Ural',
   option2: 'Alps',
   option3:  'Himalayas',
   option4: 'Andes'*/
 }
 ];
