"use client";

import { motion } from "framer-motion";
import React from "react";
import Devu from "../../public/devu.jpg";

const lyrics = [
  "Since I Survived I Realized 💡",
  "Whenever You Go That's Where I'll Follow 🛤️❤️",
  "Nobody's Promised Tomorrow 🌅",
  "So I'ma Love You Every Night Like It's The Last Night 🌙💖",
  "Like It's The Last Night 🌟",
  "If The World Was Ending 🌍💥",
  "I'd Wanna Be Next To You 🫂❤️",
  "If The Party Was Over 🎉⏳",
  "And Our Time On Earth Was Through 🌏⏲️",
  "I'd Wanna Hold You Just For A While 🤝💕",
  "And Die With A Smile 😊❤️",
  "If The World Was Ending 🌍💥",
  "I'd Wanna Be Next To You 🫂❤️",
  "I Don't Even Wanna Do This Anymore 😞",
  "Cause You Already Know What You Mean To Me 🥰",
  "And Our Love's The Only One Worth Fighting For 🛡️❤️",
  "Wherever You Go That's Where I'll Follow 🚶‍♂️❤️",
  "Nobody's Promised Tomorrow 🌅",
  "So I'ma Love You Every Night Like It's The Last Night 🌙💖",
  "Like It's The Last Night 🌟",
  "If The World Was Ending 🌍💥",
  "I'd Wanna Be Next To You 🫂❤️",
  "If The Party Was Over 🎉⏳",
  "And Our Time On Earth Was Through 🌏⏲️",
  "I'd Wanna Hold You Just For A While 🤝💕",
  "And Die With A Smile 😊❤️",
  "If The World Was Ending 🌍💥",
  "I'd Wanna Be Next To You 🫂❤️",
  "Right Next To You 🫂",
  "Next To You 🫂",
  "Right Next To You 🫂",
  "Oh-Oh 😶",
  "If The World Was Ending 🌍💥",
  "I'd Wanna Be Next To You 🫂❤️",
  "If The Party Was Over 🎉⏳",
  "And Our Time On Earth Was Through 🌏⏲️",
  "I'd Wanna Hold You Just For A While 🤝💕",
  "And Die With A Smile 😊❤️",
  "If The World Was Ending 🌍💥",
  "I'd Wanna Be Next To You 🫂❤️",
  "Ooh, Ooh 🎶",
  "I'd Wanna Be Next To You 🫂❤️",
];

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(20px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const Word = ({ word, index }) => {
  return (
    <motion.span
      className="inline-block mr-1"
      variants={wordVariants}
      custom={index}
    >
      {word}
    </motion.span>
  );
};

const lineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const LyricLine = ({ line, lineIndex }) => {
  const words = line.split(" ");
  const lastWord = words[words.length - 1];
  const isLastWordEmoji = /\p{Emoji}/u.test(lastWord);

  return (
    <motion.div
      className="text-sm sm:text-base md:text-md leading-relaxed text-gray-800 opacity-85 text-left mb-2 inter"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={lineVariants}
    >
      {words.slice(0, -1).map((word, index) => (
        <Word key={`${lineIndex}-${index}`} word={word} index={index} />
      ))}
      {isLastWordEmoji ? (
        <Word
          key={`${lineIndex}-${words.length - 1}`}
          word={`${words[words.length - 2]} ${lastWord}`}
          index={words.length - 1}
        />
      ) : (
        <Word
          key={`${lineIndex}-${words.length - 1}`}
          word={lastWord}
          index={words.length - 1}
        />
      )}
    </motion.div>
  );
};

const ScrollTriggeredLyrics = () => {
  return (
    <div className="flex flex-col w-full max-w-[650px] mx-auto h-auto py-4 sm:py-6 px-2 sm:px-4 gap-6 sm:gap-10 font-sans">
      <div className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-4">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
            Mera Jaanu🫀❤️
          </h1>
          <p className="max-w-[600px] mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            I am madly in love with you, you are my happiness, my love, my
            everything. I love you so much.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] aspect-square overflow-hidden">
          <motion.img
            src={Devu}
            initial={{ scale: 2.5 }}
            alt="Devu"
            className="w-full h-full object-cover relative left-[10px]"
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-start w-full h-auto max-w-[600px] py-2 gap-2">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 font-bold">
          Dear Devu❤️
        </p>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-800 opacity-85 text-left">
          You are my home, the place where my heart feels at ease and my soul
          feels safe. You are my smile, the light that brightens my days and
          fills my heart with warmth. You are my soul, the deepest part of me
          that beats in harmony with yours. With you, I've found everything I've
          ever needed — love, peace, and purpose. You are my world, my greatest
          joy, and the reason I believe in forever. Loving you is the most
          natural and beautiful thing I've ever known.
        </p>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-start w-full h-auto max-w-[600px] py-2 gap-2">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 font-bold">
          Let me tell you a secret 👂🏻
        </p>
        <div className="flex flex-col items-start text-left gap-2">
          {lyrics.map((lyric, index) => (
            <LyricLine key={index} line={lyric} lineIndex={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-start justify-start w-full h-auto max-w-[600px] py-2 gap-6">
        <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold tracking-tighter">
          I will do anything for you. All I want is you, your happiness, and a
          beautiful life with you. You are everything I wished and dreamed for
          ✨. I will love you like there is no tomorrow, giving you all my love
          ❤️, and I will treat you like a princess 👑, as my queen 👸, and as my
          baby 👶🏻. I will respect and honor you like my mother 💖. Seriously, I
          am so madly in love with you 🥺. Even as I write this, my eyes and
          tears 😢 reveal how much you mean to me, because words alone can't
          explain my inner feelings. Be with me forever, hold my hand 🤝, and I
          will show you what real, pure, blind, mad love is 💘. I love you so
          much 🥺❤️♾️📈
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
          I love you more than words can express, Devu. My love for you is
          infinite, and even that seems small in comparison to the depths of
          what I feel for you. No one could ever love you the way I do, and no
          one could ever love me like you do. You are my everything—my precious
          💎, more valuable than anything in this universe 🌌. You mean the
          world to me 🌍, more than anyone could ever understand. You are the
          one person I love so madly and so completely, and that person is you,
          Devu 🥺❤️. You are my heart ❤️, my soul 💫, you are my breath🌬️, my
          everything 💖.
        </p>
        <p className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold tracking-tighter">
          Forever in my every lives and every heartbeat im yours and only yours
          and you are mine only mine forever 💍💯
        </p>
        <p className="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl font-bold tracking-tighter">
          Your's Aadhi🫀
        </p>
      </div>
    </div>
  );
};

export default ScrollTriggeredLyrics;
