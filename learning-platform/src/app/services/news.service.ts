import { Injectable } from '@angular/core';
import { Course, Status } from '../models/course.model';
import { Observable, map, of } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private repo: News[] = [
    {
      title: 'Space Tech Expo USA 2024 adds new Technology Conference',
      description:
        'Space Tech Expo USA will include a brand-new Technology Conference in addition to its Industry Conference (Courtesy Space Tech Expo) Space Tech Expo USA, scheduled to take place on May 14-15 in Long Beach, California, USA, will include a brand-new Technology Conference, in addition to its Industry Conference, at this year’s event. Running alongside the exhibition, the conferences will take place across two stages and see over 40 speakers discuss in-space servicing, assembly and manufacturing; satellite technology; investment; ground segment optimisation and more. Early confirmed speakers include representatives from US Space Force, Jet Propulsion Laboratory, Deloitte, Lockheed Martin, Space Tango and Amazon Web Services. The conferences will include panel discussions, keynotes, presentations and interactive seminars with the aim of enhancing expertise and sparking dynamic conversations to help take businesses to the next level.',
    },
    {
      title: 'New seawater desalination technology',
      description:
        'The new efficient technology extracts drinkable water from the sea while storing electricity. With water scarcity reaching critical levels, especially in regions like Spain where unsustainable water stress looms large, urgent solutions are needed. Responding to this pressing challenge, researchers at New York University (NYU) have developed a new desalination technology. How it worksThe system works by directing seawater into two pathways: one for salinization and the other for desalination. Two extra channels hold the electrolyte and redox molecule, separated by a membrane. Through electrochemical reactions, sodium ions are extracted, and freshwater is generated. By adjusting the time seawater stays in the system, it can produce drinkable water either in one go or in batches. The team also used advanced 3D printing techniques, offered by the NYU Maker Space in its development.',
    },
    {
      title: 'The new tech bringing loved ones back to life through AI',
      description:
        'When technology entrepreneur Artur Sychov\'s father was diagnosed with cancer, he was forced to accept a day may soon come when he wouldn\'t be able to speak to him again. The 38-year-old knew he would give anything to have another father-son conversation after his dad\'s death. So, using artificial intelligence, he got to work on a way that could make it happen for others in his position. Artur has created a virtual reality tool called "live forever mode". It features digital avatars who can simulate a person\'s voice, mannerisms and movements after just 30 minutes of the user being observed. The goal is for the avatar to live forever online as a memory of its creator so future generations of their family can interact with it. Artur struggles to see any downsides to it. "You can get to know the person," he says. "You can hear their voice... You get to talk to them about different topics, and you get to inject a little bit of their personality. "And with time, you\'d actually be more and more precise. It would be more like them."',
    },
    {
      title:
        'Deadly escooter accidents highlight a new technology at odds with South Florida lifestyle',
      description:
        'FORT LAUDERDALE, Florida: The victims of scooter accidents are often young. In the last month alone, two scooter accidents left South Florida students dead while commuting. On March 18, 16-year-old Anthony Malec was hit and killed by a Tesla while riding his electric scooter to school. On March 5, Daniel Bishop, a senior at the University of Miami, was struck and killed while riding his scooter to class. Bishop had attended Marjory Stoneman Douglas and survived the mass shooting in 2018. In car-reliant areas like South Florida, scooters have served as a makeshift solution to the “last mile” problem, or the last leg of a journey, such as from home to campus or between a Brightline train station and an office. The “micro-mobility” devices present an appealing choice to those who live close to a destination and may not have immediate access to a car. But the region’s reliance on cars also makes it a deadly place for scooter-riders, often silent, unexpected or barely visible at roads and intersections. The deaths of two students in a matter of weeks have underscored the dangers of a growing new technology at odds with South Florida lifestyles. And like the state’s roads, its laws and accident-reporting procedures often fail to account for scooters. “It’s a case of technology which has raced ahead of our infrastructure and resources,” said Todd Falzone, an attorney with Kelly Uustal who has represented victims of scooter accidents. “Just because you can do something, doesn’t mean you should.” Falzone represented the family of Ashanti Jordan, a 27-year-old who was left in a vegetative state after an accident on a Lime scooter on her way home from work in Fort Lauderdale.',
    },
    {
      title: 'OpenAI unveils new AI voice technology amid deepfake concerns',
      description:
        'ChatGPT creator OpenAI unveiled a preview of its latest artificial intelligence (AI) tool, Voice Engine on Friday. The new OpenAI tool can create realistic-sounding speech that mimics human voices.. The tool, which requires only a 15-second audio sample, can closely replicate the original voice of the speaker, according to an OpenAI blog post. OpenAI said that Voice Engine could help users with reading and translating languages. It can also give a voice to those who cannot speak. However, the company acknowledges the serious risks associated with this technology, especially during an election year. Developed in late 2022, Voice Engine underwent private testing with a select group of trusted partners in late 2023. These partners agreed with the company that they would adhere to usage policies that require explicit consent from the original speaker and prohibit impersonation without consent, according to the company. Additionally, they must disclose that the voices are AI-generated, and the audio features watermarking for traceability. “We hope to start a dialogue on the responsible deployment of synthetic voices, and how society can adapt to these new capabilities,” OpenAI said in the blog post.  “Based on these conversations and the results of these small scale tests, we will make a more informed decision about whether and how to deploy this technology at scale.” OpenAI recommends implementing voice authentication to verify the original speaker\'s intent and maintaining a "no-go voice list" to prevent creating voices resembling prominent figures. While OpenAI remains cautious, it hopes to foster a dialogue on responsible deployment and considers wider release possibilities. OpenAI seemed unsure about fully releasing the tool, saying that they hope to discuss the responsible use of AI-generated voices and how society can adjust to this new technology. Their decision on releasing Voice Engine will depend on these discussions and the small-scale tests. Earlier this year, a message that sounded like President Biden was sent to voters in New Hampshire before the primary election, telling them not to vote. A political strategist later admitted to creating fake robocalls to warn people about the dangers of AI in politics.An Arizona newsletter also recently released a deepfake video of a Republican politician to show readers how realistic this technology has become.',
    },
    {
      title:
        'Is your smart device safe from hackers? New FCC program will label cybersecure technology',
      description:
        "Everyday household items, including your remote thermostat and your baby monitor, may make you vulnerable to cyberhackers. But a new US federal programme hopes to identify and label which Internet-connected products are taking extra measures to protect your online information. Any device that can be accessed remotely and transfers information through the Internet is vulnerable to a hacker, said Tracy Mitrano, visiting professor of information science at Cornell University. If a hacker can access your device's data, they may be able to get to your account for the product, which is typically linked to a bank account or other personal information, Mitrano said. On most newly purchased products, the privacy settings are on default or completely off. It is up to you to take steps to protect the information routed through the device. Mitrano said she recently bought a printer and put a password on it to protect it against “hackers (that could) be foreign governments, organised crime, or they could be the stereotype of the kid in the basement”. Once a hacker finds a vulnerability, they attack it and use the stolen information, Mitrano said, adding that these attacks can happen in mere “nanoseconds”. The average household with Internet has more than 17 connected devices, a number that has jumped in the last three years as more people have shifted to working from home, according to research published by Parks Associates, a market research firm focused on internet-connected devices.",
    },
  ];

  getNews(): Observable<News[]> {
    return of(this.repo);
  }
}
