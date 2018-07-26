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
| معلومات عن حسابك |
| ---    -_user    ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| وضع لون |
| ---    -_color   ---- |
╚[❖══════════════════════❖]╝
╔[❖══════════════════════❖]╗
| معلومات عن البوت |
| ---    -_bot   ---- |
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
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '-_color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
client.on('message', message => {
    if (message.content.startsWith("-_bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO -_`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `-_` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | Every Body <3>#5666')
    })
}
});
client.on('message' , message => {
var prefix = "-_"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("465433952535052288","471040419334193166").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Every Body <3>#5666")
                                                

message.channel.send(embed);


}
    
});

client.login(process.env.BOT_TOKEN);
