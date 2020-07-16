const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Testimony"
);

const testimonySeed = [
  {
    author: "Ambarish Mehrotra",
    testimony:
      'Before working with Chelle, I really needed to get clarity on my career, to contemplate and discover where my true self would flourish in. I fortunately met Chelle and discovered that we had worked at the same company although not at the same time. We respected a lot of the same people and we clicked immediately. While working with Chelle, I found an unwavering ally, an unrelenting partner in my quest. Chelle has an innate sense of the unity of the universe, she sees the bigger picture and is passionate about my career in a manner that brings energy to me and belief in my quest. Chelle’s resume writing ability is great because she knows how to say a lot in a few words. She gets networking and the essentials of building a career, she also gets human fallibility and has the patience and humility to get into your shoes and help. She genuinely cares! As a result, of having Chelle as my career coach I am in a better place than I was and am distinctly better off because I found a friend.',
    date: new Date(Date.now())
  },
  {
    author: "Isabelle Martin",
    testimony:
      "Before working with Chelle, I needed help with updating my resume, LI profile and support for interview questions. While working with Chelle, she was absolutely insightful in providing me with the tools and resources to help me navigate the job search in this COVID-19 market. As a result of our time together I have successfully landed some great interviews and hopefully a new job very soon. I highly recommend partnering with Chelle for her services during this volatile market.",
    date: new Date(Date.now())
  },
  {
    author: "Marianne Fischer",
    testimony:
      "Before working with Chelle, I felt stressed and completely stuck; unsure that my career path was the one that I wanted to be on. I had interviewed a number of different Career Coaches, all of which were highly qualified including Chelle. I knew Chelle would not only give me the results I was looking for, but also take the time to understand who I am as a person and what I truly need to succeed and reach my goals. While working with Chelle, I discovered strategies and insights that only through her professional experience and expertise were able to give me. I felt more confident going forth and tackling the obstacles that are relevant to finding work in today’s climate. As a result I not only feel like I have someone on my side who’s rooting for my success, but I feel like I can move forward with landing that job that I’ve always wanted. She’s given me the tools for success and the confidence that I have everything I need to reach my goals. I feel so fortunate to have found her as a coach, she’s more than worth the investment!",
    date: new Date(Date.now())
  },
  {
    author: "Sonia Trimble",
    testimony:
      "My life has been so enriched in working with Chelle in my career transition. She is incredibly insightful, passionate and an overall pleasure to work with. Her ability to help me focus on what matters in my professional abilities and aspirations has been invaluable to my professional growth.",
    date: new Date(Date.now())
  },
  {
    author: "Eleanor Rael",
    testimony:
      "I engaged Chelle to provide input on a troubling situation I experienced with my employer. She listened and provided me with the insight I needed to reconcile the issue for myself and determine my next steps. Chelle is a caring listener with an honest desire to help those who she works with. I am extremely glad I chose her as my career strategist. And, as an added benefit, her Resume Rescue services resulted in the development of my branding statement, improved resume content and introduction of interviewing skills for future opportunities. I highly recommend her services",
    date: new Date(Date.now())
  },
  {
    author: "Jane Vogt",
    testimony:
      "I worked with Chelle to help me revamp my resume and presence on LinkedIn. Her years of working in human resources have given her the insight to what hiring managers are looking for in a resume. With her help we were able to create a resume with a new format that is creative, concise and truly highlights my skills. What I appreciated about her process is the 'homework' she gave me help me create a branding statement, accomplishments and adjectives that describe me. I highly recommend Chelle Johnson if you are looking to update your resume, receive guidance for a career change or prep for job interviews.",
    date: new Date(Date.now())
  },
  {
    author: "Jennifer Prentice",
    testimony:
      "After a bit of a search to find the right fit for me when I was in need of a resume revamp I found Chelle. Our initial call was really enlightening. She is an energetic, friendly and matter-of-fact person who is dedicated to helping others see the potential in themselves, not only through her writing but also through her coaching. If you put in the work she will make you into a rock star. Typically it's a hard thing to dig deep and celebrate your accomplishments to the fullest, but every exercise Chelle puts you through will have you being more thoughtful and introspective than you could imagine you were capable. Working with Chelle has brought me a newfound confidence in my work, and now everything I have done of value in my career is on virtual paper. If you're looking for a coach or resume services, look no further!",
    date: new Date(Date.now())
  },
  {
    author: "Lisa Woodroof",
    testimony:
      "Chelle and I connected instantly! Her authenticity and genuine stake in the discovery of my purposeful next chapter was quickly apparent. Her years of expansive talent acquisition leadership experience stands no match for her gift of sparking a synergy in people. She asked me the right questions, and gave me perspective that inspired a deep soulful exploration for the pursuit of {The Best (ME)}. As I have worked previously in Organizational Development projects, her free seminars on resume writing and interview intervention were spot on with recommendations packed with, 'behind the curtain', details. Branding and purpose development with Chelle is not like the experience of someone telling you to simply list a skill here or apply into a particular industry. Her attention to detail for coaching you into the next holistic place for you as a person is her expertise! Don't waste another second of your next job, career, or professional pursuit...hire Chelle immediately to help you get there.",
    date: new Date(Date.now())
  },
  {
    author: "Elizabeth Zinanti",
    testimony:
      "I’m very pleased to be working with Chelle during my career transition and would highly recommend her as she has been an invaluable resource for me in regards to professional development. She is a reliable and trusted partner who has assisted me with professional refinement and has been paramount in helping to polish my resume and professional brand. She is dedicated, responsive, well-connected, and compassionate. Chelle is so passionate about what she does, and it shows with the care and attention she provides each client. She’s also one of the most genuine and fun individuals I’ve ever met. If you get the opportunity to work with her, take it!",
    date: new Date(Date.now())
  },
  {
    author: "Amy Stenner",
    testimony:
      "I randomly introduced myself to Chelle via LinkedIn about a month ago after being laid off from my job. I was desperate for help to update and refresh my resume, as well as help to understand how to use LinkedIn for a new job search. After an introductory phone call, I quickly realized that Chelle’s professional toolbox was deep and wide with real-world experience and insight from career coaching, resume writing and rebranding, to interviewing and everything in between. Her professional, yet personal approach was exactly what I needed to personally dig deep to create a Uniquely-Me brand and resume. The collaborative effort with Chelle was rewarding and fun. The supporting documents that she provided were helpful to complete the due diligence needed to understand, and successfully rebrand myself, create an impactful resume, and align a LinkedIn profile. In addition to Chelle’s executive HR experience, her devotion to her family and community bring a valuable and well-rounded approach for staying true to professional and personal goals. I was able to attend one of Chelle’s free Interviewing seminars which was well organized, collaborative and informative. I would recommend Chelle, without hesitation.",
    date: new Date(Date.now())
  },
  {
    author: "Jan Vedanth, P.E.",
    testimony:
      "I just wanted to say how happy and glad I am with the sessions I had. Chelle was extremely helpful and was a great coach, and was able to guide me through the interview process in a very short time frame. She provided great constructive feedback, and I felt a huge push in my interviewing skills by practicing with her. I will definitely be recommending her in the future to anyone I know undergoing any type of interview. She is also very personable and is able to adapt to the Industry/ and type of coaching the client needs.",
    date: new Date(Date.now())
  },
  {
    author: "Brian Burdick",
    testimony:
      "The professional landscape is extremely competitive especially within the data analytics field. I hired Chelle to help me develop my interviewing skills and improve my resume. She is genuine and cares about the people she is coaching. I am currently applying the things that i learned during our session and am excited to see the results.",
    date: new Date(Date.now())
  },
  {
    author: "Mike Stees",
    testimony:
      "I initially planned to hire Chelle to help me re-write my resume and improve my Linkedin profile. After speaking with her I ended up hiring her more as a career coach who also helped me with my resume and Linkedin profile. It became very clear that she needed to better understand who I was and what I wanted in order to put a product out there that showed that. We met in person and it was clear that she was able to understand what makes me click and she helped show that in my updated resume and Linkedin profile. I've had job opportunities since working with Chelle but as of now not the right fit for me and she's helped me organize my thoughts around all that goes into making a decision to start a new career. This help was only possible because she took the time to better understand who I am and what I seek in life and in my career. I recommend Chelle to help you manage your career and all that goes with that.",
    date: new Date(Date.now())
  },
  {
    author: "Michele Thomas",
    testimony:
      "Chelle and I have been friends for many years and went to Thunderbird grad school together. When I found out my position was being eliminated, I hired a resume writer to revamp and revise my resume. Unfortunately, I was not pleased with the work this person did. I then reached out to Chelle to see if she might be able to help me. Chelle listened to my needs, asked me the right questions about all of my accomplishments during my career, and tailored my resume to fit my career goals and objectives. Not only is my resume current and relevant, it has the best keywords to make my resume pop to prospective employers. I landed a great role quickly, and received positive comments from Recruiters on the quality of my resume throughout my search. Chelle sent me job postings and encouraged me throughout my search thus far. She's gave me interview tips, helped me network, and is a great resource and sounding board. Chelle is personable and easy to work with. I highly recommend her as your personal career coach or to design and write an amazing resume that will quickly get you noticed.",
    date: new Date(Date.now())
  },
  {
    author: "Rick Bolin",
    testimony:
      "Having worked with Chelle closely I can strongly recommend her. She is talented, thoughtful, disciplined and knowledgeable. Her experience ensured that I was focused on the activities and challenges that really matter. She understands people and knows when to push and when to step back and provide support. Working with Chelle will open your eyes to what is actually best for you and to how to find a role that lets you sustain that best self.",
    date: new Date(Date.now())
  },
  {
    author: "Carlos Belloso",
    testimony:
      "Chelle flexes her EQ to bring the best out of people! She is a pleasure to work with and a solid asset to anyone she is willing to partner with.",
    date: new Date(Date.now())
  },
  {
    author: "Stephen Hatch",
    testimony:
      "I had the opportunity to work with Chelle in her role as Sr. Manager, Talent Acquisition at Lockheed Martin. Chelle was a great leader of the recruiting team and helping develop new recruiters in a high volume req environment. She was effective in partnering with hiring managers and leaders to drive process improvements and results in hiring top technical talent. It was a pleasure working with Chelle!",
    date: new Date(Date.now())
  },
  {
    author: "Christina Noble CFP CSSGB",
    testimony:
      "Chelle Johnson is passionate about connecting individuals to best opportunities, has significant experience in championing and leaning in to understand diversity initiatives and for decades has effectively served companies in attracting and retaining the brightest and most engaged colleagues from small entrepreneurs to the Fortune 50. As a client of Chelle’s in two companies, I saw her be engaged in seeking to understand what characteristics and skills we needed and importantly - also provided sound advice around navigating change in workforce demands and market transformation with respect to colleagues. Chelle has a warm personality and a sense of humor that she brings to the most challenging of situations. I highly recommend Chelle and look forward to working with her in the future!",
    date: new Date(Date.now())
  },
  {
    author: "Renee Capellini",
    testimony:
      "I reported to Chelle at Comcast and she was always a great advocate for me. She took a personal interest in her employees to ensure they were feeling supported. In her time at Comcast, she worked to develop standardized processes where there were previously none which was a great resource across talent acquisition and human resources. Chelle was also a big advocate for D&I and military programs. She valued the impact and would speak to the importance of these programs with both business partners and TA leadership. Her support was valuable in my personal development of these programs in my local office.",
    date: new Date(Date.now())
  },
  {
    author: "Arfan Qureshi",
    testimony:
      "Chelle is such a pleasure to work with. Her easy going personality, professional competence, and ability to ask insightful questions makes her a tremendous add to any team.",
    date: new Date(Date.now())
  },
  {
    author: "Lindsay Teplesky",
    testimony:
      "I've had the pleasure of working with Chelle for the past 2 years as we've built a relationship between my organization (Hiring Our Heroes) and hers (Lockheed-Martin). Chelle was instrumental in getting the Corporate Fellowship Program launched at her site and provided supervision for the first transitioning service member to be matched with Lockheed-Martin in Denver. Chelle is responsive, organized and has gone above and beyond to make the Corporate Fellowship a success at Lockheed. Incorporating the Corporate Fellowship into the Lockheed culture was not a required duty but simply something Chelle volunteered to spearhead; as such, it's evident that she genuinely cares about military spouse and veteran hiring.",
    date: new Date(Date.now())
  },
  {
    author: "Erika Agin",
    testimony:
      "Chelle's broad HR experience coupled with her ability to think outside of the box enables her to creatively and strategically solve complex HR challenges. Her down to earth approach, combined with her impressive thought leadership capabilities produces an effective leadership style that would shine in any culture. Chelle does everything with a positive and warm approach and is a supportive leader through and through.",
    date: new Date(Date.now())
  },
  {
    author: "Anthony Gilbert",
    testimony:
      "Chelle was my first manager after transitioning out of the military. She is a great leader and uses a transformational style of leadership to develop, coach and mentor her team. She has a passion for military. She has a strong focus and passion on diversity and inclusion. She was easily able to navigate through the bureaucratic processes in such a huge company to get things accomplished in a timely manner",
    date: new Date(Date.now())
  },
  {
    author: "Albert Chhean",
    testimony:
      "My name is Albert Chhean and I have known Chelle for 8 + months. As a Recruiter, I had the wonderful experience of working with Chelle in the past few months under Lockheed Martin Space. Chelle is a Senior Manager of Talent Acquisition managing 10+ employees in a very strong division and company. In all my years of experience, some people stand out for their great qualities and Chelle is one of them. She is well known for her leadership, positive attitude, teamwork, intelligence, work ethic, and kindness. She is well respected throughout the organization for being approachable, being the 'go-to' person, for meeting short deadlines, and ensuring her individual team members are successful. Throughout the time I've known Chelle, I’ve experienced time and again that she is a dedicated, motivated leader with an amazing spirit.During her time with Lockheed Martin, she played an important role in building up the college and intern department for Space. Chelle focused and excelled in customer service, showing her passion in diversity and inclusion. In fact, our numbers and percentages increased from previous years due to Chelle’s leadership. In summation, due to her great attitude, dedication and talent she would be a great asset to any team or company as she was for Lockheed Martin. It is an honor to work by her side.",
    date: new Date(Date.now())
  },
  {
    author: "Linda Koltonow",
    testimony:
      "I have had the privilege of partnering with Chelle for seven plus years. Chelle is definitely an innovative thinker who is continuously educating herself on latest trends in HR and technology as well as other subject matter. She is a great leader and mentor to her team, making sure she shares her knowledge with them. She cares about her colleagues and encourages them to be the best they can be. These qualities are very hard to find.",
    date: new Date(Date.now())
  },
  {
    author: "Jacqueline Hardy, MBA/MLRHR",
    testimony:
      "Chelle cares about doing a good job and is an innovative thinker. Shortly after implementing a new TAS system she started working on a mobile job application. She isn’t afraid to take on big projects or of new ideas. She maintains strong relationships with leaders, cares deeply for her staff and takes pride in developing others. Her hard work is to be commended.",
    date: new Date(Date.now())
  },
  {
    author: "Scott Jeffrey MCP CIWa VTSP CSE RSS W AD EVSI",
    testimony:
      "Chelle Johnson and I met when I was the Business Analyst on a Lean Six σ Green Belt Project. The project was a highly complex undertaking and technical in nature; and we were tasked to transform business problems and use cases into a Functional Requirements document and supporting deliverables. Though Chelle's background is not in IT, she worked diligently and contributed greatly by drawing on her experiences in the business. Further, she helped her team mates approach the project from a service (to the other business units) perspective, so that the new client account setup process and tools would be as efficient and easy to use, respectively, as possible. Additionally, Chelle proved to be a great resource for me as I gathered information and tribal knowledge to complete my consulting responsibilities in internal communications (e.g., marketing, change management and informational messaging). Sonora Quest Laboratories is blessed to have such a resource.",
    date: new Date(Date.now())
  },
  {
    author: "Armando Castorena",
    testimony:
      "Chelle, was great to work with. She could always be counted on to do outstanding work. Her peers often commented that she always brought a high degree of personal energy to the workplace.",
    date: new Date(Date.now())
  },
  {
    author: "Jef Wright",
    testimony:
      "Chelle has been instrumental in locating and securing high-quality talent for Sonora Quest Laboratories over the past several years. Her and her recruitment team work hand in hand with our Marketing department to make sure our social media and branding goals are aligned.",
    date: new Date(Date.now())
  },
  {
    author: "Peter Michaelson",
    testimony:
      "Chelle is a strong business leader. She effectively collaborates with her clients to understand their business needs and works closely with them to ensure mutually satisfactory outcomes. She is well organized and demonstrates superior project management skills.",
    date: new Date(Date.now())
  },
  {
    author: "Chris Bolnick",
    testimony:
      "Chelle is a detail oriented manager who works very hard to meet her goals and outcomes. Chelle really understood the industry and came up with new and creative ways to bring people into the organization.",
    date: new Date(Date.now())
  },
  {
    author: "Terri Bowen",
    testimony:
      "I have worked under Chelle's direction for the past few years, and have found her to be an excellent manager for our Recruitment & Staffing area. She is very detail oriented and makes every effort to know the business and the needs of our client groups in the laboratory field. She is a very fair manager, making sure we have the tools and information we need to do our jobs as Recruiters. It is a pleasure working with her",
    date: new Date(Date.now())
  },

];

db.Testimony
  .remove({})
  .then(() => db.Testimony.collection.insertMany(testimonySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
