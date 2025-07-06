import { NextResponse } from "next/server"

const bibleVerses = [
  {
    verse:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    explanation:
      "This is perhaps the most famous verse in the Bible, summarizing the gospel message. It speaks of God's immense love for humanity and His ultimate sacrifice through Jesus Christ. The verse emphasizes that eternal life is a gift available to all who believe, not something earned through works.",
  },
  {
    verse: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
    explanation:
      "Paul wrote this while imprisoned, demonstrating that true strength comes not from circumstances but from Christ. This verse doesn't promise we can do anything we want, but rather that we can endure and accomplish what God calls us to do through His power.",
  },
  {
    verse:
      "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    explanation:
      "This passage calls for complete trust in God rather than relying solely on human wisdom. It acknowledges that our understanding is limited, while God's perspective is perfect. 'Making paths straight' doesn't mean life will be easy, but that God will guide us in the right direction.",
  },
  {
    verse:
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    explanation:
      "This verse provides comfort during difficult times, assuring believers that God can bring good from any situation. It doesn't say all things are good, but that God works through all circumstances for ultimate good.",
  },
  {
    verse:
      "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3",
    explanation:
      "David uses the metaphor of a shepherd to describe God's care and provision. In ancient times, shepherds were completely responsible for their flocks' welfare. This psalm speaks of God's provision, peace, and restoration.",
  },
  {
    verse:
      "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    explanation:
      "God spoke these words to Joshua as he prepared to lead Israel into the Promised Land. The command to be strong and courageous is based on God's promise of His presence. True courage comes from knowing God is with us.",
  },
  {
    verse: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    explanation:
      "Peter encourages believers to give their worries to God completely. The word 'cast' implies a deliberate action of throwing our burdens onto God. This isn't just positive thinking, but an act of faith based on God's character.",
  },
  {
    verse:
      "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
    explanation:
      "This verse promises supernatural strength to those who wait on and hope in the Lord. The progression from soaring to running to walking shows that God's strength sustains us in all seasons.",
  },
  {
    verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    explanation:
      "Jesus extends this invitation to all who are struggling under heavy loads. The rest He offers isn't just physical relaxation but soul-deep peace and relief from the weight of trying to earn salvation.",
  },
  {
    verse:
      "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    reference: "Zephaniah 3:17",
    explanation:
      "This beautiful verse reveals God's heart toward His people. He is both mighty warrior and loving father who delights in us. The image of God singing over us shows His joy in relationship with us.",
  },

  {
    verse:
      "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11",
    explanation:
      "Originally spoken to Israelites in Babylonian exile, this verse reveals God's heart for His people's welfare. God's plans are always for our ultimate good, even when circumstances seem dire.",
  },
  {
    verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    reference: "Philippians 4:19",
    explanation:
      "Paul writes this to the Philippians who had supported his ministry financially. God promises to meet our needs according to His abundant resources.",
  },
  {
    verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reference: "Psalm 34:18",
    explanation:
      "This psalm reveals God's special care for those who are suffering emotionally and spiritually. When we're at our lowest points, God draws near rather than distant.",
  },
  {
    verse: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
    reference: "2 Corinthians 5:17",
    explanation:
      "This verse describes the radical transformation that occurs when someone becomes a Christian. It's not just improvement or reformation, but complete recreation.",
  },
  {
    verse:
      "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    reference: "John 14:27",
    explanation:
      "Jesus spoke these words to His disciples before His crucifixion. The peace He offers is different from worldly peace - it's not dependent on circumstances but on relationship with Him.",
  },
  {
    verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
    reference: "Matthew 6:33",
    explanation:
      "Jesus teaches about priorities in this verse from the Sermon on the Mount. When we put God's kingdom and righteousness first, He promises to provide for our needs.",
  },
  {
    verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
    reference: "Proverbs 18:10",
    explanation:
      "In ancient times, fortified towers were places of refuge during attacks. God's name represents His character, power, and presence.",
  },
  {
    verse: "He heals the brokenhearted and binds up their wounds.",
    reference: "Psalm 147:3",
    explanation:
      "This verse reveals God as the divine physician who specializes in emotional and spiritual healing. The imagery of binding wounds suggests careful, tender care.",
  },
  {
    verse: "In their hearts humans plan their course, but the Lord establishes their steps.",
    reference: "Proverbs 16:9",
    explanation:
      "This proverb acknowledges both human responsibility and divine sovereignty. We should make plans and use wisdom, but ultimately God directs our path.",
  },
  {
    verse: "The Lord will fight for you; you need only to be still.",
    reference: "Exodus 14:14",
    explanation:
      "Moses spoke these words to the Israelites trapped between Pharaoh's army and the Red Sea. Sometimes our best action is to stop striving and let God work.",
  },

  {
    verse: "Weeping may stay for the night, but rejoicing comes in the morning.",
    reference: "Psalm 30:5",
    explanation:
      "This verse acknowledges that sorrow is real but temporary for those who trust in God. Night represents seasons of difficulty, while morning symbolizes hope and restoration.",
  },
  {
    verse: "Above all else, guard your heart, for everything you do flows from it.",
    reference: "Proverbs 4:23",
    explanation:
      "The heart in Hebrew thought represents the center of our being. What we allow into our hearts shapes our actions, words, and character.",
  },
  {
    verse:
      "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6",
    explanation:
      "Paul provides a practical antidote to anxiety: prayer with thanksgiving. Instead of worrying, we're invited to bring our concerns to God.",
  },
  {
    verse:
      "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    reference: "Psalm 27:1",
    explanation:
      "David declares God as both his light (guidance) and salvation (deliverance). When God is our stronghold, we have an unshakeable foundation.",
  },
  {
    verse: "She is clothed with strength and dignity; she can laugh at the days to come.",
    reference: "Proverbs 31:25",
    explanation:
      "This verse describes the virtuous woman's character and confidence. Being 'clothed' with strength and dignity means these qualities are her identity.",
  },
  {
    verse: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
    reference: "2 Corinthians 12:9",
    explanation:
      "God's response to Paul's prayer reveals that divine power is most clearly displayed through human weakness, not strength.",
  },
  {
    verse:
      "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.",
    reference: "Hebrews 4:16",
    explanation:
      "Because of Jesus' sacrifice, we can approach God boldly. The throne of grace represents God's willingness to help rather than condemn.",
  },
  {
    verse: "Wait for the Lord; be strong and take heart and wait for the Lord.",
    reference: "Psalm 27:14",
    explanation:
      "Waiting on God requires active faith, not passive resignation. The repetition emphasizes the importance and difficulty of waiting.",
  },
  {
    verse:
      "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.",
    reference: "Zephaniah 3:17",
    explanation:
      "This verse paints a beautiful picture of God's presence and delight in His people. God is not distant but intimately present.",
  },
  {
    verse:
      "Have I not commanded you? Be strong and courageous! Do not be afraid or dismayed, for the Lord your God is with you wherever you go.",
    reference: "Joshua 1:9",
    explanation:
      "This repetition of God's command to Joshua emphasizes the importance of courage rooted in God's presence.",
  },

  {
    verse: "The grass withers and the flowers fall, but the word of our God endures forever.",
    reference: "Isaiah 40:8",
    explanation:
      "This verse contrasts the temporary nature of earthly things with the eternal nature of God's word. While everything in creation is subject to decay and change, God's promises and truth remain constant.",
  },
  {
    verse: "Delight yourself in the Lord, and he will give you the desires of your heart.",
    reference: "Psalm 37:4",
    explanation:
      "When we find our joy and satisfaction in God, our desires begin to align with His will. This verse doesn't promise we'll get everything we want, but that God will shape our hearts to want what He wants.",
  },
  {
    verse:
      "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
    reference: "Galatians 5:22-23",
    explanation:
      "Paul lists the characteristics that naturally develop in the life of someone walking in the Spirit. These aren't achieved through human effort but are the result of God's Spirit working in us.",
  },
  {
    verse:
      "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    reference: "Matthew 6:34",
    explanation:
      "Jesus teaches about living in the present rather than being consumed by future anxieties. This doesn't mean being irresponsible, but trusting God with the future while focusing on today's responsibilities.",
  },
  {
    verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
    reference: "Psalm 51:10",
    explanation:
      "David's prayer after his sin with Bathsheba shows his understanding that only God can truly cleanse and transform the heart. It's a prayer for inner renewal and spiritual restoration.",
  },
  {
    verse:
      "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.",
    reference: "2 Peter 3:9",
    explanation:
      "Peter explains that God's apparent delay in judgment is actually mercy. God's timing reflects His desire for all people to have opportunity for salvation.",
  },
  {
    verse: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    reference: "John 1:1",
    explanation:
      "John's Gospel opens with this profound statement about Jesus' divine nature and eternal existence. The 'Word' (Logos) refers to Jesus as God's ultimate revelation and communication to humanity.",
  },
  {
    verse: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
    reference: "Psalm 46:10",
    explanation:
      "This verse calls for quiet trust in God's sovereignty. 'Be still' means to cease striving and recognize God's ultimate control over all circumstances and nations.",
  },
  {
    verse:
      "And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.",
    reference: "Hebrews 11:6",
    explanation:
      "Faith is fundamental to relationship with God. This verse emphasizes that approaching God requires both belief in His existence and confidence in His character as one who responds to sincere seekers.",
  },
  {
    verse:
      "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
    reference: "Numbers 6:24-26",
    explanation:
      "This is the priestly blessing God instructed Moses to have Aaron and his sons pronounce over Israel. It speaks of God's protection, favor, attention, and peace.",
  },
  {
    verse: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    reference: "1 Corinthians 13:4",
    explanation:
      "Paul's famous description of love begins with patience and kindness, showing that true love is characterized by selfless action rather than mere emotion.",
  },
  {
    verse:
      "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
    reference: "Ephesians 2:10",
    explanation:
      "This verse reveals that we are God's masterpiece, created not just for salvation but for purpose. God has prepared specific good works for each believer to accomplish.",
  },
  {
    verse: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
    reference: "Proverbs 9:10",
    explanation:
      "True wisdom begins with proper reverence for God. 'Fear' here means awe and respect, not terror. Understanding God's character is the foundation of all true knowledge.",
  },
  {
    verse: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
    reference: "Romans 5:8",
    explanation:
      "This verse highlights the unconditional nature of God's love. Christ's sacrifice wasn't based on our goodness but on God's love, demonstrated while we were still in rebellion against Him.",
  },
  {
    verse:
      "Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles.",
    reference: "Hebrews 12:1",
    explanation:
      "The author encourages believers by reminding them of the faithful saints who have gone before. Like runners in a race, we should remove anything that slows our spiritual progress.",
  },
  {
    verse:
      "The Lord your God will circumcise your hearts and the hearts of your descendants, so that you may love him with all your heart and with all your soul, and live.",
    reference: "Deuteronomy 30:6",
    explanation:
      "This verse speaks of God's promise to transform hearts, making it possible to love Him completely. It points to the new covenant work of the Holy Spirit in believers' lives.",
  },
  {
    verse: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
    reference: "Psalm 34:8",
    explanation:
      "David invites personal experience of God's goodness. 'Taste and see' suggests that God's goodness is something to be experienced, not just intellectually understood.",
  },
  {
    verse:
      "But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.",
    reference: "1 Peter 2:9",
    explanation:
      "Peter describes the identity and purpose of believers using Old Testament language originally applied to Israel. Christians are chosen for the purpose of declaring God's praises.",
  },
  {
    verse:
      "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
    reference: "Psalm 18:2",
    explanation:
      "David uses multiple metaphors to describe God's protection and strength. Each image - rock, fortress, shield - emphasizes different aspects of God's reliable protection.",
  },
  {
    verse:
      "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    reference: "Romans 8:28",
    explanation:
      "This verse assures believers that God can work through all circumstances for ultimate good. It applies specifically to those who love God and are called according to His purpose.",
  },
]

const moreVerses = [
  {
    verse: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
    reference: "Psalm 19:1",
    explanation:
      "Creation itself serves as a testimony to God's existence and glory. The natural world reveals God's power, creativity, and majesty to all people.",
  },
  {
    verse: "Your word is a lamp for my feet, a light on my path.",
    reference: "Psalm 119:105",
    explanation:
      "God's word provides guidance and illumination for life's journey. Like a lamp in darkness, Scripture shows us the next step and the direction we should go.",
  },
  {
    verse: "Commit to the Lord whatever you do, and he will establish your plans.",
    reference: "Proverbs 16:3",
    explanation:
      "When we dedicate our work and plans to God, seeking His will above our own, He guides and establishes our efforts according to His purposes.",
  },
]

const allVerses = [...bibleVerses, ...moreVerses]

export async function GET() {
  try {
    const now = new Date()
    const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000)
    // date and year
    const startOfYear = new Date(utcNow.getFullYear(), 0, 1)
    const dayOfYear = Math.floor((utcNow.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1
    const halfDayPeriod = Math.floor(utcNow.getHours() / 12)
    const verseIndex = (dayOfYear * 2 + halfDayPeriod) % bibleVerses.length

    return NextResponse.json({
      verse: bibleVerses[verseIndex],
      totalVerses: bibleVerses.length,
      debug: {
        currentTimeUTC: utcNow.toISOString(),
        currentTimeLocal: now.toISOString(),
        dayOfYear,
        hour: utcNow.getHours(),
        halfDayPeriod,
        verseIndex,
        nextChangeInHours: 12 - (utcNow.getHours() % 12),
        calculation: `(${dayOfYear} * 2 + ${halfDayPeriod}) % ${bibleVerses.length} = ${verseIndex}`,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch verse" }, { status: 500 })
  }
}
