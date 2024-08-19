const { spawnSync } = require('child_process')
  const { existsSync, writeFileSync } = require('fs')
  
  const SESSION_ID = 'your session' // Edit this line only, dont remove ' <- this symbol
  
  if (!existsSync('levanter')) {
    spawnSync('git', ['clone', 'https://github.com/lyfe00011/whatsapp-bot-md.git', 'levanter'], {
      stdio: 'inherit',
    })
    const configPath = 'levanter/config.env'
    writeFileSync(configPath, `SUDO=918293838182
ALWAYS_ONLINE=false
REJECT_CALL=true
AUTO_STATUS_VIEW=false
GEMINI_API_KEY=AIzaSyBzo5z_Uo4vQX5-hM-UDtRhUmiQqfH5ukc
SS_TOKEN=ZQS8NNW-15NMHG4-N9FDAQ9-D4SQJTY
STICKER_PACKNAME=+918293838182,𝑳𝒖𝒄𝒊𝒁𝑹
BING_COOKIE=_IDET=MIExp=0; _C_Auth=; ipv6=hit=1721188006713&t=6; MUID=28BC326CB11C68CA1A822651B0B1693B; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=53095CB5CAED432E9FA99F02CBEC64D4&dmnchg=1; ANON=A=5ED8D95E1409889E04F501E4FFFFFFFF&E=1dbb&W=1; NAP=V=1.9&E=1d61&C=aGmnV3XFa0cxVjushoJivxnpl6qIYtJcskkUjB33hmgItJATXjJgRw&W=1; PPLState=1; MMCASM=ID=B835B707B971493C9DE76F830471BC42; _U=1HHYD7lsHVaAbco1fkYcW3--L64z3e0MsQdLFtS5SyqXE7MuArkhRG00uCDWfITqSqBbGyIz9sOMrLT_TnmZBvJKax4txPKitsnjN0ilUSNbHZMx0kWmiKoCoKWEz7C_nVMyMsuQkSMDbjPr3IVzhyM9zCTz5LcVMn6e9ZRrUFR_L25jyQYcoq5PcR35WkOFRraRUloshzlWyQsTckpF8AoSZskZrSGea1KHILZzKnxQ; WLS=C=2e2c0e836a3fe97e&N=Tech; _SS=SID=17EF6E5D566D6CDE09177AE257D96DA3&R=18&RB=18&GB=0&RG=0&RP=18; SRCHUSR=DOB=20240506&TPC=1721184405000&T=1721184396000&POEX=W; GI_FRE_COOKIE=gi_prompt=5&gi_fre=2; SRCHHPGUSR=SRCHLANG=en&PV=13.0.0&BRW=HTP&BRH=T&CW=900&CH=1791&SCW=605&SCH=1204&DPR=1.2&UTC=330&DM=0&PRVCW=780&PRVCH=1552&CIBV=1.1790.0&HV=1721118113&WTS=63856714794; _RwBf=mta=0&rc=18&rb=18&gb=0&rg=0&pc=18&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=9&l=2024-07-16T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&ard=0001-01-01T00:00:00.0000000&rwdbt=0001-01-01T16:00:00.0000000-08:00&rwflt=2024-07-16T01:21:13.9986699-07:00&o=0&p=MSAAUTOENROLL&c=MR000T&t=1573&s=2024-05-06T15:04:27.3114242+00:00&ts=2024-07-17T02:51:02.6851650+00:00&rwred=0&wls=2&wlb=0&wle=0&ccp=2&cpt=0&lka=0&lkt=0&aad=0&TH=&e=kefelKcqKIwwJ75m3tCOWRpPckNxTZTc49C407psCS0NSuXERVlVMCnd1w56GfJjdJL9iyLiaJiwciZaDK7FoA&A=
ANTIWORDS=xxx,porn,sexy,panu
PREFIX=null
BRAINSHOP=182726,72OT6Cseqm622ujs
LIST_TYPE=poll
DELETE_TYPE=pm
ANTI_DELETE=p
TZ=Asia/Kolkata
RMBG_KEY=q7abQvP3waTzbbXqRVLpxqpK
SEND_READ=false
DISABLE_START_MESSAGE=false
MENTION={ "contextInfo": { "forwardingScore": 5, "isForwarded": false }, "linkPreview": { "head": "ᴡʜʏ ᴍᴇɴᴛɪᴏɴ ᴍᴇ ʙᴇʙ...🤭", "body": "Powder By 𝑳𝒖𝒄𝒊𝒁𝑹", "mediaType": 2, "thumbnail": "https://telegra.ph/file/f718d22e07ec703537ede.jpg", "sourceUrl": "https://whatsapp.com/channel/0029Va9S1ZW17En4Yh6hz63R" } , "waveform": [ 20,5,0,80,80,30,20,50 ] }
MAX_UPLOAD=230
PERSONAL_MESSAGE=https://telegra.ph/file/8af9f5e4df36b94345b79.mp4 ░▒▓█ • ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴅᴀɴɢᴇʀ ᴢᴏɴᴇ • █▓▒░
STATUS_VIEW_MSG=`𝑳𝒖𝒄𝒊𝒁𝑹 ⚠︎` seen your status in just now 😍
> Powered by 𝑳𝒖𝒄𝒊𝒁𝑹
WARN_LIMIT=3
DATABASE_URL=postgresql://zr:t3HBchUfDcsWr0JS7CA2hkrYN8QhldvJ@dpg-cqtaeeqj1k6c738htecg-a.oregon-postgres.render.com/zr_al0q`)
    spawnSync('yarn', ['install', '--network-concurrency', '3'], { cwd: 'levanter', stdio: 'inherit' })
  }
  try {
    spawnSync('yarn', ['start'], { cwd: 'levanter', stdio: 'inherit' })
  } catch (error) {}
