CREATE TABLE galleries(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    logo TEXT,
    galleryCopy TEXT,
    images TEXT,
);

-- THE SEA GALLERY DB --
INSERT INTO galleries
VALUES ('The Sea', 'theSeaLogo','When I am HERE, I am one with the universe.
 It is me and I AM it. My Thoughts: BLANK. My Heart: OPEN.
 My Soul: FREE.','Crystalized, ParadiseOrangeDream, TropicalMist,
 Molecular, WadingCalmly, ElectricFish, SeaRipples, AlongTheReef, CrystalWall,
 OceanLove, Reset, TheBluesRoom, UnderwaterRays,Yokes,ParadiseBlue, KahalaCoastin,
 ReoccurringDream, Refresh')
[title,logo,galleryCopy, images];

-- OCEAN LEIS DB -- 
INSERT INTO galleries
VALUES('Ocean Leis','oceanLeisLogo','AuroraLei,FloatAway,ReflectiveMemories,LeiOfTheSea,
 Remembrance, Prosperous2,SunflowerUnderwaterStudy2')
 [title,logo,galleryCopy, images];

-- THE LAND GALLERY DB --
INSERT INTO galleries
VALUES('The Land', 'theLandLogo', 'The Land is an EXPLORATION of PLACES unknown,
 to be alone, but never to feel lonely.It is here you can discover an abundant of SPACE.
 Of HEALING.Of INSPIRATION.', 'TheGreenRoad,WaveShadow,BeyondTheForest,ColorsOfZion,HalfDome,
 FallingLikeTheClouds,
 MontgomeryHills,StairwayToHeavenlyRainbows, LetTheRythmFlow,Makua, FieldOfProsperity,
 Greenery, LanikaiDreamsicle, MakapuuDreaming, PeacefulSerenity,ThePotOfGold')
 [title,logo,galleryCopy, images];

-- PHOTOSHOOTS DB --
INSERT INTO galleries
VALUES('Portrait Sessions', 'sessionsicon',
'img01,img02,img03,img05,img08,img09,img11,img13,img15,img16,img19,img20,img22,img24,img25,img26,img27')
[title,logo,galleryCopy, images];

-- BOOKS DB --
INSERT INTO galleries
VALUES('Books', '')

-- ABOUT PAGE --
INSERT INTO galleries
VALUES ('About', 'aboutLogo')[title,logo];

