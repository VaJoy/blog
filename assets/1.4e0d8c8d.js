import{o as t,c as o,F as e,p,d as n,b as s}from"./vendor.90065a16.js";const c=p(`<h1>\u4E00. computed \u63A5\u53E3</h1><p>\u8FD9\u91CC\u6709\u4E2A\u793A\u4F8B\uFF1A</p><div class="fr w-45"><p>\u4ECE\u5DE6\u4FA7\u4EE3\u7801\u53EF\u4EE5\u77E5\u9053\uFF0C<code>plusOne</code> \u662F\u8FD9\u6837\u5B9A\u4E49\u7684\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token keyword">const</span> plusOne <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">.</span>value <span class="token operator">=</span> val <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><blockquote><p>\u{1F4A1} \u5B83\u4F7F\u7528\u4E86 <code>computed</code> \u63A5\u53E3\u3002</p></blockquote></div>`,3),l=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** demo **/"),s(`
`),n("span",{class:"token keyword"},"const"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" plusOne "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function-variable function"},"get"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" count"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"set"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    count`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" val "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

plusOne`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 0"),s(`
`)])],-1),u=n("p",null,[s("\u4E0A\u9762\u7684\u4EE3\u7801\u6765\u81EA "),n("a",{href:"https://vuejs.org/api/reactivity-core.html#computed"},"Vue \u5B98\u65B9\u6587\u6863"),s("\u3002")],-1),r=n("h1",null,"\u4E8C. \u603B\u7ED3",-1),k=n("p",null,[n("code",null,"computed"),s(" \u63A5\u53E3\u53EF\u4EE5\u4F20\u5165 "),n("code",null,"get"),s(" \u548C "),n("code",null,"set"),s(" \u5C5E\u6027\u3002")],-1);function i(d,m){return t(),o(e,null,[c,l,u,r,k],64)}const a={render:i};a.__hmrId="/builds/vajoylan/blog-demo/src/pages/post/markdowns/1.md";a.__toc=[{level:"1",content:"&#x4E00;. computed &#x63A5;&#x53E3;"},{level:"1",content:"&#x4E8C;. &#x603B;&#x7ED3;"}];export{a as default};
