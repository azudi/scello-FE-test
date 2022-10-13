import React from 'react'

interface Props {
    width: string | number | undefined,
}

function ServicesIcon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_18848_111)">
        <path opacity="0.4" d="M4.76301 11.8763C4.27092 11.7741 3.79433 11.608 3.34542 11.382C2.56313 11.4979 1.76409 11.405 1.02927 11.1127C0.609111 10.9443 0.23973 11.4464 0.526105 11.7969C0.960226 12.3261 1.47975 12.7791 2.0632 13.137C3.57381 14.0703 5.44721 14.2436 7.10027 13.6828C7.54354 13.0917 7.83351 12.4 7.94426 11.6695C6.92117 12.0204 5.82292 12.0918 4.76301 11.8763ZM4.33076 7.94413C3.97977 6.92102 3.90838 5.82273 4.12398 4.7628C4.22607 4.27073 4.39219 3.79416 4.61811 3.34526C4.50228 2.56294 4.59517 1.76391 4.8874 1.02903C5.05585 0.608991 4.55366 0.239423 4.2032 0.525739C3.67396 0.95983 3.22106 1.47939 2.86324 2.06291C1.9299 3.57359 1.75656 5.44694 2.31735 7.10001C2.9085 7.5433 3.60022 7.8333 4.33076 7.94413ZM11.6696 8.05582C12.0206 9.07893 12.0919 10.1772 11.8764 11.2372C11.7743 11.7292 11.6081 12.2058 11.3822 12.6547C11.4981 13.437 11.4052 14.236 11.1129 14.9709C10.9445 15.391 11.4467 15.7605 11.7971 15.4742C12.3263 15.0401 12.7792 14.5205 13.1371 13.937C14.0704 12.4264 14.2438 10.553 13.683 8.89994C13.0918 8.45665 12.4001 8.16665 11.6696 8.05582ZM15.4742 4.20304C15.0401 3.67379 14.5206 3.22083 13.9371 2.86289C12.4265 1.92961 10.5531 1.75633 8.90006 2.31712C8.45678 2.90824 8.16682 3.59996 8.05608 4.33048C9.07917 3.97955 10.1774 3.90816 11.2373 4.1237C11.7294 4.22581 12.206 4.39196 12.6549 4.6179C13.4372 4.50195 14.2362 4.59485 14.9711 4.88719C15.3912 5.05564 15.7606 4.55351 15.4742 4.20304Z" fill="#213F7D"/>
        <path d="M15.8306 8.56571C15.3057 6.34366 13.4763 4.57078 11.2373 4.12369C10.1773 3.90816 9.0791 3.97955 8.056 4.33048C8.16973 3.57377 8.47491 2.85866 8.94257 2.25299C9.41024 1.64732 10.0249 1.17118 10.7282 0.869728C11.1444 0.69175 11.0506 0.075416 10.6003 0.030068C9.91909 -0.0371637 9.23144 0.00993299 8.56577 0.169412C6.34386 0.694313 4.57092 2.52378 4.12391 4.76279C3.90832 5.82273 3.9797 6.92101 4.33069 7.94412C3.57398 7.83037 2.85887 7.52517 2.25319 7.05749C1.64752 6.58982 1.17137 5.97516 0.869905 5.27182C0.691928 4.85575 0.0755987 4.94944 0.0301902 5.39976C-0.0370503 6.08095 0.0100669 6.76859 0.169593 7.43424C0.694492 9.65628 2.52395 11.4292 4.76294 11.8762C5.82286 12.0918 6.9211 12.0204 7.94419 11.6695C7.83046 12.4262 7.52529 13.1413 7.05762 13.747C6.58996 14.3526 5.9753 14.8288 5.27197 15.1302C4.85584 15.3082 4.94959 15.9245 5.3999 15.9699C6.0811 16.0371 6.76875 15.99 7.43443 15.8305C9.65634 15.3056 11.4293 13.4762 11.8763 11.2372C12.0919 10.1772 12.0205 9.07893 11.6695 8.05582C12.4262 8.16958 13.1413 8.47477 13.747 8.94245C14.3527 9.41013 14.8288 10.0248 15.1303 10.7281C15.3083 11.1442 15.9246 11.0505 15.97 10.6002C16.0372 9.919 15.9901 9.23136 15.8306 8.56571ZM8.0001 9.49997C7.70343 9.49997 7.41342 9.412 7.16674 9.24718C6.92006 9.08236 6.7278 8.84809 6.61427 8.574C6.50074 8.29992 6.47103 7.99832 6.52891 7.70734C6.58678 7.41637 6.72964 7.1491 6.93942 6.93932C7.1492 6.72954 7.41648 6.58667 7.70745 6.5288C7.99842 6.47092 8.30002 6.50062 8.57411 6.61415C8.8482 6.72768 9.08247 6.91994 9.24729 7.16662C9.41211 7.41329 9.50009 7.7033 9.50009 7.99997C9.50008 8.39779 9.34204 8.77932 9.06074 9.06062C8.77944 9.34192 8.39792 9.49996 8.0001 9.49997Z" fill="#213F7D"/>
        </g>
        <defs>
        <clipPath id="clip0_18848_111">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )
}

export default ServicesIcon