(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{349:function(e,t,a){"use strict";a.r(t);var r=a(0),i=function(e){var t,a,r,i,n,s,o=(r=void 0,i="2014-05-29 16:49:00",n="h5ai",s="安装快捷简单",(t={}).type=a="post",t.internal=r,t.contentType="markdown",t.slug="use-h5ai-to-beautify-your-http-web-server-index",t.content=r,t.createdAt=new Date(140138214e4),t.updatedAt=new Date(140138214e4),t.layout=a,t.title="用h5ai来美化你的网站目录索引吧！",t.date=i,t.updated=i,t.draft=!0,t.hidden=!0,t.comments=!1,t.markdownHeadings=[{text:n,slug:n,level:3},{text:s,slug:s,level:3}],t.excerpt="<p>一般来说，大多数的网站并不会或不希望让用户浏览到网站的目录。要是一个网站被用户浏览到了其目录，知道其目录下的所有文件的话，则会被白帽子判存在“目录遍历漏洞”的。但有些时候，一些网站会仅作为展示文件和共享文件的一个空间。这时，若将网站目录设置成可浏览，则会显得更加方便。</p>\n",t.permalink="/blog/2014/05/use-h5ai-to-beautify-your-http-web-server-index",t.assets={},t.attributes=t,t),p=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=o}].concat(p);["layout","transition"].forEach((function(t){var a=e.options.PageComponent;a&&(e.options[t]=a[t]),void 0===e.options[t]&&(e.options[t]=o[t])})),o.slug&&(e.options.name="page-wrapper-"+o.slug.replace(/[^0-9a-z\-]/gi,"-"))},n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout-manager",[a("p",[e._v("一般来说，大多数的网站并不会或不希望让用户浏览到网站的目录。要是一个网站被用户浏览到了其目录，知道其目录下的所有文件的话，则会被白帽子判存在“目录遍历漏洞”的。但有些时候，一些网站会仅作为展示文件和共享文件的一个空间。这时，若将网站目录设置成可浏览，则会显得更加方便。")]),e._v(" "),a("p",[e._v("一般服务器会使用Apache作WebServer，像我在本地是用WAMP来搭建开发用的环境。在本地开发时为了方便找文件，所以根目录一般会不放置index文件，让目录变成可浏览。而Apache默认的目录列表和索引页面实在是不怎么好看（当然看久了可能就麻木了呵），而且功能非常地有限：")]),e._v(" "),a("p",[e._v("于是就来推荐一款具有Microsoft的Modern风格的WebServer索引美化应用————h5ai。博主百度了一下，貌似谈到h5ai的并不多，只有屈指可数的几个网页而已，看来好像没什么人知道呵。。。")]),e._v(" "),a("h3",{attrs:{id:"h5ai"}},[e._v("h5ai")]),e._v(" "),a("blockquote",[a("p",[e._v("A modern HTTP web server index:"),a("br"),e._v("\nh5ai makes browsing directories on HTTP web servers more pleasant. Directory listings get styled in a modern way and browsing through the directories is enhanced by different views, a breadcrumb and a tree overview. Initially h5ai was an acronym for HTML5 Apache Index but now it supports other web servers too.")])]),e._v(" "),a("p",[e._v("正如它的官网所表述的：h5ai是一款Modern风格的WEB服务器索引，它能让WEB服务器的目录用户浏览起来觉得更舒适，并且提供了原有索引没有的多种视图更换、面包屑导航，目录树等（还有好玩的二维码噢！），并支持多种文件的在线预浏览。h5ai起初仅支持基于Apache的HTML5\n索引，但如今已经支持其他后端Server了，如Nginx，Lighttpd和Cherokee，而且兼容目前所有主流的浏览器包括Chrome，Firefox，Safari，Opera和IE9+等。")]),e._v(" "),a("p",[e._v("这里给出两个demo：")]),e._v(" "),a("ul",[a("li",[e._v("① "),a("saber-link",{attrs:{to:"https://larsjung.de/h5ai/sample/"}},[e._v("官网的DEMO")])],1),e._v(" "),a("li",[e._v("② "),a("saber-link",{attrs:{to:"http://demo.ihanabi.com/h5ai/"}},[e._v("博主搭建的DEMO")])],1)]),e._v(" "),a("h3",{attrs:{id:"安装快捷简单"}},[e._v("安装快捷简单")]),e._v(" "),a("p",[e._v("h5ai的官网是 "),a("saber-link",{attrs:{to:"https://larsjung.de/h5ai/"}},[e._v("https://larsjung.de/h5ai/")]),e._v("，可前往下载最新版本使用。它需要"),a("code",{pre:!0},[e._v("PHP5.2.1")]),e._v("以上的版本，安装起来非常简单。只需把下载的压缩包解压出来"),a("code",{pre:!0},[e._v("_h5ai")]),e._v("文件夹，放到你的WEB服务器根目录下，并做一点点配置就可以访问使用了。（其实\nh5ai并不要求Server开启目录可浏览，像Nginx不开autoindex也是可以用的）")],1),e._v(" "),a("figure",{attrs:{"data-type":"image"}},[a("saber-image",{attrs:{src:"https://ww4.sinaimg.cn/large/72eabe3fgw1egv97ecztsj21070ox77c.jpg",alt:""}})],1),e._v(" "),a("p",[a("strong",[e._v("Apache")]),e._v(" 的安装：在"),a("code",{pre:!0},[e._v("httpd.conf")]),e._v("或者任意目录下的"),a("code",{pre:!0},[e._v(".htaccess")]),e._v("文件中加入以下代码")]),e._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("DirectoryIndex  index.html  index.php  /_h5ai/server/php/index.php")])])]),a("p",[a("strong",[e._v("Nginx")]),e._v(" 的安装：在配置文件"),a("code",{pre:!0},[e._v("nginx.conf")]),e._v("中加入以下代码")]),e._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[e._v("index  index.html  index.php  /_h5ai/server/php/index.php;")])])]),a("p",[a("strong",[e._v("Lighttpd")]),e._v(" 的安装：在配置文件"),a("code",{pre:!0},[e._v("lighttpd.conf")]),e._v("中加入以下代码")]),e._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[a("code",{pre:!0,attrs:{class:"language-text"}},[e._v('index-file.names += ( "index.html", "index.php", "/_h5ai/server/php/index.php" )')])])]),a("p",[e._v("然后就能使用了！而后更多个性化的配置则可在"),a("code",{pre:!0},[e._v("_h5ai/conf/options.json")]),e._v("文件中自行配置。另外，h5ai本身是托管在了 "),a("saber-link",{attrs:{to:"https://github.com/lrsjng/h5ai"}},[e._v("Github")]),e._v(" 上的，有什么建议，需求或问题都可以去发个issue什么的。")],1)])}),[],!1,null,null,null);"function"==typeof i&&i(n);t.default=n.exports}}]);