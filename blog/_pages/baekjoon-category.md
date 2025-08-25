---
layout: page
title: "백준 카테고리"
permalink: /baekjoon-category/
---

# 백준 카테고리 문제 목록

{% assign baekjoon_posts = site.categories.백준 %}

{% if baekjoon_posts %}
  <ul>
    {% for post in baekjoon_posts %}
      <li>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
        <br>
        <small>{{ post.date | date: "%Y년 %m월 %d일" }}</small>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p>아직 '백준' 카테고리에 게시물이 없습니다.</p>
{% endif %}
