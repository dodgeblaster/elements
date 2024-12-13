/**
 * Colors
 */
const names = {
    a: 'slate',
    b: 'gray',
    c: 'zinc',
    d: 'neutral',
    e: 'stone',
    f: 'red',
    g: 'orange',
    h: 'amber',
    i: 'yellow',
    j: 'lime',
    k: 'green',
    l: 'emerald',
    m: 'teal',
    n: 'cyan',
    o: 'sky',
    p: 'blue',
    q: 'indigo',
    r: 'violet',
    s: 'purple',
    t: 'fuchsia',
    u: 'pink',
    v: 'rose',
};

const c_sizes = {
    0: 50,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
    10: 950,
};

const colors = {
    transparent: `transparent`,
    black: `0 0 0`,
    white: `255 255 255`,
    a0: `248 250 252`,
    a1: `241 245 249`,
    a2: `226 232 240`,
    a3: `203 213 225`,
    a4: `148 163 184`,
    a5: `100 116 139`,
    a6: `71 85 105`,
    a7: `51 65 85`,
    a8: `30 41 59`,
    a9: `15 23 42`,
    a10: `2 6 23`,
    b0: `249 250 251`,
    b1: `243 244 246`,
    b2: `229 231 235`,
    b3: `209 213 219`,
    b4: `156 163 175`,
    b5: `107 114 128`,
    b6: `75 85 99`,
    b7: `55 65 81`,
    b8: `31 41 55`,
    b9: `17 24 39`,
    b10: `3 7 18`,
    c0: `250 250 250`,
    c1: `244 244 245`,
    c2: `228 228 231`,
    c3: `212 212 216`,
    c4: `161 161 170`,
    c5: `113 113 122`,
    c6: `82 82 91`,
    c7: `63 63 70`,
    c8: `39 39 42`,
    c9: `24 24 27`,
    c10: `9 9 11`,
    d0: `250 250 250`,
    d1: `245 245 245`,
    d2: `229 229 229`,
    d3: `212 212 212`,
    d4: `163 163 163`,
    d5: `115 115 115`,
    d6: `82 82 82`,
    d7: `64 64 64`,
    d8: `38 38 38`,
    d9: `23 23 23`,
    d10: `10 10 10`,
    e0: `250 250 249`,
    e1: `245 245 244`,
    e2: `231 229 228`,
    e3: `214 211 209`,
    e4: `168 162 158`,
    e5: `120 113 108`,
    e6: `87 83 78`,
    e7: `68 64 60`,
    e8: `41 37 36`,
    e9: `28 25 23`,
    e10: `12 10 9`,
    f0: `254 242 242`,
    f1: `254 226 226`,
    f2: `254 202 202`,
    f3: `252 165 165`,
    f4: `248 113 113`,
    f5: `239 68 68`,
    f6: `220 38 38`,
    f7: `185 28 28`,
    f8: `153 27 27`,
    f9: `127 29 29`,
    f10: `69 10 10`,
    g0: `255 247 237`,
    g1: `255 237 213`,
    g2: `254 215 170`,
    g3: `253 186 116`,
    g4: `251 146 60`,
    g5: `249 115 22`,
    g6: `234 88 12`,
    g7: `194 65 12`,
    g8: `154 52 18`,
    g9: `124 45 18`,
    g10: `67 20 7`,
    h0: `255 251 235`,
    h1: `254 243 199`,
    h2: `253 230 138`,
    h3: `252 211 77`,
    h4: `251 191 36`,
    h5: `245 158 11`,
    h6: `217 119 6`,
    h7: `180 83 9`,
    h8: `146 64 14`,
    h9: `120 53 15`,
    h10: `69 26 3`,
    i0: `254 252 232`,
    i1: `254 249 195`,
    i2: `254 240 138`,
    i3: `253 224 71`,
    i4: `250 204 21`,
    i5: `234 179 8`,
    i6: `202 138 4`,
    i7: `161 98 7`,
    i8: `133 77 14`,
    i9: `113 63 18`,
    i10: `66 32 6`,
    j0: `247 254 231`,
    j1: `236 252 203`,
    j2: `217 249 157`,
    j3: `190 242 1`,
    j4: `163 230 53`,
    j5: `132 204 22`,
    j6: `101 163 13`,
    j7: `77 124 15`,
    j8: `63 98 18`,
    j9: `54 83 20`,
    j10: `26 46 5`,
    k0: `240 253 244`,
    k1: `220 252 231`,
    k2: `187 247 208`,
    k3: `134 239 172`,
    k4: `74 222 128`,
    k5: `34 197 94`,
    k6: `22 163 74`,
    k7: `21 128 61`,
    k8: `22 101 52`,
    k9: `20 83 45`,
    k10: `5 46 22`,
    l0: `236 253 245`,
    l1: `209 250 229`,
    l2: `167 243 208`,
    l3: `110 231 183`,
    l4: `52 211 153`,
    l5: `16 185 129`,
    l6: `5 150 105`,
    l7: `4 120 87`,
    l8: `6 95 70`,
    l9: `6 78 59`,
    l10: `2 44 34`,
    m0: `240 253 250`,
    m1: `204 251 241`,
    m2: `153 246 228`,
    m3: `94 234 212`,
    m4: `45 212 191`,
    m5: `20 184 166`,
    m6: `13 148 136`,
    m7: `15 118 110`,
    m8: `17 94 89`,
    m9: `19 78 74`,
    m10: `4 47 46`,
    n0: `236 254 255`,
    n1: `207 250 254`,
    n2: `165 243 252`,
    n3: `103 232 249`,
    n4: `34 211 238`,
    n5: `6 182 212`,
    n6: `8 145 178`,
    n7: `14 116 144`,
    n8: `21 94 117`,
    n9: `22 78 99`,
    n10: `8 51 68`,
    o0: `240 249 255`,
    o1: `224 242 254`,
    o2: `186 230 253`,
    o3: `125 211 252`,
    o4: `56 189 248`,
    o5: `14 165 233`,
    o6: `2 132 199`,
    o7: `3 105 161`,
    o8: `7 89 133`,
    o9: `12 74 110`,
    o10: `8 47 73`,
    p0: `239 246 255`,
    p1: `219 234 254`,
    p2: `191 219 254`,
    p3: `147 197 253`,
    p4: `96 165 250`,
    p5: `59 130 246`,
    p6: `37 99 235`,
    p7: `29 78 216`,
    p8: `30 64 175`,
    p9: `30 58 138`,
    p10: `23 37 84`,
    q0: `238 242 255`,
    q1: `224 231 255`,
    q2: `199 210 254`,
    q3: `165 180 252`,
    q4: `129 140 248`,
    q5: `99 102 241`,
    q6: `79 70 229`,
    q7: `67 56 202`,
    q8: `55 48 163`,
    q9: `49 46 129`,
    q10: `30 27 75`,
    r0: `245 243 255`,
    r1: `237 233 254`,
    r2: `221 214 254`,
    r3: `196 181 253`,
    r4: `167 139 250`,
    r5: `139 92 246`,
    r6: `124 58 237`,
    r7: `109 40 217`,
    r8: `91 33 182`,
    r9: `76 29 149`,
    r10: `46 16 101`,
    s0: `250 245 255`,
    s1: `243 232 255`,
    s2: `233 213 255`,
    s3: `216 180 254`,
    s4: `192 132 252`,
    s5: `168 85 247`,
    s6: `147 51 234`,
    s7: `126 34 206`,
    s8: `107 33 168`,
    s9: `88 28 135`,
    s10: `59 7 100`,
    p0: `253 244 255`,
    p1: `250 232 255`,
    p2: `245 208 254`,
    p3: `240 171 252`,
    p4: `232 121 249`,
    p5: `217 70 239`,
    p6: `192 38 211`,
    p7: `162 28 175`,
    p8: `134 25 143`,
    p9: `112 26 117`,
    p10: `74 4 78`,
    u0: `253 242 248`,
    u1: `252 231 243`,
    u2: `251 207 232`,
    u3: `249 168 212`,
    u4: `244 114 182`,
    u5: `236 72 153`,
    u6: `219 39 119`,
    u7: `190 24 93`,
    u8: `157 23 77`,
    u9: `131 24 67`,
    u10: `80 7 36`,
    v0: `255 241 242`,
    v1: `255 228 230`,
    v2: `254 205 211`,
    v3: `253 164 175`,
    v4: `251 113 133`,
    v5: `244 63 94`,
    v6: `225 29 72`,
    v7: `190 18 60`,
    v8: `159 18 57`,
    v9: `136 19 55`,
    v10: `76 5 25`,
};

const color = (x) => {
    const n = x[0];
    const s = x.slice(1);
    return `${names[n]}-${c_sizes[s]}`;
};

const backgroundColors = Object.keys(colors).reduce((a, x) => {
    a[`bg-${color(x)}`] =
        x === 'transparent'
            ? `background-color: ${colors[x]};`
            : `background-color: rgb(${colors[x]});`;

    return a;
}, {});

const borderColors = Object.keys(colors).reduce((a, x) => {
    a[`border-${color(x)}`] =
        x === 'transparent'
            ? `border-color: ${colors[x]};`
            : `border-color: rgb(${colors[x]});`;
    return a;
}, {});

const textColors = Object.keys(colors).reduce((a, x) => {
    a[`text-${color(x)}`] =
        x === 'transparent'
            ? `color: ${colors[x]};`
            : `color: rgb(${colors[x]});`;
    return a;
}, {});

const grandientStops = Object.keys(colors).reduce((a, x) => {
    if (x !== 'transparent') {
        a[`from-${x}`] = `
            --s-gradient-from: rgb(${colors[x]});
            --s-gradient-to: rgb(248 113 113 / 0);
            --s-gradient-stops: var(--s-gradient-from), var(--s-gradient-to);
        `;
        a[`to-${x}`] = `
            --s-gradient-to:  rgb(${colors[x]});
        `;
    } else {
        a[`from-${x}`] = `
            --s-gradient-from: transaprent;
            --s-gradient-to: rgb(248 113 113 / 0);
            --s-gradient-stops: var(--s-gradient-from), var(--s-gradient-to);
        `;
        a[`to-${x}`] = `
            --s-gradient-to:  transparent;
        `;
    }

    return a;
}, {});

/**
 * Sizes
 */

// util
function getStyleFromString(str) {
    return str.split('-')[0];
}

// sizes
function makeWidthStyle(str) {
    const num = Number(str.split('w-')[1]);
    return `width: ${num * 4}px;`;
}

function makeHeightStyle(str) {
    const num = Number(str.split('h-')[1]);
    return `height: ${num * 4}px;`;
}

// padding
function makePadding(str) {
    const num = Number(str.split('p-')[1]);
    return `padding: ${num * 4}px;`;
}

function makePaddingT(str) {
    const num = Number(str.split('pt-')[1]);
    return `padding-top: ${num * 4}px;`;
}

function makePaddingB(str) {
    const num = Number(str.split('pb-')[1]);
    return `padding-bottom: ${num * 4}px;`;
}

function makePaddingR(str) {
    const num = Number(str.split('pr-')[1]);
    return `padding-right: ${num * 4}px;`;
}

function makePaddingL(str) {
    const num = Number(str.split('pl-')[1]);
    return `padding-left: ${num * 4}px;`;
}

function makePaddingX(str) {
    const num = Number(str.split('px-')[1]);
    return `padding-right: ${num * 4}px; padding-left: ${num * 4}px;`;
}

function makePaddingY(str) {
    const num = Number(str.split('py-')[1]);
    return `padding-top: ${num * 4}px; padding-bottom: ${num * 4}px;`;
}

// margins
function makeMargin(str) {
    const num = Number(str.split('m-')[1]);
    return `margin: ${num * 4}px;`;
}

function makeMarginT(str) {
    const num = Number(str.split('mt-')[1]);
    return `margin-top: ${num * 4}px;`;
}

function makeMarginB(str) {
    const num = Number(str.split('mb-')[1]);
    return `margin-bottom: ${num * 4}px;`;
}

function makeMarginR(str) {
    const num = Number(str.split('mr-')[1]);
    return `margin-right: ${num * 4}px;`;
}

function makeMarginL(str) {
    const num = Number(str.split('ml-')[1]);
    return `margin-left: ${num * 4}px;`;
}

function makeMarginX(str) {
    const num = Number(str.split('mx-')[1]);
    return `margin-right: ${num * 4}px; margin-left: ${num * 4}px;`;
}

function makeMarginY(str) {
    const num = Number(str.split('my-')[1]);
    return `margin-top: ${num * 4}px; margin-bottom: ${num * 4}px;`;
}

const sizes = {
    // size
    w: (str) => makeWidthStyle(str),
    h: (str) => makeHeightStyle(str),
    // padding
    p: (str) => makePadding(str),
    pt: (str) => makePaddingT(str),
    pb: (str) => makePaddingB(str),
    pr: (str) => makePaddingR(str),
    pl: (str) => makePaddingL(str),
    px: (str) => makePaddingX(str),
    py: (str) => makePaddingY(str),
    // margin
    m: (str) => makeMargin(str),
    mt: (str) => makeMarginT(str),
    mb: (str) => makeMarginB(str),
    mr: (str) => makeMarginR(str),
    ml: (str) => makeMarginL(str),
    mx: (str) => makeMarginX(str),
    my: (str) => makeMarginY(str),
};

const getSize = (x) => {
    return getStyleFromString(x) && sizes[getStyleFromString(x)]
        ? sizes[getStyleFromString(x)](x)
        : false;
};

const staticSizes = {
    'w-full': 'width: 100%;',
    'w-screen': 'width: 100vw;',
    'w-min': 'width: min-content;',
    'w-max': 'width: max-content;',
    'w-1-2': 'width: 50%;',
    'w-1-3': 'width: 33.333333%;',
    'w-2-3': 'width: 66.666667%;',
    'w-1-4': 'width: 25%;',
    'w-2-4': 'width: 50%;',
    'w-3-4': 'width: 75%;',
    'w-0': 'width: 0px;',
    'w-px': 'width: 1px;',

    'h-0': 'height: 0px;',
    'h-px': 'height: 1px;',
    'h-full': 'height: 100%;',
    'h-screen': 'height: 100vh;',
    'h-1-2': 'height: 50%;',
    'h-1-3': 'height: 33.333333%;',
    'h-2-3': 'height: 66.666667%;',
    'h-1-4': 'height: 25%;',
    'h-2-4': 'height: 50%;',
    'h-3-4': 'height: 75%;',
};

/**
 * Static styles
 */
const animation = {
    'transition-none': 'transition-property: none;',
    'transition-all':
        'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    transition:
        'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-colors':
        'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-opacity':
        'transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-shadow':
        'transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-transform':
        'transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',

    // duration
    'duration-0': 'transition-duration: 0s;',
    'duration-75': 'transition-duration: 75ms;',
    'duration-100': 'transition-duration: 100ms;',
    'duration-150': 'transition-duration: 150ms;',
    'duration-200': 'transition-duration: 200ms;',
    'duration-300': 'transition-duration: 300ms;',
    'duration-500': 'transition-duration: 500ms;',
    'duration-700': 'transition-duration: 700ms;',
    'duration-1000': 'transition-duration: 1000ms;',

    // timing function
    'ease-linear': 'transition-timing-function: linear;',
    'ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
    'ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
    'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',

    // delay
    'delay-0': 'transition-delay: 0s;',
    'delay-75': 'transition-delay: 75ms;',
    'delay-100': 'transition-delay: 100ms;',
    'delay-150': 'transition-delay: 150ms;',
    'delay-200': 'transition-delay: 200ms;',
    'delay-300': 'transition-delay: 300ms;',
    'delay-500': 'transition-delay: 500ms;',
    'delay-700': 'transition-delay: 700ms;',
    'delay-1000': 'transition-delay: 1000ms;',

    //animation
    'animate-none': 'animation: none;',
    'animate-spin': `animation: spin 1s linear infinite;`,
    'animate-ping': `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;`,
    'animate-pulse': `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;`,
    'animate-bounce': `	animation: bounce 1s infinite;`,
};

const border = {
    'rounded-none': 'border-radius: 0px;',
    'rounded-sm': 'border-radius: 0.125rem;',
    rounded: 'border-radius: 0.25rem;',
    'rounded-md': 'border-radius: 0.375rem;',
    'rounded-lg': 'border-radius: 0.5rem;',
    'rounded-xl': 'border-radius: 0.75rem; ',
    'rounded-2xl': 'border-radius: 1rem; ',
    'rounded-3xl': 'border-radius: 1.5rem; ',
    'rounded-full': 'border-radius: 9999px;',

    'border-0': 'border-width: 0px;',
    'border-2': 'border-width: 2px;',
    'border-4': 'border-width: 4px;',
    'border-8': 'border-width: 8px;',
    border: 'border-width: 1px; border-style: solid;',

    'border-solid': 'border-style: solid;',
    'border-dashed': 'border-style: dashed;',
    'border-dotted': 'border-style: dotted;',
    'border-double': 'border-style: double;',
    'border-hidden': 'border-style: hidden;',
    'border-none': 'border-style: none;',
};

const flex = {
    'flex-row': 'flex-direction: row;',
    'flex-row-reverse': 'flex-direction: row-reverse;',
    'flex-col': 'flex-direction: column;',
    'flex-col-reverse': 'flex-direction: column-reverse;',

    'flex-wrap': 'flex-wrap: wrap;',
    'flex-wrap-reverse': 'flex-wrap: wrap-reverse;',
    'flex-nowrap': 'flex-wrap: nowrap;',

    'flex-1': 'flex: 1 1 0%;',
    'flex-auto': 'flex: 1 1 auto;',
    'flex-initial': 'flex: 0 1 auto;',
    'flex-none': 'flex: none;',

    'justify-normal': 'justify-content: normal;',
    'justify-start': 'justify-content: flex-start;',
    'justify-end': 'justify-content: flex-end;',
    'justify-center': 'justify-content: center;',
    'justify-between': 'justify-content: space-between;',
    'justify-around': 'justify-content: space-around;',
    'justify-evenly': 'justify-content: space-evenly;',
    'justify-stretch': 'justify-content: stretch;',

    'items-start': 'align-items: flex-start;',
    'items-end': 'align-items: flex-end;',
    'items-center': 'align-items: center;',
    'items-baseline': 'align-items: baseline;',
    'items-stretch': 'align-items: stretch;',
};

const font = {
    'text-xs': 'font-size: 0.75rem; line-height: 1rem;',
    'text-sm': 'font-size: 0.875rem; line-height: 1.25rem;',
    'text-base': 'font-size: 1rem; line-height: 1.5rem;',
    'text-lg': 'font-size: 1.125rem; line-height: 1.75rem;',
    'text-xl': 'font-size: 1.25rem; line-height: 1.75rem;',
    'text-2xl': 'font-size: 1.5rem; line-height: 2rem;',
    'text-3xl': 'font-size: 1.875rem; line-height: 2.25rem;',
    'text-4xl': 'font-size: 2.25rem; line-height: 2.5rem; ',
    'text-5xl': 'font-size: 3rem; line-height: 1;',
    'text-6xl': 'font-size: 3.75rem; line-height: 1;',
    'text-7xl': 'font-size: 4.5rem; line-height: 1;',
    'text-8xl': 'font-size: 6rem; line-height: 1;',
    'text-9xl': 'font-size: 8rem; line-height: 1;',
    italic: 'font-style: italic;',
    'not-italic': 'font-style: normal;',
    'font-thin': 'font-weight: 100;',
    'font-extralight': 'font-weight: 200;',
    'font-light': 'font-weight: 300;',
    'font-normal': 'font-weight: 400;',
    'font-medium': 'font-weight: 500;',
    'font-semibold': 'font-weight: 600;',
    'font-bold': 'font-weight: 700;',
    'font-extrabold': 'font-weight: 800;',
    'font-black': 'font-weight: 900;',

    'text-left': 'text-align: left;',
    'text-center': 'text-align: center;',
    'text-right': 'text-align: right;',
    'text-justify': 'text-align: justify;',
    'text-start': 'text-align: start;',
    'text-end': 'text-align: end;',
};

const gradients = {
    'bg-gradient-to-r': `background-image: linear-gradient(to right, var(--s-gradient-stops));`,
    'bg-gradient-to-t': `background-image: linear-gradient(to top, var(--s-gradient-stops));`,
    'bg-gradient-to-tr': `background-image: linear-gradient(to top right, var(--s-gradient-stops));`,
    'bg-gradient-to-tl': `background-image: linear-gradient(to top left, var(--s-gradient-stops));`,
    'bg-gradient-to-l': `background-image: linear-gradient(to left, var(--s-gradient-stops));`,
    'bg-gradient-to-b': `background-image: linear-gradient(to bottom, var(--s-gradient-stops));`,
    'bg-gradient-to-bl': `background-image: linear-gradient(to bottom left, var(--s-gradient-stops));`,
    'bg-gradient-to-br': `background-image: linear-gradient(to bottom right,var(--s-gradient-stops));`,
};

const layout = {
    // display
    block: `display: block;`,
    'inline-block': `display: inline-block;`,
    inline: `display: inline;`,
    flex: `display: flex;`,
    'inline-flex': `display: inline-flex;`,
    'table	': `display: table;`,
    'inline-table': `display: inline-table;`,
    'table-caption': `display: table-caption;`,
    'table-cell': `display: table-cell;`,
    'table-column': `display: table-column;`,
    'table-column-group': `display: table-column-group;`,
    'table-footer-group': `display: table-footer-group;`,
    'table-header-group': `display: table-header-group;`,
    'table-row-group': `display: table-row-group;`,
    'table-row': `display: table-row;`,
    'flow-root': `display: flow-root;`,
    grid: `display: grid;`,
    'inline-grid': `display: inline-grid;`,
    contents: `display: contents;`,
    'list-item': `display: list-item;`,
    hidden: `display: none;`,

    // overflow
    'overflow-auto': 'overflow: auto;',
    'overflow-hidden': 'overflow: hidden;',
    'overflow-clip': 'overflow: clip;',
    'overflow-visible': 'overflow: visible;',
    'overflow-scroll': 'overflow: scroll;',
    'overflow-x-auto': 'overflow-x: auto;',
    'overflow-y-auto': 'overflow-y: auto;',
    'overflow-x-hidden': 'overflow-x: hidden;',
    'overflow-y-hidden': 'overflow-y: hidden;',
    'overflow-x-clip': 'overflow-x: clip;',
    'overflow-y-clip': 'overflow-y: clip;',
    'overflow-x-visible': 'overflow-x: visible;',
    'overflow-y-visible': 'overflow-y: visible;',
    'overflow-x-scroll': 'overflow-x: scroll;',
    'overflow-y-scroll': 'overflow-y: scroll;',

    // position
    static: 'position: static;',
    fixed: 'position: fixed;',
    absolute: 'position: absolute;',
    relative: 'position: relative;',
    sticky: 'position: sticky;',
    'top-0': 'top: 0px;',
    'right-0': 'right: 0px;',
    'bottom-0': 'bottom: 0px;',
    'left-0': 'left: 0px;',

    // z-index
    'z-0': 'z-index: 0;',
    'z-10': 'z-index: 10;',
    'z-20': 'z-index: 20;',
    'z-30': 'z-index: 30;',
    'z-40': 'z-index: 40;',
    'z-50': 'z-index: 50;',
    'z-auto': 'z-index: auto;',
};

const opacity = {
    'opacity-0': 'opacity: 0;',
    'opacity-10': 'opacity: 0.1;',
    'opacity-20': 'opacity: 0.2;',
    'opacity-25': 'opacity: 0.25;',
    'opacity-30': 'opacity: 0.3;',
    'opacity-40': 'opacity: 0.4;',
    'opacity-50': 'opacity: 0.5;',
    'opacity-60': 'opacity: 0.6;',
    'opacity-70': 'opacity: 0.7;',
    'opacity-75': 'opacity: 0.75;',
    'opacity-80': 'opacity: 0.8;',
    'opacity-90': 'opacity: 0.9;',
    'opacity-95': 'opacity: 0.95;',
    'opacity-100': 'opacity: 1;',
};

const shadow = {
    'shadow-sm': 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);',
    shadow: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);',
    'shadow-md':
        'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
    'shadow-lg':
        'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
    'shadow-xl':
        'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);',
    'shadow-2xl': 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);',
    'shadow-inner': 'box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);',
    'shadow-none': 'box-shadow: 0 0 #0000;',

    'drop-shadow-sm': 'filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));',
    'drop-shadow':
        'filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));',
    'drop-shadow-md':
        'filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));',
    'drop-shadow-lg':
        'filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));',
    'drop-shadow-xl':
        'filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));',
    'drop-shadow-2xl': 'filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));',
    'drop-shadow-none': 'filter: drop-shadow(0 0 #0000);',
};

const keyframes = `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
`;

/**
 * Init
 */
const staticStyles = {
    ...backgroundColors,
    ...border,
    ...borderColors,
    ...flex,
    ...font,
    ...layout,
    ...opacity,
    ...textColors,
    ...staticSizes,
    ...gradients,
    ...animation,
    ...grandientStops,
    ...shadow,
};

const sizeUnits = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32,
    34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70,
    72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 120, 140, 180,
    200, 220, 240, 260, 280, 300,
];

const sizeDefs = [
    'w',
    'h',
    'p',
    'pt',
    'pb',
    'pr',
    'pl',
    'px',
    'py',
    'm',
    'mt',
    'mb',
    'mr',
    'ml',
    'mx',
    'my',
];

let css = `*,
::before,
::after {
    box-sizing: border-box;
}
html {
    font-family: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji';
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
}
body {
    margin: 0;
}
b,
strong {
    font-weight: bolder;
}
code,
kbd,
samp,
pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono',
        Menlo, monospace;
    font-size: 1em;
}
small {
    font-size: 80%;
}
sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}
sub {
    bottom: -0.25em;
}
sup {
    top: -0.5em;
}
table {
    border-color: currentcolor;
}
button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}
button,
[type='button'],
[type='reset'],
[type='submit'] {
    -webkit-appearance: button;
}
legend {
    padding: 0;
}
progress {
    vertical-align: baseline;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    height: auto;
}
[type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}
::-webkit-search-decoration {
    -webkit-appearance: none;
}
::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}
summary {
    display: list-item;
}`;

Object.keys(staticStyles).forEach((k) => {
    css = css + `.${k} { ${staticStyles[k]}} \n`;
});

sizeDefs.forEach((pre) => {
    sizeUnits.forEach((unit) => {
        const str = `${pre}-${unit}`;
        css = css + `.${str} { ${getSize(str)}} \n`;
    });
});

console.log(css);

// Set on DOM
const styleElement = document.createElement('style');
styleElement.innerHTML = css;
document.head.appendChild(styleElement);
