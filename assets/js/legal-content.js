/*
 * Legal texts for privacy.html and terms.html (English, Russian, Azerbaijani).
 *
 * Placeholders like {{company}} are filled from window.KEYBIT_LEGAL in config.js.
 * Optional parts are written [[key|text with {{key}}]] and disappear entirely when that value is empty
 * (address and regNumber are optional, so the site can be run by a private person without a company).
 * Empty values are rendered as highlighted "[to be completed]" markers by assets/js/legal.js.
 *
 * IMPORTANT: this is a solid baseline written for a small B2B software studio based in Azerbaijan.
 * It is NOT legal advice. Have a lawyer review it (and the RU/AZ
 * wording) before launch, and update it whenever you add analytics, a form backend, a CRM, a chat
 * widget or any other tool that touches visitors' data.
 */
window.KEYBIT_LEGAL_DOCS = {

/* ======================================================================================
   PRIVACY & COOKIE POLICY
   ====================================================================================== */
privacy: {

en: {
  title: 'Privacy & Cookie Policy',
  sections: [
    { h: 'Who we are', html: `
      <p>This website (keybit.dev) is operated by <strong>{{company}}</strong>[[address|, {{address}}]][[regNumber| (registration no. {{regNumber}})]] — “KeyBit”, “we” or “us”. KeyBit is a software development studio based in Baku, Azerbaijan.</p>
      <p>For the personal data described in this policy, KeyBit is the data controller. You can reach us at <a href="mailto:{{email}}">{{email}}</a>.</p>` },

    { h: 'What data we collect and why', html: `
      <p>We keep this to a minimum. The site has no user accounts, no tracking and no advertising.</p>
      <div class="lg-table"><table>
        <thead><tr><th>Situation</th><th>Data</th><th>Purpose</th><th>Legal basis</th></tr></thead>
        <tbody>
          <tr><td>You contact us (form, email, Telegram, LinkedIn)</td><td>Name, company, email address, the service you are interested in, your project description and anything else you choose to share</td><td>To reply to you, discuss your needs and prepare a proposal for a possible engagement</td><td>Your consent; steps taken at your request before a contract; our legitimate interest in running our business</td></tr>
          <tr><td>You visit the site</td><td>Technical data handled by our hosting provider: IP address, browser and device type, pages requested, date and time</td><td>To deliver the site, keep it secure and prevent abuse</td><td>Our legitimate interest in a secure, working website</td></tr>
          <tr><td>You change a setting (language, theme, cookie choice)</td><td>The setting itself, stored only in your browser</td><td>To remember your choice</td><td>Strictly necessary for a function you asked for</td></tr>
        </tbody>
      </table></div>
      <p>Legal bases are named as in the GDPR. Where Azerbaijani law applies to you, we rely on the equivalent grounds under that law, in particular your consent.</p>
      <p>Sending us information is voluntary, but without your name and a way to reach you we cannot respond.</p>` },

    { h: 'What we do not do', html: `
      <ul>
        <li>We do not sell your personal data.</li>
        <li>At the moment we do not use analytics, advertising or tracking cookies, or social-media pixels on this site.</li>
        <li>We do not load fonts, icons or scripts from third-party servers, so your browser does not contact other companies just because you opened our pages.</li>
        <li>We do not make decisions about you by automated means and we do not build profiles of visitors.</li>
      </ul>` },

    { h: 'Cookies and similar technologies', html: `
      <p>This site uses your browser’s local storage, not third-party cookies. This is everything it stores:</p>
      <div class="lg-table"><table>
        <thead><tr><th>Name</th><th>Purpose</th><th>Stored for</th></tr></thead>
        <tbody>
          <tr><td><code>keybit-lang</code></td><td>Remembers the language you selected (essential, set when you pick a language)</td><td>Until you clear your browser data</td></tr>
          <tr><td><code>keybit-theme</code></td><td>Remembers light or dark theme (essential, set when you switch it)</td><td>Until you clear your browser data</td></tr>
          <tr><td><code>keybit-consent</code></td><td>Records your cookie choice and its date (essential)</td><td>Up to 12 months, then we ask again</td></tr>
        </tbody>
      </table></div>
      <p>Optional categories — analytics and marketing — are switched off and not used at the moment. If we introduce them, they will be loaded only after you give consent, and you will be able to withdraw it at any time. You can change your choice with “Cookie settings” in the footer of any page, or delete the data in your browser settings.</p>` },

    { h: 'Who we share data with', html: `
      <p>We share personal data only where needed:</p>
      <ul>
        <li>with KeyBit team members who handle enquiries;</li>
        <li>with service providers that help us run the website and communicate with you (for example hosting, email and messaging providers), under appropriate confidentiality and data-protection terms;</li>
        <li>with authorities, where the law requires it.</li>
      </ul>
      <p>The website is currently hosted on Cloudflare (Cloudflare, Inc., USA), which may process technical data such as IP addresses when serving pages; see Cloudflare’s privacy policy. If you contact us on Telegram or LinkedIn, those platforms process your data under their own policies. We never sell personal data.</p>` },

    { h: 'International transfers', html: `
      <p>Our teams and providers are located in several countries, so your data may be processed outside the country where you live, including outside the European Economic Area. Where the law requires it, we use appropriate safeguards for such transfers, such as adequacy decisions or standard contractual clauses.</p>` },

    { h: 'How long we keep data', html: `
      <ul>
        <li><strong>Enquiries:</strong> as long as needed to respond and, if no engagement follows, for up to {{retentionMonths}} months after our last contact; then we delete or anonymise them.</li>
        <li><strong>If we sign a contract:</strong> for as long as the contract and our legal obligations (for example tax and accounting) require.</li>
        <li><strong>Technical logs:</strong> according to our hosting provider’s retention schedule.</li>
        <li><strong>Browser storage:</strong> as shown in the table above.</li>
      </ul>` },

    { h: 'Security', html: `
      <p>We use appropriate technical and organisational measures to protect personal data, and we limit access to people who need it. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>` },

    { h: 'Your rights', html: `
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>access your personal data and receive a copy;</li>
        <li>have inaccurate data corrected and incomplete data completed;</li>
        <li>ask us to erase your data;</li>
        <li>restrict processing, or object to it, including processing based on our legitimate interests;</li>
        <li>receive your data in a portable format;</li>
        <li>withdraw your consent at any time (this does not affect processing carried out before withdrawal).</li>
      </ul>
      <p>To exercise a right, email <a href="mailto:{{email}}">{{email}}</a>. We will respond within one month, or within the period your local law sets. You also have the right to complain to a data protection authority — in Azerbaijan or in your country of residence.</p>` },

    { h: 'Children', html: `
      <p>Our website and services are intended for businesses and are not directed to anyone under 18. We do not knowingly collect personal data from children.</p>` },

    { h: 'Links to other websites', html: `
      <p>The site links to third-party services such as Telegram and LinkedIn. They have their own privacy policies and we are not responsible for how they handle your data.</p>` },

    { h: 'Changes to this policy', html: `
      <p>We may update this policy from time to time. The date of the latest version is shown at the top of this page. If the changes are significant, we will highlight them on the site.</p>` },

    { h: 'Contact', html: `
      <p>Questions or requests about personal data: <a href="mailto:{{email}}">{{email}}</a>. [[address|Postal address: {{address}}.]]</p>` }
  ]
},

ru: {
  title: 'Политика конфиденциальности и использования cookie',
  sections: [
    { h: 'Кто мы', html: `
      <p>Этот сайт (keybit.dev) принадлежит и управляется <strong>{{company}}</strong>[[address|, {{address}}]][[regNumber| (регистрационный номер: {{regNumber}})]] — далее «KeyBit», «мы». KeyBit — студия разработки программного обеспечения из Баку, Азербайджан.</p>
      <p>В отношении персональных данных, описанных в этой политике, KeyBit является оператором (контролёром) данных. Связаться с нами можно по адресу <a href="mailto:{{email}}">{{email}}</a>.</p>` },

    { h: 'Какие данные мы собираем и зачем', html: `
      <p>Мы собираем минимум данных. На сайте нет пользовательских аккаунтов, отслеживания и рекламы.</p>
      <div class="lg-table"><table>
        <thead><tr><th>Ситуация</th><th>Данные</th><th>Цель</th><th>Правовое основание</th></tr></thead>
        <tbody>
          <tr><td>Вы связываетесь с нами (форма, email, Telegram, LinkedIn)</td><td>Имя, компания, адрес email, интересующая услуга, описание проекта и всё, чем вы решите поделиться</td><td>Ответить вам, обсудить ваши задачи и подготовить предложение о возможном сотрудничестве</td><td>Ваше согласие; действия по вашему запросу до заключения договора; наш законный интерес в ведении бизнеса</td></tr>
          <tr><td>Вы посещаете сайт</td><td>Технические данные, которые обрабатывает хостинг-провайдер: IP-адрес, тип браузера и устройства, запрошенные страницы, дата и время</td><td>Показывать сайт, обеспечивать его безопасность и предотвращать злоупотребления</td><td>Наш законный интерес в безопасной и стабильной работе сайта</td></tr>
          <tr><td>Вы меняете настройку (язык, тему, выбор по cookie)</td><td>Сама настройка, которая хранится только в вашем браузере</td><td>Запомнить ваш выбор</td><td>Необходимо для функции, которую вы запросили</td></tr>
        </tbody>
      </table></div>
      <p>Правовые основания названы по GDPR. Если к вам применяется законодательство Азербайджана, мы опираемся на соответствующие основания по этому законодательству, прежде всего на ваше согласие.</p>
      <p>Передача информации нам добровольна, но без вашего имени и способа связи мы не сможем вам ответить.</p>` },

    { h: 'Чего мы не делаем', html: `
      <ul>
        <li>Мы не продаём ваши персональные данные.</li>
        <li>Сейчас на сайте нет аналитики, рекламных и отслеживающих cookie, а также пикселей соцсетей.</li>
        <li>Мы не загружаем шрифты, иконки и скрипты со сторонних серверов, поэтому ваш браузер не обращается к другим компаниям только потому, что вы открыли наши страницы.</li>
        <li>Мы не принимаем в отношении вас решений в автоматическом режиме и не составляем профили посетителей.</li>
      </ul>` },

    { h: 'Cookie и похожие технологии', html: `
      <p>Сайт использует локальное хранилище вашего браузера, а не сторонние cookie. Вот всё, что он сохраняет:</p>
      <div class="lg-table"><table>
        <thead><tr><th>Имя</th><th>Назначение</th><th>Срок хранения</th></tr></thead>
        <tbody>
          <tr><td><code>keybit-lang</code></td><td>Запоминает выбранный вами язык (необходимое, сохраняется, когда вы выбираете язык)</td><td>Пока вы не очистите данные браузера</td></tr>
          <tr><td><code>keybit-theme</code></td><td>Запоминает светлую или тёмную тему (необходимое, сохраняется, когда вы её переключаете)</td><td>Пока вы не очистите данные браузера</td></tr>
          <tr><td><code>keybit-consent</code></td><td>Фиксирует ваш выбор по cookie и его дату (необходимое)</td><td>До 12 месяцев, затем мы спросим снова</td></tr>
        </tbody>
      </table></div>
      <p>Необязательные категории — аналитика и маркетинг — отключены и сейчас не используются. Если мы начнём их применять, они будут загружаться только после вашего согласия, и вы сможете отозвать его в любой момент. Изменить выбор можно через «Настройки cookie» внизу любой страницы или удалив данные в настройках браузера.</p>` },

    { h: 'Кому мы передаём данные', html: `
      <p>Мы передаём персональные данные только когда это необходимо:</p>
      <ul>
        <li>сотрудникам KeyBit, которые обрабатывают обращения;</li>
        <li>поставщикам услуг, которые помогают нам поддерживать сайт и общаться с вами (например, хостинг, почта и мессенджеры), на условиях конфиденциальности и защиты данных;</li>
        <li>государственным органам, если этого требует закон.</li>
      </ul>
      <p>Сейчас сайт размещён на Cloudflare (Cloudflare, Inc., США), которая при отдаче страниц может обрабатывать технические данные, например IP-адреса; см. политику конфиденциальности Cloudflare. Если вы пишете нам в Telegram или LinkedIn, эти платформы обрабатывают ваши данные по собственным правилам. Мы никогда не продаём персональные данные.</p>` },

    { h: 'Международная передача данных', html: `
      <p>Наши команды и поставщики находятся в разных странах, поэтому ваши данные могут обрабатываться за пределами страны вашего проживания, в том числе за пределами Европейского экономического пространства. Когда этого требует закон, мы применяем надлежащие меры защиты для таких передач, например решения об адекватности или стандартные договорные условия.</p>` },

    { h: 'Как долго мы храним данные', html: `
      <ul>
        <li><strong>Обращения:</strong> столько, сколько нужно для ответа, а если сотрудничество не начнётся — до {{retentionMonths}} мес. после последнего контакта; затем мы удаляем или обезличиваем их.</li>
        <li><strong>Если мы заключим договор:</strong> пока этого требуют договор и наши юридические обязанности (например, налоговые и бухгалтерские).</li>
        <li><strong>Технические журналы:</strong> в соответствии со сроками хранения хостинг-провайдера.</li>
        <li><strong>Хранилище браузера:</strong> как указано в таблице выше.</li>
      </ul>` },

    { h: 'Безопасность', html: `
      <p>Мы применяем надлежащие технические и организационные меры для защиты персональных данных и ограничиваем доступ к ним кругом лиц, которым он необходим. Ни один способ передачи или хранения данных не является абсолютно безопасным, поэтому мы не можем гарантировать полную защиту.</p>` },

    { h: 'Ваши права', html: `
      <p>В зависимости от места вашего проживания вы можете иметь право:</p>
      <ul>
        <li>получить доступ к своим персональным данным и их копию;</li>
        <li>исправить неточные данные и дополнить неполные;</li>
        <li>потребовать удаления своих данных;</li>
        <li>ограничить обработку или возразить против неё, в том числе против обработки на основании нашего законного интереса;</li>
        <li>получить свои данные в переносимом формате;</li>
        <li>в любой момент отозвать согласие (это не влияет на обработку, выполненную до отзыва).</li>
      </ul>
      <p>Чтобы воспользоваться правом, напишите на <a href="mailto:{{email}}">{{email}}</a>. Мы ответим в течение одного месяца или в срок, установленный вашим местным законодательством. Вы также вправе подать жалобу в орган по защите данных — в Азербайджане или в стране вашего проживания.</p>` },

    { h: 'Дети', html: `
      <p>Наш сайт и услуги предназначены для бизнеса и не адресованы лицам младше 18 лет. Мы сознательно не собираем персональные данные детей.</p>` },

    { h: 'Ссылки на другие сайты', html: `
      <p>На сайте есть ссылки на сторонние сервисы, например Telegram и LinkedIn. У них собственные политики конфиденциальности, и мы не отвечаем за то, как они обращаются с вашими данными.</p>` },

    { h: 'Изменения политики', html: `
      <p>Мы можем время от времени обновлять эту политику. Дата последней версии указана вверху страницы. Если изменения существенные, мы выделим их на сайте.</p>` },

    { h: 'Контакты', html: `
      <p>Вопросы и запросы по персональным данным: <a href="mailto:{{email}}">{{email}}</a>. [[address|Почтовый адрес: {{address}}.]]</p>` }
  ]
},

az: {
  title: 'Məxfilik və Kuki Siyasəti',
  sections: [
    { h: 'Biz kimik', html: `
      <p>Bu sayt (keybit.dev) <strong>{{company}}</strong> tərəfindən idarə olunur[[address|, ünvan: {{address}}]][[regNumber| (qeydiyyat nömrəsi: {{regNumber}})]] — bundan sonra “KeyBit” və ya “biz”. KeyBit Bakıda (Azərbaycan) yerləşən proqram təminatı hazırlayan studiyadır.</p>
      <p>Bu siyasətdə təsvir olunan şəxsi məlumatlar baxımından KeyBit məlumatları idarə edən operatordur (nəzarətçi). Bizimlə <a href="mailto:{{email}}">{{email}}</a> ünvanı ilə əlaqə saxlaya bilərsiniz.</p>` },

    { h: 'Hansı məlumatları və nə üçün toplayırıq', html: `
      <p>Bunu minimum səviyyədə saxlayırıq. Saytda istifadəçi hesabları, izləmə və reklam yoxdur.</p>
      <div class="lg-table"><table>
        <thead><tr><th>Hal</th><th>Məlumat</th><th>Məqsəd</th><th>Hüquqi əsas</th></tr></thead>
        <tbody>
          <tr><td>Bizimlə əlaqə saxlayırsınız (forma, email, Telegram, LinkedIn)</td><td>Ad, şirkət, email ünvanı, maraqlandığınız xidmət, layihənin təsviri və bölüşməyi seçdiyiniz digər məlumatlar</td><td>Sizə cavab vermək, ehtiyaclarınızı müzakirə etmək və mümkün əməkdaşlıq üçün təklif hazırlamaq</td><td>Razılığınız; müqavilədən əvvəl sizin sorğunuzla görülən addımlar; biznesimizi idarə etməkdə qanuni marağımız</td></tr>
          <tr><td>Saytı ziyarət edirsiniz</td><td>Hostinq provayderinin emal etdiyi texniki məlumatlar: IP ünvanı, brauzer və cihaz növü, sorğu olunan səhifələr, tarix və vaxt</td><td>Saytı göstərmək, təhlükəsizliyini təmin etmək və sui-istifadənin qarşısını almaq</td><td>Təhlükəsiz və işlək sayta olan qanuni marağımız</td></tr>
          <tr><td>Parametri dəyişirsiniz (dil, mövzu, kuki seçimi)</td><td>Yalnız brauzerinizdə saxlanılan parametrin özü</td><td>Seçiminizi yadda saxlamaq</td><td>Sizin istədiyiniz funksiya üçün mütləq zəruridir</td></tr>
        </tbody>
      </table></div>
      <p>Hüquqi əsaslar GDPR-dakı kimi adlandırılıb. Sizə Azərbaycan qanunvericiliyi tətbiq olunarsa, həmin qanunvericilikdəki müvafiq əsaslara, ilk növbədə razılığınıza əsaslanırıq.</p>
      <p>Bizə məlumat göndərmək könüllüdür, lakin adınız və sizinlə əlaqə yolu olmadan cavab verə bilmərik.</p>` },

    { h: 'Nələri etmirik', html: `
      <ul>
        <li>Şəxsi məlumatlarınızı satmırıq.</li>
        <li>Hazırda bu saytda analitika, reklam və ya izləmə kukilərindən, sosial şəbəkə pikselləri istifadə etmirik.</li>
        <li>Şriftləri, ikonları və skriptləri üçüncü tərəf serverlərindən yükləmirik, ona görə də səhifələrimizi açmağınız brauzerinizin digər şirkətlərə müraciət etməsinə səbəb olmur.</li>
        <li>Sizinlə bağlı avtomatlaşdırılmış qərarlar qəbul etmirik və ziyarətçilərin profilini yaratmırıq.</li>
      </ul>` },

    { h: 'Kukilər və oxşar texnologiyalar', html: `
      <p>Bu sayt üçüncü tərəf kukilərindən deyil, brauzerinizin lokal yaddaşından istifadə edir. Saxladığı hər şey budur:</p>
      <div class="lg-table"><table>
        <thead><tr><th>Ad</th><th>Təyinat</th><th>Saxlanma müddəti</th></tr></thead>
        <tbody>
          <tr><td><code>keybit-lang</code></td><td>Seçdiyiniz dili yadda saxlayır (zəruri, dil seçdiyiniz zaman yaranır)</td><td>Brauzer məlumatlarını təmizləyənə qədər</td></tr>
          <tr><td><code>keybit-theme</code></td><td>Açıq və ya tünd mövzunu yadda saxlayır (zəruri, mövzunu dəyişdiyiniz zaman yaranır)</td><td>Brauzer məlumatlarını təmizləyənə qədər</td></tr>
          <tr><td><code>keybit-consent</code></td><td>Kuki seçiminizi və onun tarixini qeyd edir (zəruri)</td><td>12 aya qədər, sonra yenidən soruşuruq</td></tr>
        </tbody>
      </table></div>
      <p>İxtiyari kateqoriyalar — analitika və marketinq — söndürülüb və hazırda istifadə olunmur. Onları tətbiq etsək, yalnız razılığınızdan sonra yüklənəcək və istənilən vaxt razılığı geri götürə biləcəksiniz. Seçiminizi istənilən səhifənin altındakı “Kuki parametrləri” vasitəsilə dəyişə və ya brauzer parametrlərində məlumatları silə bilərsiniz.</p>` },

    { h: 'Məlumatları kimlərlə bölüşürük', html: `
      <p>Şəxsi məlumatları yalnız zərurət olduqda bölüşürük:</p>
      <ul>
        <li>müraciətlərə baxan KeyBit komanda üzvləri ilə;</li>
        <li>saytın işləməsinə və sizinlə ünsiyyətə kömək edən xidmət təchizatçıları ilə (məsələn, hostinq, email və mesajlaşma provayderləri) — müvafiq məxfilik və məlumatların qorunması şərtləri ilə;</li>
        <li>qanun tələb etdikdə dövlət orqanları ilə.</li>
      </ul>
      <p>Sayt hazırda Cloudflare-də (Cloudflare, Inc., ABŞ) yerləşdirilib; səhifələri təqdim edərkən o, IP ünvanları kimi texniki məlumatları emal edə bilər — Cloudflare-in məxfilik siyasətinə baxın. Bizimlə Telegram və ya LinkedIn vasitəsilə əlaqə saxlasanız, bu platformalar məlumatlarınızı öz siyasətlərinə uyğun emal edir. Şəxsi məlumatları heç vaxt satmırıq.</p>` },

    { h: 'Beynəlxalq ötürmələr', html: `
      <p>Komandalarımız və təchizatçılarımız bir neçə ölkədə yerləşir, ona görə də məlumatlarınız yaşadığınız ölkədən kənarda, o cümlədən Avropa İqtisadi Məkanından kənarda emal oluna bilər. Qanun tələb etdikdə belə ötürmələr üçün müvafiq təminatlardan, məsələn, adekvatlıq qərarlarından və ya standart müqavilə bəndlərindən istifadə edirik.</p>` },

    { h: 'Məlumatları nə qədər saxlayırıq', html: `
      <ul>
        <li><strong>Müraciətlər:</strong> cavab vermək üçün lazım olan müddət, əməkdaşlıq baş tutmazsa, son əlaqədən sonra {{retentionMonths}} aya qədər; sonra onları silirik və ya anonimləşdiririk.</li>
        <li><strong>Müqavilə bağlasaq:</strong> müqavilənin və hüquqi öhdəliklərimizin (məsələn, vergi və mühasibat) tələb etdiyi müddət ərzində.</li>
        <li><strong>Texniki jurnallar:</strong> hostinq provayderinin saxlama cədvəlinə uyğun olaraq.</li>
        <li><strong>Brauzer yaddaşı:</strong> yuxarıdakı cədvəldə göstərildiyi kimi.</li>
      </ul>` },

    { h: 'Təhlükəsizlik', html: `
      <p>Şəxsi məlumatları qorumaq üçün müvafiq texniki və təşkilati tədbirlər görürük və girişi buna ehtiyacı olan şəxslərlə məhdudlaşdırırıq. Heç bir ötürmə və ya saxlama üsulu tam təhlükəsiz deyil, ona görə də mütləq təhlükəsizliyə zəmanət verə bilmərik.</p>` },

    { h: 'Hüquqlarınız', html: `
      <p>Yaşadığınız yerdən asılı olaraq aşağıdakı hüquqlarınız ola bilər:</p>
      <ul>
        <li>şəxsi məlumatlarınıza çıxış əldə etmək və surət almaq;</li>
        <li>qeyri-dəqiq məlumatların düzəldilməsini və natamam məlumatların tamamlanmasını tələb etmək;</li>
        <li>məlumatlarınızın silinməsini tələb etmək;</li>
        <li>emalın məhdudlaşdırılmasını tələb etmək və ya ona etiraz etmək, o cümlədən qanuni marağımıza əsaslanan emala;</li>
        <li>məlumatlarınızı daşına bilən formatda almaq;</li>
        <li>razılığınızı istənilən vaxt geri götürmək (bu, geri götürülməyə qədər aparılmış emala təsir etmir).</li>
      </ul>
      <p>Hüququnuzdan istifadə etmək üçün <a href="mailto:{{email}}">{{email}}</a> ünvanına yazın. Bir ay ərzində və ya yerli qanunvericiliyinizin müəyyən etdiyi müddətdə cavab verəcəyik. Həmçinin məlumatların qorunması orqanına şikayət etmək hüququnuz var — Azərbaycanda və ya yaşadığınız ölkədə.</p>` },

    { h: 'Uşaqlar', html: `
      <p>Saytımız və xidmətlərimiz bizneslər üçün nəzərdə tutulub və 18 yaşdan kiçik şəxslərə yönəlməyib. Uşaqların şəxsi məlumatlarını bilə-bilə toplamırıq.</p>` },

    { h: 'Digər saytlara keçidlər', html: `
      <p>Saytda Telegram və LinkedIn kimi üçüncü tərəf xidmətlərinə keçidlər var. Onların öz məxfilik siyasətləri var və məlumatlarınızla necə davrandıqlarına görə məsuliyyət daşımırıq.</p>` },

    { h: 'Siyasətdə dəyişikliklər', html: `
      <p>Bu siyasəti vaxtaşırı yeniləyə bilərik. Son versiyanın tarixi səhifənin yuxarısında göstərilir. Dəyişikliklər əhəmiyyətlidirsə, onları saytda vurğulayacağıq.</p>` },

    { h: 'Əlaqə', html: `
      <p>Şəxsi məlumatlarla bağlı suallar və sorğular: <a href="mailto:{{email}}">{{email}}</a>. [[address|Poçt ünvanı: {{address}}.]]</p>` }
  ]
}

},

/* ======================================================================================
   TERMS OF USE
   ====================================================================================== */
terms: {

en: {
  title: 'Terms of Use',
  sections: [
    { h: 'Acceptance', html: `
      <p>These terms govern your use of the keybit.dev website (the “Site”), operated by <strong>{{company}}</strong> (“KeyBit”, “we”, “us”). By using the Site you agree to them. If you do not agree, please do not use the Site.</p>` },

    { h: 'Information only — not an offer', html: `
      <p>The Site describes our services and how we usually work. Nothing on it is an offer, quotation, proposal or binding commitment. Statements such as turnaround times, “demo first”, “no upfront payment” or “zero risk” are general descriptions of our usual approach.</p>
      <p>The scope, conditions, fees, timelines, confidentiality and intellectual-property terms of any work — including any free demo or prototype — apply only once they are agreed in a written agreement or in a proposal confirmed in writing by KeyBit. Information about our team, locations, technologies and experience is given in good faith and may change.</p>` },

    { h: 'Use of the Site', html: `
      <p>You may use the Site for lawful purposes only. You agree not to:</p>
      <ul>
        <li>attempt to gain unauthorised access to the Site or related systems;</li>
        <li>interfere with or disrupt the Site, including by malware or by automated scraping that burdens it;</li>
        <li>use our contact channels to send spam, unlawful or abusive content;</li>
        <li>misrepresent your identity or affiliation.</li>
      </ul>` },

    { h: 'Intellectual property', html: `
      <p>The Site’s design, text, graphics, logo, code and other content belong to {{company}} or its licensors and are protected by intellectual-property laws. You may view the Site and share links to it. You may not copy, modify, distribute or reuse its content commercially without our prior written permission. “KeyBit” and the KeyBit logo are our marks.</p>
      <p>The Site uses third-party components under their own licences (for example fonts under the SIL Open Font License and icons from Simple Icons under CC0). Names and logos of technologies mentioned on the Site belong to their respective owners and do not imply endorsement or partnership.</p>` },

    { h: 'What you send us', html: `
      <p>Please do not include confidential information, trade secrets or sensitive personal data in your first message. Confidentiality for a project is established by a written agreement (such as an NDA) between you and KeyBit. How we handle personal data is described in our <a href="privacy.html">Privacy &amp; Cookie Policy</a>.</p>` },

    { h: 'Third-party links', html: `
      <p>The Site links to third-party services (for example Telegram and LinkedIn). We do not control them and are not responsible for their content or practices.</p>` },

    { h: 'No warranty', html: `
      <p>The Site is provided “as is” and “as available”. We make reasonable efforts to keep it accurate and available, but we do not guarantee that it will be error-free, uninterrupted or up to date.</p>` },

    { h: 'Limitation of liability', html: `
      <p>To the fullest extent permitted by law, KeyBit is not liable for indirect, incidental or consequential loss arising from the use of, or inability to use, the Site, or from reliance on its content. Nothing in these terms excludes or limits liability that cannot be excluded or limited by law, including liability for death or personal injury caused by negligence, for fraud, or your mandatory rights as a consumer.</p>` },

    { h: 'Changes', html: `
      <p>We may change the Site or these terms at any time. The latest version is always published on this page, and the date above shows when it was last updated. By continuing to use the Site after a change, you accept the updated terms.</p>` },

    { h: 'Governing law', html: `
      <p>These terms are governed by {{governingLaw}}. Disputes will be resolved by the courts of {{jurisdiction}}, without prejudice to any mandatory rights you may have under the law of your country of residence.</p>` },

    { h: 'Contact', html: `
      <p>Questions about these terms: <a href="mailto:{{email}}">{{email}}</a>.</p>` }
  ]
},

ru: {
  title: 'Условия использования',
  sections: [
    { h: 'Принятие условий', html: `
      <p>Эти условия регулируют использование сайта keybit.dev (далее «Сайт»), которым управляет <strong>{{company}}</strong> (далее «KeyBit», «мы»). Используя Сайт, вы соглашаетесь с ними. Если вы не согласны, пожалуйста, не пользуйтесь Сайтом.</p>` },

    { h: 'Только информация, а не оферта', html: `
      <p>Сайт описывает наши услуги и то, как мы обычно работаем. Ничто на нём не является офертой, коммерческим предложением или обязательством. Такие формулировки, как сроки, «сначала демо», «без предоплаты» или «ноль риска», — это общее описание нашего обычного подхода.</p>
      <p>Объём работ, условия, стоимость, сроки, конфиденциальность и права на результаты любой работы — включая бесплатное демо или прототип — действуют только после согласования в письменном договоре или в предложении, подтверждённом KeyBit в письменной форме. Информация о нашей команде, офисах, технологиях и опыте предоставляется добросовестно и может меняться.</p>` },

    { h: 'Использование Сайта', html: `
      <p>Вы можете использовать Сайт только в законных целях. Вы обязуетесь не:</p>
      <ul>
        <li>пытаться получить несанкционированный доступ к Сайту или связанным системам;</li>
        <li>нарушать или затруднять работу Сайта, в том числе вредоносным кодом или автоматическим сбором данных, создающим нагрузку;</li>
        <li>использовать наши каналы связи для рассылки спама, незаконного или оскорбительного содержимого;</li>
        <li>выдавать себя за другое лицо или представлять ложную принадлежность.</li>
      </ul>` },

    { h: 'Интеллектуальная собственность', html: `
      <p>Дизайн, тексты, графика, логотип, код и другое содержимое Сайта принадлежат {{company}} или её лицензиарам и охраняются законодательством об интеллектуальной собственности. Вы можете просматривать Сайт и делиться ссылками на него. Копировать, изменять, распространять или использовать его содержимое в коммерческих целях без нашего предварительного письменного разрешения нельзя. «KeyBit» и логотип KeyBit — наши знаки.</p>
      <p>Сайт использует сторонние компоненты на условиях их собственных лицензий (например, шрифты по лицензии SIL Open Font License и иконки Simple Icons по CC0). Названия и логотипы упомянутых на Сайте технологий принадлежат их владельцам и не означают одобрения или партнёрства.</p>` },

    { h: 'Что вы нам отправляете', html: `
      <p>Пожалуйста, не включайте в первое сообщение конфиденциальную информацию, коммерческую тайну или чувствительные персональные данные. Конфиденциальность по проекту устанавливается письменным соглашением (например, NDA) между вами и KeyBit. Как мы обращаемся с персональными данными, описано в нашей <a href="privacy.html">Политике конфиденциальности и использования cookie</a>.</p>` },

    { h: 'Ссылки на сторонние ресурсы', html: `
      <p>На Сайте есть ссылки на сторонние сервисы (например, Telegram и LinkedIn). Мы их не контролируем и не отвечаем за их содержимое и практики.</p>` },

    { h: 'Отсутствие гарантий', html: `
      <p>Сайт предоставляется «как есть» и «по мере доступности». Мы стараемся поддерживать его точность и доступность, но не гарантируем отсутствие ошибок, бесперебойную работу или актуальность.</p>` },

    { h: 'Ограничение ответственности', html: `
      <p>В максимальной степени, разрешённой законом, KeyBit не отвечает за косвенные, случайные и последующие убытки, возникшие из-за использования Сайта или невозможности его использовать, а также из-за доверия к его содержимому. Ничто в этих условиях не исключает и не ограничивает ответственность, которую нельзя исключить или ограничить по закону, включая ответственность за смерть или вред здоровью по неосторожности, за мошенничество, а также ваши императивные права как потребителя.</p>` },

    { h: 'Изменения', html: `
      <p>Мы можем изменять Сайт и эти условия в любое время. Актуальная версия всегда опубликована на этой странице, а дата вверху показывает, когда она обновлялась в последний раз. Продолжая пользоваться Сайтом после изменений, вы принимаете обновлённые условия.</p>` },

    { h: 'Применимое право', html: `
      <p>К этим условиям применяется {{governingLaw}}. Споры разрешаются судами {{jurisdiction}}, без ущерба для императивных прав, которые у вас могут быть по закону страны вашего проживания.</p>` },

    { h: 'Контакты', html: `
      <p>Вопросы по этим условиям: <a href="mailto:{{email}}">{{email}}</a>.</p>` }
  ]
},

az: {
  title: 'İstifadə Şərtləri',
  sections: [
    { h: 'Qəbul', html: `
      <p>Bu şərtlər <strong>{{company}}</strong> (bundan sonra “KeyBit” və ya “biz”) tərəfindən idarə olunan keybit.dev saytından (“Sayt”) istifadənizi tənzimləyir. Saytdan istifadə etməklə bu şərtlərlə razılaşırsınız. Razı deyilsinizsə, zəhmət olmasa Saytdan istifadə etməyin.</p>` },

    { h: 'Yalnız məlumat, təklif deyil', html: `
      <p>Sayt xidmətlərimizi və adətən necə işlədiyimizi təsvir edir. Saytdakı heç nə təklif, qiymət təklifi, kommersiya təklifi və ya məcburi öhdəlik deyil. İcra müddətləri, “əvvəlcə demo”, “ilkin ödənişsiz” və ya “sıfır risk” kimi ifadələr bizim adi yanaşmamızın ümumi təsviridir.</p>
      <p>İstənilən işin, o cümlədən pulsuz demo və ya prototipin həcmi, şərtləri, qiyməti, müddətləri, məxfilik və əqli mülkiyyət şərtləri yalnız yazılı müqavilədə və ya KeyBit-in yazılı təsdiq etdiyi təklifdə razılaşdırıldıqdan sonra qüvvəyə minir. Komandamız, ofislərimiz, texnologiyalarımız və təcrübəmiz haqqında məlumat xoş niyyətlə verilir və dəyişə bilər.</p>` },

    { h: 'Saytdan istifadə', html: `
      <p>Saytdan yalnız qanuni məqsədlər üçün istifadə edə bilərsiniz. Aşağıdakıları etməməyə razılaşırsınız:</p>
      <ul>
        <li>Sayta və ya əlaqəli sistemlərə icazəsiz giriş əldə etməyə cəhd etmək;</li>
        <li>Saytın işinə, o cümlədən zərərli proqramla və ya ona yük yaradan avtomatik məlumat yığımı ilə mane olmaq;</li>
        <li>əlaqə kanallarımızdan spam, qanunsuz və ya təhqiredici məzmun göndərmək üçün istifadə etmək;</li>
        <li>şəxsiyyətinizi və ya mənsubiyyətinizi yanlış təqdim etmək.</li>
      </ul>` },

    { h: 'Əqli mülkiyyət', html: `
      <p>Saytın dizaynı, mətnləri, qrafikası, loqosu, kodu və digər məzmunu {{company}} və ya onun lisenziya verənlərinə məxsusdur və əqli mülkiyyət qanunları ilə qorunur. Saytı görə və ona keçidləri paylaşa bilərsiniz. Əvvəlcədən yazılı icazəmiz olmadan onun məzmununu kopyalamaq, dəyişdirmək, yaymaq və ya kommersiya məqsədilə təkrar istifadə etmək olmaz. “KeyBit” və KeyBit loqosu bizim əmtəə nişanlarımızdır.</p>
      <p>Sayt üçüncü tərəf komponentlərindən öz lisenziyaları əsasında istifadə edir (məsələn, SIL Open Font License altında şriftlər və CC0 altında Simple Icons ikonları). Saytda qeyd olunan texnologiyaların adları və loqoları müvafiq sahiblərinə məxsusdur və tərəfdaşlıq və ya təsdiq anlamına gəlmir.</p>` },

    { h: 'Bizə göndərdikləriniz', html: `
      <p>Zəhmət olmasa, ilk mesajınıza məxfi məlumat, kommersiya sirri və ya həssas şəxsi məlumat daxil etməyin. Layihə üzrə məxfilik sizinlə KeyBit arasında yazılı razılaşma (məsələn, NDA) ilə müəyyən edilir. Şəxsi məlumatlarla necə davrandığımız <a href="privacy.html">Məxfilik və Kuki Siyasətində</a> təsvir olunub.</p>` },

    { h: 'Üçüncü tərəf keçidləri', html: `
      <p>Saytda üçüncü tərəf xidmətlərinə (məsələn, Telegram və LinkedIn) keçidlər var. Onlara nəzarət etmirik və onların məzmununa və təcrübələrinə görə məsuliyyət daşımırıq.</p>` },

    { h: 'Zəmanətin olmaması', html: `
      <p>Sayt “olduğu kimi” və “mövcud olduğu qədər” təqdim olunur. Onun dəqiqliyini və əlçatanlığını təmin etməyə çalışırıq, lakin səhvsiz, fasiləsiz və ya aktual olacağına zəmanət vermirik.</p>` },

    { h: 'Məsuliyyətin məhdudlaşdırılması', html: `
      <p>Qanunla icazə verilən maksimum həddə KeyBit Saytdan istifadə və ya istifadə edə bilməmək, yaxud onun məzmununa etibar nəticəsində yaranan dolayı, təsadüfi və ya nəticə kimi yaranan zərərlərə görə məsuliyyət daşımır. Bu şərtlərdəki heç nə qanunla istisna oluna və ya məhdudlaşdırıla bilməyən məsuliyyəti, o cümlədən səhlənkarlıqdan yaranan ölüm və ya bədən xəsarətinə, saxtakarlığa görə məsuliyyəti, yaxud istehlakçı kimi məcburi hüquqlarınızı istisna etmir və ya məhdudlaşdırmır.</p>` },

    { h: 'Dəyişikliklər', html: `
      <p>Saytı və bu şərtləri istənilən vaxt dəyişə bilərik. Ən son versiya həmişə bu səhifədə dərc olunur, yuxarıdakı tarix isə son yenilənmə vaxtını göstərir. Dəyişiklikdən sonra Saytdan istifadəni davam etdirməklə yenilənmiş şərtləri qəbul etmiş olursunuz.</p>` },

    { h: 'Tətbiq olunan hüquq', html: `
      <p>Bu şərtlərə {{governingLaw}} tətbiq olunur. Mübahisələr {{jurisdiction}} məhkəmələri tərəfindən həll edilir; bu, yaşadığınız ölkənin qanunu üzrə sizin malik ola biləcəyiniz məcburi hüquqlara xələl gətirmir.</p>` },

    { h: 'Əlaqə', html: `
      <p>Bu şərtlərlə bağlı suallar: <a href="mailto:{{email}}">{{email}}</a>.</p>` }
  ]
}

}

};
