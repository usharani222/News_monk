import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Tom Hunt",
        "title": "How to turn leftover roast pork into a delicious slider – recipe | Waste not",
        "description": "A fun way to serve leftover roast meat, especially when paired with a zingy slawIf, like me, you love your leftovers, Sunday is the perfect day to cook a feast large enough to make extra food for the week ahead. Thick end of pork belly is one of my family’s f…",
        "url": "https://www.theguardian.com/food/2023/jun/03/how-to-turn-leftover-roast-pork-into-a-delicious-slider-recipe-zero-waste-cooking",
        "urlToImage": "https://i.guim.co.uk/img/media/944fd20c6c2c119b64ed91ef8aaf2a870afa7567/0_0_5360_3217/master/5360.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a2b32b804ec4172d51ab64a47e21829a",
        "publishedAt": "2023-06-03T05:00:21Z",
        "content": "If, like me, you love your leftovers, Sunday is the perfect day to cook a feast large enough to make extra food for the week ahead. Thick end of pork belly is one of my familys favourite roasting joi… [+2314 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Guardian Staff",
        "title": "From Spider-Man: Across the Spider-Verse to Anselm Kiefer: a complete guide to this week’s entertainment",
        "description": "Whether it’s Marvel’s multiverse or the German artist’s Joycean dreamworld, our critics have you covered for the next seven daysSpider-Man: Across the Spider-VerseOut nowAfter reuniting with Gwen Stacy, Miles Morales is back and swinging his way into the Mult…",
        "url": "https://www.theguardian.com/culture/2023/jun/03/going-out-staying-in-complete-guide-to-this-weeks-entertainment",
        "urlToImage": "https://i.guim.co.uk/img/media/6545ac0b0ddaf46ffaff8f451f34cd72e07c9ac1/584_0_2931_1760/master/2931.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=225492bd6f2b2a20f1eb3808593f15f8",
        "publishedAt": "2023-06-03T05:00:22Z",
        "content": "Going out: Cinema\r\nSpider-Man: Across the Spider-VerseOut nowAfter reuniting with Gwen Stacy, Miles Morales is back and swinging his way into the Multiverse. There he meets a whole cluster of Spider-… [+10358 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Guardian"
        },
        "author": "Yotam Ottolenghi",
        "title": "Yotam Ottolenghi’s picnic and camping recipes",
        "description": "Smoked trout quiche, fruity chicken enlivened by za’atar and a couscous salad: outdoor food can be something really special, so long as you follow a few simple rulesCamping, festivals, picnics: people love to make out that such activities are super-relaxed, c…",
        "url": "https://www.theguardian.com/food/2023/jun/03/picnic-and-camping-recipes-yotam-ottolenghi",
        "urlToImage": "https://i.guim.co.uk/img/media/913f0b42ede62bb7eb2068e53e8bee2841a5d237/0_1318_3713_2228/master/3713.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=abe5cd87d3dff8dae9066bd2fb6aeda2",
        "publishedAt": "2023-06-03T07:00:25Z",
        "content": "Camping, festivals, picnics: people love to make out that such activities are super-relaxed, chilled and sort of happen all by themselves. Its a ruse, though. There are rules! Especially when it come… [+8032 chars]"
    },
    {
        "source": {
            "id": "business-insider",
            "name": "Business Insider"
        },
        "author": "Ryan Hogg",
        "title": "Elizabeth Holmes ordered dinners for Theranos staff but made sure they weren't delivered until after 8 p.m. so they worked late: book",
        "description": "According to John Carreyrou's \"Bad Blood,\" Holmes would get food delivered to Theranos offices after hours to help keep them working into the evening.",
        "url": "https://www.businessinsider.com/elizabeth-holmes-dinners-theranos-keep-staff-late-bad-blood-book-2023-6",
        "urlToImage": "https://i.insider.com/62934ab3ff955c0019c5e8d5?width=1200&format=jpeg",
        "publishedAt": "2023-06-03T08:18:37Z",
        "content": "Elizabeth Holmes emulated the late Apple CEO Steve Jobs.AP\r\n<ul>\n<li>Theranos founder Elizabeth Holmes started serving her 11-year sentence on May 30. </li>\n<li>John Carreyrou's \"Bad Blood\" said Holm… [+1962 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Boing Boing"
        },
        "author": "Boing Boing's Shop",
        "title": "Grab this lightweight refurbished iPad Mini 2 for only $107",
        "description": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nTL;DR: Slip this lightweight refurbished Apple iPad Mini 2 into your tote this summer and enjoy beach reads, streamin…",
        "url": "https://boingboing.net/2023/06/02/grab-this-lightweight-refurbished-ipad-mini-2-for-only-107.html",
        "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/06/product_328903_product_shots1-1.jpeg?fit=1200%2C800&ssl=1",
        "publishedAt": "2023-06-03T03:00:00Z",
        "content": "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nTL;DR: Slip this lightweight refurbished Apple iPad Mini 2 … [+1966 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "9to5Mac"
        },
        "author": "Zac Hall",
        "title": "Apple Watch features I really thought we’d have before watchOS 10",
        "description": "watchOS 10 is just a few days away, and the update sounds like a big deal for big Apple Watch screens. A new widget overlay and apps optimized for ? Let’s go!\nNot much else has been rumored for watchOS 10, however, and that’s probably because the Apple Watch …",
        "url": "https://9to5mac.com/2023/06/02/watchos-10-feature-request/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/02/00.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-06-03T04:57:08Z",
        "content": "watchOS 10 is just a few days away, and the update sounds like a big deal for big Apple Watch screens. A new widget overlay and apps optimized for Apple Watch Ultra? Let’s go!\r\nNot much else has been… [+4874 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Macworld"
        },
        "author": "DealPost Team",
        "title": "Make calls, play music and more on this affordable smartwatch",
        "description": "Macworld\n\n\n\r\n\n\n\n\nIf you were waiting for the Apple Watch to finally become affordable… well, you might be waiting awhile. Luckily, there’s a full-featured alternative waiting in the wings. The Chronowatch C-Max Call Time Smartwatch has a ton of functionality …",
        "url": "https://www.macworld.com/article/1940515/make-calls-play-music-and-more-on-this-affordable-smartwatch.html",
        "urlToImage": "https://www.macworld.com/wp-content/uploads/2023/06/Macworld-Chronowatch-C-Max-Call-Time-Smartwatch-Pink-1.jpeg?quality=50&strip=all&w=1024",
        "publishedAt": "2023-06-03T08:00:00Z",
        "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nIf you were waiting … [+941 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Elespanol.com"
        },
        "author": "Adrián Raya",
        "title": "Los auriculares que rivalizan con los AirPods y esconden un secreto para que la música se escuche mucho mejor",
        "description": "Con los nuevos Razer Hammerhead Pro HyperSpeed la marca lanza sus auriculares inalámbricos más completos y potentes que ha hecho jamás.",
        "url": "https://www.elespanol.com/elandroidelibre/moviles-android/analisis/20230603/auriculares-rivalizan-airpods-esconden-secreto-musica-escuche/767923297_0.html",
        "urlToImage": "https://s1.eestatic.com/2023/05/31/elandroidelibre/767933438_233668422_1200x630.jpg",
        "publishedAt": "2023-06-03T00:36:46Z",
        "content": "En un mercado tan competitivo como el de los auriculares inalámbricos de tipo True Wireless (es decir, las alternativas a los AirPods de Apple), cada vez es más difícil destacar. Razer ahora lo inten… [+11548 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yanko Design"
        },
        "author": "Sarang Sheth",
        "title": "Apple to Announce Their First Ever Augmented Reality Glasses in 3 days… Here’s What to Expect",
        "description": "Apple to Announce Their First Ever Augmented Reality Glasses in 3 days… Here’s What to ExpectApple hasn’t launched a single new product category since they unveiled the AirPods back in 2016. Sure, the AirPods Max debuted in 2020, but it...",
        "url": "https://www.yankodesign.com/2023/06/02/apple-to-announce-their-first-ever-augmented-reality-glasses-in-3-days-heres-what-to-expect/",
        "urlToImage": "https://www.yankodesign.com/images/design_news/2023/05/apple-to-announce-their-first-ever-augmented-reality-glasses-in-3-days-heres-what-to-expect/apple_reality_pro_headset_concept_1.jpg",
        "publishedAt": "2023-06-03T01:45:04Z",
        "content": "Apple hasn’t launched a single new product category since they unveiled the AirPods back in 2016. Sure, the AirPods Max debuted in 2020, but it wasn’t a bold leap as much as natural progression. The … [+4898 chars]"
    }
  ]
  constructor(){
    super();
    console.log("hello const")
    this.state={
      articles:this.articles,
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&apiKey=dd466ef5f77f43f096e0cf0e231b0bc1&page=1"
    let data = await fetch(url);
    let parsedData = await data.json() 
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  handlePrevClick = () =>{
    console.log("previous")
  }
  handleNextClick = () =>{
    console.log("next")
  }

  render() {
    return (
          <div>
            <div className="container my-3">
              <h2>NewsMonk-Headlines</h2>
              <div className="row">
              {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                  <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage}
                  newsurl={element.url}/>
                </div>
              
              })}

                
              </div>
              <div className="container d-flex justify-content-between">
                    <button type="button" class="btn btn-dark"onClick={this.handleprevClick}>&larr; Previous</button>
                    <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
          </div>
    )
  }
}
