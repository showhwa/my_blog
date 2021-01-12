(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{374:function(e,t,a){"use strict";a.r(t);var s=a(0),r=function(e){var t,s,r,o,n=(r=void 0,o="2015-09-20 17:28:19",(t={}).type=s="post",t.internal=r,t.contentType="markdown",t.slug="new-mac-env-bootstrap",t.content=r,t.createdAt=new Date(1442741299e3),t.updatedAt=new Date(1442741299e3),t.layout=s,t.title="Newbie Mac Bootstrap",t.date=o,t.updated=o,t.assets={cover:a(89)},t.markdownHeadings=[{text:"Command Line Tools for Xcode",slug:"command-line-tools-for-xcode",level:2},{text:"1. 通过 Xcode 安装",slug:"1--通过-xcode-安装",level:3},{text:"2. 通过终端安装",slug:"2--通过终端安装",level:3},{text:"3. 通过离线安装包安装",slug:"3--通过离线安装包安装",level:3},{text:"Where is the package manager of OS X?",slug:"where-is-the-package-manager-of-os-x",level:2},{text:"Homebrew",slug:"homebrew",level:3},{text:"Homebrew-Cask",slug:"homebrew-cask",level:3}],t.excerpt="<p>入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。</p>\n",t.permalink="/blog/new-mac-env-bootstrap",t.attributes=t,t),p=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=n}].concat(p);["layout","transition"].forEach((function(t){var a=e.options.PageComponent;a&&(e.options[t]=a[t]),void 0===e.options[t]&&(e.options[t]=n[t])})),n.slug&&(e.options.name="page-wrapper-"+n.slug.replace(/[^0-9a-z\-]/gi,"-"))},o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("layout-manager",[s("p",[e._v("入坑 Mac OS X，写点 note (nonsense) 以备玩坏系统重装时翻查。")]),e._v(" "),s("h2",{attrs:{id:"command-line-tools-for-xcode"}},[e._v("Command Line Tools for Xcode")]),e._v(" "),s("p",[e._v("OS X 系统不像 Ubuntu 等发行版，系统默认是不包含编译工具链的（因为不是每位用户都需要吧，人性化？）。所以在使用时如果执行到含有诸如 gcc、make 等命令时，就会出现以下情况：")]),e._v(" "),s("figure",{attrs:{"data-type":"image",itemscope:"",itemprop:"associatedMedia",itemtype:"http://schema.org/ImageObject"}},[s("saber-image",{attrs:{src:a(98),alt:"提示需要命令行工具",title:"提示需要命令行工具"}}),s("figcaption",[e._v("提示需要命令行工具")])],1),e._v(" "),s("p",[e._v("这时就需要安装苹果提供的命令行工具包（Command Line Tools，下称 CLT）了。安装 CLT 有几种方法：")]),e._v(" "),s("h3",{attrs:{id:"1--通过-xcode-安装"}},[e._v("1. 通过 Xcode 安装")]),e._v(" "),s("p",[s("code",{pre:!0},[e._v("for Xcode")]),e._v(" 嘛，当然能通过 Xcode 安装了，只不过没有安装 Xcode 亦可使用。所以如果你有安装 Xcode 的话，直接通过 Xcode 安装就好了。（我自己并没有安装 Xcode，因为暂无打算学习 Mac 相关的开发，所以私以为没必要耗费几个 G 的硬盘空间塞下 Xcode 吧， MacBook 的硬盘寸寸金啊。。。）。")]),e._v(" "),s("h3",{attrs:{id:"2--通过终端安装"}},[e._v("2. 通过终端安装")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ xcode-select "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")])])])]),s("p",[e._v("或者输入 gcc 触发前文所提到的情况（见前文图）亦可。")]),e._v(" "),s("h3",{attrs:{id:"3--通过离线安装包安装"}},[e._v("3. 通过离线安装包安装")]),e._v(" "),s("p",[e._v("如果用前面的方法安装不成功的话，可到 Apple 下载中心获取离线安装包进行安装。（认准苹果官网）")]),e._v(" "),s("blockquote",[s("p",[s("saber-link",{attrs:{to:"https://developer.apple.com/downloads"}},[e._v("https://developer.apple.com/downloads")]),e._v(" （需要使用 AppleID 登录）")],1)]),e._v(" "),s("p",[e._v("安装 CLT 后就可以使用工具链编译安装软件了，这是 Bootstrap A New Mac 的第一步。")]),e._v(" "),s("h2",{attrs:{id:"where-is-the-package-manager-of-os-x"}},[e._v("Where is the package manager of OS X?")]),e._v(" "),s("p",[e._v("用 Mac 之前我还真没想过 OS X 有没有包管理工具。初次用了一会儿后，总觉得好像少了些什么，又说不出来。后在 Win 机上 Xshell 管理 VPS 时，才猛然想起：OS X 下用什么管理软件包？！Where is the package manager of OS X? 检索后才知道 OS X 不止默认不带 toolchains，还没有 package manager。带着使用 Linux 发行版心态的我不免有点失望。")]),e._v(" "),s("h3",{attrs:{id:"homebrew"}},[e._v("Homebrew")]),e._v(" "),s("p",[e._v("官方没有社区有。强大的 Mac 社区造就了各种易用的工具。软件包管理工具就各式各样。其中最出名的两个是 "),s("strong",[s("saber-link",{attrs:{to:"https://www.macports.org"}},[e._v("Macport")])],1),e._v(" 和 "),s("strong",[s("saber-link",{attrs:{to:"http://brew.sh"}},[e._v("Homebrew")])],1),e._v("。二者有着截然不同的理念，并且越来越多用户选择了 Homebrew。下面进行 Bootstrap A New Mac 的第二步。")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ /usr/bin/ruby -e "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')])])])]),s("p",[s("small",[e._v("OS X 自带 ruby，难怪 ruby 社区一股 Macbook 风气。")])]),e._v(" "),s("p",[e._v("然后就可以像用 "),s("code",{pre:!0},[e._v("apt-get install/update")]),e._v(" 那样 "),s("code",{pre:!0},[e._v("brew install/update")]),e._v(" 了，更多用法参见 "),s("saber-link",{attrs:{to:"https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme"}},[e._v("Doc")]),e._v("。")],1),e._v(" "),s("h3",{attrs:{id:"homebrew-cask"}},[e._v("Homebrew-Cask")]),e._v(" "),s("p",[e._v("介绍了 Homebrew 就不得不说 "),s("strong",[s("saber-link",{attrs:{to:"https://github.com/Homebrew/homebrew-cask"}},[e._v("Homebrew-Cask")])],1),e._v(" 了。Homebrew 掌管了各种 CLI 软件包的管理，App Store 提供各种 GUI 应用，这 Cask 又是什么？Cask 其实是 Homebrew 的一个扩展，能让 brew 支持安装和管理 GUI 应用。能在 App Store 获取到的应用当然最好在上面下载安装了，但有些应用程序是没有上架 App Store 的（比如 IntelliJ IDEA），得去程序的官网各种点击下载安装。于是不甘这样的 Mac 社区 Geek 们搞了个 Homebrew-Cask，然后就能打开终端一句指令愉快地安装 GUI 应用了，比如："),s("code",{pre:!0},[e._v("brew cask install intellij-idea-ce")]),e._v("。Cask 已经被集成在了 Homebrew 中，直接如下使用即可：")]),e._v(" "),s("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"bash"}},[s("pre",{pre:!0,attrs:{class:"saber-highlight-code language-bash"}},[s("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ brew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" atom")])])])])}),[],!1,null,null,null);"function"==typeof r&&r(o);t.default=o.exports},89:function(e,t,a){e.exports={srcSet:a.p+"images/20181225012-c592b766.png 600w,"+a.p+"images/20181225012-c94fd464.png 480w",images:[{path:a.p+"images/20181225012-c592b766.png",width:600,height:450},{path:a.p+"images/20181225012-c94fd464.png",width:480,height:360}],src:a.p+"images/20181225012-c592b766.png",toString:function(){return a.p+"images/20181225012-c592b766.png"},placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAIAAADRv8uKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4UlEQVRIx2P4/unrgCCGUYtHLR5SFn/7+IUii4H6f335/vPLd2IMQuj69PXX1x8/Pn8j02KgZb+//nh0/1FeWUNCVnFKbllyTilBBFQWm1bQ0jmJfIu/fvj8/9efwwePGth5WXqFW/tEWnlHEEQ2vlFGzoFugbEf334A2o0nqPBa/PPPkcPHrT2C3SPSPKMyIMgjMh0P8orOtA+MD4hK/US5xZZuQa5hKUC7nYOTnEOS3MNT3cJTgSJu4SkwRiocAe229Y/1i0yhmsUuYSnhaUWhKQVOIUlOIckeEelAEZfQFI/INJfQZOeQZKfgJCCDyhYDveIQlFjT1tc5cUZORVNxXXtte39eVUtlc09NW39GaX1Fcw9QJCG3EuhEOyr7ODQlIa8yvbg+rbguu7wxuaAaaF9qUW1GaUNsdnl+dUtb/7Sw1EKgE6lsMSiOQ5IdgxKBQQ0kgZHtGAxiO4Ej3jE4yTsmE8ilfhy7RaS5R4DSDtDrQIZLWJpbeJpraDIkfcGTGFAB9X0MNNcpODE4Od8jMiMwLtkrMsk/PtcnJtMnNgvIAHqdBqk6PNU9Mt09Ij0yo/T0xUt9s1ccXR23YGr6ht0nFq1av2LDtp0HjvjEZoOyclSGXUAcFSw+fOiYmbO/Q2A8sFjwi8sua+rtnjq3vntad29Dc2dL+6S5zf3Tmvund0yeXVDbAczZwIi39IrwCUsk32Kgnr8/fh89csLOK8zWO9zOO9zBN8I5INrOO8LBJ8LGK8rWO9LWM9TWKwzItfcBSdmDGRZuQSFxmR/fvIdUGKRZDHTs04dPHj158vjZs+u370DQtVtAdPvGnbtXbtw8furk0ZNAdOrkmbNAQbDsbZiy2zfv3nv64sWz5y++fvxMgsVAvwKrwhePn129fPXmjVu3bt6+DUe37kDQHSQEF4QrA2q5cf3m8yfPyKmdgJ4GRvPndx/JRt/x1uL4GgJAuylBo429UYsHyGIAgRG+8V7i9RwAAAAASUVORK5CYII=",width:600,height:450}},98:function(e,t,a){e.exports={srcSet:a.p+"images/20150810001-6c4a7853.png 1200w,"+a.p+"images/20150810001-8951efd3.png 720w,"+a.p+"images/20150810001-bb3de0b6.png 480w",images:[{path:a.p+"images/20150810001-6c4a7853.png",width:1200,height:788},{path:a.p+"images/20150810001-8951efd3.png",width:720,height:473},{path:a.p+"images/20150810001-bb3de0b6.png",width:480,height:315}],src:a.p+"images/20150810001-6c4a7853.png",toString:function(){return a.p+"images/20150810001-6c4a7853.png"},placeholder:"data:image/png;base64,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",width:1200,height:788}}}]);