export type SVGSize =
  | '12'
  | '16'
  | '20'
  | '24'
  | '30'
  | '32'
  | '40'
  | '100'
  | '120';

export const svgXmlDataStrings = {
  ['send']:
    '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.316 1.68 2.164 7.875l4.894 2.339 7.495-4.813-4.693 7.707 2.284 4.73 6.168-16.16h.004ZM.394 7.242l18.72-7.18a.61.61 0 0 1 .489-.02.616.616 0 0 1 .357.793l-7.17 18.772a.616.616 0 0 1-1.13.049l-3.698-7.65-7.614-3.64a.613.613 0 0 1 .046-1.123Z" fill="#000"/></svg>',
  ['switch']:
    '<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.075 2.152c-.008.286.046.423.324.423h6.679c1.21.085 2.291.37 3.206.926a4.65 4.65 0 0 1 1.45 1.35c.62.902.97 2.201 1.16 3.25.083.454.121.878.034 1.075a.322.322 0 0 1-.187.185c-.459.164-.944-.402-1.203-.672-1.232-1.289-3.022-1.822-5.133-1.922H7.3c-.218.034-.296.178-.274.401v1.538c-.013.512-.3.686-.872.513L.895 5.53l-.517-.364-.132-.093c-.423-.34-.249-.65.13-.917l.402-.282L5.816.325C6.43-.108 7.075-.224 7.075.71v1.442Zm5.85 15.696c.008-.286-.046-.423-.323-.424h-6.68c-1.209-.084-2.291-.37-3.206-.925a4.647 4.647 0 0 1-1.455-1.36c-.634-.926-1.048-2.432-1.2-3.513-.048-.345-.058-.646.012-.802a.323.323 0 0 1 .186-.185c.46-.164.945.401 1.203.672 1.232 1.289 3.023 1.822 5.134 1.922H12.7c.219-.034.296-.178.275-.402v-1.538c.012-.51.3-.685.872-.512l5.257 3.69.517.364.133.092c.422.34.248.65-.131.917l-.401.283-5.038 3.547c-.615.434-1.26.55-1.26-.384v-1.442Z" fill="#000"/></svg>',
  ['translation']:
    '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12.79 15.075-2.308-2.51.027-.03a18.041 18.041 0 0 0 3.373-6.53h2.664V4h-6.364V2H8.364v2H2v1.99h10.155a16.196 16.196 0 0 1-2.882 5.36A15.906 15.906 0 0 1 7.173 8H5.355a17.826 17.826 0 0 0 2.709 4.56L3.44 17.585 4.727 19l4.546-5 2.827 3.11.69-2.035ZM17.91 10h-1.82L12 22h1.818l1.023-3h4.318l1.023 3H22l-4.09-12Zm-2.387 7L17 12.665 18.477 17h-2.954Z" fill="#000"/></svg>',
};

export type SVGName = keyof typeof svgXmlDataStrings;