// setup /////////////////////////////////////

const Discord = require("discord.js");
const PREFIX = "c.";
var client = new Discord.Client();
client.on("ready", () => {
	console.log("I am ready!");
});

// help //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "help") {
	var embed = new Discord.RichEmbed()
		.setTitle("**What can C1NN4-B0T do?**")
		.addField("**c.help**", "Displays list of commands")
		.addField("**c.ping**", "Pong!")
		.addField("**c.bun**", "Reminds you of your cinnamon bun-ness!")
		.setColor(0xFBA635)
		.setFooter("- The Novelcraft Lounge -")
	message.channel.sendEmbed(embed);
	}
});

// ping //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "ping") {
	message.channel.send("pong!");
	}
});

// bun ///////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "bun") {
	message.channel.send("https://cdn.discordapp.com/attachments/475314976819642368/475360270596964378/unknown.png");
  	}
});

// lenormand /////////////////////////////////

var num = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"];
var deck = [":horse_racing:  I - Rider",":four_leaf_clover:  II - Clover",":ship:  III - Ship",":house:  IV - House",":evergreen_tree:  V - Tree",":cloud:  VI - Clouds",":snake:  VII - Snake",":coffin:  VIII - Coffin",":bouquet:  IX - Bouquet","<:scythe:483403214222524427>  X - Scythe","<:whip:483404933908004885>  XI - Whip",":bird:  XII - Birds",":baby::skin-tone-3:  XIII - Child",":fox:  XIV - Fox",":bear:  XV - Bear",":sparkles:  XVI - Stars","<:stork:483411715740925964>  XVII - Stork",":dog:  XVIII - Dog","<:tower:483415061088436234>  XIX - Tower","<:garden:483417653071839252>  XX - Garden",":mountain_snow:  XXI - Mountain","<:crossroads:483419652651876363>  XXII - Crossroad",":mouse:  XXIII - Mice",":heart:  XXIV - Heart",":ring:  XXV - Ring",":book:  XXVI - Book",":envelope:  XXVII - Letter",":man::skin-tone-3:  XXVIII - Man",":woman::skin-tone-3:  XXIX - Woman",":cherry_blossom:  XXX - Lily",":sun_with_face:  XXXI - Sun",":full_moon_with_face:  XXXII - Moon",":key:  XXXIII - Key",":fish:  XXXIV - Fish",":anchor:  XXXV - Anchor",":cross:  XXXVI - Cross"];
var info = ["Energy, Passion, Speed, Activity, News, Messages","Luck, Lightheartedness, Small Happinesses, Opportunity, Being Untroubled, Comedy","Departure, Farewell, Distance, Voyage, Travel, Journey, Adventure","Home, Establishment, Safety, Tradition, Custom, Privacy, Conservation","Growth, Grounded, Past Connection, Personal Growth, Spirituality, Health","Confusion, Unclarity, Misunderstanding, Insecurity, Doubt, Hidden Secrets","Desire, Seduction, Deception, Craving, Attraction, Sexuality, Wisdom, Forbidden Knowledge","Ending, Dying, Funeral, Loss, Grief, Mourning, Sadness","Flattery, Social Life, Pleasantness, Cordiality, Etiquette, Politeness, Appreciation","Accidents, Hasty Decisions, Danger, A Warning, Speed, Reckoning","Conflict, Discussions, Arguments, Debate, Scolding, Opposition, Objection","Worry, Excitement, Gossip, Chattering, Nervousness, Anxiety","New Beginnings, Child, Toddler, Play, Inexperience, Innocence, Immaturity","Selfishness, Self Care, Trickery, Suspicion, Cunning, Caution","Power, Leadership, Dominance, Influence, Short temper, Strength of character, Boss","Hope, Inspiration, Optimism, Spirituality, Dreams, Progress to Goals","Change, Transition, Movement, Recurrence, New Cycle, Yearning","Loyalty, Friendship, A Follower, Devotion, Obedience, Support","Authority, Solitude, Loneliness, Isolation, Aloofness, Ego, Arrogance","Public Affairs, Society, Culture, Teamwork, Fame, Social Networks","Difficulties, Problems, Obstacles, Impairment, Hurdles, Struggles, Challenge","Choices, Many Opportunities, Travel, Separation, Hesitation, Decisions","Dwindling, Deficiency, Depletion, Destruction, Defect, Flaw, Disease","Love, Amicability, Romanticisation, Forgiveness, Reconciliation, Softness, Charity","Commitment, Promise, Honor, Partnership, Cooperation, Cycles","Secrets, Knowledge, Education, Information, Research, Studies","Document, Email, Speech, Conversations, Expression, Information, Communication","Male in querent’s life, If the querent is male - the querent, Masculinity","Female in querent’s life, If the querent is female, the querent, Femininity","Sensuality, Sex, Virtue, Morality, Ethics, Wisdom, Parents","Happiness, Victory, Success, Power, Warmth, Truth","Subconscious, Intuition, Emotions, Fears, Desires, Fantasy","Openness, Revelation, Unlocking, Achievement, Liberation, Resolution","Finances, Business, Wealth, Values, Gain, Abundance","Stability, Restraint, Security, Resilience, Durability, Laying Foundations","Duty, Conviction, Suffering, Burden, Intolerance, Principles, Indoctrination"];

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
};

client.on("message", message => {
	if (message.content === PREFIX + "lenormand") {
		shuffle(num);
		let card01 = deck[num[0]];
		let card02 = deck[num[1]];
		let card03 = deck[num[2]];
		let info01 = info[num[0]];
		let info02 = info[num[1]];
		let info03 = info[num[2]];
		var embed = new Discord.RichEmbed()
			.setDescription(card01)
			.setFooter(info01)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card02)
			.setFooter(info02)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card03)
			.setFooter(info03)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
	}
});

// asdf //////////////////////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "asdf") {
	message.channel.send("Hello cinnamon buns! <:CinnamonBun:473972103025131540>\nFor NaNoWriMo this year, we’re taking you on a quest! There will be monsters to slay, gold to earn, but most importantly, novels to write!\n\nAny good quest needs adventurers! Below, you can react to an emoji to choose your class! The classes available:\n\n:dizzy: **Mage!** Cast spells! Invoke the elements!\n:shield: **Warrior!** Shield allies! Decimate your foes!\n:knife: **Rogue!** Trickery! Deceit! Stick to the shadows!\n:guitar: **Bard!** Boost allies’ spirits! Play legendary solos!\n\nBy levelling up in the Discord, and by helping to slay the daily boss, you can receive new class titles, showing your prowess and mastery over words!\n\nEach day a new boss fight will unlock at **12PM GMT**, with a word count required to beat it. For the next 24 hours, you can write as much as you wish, and can submit the number of words you completed that day - even if you didn’t meet the day’s goal. At the end of the month, everyone’s progress will be tallied up and ranked!\n\nWho will lead the raid? And who will conquer their novel? You decide! Happy writing cinnamon bun! <:CinnamonBun:473972103025131540>");
	}
});
			     
// token login ///////////////////////////////

client.login(process.env.BOT_TOKEN);
