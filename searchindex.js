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
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "عمبل راضى عن خدماتنا رضاء تام جداا   خدماتنا  خدمات مصممة خصيصًا لعملك خدمات مصممة خصيصًا لعملك    مشروعنا  مشاريعنا المكتملة مؤخرا   مقالاتنا الحديثة  اخر مقالاتنا  اراء عملائنا  تقييمات من بعض عملائنا  تغطية شاملة  استجابة سريعة  أسعار مناسبة  جميع الحقوق محفوظة لشركتنا    إتصل الأن  إرسل لنا موقعك الان   ", "");
   this[database_length++] = new SearchPage("article.html", "Untitled Page", "ونش إنقاذ أكتوبر    احدث   المقالات مؤخرا  اراء عملائنا  تقييمات من بعض عملائنا  جميع الحقوق محفوظة لشركتنا    إتصل الأن  إرسل لنا موقعك الان   ", "");
   return this;
}
