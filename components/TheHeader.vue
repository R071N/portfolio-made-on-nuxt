<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav__logo">
          <NuxtLink to="/" class="logotype">ROLIN</NuxtLink>
        </div>
        <ul class="nav__list">
          <li>
            <NuxtLink class="nav__item" to="about">О себе</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav__item" to="skills">Навыки</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav__item" to="works">Примеры работ</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
