<template>
  <nav>
    <ul>
      <li class="li-header" @click="$emit('close')">
        <div>
          <svg width="19" height="8" viewBox="0 0 19 8" fill="none" class="back" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM19 3.5L1 3.5V4.5L19 4.5V3.5Z" fill="#AEAEAE" />
          </svg>
          <span>Назад</span>
        </div>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" class="close" xmlns="http://www.w3.org/2000/svg">
          <line x1="1.35355" y1="0.646447" x2="15.3536" y2="14.6464" stroke="#3C3C3B" />
          <line x1="0.646446" y1="14.6464" x2="14.6464" y2="0.646454" stroke="#3C3C3B" />
        </svg>
      </li>

      <li class="li-header__name">
        <span>О компании</span>
      </li>

      <li>
        <a>Наше производство</a>
      </li>

      <li>
        <a>Наши сотрудники</a>
      </li>

      <li>
        <a>Вакансии</a>
      </li>

      <li>
        <a>Новости</a>
      </li>

    </ul>
  </nav>
</template>

<script>
  export default {
    name: "MobAbout"
  }
</script>

<style scoped lang="scss">
  nav {
    display: none;
    position: absolute;
    background-color: #fff;
    border: 1px solid var(--background-light);
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    width: 320px;
    top: 50px;
    //noinspection CssInvalidFunction
    left: clamp(20%, 21%, 50%);
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      padding-left: 14px;
      border-top: 2px solid #eee;
      list-style-type: none;
      color: var(--color-main);
      font-size: 14px;
      font-weight: 500;
      line-height: 13px;

      &:hover {
        color: var(--color-green);
        background: #fff;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

    .li-header {
      display: flex;
      justify-content: space-between;

      span {
        font-weight: 500;
        font-size: 14px;
        line-height: 13px;
        letter-spacing: 0.02em;
        color: #aeaeae;
        margin-left: 14px;
      }

      .close {
        margin-right: 20px;
      }

      &__name {
        font-weight: 500;
        font-size: 18px;
        line-height: 13px;

        span {
          padding-bottom: 8px;
          border-bottom: 2px solid #95b03c;
        }
      }
    }
  }
</style>
