const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let emot = `${pickRandom(['🥷🏼'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
  let teks = `╭─────────\n│❏ 𝘎𝘴𝘸𝘹 𝘉𝘰𝘵 ︎𝘛𝘦 𝘐𝘯𝘷𝘰𝘤𝘢 🥷🏼\n│❏ 𝘎𝘴𝘸𝘹 𝘉𝘰𝘵 ︎𝘓𝘰𝘷𝘦𝘳𝘴: *${participants.length}* ${oi}\n│\n`;
  for (const mem of participants) {
    teks += `│${emot} @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰@𝘎𝘴𝘸𝘹 𝘉𝘰𝘵 🥷🏼`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;