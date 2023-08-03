// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "عمبل راضى عن خدماتنا رضاء تام جداا   خدماتنا  خدمات مصممة خصيصًا لعملك خدمات مصممة خصيصًا لعملك    مشروعنا  مشاريعنا المكتملة مؤخرا   مشروعنا  مشاريعنا المكتملة مؤخرا   اراء عملائنا  تقييمات من بعض عملائنا  Info  Connect Us  Useful Links  More Stuff  Copyright © Footer 2018 All right reserved   متخصصون في ونش الإنقاذ السريع   خدمة فورية لإنقاذك!   متخصصون في ونش الإنقاذ السريع   خدمة فورية لإنقاذك!   متخصصون في ونش الإنقاذ السريع   خدمة فورية لإنقاذك!    ", "");
   return this;
}
