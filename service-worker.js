if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const c=e=>s(e,i),o={module:{uri:i},exports:r,require:c};a[i]=Promise.all(f.map((e=>o[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.b8f52c22.css",revision:"17cb50f73e675230ea58cf07876bbe1a"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/39.1df935c5.js",revision:"3a80568492a4a03474e5a3f4c38eae2a"},{url:"assets/js/40.bf3e2458.js",revision:"2e410bc8988d95b12e9574c74a63cd95"},{url:"assets/js/41.576e1c20.js",revision:"95e280222b3320a9e7dd3b37f4e5cd32"},{url:"assets/js/42.80ed12c0.js",revision:"f10d3d8b9650112d4a0e0e512555d9f0"},{url:"assets/js/43.23aa9fe9.js",revision:"21dcd3ba057147164b12fd409256bf31"},{url:"assets/js/44.461f784d.js",revision:"a2d409b45d87b1af2aadaa762a71a2a3"},{url:"assets/js/45.a8385119.js",revision:"85e6ce4956c4f55a25e948422401ce5c"},{url:"assets/js/app.11739066.js",revision:"5603866a42d10a7eac2dc275e860e340"},{url:"assets/js/layout-Blog.8e947295.js",revision:"7cc96e3900ec74b6a3a252e6859ebb9a"},{url:"assets/js/layout-Layout.3729e73b.js",revision:"bef841937552d76ef6953e78dfc20711"},{url:"assets/js/layout-NotFound.dc4b8d24.js",revision:"50bb2121c6db43babb59d7b09642e76e"},{url:"assets/js/layout-Slide.149b82d3.js",revision:"39340537081672f6ae9695d600ce31d3"},{url:"assets/js/page--10880db8.bc3508a4.js",revision:"df6ec23ca751ca6db69e55de926c9c1d"},{url:"assets/js/page--1f890e47.bcd0cdcf.js",revision:"754e21caa9392bb210dfe0acc3ad6c54"},{url:"assets/js/page--60b28776.b7393675.js",revision:"2916af74ac69952a314c20b214027882"},{url:"assets/js/page-1md.0d23950e.js",revision:"0bb8bbaa4bb578dacfdfdbbb88501a96"},{url:"assets/js/page-BlogHome.fa5bbabf.js",revision:"f48c11d8c021a85d4ec27f9abfa0be25"},{url:"assets/js/page-Componentdisabled.dba8dcd8.js",revision:"537534c37a1818ccb8bae7cfa9b87603"},{url:"assets/js/page-CustomLayout.8724e45d.js",revision:"22d28fd44252e5fa3fd50f0facf78067"},{url:"assets/js/page-Encryptionarticle.5561a2a1.js",revision:"4d63f07cd2a1f4afb444252b4235d067"},{url:"assets/js/page-Guides.aeeca1ac.js",revision:"e1921c271acf75efcb5b96ddb7f537d0"},{url:"assets/js/page-IntroPage.c843dbc8.js",revision:"0f863161efa8dc10ec2dfbfb0b7b97ef"},{url:"assets/js/page-MarkdownEnhance.434daa98.js",revision:"e5397187dfde5ffbad548b71c20bcfff"},{url:"assets/js/page-Markdown增强.e13729c0.js",revision:"c7ed74148427232dec4a9f23bb55bf3f"},{url:"assets/js/page-pageconfig.646f5475.js",revision:"1d6a4c4692b66617288779d738d76c1d"},{url:"assets/js/page-Projecthome.1454ae3d.js",revision:"eedddb2afdb77fb3d4d97227e934d54c"},{url:"assets/js/page-readmeinschool.75c58e01.js",revision:"88a9ac1c72ee085f53396cea03b8eafd"},{url:"assets/js/page-Slidepage.865aec4d.js",revision:"63cb756c35444445429f473110e2cd9e"},{url:"assets/js/page-主要功能与配置演示.be1eb4ba.js",revision:"bbb413535bdc5a6d65d039c41079afa8"},{url:"assets/js/page-二维数组中的查找.4154229c.js",revision:"ad8145ae2a6857b1ff65104673f94808"},{url:"assets/js/page-剑指offer.ea285e31.js",revision:"2a7a8ad01be5d657f97c10176d7f5e2b"},{url:"assets/js/page-博客主页.a573a9e9.js",revision:"4f543b86ee65dbd511b1d20092c7b612"},{url:"assets/js/page-密码加密的文章.ba0f2da6.js",revision:"fd64dafd8d34b113f076d1735a836884"},{url:"assets/js/page-幻灯片页.06aaa884.js",revision:"68ddb14b94613c3c48aee8706ccef7e3"},{url:"assets/js/page-组件禁用.2b5d3187.js",revision:"fc3bfa83286013a1a8017ccec73e985d"},{url:"assets/js/page-自定义布局.96a6d481.js",revision:"327304f1d01440e712755491dbdceba9"},{url:"assets/js/page-页面配置.8d738b66.js",revision:"6dbd2d70c3d44041c8f0f0402342af9b"},{url:"assets/js/page-项目主页.864c8678.js",revision:"f12c761bec4ef0e9b4e7bc2ff4f25aae"},{url:"assets/js/vendors~flowchart.1135b2b3.js",revision:"308ab82a8e11a1a4f627b6ad9024f919"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.19e95b48.js",revision:"16c03548ad7e69581745019418628b38"},{url:"assets/js/vendors~layout-Layout.6e6e684a.js",revision:"ff04f1875f60b46f2a9ac75f7f0a8320"},{url:"assets/js/vendors~mermaid.d7b8f275.js",revision:"d20de80e3dd5e92089e9c3a856603d3b"},{url:"assets/js/vendors~photo-swipe.1eaca504.js",revision:"59ea0ebb4882df91f91750346ce9cb12"},{url:"assets/js/vendors~reveal.2edd7b55.js",revision:"48d2f71700ed452028dc6512586fe0be"},{url:"assets/js/vendors~waline.255f544c.js",revision:"8bcbf04e19ffac233a84a90af3a40ffb"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"517fd3621748cff83172fdc7e1a1771f"},{url:"article/index.html",revision:"2333c5453c297e2d8a7526ab9738363f"},{url:"category/Guide/index.html",revision:"732fd1f1d2bfedebd26e94df4196085b"},{url:"category/index.html",revision:"f943550451a0f9ac86ce954c146f7532"},{url:"category/使用指南/index.html",revision:"24482a9803386daa918d8a4c41138db1"},{url:"code/C++/index.html",revision:"8a39c4aed32b22dd396ac9acc68cd8b7"},{url:"code/Java/index.html",revision:"e0d04215f38b91313d0543349863e3a1"},{url:"code/Python/index.html",revision:"e6b40310956d9e7765119b725975782b"},{url:"code/SQL/index.html",revision:"e4108849fb0bcd065b43fcf6be52b78a"},{url:"encrypt/index.html",revision:"c0c0c087545fa1346b9855fcd9e9882e"},{url:"guide/disable/index.html",revision:"1fc9a8feb3a13b396d28d28dd303e119"},{url:"guide/encrypt/index.html",revision:"421a6567d9f85bbf9e893a34a2cb2fa2"},{url:"guide/index.html",revision:"11b15c9f5ac2ca286afecd0ce409c397"},{url:"guide/markdown/index.html",revision:"7000e2fbcf7bb3e3f21e9334cc1f61ac"},{url:"guide/page/index.html",revision:"e2bc4a1f63d80500739be8ae493206a2"},{url:"home/index.html",revision:"75552e0d8b92943a6fd712f1200c95a5"},{url:"index.html",revision:"f3576cf67cd95e845cb9d1299e80435d"},{url:"intro/index.html",revision:"89f59d85c0955ddc25f546a64aea2318"},{url:"layout/index.html",revision:"dfdde0baa75aeff6f909146d47fdd8ea"},{url:"life/Annual-Summary/index.html",revision:"9d5f52fb396d06c7e64fcd703eb3f4fe"},{url:"life/Travel-Records/index.html",revision:"8b0196df880dd6b68775009326f3c9e3"},{url:"school/high-school/index.html",revision:"0bec26c6d385e661bf3a217bf534018c"},{url:"school/index.html",revision:"6893d028e444b522350ae6904aa6a74d"},{url:"school/junior-high-school/index.html",revision:"4f06536ab01abdbe5a09595dd0d23d6c"},{url:"school/university/index.html",revision:"2f9443f2329a18f4f2786fd046a74c62"},{url:"slide/index.html",revision:"562a7b9996671eb3daf87fbb7e79c1f6"},{url:"slides/index.html",revision:"e12536ceea9a2c0f7f94aca54ceda14b"},{url:"solution/leetcode/CodingInterview/index.html",revision:"de9a65ce91657d503c002a0aa3da2a79"},{url:"solution/leetcode/CodingInterview/二维数组中的查找/index.html",revision:"0c753adef13ff6aa4ac772e26c8e5a16"},{url:"solution/leetcode/Cracking-the-Coding-Interview/index.html",revision:"729d6df9eb17e65c2b1a4393207dc416"},{url:"solution/nowcoder/sql-advanced/index.html",revision:"35ac70681faf2e276f07f1eaec5044ca"},{url:"star/index.html",revision:"b31be2de52e0080c5412790f2655ed91"},{url:"tag/encryption/index.html",revision:"0a23a3a1fb6655b81a9410a63b5d1e84"},{url:"tag/Guide/index.html",revision:"35039b09b6afaf80cedd7903265c9030"},{url:"tag/index.html",revision:"a4d15c1fa0089100523164f9963deb6f"},{url:"tag/markdown/index.html",revision:"9a0df41ecc6ce879827db05b18e7e127"},{url:"tag/Page config/index.html",revision:"4f74e870dda65cd16bd753c3a1d851cc"},{url:"tag/使用指南/index.html",revision:"fc5e4b6da9c576a02652e9b20dd9c755"},{url:"tag/文章加密/index.html",revision:"c32382d7bdc2bfdcc617acef92ba318e"},{url:"tag/页面配置/index.html",revision:"8323e5836464c1219d1498e170c5f626"},{url:"test/index.html",revision:"6a47f8dc2e862e3ae39b2c773f6889c5"},{url:"timeline/index.html",revision:"1294ba0defa407dbaa0c136e8a605c4e"},{url:"zh/guide/disable/index.html",revision:"f5248541cbe79537c2f71d3bce206c3d"},{url:"zh/guide/encrypt/index.html",revision:"70f927d272dabeeaf2f4d6eb9e0ce033"},{url:"zh/guide/index.html",revision:"13860985a4b7ab4a21ce38ed896a22ed"},{url:"zh/guide/markdown/index.html",revision:"e4af48171def1d7996dbde037acf94a7"},{url:"zh/guide/page/index.html",revision:"dafd25aaddaaecf7e6e38554ea8deb07"},{url:"zh/home/index.html",revision:"9abe9e7b5d4cf5012c04018b7b2c9845"},{url:"zh/index.html",revision:"8f1c858c62b6978e719f45dba8e7b135"},{url:"zh/layout/index.html",revision:"4b8f0235b3f620ed4aa08aa8b0f73d34"},{url:"zh/slides/index.html",revision:"bd5776c41606ec60e81758813771409d"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
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
