<template>
  <section class="header">

    <div class="left__container">
      <ul class="header__menu">
        <li>
          О компании
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.92808 4.89529L10.195 0.791786L11.5738 2.23238L5.92808 7.64551L0.296875 2.23238L1.67565 0.791787L5.92808 4.89529Z" fill="#3C3C3B" />
          </svg>
        </li>
        <li>
          Покупателю
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.92808 4.89529L10.195 0.791786L11.5738 2.23238L5.92808 7.64551L0.296875 2.23238L1.67565 0.791787L5.92808 4.89529Z" fill="#3C3C3B" />
          </svg>
        </li>
        <li>Акции</li>
        <li>Поддержка и сервис</li>
        <li>Контакты</li>
      </ul>

      <div class="header__search">
        <input type="text" placeholder="Что вы ищете...">
        <button class="">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M13.8399 12.345L9.60786 8.11308C9.50529 8.01052 9.36622 7.9529 9.22117 7.9529C9.08844 7.9529 8.9611 8.0016 8.86176 8.08836L8.26465 7.49126C9.69126 5.68663 9.58741 3.04317 7.90063 1.35636C7.90063 1.35636 7.90063 1.35636 7.9006 1.35636C6.09638 -0.447861 3.16067 -0.447916 1.35637 1.35636C-0.451985 3.16474 -0.452259 6.09194 1.35637 7.90059C3.01925 9.56345 5.66426 9.70452 7.49096 8.26429L8.08845 8.86178C7.90055 9.07657 7.90837 9.40305 8.11314 9.6078L12.3451 13.8398C12.5586 14.0532 12.905 14.0533 13.1185 13.8398L13.4791 13.4792C13.4791 13.4792 13.4792 13.4791 13.4792 13.4791C13.4792 13.4791 13.4792 13.4791 13.4792 13.479L13.8398 13.1184C14.0534 12.9049 14.0534 12.5586 13.8399 12.345ZM7.12726 7.1272C5.74627 8.5082 3.51094 8.50836 2.12976 7.1272C0.748788 5.74629 0.748542 3.51086 2.12976 2.12967C3.50753 0.7519 5.74941 0.751818 7.12726 2.12967C8.50823 3.51061 8.50851 5.74604 7.12726 7.1272Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Поиск
        </button>
      </div>
    </div>

    <div class="right-container">
      <div class="user-menu">
        <div class="user-menu__item">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.1672 11.0625C11.1623 11.0625 12.1351 10.7674 12.9624 10.2146C13.7898 9.66174 14.4347 8.87597 14.8155 7.95663C15.1963 7.03729 15.2959 6.02567 15.1018 5.0497C14.9077 4.07374 14.4285 3.17725 13.7249 2.47362C13.0212 1.76999 12.1248 1.29081 11.1488 1.09668C10.1728 0.902544 9.1612 1.00218 8.24186 1.38298C7.32252 1.76379 6.53675 2.40865 5.9839 3.23604C5.43106 4.06342 5.13599 5.03616 5.13599 6.03125C5.13754 7.36515 5.66811 8.64396 6.61132 9.58717C7.55452 10.5304 8.83334 11.061 10.1672 11.0625ZM10.1672 3.09375C10.7481 3.09375 11.316 3.26601 11.799 3.58874C12.282 3.91148 12.6585 4.37019 12.8808 4.90688C13.1031 5.44356 13.1612 6.03412 13.0479 6.60386C12.9346 7.17361 12.6548 7.69695 12.2441 8.10771C11.8333 8.51847 11.31 8.79821 10.7402 8.91153C10.1705 9.02486 9.57994 8.9667 9.04325 8.7444C8.50657 8.52209 8.04785 8.14564 7.72512 7.66263C7.40239 7.17963 7.23013 6.61177 7.23013 6.03086C7.23106 5.25221 7.54081 4.50573 8.09144 3.95518C8.64206 3.40463 9.38859 3.09497 10.1672 3.09414V3.09375Z" fill="white" stroke="white" stroke-width="0.6" />
            <path d="M3.09456 21C3.09456 17.1 6.26722 13.9273 10.1672 13.9273C14.0672 13.9273 17.2399 17.1 17.2399 21H19.334C19.3339 19.187 18.7962 17.4148 17.7889 15.9074C16.7816 14.4 15.35 13.2251 13.675 12.5313C12 11.8375 10.1569 11.656 8.37879 12.0096C6.60064 12.3632 4.96726 13.2361 3.68519 14.518C2.83125 15.3672 2.15424 16.3774 1.69333 17.49C1.23242 18.6027 0.996776 19.7957 1.00003 21H3.09456Z" fill="white" stroke="white" stroke-width="0.6" />
          </svg>
          <span>Кабинет</span>
        </div>

        <div class="user-menu__item">
          <sup>2</sup>
          <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.61108 15.4746V2L15.1933 8.73728L2.61108 15.4746ZM3.91742 4.18048V13.2941L12.426 8.73728L3.91742 4.18048Z" fill="white" stroke="white" stroke-width="1.2" />
            <path d="M3.91742 3.07935H2.61108V21.6634H3.91742V3.07935Z" fill="white" stroke="white" stroke-width="1.2" />
            <path d="M5.4851 21.0105H1V22.3162H5.4851V21.0105Z" fill="white" stroke="white" stroke-width="1.2" />
          </svg>
          <span>Избранное</span>
        </div>

        <div class="user-menu__item">
          <sup>5</sup>
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="20" x2="1.5" y2="6.55671e-08" stroke="white" stroke-width="3" />
            <line x1="8.5" y1="20" x2="8.5" y2="8" stroke="white" stroke-width="3" />
            <line x1="15.5" y1="20" x2="15.5" y2="4" stroke="white" stroke-width="3" />
          </svg>
          <span>Сравнение</span>
        </div>

        <div class="user-menu__item">
          <sup>5</sup>
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.14053 21.4C9.6959 21.4 10.2388 21.2353 10.7006 20.9267C11.1624 20.6182 11.5223 20.1796 11.7348 19.6665C11.9473 19.1534 12.0029 18.5888 11.8946 18.0441C11.7862 17.4994 11.5188 16.9991 11.1261 16.6064C10.7334 16.2137 10.233 15.9462 9.68835 15.8379C9.14365 15.7295 8.57905 15.7852 8.06595 15.9977C7.55286 16.2102 7.1143 16.5701 6.80576 17.0319C6.49721 17.4937 6.33252 18.0366 6.33252 18.5919C6.33386 19.3363 6.63013 20.0497 7.15644 20.576C7.68276 21.1024 8.39621 21.3986 9.14053 21.4ZM9.14053 17.8052C9.29564 17.8052 9.44726 17.8512 9.57622 17.9374C9.70519 18.0235 9.8057 18.146 9.86506 18.2893C9.92441 18.4326 9.93994 18.5903 9.90968 18.7424C9.87942 18.8945 9.80473 19.0343 9.69506 19.1439C9.58538 19.2536 9.44565 19.3283 9.29353 19.3586C9.1414 19.3888 8.98372 19.3733 8.84042 19.3139C8.69713 19.2546 8.57465 19.1541 8.48848 19.0251C8.40231 18.8961 8.35631 18.7445 8.35631 18.5894C8.35698 18.3816 8.43982 18.1826 8.58674 18.0356C8.73367 17.8887 8.93275 17.8059 9.14053 17.8052Z" fill="white" />
            <path d="M21.1114 18.5919C21.1114 18.0366 20.9467 17.4937 20.6382 17.0319C20.3296 16.5701 19.8911 16.2102 19.378 15.9977C18.8649 15.7852 18.3003 15.7295 17.7556 15.8379C17.2109 15.9462 16.7105 16.2137 16.3178 16.6064C15.9251 16.9991 15.6577 17.4994 15.5493 18.0441C15.441 18.5888 15.4966 19.1534 15.7091 19.6665C15.9216 20.1796 16.2816 20.6182 16.7433 20.9267C17.2051 21.2353 17.748 21.4 18.3034 21.4C19.0477 21.3986 19.7611 21.1024 20.2875 20.576C20.8138 20.0497 21.1101 19.3363 21.1114 18.5919ZM17.5166 18.5919C17.5166 18.4368 17.5626 18.2852 17.6488 18.1563C17.735 18.0273 17.8574 17.9268 18.0007 17.8674C18.144 17.8081 18.3017 17.7925 18.4538 17.8228C18.606 17.8531 18.7457 17.9277 18.8554 18.0374C18.965 18.1471 19.0397 18.2868 19.07 18.439C19.1003 18.5911 19.0847 18.7488 19.0254 18.8921C18.966 19.0354 18.8655 19.1578 18.7365 19.244C18.6076 19.3302 18.4559 19.3762 18.3008 19.3762C18.0948 19.3729 17.8983 19.2889 17.7536 19.1422C17.6088 18.9956 17.5274 18.798 17.5267 18.5919H17.5166Z" fill="white" />
            <path d="M5.44563 0H0.988281V2.36464H3.54505L6.33237 15.1101H21.6198L22.3174 4.89777H6.52155L5.44563 0ZM19.7872 7.26241L19.4118 12.7454H8.24478L7.03881 7.26241H19.7872Z" fill="white" />
          </svg>
          <span>Корзина</span>
        </div>
      </div>

      <div class="call-to-action">
        <span>Бесплатно по РФ</span>
        <span class="tel">8 800 555-63-74</span>
        <span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.804665 8.12956L4.87935 13.9999L8.95403 8.12956C9.43862 7.43122 9.71503 6.62136 9.75394 5.78592C9.79284 4.95049 9.59279 4.12064 9.175 3.38442C8.75722 2.64821 8.13729 2.03309 7.38099 1.60435C6.62469 1.1756 5.76023 0.949219 4.87935 0.949219C3.99847 0.949219 3.13401 1.1756 2.37771 1.60435C1.62142 2.03309 1.00148 2.64821 0.583698 3.38442C0.165912 4.12064 -0.034142 4.95049 0.00476186 5.78592C0.0436657 6.62136 0.320077 7.43122 0.804665 8.12956ZM2.30972 3.13986C2.9466 2.53892 3.79528 2.18309 4.69214 2.14098C5.589 2.09887 6.47053 2.37346 7.16677 2.91181C7.863 3.45016 8.32464 4.21414 8.46269 5.05647C8.60073 5.8988 8.4054 6.75982 7.91435 7.47353L4.87935 11.8515L1.84435 7.47353C1.38771 6.80972 1.18479 6.01728 1.26949 5.22854C1.35419 4.43981 1.72137 3.70254 2.30972 3.13986Z" fill="white" />
          <path d="M4.87951 7.95679C5.38213 7.95679 5.87346 7.81532 6.2914 7.55026C6.70933 7.2852 7.0351 6.90845 7.22751 6.46765C7.41993 6.02684 7.47035 5.54177 7.37241 5.07377C7.27446 4.60576 7.03255 4.17583 6.67726 3.83833C6.32196 3.50083 5.86923 3.27091 5.37631 3.17765C4.88339 3.08438 4.3724 3.13195 3.90795 3.31435C3.44351 3.49674 3.04645 3.80577 2.76699 4.20237C2.48752 4.59897 2.3382 5.06532 2.33789 5.54247C2.3383 6.18241 2.60616 6.79605 3.08267 7.2487C3.55919 7.70135 4.20541 7.95601 4.87951 7.95679ZM4.87951 4.31167C5.13593 4.31167 5.3866 4.38385 5.5998 4.5191C5.81301 4.65434 5.97918 4.84656 6.07731 5.07146C6.17544 5.29636 6.20111 5.54384 6.15109 5.78259C6.10106 6.02134 5.97759 6.24065 5.79627 6.41278C5.61495 6.58491 5.38394 6.70213 5.13244 6.74962C4.88095 6.79711 4.62027 6.77274 4.38337 6.67958C4.14646 6.58643 3.94398 6.42867 3.80152 6.22627C3.65906 6.02386 3.58302 5.7859 3.58302 5.54247C3.58343 5.21616 3.72016 4.90333 3.96321 4.67259C4.20626 4.44186 4.53579 4.31206 4.87951 4.31167Z" fill="white" />
          </svg>
          Москва
          <div class="dotted"></div>
        </span>
      </div>

      <div class="consult">
        <span>Запросить консультацию</span>
      </div>
    </div>

  </section>
</template>

<script>

  export default {
    name: 'Header',
    components: {},
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    height: 103px;
    width: 100%;

    .left__container {
      display: flex;
      flex: 0 1 776px;
      flex-direction: column;
      justify-content: space-between;
      align-content: space-between;
    }

    &__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 49px;
      padding: 0 50px;
      list-style-type: none;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.06em;

      svg {
        margin-left: 11px;
      }
    }

    &__search {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 54px;
      background-color: var(--background-light);

      input {
        max-width: 555px;
        width: 100%;
        height: 38px;
        padding-left: 15px;
        border: 1px solid #e0e0e0;
      }

      ::placeholder {
        font-size: 14px;
        color: #b0b0b0;
      }

      button {
        width: 120px;
        height: 38px;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.04em;
        color: #fff;
        background-color: var(--color-main);

        svg {
          margin-right: 8px;
        }
      }
    }
  }

  .right-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: auto;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.06em;
    color: #fff;
    background-color: #95b03c;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  .user-menu {
    display: flex;
    flex: 1 1 357px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    height: 100%;
    border-right: 1px solid rgba(255, 255, 255, 0.25);

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      /*padding-right: 22px;*/

      &:last-child {
        padding-right: 0;
      }

      svg {
        margin-bottom: 8px;
      }

      sup {
        font-size: 14px;
        margin-left: 35px;
      }
    }
  }

  .call-to-action {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: 0 25px;
    width: 188px;
    height: 100%;

    .dotted {
      margin-left: 15px;
      width: 75%;
      border-bottom: 2px dashed #ffffff;
    }

    .tel {
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .consult {
    display: flex;
    flex: 0 1 224px;
    text-align: start;
    align-items: center;
    padding-left: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    height: 100%;
    background-color: #3C3C3B;
  }

  @media (max-width: 1705px) {
    .left__container {
      min-width: 568px;
    }

    .header__menu {
      padding: 0 20px;
    }

    .header__search {
      input {
        max-width: 379px;
        padding-left: 15px;
      }

      button {
        width: 131px;
      }
    }

    .user-menu {
      flex: 1 0 121px;
      min-width: 121px;
      padding: 15px 10px;
      margin-top: 10px;

      &__item {
        span {
          display: none;
        }

        &:first-child {
          padding-left: 12px;
        }
      }
    }

    .call-to-action {
      max-width: 162px;
      padding-left: 20px;
      margin: 0;

      .tel {
        font-size: 16px;
        line-height: 26px;
      }
    }

    .consult {
      flex: 1 0 auto;
      width: 147px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.02em;
      padding-left: 20px;
    }
  }

  @media (max-width: 1279px) {
    .header {
      flex-wrap: wrap;

      .left__container {
        flex: 1 1 auto;
      }

      &__search {
        flex: 1 1 auto;
        width: 100%;

        input {
          max-width: 90%;
          padding-left: 15px;
        }
      }
    }

    .call-to-action {
      flex: 1 1 auto;
      max-width: 350px;
      padding-left: 20px;
      margin: 0;
    }
  }

  @media (max-width: 930px) {

  }
</style>
