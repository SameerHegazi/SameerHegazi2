const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-_'

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
| ----    -_server   ----|
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمعرفة جميع رومات السيرفر |
| ----    -_roms    ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لمعرفة  حميع الرتب في السيرفر |
| ----    -_roles   ---- |
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| معلومات عن الروم |
| ---    -_channel    ---- |
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
| ----    -_kick   ----|
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لحظر شخـص مع ارسال السبب |
| ----    -_طرد   ---- |
╚[❖══════════════════════❖]╝
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
╔[❖══════════════════════❖]╗
| لمسح عدد معين من الـرسائل |
| ---    -_حذف    ---- |
╚[❖══════════════════════❖]╝
╔[❖════════════════════════❖]╗
| لاغلاق الروم وجعله للمشرفين |
| ---    -_closeroms   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لعمل برودكاست |
| ---    -_bc   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| لفتح الروم |
| ---    -_openroms   ---- |
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
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});
client.on("message", message => {
    var prefix = "-_"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "حذف")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Alloo" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "طرد") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
client.on('message', message => {
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("471758319535783947").send({embed : banembed})
}
});
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "-_closeroms") {
                        if(!message.channel.guild) return message.reply(' عزيزي , هذه الأوامر فقط للسيرفرات ');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**عزيزي , انت لست من المشرفين لتستعمل هذه الخاصية**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم إقفال شات ✅ , ولا يمكن لأحد التحدث عدا المشرفين**")
           });
             }
if (message.content === "-_openroms") {
    if(!message.channel.guild) return message.reply('**عزيزي , هذه الأوامر فقط للسيرفرات**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('يجب ان تكون مسؤول الرسائل , او ان تكون مشرفاً');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply(" تم فتح الشات ✅, ويمكن للجميع التحدث الآن")
           });
             }



});
client.on('message', message => {
    if (message.content === "-_roms") {
       if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**الرومات✅**`)
        .addField('⬇  عدد الرومات في السيرفر✔',`** ${message.guild.channels.size}**`)
        
.addField('⬇اسماء الرومات قائمة رومات السيرفر ✔:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
 client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**ليس لديك البرمشن المطلوب لاستخدام هذا الامر ❌**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")

.addField('**عدد اعضاء السيرفر 👤 **' , `${message.guild.memberCount}`)
.addField('**اونر السيرفر 👑**' , `${message.guild.owner.user.username}`)
.addField(`**الرومات :scroll: **`,true)
.addField(`# الكتابية`, `${message.guild.channels.filter(m => m.type === 'text').size}`)
.addField( `:loud_sound: الصوتية`,`${message.guild.channels.filter(m => m.type === 'voice').size}`)
.addField(`**عدد الرتب**:briefcase:`,`${message.guild.roles.size}`)
        message.channel.send({embed:embed})
    }
});
  var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "-_roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
client.on('message', message => {
if(message.startsWith(prefix + "channel")){
  if(message.channel.permissionsFor(message.client.user).has('EMBED_LINKS') == false) return message.reply('sorry but I cannot send Embed Links for this channel... check my permissions and try again!');
  var kakchannel = args.slice(1).join(' ');
  if(!kakchannel) return message.reply('please, specify a channel to get info...');

  var achannel = message.guild.channels.find('name', kakchannel);
  if(!achannel) return message.reply("i didn't find no channel with tha name! Try again later 👎");

  var channelCreated = achannel.createdAt.toString().split(' ');
  const embed = new Discord.RichEmbed()
  .setColor(0xFF8DFD)
  .setImage()
  .setThumbnail('http://cdn.onlinewebfonts.com/svg/img_323299.png')
  .setURL('')
  .addField(`Channel Name`, `${achannel.name}`, true)
  .addField(`Channel ID`, `${achannel.id}`, true)
  .addField(`Channel Position`, `${achannel.position}`, true)
  .addField(`Channel Members`, `${achannel.members.size} have acess`, true)
  .addField(`Channel Type`, `${achannel.type}`, true)
  .addField(`Channel Topic`, `${achannel.topic}`, true)
  .addField(`Channel Created At`, `${channelCreated[1]} ${channelCreated[2]} ${channelCreated[3]}`)

  message.channel.send({embed})
}
});

client.login(process.env.BOT_TOKEN);
