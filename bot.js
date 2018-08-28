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
		.addField("**c.storydice**", "9 random icons from the Lenormand set!")
		.addField("**c.lenormand [x]**", "Various Lenormand commands. For a more indepth explanation, use c.lenormand help")
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

// lenormand / storydice /////////////////////

client.on("message", message => {
	if (message.content === PREFIX + "lenormand help") {
	var embed = new Discord.RichEmbed()
		.setTitle("**Lenormand Commands**")
		.addField("**c.lenormand help**", "Displays list of lenormand commands", true)
		.addField("**c.lenormand howto**", "Private message with some explanations of how to read the cards, and some beginners tips - a bit spammy!", true)
		.addField("**c.lenormand 2**", "Displays a pair of cards", true)
		.addField("**c.lenormand 3**", "Displays a row of 3 cards", true)
		.addField("**c.lenormand 5**", "Displays a row of 5 cards", true)
		.addField("**c.lenormand 7**", "Displays a row of 7 cards", true)
		.addField("**c.lenormand 9**", "Displays a grid of 9 cards, and private messages you instructions on how to read", true)
		.addField("**c.lenormand tableau**", "Displays a grid of all 36 cards, and private messages you instructions on how to read - NOT YET IMPLEMENTED", true)
		.setColor(0xFBA635)
		.setFooter("- The Novelcraft Lounge -")
	message.channel.sendEmbed(embed);
	}
});

client.on("message", message => {
	if (message.content === PREFIX + "lenormand howto") {
	var embed = new Discord.RichEmbed()
		.setColor(0xFBA635)
		.setTitle("**Lenormand Basics**")
	message.author.sendEmbed(embed);
	message.author.send("While Tarot deals with the psychological landscape of the self, the Lenormand deals with much more practical events in one's life. You can say that where tarot is the 'why', the Lenormand is the 'how'.\n\nTarot gives us a greater understanding of the emotional states present in our lives, but leaves it open to how it can manifest. Combining the two systems together can often lead to extremely in-depth readings.\n\nOne of the differences you'll notice first off is that Lenormand does not have reversed cards. All the cards are meant to have both positive and negative traits. Lenormand cards also do not have suits.\n\nIn addition, Lenormand cards are not meant to be read on their own. THe most basic unit for a lenormand reading is a pair. This gives us a healthy range of interpretations across all 36 of the cards.\n\nYou'll also notice as you go deeper into the Lenormand, that the readings are much more structural. There are few spreads because the nature of the Lenormand is to be read almost like a sentence.");
	var embed = new Discord.RichEmbed()
		.setColor(0xFBA635)
		.setTitle("**History of Lenormand**")
	message.author.sendEmbed(embed);
	message.author.send("Like Tarot, Lenormand started out as a parlor game called 'The Game of Hope', originating in the 1800's.\n\nThe cards are named after a famous fortuneteller, Madame Lenormand, or Marie Anne Lenormand, who was known to read for Tsar Alexander I, Empress Josephine, and Robespierre.\n\nThe Lenormand set we see today is supposedly based off of her own custom deck she used to read for those illustrious figures, but wasn't named after her until her death.\n\nWhen she passed away, she gave all her possessions to her nephew - who was a devout Christian. Sadly, he burned all of her writings, believing them to be heretical.");
	var embed = new Discord.RichEmbed()
		.setColor(0xFBA635)
		.setTitle("**Single Cards VS Combinations**")
	message.author.sendEmbed(embed);
	message.author.send("It's rare to read Lenormand cards alone, because the combinations are what give Lenormand readings their precision.\n\nIt's here where you can start getting used to the concept of a grammar within the cards. As a rule of thumb, you can consider the first card of the pair the subject, and the second card the modifier.\n\nFor example, we draw the pair 'Child' and 'Coffin'. The child is the subject, and the coffin is the modifier.\n\nAs a subject, the child deals with innocence or inexperience.\n\nAs a modifier, the coffin can mean something is buried or ended.\n\nThus, the pair reading can indicate that one's innocence is coming to an end, or that one is growing up.\n\nNote that the combinations that we give you as examples can be interpreted in many ways, and are meant as examples for you to use as jumping off points for your own interpretations. Make these readings your own!");
	var embed = new Discord.RichEmbed()
		.setColor(0xFBA635)
		.setTitle("**Spreads: Strings**")
	message.author.sendEmbed(embed);
	message.author.send("Because Lenormand is very structural, you'll see that it doesn't have many spreads. One of the most common spreads though, are spreads that line up the cards in rows of three, five, or seven.\n\nYou'll notice that these string spreads are all odd - meaning that there's a central card, which will give you the overall theme for the spread.\n\nNext, you can also read the cards pair by pair to tell a story. For a 3 card spread, you'll read the first and second card, and the second and third card together.\n\nFinally, you can also do something called mirroring. For a 5 card spread, you'll read the first and fifth card as a pair, and the second and fourth as a pair.");
	}
});

var icon = [":horse_racing:",":four_leaf_clover:",":ship:",":house:",":evergreen_tree:",":cloud:",":snake:",":coffin:",":bouquet:","<:scythe:483534364014149644>","<:whip:483534413720977412>",":bird:",":baby::skin-tone-3:",":fox:",":bear:",":star:","<:stork:483534384511713290>",":dog:","<:tower:483534397677502465>","<:garden:483534364182052864>",":mountain_snow:","<:crossroads:483534364139847681>",":mouse:",":heart:",":ring:",":book:",":envelope:",":man::skin-tone-3:",":woman::skin-tone-3:",":cherry_blossom:",":sun_with_face:",":full_moon_with_face:",":key:",":fish:",":anchor:",":cross:"];
var num = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"];
var deck = [":horse_racing:  I - The Rider",":four_leaf_clover:  II - The Clover",":ship:  III - The Ship",":house:  IV - The House",":evergreen_tree:  V - The Tree",":cloud:  VI - The Clouds",":snake:  VII - The Snake",":coffin:  VIII - The Coffin",":bouquet:  IX - The Bouquet","<:scythe:483534364014149644>  X - The Scythe","<:whip:483534413720977412>  XI - The Whip",":bird:  XII - The Birds",":baby::skin-tone-3:  XIII - The Child",":fox:  XIV - The Fox",":bear:  XV - The Bear",":star:  XVI - The Star","<:stork:483534384511713290>  XVII - The Stork",":dog:  XVIII - The Dog","<:tower:483534397677502465>  XIX - The Tower","<:garden:483534364182052864>  XX - The Garden",":mountain_snow:  XXI - The Mountain","<:crossroads:483534364139847681>  XXII - The Crossroad",":mouse:  XXIII - The Mice",":heart:  XXIV - The Heart",":ring:  XXV - The Ring",":book:  XXVI - The Book",":envelope:  XXVII - The Letter",":man::skin-tone-3:  XXVIII - The Man (Animus)",":woman::skin-tone-3:  XXIX - The Woman (Anima)",":cherry_blossom:  XXX - The Lily",":sun_with_face:  XXXI - The Sun",":full_moon_with_face:  XXXII - The Moon",":key:  XXXIII - The Key",":fish:  XXXIV - The Fish",":anchor:  XXXV - The Anchor",":cross:  XXXVI - The Cross"];
var info = ["Energy, passion, speed, activity, news, messages","Luck, lightheartedness, small happinesses, opportunity, being untroubled, comedy","Departure, farewell, distance, voyage, travel, journey, adventure","Home, establishment, safety, tradition, custom, privacy, conservation","Growth, grounded, past connection, personal growth, spirituality, health","Confusion, unclarity, misunderstanding, insecurity, doubt, hidden secrets","Desire, seduction, deception, craving, attraction, sexuality, wisdom, forbidden knowledge","Ending, dying, funeral, loss, grief, mourning, sadness","Flattery, social life, pleasantness, cordiality, etiquette, politeness, appreciation","Accidents, hasty decisions, danger, a warning, speed, reckoning","Conflict, discussions, arguments, debate, scolding, opposition, objection","Worry, excitement, gossip, chattering, nervousness, anxiety","New beginnings, child, toddler, play, inexperience, innocence, immaturity","Selfishness, self care, trickery, suspicion, cunning, caution","Power, leadership, dominance, influence, short temper, strength of character, boss","Hope, inspiration, optimism, spirituality, dreams, progress to goals","Change, transition, movement, recurrence, new cycle, yearning","Loyalty, friendship, a follower, devotion, obedience, support","Authority, solitude, loneliness, isolation, aloofness, ego, arrogance","Public affairs, society, culture, teamwork, fame, social networks","Difficulties, problems, obstacles, impairment, hurdles, struggles, challenge","Choices, many opportunities, travel, separation, hesitation, decisions","Dwindling, deficiency, depletion, destruction, defect, flaw, disease","Love, amicability, romanticisation, forgiveness, reconciliation, softness, charity","Commitment, promise, honor, partnership, cooperation, cycles","Secrets, knowledge, education, information, research, studies","Document, email, speech, conversations, expression, information, communication","Male in querent’s life; if the querent is male - the querent; masculinity","Female in querent’s life; if the querent is female, the querent; femininity","Sensuality, sex, virtue, morality, ethics, wisdom, parents","Happiness, victory, success, power, warmth, truth","Subconscious, intuition, emotions, fears, desires, fantasy","Openness, revelation, unlocking, achievement, liberation, resolution","Finances, business, wealth, values, gain, abundance","Stability, restraint, security, resilience, durability, laying foundations","Duty, conviction, suffering, burden, intolerance, principles, indoctrination"];

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
	if (message.content === PREFIX + "storydice") {
		shuffle(num);
		let icon01 = icon[num[0]];
		let icon02 = icon[num[1]];
		let icon03 = icon[num[2]];
		let icon04 = icon[num[3]];
		let icon05 = icon[num[4]];
		let icon06 = icon[num[5]];
		let icon07 = icon[num[6]];
		let icon08 = icon[num[7]];
		let icon09 = icon[num[8]];
		var embed = new Discord.RichEmbed()
			.setDescription(icon01 + " // " + icon02 + " // " + icon03 + " // " + icon04 + " // " + icon05 + " // " + icon06 + " // " + icon07 + " // " + icon08 + " // " + icon09)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
	}
});

client.on("message", message => {
	if (message.content === PREFIX + "lenormand 2") {
		shuffle(num);
		let card01 = deck[num[0]];
		let card02 = deck[num[1]];
		let info01 = info[num[0]];
		let info02 = info[num[1]];
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
	}
});

client.on("message", message => {
	if (message.content === PREFIX + "lenormand 3") {
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

client.on("message", message => {
	if (message.content === PREFIX + "lenormand 5") {
		shuffle(num);
		let card01 = deck[num[0]];
		let card02 = deck[num[1]];
		let card03 = deck[num[2]];
		let card04 = deck[num[3]];
		let card05 = deck[num[4]];
		let info01 = info[num[0]];
		let info02 = info[num[1]];
		let info03 = info[num[2]];
		let info04 = info[num[3]];
		let info05 = info[num[4]];
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
		var embed = new Discord.RichEmbed()
			.setDescription(card04)
			.setFooter(info04)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card05)
			.setFooter(info05)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
	}
});

client.on("message", message => {
	if (message.content === PREFIX + "lenormand 7") {
		shuffle(num);
		let card01 = deck[num[0]];
		let card02 = deck[num[1]];
		let card03 = deck[num[2]];
		let card04 = deck[num[3]];
		let card05 = deck[num[4]];
		let card06 = deck[num[5]];
		let card07 = deck[num[6]];
		let info01 = info[num[0]];
		let info02 = info[num[1]];
		let info03 = info[num[2]];
		let info04 = info[num[3]];
		let info05 = info[num[4]];
		let info06 = info[num[5]];
		let info07 = info[num[6]];
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
		var embed = new Discord.RichEmbed()
			.setDescription(card04)
			.setFooter(info04)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card05)
			.setFooter(info05)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card06)
			.setFooter(info06)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card07)
			.setFooter(info07)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
	}
});		

client.on("message", message => {
	if (message.content === PREFIX + "lenormand 9") {
		shuffle(num);
		let card01 = deck[num[0]];
		let card02 = deck[num[1]];
		let card03 = deck[num[2]];
		let card04 = deck[num[3]];
		let card05 = deck[num[4]];
		let card06 = deck[num[5]];
		let card07 = deck[num[6]];
		let card08 = deck[num[7]];
		let card09 = deck[num[8]];
		let info01 = info[num[0]];
		let info02 = info[num[1]];
		let info03 = info[num[2]];
		let info04 = info[num[3]];
		let info05 = info[num[4]];
		let info06 = info[num[5]];
		let info07 = info[num[6]];
		let info08 = info[num[7]];
		let info09 = info[num[8]];
		var embed = new Discord.RichEmbed()
			.setDescription(card01 + " // " + card02 + " // " + card03)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card04 + " // " + card05 + " // " + card06)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(card07 + " // " + card08 + " // " + card09)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.addField(card01, info01)
			.addField(card02, info02)
			.addField(card03, info03)
			.addBlankField()
			.addField(card04, info04)
			.addField(card05, info05)
			.addField(card06, info06)
			.addBlankField()
			.addField(card07, info07)
			.addField(card08, info08)
			.addField(card09, info09)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setTitle("**Instructions**")
			.addField("Story", "Like any other string, you can read the cards in reading order from one to nine.", true)
			.addField("Central Issue", "Card five - the central card - is indicative of the overall theme of the spread.", true)
			.addField("Frame", "Cards one, three, seven, and nine - the corner cards - are indicative of the context of the situation.", true)
			.addField("Past", "Cards one, four, and seven - the left column - are indicative of the past circumstances.", true)
			.addField("Present", "Cards two, five, and eight - the middle column - are indicative of the present circumstances.", true)
			.addField("Future", "Cards three, six, and nine - the right column - are indicative of the future circumstances.", true)
			.addField("Conscious", "Cards one, two, and three - the top row - are indicative of the ideas and dreams that shape the situation.", true)
			.addField("Reality", "Cards four, five, and six - the middle row - are indicative of the day to day circumstances.", true)
			.addField("Unconscious", "Cards seven, eight, and nine - the bottom row - are indicative of the undercurrent shaping the situation.", true)
			.setColor(0xFBA635)
		message.author.sendEmbed(embed);
	}
});

client.on("message", message => {
	if (message.content === PREFIX + "lenormand tableau") {
		shuffle(num);
		let card01 = deck[num[0]]; let card02 = deck[num[1]]; let card03 = deck[num[2]]; let card04 = deck[num[3]]; let card05 = deck[num[4]]; let card06 = deck[num[5]]; let card07 = deck[num[6]]; let card08 = deck[num[7]]; let card09 = deck[num[8]]; let card10 = deck[num[9]]; let card11 = deck[num[10]]; let card12 = deck[num[11]]; let card13 = deck[num[12]]; let card14 = deck[num[13]]; let card15 = deck[num[14]]; let card16 = deck[num[15]]; let card17 = deck[num[16]]; let card18 = deck[num[17]]; let card19 = deck[num[18]]; let card20 = deck[num[19]]; let card21 = deck[num[20]]; let card22 = deck[num[21]]; let card23 = deck[num[22]]; let card24 = deck[num[23]]; let card25 = deck[num[24]]; let card26 = deck[num[25]]; let card27 = deck[num[26]]; let card28 = deck[num[27]]; let card29 = deck[num[28]]; let card30 = deck[num[29]]; let card31 = deck[num[30]]; let card32 = deck[num[31]]; let card33 = deck[num[32]]; let card34 = deck[num[33]]; let card35 = deck[num[34]]; let card36 = deck[num[35]];
		let info01 = info[num[0]]; let info02 = info[num[1]]; let info03 = info[num[2]]; let info04 = info[num[3]]; let info05 = info[num[4]]; let info06 = info[num[5]]; let info07 = info[num[6]]; let info08 = info[num[7]]; let info09 = info[num[8]]; let info10 = info[num[9]]; let info11 = info[num[10]]; let info12 = info[num[11]]; let info13 = info[num[12]]; let info14 = info[num[13]]; let info15 = info[num[14]]; let info16 = info[num[15]]; let info17 = info[num[16]]; let info18 = info[num[17]]; let info19 = info[num[18]]; let info20 = info[num[19]]; let info21 = info[num[20]]; let info22 = info[num[21]]; let info23 = info[num[22]]; let info24 = info[num[23]]; let info25 = info[num[24]]; let info26 = info[num[25]]; let info27 = info[num[26]]; let info28 = info[num[27]]; let info29 = info[num[28]]; let info30 = info[num[29]]; let info31 = info[num[30]]; let info32 = info[num[31]]; let info33 = info[num[32]]; let info34 = info[num[33]]; let info35 = info[num[34]]; let info36 = info[num[35]];
		let icon01 = icon[num[0]]; let icon02 = icon[num[1]]; let icon03 = icon[num[2]]; let icon04 = icon[num[3]]; let icon05 = icon[num[4]]; let icon06 = icon[num[5]]; let icon07 = icon[num[6]]; let icon08 = icon[num[7]]; let icon09 = icon[num[8]]; let icon10 = icon[num[9]]; let icon11 = icon[num[10]]; let icon12 = icon[num[11]]; let icon13 = icon[num[12]]; let icon14 = icon[num[13]]; let icon15 = icon[num[14]]; let icon16 = icon[num[15]]; let icon17 = icon[num[16]]; let icon18 = icon[num[17]]; let icon19 = icon[num[18]]; let icon20 = icon[num[19]]; let icon21 = icon[num[20]]; let icon22 = icon[num[21]]; let icon23 = icon[num[22]]; let icon24 = icon[num[23]]; let icon25 = icon[num[24]]; let icon26 = icon[num[25]]; let icon27 = icon[num[26]]; let icon28 = icon[num[27]]; let icon29 = icon[num[28]]; let icon30 = icon[num[29]]; let icon31 = icon[num[30]]; let icon32 = icon[num[31]]; let icon33 = icon[num[32]]; let icon34 = icon[num[33]]; let icon35 = icon[num[34]]; let icon36 = icon[num[35]]; 
		var embed = new Discord.RichEmbed()
			.setDescription(icon01 + " " + icon02 + " " + icon03 + " " + icon04 + " " + icon05 + " " + icon06 + " " + icon07 + " " + icon08)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(icon09 + " " + icon10 + " " + icon11 + " " + icon12 + " " + icon13 + " " + icon14 + " " + icon15 + " " + icon16)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(icon17 + " " + icon18 + " " + icon19 + " " + icon20 + " " + icon21 + " " + icon22 + " " + icon23 + " " + icon24)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription(icon25 + " " + icon26 + " " + icon27 + " " + icon28 + " " + icon29 + " " + icon30 + " " + icon31 + " " + icon32)
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setDescription("<:EmbedSpacer:483826818546139173> <:EmbedSpacer:483826818546139173> " + icon21 + " " + icon22 + " " + icon23 + " " + icon24 + " <:EmbedSpacer:483826818546139173> <:EmbedSpacer:483826818546139173>")
			.setColor(0xFBA635)
		message.channel.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.addField(card01, info01)
			.addField(card02, info02)
			.addField(card03, info03)
			.addField(card04, info04)
			.addField(card05, info05)
			.addField(card06, info06)
			.addField(card07, info07)
			.addField(card08, info08)
			.setColor(0xFBA635)
		message.author.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.addField(card09, info09)
			.addField(card10, info10)
			.addField(card11, info11)
			.addField(card12, info12)
			.addField(card13, info13)
			.addField(card14, info14)
			.addField(card15, info15)
			.addField(card16, info16)
			.setColor(0xFBA635)
		message.author.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.addField(card17, info17)
			.addField(card18, info18)
			.addField(card19, info19)
			.addField(card20, info20)
			.addField(card21, info21)
			.addField(card22, info22)
			.addField(card23, info23)
			.addField(card24, info24)
			.setColor(0xFBA635)
		message.author.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.addField(card25, info25)
			.addField(card26, info26)
			.addField(card27, info27)
			.addField(card28, info28)
			.addField(card29, info29)
			.addField(card30, info30)
			.addField(card31, info31)
			.addField(card32, info32)
			.setColor(0xFBA635)
		message.author.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.addField(card33, info33)
			.addField(card34, info34)
			.addField(card35, info35)
			.addField(card36, info36)
			.setColor(0xFBA635)
		message.author.sendEmbed(embed);
		var embed = new Discord.RichEmbed()
			.setTitle("**Instructions**")
			.addField("Story", "Like any other string, you can read the cards in reading order from one to thirtysix.", true)
			.addField("Significator", "Traditionally, it is the Animus or Anima card, depending on your gender. But this can also be the card that best represents your situation.", true)
			.addField("Central Issue", "Cards twelve, thirteen, twenty, and twentyone - the central cards - are indicative of the overall theme of the spread.", true)
			.addField("Frame", "Cards one, eight, twentyfive, and thirtytwo - the corner cards - are indicative of the context of the situation.", true)
			.addField("Past", "All cards in the same row and to the left of your significator are indicative of the past circumstances.", true)
			.addField("Future", "All cards in the same row and to the right of your significator are indicative of the future circumstances.", true)
			.addField("Conscious", "All cards in the same column and above your significator are indicative of the ideas and dreams that shape the situation.", true)
			.addField("Unconscious", "All cards in the same column and beneath your significator are indicative of the undercurrent shaping the situation.", true)
			.setColor(0xFBA635)
		message.author.sendEmbed(embed);
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
