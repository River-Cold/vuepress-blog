if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),o={module:{uri:d},exports:c,require:r};s[d]=Promise.all(f.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b8f52c22.css",revision:"17cb50f73e675230ea58cf07876bbe1a"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/38.bf282b5a.js",revision:"f878150e2ba85e97aff83e39b8bf98bb"},{url:"assets/js/39.83721536.js",revision:"017f2ddb7b14bc548d19d58184b511ae"},{url:"assets/js/40.d830786c.js",revision:"edbb5a5cde77604dd9c60ed6982e1cd8"},{url:"assets/js/41.ccb7ff8f.js",revision:"ca6da820eed70966a79941dfdd83276f"},{url:"assets/js/42.3f20f523.js",revision:"b7c4fa4e22e4d6d2de016ee16bd72990"},{url:"assets/js/43.a08753f3.js",revision:"4ece47f293682454618a06071113bce2"},{url:"assets/js/44.005bc13e.js",revision:"cf13f59a5ec2ee18d15dfbd64ad59e28"},{url:"assets/js/app.dea55b7f.js",revision:"7ddde6fc9b980e4b2aa38b6a33aba5d0"},{url:"assets/js/layout-Blog.8e947295.js",revision:"7cc96e3900ec74b6a3a252e6859ebb9a"},{url:"assets/js/layout-Layout.3729e73b.js",revision:"bef841937552d76ef6953e78dfc20711"},{url:"assets/js/layout-NotFound.dc4b8d24.js",revision:"50bb2121c6db43babb59d7b09642e76e"},{url:"assets/js/layout-Slide.149b82d3.js",revision:"39340537081672f6ae9695d600ce31d3"},{url:"assets/js/page--1f890e47.30612d30.js",revision:"3d381c08bde5f954d61e408f1de6f035"},{url:"assets/js/page-1md.bb4ec118.js",revision:"050ca95f172f0d82e0970fc6e78fe5af"},{url:"assets/js/page-BlogHome.fd28346c.js",revision:"0ec0076fc729f64baa2c0c3c02da72cc"},{url:"assets/js/page-Componentdisabled.69748463.js",revision:"5610283fcf51fed07ddf90cf7c02d460"},{url:"assets/js/page-CustomLayout.9056014d.js",revision:"f4704c6d341ae2f6b10d44cf2ccc7773"},{url:"assets/js/page-Encryptionarticle.28340429.js",revision:"a6b614ca3290f2ba00793cd84da20cf4"},{url:"assets/js/page-Guides.c79f3007.js",revision:"ab8fdcc3781bb7d41b86bfd7073c3765"},{url:"assets/js/page-IntroPage.d97ba934.js",revision:"91aab7e373b8b6be56192ac48274283b"},{url:"assets/js/page-MarkdownEnhance.510201e2.js",revision:"17fb4c216a10a0c59cca691afa24c1f1"},{url:"assets/js/page-Markdown增强.a508d987.js",revision:"ea5890d063ce03d0e05ab2519b0c0a6b"},{url:"assets/js/page-pageconfig.bf1cfe73.js",revision:"d38dd8df7704f9c0833f5aa9d36c4c8e"},{url:"assets/js/page-Projecthome.d9a2a02e.js",revision:"46ef79deba5730d5590e4f1acaa474ef"},{url:"assets/js/page-readme.c33d774e.js",revision:"155d9d26bfe0cebf8a931c80b44669cb"},{url:"assets/js/page-readmeinschool.fc018629.js",revision:"4bfc19262da79152f307e3d70cce911b"},{url:"assets/js/page-Slidepage.f31b3d34.js",revision:"6bbd2cea19b00cb709f341210c300d68"},{url:"assets/js/page-主要功能与配置演示.2680b818.js",revision:"d5dfe49268b311ad4cfd252265a1e3df"},{url:"assets/js/page-二维数组中的查找.4ec60649.js",revision:"f0c89ee1a6e6b59404c3936c5c8c619d"},{url:"assets/js/page-剑指offer.2f5130a1.js",revision:"4067d19425f6bce1d140f49394e378bc"},{url:"assets/js/page-博客主页.2bbe3e24.js",revision:"0591f6f0cb35e36117a4cd9a096e2519"},{url:"assets/js/page-密码加密的文章.9a7d086c.js",revision:"c5ba851f3b43a35caaac9d55edd525f1"},{url:"assets/js/page-幻灯片页.e3492068.js",revision:"f8befb9733b496e41019cb4f5827bad8"},{url:"assets/js/page-组件禁用.8d8e76df.js",revision:"09c35d801e2732ea7fa540eb60b2abd3"},{url:"assets/js/page-自定义布局.03ade677.js",revision:"3a6e64015b0f4220ca7b4942cf22df94"},{url:"assets/js/page-页面配置.0a1c10a8.js",revision:"2bed81edc3a5d2aaddda70806639c169"},{url:"assets/js/page-项目主页.1ecfa30a.js",revision:"0b5f0181bcb18907c1aff2e4aae45d59"},{url:"assets/js/vendors~flowchart.61ce21db.js",revision:"f0099087539f8af2aa0671012752cc87"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.19e95b48.js",revision:"16c03548ad7e69581745019418628b38"},{url:"assets/js/vendors~layout-Layout.67ea690b.js",revision:"f5e19b53353b33d6d62eec90dce2dc13"},{url:"assets/js/vendors~mermaid.2989ce87.js",revision:"0e61bdf3be33480301cf79f069274aa5"},{url:"assets/js/vendors~photo-swipe.4b212653.js",revision:"f78b92170db8a6667ab1d658869c95cc"},{url:"assets/js/vendors~reveal.5faf3f5e.js",revision:"6ee206e714c87f64401843fb0b50bab4"},{url:"assets/js/vendors~waline.d720a9c0.js",revision:"fa45ad2cbb4ad2c3c50c8373d3e92ef2"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"895b1e2a51a362ee364cbc03671f12be"},{url:"article/index.html",revision:"6f0b130de20e71fe1913be1087c0610c"},{url:"category/Guide/index.html",revision:"d782691bd8802b3c8c02f9ad6eef88bf"},{url:"category/index.html",revision:"017fcfa5b45966fe773d14c907648097"},{url:"category/使用指南/index.html",revision:"c50ac9d02b1dcbc1691aad63c9dc3eeb"},{url:"code/C++/index.html",revision:"75108321c5b8a5489455a40bd87898a8"},{url:"code/Java/index.html",revision:"5ec5ebdc973f08f9560cc8a30037e2cb"},{url:"code/Python/index.html",revision:"6b45c99acf611acfa2ef218c413cc7e0"},{url:"code/SQL/index.html",revision:"0a659d94b64bd9a9727c8879f4361ea9"},{url:"encrypt/index.html",revision:"2114f72dda06dc3865d13948a68e98f4"},{url:"guide/disable/index.html",revision:"a0e7b67fb93b6378f096c3969f2405fe"},{url:"guide/encrypt/index.html",revision:"134c8fd1eb0386840f67ab7326b97701"},{url:"guide/index.html",revision:"1e6b735d066f373a50c19832e336e166"},{url:"guide/markdown/index.html",revision:"08edf9774929240ab6a63c79e111ada3"},{url:"guide/page/index.html",revision:"4812f022c44ab023b7b990be6f63ba44"},{url:"home/index.html",revision:"331fb86fc3d9d1f7395c0cdda0d10a63"},{url:"index.html",revision:"089446d88977a70c318fc06853852d37"},{url:"intro/index.html",revision:"8c541c3aec54a23fa7a38f6603a2301b"},{url:"layout/index.html",revision:"039de769bfc4bee17e593e8f44285f42"},{url:"life/Annual-Summary/index.html",revision:"b28c7d1783d3c7d82c1ede688ebb3ffb"},{url:"life/Travel-Records/index.html",revision:"53938ef4616e0405ee156d9bc89357a2"},{url:"school/high-school/index.html",revision:"bf9aa582cb82311aa7cce3a8c07979cf"},{url:"school/index.html",revision:"530dda2e877942f2b20cea7ba8010ae9"},{url:"school/junior-high-school/index.html",revision:"14724537d925737f616f723eb6e71e4e"},{url:"school/university/index.html",revision:"e3ed626c6a4334baa977fec1eef75516"},{url:"slide/index.html",revision:"b7fb8d9fafa6fcaf29d1c2e92273ed9d"},{url:"slides/index.html",revision:"fb68c526f3e6b22e920e7055f70ed7b7"},{url:"solution/leetcode/CodingInterview/index.html",revision:"040313c68fcea4b97ef4b51398ff57af"},{url:"solution/leetcode/CodingInterview/二维数组中的查找/index.html",revision:"6414cd3ae92299c7f74bdb9f53111e6a"},{url:"solution/leetcode/Cracking-the-Coding-Interview/index.html",revision:"67552793f3625d0db3d5f19ade2a2498"},{url:"solution/nowcoder/sql-advanced/index.html",revision:"2e92a1a420cbdb7abf01e583530ca36c"},{url:"star/index.html",revision:"b55b75752ab1add3ee6c52a64952acbd"},{url:"tag/encryption/index.html",revision:"1edd8608278f1d2b0bd63e6bcc62195e"},{url:"tag/Guide/index.html",revision:"8f2ced76b386ac3141349dfe1e02681d"},{url:"tag/index.html",revision:"5b857c0736674e561fe6a4a6722c4a12"},{url:"tag/markdown/index.html",revision:"cf9c4739ec895876ce1ceebbf391c6a1"},{url:"tag/Page config/index.html",revision:"88ccfa2fd3cdc04797bc39e4aab86581"},{url:"tag/使用指南/index.html",revision:"1fe9f15c3c4af826c3b66834c31c6c43"},{url:"tag/文章加密/index.html",revision:"0070f5de518a462ccc739aa61dd92ee6"},{url:"tag/页面配置/index.html",revision:"c29e92f0657840ba42a0450ca2410f48"},{url:"test/index.html",revision:"05d8f96145b26f182b41e0a3b0ac3ecb"},{url:"timeline/index.html",revision:"7bdd111860b208af7ff4cb8bf321e6d1"},{url:"zh/guide/disable/index.html",revision:"9946010647a5094ece8ac9e593aa79bf"},{url:"zh/guide/encrypt/index.html",revision:"e462127952f07dd0c59ac30ae37d4df8"},{url:"zh/guide/index.html",revision:"9a0149e0194a75cc8bdd6427cdc25c24"},{url:"zh/guide/markdown/index.html",revision:"1291b9cda446ce17be3fcd013b2aba90"},{url:"zh/guide/page/index.html",revision:"0877a74a9a645459ad96ad33cc5d5833"},{url:"zh/home/index.html",revision:"8053642e181e92cfcc37173753e1ebcd"},{url:"zh/index.html",revision:"c30727c040860103e4ff787d2d5a365d"},{url:"zh/layout/index.html",revision:"3542b586cd4d008d7e9da317974fe0bb"},{url:"zh/slides/index.html",revision:"4d9afaa3075acb7372d54dcf4bb18e98"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
