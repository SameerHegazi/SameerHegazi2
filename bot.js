const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته');
  }
});


client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
    let pages = [' اهلا وسهلا بك يا عزيزي','اوامر العامة','اوامر المشرفين','اوامر الميوزك','اوامر القران','إضافة البوت','مراسلة صاحب البوت','شكرً جزيلا لكم']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription([page-1])
	.addField('     **=-=-=-=-=-=-=** ' ,'╔[❖══════════════════════❖]╗')
    .addField('     **=-=-=-=-=-=-=** ' ,'| A للأوامـر الـعامة إخـــتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| B للأوامر المشرفين إختـــر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| C للأوامر الميـوزك إختـــر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| D للأوامر الــقران إخـــتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| E لإضافة البــــوت إخـــتر |')
    .addField('     **=-=-=-=-=-=-=** ' ,'| F لمراسلة صاحب البوت إختر |')

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('🇦').then( r => {
            msg.react('🇧')
			msg.react('🇨')
			msg.react('🇩')
			msg.react('🇪')
			msg.react('🇫')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
		const bokwardsFilter = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
		const bekwardsFilter = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
		const brkwardsFilter = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
		const bnkwardsFilter = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
		const bokwards = msg.createReactionCollector(bokwardsFilter, { time: 20000});
		const bekwards = msg.createReactionCollector(bekwardsFilter, { time: 20000});
		const brkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		const bnkwards = msg.createReactionCollector(brkwardsFilter, { time: 20000});
		
		
		
        bnkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ التواصل _
╔[❖══════════════════════❖]╗
|  لمراسلة صاحب البوت قم بكتابة الأمر
  | !.info-report | 
  | سيقوم البوت بإعطائك امر وطريقة ارسالها | 
╚[❖══════════════════════❖]╝
** _ التواصل _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    	
		
        brkwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**_ الرابط _
╔[❖══════════════════════❖]╗
|  تفضل أخي الغالي رابط البوت
  | صيانة | 
╚[❖══════════════════════❖]╝
** _ الرابط _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bekwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ أوامر القران الكريم _
╔[❖══════════════════════❖]╗
|  قريباً جداً بإذن الله تعالى   |
╚[❖══════════════════════❖]╝
** _ اوامر القرآن الكريم _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
		
        bokwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
** _ اوامر الميوزك _
╔[❖══════════════════════❖]╗
|  قريباً جداً بإذن الله تعالى   |
╚[❖══════════════════════❖]╝
** _ اوامر الميوزك _
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    


		backwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**_الأوامر العامة_
╔[❖══════════════════════❖]╗
|  لــمعرفة تفاصيل السيرفر  |
| ----    !.serverinfo    ----|
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمعرفة جميع رومات السيرفر |
| ----    !.roms    ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة  حميع الرتب في السيرفر |
| ----    !.roles   ---- |
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.info    ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة معلوماتك بالسيـرفر |
| ---    !.emoji   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة سرعة اتصال البــوت |
| ---    !.ping   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لإضافة البوت في السيــرفرك |
| ---    !.invite   ---- |
╚[❖══════════════════════❖]╝
**_الأوامر العامة_
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })    
	
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
			embed.addField('     **=-=-=-=-=-=-=** ' ,' ** :smiley: تم ارسال الرسالة بنجاح**')
			embed.addField('     **=-=-=-=-=-=-=** ' ,' :smiley:  شكراً لإستعمالك البوت')
            message.author.sendMessage(`
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
╔[❖══════════════════════❖]╗
|  لطرد شخـص مع ارسال السبب |
| ----    !.kick    ----|
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لحظر شخـص مع ارسال السبب |
| ----    !.ban    ---- |
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمسح عدد معين من الـرسائل |
| ---    !.clear    ---- |
╚[❖══════════════════════❖]╝
╔[❖════════════════════════❖]╗
| لإغلاق الرومات وجعلها للمشرفين |
| ---    !.closeroms   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| إغلاق الرومات وجعلها للمشرفين |
| ---    !.openroms   ---- |
╚[❖══════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);
			msg.edit(embed)
        })
        })
    })
    }
});
client.on('message', message => {//By Codes , ' ّEpicEdiTeDّ#4968
              if(!message.channel.guild) return;//By Codes , ' ّEpicEdiTeDّ#4968
    var prefix = "$";//By Codes , ' ّEpicEdiTeDّ#4968
    if(message.content.startsWith('$bc')) {//By Codes , ' ّEpicEdiTeDّ#4968
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للإدارة**').then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية لاستعمال هاذا الأمر** //By Codes , ' ّEpicEdiTeDّ#4968`ADMINISTRATOR`' );//By Codes , ' ّEpicEdiTeDّ#4968
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);//By Codes , ' ّEpicEdiTeDّ#4968
    let copy = "S Bot";//By Codes , ' ّEpicEdiTeDّ#4968
    let request = `Requested By ${message.author.username}`;//By Codes , ' ّEpicEdiTeDّ#4968
    if (!args) return message.reply('**يجب عليك كتابة شيئ لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من الإرسال؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {//By Codes , ' ّEpicEdiTeDّ#4968
    msg.react('✅')//By Codes , ' ّEpicEdiTeDّ#4968
    .then(() => msg.react('❌'))//By Codes , ' ّEpicEdiTeDّ#4968
    .then(() =>msg.react('✅'))//By Codes , ' ّEpicEdiTeDّ#4968

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//By Codes , ' ّEpicEdiTeDّ#4968
	      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });//By Codes , ' ّEpicEdiTeDّ#4968
    reaction1.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968
    message.channel.send(`**☑ |   لقد تم ارسال الرسالة لـ ${message.guild.members.size} عضوآ**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968
    message.guild.members.forEach(m => {//By Codes , ' ّEpicEdiTeDّ#4968
    var bc = new//By Codes , ' ّEpicEdiTeDّ#4968
       Discord.RichEmbed()//By Codes , ' ّEpicEdiTeDّ#4968
       .setColor('RANDOM')//By Codes , ' ّEpicEdiTeDّ#4968
       .setDescription(`البرودكاست :mega:
**:shield: السيرفر : ** ${message.guild.name}
** :thinking:  المرسل : ** ${message.author.username}
**  الرسالة : ** ${args}




        `)//By Codes , ' ّEpicEdiTeDّ#4968
         .setTimestamp()//By Codes , ' ّEpicEdiTeDّ#4968
         .setFooter('S Bot' , 'https://cdn.discordapp.com/avatars/465885551329804288/55614337cfb9813916a60383469736d9.jpg?size=128')
    m.send({ embed: bc })
    msg.delete();//By Codes , ' ّEpicEdiTeDّ#4968
    })//By Codes , ' ّEpicEdiTeDّ#4968
    })//By Codes , ' ّEpicEdiTeDّ#4968
    reaction2.on("collect", r => {//By Codes , ' ّEpicEdiTeDّ#4968
    message.channel.send(`**تم الغاء البرودكاست :x:.**`).then(m => m.delete(5000));//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , msg.delete();//By Codes , ' ّEpicEdiTeDّ#496
    })
    })//By Codes , ' ّEpicEdiTeDّ#4968
    }
    });//By Codes , ' ّEpicEdiTeDّ#4968//By Codes , ' ّEpicEdiTeDّ#4968

//By Codes , ' ّEpicEdiTeDّ#4968

client.login(process.env.BOT_TOKEN);
