import React from 'react'
import "./Apartments.scss";

export default function ApartmentsCard() {
  return (  
    <li className="apartments__card">
      <img src="/img/ap-ph.jpg" alt="app viev" className="apartments__img" width="370" height="200"/>
      <div className="apartments__wrapper">
        <h3 className="apartments__heading">Апартаменты</h3>
        <p className="apartments__prise">от 1000 р.</p>
      </div>
      <p className="apartments__discription">Отдельностоящий дом со всеми удобствами. Подходит для большой семьи.</p>
      <div className="apartments__wrapper">
        <div className="apartments__icons">
          <svg className="apartments__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0499 19.9993H7.62093C7.52304 19.9993 7.42917 19.9571 7.35995 19.8821C7.29074 19.8071 7.25185 19.7054 7.25185 19.5993V15.1993H6.69824H6.5137V16.3993C6.5137 16.5054 6.47481 16.6071 6.4056 16.6821C6.33638 16.7571 6.2425 16.7993 6.14462 16.7993H2.45385C2.35596 16.7993 2.26208 16.7571 2.19287 16.6821C2.12365 16.6071 2.08477 16.5054 2.08477 16.3993V11.9993H1.52377C1.28034 11.9972 1.04754 11.8909 0.876095 11.7036C0.70465 11.5163 0.608452 11.2631 0.608459 10.9993L0.608459 8.19927C0.60902 7.44491 0.840504 6.71206 1.26663 6.11559C1.69276 5.51913 2.28944 5.09274 2.96317 4.90327C2.56764 4.52811 2.2871 4.03113 2.15899 3.47866C2.03088 2.92618 2.06131 2.34451 2.2462 1.81126C2.43109 1.27802 2.76166 0.818584 3.19378 0.494275C3.6259 0.169966 4.13901 -0.00378418 4.66462 -0.00378418C5.19023 -0.00378418 5.70334 0.169966 6.13546 0.494275C6.56758 0.818584 6.89814 1.27802 7.08304 1.81126C7.26793 2.34451 7.29836 2.92618 7.17025 3.47866C7.04214 4.03113 6.7616 4.52811 6.36607 4.90327C6.70787 4.99793 7.03235 5.15482 7.32567 5.36727C7.45725 4.7506 7.77774 4.20045 8.23486 3.80652C8.69198 3.4126 9.25876 3.19815 9.84277 3.19815C10.4268 3.19815 10.9936 3.4126 11.4507 3.80652C11.9078 4.20045 12.2283 4.7506 12.3599 5.36727C12.6508 5.15537 12.9728 4.99848 13.3121 4.90327C12.9166 4.52811 12.636 4.03113 12.5079 3.47866C12.3798 2.92618 12.4102 2.34451 12.5951 1.81126C12.78 1.27802 13.1106 0.818584 13.5427 0.494275C13.9748 0.169966 14.4879 -0.00378418 15.0135 -0.00378418C15.5392 -0.00378418 16.0523 0.169966 16.4844 0.494275C16.9165 0.818584 17.2471 1.27802 17.432 1.81126C17.6169 2.34451 17.6473 2.92618 17.5192 3.47866C17.3911 4.03113 17.1105 4.52811 16.715 4.90327C17.3874 5.09424 17.9824 5.52127 18.4071 6.1176C18.8318 6.71394 19.0622 7.44596 19.0623 8.19927V10.9993C19.0623 11.2645 18.9651 11.5188 18.7921 11.7064C18.619 11.8939 18.3843 11.9993 18.1396 11.9993H17.586V16.3993C17.586 16.5054 17.5471 16.6071 17.4779 16.6821C17.4087 16.7571 17.3148 16.7993 17.2169 16.7993H13.5262C13.4283 16.7993 13.3344 16.7571 13.2652 16.6821C13.196 16.6071 13.1571 16.5054 13.1571 16.3993V15.1993H12.9725H12.4189V19.5993C12.4189 19.7054 12.38 19.8071 12.3108 19.8821C12.2416 19.9571 12.1477 19.9993 12.0499 19.9993ZM7.99001 19.1993H11.6808V14.7993C11.6808 14.6932 11.7197 14.5914 11.7889 14.5164C11.8581 14.4414 11.952 14.3993 12.0499 14.3993H12.9725C13.0215 14.3993 13.0684 14.3782 13.103 14.3407C13.1376 14.3032 13.1571 14.2523 13.1571 14.1993V11.3993C13.1571 10.7097 12.9043 10.0484 12.4544 9.56079C12.0045 9.07319 11.3943 8.79927 10.7581 8.79927H8.9127C8.27644 8.79927 7.66625 9.07319 7.21635 9.56079C6.76645 10.0484 6.5137 10.7097 6.5137 11.3993V14.1993C6.5137 14.2523 6.53314 14.3032 6.56775 14.3407C6.60235 14.3782 6.64929 14.3993 6.69824 14.3993H7.62093C7.71881 14.3993 7.81269 14.4414 7.88191 14.5164C7.95112 14.5914 7.99001 14.6932 7.99001 14.7993V19.1993ZM13.8952 15.9993H16.8479V11.5993C16.8479 11.4932 16.8867 11.3914 16.956 11.3164C17.0252 11.2414 17.1191 11.1993 17.2169 11.1993H18.1396C18.188 11.1973 18.2339 11.1756 18.2681 11.1385C18.3023 11.1014 18.3223 11.0517 18.3242 10.9993V8.19927C18.3242 7.5097 18.0714 6.84838 17.6215 6.36079C17.1716 5.87319 16.5614 5.59927 15.9252 5.59927H14.0798C13.4554 5.60553 12.8585 5.87866 12.4189 6.35927C12.3366 7.03517 12.0295 7.65527 11.5553 8.10327C12.2263 8.29574 12.8197 8.72341 13.2429 9.31961C13.6662 9.9158 13.8955 10.647 13.8952 11.3993V15.9993ZM2.82292 15.9993H5.77554V11.3993C5.77653 10.6438 6.00907 9.91019 6.43663 9.31358C6.86419 8.71697 7.46253 8.29123 8.13764 8.10327C7.66298 7.66913 7.34852 7.0642 7.25185 6.39927C7.03635 6.15307 6.77796 5.95561 6.49162 5.8183C6.20528 5.68098 5.89667 5.60654 5.58362 5.59927H3.73823C3.10326 5.60138 2.49496 5.87625 2.04665 6.36361C1.59835 6.85098 1.34661 7.51109 1.34661 8.19927V10.9993C1.34658 11.051 1.365 11.1006 1.39803 11.1379C1.43106 11.1752 1.47612 11.1972 1.52377 11.1993H2.45385C2.55173 11.1993 2.64561 11.2414 2.71482 11.3164C2.78404 11.3914 2.82292 11.4932 2.82292 11.5993V15.9993ZM9.83539 7.99927C10.2004 7.99927 10.5572 7.88197 10.8606 7.66221C11.1641 7.44244 11.4006 7.13009 11.5403 6.76463C11.68 6.39918 11.7165 5.99705 11.6453 5.60909C11.5741 5.22112 11.3984 4.86476 11.1403 4.58505C10.8822 4.30535 10.5534 4.11487 10.1954 4.0377C9.83744 3.96053 9.46639 4.00013 9.12919 4.15151C8.79199 4.30288 8.50378 4.55923 8.30101 4.88813C8.09824 5.21702 7.99001 5.6037 7.99001 5.99927C7.99001 6.5297 8.18443 7.03841 8.53051 7.41348C8.87658 7.78855 9.34597 7.99927 9.83539 7.99927ZM15.0025 4.79927C15.3675 4.79927 15.7242 4.68197 16.0277 4.46221C16.3312 4.24244 16.5677 3.93009 16.7074 3.56463C16.8471 3.19918 16.8836 2.79705 16.8124 2.40909C16.7412 2.02112 16.5654 1.66476 16.3074 1.38505C16.0493 1.10535 15.7205 0.914867 15.3625 0.837696C15.0045 0.760526 14.6335 0.800132 14.2963 0.951508C13.9591 1.10288 13.6709 1.35923 13.4681 1.68813C13.2653 2.01702 13.1571 2.4037 13.1571 2.79927C13.1571 3.3297 13.3515 3.83841 13.6976 4.21348C14.0437 4.58855 14.513 4.79927 15.0025 4.79927ZM4.66831 4.79927C5.03329 4.79927 5.39008 4.68197 5.69355 4.46221C5.99702 4.24244 6.23355 3.93009 6.37322 3.56463C6.5129 3.19918 6.54944 2.79705 6.47824 2.40909C6.40703 2.02112 6.23128 1.66476 5.9732 1.38505C5.71511 1.10535 5.3863 0.914867 5.02833 0.837696C4.67036 0.760526 4.29931 0.800132 3.96211 0.951508C3.62491 1.10288 3.3367 1.35923 3.13393 1.68813C2.93115 2.01702 2.82292 2.4037 2.82292 2.79927C2.82292 3.32832 3.01633 3.83582 3.36081 4.21066C3.70529 4.5855 4.17278 4.79715 4.66093 4.79927H4.66831Z" fill="#2B486A"/>
          </svg>
          <span className="apartments__data">5</span>
          <svg className="apartments__icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.295 3.70148C5.20489 3.70148 5.13184 3.78066 5.13184 3.87831V5.00249H8.54202V3.87827C8.54202 3.78062 8.469 3.70148 8.37889 3.70148H5.295Z" fill="#2B486A"/>
            <path d="M11.7258 3.70148C11.6357 3.70148 11.5627 3.78066 11.5627 3.87831V5.00249H14.9729V3.87831C14.9729 3.78066 14.8998 3.70152 14.8097 3.70152H11.7258V3.70148Z" fill="#2B486A"/>
            <path d="M4.03965 4.99082V3.8782C4.03965 3.12809 4.60275 2.51781 5.29488 2.51781H8.37876C9.07089 2.51781 9.63398 3.12809 9.63398 3.8782V4.99082H10.4706V3.8782C10.4706 3.12809 11.0337 2.51781 11.7258 2.51781H14.8097C15.5018 2.51781 16.0649 3.12809 16.0649 3.8782V4.99082H16.9341C17.1036 4.99082 17.2692 5.00945 17.4293 5.04477V1.41445C17.4293 0.633281 16.845 0 16.1242 0H3.98036C3.25958 0 2.67529 0.633281 2.67529 1.41445V5.04477C2.83536 5.00949 3.00097 4.99082 3.17052 4.99082H4.03965Z" fill="#2B486A"/>
            <path d="M18.6027 8.65894H1.50207C1.12838 8.65894 0.825439 8.98726 0.825439 9.39226V14.1987C0.825439 14.6037 1.12838 14.932 1.50207 14.932H18.6027C18.9764 14.932 19.2793 14.6037 19.2793 14.1987V9.39226C19.2793 8.98726 18.9764 8.65894 18.6027 8.65894Z" fill="#2B486A"/>
            <path d="M16.9341 6.17444H3.17054C2.46757 6.17444 1.88699 6.74084 1.79523 7.47545H18.3094C18.2177 6.74084 17.6371 6.17444 16.9341 6.17444Z" fill="#2B486A"/>
            <path d="M1.50171 16.1156V16.5066C1.50171 16.8334 1.74619 17.0984 2.04775 17.0984C2.34932 17.0984 2.5938 16.8334 2.5938 16.5066V16.1156H1.50211C1.50196 16.1156 1.50185 16.1156 1.50171 16.1156Z" fill="#2B486A"/>
            <path d="M17.511 16.1156V16.5066C17.511 16.8334 17.7555 17.0984 18.057 17.0984C18.3586 17.0984 18.6031 16.8334 18.6031 16.5066V16.1156C18.6029 16.1156 18.6028 16.1156 18.6027 16.1156H17.511V16.1156Z" fill="#2B486A"/>
          </svg>
          <span className="apartments__data">2</span>
          <svg className="apartments__icon" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4417 0H3.01459C1.62866 0 0.501221 1.2219 0.501221 2.72395V17.2761C0.501221 18.778 1.62866 19.9999 3.01459 19.9999H16.4417C17.8275 19.9999 18.955 18.778 18.955 17.2761V2.72395C18.9551 1.2219 17.8275 0 16.4417 0ZM3.34584 17.0835C3.26122 17.0835 3.1924 17.0089 3.1924 16.917V3.08295C3.1924 2.99124 3.26122 2.91665 3.34584 2.91665H16.1105C16.1951 2.91665 16.264 2.99124 16.264 3.08295V16.917C16.264 17.0088 16.1951 17.0835 16.1105 17.0835H3.34584ZM8.31902 4.15628H7.27741C6.82267 4.15628 6.45421 4.55573 6.45421 5.04844V14.9516C6.45421 15.4443 6.82267 15.8437 7.27741 15.8437H8.31902C8.77375 15.8437 9.14221 15.4443 9.14221 14.9516V12.6713C10.0652 12.6612 11.0184 12.5648 11.8359 12.0646C12.9425 11.3875 13.5036 10.1587 13.5036 8.41237C13.5036 4.15628 9.73699 4.15628 8.31902 4.15628ZM10.4747 9.64212C10.1341 9.84851 9.5897 9.88003 9.1421 9.8817V7.18238C10.4794 7.25863 10.9087 7.61478 10.9087 8.51907C10.9087 9.379 10.6045 9.56338 10.4747 9.64212Z" fill="#2B486A"/>
          </svg>
          <svg className="apartments__icon" width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1377 3.08329C16.0432 2.83329 15.761 2.74994 15.1997 2.74994C14.2201 2.83327 12.4831 6.58331 12.57 4.24998C11.0875 3.33331 12.437 6.91663 10.8492 7.24996C9.84805 8.41663 10.3102 6.49998 10.2064 5.91665C10.0449 5.08331 10.4078 4.50002 10.9776 4.08335L12.5623 2.33327C11.768 0.0832723 9.80499 4.83333 10.2779 2.08333C10.6546 1.25 10.0311 0.0833333 9.44207 0H9.45129C9.29597 0 9.14834 0.0832723 9.0084 0.249939C8.88153 0.333272 8.76081 0.50002 8.67546 0.75002H8.66624C8.62318 0.833354 8.57858 0.999939 8.55244 1.08327H8.54398C8.52476 1.16661 8.49938 1.24996 8.49323 1.41663H8.50553C8.50092 1.49996 8.49631 1.58331 8.51322 1.74998H8.52552C8.54398 1.83331 8.56474 2 8.6078 2.08333H8.6201C8.67469 2.41667 8.69007 2.66661 8.68085 2.74994C8.68008 2.74994 8.69315 2.83335 8.69238 2.83335C8.687 2.83335 8.66239 2.91667 8.64471 2.91667C8.62548 2.91667 8.59319 2.99998 8.56089 2.99998C8.52783 2.99998 8.49246 2.91667 8.44863 2.91667C8.31715 2.83333 8.15106 2.58335 7.95115 2.41669C7.69064 2.16669 7.38069 1.83331 7.09712 1.74998C6.94664 1.74998 6.80855 1.74996 6.67452 1.83329C6.61009 1.83329 6.55811 1.91669 6.50021 2.00002C6.4367 2.08335 6.37734 2.24994 6.32352 2.33327L7.9004 4.08335C8.18567 4.25002 8.41865 4.58327 8.55628 4.83327C8.59011 4.91661 8.62318 4.99998 8.64471 5.08331C8.667 5.16665 8.68161 5.25002 8.69084 5.33335C8.71237 5.50002 8.6993 5.66665 8.65701 5.91665C8.63087 5.99998 8.64547 6.24994 8.66008 6.49994C8.667 6.66661 8.6524 6.74996 8.65855 6.83329C8.66316 6.99996 8.68315 7.16663 8.67777 7.24996C8.67392 7.33329 8.67239 7.41667 8.64855 7.5C8.61395 7.58333 8.54475 7.58331 8.44709 7.58331C8.35252 7.58331 8.21258 7.41663 8.03496 7.24996H8.02266C7.83197 7.16663 7.67803 7.08335 7.56254 7.00002C7.50356 6.91669 7.46312 6.83331 7.41975 6.74998C7.37346 6.66665 7.32572 6.58327 7.2948 6.49994C7.23806 6.33327 7.2103 6.08331 7.1867 5.91665H7.17455C7.16348 5.74998 7.16517 5.66663 7.15825 5.58329C7.15071 5.49996 7.15648 5.41661 7.15086 5.24994C7.14548 5.16661 7.14102 5.08333 7.13456 5C7.12803 4.91667 7.10788 4.74998 7.09719 4.66665C7.0922 4.66665 7.07597 4.66667 7.06951 4.58333C6.9977 4.16667 6.82977 3.91665 6.31921 4.24998H6.33144C6.33567 4.41665 6.32536 4.5 6.31775 4.58333C6.31729 4.58333 6.33036 4.58331 6.3299 4.66665C6.32136 4.74998 6.2953 4.74994 6.27646 4.83327C6.25585 4.91661 6.23917 4.91667 6.20749 5H6.08992C6.00696 5 5.89885 4.91661 5.78413 4.83327C5.44404 4.49994 4.98984 3.83333 4.54602 3.33333C4.24746 3 3.95004 2.74994 3.70399 2.74994C3.69884 2.74994 3.69692 2.66663 3.69176 2.66663C3.11646 2.66663 2.85365 2.83329 2.76653 3.08329C2.74277 3.16663 2.72347 3.25 2.72194 3.33333C2.72063 3.33333 2.73801 3.41663 2.75608 3.49996C2.78991 3.66663 2.85903 3.83335 2.96061 4.08335C3.1506 4.41669 3.44048 4.74998 3.7379 5.08331C4.04193 5.41665 4.35149 5.66667 4.58647 5.83333C4.91533 6.08333 5.06735 6.24998 5.0838 6.33331C5.08811 6.33331 5.07557 6.41663 5.06596 6.41663C4.97831 6.58329 4.38478 6.5 4.08875 6.66667C4.02316 6.75 3.97403 6.83327 3.94773 6.91661C3.97265 6.99994 4.00694 7 4.04508 7.08333C4.15972 7.25 4.31773 7.33335 4.52042 7.41669C4.92664 7.50002 5.46387 7.41667 5.94629 7.5C6.10453 7.58333 6.25232 7.58329 6.3908 7.66663C6.59856 7.74996 6.77579 7.91661 6.90028 8.1666C6.9418 8.33327 6.9754 8.41663 7.00423 8.49996C7.16094 8.58329 7.27305 8.66667 7.34655 8.75C7.42006 8.83333 7.4502 8.9166 7.45612 8.99994H7.4472C7.43575 8.99994 7.4286 9.00002 7.40499 9.08335C7.16963 9.16669 6.37027 9.00002 6.01003 9.08335C5.71877 9.16669 5.44965 9.16669 5.20383 9.08335C4.95808 9.00002 4.73164 8.91667 4.52003 8.75C4.42031 8.66667 4.3172 8.58329 4.22316 8.49996C4.12382 8.41663 4.01732 8.33335 3.92298 8.25002C3.73959 8.00002 3.55774 7.74998 3.38589 7.58331C3.36159 7.49998 3.34276 7.41661 3.30631 7.33327C3.26779 7.24994 3.21342 7.16667 3.16352 7.08333C3.12146 7.08333 3.07156 6.99994 3.02396 6.91661C2.97099 6.91661 2.91186 6.91663 2.85442 6.83329H2.66704C2.49134 6.74996 2.30611 6.83329 2.15694 6.83329C2.04568 6.91663 1.97248 7 1.9072 7.08333C1.8746 7.08333 1.84561 7.16665 1.82608 7.16665C1.80701 7.24998 1.79401 7.24994 1.79048 7.33327H1.80263C1.80178 7.41661 1.80901 7.41667 1.82131 7.5C1.85437 7.66667 1.95802 7.91663 2.22537 8.08329C2.67542 8.33329 2.88787 8.58333 2.93769 8.75C2.95015 8.75 2.93877 8.83331 2.93208 8.83331C2.92362 8.83331 2.93246 8.91663 2.91424 8.91663H2.89317C2.79121 8.99996 2.59237 9.08335 2.33517 9.08335H2.31411H1.90051H1.87936H1.02456C0.786432 9.08335 0.612697 9.16663 0.482013 9.33329H0.439846C0.333105 9.41663 0.262119 9.5 0.226627 9.58333C0.222698 9.58333 0.221048 9.66665 0.217716 9.66665C0.205038 9.66665 0.182346 9.74996 0.182073 9.74996C0.181787 9.74996 0.194253 9.83327 0.194245 9.83327C0.19606 9.83327 0.210208 9.91667 0.225113 10C0.284572 10.25 0.484759 10.4166 0.753302 10.6666C0.886262 10.7499 1.02264 10.8333 1.17996 10.8333C1.50098 11 1.85091 11 2.17024 10.8333C2.77599 10.6667 2.99029 10.75 3.00074 10.8333C2.99229 10.9167 2.93716 10.9999 2.84189 11.0833C2.74139 11.2499 2.60898 11.4166 2.47219 11.4999C2.34963 11.6666 2.2193 11.8334 2.11465 12H2.10573C1.99939 12.1667 1.90351 12.3334 1.86906 12.4167C1.85314 12.5 1.84153 12.5833 1.84884 12.6666H1.86099C1.86245 12.75 1.87121 12.7499 1.87314 12.7499C1.90635 12.9166 2.0516 13.1667 2.42806 13.25L4.0124 11.5834C4.01878 11.5834 4.01486 11.5833 4.02124 11.4999C4.12774 11.4166 4.22831 11.25 4.3488 11.1667C4.71003 10.8334 5.14439 10.6667 5.69101 10.75C6.10353 10.8334 7.02646 10.5833 7.25229 10.8333H7.28881C7.29188 10.9167 7.29942 10.9166 7.30096 10.9166C7.30157 10.9166 7.29173 10.9166 7.28312 11C7.24952 11.0833 7.14479 11.25 6.9378 11.4166H6.94995C6.93319 11.5833 6.90282 11.6667 6.86645 11.6667C6.39241 12.75 4.38386 12.0833 4.09544 12.6666C4.07699 12.6666 4.05108 12.75 4.04762 12.8334H4.05977C4.05861 12.8334 4.04916 12.9166 4.06953 13C4.08983 13.0833 4.12928 13.1667 4.18241 13.25H4.19456C4.46667 13.25 4.64022 13.25 4.7534 13.3333C4.85021 13.3333 4.91518 13.4166 4.90511 13.5C4.84521 14 3.15476 15.0833 2.81328 15.9166C2.78507 15.9166 2.75569 15.9999 2.7477 16.0833H2.75984C2.75885 16.2499 2.75554 16.4166 2.77053 16.4999H2.78268C2.79844 16.5833 2.81213 16.6666 2.84112 16.75C2.84373 16.75 2.85065 16.8333 2.85334 16.8333C2.91632 16.9166 3.0122 17.0833 3.12023 17.0833C3.79634 17.4167 5.25127 15.9166 5.67287 15.1666C5.94306 14.75 6.09331 14.5833 6.17796 14.5833C6.21033 14.6667 6.23394 14.6666 6.25101 14.75H6.26316C6.28054 14.8333 6.28823 14.9166 6.30053 15.0833C6.33328 15.3333 6.38188 15.6667 6.5392 15.8333H6.65115C6.74288 15.9167 6.84968 15.9167 7.00716 15.8333C7.00731 15.75 7.016 15.75 7.01608 15.75C7.01746 15.5834 7.00962 15.4166 7.02 15.2499C7.02077 15.2499 7.02807 15.25 7.02892 15.1666C7.04007 15 7.06436 14.8333 7.08712 14.6666H7.09604C7.12042 14.5 7.1481 14.3333 7.18754 14.1667C7.22899 14 7.27266 13.75 7.33341 13.6667C7.43736 13.3334 7.58645 13.0834 7.759 12.8334C7.79252 12.8334 7.81244 12.75 7.84896 12.6666C7.9573 12.5833 8.06033 12.4166 8.1972 12.3333C8.33407 12.1666 8.49016 12.0833 8.65778 11.9166L8.6547 14.8333C8.32638 15.4166 7.68411 15.9166 7.23045 16.4999C7.04699 16.5833 6.91719 16.6666 6.81201 16.8333C6.77049 16.8333 6.71928 16.9166 6.68883 16.9166C6.68306 16.9166 6.68529 16.9167 6.67991 17C6.64623 17 6.62116 17.0833 6.60209 17.1666H6.59317C6.56803 17.25 6.53704 17.3334 6.54296 17.4167C6.54804 17.5834 6.58526 17.6666 6.63793 17.7499C6.71251 17.9166 6.83131 18 6.9681 18C7.02131 18.0833 7.06183 18.0833 7.12219 18.0833C7.22983 18.0833 7.35148 18 7.47496 17.9167C7.59853 17.8333 7.72609 17.75 7.85688 17.5C7.96038 17.4167 8.05188 17.25 8.13031 17.1666C8.28639 17 8.40788 16.9166 8.48554 16.8333C8.51322 16.8333 8.54475 16.9166 8.56397 16.9166C8.61164 16.9999 8.6301 17.0833 8.63779 17.25C8.64548 17.4166 8.65393 17.6667 8.64932 17.8334C8.64394 18.0834 8.62548 18.3333 8.63394 18.5833H8.64625C8.65547 18.8333 8.66854 19 8.71545 19.25C8.76235 19.4166 8.85077 19.5833 8.96227 19.75C9.01994 19.8333 9.07607 19.8334 9.15603 19.9167C9.24061 19.9167 9.32827 20 9.44284 20C11.1206 20 9.37979 15.1667 11.0306 17.5C12.0764 18.9167 13.0252 17.0833 11.6604 16.4999C11.2067 15.9166 10.5447 15.4999 10.2164 14.8333L10.2071 12C11.5527 12.8334 11.8603 14.25 11.8718 15.8333C13.039 16.4167 12.1286 13.5 13.2097 15.1666C13.7672 16.1666 16.177 18.4999 16.1431 16.0833C16.0024 15.0833 12.5323 13.1667 14.7091 13.25C15.5811 11.6667 12.2186 13.1666 11.9564 11.4166C10.8523 10.3333 12.5815 10.9167 13.1951 10.75C13.9233 10.5834 14.4392 11 14.8652 11.5834L16.4545 13.25C18.5444 12.4167 14.1463 10.3333 16.7306 10.8333C17.9816 11.4167 19.7609 9.50002 17.8563 9.08335C16.8467 9.16669 14.8444 9.16663 16.6445 8.08329C17.9816 6.99996 15.8925 6.08331 15.5034 7.58331C14.796 8.41665 14.0478 9.41669 12.8829 9.08335C12.3063 9.00002 10.6154 9.41663 11.8688 8.49996C12.3301 6.74996 14.543 8.08327 14.9421 6.91661C14.7314 6.24994 12.9791 6.91667 14.2947 5.83333C14.9998 5.41667 16.4199 3.83329 16.1377 3.08329H16.1377Z" fill="#2B486A"/>
          </svg>
        </div>
        <a className="apartments__link" href="http://">Подробнее</a>
      </div>
    </li>
  )
}
